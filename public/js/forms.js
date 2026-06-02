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

    // Formatar mensagem para WhatsApp
    var whatsappNumber = '553540028922';
    var text = 'Olá! Gostaria de fazer um contato através do site.\n\n';
    
    if (data.nome) text += '*Nome:* ' + data.nome + '\n';
    if (data.email) text += '*E-mail:* ' + data.email + '\n';
    if (data.telefone || data.whatsapp) text += '*Telefone:* ' + (data.telefone || data.whatsapp) + '\n';
    if (data.empresa) text += '*Empresa:* ' + data.empresa + '\n';
    
    if (data.interesse) {
      var interesses = Array.isArray(data.interesse) ? data.interesse.join(', ') : data.interesse;
      text += '*Interesse em:* ' + interesses + '\n';
    }
    
    if (data.mensagem) text += '\n*Mensagem:*\n' + data.mensagem;

    var whatsappUrl = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(text);

    // Feedback visual e Redirecionamento
    var submitBtn = form.querySelector('button[type="submit"]');
    var originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<span>REDIRECIONANDO PARA WHATSAPP...</span>';
    submitBtn.style.background = '#25D366'; // Cor do WhatsApp
    submitBtn.disabled = true;

    setTimeout(function() {
      window.open(whatsappUrl, '_blank');
      
      // Limpa e reseta o formulário
      setTimeout(function() {
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = '';
      }, 1000);
    }, 800);
  });

})();
