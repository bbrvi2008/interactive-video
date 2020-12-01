function toggleFullScreen(isFullscreen) {
  if (!isFullscreen && !document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
      if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
  } else {
      if (document.cancelFullScreen) {
          document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
      }
  }
}

export default class InteractiveVideoView {
  constructor($container, {question, answers, isFullscreen}, options) {
    this.clear($container);

    this.video = this.createVideo(this.getVideoLink(question.videoLink), options);
    this.answers = this.createAnswers(answers, options)
    
    this.view = this.createView(this.video, this.answers, {
      isFullscreen,
      ...options
    });

    $container.append(this.view);
  }

  clear($container) {
    let childrens = Array.from($container.children);

    childrens.forEach(children => {
      children.remove();
    });
  }

  getVideoLink(link) {
    if(location.hostname === 'www.admkrsk.ru') return link;

    return `http://www.admkrsk.ru${link}`;
  }

  createView(video, answers, { onPlayClicked, onCloseClicked, isFullscreen }) {
    let overlay = this.createButton('screen_rotation', 'interactive-video__overlay');
    let btnPlay = this.createButton('play_circle_outline', 'interactive-video__btn-play');
    let btnClose = this.createButton('close', 'interactive-video__btn-close');

    btnPlay.addEventListener('click', this._handlePlayClicked(onPlayClicked));
    btnClose.addEventListener('click', this._handleCloseClicked(onCloseClicked));

    let inner = document.createElement('div');
    inner.classList.add('interactive-video__inner');

    inner.append(video);
    inner.append(btnPlay);
    if(answers != null) {
      inner.append(answers);
    }
    inner.append(overlay);

    let view = document.createElement('div');
    view.classList.add('interactive-video');
    if(isFullscreen) {
      view.classList.add('interactive-video--fullscreen');
    }

    // view.append(btnClose);
    view.append(inner);

    return view;
  }

  _handlePlayClicked = (callback) => {
    return () => {
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
    // video.setAttribute('controls', '');
    video.classList.add('interactive-video__video');

    video.addEventListener('ended', onVideoPlayed);

    return video;
  }

  createQuestion(questionText) {
    if(!questionText) return null;

    let title = document.createElement('h2');

    title.classList.add('interactive-video__question-title');
    title.textContent = questionText;

    let questionContainer = document.createElement('div');
    questionContainer.classList.add('interactive-video__question');

    questionContainer.append(title);

    return questionContainer;
  }

  createAnswers(data, options) {
    if(!data) return null;

    let answers = document.createElement('div');

    answers.classList.add('interactive-video__answer-list');

    data.forEach((item) => {
      var answer = this.createAnswer(item, options);

      answers.append(answer);
    });

    return answers;
  }

  createButton(type, className) {
    let button = document.createElement('div');

    button.classList.add("material-icons", className);
    button.textContent = type;

    return button;
  }

  createAnswer(data, { onAnswerClick }) {
    let answer = document.createElement('button');

    answer.classList.add('btn', 'interactive-video__answer-item');

    answer.addEventListener('click', (event) => {
      onAnswerClick(data);
    });

    return answer;
  }
}