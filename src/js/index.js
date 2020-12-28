import '../css/normalize.css';
import '../scss/style.scss';

import InteractiveVideo from './InteractiveVideo';

let questions = [{
  rank: 0,
  type: 'question',
  question: {
    videoLink: "/Style Library/res/files-card2020/files/Opener.mp4"
  },
  answers: [{
    isRight: true
  }]
}, {
  rank: 1,
  type: 'question',
  question: {
    videoLink: "/Style Library/res/files-card2020/files/Question 1.mp4"
  },
  answers: [{
    videoLink: "/Style Library/res/files-card2020/files/Answer 1-1.mp4",
    isRight: true
  }, {
    videoLink: "/Style Library/res/files-card2020/files/Answer 1-2.mp4",
    isRight: false
  }]
}, {
  rank: 2,
  type: 'question',
  question: {
    videoLink: "/Style Library/res/files-card2020/files/Question 2.mp4"
  },
  answers: [{
    videoLink: "/Style Library/res/files-card2020/files/Answer 2-1.mp4",
    isRight: true
  }, {
    videoLink: "/Style Library/res/files-card2020/files/Answer 2-2.mp4",
    isRight: false
  }]
}, {
  rank: 3,
  type: 'question',
  question: {
    videoLink: "/Style Library/res/files-card2020/files/Question 3.mp4"
  },
  answers: [{
    videoLink: "/Style Library/res/files-card2020/files/Answer 3-2.mp4",
    isRight: false
  }, {
    videoLink: "/Style Library/res/files-card2020/files/Answer 3-1.mp4",
    isRight: true
  }]
}, {
  rank: 4,
  type: 'question',
  question: {
    videoLink: "/Style Library/res/files-card2020/files/Question 4.mp4"
  },
  answers: [{
    videoLink: "/Style Library/res/files-card2020/files/Answer 4-1.mp4",
    isRight: true
  }, {
    videoLink: "/Style Library/res/files-card2020/files/Answer 4-2.mp4",
    isRight: false
  }]
}, {
  rank: 5,
  type: 'question',
  question: {
    videoLink: "/Style Library/res/files-card2020/files/Question 5.mp4"
  },
  answers: [{
    videoLink: "/Style Library/res/files-card2020/files/Answer 5-1.mp4",
    isRight: true
  }, {
    videoLink: "/Style Library/res/files-card2020/files/Answer 5-2.mp4",
    isRight: false
  }]
}, {
  rank: 6,
  type: 'simple',
  question: {
    videoLink: "/Style Library/res/files-card2020/files/Coda 2.mp4"
  }
}];

let scenario = {
  audio: {
    link: '/Style Library/res/files-card2020/files/Music_mixdown.mp3'
  }, 
  questions
}

let $container = document.querySelector('.interactive-video-container');
let interavtiveVideo = new InteractiveVideo($container, scenario);

interavtiveVideo.show();

