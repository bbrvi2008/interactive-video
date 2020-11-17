export default class Slider {
  constructor(items) {
    this.currentIndex = 0;
    this.items = items;
  }

  getCurrent() {
    let { currentIndex } = this;
    return this.items[currentIndex];
  }

  next() {
    let { currentIndex } = this;

    if(!this.items[currentIndex + 1]) return null;

    this.currentIndex = ++currentIndex;

    return this.items[currentIndex];
  }

  prev() {
    let { currentIndex } = this;

    if(!this.items[currentIndex - 1]) return null;

    this.currentIndex = --currentIndex;
    return this.items[currentIndex];
  }
}