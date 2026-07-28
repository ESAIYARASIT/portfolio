// ============ ICONS ============
// lucide.js is loaded with `defer`, so by DOMContentLoaded it's guaranteed ready
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
});

// ============ FOOTER STAT COUNTERS ============
const statNumbers = document.querySelectorAll('.stat-number');

function animateCount(el){
  const target = Number(el.dataset.target);
  let current = 0;
  const step = Math.max(target / 40, 0.05);
  const tick = () => {
    current += step;
    if(current >= target){
      el.textContent = target;
      return;
    }
    el.textContent = Math.floor(current);
    requestAnimationFrame(tick);
  };
  tick();
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      animateCount(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
statNumbers.forEach(el => statObserver.observe(el));

// ============ BACK TO TOP ============
const backToTop = document.getElementById('backToTop');
const heroSection = document.getElementById('home');

window.addEventListener('scroll', () => {
  const heroBottom = heroSection.offsetTop + heroSection.querySelector('.hero-card').offsetHeight;
  if (window.scrollY > heroBottom) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============ PAGE LOADER ============
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('hidden'), 700);
});

// ============ YEAR ============
document.getElementById('year').textContent = new Date().getFullYear();

// ============ MOBILE NAV TOGGLE ============
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// ============ TYPING EFFECT (ROLES) ============
const roles = ['Full Stack Developer', 'MERN Stack Developer', 'Frontend Developer', 'Software Developer'];
const typedEl = document.getElementById('typedRole');
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop(){
  const current = roles[roleIndex];

  if(!deleting){
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if(charIndex === current.length){
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if(charIndex === 0){
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 90);
}
typeLoop();

// ============ HERO AUTO-SLIDER ============
const heroSlides = document.querySelectorAll('.hero-slide');
const heroDots = document.querySelectorAll('#heroPagination span');
let currentSlide = 2;
let heroSlideTimer;

function goToSlide(index){
  heroSlides.forEach(slide => slide.classList.remove('active'));
  heroDots.forEach(dot => dot.classList.remove('active'));
  heroSlides[index].classList.add('active');
  heroDots[index].classList.add('active');
  currentSlide = index;
}

function nextSlide(){
  goToSlide((currentSlide + 1) % heroSlides.length);
}

function startHeroAutoplay(){
  clearInterval(heroSlideTimer);
  heroSlideTimer = setInterval(nextSlide, 4500);
}

if(heroSlides.length && heroDots.length){
  heroDots.forEach(dot => {
    dot.addEventListener('click', () => {
      goToSlide(Number(dot.dataset.goto));
      startHeroAutoplay();
    });
  });
  startHeroAutoplay();
}

// ============ FADE-IN ON SCROLL ============
const fadeEls = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
fadeEls.forEach(el => fadeObserver.observe(el));

// ============ LEARNING JOURNEY LINE GRAPH (draw-in animation) ============
const journeyPath = document.getElementById('journeyPath');
if(journeyPath){
  const journeyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        journeyPath.classList.add('drawn');
        journeyObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  journeyObserver.observe(journeyPath);
}

// ============ PROJECT FLIP CARDS (tap-to-flip for touch devices) ============
document.querySelectorAll('.project-flip').forEach(flipCard => {
  flipCard.addEventListener('click', () => {
    const inner = flipCard.querySelector('.flip-inner');
    inner.classList.toggle('flipped');
  });
});

// ============ MAGNETIC BUTTONS ============
const magneticEls = document.querySelectorAll('.magnetic');

magneticEls.forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'translate(0, 0)';
  });
});

// ============ ACTIVE NAV LINK ON SCROLL ============
const sections = document.querySelectorAll('.section-block, .hero');
const navAnchors = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = 'home';
  document.querySelectorAll('[id]').forEach(section => {
    const top = section.offsetTop - 140;
    if(window.scrollY >= top){
      current = section.getAttribute('id');
    }
  });
  navAnchors.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === `#${current}`){
      link.classList.add('active');
    }
  });
});

// ============ STAR RATING ============
const stars = document.querySelectorAll('#stars span');
let selectedRating = 0;

stars.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = Number(star.dataset.value);
    stars.forEach(s => {
      s.classList.toggle('active', Number(s.dataset.value) <= selectedRating);
    });
  });
});

// ============ FEEDBACK FORM ============
const form = document.getElementById('feedbackForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Replace this with a real submission (e.g. Formspree, EmailJS, or your own backend)
  formSuccess.classList.add('show');
  form.reset();
  stars.forEach(s => s.classList.remove('active'));
  selectedRating = 0;
  setTimeout(() => formSuccess.classList.remove('show'), 4000);
});

// ============ RESUME DOWNLOAD FEEDBACK (optional console log) ============
document.getElementById('resumeBtn').addEventListener('click', () => {
  console.log('Resume download triggered');
});

// ============ PROJECTS SIDE-SCROLL CAROUSEL ============
const projectsScroll = document.getElementById('projectsScroll');
const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');

if (projectsScroll && carouselPrev && carouselNext) {
  const scrollAmount = () => Math.min(projectsScroll.clientWidth * 0.85, 360);

  carouselPrev.addEventListener('click', () => {
    projectsScroll.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  });
  carouselNext.addEventListener('click', () => {
    projectsScroll.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  });
}
