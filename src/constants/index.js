import translations from "../translate/translations"; 
import {
  //coisas que eu gosto "about"
  jogos,
  ciencia,
  musica,
  viagem,
  esporte,
  idioma,
  web,
  cosmo,
  
  //study
  feira,
  fabrica,
  maratona,
  lgpt,
  maratonaregional,
  maratonaultima,
  diploma,
  alemao,
  code1,
  vladimir,

  //sports
  bandeirantes,
  carterinha,
  faixa,
  medalha,
  primeirolugarjudo,
  segundolugar,
  corridaprimeiro,
  primeiracorrida,
  farmaponte,
  jppereira,
  jes,
  first,
  second,
  krun,

  //reason
  aero1,
  aero2,
  aero3,
  aero4,
  aero5,
  aero6,
  aero7,
  aero8,
  aero9,
  aero10,
  aero11,
  aeb,
  drive,
  ufscar,
  iasc,
  mcti,
  isac1,
  isac2,
  iaac,
  feedback,
  iaaclogo,

} from "../assets";

const getTranslatedText = (language, key, defaultText = "") => {
  return translations[language]?.[key] || defaultText;
};
let currentLanguage = 'ru'; // Exemplo: idioma selecionado como inglês"


export const getNavlinks = (language) => {
    return[
  {
    id: "about",
    title: getTranslatedText(language, 'navlinks_about'),  // Traduzindo título
  },
  {
    id: "study",
    title: getTranslatedText(language, 'navlinks_study'),  // Traduzindo título

  },
  {
    id: "esporte",
    title: getTranslatedText(language, 'navlinks_sport'),  // Traduzindo título

  },
  {
    id: "reason",
    title: getTranslatedText(language, 'navlinks_reason'),  // Traduzindo título
  },
];
};

export const getHobbies = (language) => {
  return [
  {
    title: getTranslatedText(language, 'hobbies_tecnologia'),  // Traduzindo título
    icon: web,
  },
  {
    title: getTranslatedText(language, 'hobbies_jogos'),  // Traduzindo título
    icon: jogos,
  },
  {
    title: getTranslatedText(language, 'hobbies_musica'),  // Traduzindo título
    icon: musica,
  },
  {
    title: getTranslatedText(language, 'hobbies_sport'),  // Traduzindo título
    icon: esporte,
  },
  {
    title: getTranslatedText(language, 'hobbies_viagem'),  // Traduzindo título
    icon: viagem,
  },
  {
    title: getTranslatedText(language, 'hobbies_ciencia'),  // Traduzindo título
    icon: ciencia,
  },
  {
    title: getTranslatedText(language, 'hobbies_espaco'),  // Traduzindo título
    icon: cosmo,
  }, 
  {
    title: getTranslatedText(language, 'hobbies_idioma'),  // Traduzindo título
    icon: idioma,},
];
};

export const getAchievementStudy = (language) => { 
  return [
  {
    title: getTranslatedText(language, 'achievement_title_maratona1'), 
    company_name: getTranslatedText(language, 'achievement_company_maratona1'), 
    icon: code1,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [getTranslatedText(language, 'achievement_points_maratona1')], 
  },
  {
    title: getTranslatedText(language, 'achievement_title_maratona2'),
    company_name: getTranslatedText(language, 'achievement_company_maratona2'), 
    icon: code1,
    iconBg: "#383E56",
    date: "2022",
    points: [getTranslatedText(language, 'achievement_points_maratona2')], 
  },
  {
    title: getTranslatedText(language, 'achievement_title_maratona3'),
    company_name: getTranslatedText(language, 'achievement_company_maratona3'),
    icon: code1,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [getTranslatedText(language, 'achievement_points_maratona3')], 
  },
];
};

