const btn = document.querySelector('.nav-toggle');
const nav = document.querySelector('#primary-nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}


