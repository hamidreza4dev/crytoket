/* tab navigation */
const tabNavigation = document.querySelectorAll('.tab-navigation');
if (tabNavigation.length) {
  for (let i = 0; i < tabNavigation.length; i++) {
    const tabBtn = tabNavigation[i].querySelectorAll('.tab-btn');
    const tabItem = tabNavigation[i].querySelectorAll('.tab-item');

    for (let j = 0; j < tabBtn.length; j++) {
      tabBtn[j].addEventListener('click', () => {
        for (let k = 0; k < tabItem.length; k++) {
          tabItem[k].classList.remove('active');
        }
        for (let k = 0; k < tabBtn.length; k++) {
          tabBtn[k].classList.remove('active');
        }
        tabBtn[j].classList.add('active');
        tabItem[j].classList.add('active');
      });
    }
  }
}

/* accordion */
const accordion = document.querySelectorAll('.accordion-btn');
if (accordion.length) {
  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', () => {
      accordion[i].classList.toggle('active');
      let panel;

      if (accordion[i].getAttribute('data-target')) {
        panel = document.getElementById(accordion[i].getAttribute('data-target'));
      } else {
        panel = accordion[i].nextElementSibling;
      }

      if (panel.style.maxHeight) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        setTimeout(() => {
          panel.style.maxHeight = null;
        }, 1);
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        panel.addEventListener(
          'transitionend',
          function () {
            panel.style.maxHeight = 'unset';
          },
          { once: true }
        );
      }
    });
  }
}
