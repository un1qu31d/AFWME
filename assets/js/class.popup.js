class Popup {
  constructor(element) {
    this.element = element;
    this.active = this.element.classList.contains('status--active');
    if (this.active) {
      document.querySelectorAll('.component-section:not(.theme--overlay)').forEach(element => {
        element.classList.add('theme--blur');
      });
    }
  }
  open() {
    document.querySelectorAll('.component-section:not(.theme--overlay)').forEach(element => {
      element.classList.add('theme--blur');
    });
    this.element.classList.add('status--active');
    this.active = true;
  }
  close() {
    document.querySelectorAll('.component-section:not(.theme--overlay)').forEach(element => {
      element.classList.remove('theme--blur');
    });
    this.element.classList.remove('status--active');
    this.active = false;
  }
  toggle() {
    if (this.active) {
      this.close();
    } else {
      this.open();
    }
  }
}