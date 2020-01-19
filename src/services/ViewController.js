export default class ViewController {
  constructor(views) {
    this.views = views;
    this.current = views[0];
  }
  currentView() {
    return this.current.component;
  }
  nextView() {
    const index = this.views.indexOf(this.currentView());

    if (index < this.views.length - 1) {
      return (this.current = this.views[index + 1]);
    }
    return (this.current = this.views[0]);
  }
  previousView() {
    const index = this.views.indexOf(this.currentView());

    if (index > 0) {
      return (this.current = this.views[index - 1]);
    }

    return (this.current = this.views[this.views.length - 1]);
  }
}
