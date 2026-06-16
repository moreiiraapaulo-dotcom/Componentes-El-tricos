import { Product, Category, Testimonial, FAQItem } from "./types";

export const CATEGORIES: Category[] = [
  {
    id: "componentes",
    name: "Componentes Elétricos",
    iconName: "Cpu",
    description: "Contatores, chaves de partida e comando industrial.",
    image: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "automacao",
    name: "Automação",
    iconName: "Layers",
    description: "CLPs, IHMs, inversores de frequência e módulos de rede.",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "conectores",
    name: "Conectores",
    iconName: "Shuffle",
    description: "Bornes de trilho, conectores rápidos e terminais isolados.",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "sensores",
    name: "Sensores",
    iconName: "Eye",
    description: "Sensores indutivos, capacitivos, fotoelétricos e fim de curso.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "reles",
    name: "Relés",
    iconName: "Radio",
    description: "Relés temporizadores, de estado sólido e relés auxiliares.",
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "disjuntores",
    name: "Disjuntores",
    iconName: "ShieldAlert",
    description: "Mini disjuntores, disjuntores motor e caixa moldada.",
    image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "cabos",
    name: "Cabos",
    iconName: "Cable",
    description: "Cabos flexíveis, cabos de comando blindados e acessórios.",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "fontes",
    name: "Fontes",
    iconName: "Zap",
    description: "Fontes chaveadas para trilho DIN e fontes industriais.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "leds",
    name: "LEDs e Sinaleiros",
    iconName: "Sun",
    description: "Sinaleiros industriais, fitas de LED e refletores de alta potência.",
    image: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ferramentas",
    name: "Ferramentas",
    iconName: "Wrench",
    description: "Multímetros, alicates decapadores e crimpadores profissionais.",
    image: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?w=600&auto=format&fit=crop&q=80"
  }
];

