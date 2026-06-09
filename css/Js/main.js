// ===== AURE HOMES — MAIN JS =====

document.documentElement.classList.add('js-ready');

// ---- HAMBURGER MENU ----
(function() {
  var btn = document.querySelector('.hamburger');
  var nav = document.querySelector('.nav-links');
  if (!btn || !nav) return;

  function openMenu() {
    nav.classList.add('open');
    document.body.style.overflow = 'hidden';
    btn.querySelector('span:nth-child(1)').style.transform = 'rotate(45deg) translate(5px,5px)';
    btn.querySelector('span:nth-child(2)').style.opacity = '0';
    btn.querySelector('span:nth-child(3)').style.transform = 'rotate(-45deg) translate(5px,-5px)';
  }

  function closeMenu() {
    nav.classList.remove('open');
    document.body.style.overflow = '';
    btn.querySelectorAll('span').forEach(function(s) {
      s.style.transform = '';
      s.style.opacity = '';
    });
  }

  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    nav.classList.contains('open') ? closeMenu() : openMenu();
  });

  nav.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', function(e) {
    if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== btn) {
      closeMenu();
    }
  });
})();

// ---- NAVBAR SCROLL ----
var navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', function() {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ---- FADE-UP ANIMATIONS ----
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry, i) {
    if (entry.isIntersecting) {
      setTimeout(function() { entry.target.classList.add('visible'); }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll('.fade-up').forEach(function(el) { observer.observe(el); });

window.addEventListener('load', function() {
  document.querySelectorAll('.fade-up').forEach(function(el) {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('visible');
    }
  });
});

// ---- ACTIVE NAV ----
var currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(function(link) {
  if (link.getAttribute('href') === currentPage) link.classList.add('active');
});

// ---- COUNTER ANIMATION ----
function animateCounter(el) {
  var target = parseInt(el.getAttribute('data-target'));
  var step = target / (2000 / 16);
  var current = 0;
  var timer = setInterval(function() {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current) + (el.getAttribute('data-suffix') || '');
  }, 16);
}
var statsObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-target]').forEach(animateCounter);
      statsObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.stats-section').forEach(function(el) { statsObs.observe(el); });// ===== AURE HOMES — MAIN JS =====

document.documentElement.classList.add('js-ready');

// ---- HAMBURGER MENU ----
(function() {
  var btn = document.querySelector('.hamburger');
  var nav = document.querySelector('.nav-links');
  if (!btn || !nav) return;

  function openMenu() {
    nav.classList.add('open');
    document.body.style.overflow = 'hidden';
    btn.querySelector('span:nth-child(1)').style.transform = 'rotate(45deg) translate(5px,5px)';
    btn.querySelector('span:nth-child(2)').style.opacity = '0';
    btn.querySelector('span:nth-child(3)').style.transform = 'rotate(-45deg) translate(5px,-5px)';
  }

  function closeMenu() {
    nav.classList.remove('open');
    document.body.style.overflow = '';
    btn.querySelectorAll('span').forEach(function(s) {
      s.style.transform = '';
      s.style.opacity = '';
    });
  }

  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    nav.classList.contains('open') ? closeMenu() : openMenu();
  });

  nav.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', function(e) {
    if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== btn) {
      closeMenu();
    }
  });
})();

// ---- NAVBAR SCROLL ----
var navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', function() {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ---- FADE-UP ANIMATIONS ----
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry, i) {
    if (entry.isIntersecting) {
      setTimeout(function() { entry.target.classList.add('visible'); }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll('.fade-up').forEach(function(el) { observer.observe(el); });

window.addEventListener('load', function() {
  document.querySelectorAll('.fade-up').forEach(function(el) {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('visible');
    }
  });
});

// ---- ACTIVE NAV ----
var currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(function(link) {
  if (link.getAttribute('href') === currentPage) link.classList.add('active');
});

// ---- COUNTER ANIMATION ----
function animateCounter(el) {
  var target = parseInt(el.getAttribute('data-target'));
  var step = target / (2000 / 16);
  var current = 0;
  var timer = setInterval(function() {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current) + (el.getAttribute('data-suffix') || '');
  }, 16);
}
var statsObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-target]').forEach(animateCounter);
      statsObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.stats-section').forEach(function(el) { statsObs.observe(el); });v// ===== AURE HOMES — MAIN JS =====

document.documentElement.classList.add('js-ready');

// ---- HAMBURGER MENU ----
(function() {
  var btn = document.querySelector('.hamburger');
  var nav = document.querySelector('.nav-links');
  if (!btn || !nav) return;

  function openMenu() {
    nav.classList.add('open');
    document.body.style.overflow = 'hidden';
    btn.querySelector('span:nth-child(1)').style.transform = 'rotate(45deg) translate(5px,5px)';
    btn.querySelector('span:nth-child(2)').style.opacity = '0';
    btn.querySelector('span:nth-child(3)').style.transform = 'rotate(-45deg) translate(5px,-5px)';
  }

  function closeMenu() {
    nav.classList.remove('open');
    document.body.style.overflow = '';
    btn.querySelectorAll('span').forEach(function(s) {
      s.style.transform = '';
      s.style.opacity = '';
    });
  }

  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    nav.classList.contains('open') ? closeMenu() : openMenu();
  });

  nav.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', function(e) {
    if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== btn) {
      closeMenu();
    }
  });
})();

// ---- NAVBAR SCROLL ----
var navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', function() {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ---- FADE-UP ANIMATIONS ----
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry, i) {
    if (entry.isIntersecting) {
      setTimeout(function() { entry.target.classList.add('visible'); }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll('.fade-up').forEach(function(el) { observer.observe(el); });

window.addEventListener('load', function() {
  document.querySelectorAll('.fade-up').forEach(function(el) {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('visible');
    }
  });
});

// ---- ACTIVE NAV ----
var currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(function(link) {
  if (link.getAttribute('href') === currentPage) link.classList.add('active');
});

// ---- COUNTER ANIMATION ----
function animateCounter(el) {
  var target = parseInt(el.getAttribute('data-target'));
  var step = target / (2000 / 16);
  var current = 0;
  var timer = setInterval(function() {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current) + (el.getAttribute('data-suffix') || '');
  }, 16);
}
var statsObs = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-target]').forEach(animateCounter);
      statsObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.stats-section').forEach(function(el) { statsObs.observe(el); });

