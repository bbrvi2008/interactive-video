function toggleFullScreen(isFullscreen) {
  if (!isFullscreen && !document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen(); // Firefox
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT); // Chrome and Safari
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen(); // IE
    }
} else {

    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

export default class InteractiveVideoView {
  constructor($container, {question, answers, isFullscreen}, options) {
    // this.clear($container);
    this.$container = $container;

    this.video = this.createVideo(this.getVideoLink(question.videoLink), options);
    this.answers = this.createAnswers(answers, options)
    
    this.view = this.createView(this.video, this.answers, {
      isFullscreen,
      ...options
    });

    // $container.appendChild(this.view);
  }

  hide() {
    this.view.parentNode.removeChild(this.view);
  }

  show() {
    this.$container.appendChild(this.view);
  };

  getVideoLink(link) {
    // return link;

    // if(location.hostname === 'www.admkrsk.ru') return link;

    // return `//www.admkrsk.ru${link}`;

    return `https://github.com/bbrvi2008/interactive-video/blob/maxsoft-video${link}?raw=true`;
  }

  createView(video, answers, { onPlayClicked, onCloseClicked, isFullscreen }) {
    let overlay = this.createOverlay();
    let btnPlay = this.createButton('play_circle_outline', 'interactive-video__btn-play');
    let btnClose = this.createButton('close', 'interactive-video__btn-close');

    btnPlay.addEventListener('click', this._handlePlayClicked(onPlayClicked));
    btnClose.addEventListener('click', this._handleCloseClicked(onCloseClicked));

    let inner = document.createElement('div');
    inner.classList.add('interactive-video__inner');

    inner.appendChild(video);
    inner.appendChild(btnPlay);
    if(answers != null) {
      inner.appendChild(answers);
    }
    inner.appendChild(overlay);

    let view = document.createElement('div');
    view.classList.add('interactive-video');
    if(isFullscreen) {
      view.classList.add('interactive-video--fullscreen');
    }

    // view.appendChild(btnClose);
    view.appendChild(inner);

    return view;
  }

  _handlePlayClicked = (callback) => {
    return (event) => {
      // document.body.classList.add('page-locked');
      toggleFullScreen(false);

      this.view.classList.add('interactive-video--fullscreen');
      this.video.play();

      if(callback) {
        callback();
      }
    }
  }

  _handleCloseClicked = (callback) => {
    return () => {
      toggleFullScreen(true);
      document.body.classList.remove('page-locked');

      this.view.classList.remove('interactive-video--fullscreen');
      this.video.pause();

      if(callback) {
        callback();
      }
    }
  }

  createVideo(link, { onVideoPlayed }) {
    let video = document.createElement('video');

    video.setAttribute('src', link);
    video.setAttribute('preload', 'auto');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', 'true');
    // video.setAttribute('controls', 'false');
    video.classList.add('interactive-video__video');

    video.controls = false;

    video.addEventListener('ended', onVideoPlayed);
    video.addEventListener("contextmenu", function (e) { e.preventDefault(); e.stopPropagation(); }, false);

    return video;
  }

  createQuestion(questionText) {
    if(!questionText) return null;

    let title = document.createElement('h2');

    title.classList.add('interactive-video__question-title');
    title.textContent = questionText;

    let questionContainer = document.createElement('div');
    questionContainer.classList.add('interactive-video__question');

    questionContainer.appendChild(title);

    return questionContainer;
  }

  createAnswers(data, options) {
    if(!data) return null;

    let answers = document.createElement('div');

    answers.classList.add('interactive-video__answer-list');

    data.forEach((item) => {
      var answer = this.createAnswer(item, options);

      answers.appendChild(answer);
    });

    return answers;
  }

  createButton(type, className = '') {
    let button = document.createElement('div');

    button.classList.add("material-icons");
    if(className.length) {
      button.classList.add(className);
    }

    button.textContent = type;

    return button;
  }

  createOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('interactive-video__overlay');

    let button = this.createButton('screen_rotation', 'interactive-video__overlay-icon');
    let text = document.createElement('p');
    text.classList.add('interactive-video__overlay-text');
    text.textContent = 'Поверните экран';

    overlay.appendChild(button);
    overlay.appendChild(text);

    return overlay;
  }

  createAnswer(data, { onAnswerClick }) {
    let { text } = data;

    let answer = document.createElement('button');

    answer.classList.add('btn', 'btn__secondary', 'interactive-video__answer-item');
    answer.textContent = text;

    answer.addEventListener('click', (event) => {
      onAnswerClick(data);
    });

    return answer;
  }
}