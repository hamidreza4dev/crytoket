import './swipers';
import './components';
import '../css/tailwind.css';
// assets
import DesktopLogoDark from '../assets/Logo-Desktop-Dark.svg';
import DesktopLogoLight from '../assets/Logo-Desktop-Light.svg';
import MobileLogoDark from '../assets/Logo-Mobile-Dark.svg';
import MobileLogoLight from '../assets/Logo-Mobile-Light.svg';

let dark = false;
const btnToggleMode = document.getElementById('toggle-mode');
btnToggleMode.addEventListener('click', function () {
  const iEl = this.querySelector('i');

  if (iEl.classList.contains('icon-moon')) {
    dark = true;
    toggleCheck(iEl);
    localStorage.setItem('dark', dark);
  } else {
    dark = false;
    toggleCheck(iEl);
    localStorage.setItem('dark', dark);
  }
});

window.addEventListener('load', function () {
  if (JSON.parse(localStorage.getItem('dark'))) {
    dark = true;
    toggleCheck(btnToggleMode.querySelector('i'));
  } else {
    dark = false;
    toggleCheck(btnToggleMode.querySelector('i'));
  }
});

const siteLogo = document.querySelectorAll('.site-logo');
function toggleCheck(iEl) {
  if (dark) {
    iEl.classList.replace('icon-moon', 'icon-sun');
    document.documentElement.classList.add('dark');

    siteLogo.forEach((item) => {
      if (item.getAttribute('data-mode') === 'desktop') {
        item.src = DesktopLogoDark;
      } else {
        item.src = MobileLogoDark;
      }
    });

    return;
  }

  iEl.classList.replace('icon-sun', 'icon-moon');
  document.documentElement.classList.remove('dark');

  siteLogo.forEach((item) => {
    if (item.getAttribute('data-mode') === 'desktop') {
      item.src = DesktopLogoLight;
    } else {
      item.src = MobileLogoLight;
    }
  });
}

/* modal */
const overlay = document.querySelector('.overlay');
function modal(targetModal) {
  const allModals = document.querySelectorAll('.modal');
  for (let i = 0; i < allModals.length; i++) {
    allModals[i].classList.remove('active');
  }

  const target = document.getElementById(targetModal);
  overlay.classList.add('active');
  target.classList.add('active');

  // close btn
  const closeModalBtn = target.querySelectorAll('.close-modal-btn');
  if (closeModalBtn.length) {
    closeModalBtn.forEach((item) => {
      item.addEventListener('click', closeModal, { once: true });
    });
  }
  overlay.addEventListener('click', closeModal, { once: true });

  // Escape Kay
  document.addEventListener(
    'keydown',
    (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    { once: true }
  );

  // toggle modal options
  function closeModal() {
    overlay.classList.remove('active');
    target.classList.remove('active');
  }
}

// checkout modal open
const openCheckoutBtn = document.getElementById('openCheckoutBtn');
openCheckoutBtn.addEventListener('click', function () {
  modal('checkout');
});

const continueCheckoutBtn = document.getElementById('continueCheckoutBtn');
continueCheckoutBtn.addEventListener('click', function () {
  modal('continueCheckout');
});
