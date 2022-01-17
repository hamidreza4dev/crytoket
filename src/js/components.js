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
