document.addEventListener('DOMContentLoaded', () => {
  const mapElement = document.getElementById('coverage-map');
  
  if (!mapElement || typeof L === 'undefined') return;

  // Cidades e suas coordenadas reais
  const cities = {
    'claudio': { name: 'Cláudio', coords: [-20.4431, -44.7656], desc: 'Sede e Centro de Distribuição' },
    'oliveira': { name: 'Oliveira', coords: [-20.6983, -44.8281], desc: 'Atendimento e Logística Rápida' },
    'carmo-da-mata': { name: 'Carmo da Mata', coords: [-20.5564, -44.8731], desc: 'Cobertura Regional' },
    'divinopolis': { name: 'Divinópolis', coords: [-20.1389, -44.8836], desc: 'Polo Industrial' },
    'itaguara': { name: 'Itaguara', coords: [-20.3939, -44.4861], desc: 'Atendimento e Entregas' },
    'carmopolis': { name: 'Carmópolis de Minas', coords: [-20.5353, -44.6317], desc: 'Cobertura Regional' }
  };

  const centerCoords = [-20.44, -44.7]; // Centro aproximado da região

  // Inicializa o mapa com opções limpas
  const map = L.map('coverage-map', {
    center: centerCoords,
    zoom: 10,
    zoomControl: false, // Remove controle de zoom para visual mais limpo
    scrollWheelZoom: false, // Evita zoom acidental no scroll da página
    dragging: !L.Browser.mobile // Desabilita drag em mobile para evitar prender a tela
  });

  // TileLayer: CartoDB Positron (visual corporativo e minimalista)
  L.tileLayer('https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap &copy; CartoDB',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  // Armazena referências dos marcadores
  const markers = {};

  // Custom Icon para o pin
  const createCustomIcon = () => {
    return L.divIcon({
      className: 'custom-pin-wrapper',
      html: '<div class="map-pin"></div>',
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });
  };

  // Círculo de área de cobertura
  const coverageArea = L.circle([-20.4186, -44.6848], { // Centro exato entre todas as cidades
    color: '#CC2323',
    fillColor: '#CC2323',
    fillOpacity: 0.05,
    weight: 1,
    radius: 45000, // 45km garante que Divinópolis e Oliveira (as mais extremas) fiquem dentro
    dashArray: '5, 10'
  });

  // Adiciona os pins no mapa e configura os tooltips
  Object.entries(cities).forEach(([key, data]) => {
    const marker = L.marker(data.coords, {
      icon: createCustomIcon(),
      zIndexOffset: 100
    });

    const tooltipContent = `
      ${data.name}
      <span class="map-tooltip-desc">${data.desc}</span>
    `;

    marker.bindTooltip(tooltipContent, {
      className: 'map-tooltip',
      direction: 'top',
      offset: [0, -10],
      opacity: 1
    });

    marker.addTo(map);
    markers[key] = marker;

    // Interação Pin -> Card
    marker.on('mouseover', () => {
      const card = document.querySelector(`.city-card[data-city="${key}"]`);
      if (card) card.classList.add('city-card--active');
      
      const pinElement = marker.getElement().querySelector('.map-pin');
      if (pinElement) pinElement.classList.add('map-pin--active');
      
      marker.setZIndexOffset(1000); // Traz para frente
    });

    marker.on('mouseout', () => {
      const card = document.querySelector(`.city-card[data-city="${key}"]`);
      if (card) card.classList.remove('city-card--active');
      
      const pinElement = marker.getElement().querySelector('.map-pin');
      if (pinElement) pinElement.classList.remove('map-pin--active');
      
      marker.setZIndexOffset(100);
    });
  });

  // Interação Card -> Pin e Map Center
  const cards = document.querySelectorAll('.city-card');
  
  cards.forEach(card => {
    const cityKey = card.getAttribute('data-city');
    const marker = markers[cityKey];
    
    if (!marker) return;

    card.addEventListener('mouseenter', () => {
      marker.openTooltip();
      const pinElement = marker.getElement().querySelector('.map-pin');
      if (pinElement) pinElement.classList.add('map-pin--active');
      marker.setZIndexOffset(1000);
    });

    card.addEventListener('mouseleave', () => {
      marker.closeTooltip();
      const pinElement = marker.getElement().querySelector('.map-pin');
      if (pinElement) pinElement.classList.remove('map-pin--active');
      marker.setZIndexOffset(100);
    });

    card.addEventListener('click', () => {
      const coords = cities[cityKey].coords;
      map.flyTo(coords, 12, {
        duration: 1.5,
        easeLinearity: 0.25
      });
    });
  });

  // Intersection Observer para animar a entrada
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Adiciona a área de cobertura com delay
        setTimeout(() => {
          coverageArea.addTo(map);
        }, 500);

        // Dispara re-render do mapa (corrige possíveis problemas de tamanho do Leaflet quando inicializado em divs invisíveis)
        map.invalidateSize();
        
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(document.querySelector('.coverage'));
});
