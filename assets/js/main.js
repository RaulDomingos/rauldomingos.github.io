// ---------- Language init ----------
(function initLang(){
  const saved = localStorage.getItem('portfolio-lang');
  const browserLang = navigator.language && navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  const lang = saved || browserLang;
  applyLanguage(lang);
})();

document.getElementById('langToggle').addEventListener('click', ()=>{
  const current = document.documentElement.lang.startsWith('pt') ? 'pt' : 'en';
  applyLanguage(current === 'pt' ? 'en' : 'pt');
});

// ---------- Mobile nav ----------
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', ()=>{
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a=>{
  a.addEventListener('click', ()=> navLinks.classList.remove('open'));
});

// ---------- Scroll reveal ----------
const revealItems = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealItems.forEach(el=> observer.observe(el));

// ---------- Custom cursor ----------
const cursorDot = document.querySelector('.cursor-dot');
if(window.matchMedia('(hover: hover) and (pointer: fine)').matches){
  window.addEventListener('mousemove', (e)=>{
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, button').forEach(el=>{
    el.addEventListener('mouseenter', ()=>{
      cursorDot.style.width = '24px';
      cursorDot.style.height = '24px';
    });
    el.addEventListener('mouseleave', ()=>{
      cursorDot.style.width = '10px';
      cursorDot.style.height = '10px';
    });
  });
}
