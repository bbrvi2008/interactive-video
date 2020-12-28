import debounce from 'lodash/debounce';

import Slider from './Slider';
import EventEmitter from 'events';
import InteractiveVideoView from './InteractiveVideoView';

const SlideType = {
  SIMPLE: 'simple',
  QUESTION: 'question'
};

const InteractiveVideoEvents = {
  SIMPLE_VIDEO_PLAYED: 'event:simple-video-played',
  QUESTION_VIDEO_PLAYED: 'event:question-video-played',
  ANSWER_CLICKED: 'event:answer-clicked',
  PLAY_CLICKED: 'event:play-clicked',
  CLOSE_CLICKED: 'event:close-clicked'
};


class InteractiveAudio {
  constructor($container, { link }) {
    this.$container = $container;

    this.player = this.createView(this.getLink(link))
  }

  getLink(link) {
    console.log(link);

    return link;

    if(location.hostname === 'www.admkrsk.ru') return link;

    return `//www.admkrsk.ru${link}`;
  }

  play() {
    this.player.play()
  }

  pause() {
    this.player.pause();
  }

  createView(link) {
    let audio = document.createElement('audio');

    audio.setAttribute('preload', 'auto');
    audio.setAttribute('playsinline', '');
    audio.setAttribute('src', link);

    return audio;
  }
}

export default class InteractiveVideo {
  constructor($container, { questions, audio }) {
    this.$container = $container;

    this.eventEmitter = new EventEmitter();
    this.slides = new Slider(questions);
    // this.audio = new InteractiveAudio($container, audio);

    this.bindEventHandlers()
  }

  show() {
    let currentSlideData = this.slides.getCurrent();
    this.currentSlide = this.createSlide(this.$container, currentSlideData);
    this.currentSlide.show();
  }

  _playSlide(slideData) {
    if(this.intervalId) return;
    // this._handleAudio(slideData);
    
    var slide = this.createSlide(this.$container, {
      isFullscreen: true,
      ...slideData
    });

    this.intervalId = setInterval(() => {
      // console.log(slide.video.readyState);

      if(slide.video.readyState > 0) {
        // viewConsole.log(slide.video.readyState);

        clearInterval(this.intervalId);
        this.intervalId = null;
        slide.video.play();
        slide.show();
        
        this.currentSlide.hide();
        this.currentSlide = slide;
      }
    }, 200)

    // viewConsole.log('_playSlide end');
  }

  _handleAudio({ rank }) {
    if(rank == 1) {
      this.audio.play()
    }

    if(rank === 6) {
      this.audio.pause();
    }
  }

  bindEventHandlers() {
    this.eventEmitter.on(InteractiveVideoEvents.SIMPLE_VIDEO_PLAYED, this._handleSimpleVideoPlayed);
    this.eventEmitter.on(InteractiveVideoEvents.ANSWER_CLICKED, this._handleAnswerClicked);
    this.eventEmitter.on(InteractiveVideoEvents.PLAY_CLICKED, this._handlePlayClicked);
    this.eventEmitter.on(InteractiveVideoEvents.CLOSE_CLICKED, this._handleCloseClicked);
  }

  _handleSimpleVideoPlayed = () => {
    let nextSlideData = this.slides.next();
    if(nextSlideData) {
      this._playSlide(nextSlideData);
    }
  }

  _handleAnswerClicked = (answer) => {
    // console.log('_handleAnswerClicked');
    if(this.currentSlide.video.duration - 2 > this.currentSlide.video.currentTime) return;

    if(answer.isRight && !answer.videoLink) {
      this._handleSimpleVideoPlayed();
      return;
    }
    
    let nextSlideData = answer.isRight
      ? this.createSlideDataFromVideoLink(answer.videoLink)
      : this.createSlideDataFromAnswer(answer);

    this._playSlide(nextSlideData);
  }

  _handlePlayClicked = () => {

  }

  _handleCloseClicked = () => {
    
  }

  createSlide($container, slideData) {
    if(slideData.type == SlideType.SIMPLE) {
      return this.createSimpleSlide($container, slideData);
    }

    if(slideData.type == SlideType.QUESTION) {
      return this.createQuestionSlide($container, slideData);
    }

    return null;
  }

  createSlideDataFromVideoLink(videoLink) {
    return {
      type: SlideType.SIMPLE,
      question: {
        videoLink
      }
    };
  }

  createSlideDataFromAnswer({ videoLink }) {
    let { answers, question } = this.slides.getCurrent();

    return {
      type: SlideType.QUESTION,
      question: {
        text: question.text,
        videoLink
      },
      answers
    };
  }

  createSimpleSlide($container, slide) {
    return new InteractiveVideoView($container, slide, {
      onVideoPlayed: () => {
        this.eventEmitter.emit(InteractiveVideoEvents.SIMPLE_VIDEO_PLAYED);
      },
      onPlayClicked: () => {
        this.eventEmitter.emit(InteractiveVideoEvents.PLAY_CLICKED);
      },
      onCloseClicked: () => {
        this.eventEmitter.emit(InteractiveVideoEvents.CLOSE_CLICKED);
      }
    });
  }

  createQuestionSlide($container, slide) {
    var view = new InteractiveVideoView($container, slide, {
      onAnswerClick: (data) => {
        this.eventEmitter.emit(InteractiveVideoEvents.ANSWER_CLICKED, data);
      },
      onVideoPlayed: () => {
        view.answers.classList.remove('hidden');
      },
      onPlayClicked: () => {
        this.eventEmitter.emit(InteractiveVideoEvents.PLAY_CLICKED);
      },
      onCloseClicked: () => {
        this.eventEmitter.emit(InteractiveVideoEvents.CLOSE_CLICKED);
      }
    });

    view.answers.classList.add('hidden');

    return view;
  }
}