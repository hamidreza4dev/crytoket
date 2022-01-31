import './swipers';
import './components';
import '../css/tailwind.css';
// assets
import DesktopLogoDark from '../assets/Logo-Desktop-Dark.svg';
import DesktopLogoLight from '../assets/Logo-Desktop-Light.svg';
import MobileLogoDark from '../assets/Logo-Mobile-Dark.svg';
import MobileLogoLight from '../assets/Logo-Mobile-Light.svg';

// save state for dark mode
let dark = false;

const btnToggleMode = document.getElementById('toggle-mode');
// toggle dark mode while btn clicks
btnToggleMode.addEventListener('click', function () {
  const iEl = this.querySelector('i');

  // "iEl" is for replacing icon src
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

// check theme when the window laods
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
function checkLogo(desktopLogo, mobileLogo) {
  // check if screen size is in "md"
  if (window.matchMedia('(max-width:767px)').matches) {
    siteLogo.forEach((item) => item.setAttribute('data-mode', 'mobile'));
  }

  siteLogo.forEach((logo) => {
    // get all children "<source>" and "<img>"
    [...logo.children].forEach((src) => {
      // check if element is "<img>"
      if (src.src) {
        if (logo.getAttribute('data-mode') === 'desktop') {
          src.src = desktopLogo;
        } else {
          src.src = mobileLogo;
        }
      }
      // check if element is "<source>"
      if (src.srcset) {
        if (logo.getAttribute('data-mode') === 'desktop') {
          src.srcset = desktopLogo;
        } else {
          src.srcset = mobileLogo;
        }
      }
    });
  });
}

// toggleDark mode
function toggleCheck(iEl) {
  if (dark) {
    // change button logo
    iEl.classList.replace('icon-moon', 'icon-sun');
    // toggle classList for Tailwind
    document.documentElement.classList.add('dark');
    // toggle logo
    checkLogo(DesktopLogoDark, MobileLogoDark);

    return;
  }

  // change button logo
  iEl.classList.replace('icon-sun', 'icon-moon');
  // toggle classList for Tailwind
  document.documentElement.classList.remove('dark');
  // toggle logo
  checkLogo(DesktopLogoLight, MobileLogoLight);
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
if (openCheckoutBtn) {
  openCheckoutBtn.addEventListener('click', function () {
    modal('checkout');
  });

  const continueCheckoutBtn = document.getElementById('continueCheckoutBtn');
  continueCheckoutBtn.addEventListener('click', function () {
    modal('continueCheckout');
  });
}
