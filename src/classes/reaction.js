export default class Reaction {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  changeColor(color) {
    this.color = color;
  }
}
