import { useState, useRef, useEffect } from "react";
import ReactDOM from 'react-dom';
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { getIAAC } from "../constants";
import { fadeIn } from "../utils/motion";
import translations from "../translate/translations";
import { drive } from "../assets";

// Componente do Popup para visualização de arquivos (MESMO dos anteriores)
const FileViewerPopup = ({ fileUrl, fileType, onClose }) => {
  const popupRef = useRef(null);

  // Fechar ao clicar fora do popup e com ESC
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  // Renderizar o popup diretamente no body
  return ReactDOM.createPortal(
    <>
      {/* Botão de fechar FIXO na janela */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 text-white text-2xl bg-red-500 hover:bg-red-600 rounded-full w-12 h-12 flex items-center justify-center z-[10000] transition-colors duration-200 shadow-lg hover:scale-110"
        aria-label="Fechar visualização"
      >
        ×
      </button>

      {/* Overlay e conteúdo do popup */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-90 p-4">
        <div 
          ref={popupRef}
          className="bg-tertiary rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        >
          {/* Conteúdo do popup */}
          <div className="h-full overflow-auto rounded-lg bg-gray-900 p-4">
            {fileType === 'pdf' ? (
              <iframe 
                src={fileUrl} 
                className="w-full h-[70vh] border-0"
                title="Visualização de PDF"
              />
            ) : (
              <div className="flex justify-center">
                <img 
                  src={fileUrl} 
                  alt="Visualização" 
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

const IAAC_Card = ({
  name,
  description,
  customDescription,
  image,
  source_code_link,
  liveUrl,
  driveIcon,
  liveIcon,
  popfile // NOVA PROPRIEDADE PARA O POPUP
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [fileType, setFileType] = useState('');

  const handleCardClick = () => {
    if (popfile) {
      // Verificar se é PDF ou imagem
      if (popfile.toLowerCase().endsWith('.pdf')) {
        setFileType('pdf');
      } else {
        setFileType('image');
      }
      setShowPopup(true);
    }
  };

  const handleIconClick = (e, link) => {
    e.stopPropagation(); // Impede que o clique no ícone dispare o evento do card
    if (link) {
      window.open(link, "_blank");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Determinar se o card é clicável (tem popfile)
  const hasPopup = !!popfile;

  return (
    <>
      <div 
        className={`bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full ${hasPopup ? 'cursor-pointer' : ''}`} 
        onClick={hasPopup ? handleCardClick : undefined}
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="w-full h-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="iaac_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* Círculos de links - REMOVIDO O ÍCONE DE POPUP */}
            <div className="absolute inset-0 flex justify-end m-3">
              <div className="flex gap-2">
                {/* Link para o Google Drive */}
                {source_code_link && (
                  <div
                    onClick={(e) => handleIconClick(e, source_code_link)}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border-2 border-white"
                  >
                    <img
                      src={driveIcon || drive}
                      alt="source code"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                )}
                
                {/* Link para site externo */}
                {liveUrl && (
                  <div
                    onClick={(e) => handleIconClick(e, liveUrl)}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border-2 border-white"
                  >
                    <img
                      src={liveIcon}
                      alt="live url"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p
              className="mt-2 text-secondary text-[14px] h-[8rem] overflow-y-auto"
              dangerouslySetInnerHTML={{
                __html: customDescription || description,
              }}
            />
          </div>
        </Tilt>
      </div>

      {/* Popup para visualização do arquivo - APENAS se houver popfile definido */}
      {showPopup && (
        <FileViewerPopup 
          fileUrl={popfile} 
          fileType={fileType}
          onClose={handleClosePopup} 
        />
      )}
    </>
  );
};

const Exp_IAAC = ({ language }) => {
  const {
    experiences_title_iaac,
    experiences_description_iaac,
  } = translations[language] || translations.en;
  const iaacItems = getIAAC(language);

  return (
    <>
      <h2
        className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}
      >
        {experiences_title_iaac}
      </h2>

      <div
        variants={fadeIn("", "", 1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        dangerouslySetInnerHTML={{
          __html: experiences_description_iaac,
        }}
      />

      <div className="mt-20 flex flex-wrap gap-7">
        {iaacItems.map((iaac, index) => (
          <IAAC_Card
            key={`iaac-${index}`}
            index={index}
            {...iaac}
            customDescription={iaac.customDescription}
            driveIcon={iaac.driveIcon}
            liveIcon={iaac.liveIcon}
            popfile={iaac.popfile} // NOVA PROPRIEDADE
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Exp_IAAC);