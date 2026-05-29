# 🏗️ Prompt Mestre — Landing Page Renascer Distribuidora de EPIs

> Documento de briefing técnico e criativo para construção do website institucional da Renascer Distribuidora de EPIs. Utilize este prompt como guia definitivo para implementação com LLMs (Claude Sonnet).

---

## 🎯 Contexto e Objetivo

Construa uma **landing page institucional completa, responsiva e de alta conversão** para a **Renascer Distribuidora de EPIs**, empresa com mais de 15 anos de mercado, sediada em Minas Gerais, Brasil. O site deve transmitir **credibilidade industrial**, **segurança** e **confiança**, ao mesmo tempo sendo visualmente moderno, inovador e funcional.

**Público-alvo:** Empresas industriais, construtoras, mineradoras e gestores de segurança do trabalho em busca de um fornecedor confiável de EPIs.

**Objetivo principal:** Gerar leads e contatos comerciais, transmitindo autoridade e profissionalismo.

---

## 📁 Estrutura de Pastas do Projeto

```
renascer-website/
├── index.html
├── README.md
├── assets/
│   ├── images/
│   │   ├── hero-worker.jpg          # Imagem hero (trabalhador industrial)
│   │   ├── about-team.jpg           # Seção sobre a empresa
│   │   └── products/                # Imagens de produtos EPIs
│   ├── logo/
│   │   ├── logo-primary.svg         # Logo fundo escuro (principal)
│   │   ├── logo-white.svg           # Logo versão branca
│   │   └── logo-dark.svg            # Logo fundo claro
│   └── icons/
│       └── favicon.ico
├── css/
│   ├── design-system.css            # Tokens, variáveis, tipografia
│   ├── components.css               # Componentes reutilizáveis
│   ├── sections.css                 # Estilos por seção
│   ├── animations.css               # Keyframes e transições
│   └── responsive.css               # Media queries
├── js/
│   ├── main.js                      # Inicialização geral
│   ├── animations.js                # Scroll reveal, counters
│   ├── navigation.js                # Menu mobile, scroll behavior
│   └── forms.js                     # Validação e envio de formulário
└── fonts/
    └── (fontes locais se necessário)
```

---

## 🎨 Design System — Tokens e Identidade Visual

### Paleta de Cores Oficiais (extraída do logo)

```css
/* design-system.css */
:root {
  /* === CORES PRIMÁRIAS === */
  --color-navy:       #003051;   /* Azul marinho — cor principal da marca */
  --color-red:        #CC2323;   /* Vermelho — cor de acento/destaque */
  --color-cream:      #F9F9F4;   /* Off-white — texto sobre fundos escuros */

  /* === TONS DERIVADOS === */
  --color-navy-dark:  #001e38;   /* Azul mais escuro para gradientes */
  --color-navy-mid:   #004a7c;   /* Azul médio para hover states */
  --color-red-dark:   #9e1a1a;   /* Vermelho escuro para hover */
  --color-red-light:  #e63333;   /* Vermelho claro para brilhos */

  /* === NEUTROS === */
  --color-white:      #ffffff;
  --color-gray-100:   #f5f5f5;
  --color-gray-200:   #e8e8e8;
  --color-gray-400:   #9a9a9a;
  --color-gray-600:   #555555;
  --color-gray-800:   #222222;
  --color-black:      #0a0a0a;

  /* === FUNDOS DE SEÇÃO === */
  --bg-dark:    var(--color-navy);
  --bg-darker:  var(--color-navy-dark);
  --bg-light:   var(--color-gray-100);
  --bg-white:   var(--color-white);
  --bg-accent:  var(--color-red);
}
```

### Tipografia

```css
:root {
  /* Importar no <head>: */
  /* @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap'); */

  /* Display / Headlines impactantes — industrial, bold */
  --font-display: 'Barlow Condensed', sans-serif;

  /* Body / Interface — legível, limpo */
  --font-body: 'Barlow', sans-serif;

  /* Escalas */
  --text-xs:   0.75rem;    /* 12px */
  --text-sm:   0.875rem;   /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg:   1.125rem;   /* 18px */
  --text-xl:   1.25rem;    /* 20px */
  --text-2xl:  1.5rem;     /* 24px */
  --text-3xl:  1.875rem;   /* 30px */
  --text-4xl:  2.25rem;    /* 36px */
  --text-5xl:  3rem;       /* 48px */
  --text-6xl:  4rem;       /* 64px */
  --text-hero: clamp(3.5rem, 9vw, 7rem);  /* Headline hero responsivo */

  /* Pesos */
  --weight-light:     300;
  --weight-regular:   400;
  --weight-medium:    500;
  --weight-semibold:  600;
  --weight-bold:      700;
  --weight-extrabold: 800;
  --weight-black:     900;
}
```

