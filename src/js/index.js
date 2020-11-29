import '../css/normalize.css';
// import '../css/style.css';
import '../scss/style.scss';

import InteractiveVideo from './InteractiveVideo';

let scenario1 = [{
  rank: 1,
  type: 'question',
  question: {
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1.mp4?raw=true"
  },
  answers: [{
    text: "Успокойтесь, пожалуйста, сейчас мы во всем разберемся.",
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1__answer_1.mp4?raw=true",
    isRight: false
  }, {
    text: "Пожалуйста, расскажите, что случилось. (без улыбки)",
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1__answer_2.mp4?raw=true",
    isRight: true
  }, {
    text: "Пожалуйста, расскажите, что случилось. (с улыбкой)",
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1__answer_3.mp4?raw=true",
    isRight: false
  }]
}, {
  rank: 2,
  type: 'question',
  question: {
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_2.mp4?raw=true"
  },
  answers: [{
    text: "Действительно, ситуация очень неприятная, тем более накануне отпуска.",
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_2__answer_1.mp4?raw=true",
    isRight: true
  }, {
    text: "Возможно, Вы пин код неверно ввели? Или срок действия карты закончился?",
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_2__answer_2.mp4?raw=true",
    isRight: false
  }, {
    text: "Я Вас прекрасно понимаю.",
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_2__answer_3.mp4?raw=true",
    isRight: false
  }]
}];

let scenario = [{
  rank: 1,
  type: 'question',
  question: {
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1.mp4?raw=true"
  },
  answers: [{
    text: "Да",
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1__answer_2.mp4?raw=true",
    isRight: true
  }, {
    text: "Нет",
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1__answer_3.mp4?raw=true",
    isRight: false
  }]
}, {
  rank: 2,
  type: 'question',
  question: {
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1.mp4?raw=true"
  },
  answers: [{
    text: "Красноярский",
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1__answer_2.mp4?raw=true",
    isRight: true
  }, {
    text: "Лондонский",
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1__answer_3.mp4?raw=true",
    isRight: false
  }]
}, {
  rank: 3,
  type: 'question',
  question: {
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1.mp4?raw=true"
  },
  answers: [{
    text: "Сусликов",
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1__answer_1.mp4?raw=true",
    isRight: false
  }, {
    text: "Уток",
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1__answer_3.mp4?raw=true",
    isRight: true
  }]
}, {
  rank: 4,
  type: 'question',
  question: {
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1.mp4?raw=true"
  },
  answers: [{
    text: "Хазрет Меджидович Совмен",
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1__answer_2.mp4?raw=true",
    isRight: true
  }, {
    text: "Дед Мороз",
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1__answer_3.mp4?raw=true",
    isRight: false
  }]
}, {
  rank: 5,
  type: 'question',
  question: {
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1.mp4?raw=true"
  },
  answers: [{
    text: "В Красноярске",
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1__answer_2.mp4?raw=true",
    isRight: true
  }, {
    text: "Не в Красноярске",
    videoLink: "https://github.com/bbrvi2008/interactive-video/blob/master/src/files/question_1__answer_3.mp4?raw=true",
    isRight: false
  }]
}];

let $container = document.querySelector('.interactive-video-container');
let interavtiveVideo = new InteractiveVideo($container, scenario1);

interavtiveVideo.show();

