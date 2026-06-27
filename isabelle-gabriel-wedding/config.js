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
  venueAddress: "Estrada MG-0405, Km 3 - Santana dos Montes, MG",
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
      id: "jogo_tabuleiro",
      title: "Jogo de tabuleiro",
      category: "Casa",
      price: 87.50,
      icon: "dices",
      image: "assets/gift_jogo_tabuleiro.jpeg",
      description: "Pra noite de casal que começa em paz e termina em discussão saudável",
      mercadoPagoLink: "https://mpago.la/2Us5aF9"
    },
    {
      id: "karaoke",
      title: "Aparelho de karaoke",
      category: "Brincadeiras",
      price: 162.00,
      icon: "music",
      image: "assets/gift_karaoke.webp",
      description: "Eles precisam treinar",
      mercadoPagoLink: "https://mpago.la/1aprDxN"
    },
    {
      id: "churrasco_premium",
      title: "Kit churrasco premium",
      category: "Casa",
      price: 220.00,
      icon: "utensils",
      image: "assets/gift_kit_churrasco.png",
      description: "Faca, tábua, pinças e chaira para o mestre da área gourmet",
      mercadoPagoLink: "https://mpago.la/2ZF7fRK"
    },
    {
      id: "cama_linho",
      title: "Jogo de cama de linho",
      category: "Casa",
      price: 279.00,
      icon: "bed",
      image: "assets/gift_cama_linho.png",
      description: "Para a suíte com headboard de couro merecer um enxoval à altura",
      mercadoPagoLink: ""
    },
    {
      id: "cantar_casamento",
      title: "Cantar uma música no casamento",
      category: "Brincadeiras",
      price: 315.00,
      icon: "mic",
      image: "assets/gift_cantar_musica.jpeg",
      objectPosition: "object-top",
      imageClass: "scale-110 origin-top",
      description: "Com participação dos MCs Belly e Gabs",
      mercadoPagoLink: "https://mpago.li/2jYEHrQ"
    },
    {
      id: "curso_fotografia",
      title: "Curso de fotografia para o Gabriel",
      category: "Brincadeiras",
      price: 350.00,
      icon: "camera",
      image: "assets/gift_curso_fotografia.jpeg",
      description: "Para ele aprender a tirar foto nas viagens",
      mercadoPagoLink: ""
    },
    {
      id: "terninho_jeff",
      title: "Terninho do Jeff",
      category: "Casa",
      price: 388.00,
      icon: "paw-print",
      image: "assets/gift_terninho_jeff.png",
      description: "Para ele chegar trajado",
      mercadoPagoLink: "https://mpago.li/2X5Btqh"
    },
    {
      id: "hipnose_unha",
      title: "Fazer o Gabriel parar de roer unha",
      category: "Brincadeiras",
      price: 423.00,
      icon: "brain",
      image: "assets/gift_hipnose_unha.jpeg",
      objectFit: "object-contain",
      description: "Só uma magia muito forte é capaz",
      mercadoPagoLink: "https://mpago.li/2aoAnTe"
    },
    {
      id: "aula_kitesurf",
      title: "Aula de kitesurf na lua de mel",
      category: "Lua de Mel",
      price: 491.00,
      icon: "waves",
      image: "assets/gift_aula_kitesurf.jpg",
      description: "Ele vai querer muito. Ela vai fingir que não. Os dois vão amar.",
      mercadoPagoLink: "https://mpago.li/2HRA2XT"
    },
    {
      id: "jantar_lua_mel",
      title: "Jantar romântico na lua de mel",
      category: "Lua de Mel",
      price: 526.00,
      icon: "utensils",
      image: "assets/gift_jantar_romantico.jpg",
      description: "Uma noite especial em São Miguel do Gostoso com vista e boa comida",
      mercadoPagoLink: ""
    },
    {
      id: "hipnose_verdura",
      title: "Sessão de hipnose para a Belle comer verdura",
      category: "Brincadeiras",
      price: 548.50,
      icon: "salad",
      image: "assets/gift_hipnose_verdura.png",
      objectFit: "object-contain",
      description: "Para a ela finalmente fazer as pazes com a couve",
      mercadoPagoLink: "https://mpago.li/2DJZeqV"
    },
    {
      id: "direito_dormir",
      title: "Direito de dormir 20 minutinhos durante a festa",
      category: "Brincadeiras",
      price: 583.00,
      icon: "moon",
      image: "assets/gift_direito_dormir.jpeg",
      description: "Para quem vai precisar recuperar as energias",
      mercadoPagoLink: ""
    },
    {
      id: "cervejeira",
      title: "Cervejeira",
      category: "Casa",
      price: 719.00,
      icon: "beer",
      image: "assets/gift_cervejeira.jpeg",
      objectFit: "object-contain",
      description: "Alguem vai ficar muito feliz...",
      mercadoPagoLink: "https://mpago.li/26Lg3is"
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
      mercadoPagoLink: "https://mpago.li/2vvJ14P"
    },
    {
      id: "gesso_cobertura",
      title: "Contribuição para gesso da cobertura",
      category: "Casa",
      price: 1262.00,
      icon: "home",
      image: "assets/gift_gesso_cobertura.jpeg",
      objectPosition: "object-top",
      imageClass: "scale-110 origin-top",
      description: "Porque um lar bonito nao pode ter goteiras",
      mercadoPagoLink: "https://mpago.li/2GUguYP"
    },
    {
      id: "passagem_aerea",
      title: "Passagem aérea para a lua de mel",
      category: "Lua de Mel",
      price: 1800.00,
      icon: "plane",
      image: "assets/gift_passagem_aerea.jpg",
      description: "Afinal nao dá pra ir pro RN de carro...",
      mercadoPagoLink: "https://mpago.li/2GiqhRk"
    },
    {
      id: "sofa_novo",
      title: "Sofá novo",
      category: "Casa",
      price: 2691.00,
      icon: "armchair",
      image: "assets/gift_sofa_novo.jpg",
      isProjectPhoto: true,
      description: "O sofá da sala de TV que eles tanto amam",
      mercadoPagoLink: "https://mpago.li/18WNGQD"
    },
    {
      id: "quarto_bebe",
      title: "Quarto do bebê",
      category: "Casa",
      price: 4389.00,
      icon: "baby",
      image: "assets/gift_quarto_bebe.jpg",
      isProjectPhoto: true,
      description: "Para o futuro! 🤣",
      mercadoPagoLink: "https://mpago.li/2jR1xsu"
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
        name: "Camarin Vip",
        address: "Av. Pref. Telésforo Cândido de Rezende, 1059 - Centro, Conselheiro Lafaiete - MG",
        phone: "(31) 3721-2373",
        description: "Salão conceituado especializado em penteados, maquiagem e produção completa para eventos."
      },
      {
        name: "Cabeleireiros Ponto Com",
        address: "Avenida Pedro II, 326, Loja 01 - São Sebastião, Conselheiro Lafaiete - MG",
        phone: "(31) 3763-5484",
        description: "Ótima opção para cortes de cabelo, manicure e maquiagem rápida para os convidados."
      }
    ],
    attractions: [
      {
        name: "Cervejaria Loba",
        address: "Fazenda Guarará - Zona Rural, Santana dos Montes - MG",
        phone: "(31) 98340-6673",
        description: "Famosa cervejaria artesanal de Santana dos Montes. Oferece Beer Tour, chopes artesanais variados, espaço de lazer no deck e petiscos deliciosos."
      },
      {
        name: "Centro Histórico de Santana dos Montes",
        address: "Praça da Matriz - Centro, Santana dos Montes - MG",
        description: "Aprecie o charmoso e preservado casario colonial mineiro e a tranquilidade típica de cidade pequena de Minas Gerais."
      }
    ]
  }
};