### Espaçamento e Grid

```css
:root {
  --container-max:   1280px;
  --container-wide:  1440px;
  --gutter:          clamp(1rem, 4vw, 2rem);

  --space-xs:   0.25rem;
  --space-sm:   0.5rem;
  --space-md:   1rem;
  --space-lg:   1.5rem;
  --space-xl:   2rem;
  --space-2xl:  3rem;
  --space-3xl:  4rem;
  --space-4xl:  6rem;
  --space-5xl:  8rem;

  --radius-sm:  4px;
  --radius-md:  8px;
  --radius-lg:  16px;
  --radius-pill: 999px;

  --shadow-sm:  0 2px 8px rgba(0,0,0,0.08);
  --shadow-md:  0 8px 24px rgba(0,0,0,0.12);
  --shadow-lg:  0 20px 60px rgba(0,0,0,0.18);
  --shadow-red: 0 8px 32px rgba(204,35,35,0.3);
}
```

### Componentes Base (Botões, Tags, Cards)

```css
/* Botão primário */
.btn-primary {
  background: var(--color-red);
  color: var(--color-white);
  font-family: var(--font-display);
  font-weight: var(--weight-bold);
  font-size: var(--text-sm);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.875rem 2rem;
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
}
.btn-primary:hover {
  background: var(--color-red-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-red);
}

/* Botão secundário (outline) */
.btn-outline {
  background: transparent;
  color: var(--color-cream);
  border: 2px solid var(--color-cream);
  /* mesmos padding/font do .btn-primary */
  transition: background 0.2s, color 0.2s;
}
.btn-outline:hover {
  background: var(--color-cream);
  color: var(--color-navy);
}

/* Tag de categoria */
.tag {
  display: inline-block;
  background: var(--color-red);
  color: white;
  font-family: var(--font-display);
  font-size: var(--text-xs);
  font-weight: var(--weight-bold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.3rem 0.75rem;
  border-radius: 2px;
}
```

---

## 🗂️ Seções do Site — Estrutura e Conteúdo

### 1. `<header>` — Navegação Sticky

**Comportamento:** Transparente no topo da página. Ao rolar 80px, recebe fundo `#003051` sólido com sombra.

```
LOGO (SVG)              [HOME] [QUEM SOMOS] [PRODUTOS] [ATENDIMENTO] [CONTATO]        [FALE CONOSCO ▶]
```

**Mobile (< 768px):** Logo à esquerda + botão hambúrguer à direita. Menu fullscreen ao abrir.

**Componentes necessários:**
- Logo SVG importado inline (para controle de cor via CSS)
- Nav links com `font-family: Barlow Condensed`, `font-weight: 700`, `letter-spacing: 0.05em`
- CTA button vermelho "FALE CONOSCO"
- Scroll listener em JavaScript para classe `.scrolled`

---

### 2. `#hero` — Seção Hero (Tela Cheia)

**Altura:** `100vh` mínimo, com imagem de fundo parallax leve.

**Layout:** Fundo escuro (overlay gradiente sobre foto industrial), com trabalhador equipado.

**Conteúdo:**
```
[TAG VERMELHA: "DISTRIBUIDORA OFICIAL DE EPIs"]

PROTEGEMOS
QUEM TRABALHA.

Há mais de 15 anos fornecendo EPIs homologados para empresas de 
todos os portes em Minas Gerais e região.

[CONHEÇA NOSSO CATÁLOGO ▶]    [FALAR COM CONSULTOR]

──────────────────────────────────────────
+15 anos          +400 clientes       6 cidades
de mercado        atendidos           atendidas
```

**Detalhes técnicos:**
- Headline usa `font: var(--weight-black) var(--text-hero) var(--font-display)`, `line-height: 0.9`, `text-transform: uppercase`, `color: var(--color-cream)`
- A palavra "TRABALHA." recebe cor `var(--color-red)` (destaque)
- Overlay: `linear-gradient(135deg, rgba(0,30,56,0.92) 0%, rgba(0,48,81,0.7) 60%, transparent 100%)`
- Stats em linha na parte inferior, separadas por linha `1px solid rgba(255,255,255,0.15)`
- Animação de entrada: staggered fade-up com `animation-delay` em cascata

