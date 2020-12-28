export default class ViewConsole {
  constructor($container) {
    this.$container = $container;
  }

  createRow(text) {
    const row = document.createElement('div');
    // row.classList.add('')
    row.textContent = text;

    this.$container.appendChild(row);
  }

  log(text) {
    this.createRow(text);
  }
}