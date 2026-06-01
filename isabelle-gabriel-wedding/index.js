/**
 * LÓGICA PRINCIPAL - SITE DE CASAMENTO ISABELLE & GABRIEL
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Inicializar Ícones Lucide
  lucide.createIcons();
  
  // 2. Menu Responsivo Mobile
  const mobileMenuBtn = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    const icon = mobileMenuBtn.querySelector("i");
    if (mobileMenu.classList.contains("hidden")) {
      icon.setAttribute("data-lucide", "menu");
    } else {
      icon.setAttribute("data-lucide", "x");
    }
    lucide.createIcons();
  });
  
  // Fechar menu mobile ao clicar em um link
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenuBtn.querySelector("i").setAttribute("data-lucide", "menu");
      lucide.createIcons();
    });
  });

  // 3. Contagem Regressiva
  function updateCountdown() {
    const targetDate = new Date(WeddingConfig.weddingDate).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      document.getElementById("countdown-container").innerHTML = `
        <div class="col-span-4 bg-primary text-white p-4 rounded-xl shadow-md font-display tracking-wider text-base uppercase">
          Chegou o Grande Dia! 🤍
        </div>
      `;
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("countdown-days").innerText = days.toString().padStart(2, '0');
    document.getElementById("countdown-hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("countdown-minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("countdown-seconds").innerText = seconds.toString().padStart(2, '0');
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // 4. Mapa Interativo (Leaflet)
  let map;
  function initMap() {
    const coords = [WeddingConfig.venueCoordinates.lat, WeddingConfig.venueCoordinates.lng];
    
    // Inicializa o mapa
    map = L.map("wedding-map", {
      scrollWheelZoom: false
    }).setView(coords, 15);
    
    // Adiciona o tile layer CartoDB Voyager (Tema pastel/champagne premium)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map);

    // Custom Icon (Pin de Coração)
    const heartIcon = L.divIcon({
      html: `<div class="bg-primary text-white p-2 rounded-full shadow-lg border-2 border-white flex items-center justify-center animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
             </div>`,
      className: 'custom-div-icon',
      iconSize: [36, 36],
      iconAnchor: [18, 36]
    });

    // Adiciona marcador
    L.marker(coords, { icon: heartIcon }).addTo(map)
      .bindPopup(`<strong class="text-primary font-display uppercase tracking-wide text-xs">${WeddingConfig.venueName}</strong><br><span class="text-xs">${WeddingConfig.venueAddress}</span>`)
      .openPopup();
  }

  try {
    initMap();
  } catch (err) {
    console.error("Erro ao inicializar mapa Leaflet:", err);
  }

  // 4.1. Cartões Interativos do Evento (Foto 1: Data, Localização, Traje)
  const cardDatetime = document.getElementById("card-datetime");
  const cardLocation = document.getElementById("card-location");
  const cardDress = document.getElementById("card-dress");
  
  const mapContainer = document.getElementById("wedding-map");
  const inviteContainer = document.getElementById("wedding-invitation-container");
  const dressContainer = document.getElementById("wedding-dress-container");

  function activeCard(card, targetContainer) {
    // Resetar estilos de todos os cartões
    [cardDatetime, cardLocation, cardDress].forEach(c => {
      c.classList.remove("border-primary", "bg-primary/[0.02]", "ring-1", "ring-primary/20");
      c.classList.add("border-stone-200/50", "bg-white");
    });
    // Ativar o cartão selecionado
    card.classList.remove("border-stone-200/50", "bg-white");
    card.classList.add("border-primary", "bg-primary/[0.02]", "ring-1", "ring-primary/20");

    // Ocultar todos os contêineres à direita
    [mapContainer, inviteContainer, dressContainer].forEach(container => {
      container.classList.remove("opacity-100", "z-10");
      container.classList.add("opacity-0", "pointer-events-none", "z-0");
    });
    // Exibir o contêiner selecionado
    targetContainer.classList.remove("opacity-0", "pointer-events-none", "z-0");
    targetContainer.classList.add("opacity-100", "z-10");
  }

  if (cardDatetime && cardLocation && cardDress) {
    // Por padrão, a localização (mapa) está ativa
    activeCard(cardLocation, mapContainer);

    cardDatetime.addEventListener("click", () => {
      activeCard(cardDatetime, inviteContainer);
    });
    cardLocation.addEventListener("click", () => {
      activeCard(cardLocation, mapContainer);
      // Redesenhar o mapa para corrigir possíveis falhas de tamanho ao reexibir
      if (map) {
        setTimeout(() => { map.invalidateSize(); }, 300);
      }
    });
    cardDress.addEventListener("click", () => {
      activeCard(cardDress, dressContainer);
    });
  }

  // 5. Abas de Dicas
  const tabBtnHotels = document.getElementById("tab-btn-hotels");
  const tabBtnBeauty = document.getElementById("tab-btn-beauty");
  const tabBtnAttractions = document.getElementById("tab-btn-attractions");
  
  function renderTips(category) {
    const container = document.getElementById("dicas-content-container");
    container.innerHTML = "";
    
    // Atualizar estilo visual dos botões de abas
    [tabBtnHotels, tabBtnBeauty, tabBtnAttractions].forEach(btn => {
      btn.classList.remove("border-primary", "text-primary");
      btn.classList.add("border-transparent", "text-stone-500");
    });
    
    let activeBtn;
    let items = [];
    
    if (category === "hotels") {
      activeBtn = tabBtnHotels;

      const PAGE_SIZE = 4;
      const hotels = WeddingConfig.tips.hotels;
      const totalPages = Math.ceil(hotels.length / PAGE_SIZE);
      const page = window._hotelPage || 0;
      const slice = hotels.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

      const hotelCards = slice.map(hotel => `
        <div class="bg-champagne/30 border border-stone-200/50 p-6 rounded-2xl shadow-sm flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <h4 class="font-serif text-lg font-bold text-primary">${hotel.name}</h4>
            <p class="text-stone-500 text-xs flex items-center gap-1"><i data-lucide="map-pin" class="h-3 w-3"></i> ${hotel.address}</p>
            ${hotel.description ? `<p class="text-stone-600 text-xs leading-relaxed">${hotel.description}</p>` : ''}
          </div>
          <div class="pt-2 border-t border-stone-200/40 flex flex-wrap gap-2 items-center text-xs">
            ${hotel.price ? `<span class="font-serif text-base font-bold text-primary">${hotel.price}</span>` : ''}
            ${hotel.regime ? `<span class="bg-primary/10 text-primary px-2 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide">${hotel.regime}</span>` : ''}
            ${hotel.phone ? `<span class="text-primary font-semibold flex items-center gap-0.5 ml-auto"><i data-lucide="phone" class="h-3 w-3"></i> ${hotel.phone}</span>` : ''}
          </div>
        </div>
      `).join("");

      // Paginação
      const pagination = totalPages > 1 ? `
        <div class="col-span-full flex items-center justify-center gap-4 pt-4">
          <button id="hotel-prev" ${page === 0 ? 'disabled' : ''}
            class="flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/25 text-primary text-xs font-semibold tracking-wide transition-all
              ${page === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary hover:text-white hover:border-primary'}">
            <i data-lucide="chevron-left" class="h-3.5 w-3.5"></i> Anterior
          </button>
          <span class="text-xs text-stone-400 font-medium tracking-wide">${page + 1} de ${totalPages}</span>
          <button id="hotel-next" ${page === totalPages - 1 ? 'disabled' : ''}
            class="flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/25 text-primary text-xs font-semibold tracking-wide transition-all
              ${page === totalPages - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-primary hover:text-white hover:border-primary'}">
            Próximos <i data-lucide="chevron-right" class="h-3.5 w-3.5"></i>
          </button>
        </div>
      ` : '';

      activeBtn.classList.remove("border-transparent", "text-stone-500");
      activeBtn.classList.add("border-primary", "text-primary");
      container.innerHTML = hotelCards + pagination;
      lucide.createIcons();

      // Eventos dos botões de página
      const prevBtn = document.getElementById("hotel-prev");
      const nextBtn = document.getElementById("hotel-next");
      if (prevBtn) prevBtn.addEventListener("click", () => {
        if (window._hotelPage > 0) { window._hotelPage--; renderTips("hotels"); }
      });
      if (nextBtn) nextBtn.addEventListener("click", () => {
        if (window._hotelPage < totalPages - 1) { window._hotelPage++; renderTips("hotels"); }
      });
      return;
    } else if (category === "beauty") {
      activeBtn = tabBtnBeauty;
      items = WeddingConfig.tips.beautySalons.map(salon => `
        <div class="bg-champagne/30 border border-stone-200/50 p-6 rounded-2xl shadow-sm space-y-3">
          <h4 class="font-serif text-lg font-bold text-primary">${salon.name}</h4>
          <p class="text-stone-500 text-xs flex items-center gap-1"><i data-lucide="map-pin" class="h-3 w-3"></i> ${salon.address}</p>
          <p class="text-stone-600 text-xs leading-relaxed">${salon.description}</p>
          <div class="pt-2 border-t border-stone-200/40 text-xs text-primary font-semibold flex items-center gap-1">
            <i data-lucide="phone" class="h-3 w-3"></i> Contato: ${salon.phone}
          </div>
        </div>
      `);
    } else {
      activeBtn = tabBtnAttractions;
      items = WeddingConfig.tips.attractions.map(attraction => `
        <div class="bg-champagne/30 border border-stone-200/50 p-6 rounded-2xl shadow-sm space-y-2">
          <h4 class="font-serif text-lg font-bold text-primary">${attraction.name}</h4>
          <p class="text-stone-500 text-xs flex items-center gap-1"><i data-lucide="map-pin" class="h-3 w-3"></i> ${attraction.address}</p>
          <p class="text-stone-600 text-xs leading-relaxed">${attraction.description}</p>
        </div>
      `);
    }
    
    activeBtn.classList.remove("border-transparent", "text-stone-500");
    activeBtn.classList.add("border-primary", "text-primary");
    
    container.innerHTML = items.join("");
    lucide.createIcons();
  }
  
  tabBtnHotels.addEventListener("click", () => { window._hotelPage = 0; renderTips("hotels"); });
  tabBtnBeauty.addEventListener("click", () => renderTips("beauty"));
  tabBtnAttractions.addEventListener("click", () => renderTips("attractions"));
  
  // Render inicial de dicas (Hotéis)
  window._hotelPage = 0;
  renderTips("hotels");

  // 6. Lista de Presentes
  let currentGiftFilter = "all";
  
  function renderGifts() {
    const grid = document.getElementById("gifts-grid");
    grid.innerHTML = "";
    
    const filteredGifts = WeddingConfig.gifts.filter(gift => {
      if (currentGiftFilter === "all") return true;
      return gift.category === currentGiftFilter;
    });
    
    filteredGifts.forEach(gift => {
      const priceText = gift.price ? `R$ ${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(gift.price)}` : "Qualquer valor";
      
      const card = document.createElement("div");
      card.className = "bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex flex-col justify-between";
      card.innerHTML = `
        <div class="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-champagne to-lightBg border-b border-stone-100 flex items-center justify-center p-6">
          <div class="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center shadow-md border border-stone-200/20 transform hover:scale-110 transition duration-300">
            <i data-lucide="${gift.icon}" class="w-8 h-8"></i>
          </div>
          <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-stone-200/50">
            ${gift.category}
          </span>
        </div>
        <div class="p-5 flex-grow flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <h4 class="font-serif text-lg font-semibold text-primary leading-snug line-clamp-2 min-h-[3.5rem] flex items-center">${gift.title}</h4>
            <p class="text-stone-500 text-xs leading-relaxed line-clamp-2">${gift.description}</p>
          </div>
          <div class="flex items-center justify-between pt-2 border-t border-stone-100">
            <span class="font-serif text-[1.2rem] font-bold text-accentGold">${priceText}</span>
            <button class="bg-primary hover:bg-primaryDark text-white px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition transform active:scale-95" data-gift-id="${gift.id}">
              Presentear
            </button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
    
    // Inicializa os ícones Lucide recém-renderizados
    lucide.createIcons();
    
    // Adicionar eventos para botões "Presentear"
    grid.querySelectorAll("button[data-gift-id]").forEach(btn => {
      btn.addEventListener("click", () => {
        const giftId = btn.getAttribute("data-gift-id");
        openCheckoutModal(giftId);
      });
    });
  }

  // Eventos de filtro
  document.querySelectorAll("#gifts-filters button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#gifts-filters button").forEach(b => {
        b.className = "px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white border border-stone-200 text-stone-600 hover:bg-stone-50 transition";
      });
      btn.className = "px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary text-white transition";
      currentGiftFilter = btn.getAttribute("data-filter");
      renderGifts();
    });
  });

  renderGifts();

  // 7. Modal de Checkout de Presente
  const modal = document.getElementById("checkout-modal");
  const modalContent = document.getElementById("checkout-modal-content");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const modalNextBtn = document.getElementById("modal-next-btn");
  const modalStep1 = document.getElementById("modal-step-1");
  const modalStep2 = document.getElementById("modal-step-2");
  
  const payBtnPix = document.getElementById("pay-btn-pix");
  const payBtnCard = document.getElementById("pay-btn-card");
  const screenPix = document.getElementById("payment-pix-screen");
  const screenCard = document.getElementById("payment-card-screen");
  
  const copyPixBtn = document.getElementById("copy-pix-btn");
  const confirmPixPaidBtn = document.getElementById("confirm-pix-paid-btn");
  
  let selectedGift = null;
  let qrcodeObj = null;

  function openCheckoutModal(giftId) {
    selectedGift = WeddingConfig.gifts.find(g => g.id === giftId);
    if (!selectedGift) return;
    
    // Resetar passos e formulário
    modalStep1.classList.remove("hidden");
    modalStep2.classList.add("hidden");
    document.getElementById("guest-name").value = "";
    document.getElementById("guest-email").value = "";
    document.getElementById("guest-message").value = "";
    
    const amountFieldContainer = document.getElementById("dynamic-amount-container");
    const amountField = document.getElementById("guest-amount");
    
    if (selectedGift.price === null) {
      amountFieldContainer.classList.remove("hidden");
      amountField.required = true;
      amountField.value = "";
      document.getElementById("modal-gift-price").innerText = "Escolha um valor livre";
    } else {
      amountFieldContainer.classList.add("hidden");
      amountField.required = false;
      amountField.value = selectedGift.price;
      document.getElementById("modal-gift-price").innerText = `Valor: R$ ${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(selectedGift.price)}`;
    }
    
    document.getElementById("modal-gift-title").innerText = selectedGift.title;
    
    // Exibir Modal com transição
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    setTimeout(() => {
      modalContent.classList.remove("scale-95", "opacity-0");
      modalContent.classList.add("scale-100", "opacity-100");
    }, 10);
  }

  function closeModal() {
    modalContent.classList.remove("scale-100", "opacity-100");
    modalContent.classList.add("scale-95", "opacity-0");
    setTimeout(() => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }, 150);
  }

  closeModalBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Próximo passo (Validação do Formulário e Geração de Payload)
  modalNextBtn.addEventListener("click", () => {
    const name = document.getElementById("guest-name").value.trim();
    const email = document.getElementById("guest-email").value.trim();
    const amountVal = parseFloat(document.getElementById("guest-amount").value);
    
    if (!name || !email) {
      alert("Por favor, preencha seu nome e e-mail.");
      return;
    }
    
    if (selectedGift.price === null && (isNaN(amountVal) || amountVal < 10)) {
      alert("Por favor, insira uma cota de no mínimo R$ 10,00.");
      return;
    }
    
    // Ir para tela de pagamentos
    modalStep1.classList.add("hidden");
    modalStep2.classList.remove("hidden");
    
    // Configurar Tela 1: Pix
    const amount = selectedGift.price || amountVal;
    
    // Gerar Payload do Pix
    const pixPayload = PixGenerator.generatePayload({
      key: WeddingConfig.pix.key,
      amount: amount,
      description: selectedGift.title,
      merchantName: WeddingConfig.pix.merchantName,
      merchantCity: WeddingConfig.pix.merchantCity
    });
    
    document.getElementById("pix-code-text").value = pixPayload;
    
    // Renderizar QR Code
    document.getElementById("pix-qrcode").innerHTML = "";
    qrcodeObj = new QRCode(document.getElementById("pix-qrcode"), {
      text: pixPayload,
      width: 176,
      height: 176,
      colorDark: "#03300B", // Cor primária
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M
    });
    
    // Configurar Tela 2: Mercado Pago (Cartão)
    // Se o casal cadastrou um link Mercado Pago no presente, usa ele. Caso contrário, monta um mock bonito
    const mpLink = selectedGift.mercadoPagoLink || "https://www.mercadopago.com.br";
    document.getElementById("mercado-pago-redirect-link").href = mpLink;
    
    // Iniciar por padrão na aba Pix
    selectPaymentMethod("pix");
  });

  function selectPaymentMethod(method) {
    if (method === "pix") {
      payBtnPix.className = "py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-primary text-white transition flex items-center justify-center gap-1.5";
      payBtnCard.className = "py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-stone-100 text-stone-600 hover:bg-stone-200 transition flex items-center justify-center gap-1.5";
      screenPix.classList.remove("hidden");
      screenCard.classList.add("hidden");
    } else {
      payBtnCard.className = "py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-primary text-white transition flex items-center justify-center gap-1.5";
      payBtnPix.className = "py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-stone-100 text-stone-600 hover:bg-stone-200 transition flex items-center justify-center gap-1.5";
      screenCard.classList.remove("hidden");
      screenPix.classList.add("hidden");
    }
  }

  payBtnPix.addEventListener("click", () => selectPaymentMethod("pix"));
  payBtnCard.addEventListener("click", () => selectPaymentMethod("card"));

  // Copiar código Pix
  copyPixBtn.addEventListener("click", () => {
    const input = document.getElementById("pix-code-text");
    input.select();
    input.setSelectionRange(0, 99999);
    
    try {
      navigator.clipboard.writeText(input.value);
      copyPixBtn.innerHTML = `<i data-lucide="check" class="h-3.5 w-3.5"></i> Copiado!`;
      lucide.createIcons();
      setTimeout(() => {
        copyPixBtn.innerHTML = `<i data-lucide="copy" class="h-3.5 w-3.5"></i> Copiar`;
        lucide.createIcons();
      }, 2000);
    } catch (err) {
      // Fallback
      alert("Por favor, selecione e copie o código manualmente.");
    }
  });

  // Finalizar presente Pix (Registrar intenção no Sheets / LocalStorage)
  confirmPixPaidBtn.addEventListener("click", async () => {
    const name = document.getElementById("guest-name").value;
    const email = document.getElementById("guest-email").value;
    const message = document.getElementById("guest-message").value;
    const amountVal = parseFloat(document.getElementById("guest-amount").value);
    const amount = selectedGift.price || amountVal;
    
    const giftData = {
      action: "gift",
      name,
      email,
      giftTitle: selectedGift.title,
      amount,
      paymentMethod: "Pix",
      message
    };
    
    confirmPixPaidBtn.disabled = true;
    confirmPixPaidBtn.innerText = "Salvando...";
    
    try {
      if (WeddingConfig.googleSheetsUrl) {
        await fetch(WeddingConfig.googleSheetsUrl, {
          method: "POST",
          mode: "no-cors", // Necessário para evitar bloqueios CORS de Apps Script
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(giftData)
        });
      } else {
        // Fallback LocalStorage
        saveToMockDb("gifts", giftData);
      }
      
      // Sucesso
      closeModal();
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#03300B', '#D4AF37', '#ffffff']
      });
      alert(`Muito obrigado pelo presente, ${name}! 💚 Nós recebemos sua intenção de presente. Assim que for compensado no banco, daremos baixa na lista!`);
    } catch (err) {
      console.error(err);
      alert("Houve um erro ao enviar os dados. Mas não se preocupe, a intenção de Pix foi gerada!");
    } finally {
      confirmPixPaidBtn.disabled = false;
      confirmPixPaidBtn.innerText = "Já realizei a transferência!";
    }
  });

  // 8. Confirmação de RSVP
  const rsvpForm = document.getElementById("rsvp-form");
  const rsvpConfirmed = document.getElementById("rsvp-confirmed");
  const rsvpAttendanceDetails = document.getElementById("rsvp-attendance-details");
  const rsvpSubmitBtn = document.getElementById("rsvp-submit-btn");

  // Mostrar campos apenas se a pessoa responder que SIM, vai comparecer
  rsvpConfirmed.addEventListener("change", (e) => {
    if (e.target.value === "true") {
      rsvpAttendanceDetails.classList.remove("hidden");
    } else {
      rsvpAttendanceDetails.classList.add("hidden");
    }
  });

  rsvpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const name = document.getElementById("rsvp-name").value.trim();
    const confirmed = rsvpConfirmed.value === "true";
    const email = document.getElementById("rsvp-email").value.trim();
    const phone = document.getElementById("rsvp-phone").value.trim();
    const childrenCount = parseInt(document.getElementById("rsvp-children").value) || 0;
    const message = document.getElementById("rsvp-message").value.trim();
    
    const rsvpData = {
      action: "rsvp",
      name,
      confirmed,
      email,
      phone,
      adultsCount: 0, // Individual
      childrenCount,
      dietaryRestrictions: "", // Desativado
      message
    };
    
    rsvpSubmitBtn.disabled = true;
    rsvpSubmitBtn.innerText = "Enviando...";
    
    try {
      if (WeddingConfig.googleSheetsUrl) {
        await fetch(WeddingConfig.googleSheetsUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(rsvpData)
        });
      } else {
        saveToMockDb("rsvp", rsvpData);
      }
      
      // Mostrar tela de sucesso
      document.getElementById("rsvp-container").innerHTML = `
        <div class="text-center space-y-4 py-8 flex flex-col items-center">
          <div class="p-3.5 bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mb-2 shadow-md">
            <i data-lucide="check-circle" class="h-10 w-10"></i>
          </div>
          <h3 class="font-display text-2xl font-normal text-primary tracking-wide uppercase">Confirmação Enviada!</h3>
          <p class="text-stone-600 text-sm max-w-sm leading-relaxed">
            Muito obrigado, <strong>${name}</strong>. Seus dados foram salvos com sucesso e enviados para o controle dos noivos.
          </p>
          <p class="text-xs text-stone-500 italic">
            "Sua presença fará o nosso dia ainda mais inesquecível!" — Isabelle & Gabriel
          </p>
        </div>
      `;
      lucide.createIcons();
      
      // Efeito premium de confete
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#03300B', '#D4AF37', '#FAF9F6']
      });
      
    } catch (err) {
      console.error(err);
      alert("Houve um erro de rede. Por favor, tente enviar seu RSVP novamente.");
    } finally {
      rsvpSubmitBtn.disabled = false;
      rsvpSubmitBtn.innerText = "Confirmar RSVP";
    }
  });

  // 9. Mural de Recados (Guestbook)
  const guestbookForm = document.getElementById("guestbook-form");
  
  // Lista de mensagens padrão vazia (recados reais serão adicionados dinamicamente)
  const defaultMessages = [];

  function loadGuestbook() {
    const list = document.getElementById("mural-lista");
    list.innerHTML = "";
    
    let messages = [];
    
    // Se tiver banco configurado, podemos dar GET (futuramente), mas por ora usamos LocalStorage + Defaults
    const localMsgs = JSON.parse(localStorage.getItem("mock_guestbook")) || [];
    messages = [...localMsgs, ...defaultMessages];
    
    if (messages.length === 0) {
      list.innerHTML = `
        <div class="text-center py-10 bg-stone-50 border border-stone-200/30 rounded-2xl p-6 flex flex-col items-center justify-center space-y-3">
          <div class="p-3 bg-champagne text-primary rounded-full">
            <i data-lucide="message-square" class="h-6 w-6"></i>
          </div>
          <p class="text-sm font-semibold text-stone-600">Ainda não há recados por aqui.</p>
          <p class="text-xs text-stone-400">Seja o primeiro a deixar uma mensagem de carinho para nós!</p>
        </div>
      `;
      lucide.createIcons();
      return;
    }
    
    messages.forEach(msg => {
      // Iniciais para o avatar
      const initials = msg.name.substring(0, 2).toUpperCase();
      
      const card = document.createElement("div");
      card.className = "bg-champagne/30 border border-stone-200/40 p-5 rounded-2xl shadow-sm flex gap-4 items-start";
      card.innerHTML = `
        <div class="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold font-display flex-shrink-0 shadow-sm border border-white/40">
          ${initials}
        </div>
        <div class="space-y-1.5 flex-grow">
          <div class="flex justify-between items-center">
            <h4 class="text-sm font-bold text-primary">${msg.name}</h4>
            <span class="text-[10px] text-stone-400">Recém enviado</span>
          </div>
          <p class="text-xs text-stone-600 leading-relaxed italic">"${msg.message}"</p>
        </div>
      `;
      list.appendChild(card);
    });
  }

  guestbookForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const name = document.getElementById("mural-nome").value.trim();
    const message = document.getElementById("mural-mensagem").value.trim();
    
    if (!name || !message) return;
    
    const guestbookData = {
      action: "guestbook",
      name,
      message
    };
    
    const btn = guestbookForm.querySelector("button");
    btn.disabled = true;
    btn.innerText = "Enviando...";
    
    try {
      if (WeddingConfig.googleSheetsUrl) {
        await fetch(WeddingConfig.googleSheetsUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(guestbookData)
        });
      }
      
      // Salva local para visualização imediata
      const localMsgs = JSON.parse(localStorage.getItem("mock_guestbook")) || [];
      localMsgs.unshift({ name, message }); // Adiciona no início
      localStorage.setItem("mock_guestbook", JSON.stringify(localMsgs));
      
      // Limpa formulário e recarrega
      document.getElementById("mural-nome").value = "";
      document.getElementById("mural-mensagem").value = "";
      loadGuestbook();
      
      // Pequeno efeito
      confetti({
        particleCount: 50,
        spread: 40,
        colors: ['#03300B', '#D4AF37']
      });
      
    } catch (err) {
      console.error(err);
      alert("Erro ao salvar mensagem.");
    } finally {
      btn.disabled = false;
      btn.innerHTML = `<i data-lucide="send" class="h-4 w-4"></i> Publicar Recado`;
      lucide.createIcons();
    }
  });

  // Carregar mensagens do mural ao iniciar
  loadGuestbook();

  // 10. Funções Auxiliares de Mock Banco de Dados
  function saveToMockDb(table, data) {
    const key = `mock_${table}`;
    const items = JSON.parse(localStorage.getItem(key)) || [];
    data.date = new Date().toISOString();
    items.unshift(data);
    localStorage.setItem(key, JSON.stringify(items));
  }
});
