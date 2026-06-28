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
  venueAddress: "Estrada MG-405, Km 3 - Santana dos Montes, MG",
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
      id: "terninho_jeff",
      title: "Terninho do Jeff",
      category: "Divertido",
      price: 350.00,
      icon: "paw-print",
      image: "assets/gift_terninho_jeff.png",
      description: "Para ele chegar trajado",
      mercadoPagoLink: "https://mpago.li/2uSHRvV"
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
      description: "Para ela finalmente fazer as pazes com a couve",
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
