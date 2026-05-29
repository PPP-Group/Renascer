/* =============================================================
   MAIN — Renascer Distribuidora de EPIs
   Inicialização geral do site
   ============================================================= */

(function() {
  'use strict';

  // === FAQ ACCORDION ===
  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function(item) {
    var question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', function() {
      var isOpen = item.classList.contains('open');
      
      // Fechar todos os outros
      faqItems.forEach(function(otherItem) {
        otherItem.classList.remove('open');
      });

      // Abrir/fechar o clicado
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // === ANO DINÂMICO NO FOOTER ===
  var yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // === LAZY LOADING DE IMAGENS (Nativo + Fallback) ===
  if ('loading' in HTMLImageElement.prototype) {
    // Suporte nativo — nada a fazer
  } else {
    // Fallback com Intersection Observer
    var lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      var imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
            }
            imageObserver.unobserve(img);
          }
        });
      });

      lazyImages.forEach(function(img) {
        imageObserver.observe(img);
      });
    }
  }

  // === PREVENIR FLASH DE CONTEÚDO NÃO ESTILIZADO ===
  document.documentElement.classList.add('js-loaded');

})();
