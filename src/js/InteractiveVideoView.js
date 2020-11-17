export default class InteractiveVideoView {
  constructor($container, {question, answers}, options) {
    this.clear($container);

    this.video = this.createVideo(question.videoLink, options);
    this.answers = this.createAnswers(answers, options);
    
    let view = this.createView(this.video, this.answers);

    $container.append(view);
  }

  clear($container) {
    let childrens = Array.from($container.children);

    childrens.forEach(children => {
      children.remove();
    });
  }

  createView(video, answers) {
    var view = document.createElement('div');

    view.classList.add('interactive-video');

    view.append(video);
    if(answers != null) {
      view.append(answers);
    }

    return view;
  }

  createVideo(link, { onVideoPlayed }) {
    let video = document.createElement('video');

    video.setAttribute('src', link);
    video.setAttribute('preload', 'auto');
    video.setAttribute('controls', '');
    video.classList.add('interactive-video__video');

    video.addEventListener('ended', onVideoPlayed);

    return video;
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