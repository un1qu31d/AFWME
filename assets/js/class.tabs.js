class Tabs {
  constructor(element) {
    this.element = element;
    
    document.querySelectorAll('[data-link]').forEach(element => {
      element.addEventListener('click', (event) => {
        event.preventDefault();
        switch(element.getAttribute('data-link')) {
          case 'tab':
            tabs[element.getAttribute('data-tabs')].activeTab(element.getAttribute('data-tab'));
            break;
        }
      });
    });
  }
  activeTab(index) {
    this.element.querySelectorAll('.tabs__item.status--active, .tabs__link.status--active').forEach(element => {
      element.classList.remove('status--active');
    });
    this.element.querySelector(`.tabs__item:nth-child(${index})`).classList.add('status--active');
    this.element.querySelector(`.tabs__links li:nth-child(${index}) .tabs__link`).classList.add('status--active');
  }
}