export const getStudies = (language) => {
  return [
  {
    name: getTranslatedText(language, 'studies_title_science'),
    description: getTranslatedText(language, 'studies_description_science'),
    image: feira,
  },
  {
    name: getTranslatedText(language, 'studies_title_german'),
    description: getTranslatedText(language, 'studies_description_german'),
    image: alemao,
    source_code_link: "https://drive.google.com/file/d/1Z_yZXWZqqvqs3Sb6uA7Iu84T21tcSyiv/view?usp=sharing", // Link para o código
  },
  {
    name: getTranslatedText(language, 'studies_title_project'),
    description: getTranslatedText(language, 'studies_description_project'),
    image: fabrica,
  },
  {
    name: getTranslatedText(language, 'studies_title_maratona1'),
    description: getTranslatedText(language, 'studies_description_maratona1'),
    image: maratona,
  },
  {
    name: getTranslatedText(language, 'studies_title_lgpt'),
    description: getTranslatedText(language, 'studies_description_lgpt'),
    image: lgpt,
  },
  {
    name: getTranslatedText(language, 'studies_title_maratona2'),
    description: getTranslatedText(language, 'studies_description_maratona2'),
    image: maratonaregional,
  },
  {
    name: getTranslatedText(language, 'studies_title_maratona3'),
    description: getTranslatedText(language, 'studies_description_maratona3'),
    image: maratonaultima,
  },
  {
    name: getTranslatedText(language, 'studies_title_diploma'),
    description: getTranslatedText(language, 'studies_description_diploma'),
    image: diploma,
    source_code_link: "https://drive.google.com/file/d/1V828ueblaQr7EXUAcgBeL5xBE8HKVUJR/view?usp=sharing",
  },
   {
    name: getTranslatedText(language, 'studies_title_preparatorio'),
    description: getTranslatedText(language, 'studies_description_preparatorio'),
    image: vladimir,
    source_code_link: "https://drive.google.com/file/d/1udN3MUHFcy2JvHjB68fhqGyMxTb67AIh/view?usp=sharing",
  },
];
};

export const getSporties = (language) => {
  return [
  {
    name: getTranslatedText(language, 'sporties_title_handebol'),
    description: getTranslatedText(language, 'sporties_description_handebol'),
    image: jes,
  },
  {
    name: getTranslatedText(language, 'sporties_title_bandeirantes'),
    description:getTranslatedText(language, 'sporties_description_bandeirantes'),
    image: bandeirantes,
  },
  {
    name: getTranslatedText(language, 'sporties_title_carterinha'),
    description: getTranslatedText(language, 'sporties_description_carterinha'),
    image: carterinha,
  },
  {
    name: getTranslatedText(language, 'sporties_title_faixa'),
    description: getTranslatedText(language, 'sporties_description_faixa'),
    image: faixa,
  },
  {
    name: getTranslatedText(language, 'sporties_title_medalha'),
    description: getTranslatedText(language, 'sporties_description_medalha'),
    image: medalha,
  },
  {
    name: getTranslatedText(language, 'sporties_title_campeao'),
    description: getTranslatedText(language, 'sporties_description_campeao'),
    image: primeirolugarjudo,
    source_code_link: "https://drive.google.com/file/d/1utO0IFEfUHc6dwI_-hcxpO5BJGK-rKvI/view?usp=sharing",
  },
  {
    name: getTranslatedText(language, 'sporties_title_vice'),
    description: getTranslatedText(language, 'sporties_description_vice'),
    image: segundolugar,
    source_code_link: "https://drive.google.com/file/d/1psDH3Ppoby-565W-QHHyR3wwbhuaXfV7/view?usp=sharing",
  },
  {
    name: getTranslatedText(language, 'sporties_title_maratona1'),
    description: getTranslatedText(language, 'sporties_description_maratona1'),
    image: corridaprimeiro,
  },
  {
    name: getTranslatedText(language, 'sporties_title_maratona2'),
    description: getTranslatedText(language, 'sporties_description_maratona2'),
    image: primeiracorrida,
  },
  {
    name: getTranslatedText(language, 'sporties_title_maratona3'),
    description: getTranslatedText(language, 'sporties_description_maratona3'),
    image: farmaponte,
  },
  {
    name: getTranslatedText(language, 'sporties_title_maratona4'),
    description: getTranslatedText(language, 'sporties_description_maratona4'),
    image: jppereira,
  },
  {
    name: getTranslatedText(language, 'sporties_title_maratona5'),
    description: getTranslatedText(language, 'sporties_description_maratona5'),
    image: krun,
  },

];
};

export const getAchiementSport = (language) =>{
  return [
  {
    title: getTranslatedText(language, 'achievement_title_jes'),
    company_name: getTranslatedText(language, 'achievement_company_jes'),
    icon: second,
    iconBg: "#383E56",
    date: "2012",
    points: [getTranslatedText(language, 'achievement_points_jes'),],
  },
  
  {
    title: getTranslatedText(language, 'achievement_title_campeao'),
    company_name: getTranslatedText(language, 'achievement_company_campeao'),
    icon: first,
    iconBg: "#E6DEDD",
    date: "2013",
    points: [getTranslatedText(language, 'achievement_points_campeao'),],
  },

  {
    title: getTranslatedText(language, 'achievement_title_vice'),
    company_name: getTranslatedText(language, 'achievement_company_vice'),
    icon: second,
    iconBg: "#E6DEDD",
    date: "2013",
    points: [getTranslatedText(language, 'achievement_points_vice'),],
  },
];
};

