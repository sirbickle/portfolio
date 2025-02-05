import {
  //coisas que eu gosto "about"
  jogos,
  ciencia,
  musica,
  viagem,
  esporte,
  idioma,
  web,
  
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



} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "study",
    title: "Estudo",
  },
  {
    id: "esporte",
    title: "Esporte",
  },
  {
    id: "reason",
    title: "Motivo pelo qual quero estudar na Rússia",
  },
];

const services = [
  {
    title: "Tecnologia da Informação",
    icon: web,
  },
  {
    title: "Jogos",
    icon: jogos,
  },
  {
    title: "Música",
    icon: musica,
  },
  {
    title: "Esporte",
    icon: esporte,
  },
  {
    title: "Viagem",
    icon: viagem,
  },
  {title: "Ciência",
    icon: ciencia,},
    
  {title: "Idioma",
    icon: idioma,},
];

const achievementstudy = [
  {
    title: "16ª Maratona de Programação FACENS",
    company_name: "Faculdade de Engenharia de Sorocaba",
    icon: medel,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [
      "7ª posição de 32 times na 16ª Maratona de Programação FACENS.",
    ],
  },
  {
    title: "27ª Maratona de Programação Regional",
    company_name: "Sociedade Brasileira de Programação",
    icon: medel,
    iconBg: "#383E56",
    date: "2022",
    points: [
      "5ª posição de 15 times na 27ª Maratona de Programação Regional.",
    ],
  },
  {
    title: "17ª Maratona de Programação FACENS",
    company_name: "Faculdade de Engenharia de Sorocaba",
    icon: medel,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "5ª posição de 15 times na 27ª Maratona de Programação Regional.",
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
      "Diploma de conclusão, o curso foi iniciado no primeiro semestre de 2013 e finalziado no segundo semestre de 2016.",
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
    name: "Medalha do Jogos Escolares no Handebol",
    description:
      "Medalha de vice lugar no Jes.",
    image: jes,
  },
  {
    name: "Bandeirantes Sorocaba",
    description:
      "Pegamos o primeiro lugar de mais medalhas conquistadas.",
    image: bandeirantes,
  },
  {
    name: "Carterinha da Fereção",
    description:
      "As carterinhas da Federação Paulista de Judô.",
    image: carterinha,
  },
  {
    name: "Exame de Faixa",
    description:
      "Exame para faixa verde.",
    image: faixa,
  },
  {
    name: "Medalhas",
    description:
      "Todas as medalhas que conquistei.",
    image: medalha,
  },
  {
    name: "Campeão Regional.",
    description:
      "Medalha e diploma do primeiro lugar no campeonato regional.",
    image: primeirolugarjudo,
  },
  {
    name: "Vice Campeão Estadual",
    description:
      "Medalha e certificado do segundo lugar no campeoanto estadual.",
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
      "Medalha de participação, fiz 5km em 55 min na minha primeira maratona.",
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

export {
  services,
  achievementstudy,
  studies,
  sporties,

};