---

### 3. `#logos` — Barra de Marcas / Clientes

**Estilo:** Fundo `var(--color-cream)`, linha elegante com texto "Marcas que distribuímos" centralizado.

**Conteúdo:** Logos de fabricantes de EPIs (Carbografite, Vonder, 3M, Honeywell, Deltaplus, etc.) em cinza com hover colorido.

**Animação:** Scroll infinito horizontal (CSS `@keyframes scroll`).

---

### 4. `#sobre` — Quem Somos

**Layout:** Grid 2 colunas — texto à esquerda, imagem + métricas à direita.

**Fundo:** Branco `#ffffff`

**Conteúdo:**

```
[TAG: "SOBRE A EMPRESA"]

CONSTRUÍDOS SOBRE
CONFIANÇA E SEGURANÇA.

A Renascer nasceu do compromisso genuíno com a proteção de quem 
trabalha. Há mais de 15 anos atuamos com EPIs homologados pelo 
Ministério do Trabalho, atendendo empresas de diferentes portes 
e segmentos em toda a região de Minas Gerais.

Nossa equipe oferece não apenas produtos, mas soluções completas 
em segurança do trabalho: consultoria, agilidade na entrega e um 
portfólio amplo de equipamentos certificados.

[CONHECER NOSSOS PRODUTOS ▶]
```

**Coluna direita:** Imagem real + cards flutuantes com números animados (counter.js):
- `+15 anos` de experiência
- `+400 clientes` satisfeitos
- `6 cidades` atendidas

**Cards de destaque (3 abaixo do texto):**
- 🛡️ EPIs Homologados pelo MTE
- 🚚 Entrega Ágil na Região
- 🤝 Atendimento Personalizado

---

### 5. `#produtos` — Catálogo de Produtos

**Fundo:** `var(--color-gray-100)`

**Layout:** Header da seção centralizado + grid de categorias em cards.

**Header:**
```
[TAG: "NOSSO PORTFÓLIO"]
EQUIPAMENTOS PARA
CADA NECESSIDADE.
```

**Categorias (cards 3×2 grid, desktop / 1 col mobile):**

| Ícone | Categoria | Descrição curta |
|-------|-----------|-----------------|
| 👟 | Calçados de Segurança | Botinas nitrílicas, composite, com/sem bico |
| 🧤 | Luvas de Proteção | Nitrílica, raspa, malha de aço, latex |
| ⛑️ | Capacetes e Cabeça | Capacetes tipo I e II, protetores auditivos |
| 👓 | Proteção Visual | Óculos, viseiras e proteção facial |
| 🦺 | Roupas de Proteção | Macacões, aventais, vestes refletivas |
| 🔧 | Ferramentas e Outros | Cintos, talabartes, extintores, kits |

**Card hover:** lift + borda vermelha lateral esquerda + seta de "Ver produtos →"

**Botão final:** "SOLICITAR CATÁLOGO COMPLETO" (CTA vermelho centralizado)

---

### 6. `#diferenciais` — Por Que Escolher a Renascer

**Fundo:** `var(--color-navy)` (azul escuro)

**Layout:** Fundo com textura sutil + lista de diferenciais em grid 4 colunas.

**Conteúdo:**
```
[TAG BRANCA: "NOSSOS DIFERENCIAIS"]
A ESCOLHA CERTA PARA
PROTEGER SUA EQUIPE.
```

**4 Cards:**

1. **Certificação MTE** — Todos os nossos EPIs possuem Certificado de Aprovação (CA) emitido pelo Ministério do Trabalho e Emprego.

2. **Entrega Rápida** — Atendemos com agilidade nas 6 cidades da região. Pedidos urgentes têm prioridade.

3. **Consultoria Gratuita** — Nosso time avalia as necessidades da sua empresa e indica os EPIs corretos para cada função.

4. **Variedade Completa** — Do capacete à botina, temos um portfólio amplo para equipar sua equipe do início ao fim.

---

### 7. `#cobertura` — Cidades Atendidas

**Fundo:** Branco, com mapa estilizado de Minas Gerais (SVG decorativo) ou imagem regional.

