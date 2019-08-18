class Tabs {
  constructor(element) {
    this.element = element;
  }
  activeTab(index) {
    this.element.querySelectorAll('.tabs__item.status--active, .tabs__link.status--active').forEach(element => {
      element.classList.remove('status--active');
    });
    this.element.querySelector(`.tabs__item:nth-child(${index})`).classList.add('status--active');
    this.element.querySelector(`.tabs__links li:nth-child(${index}) .tabs__link`).classList.add('status--active');
  }
}