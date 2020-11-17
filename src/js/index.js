import '../css/style.css';
import '../scss/style.scss';

import InteractiveVideo from './InteractiveVideo';

let scenario = [{
  rank: 1,
  type: 'question',
  question: {
    videoLink: "http://interactiv-video.ru/films/site/zhaloba_block_card_site/story_content/video_60NeJohGzjz_18_160_1024x576.mp4"
  },
  answers: [{
    text: "Успокойтесь, пожалуйста, сейчас мы во всем разберемся.",
    videoLink: "http://interactiv-video.ru/films/site/zhaloba_block_card_site/story_content/video_5dPX8th7tcy_18_160_1024x576.mp4",
    isRight: false
  }, {
    text: "Пожалуйста, расскажите, что случилось. (без улыбки)",
    videoLink: "http://interactiv-video.ru/films/site/zhaloba_block_card_site/story_content/video_6hueda2M5MC_18_160_1024x576.mp4",
    isRight: true
  }, {
    text: "Пожалуйста, расскажите, что случилось. (с улыбкой)",
    videoLink: "http://interactiv-video.ru/films/site/zhaloba_block_card_site/story_content/video_66DWeFAaNN0_18_160_1024x576.mp4",
    isRight: false
  }]
}, {
  rank: 2,
  type: 'question',
  question: {
    videoLink: "http://interactiv-video.ru/films/site/zhaloba_block_card_site/story_content/video_5uGdlwxqSy8_18_160_1024x576.mp4"
  },
  answers: [{
    text: "Действительно, ситуация очень неприятная, тем более накануне отпуска.",
    videoLink: "http://interactiv-video.ru/films/site/zhaloba_block_card_site/story_content/video_5XxwgB7wULP_18_160_1024x576.mp4",
    isRight: true
  }, {
    text: "Возможно, Вы пин код неверно ввели? Или срок действия карты закончился?",
    videoLink: "http://interactiv-video.ru/films/site/zhaloba_block_card_site/story_content/video_5tu5zMeGwmG_18_160_1024x576.mp4",
    isRight: false
  }, {
    text: "Я Вас прекрасно понимаю.",
    videoLink: "http://interactiv-video.ru/films/site/zhaloba_block_card_site/story_content/video_6R4Pbtct930_18_160_1024x576.mp4",
    isRight: false
  }]
}];


let $container = document.querySelector('.interactive-video-container');
let interavtiveVideo = new InteractiveVideo($container, scenario);

interavtiveVideo.show();

