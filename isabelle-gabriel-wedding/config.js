// Configurações globais do casamento de Isabelle & Gabriel
const WeddingConfig = {
  // Informações do Casal
  brideName: "Isabelle",
  groomName: "Gabriel",
  coupleNames: "Isabelle & Gabriel",
  
  // Data e Hora do Casamento
  weddingDate: "2026-09-12T15:30:00", // Formato ISO para contagem regressiva
  weddingDateFormatted: "12 de Setembro de 2026 às 15h30",
  
  // Localização
  venueName: "Hotel Fazenda Fonte Limpa",
  venueAddress: "Estrada AMG-405, Km 3 - Santana dos Montes, MG",
  venueCoordinates: {
    lat: -20.806147,
    lng: -43.701210
  },
  
  // Chave Pix Oficial para Presentes (Gabriel)
  pix: {
    key: "09319568626", // CPF sem pontos ou traço para o payload
    keyFormatted: "093.195.686-26",
    merchantName: "Gabriel Ferreira Mattos",
    merchantCity: "SAO PAULO"
  },
  
  // URL do Web App do Google Apps Script (Preencha aqui após implantar o script)
  googleSheetsUrl: "https://script.google.com/macros/s/AKfycbxz9gZOxEIsy3qYmQ4CmyWmerlOog25wko-yFBib5RD-krbjfE3eRn2iJ6XW3ATIrHR/exec", 

  // Configuração Visual (Verde Escuro do Casal)
  theme: {
    primaryColor: "#03300B", // Verde escuro solicitado
    primaryHoverColor: "#022007"
  },
  
  // Lista de Presentes Virtuais (Cotas de Lua de Mel e Itens)
  gifts: [
    {
      id: "balde_gelo",
      title: "Balde de gelo com pegador em inox",
      category: "Casa",
      price: 75.00,
      icon: "cup-straw",
      image: "assets/gift_balde_gelo.webp",
      objectFit: "object-contain",
      imageClass: "p-4 bg-white",
      description: "",
      mercadoPagoLink: "https://mpago.la/25ng44b"
    },
    {
      id: "kit_churrasco",
      title: "Kit churrasco",
      category: "Casa",
      price: 87.50,
      icon: "utensils",
      image: "assets/gift_kit_churrasco.png",
      objectFit: "object-contain",
      objectPosition: "object-center",
      description: "",
      mercadoPagoLink: "https://mpago.la/1KJf62v"
    },
    {
      id: "potes_hermeticos",
      title: "Kit de Potes Herméticos",
      category: "Casa",
      price: 139.90,
      icon: "package",
      image: "assets/gift_potes_hermeticos.jpeg",
      objectFit: "object-contain",
      imageClass: "p-4 bg-white",
      description: "",
      mercadoPagoLink: "https://mpago.la/2B7HPuX"
    },
    {
      id: "jogo_tabuleiro",
      title: "Jogo de tabuleiro",
      category: "Divertido",
      price: 162.00,
      icon: "dices",
      image: "assets/gift_jogo_tabuleiro.jpeg",
      description: "Para contribuir com noites divertidas",
      mercadoPagoLink: "https://mpago.la/1Aze1cH"
    },
    {
      id: "jogo_cama",
      title: "Jogo de cama",
      category: "Casa",
      price: 209.00,
      icon: "bed",
      image: "assets/gift_cama_linho.png",
      description: "",
      mercadoPagoLink: "https://mpago.li/1ymaAJH"
    },
    {
      id: "vela_aromatica",
      title: "Vela aromática",
      category: "Casa",
      price: 219.90,
      icon: "flame",
      image: "assets/gift_vela_aromatica.webp",
      description: "",
      mercadoPagoLink: "https://mpago.la/31jUupk"
    },
    {
      id: "direito_dormir",
      title: "Direito de dormir 20 minutinhos",
      category: "Divertido",
      price: 250.00,
      icon: "moon",
      image: "assets/gift_direito_dormir.jpeg",
      description: "Porque a festa não tem hora para acabar",
      mercadoPagoLink: "https://mpago.li/2FxLfPG"
    },
    {
      id: "porta_facas_cepo",
      title: "Porta facas com cepo de madeira",
      category: "Casa",
      price: 259.90,
      icon: "utensils",
      image: "assets/gift_porta_facas_cepo.webp",
      objectFit: "object-contain",
      imageClass: "p-4 bg-white",
      description: "",
      mercadoPagoLink: "https://mpago.la/2LNAZjT"
    },
    {
      id: "air_fryer",
      title: "Air fryer",
      category: "Casa",
      price: 296.00,
      icon: "utensils",
      image: "assets/gift_air_fryer.webp",
      objectFit: "object-contain",
      description: "",
      mercadoPagoLink: "https://mpago.li/15mZPRB"
    },
    {
      id: "parafusadeira_furadeira",
      title: "Parafusadeira e furadeira a bateria",
      category: "Casa",
      price: 310.00,
      icon: "wrench",
      image: "assets/gift_parafusadeira_furadeira.webp",
      objectFit: "object-contain",
      imageClass: "p-4 bg-white",
      description: "",
      mercadoPagoLink: "https://mpago.li/2tGp39k"
    },
    {
      id: "curso_fotografia",
      title: "Curso de fotografia para o Gabriel",
      category: "Divertido",
      price: 315.00,
      icon: "camera",
      image: "assets/gift_curso_fotografia.jpeg",
      description: "Para ele aprender a tirar foto nas viagens",
      mercadoPagoLink: "https://mpago.li/2jGQzJx"
    },
    {
      id: "chaleira_eletrica",
      title: "Chaleira elétrica inox",
      category: "Casa",
      price: 340.90,
      icon: "coffee",
      image: "assets/gift_chaleira_eletrica.webp",
      objectFit: "object-contain",
      imageClass: "p-4 bg-white",
      description: "",
      mercadoPagoLink: "https://mpago.li/2rm6DyB"
    },
    {
      id: "pratos_ceramica",
      title: "Jogo de pratos de cerâmica",
      category: "Casa",
      price: 350.00,
      icon: "utensils",
      image: "assets/gift_pratos_ceramica.jpg",
      description: "",
      mercadoPagoLink: "https://mpago.li/2uSHRvV"
    },
    {
      id: "talheres_inox",
      title: "Conjunto de talheres completo em inox",
      category: "Casa",
      price: 379.90,
      icon: "utensils",
      image: "assets/gift_talheres_inox.webp",
      objectFit: "object-contain",
      imageClass: "p-4 bg-white",
      description: "",
      mercadoPagoLink: "https://mpago.li/2EYHwKV"
    },
    {
      id: "jantar_lua_mel",
      title: "Jantar romântico na lua de mel",
      category: "Lua de Mel",
      price: 388.00,
      icon: "utensils",
      image: "assets/gift_jantar_romantico.jpg",
      description: "",
      mercadoPagoLink: "https://mpago.li/2Dnf4E9"
    },
    {
      id: "panela_pressao_eletrica",
      title: "Panela de pressão elétrica digital",
      category: "Casa",
      price: 419.90,
      icon: "utensils",
      image: "assets/gift_panela_pressao.jpg",
      objectFit: "object-contain",
      imageClass: "p-4 bg-white",
      description: "",
      mercadoPagoLink: "https://mpago.li/2wHc7fj"
    },
    {
      id: "aula_kitesurf",
      title: "Aula de kitesurf na lua de mel",
      category: "Lua de Mel",
      price: 423.00,
      icon: "waves",
      image: "assets/gift_aula_kitesurf.jpg",
      description: "",
      mercadoPagoLink: "https://mpago.li/18Zbwoq"
    },
    {
      id: "liquidificador_retro",
      title: "Liquidificador de vidro retrô potente",
      category: "Casa",
      price: 459.90,
      icon: "utensils",
      image: "assets/gift_liquidificador_retro.webp",
      objectFit: "object-contain",
      imageClass: "p-4 bg-white",
      description: "",
      mercadoPagoLink: "https://mpago.li/32YY9cV"
    },
    {
      id: "panelas_ceramica",
      title: "Jogo de Panelas Completo",
      category: "Casa",
      price: 491.00,
      icon: "utensils",
      image: "assets/gift_panelas_ceramica.png",
      imageClass: "scale-115 origin-center",
      description: "",
      mercadoPagoLink: "https://mpago.li/1LcqCmg"
    },
    {
      id: "hipnose_verdura",
      title: "Sessão de hipnose para a Belle comer verdura",
      category: "Divertido",
      price: 526.00,
      icon: "salad",
      image: "assets/gift_hipnose_verdura.png",
      objectFit: "object-contain",
      description: "Para a ela finalmente fazer as pazes com a couve",
      mercadoPagoLink: "https://mpago.li/324uA6z"
    },
    {
      id: "cantar_casamento",
      title: "Cantar uma música no casamento",
      category: "Divertido",
      price: 583.00,
      icon: "mic",
      image: "assets/gift_cantar_musica.png",
      objectPosition: "object-top",
      imageClass: "scale-110 origin-top",
      description: "Já pode ir treinando",
      mercadoPagoLink: "https://mpago.li/1PSYBMy"
    },
    {
      id: "jogo_tacas",
      title: "Jogo de taças",
      category: "Casa",
      price: 589.90,
      icon: "cup-straw",
      image: "assets/gift_jogo_tacas.webp",
      description: "",
      mercadoPagoLink: "https://mpago.li/18Mbs17"
    },
    {
      id: "mesa_centro",
      title: "Mesa de centro",
      category: "Casa",
      price: 689.90,
      icon: "home",
      image: "assets/gift_mesa_centro.jpeg",
      description: "",
      mercadoPagoLink: "https://mpago.li/2xx2HBL"
    },
    {
      id: "cervejeira",
      title: "Cervejeira",
      category: "Casa",
      price: 719.00,
      icon: "beer",
      image: "assets/gift_cervejeira.jpeg",
      objectFit: "object-contain",
      description: "Afinal: cerveja só faz mal quando falta",
      mercadoPagoLink: "https://mpago.li/2EqFbHw"
    },
    {
      id: "microondas_espelhado",
      title: "Micro-ondas inox espelhado",
      category: "Casa",
      price: 849.90,
      icon: "utensils",
      image: "assets/gift_microondas_espelhado.jpg",
      objectFit: "object-contain",
      imageClass: "p-4 bg-white",
      description: "",
      mercadoPagoLink: "https://mpago.li/2C3yX9T"
    },
    {
      id: "corrimao_escada",
      title: "Corrimão da escada do apartamento",
      category: "Casa",
      price: 968.00,
      icon: "shield",
      image: "assets/gift_corrimao_escada.jpg",
      isProjectPhoto: true,
      description: "Pequeno detalhe, grande segurança",
      mercadoPagoLink: "https://mpago.li/1i9Nwsc"
    },
    {
      id: "reforma_telhado",
      title: "Reforma do telhado",
      category: "Casa",
      price: 1262.00,
      icon: "home",
      image: "assets/gift_gesso_cobertura.jpeg",
      objectPosition: "object-top",
      imageClass: "scale-110 origin-top",
      description: "Porque um lar bonito não pode ter goteiras",
      mercadoPagoLink: "https://mpago.li/2F3RXHR"
    },
    {
      id: "edredom_egipcio",
      title: "Edredom Casal 300 fios 100% Algodão Egípcio",
      category: "Casa",
      price: 1429.90,
      icon: "bed",
      image: "assets/gift_edredom_egipcio.jpeg",
      description: "",
      mercadoPagoLink: "https://mpago.li/2P9T3Yb"
    },
    {
      id: "passagem_aerea",
      title: "Passagens aéreas para a lua de mel",
      category: "Lua de Mel",
      price: 1800.00,
      icon: "plane",
      image: "assets/gift_passagem_aerea.jpg",
      description: "",
      mercadoPagoLink: "https://mpago.li/2Et5HHf"
    },
    {
      id: "lavadora_secadora",
      title: "Lavadora e Secadora de Roupas",
      category: "Casa",
      price: 2291.00,
      icon: "washing-machine",
      image: "assets/gift_lavadora_secadora.jpg",
      objectFit: "object-contain",
      description: "",
      mercadoPagoLink: "https://mpago.li/2wHU14j"
    },
    {
      id: "ar_condicionado",
      title: "Ar-condicionado portátil",
      category: "Casa",
      price: 2629.90,
      icon: "wind",
      image: "assets/gift_ar_condicionado.webp",
      objectFit: "object-contain",
      imageClass: "p-4 bg-white",
      description: "",
      mercadoPagoLink: "https://mpago.li/1MnAaZv"
    },
    {
      id: "quarto_bebe",
      title: "Quarto do bebê",
      category: "Casa",
      price: 4389.00,
      icon: "baby",
      image: "assets/gift_quarto_bebe.jpg",
      isProjectPhoto: true,
      description: "O único que garante o direito de perguntar quando vamos ter filhos 🤣",
      mercadoPagoLink: "https://mpago.li/1KFNSVs"
    }
  ],
  
  // Dicas de Hospedagem, Beleza e Serviços na região (Santana dos Montes / Conselheiro Lafaiete)
  tips: {
    hotels: [
      {
        name: "Transamerica Fit Lafaiete",
        address: "Conselheiro Lafaiete, MG",
        phone: "",
        price: "R$ 270 / casal",
        regime: "Café da manhã",
        description: ""
      },
      {
        name: "Hotel Villa do Tanque — Suíte Paiol",
        address: "Santana dos Montes, MG",
        phone: "",
        price: "R$ 1.040 / casal",
        regime: "Pensão completa",
        description: ""
      },
      {
        name: "Minas Platinum Hotel",
        address: "Conselheiro Lafaiete, MG",
        phone: "",
        price: "R$ 420 / casal",
        regime: "Café da manhã",
        description: ""
      },
      {
        name: "Hotel Fazenda Santa Marina",
        address: "Santana dos Montes, MG",
        phone: "",
        price: "R$ 1.550 / casal",
        regime: "Pensão completa",
        description: ""
      },
      {
        name: "Hotel Golden Inn",
        address: "Conselheiro Lafaiete, MG",
        phone: "",
        price: "R$ 290 / casal",
        regime: "Café da manhã",
        description: ""
      },
      {
        name: "Hotel Villa do Tanque — Suíte Cocheira",
        address: "Santana dos Montes, MG",
        phone: "",
        price: "R$ 790 / casal",
        regime: "Pensão completa",
        description: ""
      },
      {
        name: "Hotel Fazenda Paciência",
        address: "Santana dos Montes, MG",
        phone: "",
        price: "R$ 1.092 / casal",
        regime: "Pensão completa",
        description: ""
      },
      {
        name: "Hotel Fazenda da Chácara",
        address: "Santana dos Montes, MG",
        phone: "",
        price: "R$ 1.212,50 / casal",
        regime: "Pensão completa",
        description: ""
      },
      {
        name: "Pousada Cristina",
        address: "Santana dos Montes, MG",
        phone: "",
        price: "R$ 150 / pessoa",
        regime: "Sem refeições",
        description: ""
      }
    ],
    beautySalons: [
      {
        name: "Ana Serrano - Maquiadora",
        address: "Conselheiro Lafaiete, MG",
        phone: "31 99626-9715",
        description: ""
      },
      {
        name: "Regina Coeli Salon",
        address: "Conselheiro Lafaiete, MG",
        phone: "31 99170-8355 / 31 2526-7060",
        description: ""
      },
      {
        name: "Patrícia Câmara - Maquiadora",
        address: "Conselheiro Lafaiete, MG",
        phone: "31 98850-4200",
        description: ""
      },
      {
        name: "Ana Amorim - Maquiadora",
        address: "Conselheiro Lafaiete, MG",
        phone: "31 98310-4266",
        description: ""
      },
      {
        name: "Jeniffer Neves - Penteados",
        address: "Conselheiro Lafaiete, MG",
        phone: "31 98516-0449",
        description: ""
      },
      {
        name: "Gizelle Carvalho - Maquiadora",
        address: "Conselheiro Lafaiete, MG",
        phone: "31 98543-4144",
        description: ""
      },
      {
        name: "Laura Diniz - Maquiadora",
        address: "Conselheiro Lafaiete, MG",
        phone: "31 99644-4476",
        description: ""
      },
      {
        name: "Karen Borba - Maquiadora",
        address: "Conselheiro Lafaiete, MG",
        phone: "31 98894-4147",
        description: ""
      }
    ],
    attractions: [
      {
        name: "Cervejaria Loba",
        address: "Fazenda Guarará - Zona Rural, Santana dos Montes - MG",
        phone: "(31) 98340-6673",
        description: "Cervejaria artesanal de Santana dos Montes."
      },
      {
        name: "Centro Histórico de Santana dos Montes",
        address: "Praça da Matriz - Centro, Santana dos Montes - MG",
        description: "Ideal para caminhar com calma, conhecer a Praça da Matriz e contemplar o preservado casario histórico da cidade."
      }
    ]
  }
};