**Conteúdo:**
```
Atendemos em toda a região:

● Cláudio        ● Oliveira        ● Carmo da Mata
● Divinópolis    ● Itaguara        ● Carmópolis de Minas
```

**Visual:** Pins animados sobre mapa. Cards com nome da cidade e ícone de localização.

---

### 8. `#depoimentos` — Prova Social

**Fundo:** `var(--color-gray-100)`

**Layout:** Carrossel de 3 cards de depoimentos com foto, nome, empresa e avaliação.

**Formato dos cards:**
```
★★★★★
"Ótimo atendimento e entrega rápida. Os EPIs são todos certificados 
e a consultoria ajudou muito na escolha correta para nossa obra."

— [Nome], Gestor de Segurança | [Empresa]
```

---

### 9. `#faq` — Perguntas Frequentes

**Fundo:** Branco

**Formato:** Accordion (expand/collapse com animação suave).

**Perguntas sugeridas:**
1. Os EPIs possuem Certificado de Aprovação (CA)?
2. Vocês atendem empresas de pequeno porte?
3. Como funciona a consultoria gratuita?
4. Qual o prazo de entrega?
5. Vocês fazem entrega fora das cidades listadas?
6. Aceitam compras em grandes quantidades com desconto?

---

### 10. `#contato` — Formulário de Contato / CTA Final

**Fundo:** `var(--color-navy)` com textura sutil

**Layout:** 2 colunas — CTA à esquerda, formulário à direita.

**CTA esquerda:**
```
PRONTO PARA PROTEGER
SUA EQUIPE?

Fale com um de nossos consultores e encontre 
os EPIs ideais para o seu negócio.

📞 (35) 40028922
✉️ antonio@renascer.com
🌐 www.renascer.com

[WhatsApp ▶]  [Ligar Agora ▶]
```

**Formulário direita:**
```
Nome completo*
E-mail*
Telefone / WhatsApp*
Nome da empresa
[ ] Calçados  [ ] Luvas  [ ] Capacetes  [ ] Outros
Mensagem

[ENVIAR MENSAGEM ▶]
```

---

### 11. `<footer>` — Rodapé

**Fundo:** `#001e38` (azul mais escuro)

```
[LOGO BRANCO]                  EMPRESA        PRODUTOS        CONTATO
                                Quem Somos     Calçados        (35) 40028922
Proteger quem trabalha é o     Diferenciais   Luvas           antonio@renascer.com
nosso compromisso de cada dia. Cidades         Capacetes       www.renascer.com
                                               Roupas
                                [LinkedIn] [WhatsApp] [Instagram]

──────────────────────────────────────────────────────────────
© 2026 Renascer Distribuidora de EPIs. Todos os direitos reservados.
```

---

## 🎬 Animações e Interações

### Scroll Reveal (Intersection Observer API)

```javascript
// animations.js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
```

**Classes de animação:**
```css
[data-animate] { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
[data-animate].visible { opacity: 1; transform: translateY(0); }
[data-animate="left"] { transform: translateX(-40px); }
[data-animate="right"] { transform: translateX(40px); }
[data-animate="scale"] { transform: scale(0.9); }
```

### Counter Animation (Stats)

```javascript
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    element.textContent = Math.floor(start) + element.dataset.suffix;
    if (start >= target) {
      element.textContent = target + element.dataset.suffix;
      clearInterval(timer);
    }
  }, 16);
}
```

### Navbar Scroll Effect

```javascript
// navigation.js
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  nav.classList.toggle('scrolled', window.scrollY > 80);
});
```

### FAQ Accordion

```javascript
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-question').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});
```

---

## 📱 Responsividade — Breakpoints

```css
/* responsive.css */

/* Mobile first */
/* Base: < 480px */

/* Tablet pequeno */
@media (min-width: 480px) { }

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Desktop largo */
@media (min-width: 1280px) { }
```

**Regras críticas de responsividade:**

| Elemento | Desktop | Tablet (768px) | Mobile (480px) |
|----------|---------|----------------|----------------|
| Nav | Horizontal | Horizontal | Hambúrguer fullscreen |
| Hero headline | `clamp(3.5rem, 9vw, 7rem)` | `clamp(2.5rem, 6vw, 4rem)` | `2.5rem` |
| Hero stats | 3 colunas inline | 3 colunas inline | 1 coluna |
| Sobre | 2 colunas | 1 coluna | 1 coluna |
| Produtos grid | 3 colunas | 2 colunas | 1 coluna |
| Diferenciais | 4 colunas | 2 colunas | 1 coluna |
| Contato | 2 colunas | 1 coluna | 1 coluna |
| Footer | 4 colunas | 2 colunas | 1 coluna |

