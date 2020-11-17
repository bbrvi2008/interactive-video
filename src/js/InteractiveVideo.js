import Slider from './Slider';
import EventEmitter from './EventEmitter';
import InteractiveVideoView from './InteractiveVideoView';

const SlideType = {
  SIMPLE: 'simple',
  QUESTION: 'question'
}

const InteractiveVideoEvents = {
  SIMPLE_VIDEO_PLAYED: 'event:simple-video-played',
  QUESTION_VIDEO_PLAYED: 'event:question-video-played',
  ANSWER_CLICKED: 'event:answer-clicked'
}

export default class InteractiveVideo {
  constructor($container, scenario) {
    this.$container = $container;

    this.eventEmitter = new EventEmitter();
    this.slides = new Slider(scenario);

    this.bindEventHandlers()
  }

  show() {
    let currentSlideData = this.slides.getCurrent();
    this.createSlide(this.$container, currentSlideData);
  }

  _playSlide(slideData) {
    var slide = this.createSlide(this.$container, slideData);
    slide.video.addEventListener('canplay', () => {
      slide.video.play();
    });
  }

  bindEventHandlers() {
    this.eventEmitter.on(InteractiveVideoEvents.SIMPLE_VIDEO_PLAYED, this._handleSimpleVideoPlayed);
    this.eventEmitter.on(InteractiveVideoEvents.ANSWER_CLICKED, this._handleAnswerClicked)
  }

  _handleSimpleVideoPlayed = () => {
    let nextSlideData = this.slides.next();
    if(nextSlideData) {
      this._playSlide(nextSlideData);
    }
  }

  _handleAnswerClicked = (answer) => {
    if(answer.isRight && !answer.videoLink) {
      this._handleSimpleVideoPlayed();
    }

    let nextSlideData = answer.isRight
      ? this.createSlideDataFromVideoLink(answer.videoLink)
      : this.createSlideDataFromAnswer(answer);

    this._playSlide(nextSlideData);
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
    let { answers } = this.slides.getCurrent();

    return {
      type: SlideType.QUESTION,
      question: {
        videoLink
      },
      answers
    };
  }

  createSimpleSlide($container, slide) {
    return new InteractiveVideoView($container, slide, {
      onVideoPlayed: () => {
        this.eventEmitter.emit(InteractiveVideoEvents.SIMPLE_VIDEO_PLAYED);
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
      }
    });

    view.answers.classList.add('hidden');

    return view;
  }
}