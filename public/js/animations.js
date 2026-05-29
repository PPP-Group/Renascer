/* =============================================================
   ANIMAÇÕES — Renascer Distribuidora de EPIs
   Scroll reveal com Intersection Observer, contadores animados
   ============================================================= */

(function() {
  'use strict';

  // === SCROLL REVEAL (Intersection Observer API) ===
  const animatedElements = document.querySelectorAll('[data-animate]');

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Parar de observar após revelar (performance)
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(function(el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback para navegadores sem suporte
    animatedElements.forEach(function(el) {
      el.classList.add('visible');
    });
  }

  // === COUNTER ANIMATION (Stats) ===
  function animateCounter(element, target, duration) {
    duration = duration || 2000;
    var start = 0;
    var increment = target / (duration / 16);
    var suffix = element.dataset.suffix || '';
    var prefix = element.dataset.prefix || '';

    function updateCounter() {
      start += increment;
      if (start >= target) {
        element.textContent = prefix + target + suffix;
        return;
      }
      element.textContent = prefix + Math.floor(start) + suffix;
      requestAnimationFrame(updateCounter);
    }

    requestAnimationFrame(updateCounter);
  }

  // Observar contadores e animar quando visíveis
  var counterElements = document.querySelectorAll('[data-counter]');

  if ('IntersectionObserver' in window && counterElements.length > 0) {
    var counterObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.dataset.counter, 10);
          var duration = parseInt(el.dataset.duration, 10) || 2000;
          animateCounter(el, target, duration);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counterElements.forEach(function(el) {
      counterObserver.observe(el);
    });
  } else {
    // Fallback — mostrar valor final direto
    counterElements.forEach(function(el) {
      var target = el.dataset.counter;
      var suffix = el.dataset.suffix || '';
      var prefix = el.dataset.prefix || '';
      el.textContent = prefix + target + suffix;
    });
  }

})();
