# Renascer Distribuidora de EPIs — Landing Page

Landing page institucional da **Renascer Distribuidora de EPIs**, empresa com mais de 15 anos de mercado em Minas Gerais.

## 🚀 Como Rodar Localmente

### Opção 1: Abrir diretamente no navegador
Basta abrir o arquivo `public/index.html` diretamente no seu navegador.

### Opção 2: Usar um servidor local (recomendado)

```bash
# Com Python 3
cd public
python -m http.server 8000

# Com Node.js (npx)
cd public
npx serve .

# Com VS Code
# Instale a extensão "Live Server" e clique em "Go Live"
```

Acesse: `http://localhost:8000`

## 📁 Estrutura do Projeto

```
public/
├── index.html                    # Página principal
├── css/
│   ├── design-system.css         # Tokens, variáveis, tipografia, reset
│   ├── components.css            # Botões, cards, tags, formulário
│   ├── sections.css              # Estilos específicos de cada seção
│   ├── animations.css            # Keyframes e scroll reveal
│   └── responsive.css            # Media queries (mobile-first)
├── js/
│   ├── main.js                   # FAQ accordion, lazy loading, inicialização
│   ├── animations.js             # Scroll reveal, contadores animados
│   ├── navigation.js             # Navbar sticky, menu mobile, smooth scroll
│   └── forms.js                  # Validação e envio do formulário
└── assets/
    └── images/
        ├── hero-worker.jpg       # Imagem hero (trabalhador industrial)
        ├── about-team.jpg        # Seção sobre a empresa
        └── logotipo/             # Logos em diferentes formatos
            ├── SVG/
            ├── PNG/
            └── SEM FUNDO/
```

## 🎨 Design System

### Cores da Marca
| Cor | Hex | Uso |
|-----|-----|-----|
| Azul Marinho | `#003051` | Cor principal da marca |
| Vermelho | `#CC2323` | Acento/destaque |
| Creme | `#F9F9F4` | Texto sobre fundos escuros |

### Tipografia
- **Headlines:** Barlow Condensed (700, 800, 900)
- **Corpo:** Barlow (300, 400, 500, 600)

## 📱 Responsividade

O site é totalmente responsivo, otimizado para:
- **Mobile:** 320px - 479px
- **Tablet pequeno:** 480px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px - 1279px
- **Desktop largo:** 1280px+

## ✅ Funcionalidades

- Navbar sticky com efeito ao rolar
- Menu hamburger mobile com overlay fullscreen
- Animações de scroll reveal (Intersection Observer)
- Contadores animados nas estatísticas
- FAQ accordion interativo
- Formulário com validação em tempo real
- Máscara de telefone brasileiro
- Botão WhatsApp flutuante com animação pulsante
- Scroll suave entre seções
- Suporte a `prefers-reduced-motion`

## 🔧 Tecnologias

- HTML5 semântico
- CSS3 com Custom Properties (variáveis)
- JavaScript Vanilla (sem frameworks)
- Google Fonts (Barlow + Barlow Condensed)

## 📞 Contato

- **Telefone:** (35) 4002-8922
- **E-mail:** antonio@renascer.com
- **Website:** www.renascer.com

---

*"Proteger quem trabalha é o nosso compromisso de cada dia."*
