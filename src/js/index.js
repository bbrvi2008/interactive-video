import '../css/normalize.css';
import '../scss/style.scss';

import InteractiveVideo from './InteractiveVideo';

let questions = [{
  rank: 1,
  type: 'question',
  question: {
    videoLink: "/src/files/ESET_2-converted.mp4"
  },
  answers: [{
    videoLink: "/src/files/ESET_2-converted.mp4",
    isRight: false,
    text: "Маски и перчатки"
  }, {
    videoLink: "/src/files/ESET_3-converted.mp4",
    isRight: true,
    text: "Комплект для удаленной работы"
  }]
}, {
  rank: 2,
  type: 'question',
  question: {
    videoLink: "/src/files/SAP_1-converted.mp4"
  },
  answers: [{
    videoLink: "/src/files/SAP_3-converted.mp4",
    isRight: true,
    text: "Да"
  }, {
    videoLink: "/src/files/SAP_2-converted.mp4",
    isRight: false,
    text: "Нет"
  }]
}, {
  rank: 3,
  type: 'question',
  question: {
    videoLink: "/src/files/Нанософт_1-converted.mp4"
  },
  answers: [{
    videoLink: "/src/files/Нанософт_3-converted.mp4",
    isRight: true,
    text: "Да"
  }, {
    videoLink: "/src/files/Нанософт_2-converted.mp4",
    isRight: false,
    text: "Нет"
  }]
}, {
  rank: 4,
  type: 'question',
  question: {
    videoLink: "/src/files/UserGate_1-converted.mp4"
  },
  answers: [{
    videoLink: "/src/files/UserGate_2-converted.mp4",
    isRight: false,
    text: "Волга"
  }, {
    videoLink: "/src/files/UserGate_3-converted.mp4",
    isRight: true,
    text: "Катунь"
  }]
}, {
  rank: 5,
  type: 'question',
  question: {
    videoLink: "/src/files/iSpring_1-converted.mp4"
  },
  answers: [{
    videoLink: "/src/files/iSpring_2-converted.mp4",
    isRight: false,
    text: "Быстрый интернет"
  }, {
    videoLink: "/src/files/iSpring_3-converted.mp4",
    isRight: true,
    text: "COVID-19"
  }]
}, {
  rank: 6,
  type: 'question',
  question: {
    videoLink: "/src/files/Kaspersky_1-converted.mp4"
  },
  answers: [{
    videoLink: "/src/files/Kaspersky_3-converted.mp4",
    isRight: true,
    text: "Наталья Касперская"
  }, {
    videoLink: "/src/files/Kaspersky_2-converted.mp4",
    isRight: false,
    text: "Евгений Касперский"
  }]
}, {
  rank: 7,
  type: 'question',
  question: {
    videoLink: "/src/files/ABBYY_1-converted.mp4"
  },
  answers: [{
    videoLink: "/src/files/ABBYY_2-converted.mp4",
    isRight: false,
    text: "Пасмурный нос"
  }, {
    videoLink: "/src/files/ABBYY_3-converted.mp4",
    isRight: true,
    text: "Ясный глаз"
  }]
}, {
  rank: 8,
  type: 'simple',
  question: {
    videoLink: "/src/files/Макссофт_2-converted.mp4"
  }
}];

let scenario = {
  questions
}

let $container = document.querySelector('.interactive-video-container');
let interavtiveVideo = new InteractiveVideo($container, scenario);

interavtiveVideo.show();

