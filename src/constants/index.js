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
  medel,
  alemao,
  code1,

  //sports
  judo,
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
  },
  {
    name: getTranslatedText(language, 'sporties_title_vice'),
    description: getTranslatedText(language, 'sporties_description_vice'),
    image: segundolugar,
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
