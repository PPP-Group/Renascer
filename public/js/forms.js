/* =============================================================
   FORMULÁRIOS — Renascer Distribuidora de EPIs
   Validação e envio do formulário de contato
   ============================================================= */

(function() {
  'use strict';

  var form = document.getElementById('contact-form');
  if (!form) return;

  // === VALIDAÇÃO DE CAMPOS ===
  function validateField(input) {
    var value = input.value.trim();
    var isValid = true;
    var errorMsg = '';

    // Campo obrigatório
    if (input.hasAttribute('required') && !value) {
      isValid = false;
      errorMsg = 'Este campo é obrigatório';
    }

    // Validação de e-mail
    if (input.type === 'email' && value) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMsg = 'Insira um e-mail válido';
      }
    }

    // Validação de telefone
    if (input.type === 'tel' && value) {
      var phoneClean = value.replace(/\D/g, '');
      if (phoneClean.length < 10 || phoneClean.length > 11) {
        isValid = false;
        errorMsg = 'Insira um telefone válido';
      }
    }

    // Mostrar/esconder erro
    var errorElement = input.parentElement.querySelector('.form-error');
    
    if (!isValid) {
      input.style.borderColor = 'var(--color-red)';
      if (!errorElement) {
        errorElement = document.createElement('span');
        errorElement.className = 'form-error';
        errorElement.style.cssText = 'color: var(--color-red-light); font-size: 0.75rem; margin-top: 0.25rem; display: block;';
        input.parentElement.appendChild(errorElement);
      }
      errorElement.textContent = errorMsg;
    } else {
      input.style.borderColor = '';
      if (errorElement) {
        errorElement.remove();
      }
    }

    return isValid;
  }

  // Validação em tempo real ao sair do campo
  var inputs = form.querySelectorAll('.form-input, .form-textarea');
  inputs.forEach(function(input) {
    input.addEventListener('blur', function() {
      validateField(this);
    });

    // Limpar erro ao digitar
    input.addEventListener('input', function() {
      if (this.style.borderColor) {
        this.style.borderColor = '';
        var errorElement = this.parentElement.querySelector('.form-error');
        if (errorElement) errorElement.remove();
      }
    });
  });

  // === MÁSCARA DE TELEFONE ===
  var phoneInput = form.querySelector('input[type="tel"]');
  if (phoneInput) {
    phoneInput.addEventListener('input', function() {
      var value = this.value.replace(/\D/g, '');
      
      if (value.length <= 2) {
        this.value = value.length ? '(' + value : '';
      } else if (value.length <= 7) {
        this.value = '(' + value.substring(0, 2) + ') ' + value.substring(2);
      } else if (value.length <= 10) {
        this.value = '(' + value.substring(0, 2) + ') ' + value.substring(2, 6) + '-' + value.substring(6);
      } else {
        this.value = '(' + value.substring(0, 2) + ') ' + value.substring(2, 7) + '-' + value.substring(7, 11);
      }
    });
  }

  // === ENVIO DO FORMULÁRIO ===
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validar todos os campos obrigatórios
    var allValid = true;
    var requiredInputs = form.querySelectorAll('[required]');
    
    requiredInputs.forEach(function(input) {
      if (!validateField(input)) {
        allValid = false;
      }
    });

    if (!allValid) {
      // Focar no primeiro campo com erro
      var firstError = form.querySelector('.form-input[style*="border-color"], .form-textarea[style*="border-color"]');
      if (firstError) firstError.focus();
      return;
    }

    // Coletar dados do formulário
    var formData = new FormData(form);
    var data = {};
    formData.forEach(function(value, key) {
      if (data[key]) {
        if (!Array.isArray(data[key])) {
          data[key] = [data[key]];
        }
        data[key].push(value);
      } else {
        data[key] = value;
      }
    });

    // Simular envio (em produção, substituir por chamada real à API)
    var submitBtn = form.querySelector('button[type="submit"]');
    var originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<span>ENVIANDO...</span>';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    // Simulação de envio — em produção usar fetch/axios
    setTimeout(function() {
      // Sucesso
      submitBtn.innerHTML = '<span>✓ MENSAGEM ENVIADA!</span>';
      submitBtn.style.background = '#25D366';
      
      // Reset após 3 segundos
      setTimeout(function() {
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '';
        submitBtn.style.background = '';
      }, 3000);

      // Log no console para debug (remover em produção)
      console.log('Dados do formulário:', data);
    }, 1500);
  });

})();