export const PRODUCTS: Product[] = [
  // Componentes Elétricos
  {
    id: "p1",
    name: "Contator Tripolar Trifásico OLUAP 32A",
    sku: "OL-CONT-32-A",
    category: "componentes",
    description: "Contator tripolar para manobra de motores elétricos em regime AC-3, bobina 220Vca 50/60Hz e contatos auxiliares 1NA+1NF integrados.",
    longDescription: "O Contator Tripolar OLUAP 32A foi desenvolvido para atender às mais rigorosas aplicações industriais e residenciais de controle de motores e cargas. Com robustez eletromecânica certificada, possui alta durabilidade elétrica de até 1.2 milhão de manobras sob carga e contatos de liga de prata que previnem o desgaste prematuro por centelhamento.",
    price: 189.90,
    rating: 4.8,
    reviewsCount: 42,
    image: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Corrente Nominal (AC-3)": "32 Amperes",
      "Tensão de Bobina": "220V CA (50/60Hz)",
      "Contatos Auxiliares": "1NA + 1NF (Normal Aberto e Normal Fechado)",
      "Normas Técnicas": "ABNT NBR IEC 60947-4-1",
      "Fixação": "Trilho DIN de 35mm ou fixação por parafusos"
    },
    stock: 24,
    featured: true
  },
  {
    id: "p2",
    name: "Chave Seletora com Retenção 2 Posições Fixas",
    sku: "OL-CH-SEL-2P",
    category: "componentes",
    description: "Chave seletora rotativa plástica preta, diâmetro de furação de 22mm, contatos inclusos (1NA) com ação rápida.",
    longDescription: "Chave seletora com retenção industrial OLUAP de alta performance. Fabricada em polímero autoextinguível altamente resistente e contatos modulares substituíveis. Ideal para painéis de comando onde haja necessidade de comutação manual de circuitos de automação de forma segura e visual.",
    price: 34.50,
    rating: 4.7,
    reviewsCount: 18,
    image: "https://images.unsplash.com/photo-1618042164219-62c820f10723?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Diâmetro de Furo": "22 mm",
      "Posições": "2 posições fixas (com retenção)",
      "Configuração": "1NA de duplo corte",
      "Grau de Proteção": "IP65 para a face externa do painel",
      "Corrente Máxima de Emprego": "10A em 230V CA"
    },
    stock: 150,
    featured: false
  },

  // Automação
  {
    id: "p3",
    name: "Controlador Lógico Programável CLP OLUAP Max-1200",
    sku: "OL-CLP-M1200",
    category: "automacao",
    description: "CLP advanced com 8 entradas digitais 24Vcc, 6 saídas digitais a relé e 2 entradas analógicas 0-10V, programação simplificada.",
    longDescription: "O CLP OLUAP Max-1200 é o cérebro que seus painéis de automação precisam. Projetado para automação comercial e industrial de pequeno e médio porte, ele conta com alta performance de processamento, interface expansível, porta de comunicação Ethernet Modbus TCP/IP integrada e programação em linguagem Ladder e estruturado. Perfeito para gerenciar processos complexos de máquinas industriais e automação predial.",
    price: 1249.00,
    rating: 4.9,
    reviewsCount: 26,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Alimentação": "24 Vcc (corrente contínua)",
      "Entradas Digitais": "8 Entradas rápidas PNP/NPN",
      "Saídas": "6 Saídas a Relé (máx. 2A por canal)",
      "Entradas Analógicas": "2 Entradas 0-10V / 4-20mA integradas de 12 bits",
      "Comunicação": "Porta Ethernet RJ45 + RS485 Modbus RTU"
    },
    stock: 8,
    featured: true
  },
  {
    id: "p4",
    name: "IHM Touchscreen Colorida 7 Polegadas Slim",
    sku: "OL-IHM-T7-S",
    category: "automacao",
    description: "Interface Homem-Máquina com tela TFT colorida e retroalimentação LED de alta definição, suporte a múltiplos CLPs.",
    longDescription: "Expanda as possibilidades visuais da sua automação com o IHM Colorido 7 Polegadas da OLUAP. Desenvolvido para exibição dinâmica de gráficos analógicos, controle de receitas, históricos de alarme e variáveis em tempo real. Possui design slim ultra-fino, memória interna robusta para animações e conectividade de ponta com as marcas do mercado.",
    price: 990.00,
    rating: 4.6,
    reviewsCount: 15,
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Tamanho da Tela": "7 polegadas diagonal",
      "Resolução": "800 x 480 pixels cristalino TFT",
      "Cores": "65.536 cores",
      "Comunicação": "USB Client + RS232 + RS485",
      "Software de Programação": "OLUAP HMI Logic (Incluso gratuitamente)"
    },
    stock: 12,
    featured: false
  },

  // Conectores
  {
    id: "p5",
    name: "Borne de Passagem K-S de Fixação Frontal 2.5mm² (Pacote c/ 50)",
    sku: "OL-BORN-25-X50",
    category: "conectores",
    description: "Borne tipo SAK cinza por mola rápida para fiação estruturada de painéis de distribuição prediais ou industriais.",
    longDescription: "Pack de Terminais Bornes Rápidos autoextinguíveis OLUAP. Desenvolvidos para agilizar em até 70% o processo de cabeamento de painéis, utilizam sistema de mola auto-ajustável que garante conexão mecânica e elétrica ultra duradouro mesmo sob vibração contínua.",
    price: 115.00,
    rating: 4.9,
    reviewsCount: 61,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Seção de Cabo": "0,5mm² a 2,5mm² flexível/rígido",
      "Cor": "Cinza Neutro Padrão",
      "Tipo de Conexão": "Mola de encaixe rápido de aço inox push-in",
      "Embalagem mínima": "Caixa com 50 unidades",
      "Tensão Nominal máxima": "800Vca"
    },
    stock: 200,
    featured: true
  },

  // Sensores
  {
    id: "p6",
    name: "Sensor Indutivo M18 PNP Normal Aberto (NA)",
    sku: "OL-SENS-IND-18",
    category: "sensores",
    description: "Sensor de proximidade indutivo com carcaça metálica cilíndrica roscada, detecção estável e curto-circuito integrado.",
    longDescription: "O Sensor Indutivo M18 OLUAP é ultra confiável para detecção de metais e peças ferrosas a distâncias precisas sem contato físico direto. Ideal para indústrias automotivas, metalúrgicas, alimentícias ou esteiras transportadoras de alta velocidade. Sua carcaça de latão niquelado garante excelente resistência mecânica e contra fluidos abrasivos de corte.",
    price: 79.90,
    rating: 4.8,
    reviewsCount: 33,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Distância Sensora (Sn)": "8 mm - Faceado",
      "Tipo de Saída": "PNP Tipo Normal Aberto (NA)",
      "Rosca / Diâmetro": "Cilíndrico M18 x 1mm",
      "Tensão de Alimentação": "10 a 30 Vcc",
      "Conexão": "Cabo integrado de 2 metros de comprimento"
    },
    stock: 45,
    featured: true
  },

  // Relés
  {
    id: "p7",
    name: "Relé de Estado Sólido SSR Trifásico OLUAP 40A",
    sku: "OL-RELE-SSR40",
    category: "reles",
    description: "SSR trifásico com entrada de controle analógica/digital 3-32Vcc e saída para carga de potência de até 480Vca, livre de ruído.",
    longDescription: "A solução silenciosa e de longuíssima vida útil para comutação de resistências e resistores de aquecimento em extrusoras de plástico, estufas e fornos industriais. O Relé de Estado Sólido OLUAP elimina centelhamentos elétricos e desgasgtes mecânicos, permitindo frequências de manobras absurdamente altas, perfeitamente integrados com controles PID.",
    price: 245.00,
    rating: 4.7,
    reviewsCount: 19,
    image: "https://images.unsplash.com/photo-1597499216184-b56bc74041a6?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Corrente Nominal Total": "40 Amperes AC",
      "Sinal de Controle": "3 a 32 Vcc",
      "Faixa de Carga da Saída": "24Vca a 480Vca",
      "Quantidade de Fases": "Trifásico completo",
      "Tipo de Comutação": "Zero-Cross (passagem por zero)"
    },
    stock: 19,
    featured: false
  },

  // Disjuntores
  {
    id: "p8",
    name: "Mini Disjuntor Termomagnético Bipolar C 20A OLUAP",
    sku: "OL-DISJ-B20C",
    category: "disjuntores",
    description: "Curva C de disparo térmico, poder de interrupção certificado de 3kA 230/400Vca, fixação em trilho padrão DIN.",
    longDescription: "Os Mini Disjuntores OLUAP garantem total proteção aos condutores e circuitos contra sobrecargas severas e curtos-circuitos em instalações elétricas industriais, comerciais e residenciais. Possui indicador mecânico frontal de estado (Verde = Desconectado / Vermelho = Conectado) e gatilho rápido interno.",
    price: 49.90,
    rating: 4.8,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Corrente Nominal In": "20 Amperes",
      "Número de Polos": "Bipolar (2f / 2p)",
      "Curva de Disparo": "Classe C (cargas indutivas leves)",
      "Poder de Interrupção": "3 kA em 220V/380Vca",
      "Frequência de Rede": "50 / 60 Hz"
    },
    stock: 350,
    featured: true
  },

  // Cabos
  {
    id: "p9",
    name: "Rolo de Cabo Flexível 2,5mm² Isolado 750V Azul 100m",
    sku: "OL-CAB-FL25-AZ",
    category: "cabos",
    description: "Cabo flexível condutor recomendado para circuitos de iluminação e painéis elétricos, capa protetora de alta flexibilidade.",
    longDescription: "O Cabo Termoplástico Flexível OLUAP é fabricado com filamentos de cobre puro eletrolítico de altíssimo grau de pureza. Com certificação Inmetro rígida, possui cobertura termoplástica deslizante anti-chama em PVC sem chumbo que facilita a passagem nos eletrodutos comerciais sem danos mecânicos.",
    price: 219.00,
    rating: 4.9,
    reviewsCount: 114,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Seção Transversal": "2,5 mm² de cobre puro classe 5",
      "Comprimento do Rolo": "100 metros contínuos",
      "Cor da Identificação": "Azul Neutro (padrão NBR 5410)",
      "Tensão de Isolamento Max.": "750 V",
      "Propriedade de Chama": "Autoextinguível de segurança (BWF)"
    },
    stock: 90,
    featured: true
  },

  // Fontes
  {
    id: "p10",
    name: "Fonte Chaveada Metálica OLUAP 24Vcc 10A DIN",
    sku: "OL-FONTE-24V10A",
    category: "fontes",
    description: "Fonte estabilizada chaveada de alta eficiência para trilho DIN trifásico/monofásico com carcaça metálica ventilada.",
    longDescription: "A fonte chaveada OLUAP fornece alimentação ultra estável de 24Vcc filtrada a partir de redes elétricas instáveis. Perfeito para CLP, IHM, sensores e circuitos de segurança eletrônica de categoria 4. Contém proteção ativa auto-recuperável contra sobrecorrentes e sobretensões críticas na saída.",
    price: 299.00,
    rating: 4.8,
    reviewsCount: 47,
    image: "/src/assets/images/din_power_supply_1781627605218.jpg",
    specs: {
      "Tensão de Saída": "24 Vcc ajustável por trimpot (+/- 10%)",
      "Corrente Máxima de Saída": "10 Amperes contínuos",
      "Potência Nominal": "240 Watts estáveis",
      "Tensão de Entrada AC": "Seletor Automático 110Vca / 220Vca",
      "Eficiência Energética": "> 88% sob plena carga"
    },
    stock: 32,
    featured: true
  },

  // LEDs e Sinaleiros
  {
    id: "p11",
    name: "Sinaleiro Monobloco LED Vermelho 22mm OLUAP",
    sku: "OL-SIN-LED-VM",
    category: "leds",
    description: "Sinaleiro integrado com tecnologia LED de alto brilho para indicação luminosa de comandos de painéis elétricos.",
    longDescription: "O Sinaleiro Monobloco Vermelho OLUAP é construído de forma compacta integrando um circuito eletrônico LED de alta visibilidade mesmo sob iluminação artificial forte de galpões. Oferece vida útil estendida sem manutenção preventiva comparado com as lâmpadas filamento convencionais.",
    price: 14.90,
    rating: 4.7,
    reviewsCount: 22,
    image: "https://images.unsplash.com/photo-1618042164219-62c820f10723?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Diâmetro de Montagem": "22 mm padronizado",
      "Cor do Difusor": "Vermelho Alerta",
      "Tensão de Trabalho": "220 Vca",
      "Tecnologia": "LED SMD Integrado de Alta Performance",
      "Consumo aproximado": "Menor que 20 mA"
    },
    stock: 250,
    featured: false
  },

  // Ferramentas
  {
    id: "p12",
    name: "Multímetro Digital Profissional True RMS Premium",
    sku: "OL-MULT-TRMS",
    category: "ferramentas",
    description: "Multímetro digital de alta calibração com medição True RMS de tensão CA, com proteção contra sobrecargas Cat III.",
    longDescription: "Uma ferramenta indispensável para todo eletricista e engenheiro de campo. O Multímetro OLUAP True RMS oferece medições confiáveis até mesmo em ondas com distorções causadas por inversores de frequência eletrônicos. Possui display de alta resolução de 6000 contagens retroiluminado, lanterna traseira de LED de suporte, holster magnético e termopar incluso.",
    price: 389.00,
    rating: 4.9,
    reviewsCount: 75,
    image: "https://images.unsplash.com/photo-1513848149866-9b5cc4e3eedb?w=600&auto=format&fit=crop&q=80",
    specs: {
      "Categoria de Segurança": "CAT III 600V / CAT II 1000V",
      "Leitura": "True RMS eletrônico",
      "Display": "Cristal Líquido LCD grande com backlight em azul",
      "Bipe de Continuidade": "Instantâneo (< 30 mseg)",
      "Recurso Adicional": "Detecção de Tensão Sem Contato (NCV)"
    },
    stock: 14,
    featured: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Eng. Roberto Vasconcelos",
    role: "Diretor de Projetos Industriais",
    company: "MetaMetalurgica Ltda",
    text: "Os contatores e bornes da OLUAP elevaram a qualidade final dos nossos painéis. Nunca tivemos nenhum problema técnico. A entrega é extremamente ágil.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "t2",
    name: "Patricia Mendes",
    role: "Chefe de Compras Técnicas",
    company: "Luz Forte Engenharia",
    text: "Encontrar um fornecedor com o catálogo completo, CNPJ transparente e canais diretos para grandes orçamentos era um desafio. Com a OLUAP temos tudo rápido no WhatsApp.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "t3",
    name: "Carlos Eduardo Santos",
    role: "Eletrotécnico Especialista em Automação",
    company: "EletroPro Painéis",
    text: "O CLP OLUAP Max-1200 superou em muito minhas expectativas. Programação limpa, conexão de rede rápida e um custo-benefício incrível. Recomendo para todos os projetos.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "A OLUAP vende para pessoa física e jurídica (CNPJ)?",
    answer: "Sim! Atendemos tanto profissionais autônomos, eletricistas e entusiastas por meio de compra direta na plataforma, quanto grandes construtoras, integradores e indústrias via faturamento corporativo no CNPJ com condições exclusivas e faturamento facilitado."
  },
  {
    question: "Todos os componentes possuem garantia e nota fiscal?",
    answer: "Absolutamente. Todos os produtos enviados pela OLUAP acompanham Nota Fiscal eletrônica (NFe) integral emitida para o seu CNPJ ou CPF e contam com garantia oficial mínima de 12 meses contra quaisquer defeitos de fabricação."
  },
  {
    question: "Como funciona a solicitação de orçamentos em grande lote?",
    answer: "Você pode adicionar múltiplos produtos ao seu carrinho dinâmico no site e clicar no botão 'Solicitar Orçamento'. Isso criará uma listagem limpa que pode ser enviada em 1 clique para nossa equipe de engenharia elétrica no WhatsApp. Também disponibilizamos nosso formulário de captura rápida para que nosso time responda à sua proposta detalhada em até 2 horas úteis."
  },
  {
    question: "Quais são os prazos de entrega padrão?",
    answer: "Como mantemos um estoque central robusto com mais de 50.000 itens disponíveis, todos os pedidos com pagamento aprovado até as 13h são enviados no mesmo dia útil. Oferecemos entrega expressa via motoboys para capitais parceiras e transportadoras para todo o território nacional."
  },
  {
    question: "Os componentes da OLUAP são homologados pelas normas técnicas brasileiras?",
    answer: "Sim. Todos os nossos equipamentos estão em conformidade com as normas ABNT NBR aplicáveis, além de certificações internacionais rigorosas de qualidade como IEC, UL e CE, minimizando riscos durante as auditorias e comissionamento de painéis elétricos."
  }
];