export const getAerospace = (language) =>{
  return [
  {
    name: getTranslatedText(language, 'aerospace_title_9'),
    description: getTranslatedText(language, 'aerospace_description_9'),
    image: aero9,      
    driveIcon: drive,
    liveIcon: aeb,
    source_code_link: "https://drive.google.com/file/d/141TJmr9TsCEyrXqFfTt9ScHuIEvC6Z9Y/view?usp=sharing", // Link para o código
    liveUrl: "https://aebescolavirtual.aeb.gov.br/mod/customcert/verify_certificate.php?code=ZU1tsSNzOQ&qrcode=1", // Link para a versão ao vivo
  },
  {
    name: getTranslatedText(language, 'aerospace_title_4'),
    description: getTranslatedText(language, 'aerospace_description_4'),
    image: aero4,      
    driveIcon: drive,
    liveIcon: aeb,
    source_code_link: "https://drive.google.com/file/d/18YbL6lOWIEcKg4CYRZfK2irP5QLbCU6i/view?usp=sharing", // Link para o código
    liveUrl: "https://aebescolavirtual.aeb.gov.br/mod/customcert/verify_certificate.php?code=sL9PPM462s&qrcode=1", // Link para a versão ao vivo
  },
  {
    name: getTranslatedText(language, 'aerospace_title_8'),
    description: getTranslatedText(language, 'aerospace_description_8'),
    image: aero8,     
    driveIcon: drive,
    liveIcon: aeb, 
    source_code_link: "https://drive.google.com/file/d/1mQ7LTOhzzMqCzVNTgH7bdXVUZhX3VlIr/view?usp=sharing", // Link para o código
    liveUrl: "https://aebescolavirtual.aeb.gov.br/mod/customcert/verify_certificate.php?code=DGstkJXMiC&qrcode=1", // Link para a versão ao vivo
  },
  {
    name: getTranslatedText(language, 'aerospace_title_1'),
    description: getTranslatedText(language, 'aerospace_description_1'),
    image: aero1,
    driveIcon: drive,
    liveIcon: aeb,
    source_code_link: "https://drive.google.com/file/d/1lqLKkYGCFOskHPzkwzFLLXCBYpX0VlS5/view?usp=sharing", // Link para o código
    liveUrl: "https://aebescolavirtual.aeb.gov.br/mod/customcert/verify_certificate.php?code=ng4IY2G2Bi&qrcode=1", // Link para a versão ao vivo
  },
  {
    name: getTranslatedText(language, 'aerospace_title_2'),
    description: getTranslatedText(language, 'aerospace_description_2'),
    image: aero2,
    driveIcon: drive,
    liveIcon: aeb,
    source_code_link: "https://drive.google.com/file/d/1MEP9qC9HFFNdpWCpS5NvkjMmqKuZLrEc/view?usp=sharing", // Link para o código
    liveUrl: "https://drive.google.com/file/d/1EJiHMsXZtipleRbW8QkIXJpBaRRYBQdR/view?usp=sharing", // Link para a versão ao vivo
  },
  {
    name: getTranslatedText(language, 'aerospace_title_5'),
    description: getTranslatedText(language, 'aerospace_description_5'),
    image: aero5,
    driveIcon: drive,
    liveIcon: aeb,
    source_code_link: "https://drive.google.com/file/d/1V28P_ErEywL2n5IXdLguS9vqtVoiDtzc/view?usp=sharing", // Link para o código
    liveUrl: "https://aebescolavirtual.aeb.gov.br/mod/customcert/verify_certificate.php?code=d9qgTuQsRI&qrcode=1", // Link para a versão ao vivo
  },
  {
    name: getTranslatedText(language, 'aerospace_title_3'),
    description: getTranslatedText(language, 'aerospace_description_3'),
    image: aero3,
    driveIcon: drive,
    liveIcon: aeb,
    source_code_link: "https://drive.google.com/file/d/1GNMiHEwNPqVVntfvIb0Iu9vbFp-68z78/view?usp=sharing", // Link para o código
    liveUrl: "https://aebescolavirtual.aeb.gov.br/mod/customcert/verify_certificate.php?code=Xj2XnT61go&qrcode=1", // Link para a versão ao vivo
  },
  {
    name: getTranslatedText(language, 'aerospace_title_6'),
    description: getTranslatedText(language, 'aerospace_description_6'),
    image: aero6,
    driveIcon: drive,
    liveIcon: aeb,
    source_code_link: "https://drive.google.com/file/d/1uUYckbfvQAG6idyJsaYYNsaHRa_JJXnT/view?usp=sharing", // Link para o código
    liveUrl: "https://aebescolavirtual.aeb.gov.br/mod/customcert/verify_certificate.php?code=ob4xb3x0T4&qrcode=1", // Link para a versão ao vivo
  },
  {
    name: getTranslatedText(language, 'aerospace_title_10'),
    description: getTranslatedText(language, 'aerospace_description_10'),
    image: aero10,
    driveIcon: drive,
    liveIcon: aeb,
    source_code_link: "https://drive.google.com/file/d/19oJyY0mampeC-b4UkJkwWmyFZ-UKXjrG/view?usp=sharing", // Link para o código
    liveUrl: "https://aebescolavirtual.aeb.gov.br/mod/customcert/verify_certificate.php?code=hdrKjTWMS1&qrcode=1", // Link para a versão ao vivo
  },
  {
    name: getTranslatedText(language, 'aerospace_title_7'),
    description: getTranslatedText(language, 'aerospace_description_7'),
    image: aero7,
    driveIcon: drive,
    liveIcon: aeb,
    source_code_link: "https://drive.google.com/file/d/18izocyCg-fFqPG-8bqlzR9yGq5cAc74j/view?usp=sharing", // Link para o código
    liveUrl: "https://aebescolavirtual.aeb.gov.br/mod/customcert/verify_certificate.php?code=eirlH1rLBH&qrcode=1", // Link para a versão ao vivo
  },
  {
    name: getTranslatedText(language, 'aerospace_title_11'),
    description: getTranslatedText(language, 'aerospace_description_11'),
    image: aero11,
    driveIcon: drive,
    liveIcon: ufscar,
    source_code_link: "https://drive.google.com/file/d/1FzNiwt90dNrasaTQdqBUPQpBD2mUZRok/view?usp=sharing", // Link para o código
    liveUrl: "https://cursos.poca.ufscar.br/mod/simplecertificate/verify.php?code=67f9b92a-c1c0-41b5-8d75-cb35ac1e1935", // Link para a versão ao vivo
  },
];
};
export const getIASC = (language) =>{
  return [
   {
    name: getTranslatedText(language, 'iasc_title_1'),
    description: getTranslatedText(language, 'iasc_description_1'),
    image: isac1,
    driveIcon: drive,
    liveIcon: mcti,
    source_code_link: "https://drive.google.com/file/d/1kAEZ4Tg6FZac9Plgd9VgvdbtrUbauE_p/view?usp=sharing", // Link para o código
    liveUrl: "", // Link para a versão ao vivo
  }, 
  {
    name: getTranslatedText(language, 'isac_title_2'),
    description: getTranslatedText(language, 'iasc_description_2'),
    image: isac2,
    driveIcon: drive,
    liveIcon: mcti,
    source_code_link: "https://drive.google.com/file/d/1kAEZ4Tg6FZac9Plgd9VgvdbtrUbauE_p/view?usp=sharing", // Link para o código
    liveUrl: "", // Link para a versão ao vivo
  }, 
  ]
};
export const getIAAC = (language) =>{
  return [
   {
    name: getTranslatedText(language, 'iaac_title_1'),
    description: getTranslatedText(language, 'iaac_description_1'),
    image: iaac,
    driveIcon: drive,
    liveIcon: iaaclogo,
    source_code_link: "https://drive.google.com/file/d/1mni7XaCXPiImb7kjqR1YOZ9g8akxuIhj/view?usp=sharing", // Link para o código
    liveUrl: "https://iaac.space/en/verify", // Link para a versão ao vivo
   },
   {
    name: getTranslatedText(language, 'iaac_title_2'),
    description: getTranslatedText(language, 'iaac_description_2'),
    image: feedback,
    driveIcon: drive,
    liveIcon: iaaclogo,
    source_code_link: "https://drive.google.com/file/d/1KmwGdybEXliSSKQV_PYwM3T2wYAnIR1W/view?usp=sharing", // Link para o código
    liveUrl: "https://iaac.space/en/verify", // Link para a versão ao vivo
  }, 
  ]
};