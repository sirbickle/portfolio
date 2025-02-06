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
let currentLanguage = 'ru'; // Exemplo: idioma selecionado como inglês


export const navLinks = [
  {
    id: "about",
    title: getTranslatedText(currentLanguage, 'navlinks_about'),  // Traduzindo título
  },
  {
    id: "study",
    title: getTranslatedText(currentLanguage, 'navlinks_study'),  // Traduzindo título

  },
  {
    id: "esporte",
    title: getTranslatedText(currentLanguage, 'navlinks_sport'),  // Traduzindo título

  },
  {
    id: "reason",
    title: getTranslatedText(currentLanguage, 'navlinks_reason'),  // Traduzindo título
  },
];

const hobbies = [
  {
    title: getTranslatedText(currentLanguage, 'hobbies_tecnologia'),  // Traduzindo título
    icon: web,
  },
  {
    title: getTranslatedText(currentLanguage, 'hobbies_jogos'),  // Traduzindo título
    icon: jogos,
  },
  {
    title: getTranslatedText(currentLanguage, 'hobbies_musica'),  // Traduzindo título
    icon: musica,
  },
  {
    title: getTranslatedText(currentLanguage, 'hobbies_sport'),  // Traduzindo título
    icon: esporte,
  },
  {
    title: getTranslatedText(currentLanguage, 'hobbies_viagem'),  // Traduzindo título
    icon: viagem,
  },
  {
    title: getTranslatedText(currentLanguage, 'hobbies_ciencia'),  // Traduzindo título
    icon: ciencia,
  },
  {
    title: getTranslatedText(currentLanguage, 'hobbies_espaco'),  // Traduzindo título
    icon: cosmo,
  }, 
  {
    title: getTranslatedText(currentLanguage, 'hobbies_idioma'),  // Traduzindo título
    icon: idioma,},
];

const achievementstudy = [
  {
    title: "16ª Maratona de Programação FACENS",
    company_name: "Faculdade de Engenharia de Sorocaba",
    icon: code1,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [
      "7ª posição de 32 times na 16ª Maratona de Programação FACENS.",
    ],
  },
  {
    title: "27ª Maratona de Programação Regional",
    company_name: "Sociedade Brasileira de Programação",
    icon: code1,
    iconBg: "#383E56",
    date: "2022",
    points: [
      "5ª posição de 15 times na 27ª Maratona de Programação Regional.",
    ],
  },
  {
    title: "17ª Maratona de Programação FACENS",
    company_name: "Faculdade de Engenharia de Sorocaba",
    icon: code1,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "10ª posição de 32 times na 17ª Maratona de Programação FACENS",
    ],
  },
];



const studies = [
  {
    name: "Feira de Ciências",
    description:
      "No último ano do ensino fundamental, tivemos alguns trabalhos extremamente interessantes, o que mais marcou foi a Feira de Ciências, meu tema foi sobre o descarte de lixo hospitalar e higienização. Na mesa, podiam-se ver a caixa de descarte, soro fisiológico, algodão e algumas seringas. O grupo era composto por Leonardo, Pamela, Roger, Guilherme e eu.",
    image: feira,
  },
  {
    name: "Diploma do Curso de Alemão",
    description:
      "Diploma de conclusão. O curso foi iniciado no primeiro semestre de 2013 e finalizado no segundo semestre de 2016",
    image: alemao,
  },
  {
    name: "Fábrica de Projetos",
    description:
      "Apresentação do projeto final do primeiro semestre da Fábrica de Projetos, cujo desafio era desenvolver algo para o microcomputador, e nós criamos um jogo nele, o famoso 'Pac-Man'. Baseado no jogo original, o objetivo é conseguir 999 pontos, tanto desviando dos fantasmas quanto pegando as frutas.",
    image: fabrica,
  },
  {
    name: "16ª Maratona de Programação FACENS",
    description:
      "16ª Maratona de Programação FACENS em 2022. As equipes de alunos passaram algumas horas se dedicando a resolver problemas que englobam conceitos de Lógica Computacional, Algoritmos e Programação, Estruturas de Dados, entre outros. Com muita alegria, a equipe em que participei, 'C Sustenido', conseguiu a 7ª posição de 32 times, alcançando esse feito apenas no segundo semestre da faculdade.",
    image: maratona,
  },
  {
    name: "Apresentação sobre 'Lei de Proteção de Dados'.",
    description:
      "Apresentação final sobre 'Lei de Proteção de Dados' para materia de 'Arquitetura de Computadores'.",
    image: lgpt,
  },
  {
    name: "27ª Maratona de Programação Regional",
    description:
      "27ª Maratona de Programação Regional em 2022. E com muita alegria que o 'C sustenido' conseguiu a 5ª posição de 15 times, conseguindo esse feito apenas no segundo semestre de faculdade.",
    image: maratonaregional,
  },
  {
    name: "17ª Maratona de Programação Facens",
    description:
      "10ª posição de 32 times na 17ª Maratona de Programação FACENS em 2023.",
    image: maratonaultima,
  },
  {
    name: "Diploma de conclusão do curso de Tecnólogo em Análise e Desenvolvimento de Sistemas",
    description:
      "Diploma de conclusão do curso de Tecnólogo em Análise e Desenvolvimento de Sistemas.",
    image: diploma,
  },
  
];

