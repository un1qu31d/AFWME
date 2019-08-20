const popups = {};
document.querySelectorAll('[data-component="popup"]').forEach(element => {
  popups[element.getAttribute('data-popup')] = new Popup(element);
});

const tabs = {};
document.querySelectorAll('[data-component="tabs"]').forEach(element => {
  tabs[element.getAttribute('data-tabs')] = new Tabs(element);
});

document.querySelectorAll('[data-switch]').forEach(element => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    switch(element.getAttribute('data-switch')) {
      case 'speaker':
        document.querySelector('.event-intro__video video').muted = !document.querySelector('.event-intro__video video').muted;
        break;
      case 'popup':
        document.querySelectorAll(`.component-popup:not([data-popup="${element.getAttribute('data-popup')}"])`).forEach(element => {
          popups[element.getAttribute('data-popup')].close();
        });
        document.querySelectorAll(`[data-switch][data-popup]:not([data-popup="${element.getAttribute('data-popup')}"])`).forEach(element => {
          element.querySelector('.icon').classList.remove('status--on');
          element.querySelector('.icon').classList.add('status--off');
        });
        popups[element.getAttribute('data-popup')].toggle();
        break;
    }
    element.querySelector('.icon').classList.toggle('status--on');
    element.querySelector('.icon').classList.toggle('status--off');
  });
});


document.querySelectorAll('.form__item__input.type--image .form__item__image').forEach(element => {
  element.addEventListener('click', (event) => {
    element.parentElement.querySelector('input[type="file"]').dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
});

document.querySelectorAll('.form__item__input.type--image input').forEach(element => {
  element.addEventListener('change', (event) => {
    if(element.files.length && ['png', 'jpeg', 'jpg', 'gif'].indexOf(element.value.substring(element.value.lastIndexOf('.') + 1).toLowerCase()) != -1) {
      const reader = new FileReader();
      reader.onload = event => {
        element.parentElement.querySelector('.form__item__image img').setAttribute('src', event.target.result);
      }
      reader.readAsDataURL(element.files[0]);
    }
  });
});

AOS.init();

// https://snazzymaps.com/
document.querySelectorAll('.component-map .map__view').forEach(element => {
  google.maps.event.addDomListener(window, 'load', function() {
    new google.maps.Marker({
      position: new google.maps.LatLng(40.6700, -73.9400),
      map: new google.maps.Map(element, {
        zoom: 11,
        center: new google.maps.LatLng(40.6700, -73.9400),
        styles: [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}]
      }),
      title: ''
    });
  });
});