---

## 🔧 SEO e Performance

### Meta Tags (no `<head>`)
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Renascer Distribuidora de EPIs | Equipamentos de Segurança em Minas Gerais</title>
<meta name="description" content="Há mais de 15 anos fornecendo EPIs homologados pelo MTE. Calçados, luvas, capacetes e muito mais. Atendemos em Cláudio, Oliveira, Divinópolis e região. Fale conosco!">
<meta name="keywords" content="EPI Minas Gerais, distribuidor EPI, EPIs homologados, segurança do trabalho, botina, luvas proteção, capacete">
<link rel="canonical" href="https://www.renascer.com">

<!-- Open Graph -->
<meta property="og:title" content="Renascer Distribuidora de EPIs">
<meta property="og:description" content="Proteger quem trabalha é o nosso compromisso de cada dia.">
<meta property="og:image" content="https://www.renascer.com/assets/images/og-image.jpg">
<meta property="og:url" content="https://www.renascer.com">

<!-- Schema.org LocalBusiness -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Renascer Distribuidora de EPIs",
  "telephone": "+55-35-40028922",
  "email": "antonio@renascer.com",
  "url": "https://www.renascer.com",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "MG",
    "addressCountry": "BR"
  }
}
</script>
```

---

## ✅ Checklist de Qualidade

Antes de considerar o projeto concluído, verifique:

- [ ] **Design System** implementado com CSS variables em `design-system.css`
- [ ] **Todas as 11 seções** implementadas com conteúdo real (sem lorem ipsum)
- [ ] **Logo SVG** incorporado inline com controle de cor via CSS
- [ ] **Cores da marca** usadas consistentemente (`#003051`, `#CC2323`, `#F9F9F4`)
- [ ] **Tipografia** com Barlow Condensed (display) + Barlow (body) do Google Fonts
- [ ] **Hero** com headline impactante, stats e dois CTAs
- [ ] **Animações** de scroll reveal em todas as seções
- [ ] **Counter animation** nas stats da hero e seção "Quem Somos"
- [ ] **Navbar sticky** com efeito ao rolar
- [ ] **Menu mobile** funcional com animação de abertura
- [ ] **FAQ accordion** com transição suave
- [ ] **Formulário de contato** com validação básica (campos obrigatórios)
- [ ] **Responsivo** em 320px, 480px, 768px, 1024px e 1280px
- [ ] **Performance:** imagens com `loading="lazy"`, CSS crítico inline
- [ ] **Acessibilidade:** `alt` em todas as imagens, `aria-label` nos botões de ícone
- [ ] **SEO:** meta tags, Open Graph e Schema.org implementados
- [ ] **WhatsApp CTA** flutuante no canto inferior direito (mobile priority)

---

## 🚀 Instruções Finais para o LLM

1. **Leia este documento integralmente** antes de escrever qualquer linha de código.
2. **Crie todos os arquivos na estrutura de pastas descrita**, não colapse tudo em um único arquivo.
3. **Use somente HTML, CSS e JavaScript vanilla** — sem frameworks externos pesados. Bootstrap e jQuery são proibidos.
4. **Importe do Google Fonts:** `Barlow+Condensed:wght@700;800;900` e `Barlow:wght@300;400;500;600`
5. **Não use lorem ipsum** — use o conteúdo real descrito em cada seção.
6. **Botão WhatsApp flutuante** fixo no `position: fixed; bottom: 24px; right: 24px` com ícone SVG do WhatsApp e link `https://wa.me/553540028922`.
7. **O logo SVG da marca** deve ser incorporado inline no HTML para máxima flexibilidade.
8. **Todas as animações** devem respeitar `@media (prefers-reduced-motion: reduce)` — desativar animações quando o usuário preferir.
9. **Comente o código** em português para facilitar manutenção futura.
10. **Entregue um `README.md`** explicando a estrutura do projeto e como rodar localmente.

---

*Renascer Distribuidora de EPIs — "Proteger quem trabalha é o nosso compromisso de cada dia."*  
*Contato: (35) 40028922 | antonio@renascer.com | www.renascer.com*
