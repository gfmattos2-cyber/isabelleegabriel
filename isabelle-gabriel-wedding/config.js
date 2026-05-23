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
  
  // Lista de Presentes Fictícios (Cotas de Lua de Mel e Itens)
  gifts: [
    {
      id: "maldivas",
      title: "Diária em Bangalô nas Maldivas",
      category: "Lua de Mel",
      price: 600.00,
      image: "assets/foto1.jpg",
      description: "Nos ajude a curtir uma noite inesquecível olhando o mar azul das Maldivas.",
      mercadoPagoLink: "https://www.mercadopago.com.br" // Substitua pelo link de pagamento real do Mercado Pago
    },
    {
      id: "jantar_paris",
      title: "Jantar Romântico em Paris",
      category: "Lua de Mel",
      price: 300.00,
      image: "assets/foto2.jpg",
      description: "Um jantar especial com vista para a Torre Eiffel com direito a muito vinho.",
      mercadoPagoLink: "https://www.mercadopago.com.br"
    },
    {
      id: "passeio_barco",
      title: "Passeio de Barco ao Pôr do Sol",
      category: "Passeios",
      price: 150.00,
      image: "assets/foto3.jpg",
      description: "Navegar pelas águas cristalinas celebrando nossa união.",
      mercadoPagoLink: "https://www.mercadopago.com.br"
    },
    {
      id: "spa_casal",
      title: "Massagem Relaxante para o Casal",
      category: "Lua de Mel",
      price: 200.00,
      image: "assets/foto4.jpg",
      description: "Para os noivos relaxarem depois de toda a correria do casamento.",
      mercadoPagoLink: "https://www.mercadopago.com.br"
    },
    {
      id: "jogo_panelas",
      title: "Jogo de Panelas de Chef",
      category: "Casa",
      price: 450.00,
      image: "assets/foto2.jpg",
      description: "Para equipar a cozinha nova e preparar jantares deliciosos para as visitas.",
      mercadoPagoLink: "https://www.mercadopago.com.br"
    },
    {
      id: "linho_egipcio",
      title: "Jogo de Cama de Linho Egípcio",
      category: "Casa",
      price: 350.00,
      image: "assets/foto1.jpg",
      description: "Mais conforto para o ninho de amor dos recém-casados.",
      mercadoPagoLink: "https://www.mercadopago.com.br"
    },
    {
      id: "cafe_cama",
      title: "Café da Manhã Especial na Cama",
      category: "Lua de Mel",
      price: 80.00,
      image: "assets/foto3.jpg",
      description: "Uma surpresa carinhosa no primeiro dia após a nossa noite de núpcias.",
      mercadoPagoLink: "https://www.mercadopago.com.br"
    },
    {
      id: "cota_livre",
      title: "Contribuição Livre (Qualquer Valor)",
      category: "Lua de Mel",
      price: null, // Indica valor aberto a ser digitado pelo convidado
      image: "assets/foto4.jpg",
      description: "Quer nos dar um presente especial com um valor personalizado? Fique à vontade!",
      mercadoPagoLink: "https://www.mercadopago.com.br"
    }
  ],
  
  // Dicas de Hospedagem, Beleza e Serviços na região (Santana dos Montes / Conselheiro Lafaiete)
  tips: {
    hotels: [
      {
        name: "Hotel Solar dos Montes",
        address: "Rua do Solar, 56 - Centro, Santana dos Montes - MG",
        phone: "(31) 98453-2986",
        discountCode: "CASAMENTOISAGABI",
        description: "Charmoso hotel histórico localizado bem no centro de Santana dos Montes. Oferece muito conforto e café da manhã típico mineiro."
      },
      {
        name: "Vertentes Suítes Hotel",
        address: "Rua Deputado Ribeiro de Oliveira, 20 - Centro, Conselheiro Lafaiete - MG",
        phone: "(31) 3721-5150",
        discountCode: "ISAGABI10",
        description: "Opção moderna e executiva na cidade polo vizinha (Conselheiro Lafaiete). Excelente infraestrutura urbana e suítes confortáveis."
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