const sporties = [
  {
    name: "Medalha dos Jogos Estudantis no Handebol.",
    description:
      "Medalha de vice-campeão no JES.",
    image: jes,
  },
  {
    name: "Bandeirantes Sorocaba",
    description:
      "Conquistamos o primeiro lugar no número de medalhas.",
    image: bandeirantes,
  },
  {
    name: "Carterinha da Federação",
    description:
      "As carterinhas da Federação Paulista de Judô.",
    image: carterinha,
  },
  {
    name: "Exame de Faixa",
    description:
      "Exame para a faixa verde.",
    image: faixa,
  },
  {
    name: "Medalhas",
    description:
      "Total de 28 medalhas ganhadas, entre elas ouro, prata e bronze.",
    image: medalha,
  },
  {
    name: "Campeão Regional.",
    description:
      "Campeão do Regional em 10 de agosto de 2013.",
    image: primeirolugarjudo,
  },
  {
    name: "Vice-Campeão Estadual",
    description:
      "Vice-campeão do Estadual em 1º de setembro de 2013.",
    image: segundolugar,
  },
  {
    name: "Primeira Maratona",
    description:
      "Primeira maratona.",
    image: corridaprimeiro,
  },
  {
    name: "8º MARATONA SOROCABA NOVEMBRO AZUL",
    description:
      "Medalha de participação: completei 5 km em 55 minutos na minha primeira maratona.",
    image: primeiracorrida,
  },
  {
    name: "Maratona Farma Ponte",
    description:
      "Medalha de participação na Maratona Farma Ponte.",
    image: farmaponte,
  },
  {
    name: "Duathlon J.P Pereira",
    description:
      "Medalha de participação na Duathlon J.P Pereira.",
    image: jppereira,
  },
];

const achievementsport = [
  {
    title: "Vice-Campeão no JES",
    company_name: "Jogos Estudantis",
    icon: second,
    iconBg: "#383E56",
    date: "2012",
    points: [
      "Vice-Campeão no JES.",
    ],
  },
  
  {
    title: "Campeão Regional",
    company_name: "Federação Paulista de Judô",
    icon: first,
    iconBg: "#E6DEDD",
    date: "2013",
    points: [
      "Campeão do Regional em 10 de agosto de 2013.",
    ],
  },

  {
    title: "Vice-Campeão Estadual",
    company_name: "Federação Paulista de Judô",
    icon: second,
    iconBg: "#E6DEDD",
    date: "2013",
    points: [
      "Vice-campeão do Estadual em 1º de setembro de 2013.",
    ],
  },
];



export {
  hobbies,
  achievementstudy,
  studies,
  sporties,
  achievementsport,
};
