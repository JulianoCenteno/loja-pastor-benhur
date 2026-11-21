// Conteúdo padrão do site. O site usa o que estiver salvo no admin (Supabase);
// este arquivo só entra se o banco estiver fora do ar.
window.SITE_CONFIG = {
  supabaseUrl: "https://lpazqiqtpquibeiorjrl.supabase.co",
  supabaseKey: "sb_publishable_iHvJzKGCPUkuZbiPp1pIyA_WTjXB2ZA"
};
window.DEFAULT_CONTENT = {
  brand: { name: "Pr. Ben-Hur dos Santos", tagline: "E-books cristãos" },
  hero: {
    eyebrow: "Estudos bíblicos em e-book",
    title: "Palavra que",
    highlight: "sustenta",
    title_end: "nos dias difíceis",
    lead: "Mensagens profundas, baseadas nas Escrituras, para fortalecer a fé, renovar a esperança e conduzir à obediência.",
    button_main: "Conhecer os livros",
    button_second: "Coleção completa",
    badges: ["E-book em PDF", "Pix ou cartão", "Acesso imediato"]
  },
  collection: {
    eyebrow: "A coleção",
    title: "Os livros",
    lead: "Uma série de estudos a partir da primeira carta de Pedro, sobre misericórdia, esperança, fé e perseverança."
  },
  books: [
    {
      vol: "Volume 1", tag: "Leitura rápida",
      title: "Além do Horizonte",
      sub: "A grande misericórdia e a viva esperança",
      price: 9.90, pages: 18,
      checkout: "https://appdigitalhub.com.br/c/F4CC85C6",
      img: "/img/capa-1.jpg",
      desc: "Um convite para recalibrar o olhar: deixar de viver “igrejado” e reencontrar a viva esperança.",
      syn: "Em um mundo marcado pela maldade contínua e por incertezas que paralisam, é fácil perder o foco do que realmente importa. A partir das palavras do apóstolo Pedro e da experiência de Paulo, este e-book explora a grande misericórdia de Deus e o segredo de transformar aflições pesadas em “leves e momentâneas”. Você está apenas de passagem: o melhor ainda está por vir.",
      toc: ["A saída de Adão e a entrada em Cristo", "Justiça, misericórdia e graça: a diferença prática", "O perigo de estar “igrejado”", "A maldade contínua e o fim dos tempos", "Por que o fardo de Paulo era “leve”?", "Amas-me mais do que a estes?", "A centralidade da ressurreição"]
    },
    {
      vol: "Volume 2", tag: "",
      title: "Guardados no Poder de Deus",
      sub: "Uma segurança que não depende das circunstâncias",
      price: 14.90, pages: 63,
      checkout: "https://appdigitalhub.com.br/c/52163995",
      img: "/img/capa-2.jpg",
      desc: "A nossa permanência não depende só da nossa força, mas do poder daquele que nos sustenta.",
      syn: "Pedro escreve a cristãos que conheciam a dor da rejeição e a insegurança do futuro. Mas, em vez de apontar primeiro para o que eles enfrentavam, aponta para aquilo que os sustentava. “Que pelo poder de Deus sois guardados, mediante a fé” (1 Pedro 1:5): Deus não nos observa de longe, Ele nos guarda como uma sentinela vigilante, com cuidado, atenção e amor. A esperança cristã não nasce da ausência de problemas; nasce da presença de Deus.",
      toc: ["A esperança cristã não é otimismo: é certeza", "Deus como sentinela de quem pertence a Ele", "Uma segurança que não depende das circunstâncias", "A cruz que transforma o presente, não só o futuro"]
    },
    {
      vol: "Volume 3", tag: "Lançamento",
      title: "Provações Necessárias",
      sub: "Quando Deus nos conduz à obediência",
      price: 14.90, pages: 92,
      checkout: "https://appdigitalhub.com.br/c/53ADAED1",
      img: "/img/capa-3.jpg",
      desc: "Um estudo sobre fé, disciplina, sofrimento, perseverança e entrega à vontade de Deus.",
      syn: "Talvez você esteja cansado. Talvez não compreenda. Talvez esteja perguntando: “Até quando?”. Este estudo mostra que a provação não é simplesmente punição, mas pode ser usada por Deus para produzir obediência, perseverança e maturidade. Com reflexões bíblicas, mensagens de esperança, princípios práticos e perguntas para estudo em grupo.",
      toc: ["Uma viva esperança em meio às provações", "A fé em um Deus que conhece o fim", "Quando a correção é necessária", "Deus nos conduz à obediência", "O deserto e a escola de Deus", "O filho pródigo e o caminho de volta", "Jonas: quando fugir não resolve", "O sofrimento que produz perseverança", "Aprendendo a permanecer firmes", "Pare de resistir", "+ Oração final, perguntas para estudo e declarações"]
    }
  ],
  combo: {
    show: true,
    eyebrow: "Mais vantajoso",
    title: "Coleção completa",
    text: "Leve os 3 e-books juntos e acompanhe toda a série, do primeiro ao último estudo.",
    price: 34.90,
    checkout: "https://appdigitalhub.com.br/c/B9227795",
    button: "Comprar a coleção"
  },
  quote: {
    text: "A provação pode ser dolorosa, mas não é o destino final de quem permanece em Deus.",
    cite: "Provações Necessárias"
  },
  howto: {
    eyebrow: "Simples e seguro",
    title: "Como comprar",
    lead: "Sem cadastro e sem complicação. Você recebe o livro na hora.",
    steps: [
      { title: "Escolha o livro", text: "Clique em “Comprar” no e-book que deseja, ou leve a coleção completa." },
      { title: "Preencha seus dados", text: "Nome, e-mail e celular, em um checkout 100% seguro." },
      { title: "Pague como preferir", text: "Pix ou cartão de crédito. No Pix, a aprovação é na hora." },
      { title: "Baixe o PDF", text: "Assim que o pagamento é aprovado, o botão para baixar aparece na tela." }
    ]
  },
  author: {
    eyebrow: "Sobre o autor",
    name: "Pr. Ben-Hur dos Santos",
    photo: "/img/autor.jpg",
    paragraphs: [
      "Natural de Guaíba, no Rio Grande do Sul, e cristão desde a infância. Casado com a Pra. Angélica dos Santos desde 2010, é pai de Camila e Mariana.",
      "Ainda jovem compreendeu o chamado para dedicar a vida à proclamação do Evangelho, ao discipulado e ao serviço da Igreja. Seu ministério é marcado pela centralidade de Cristo, pela exposição fiel das Escrituras e pela formação de discípulos que vivam o Evangelho de forma prática e perseverante.",
      "Iniciou o ministério pastoral na Igreja Pentecostal Mistérios da Fé, em Guaíba/RS, onde liderou a juventude de 2009 a 2016."
    ],
    creds: ["Bacharel em Ministério Pastoral", "Teologia por Extensão (CMF-IPMF)", "DNA do Reino (RNO.C)", "Bacharel em Administração"]
  },
  faq: {
    eyebrow: "Dúvidas",
    title: "Perguntas frequentes",
    items: [
      { q: "Em que formato vem o e-book?", a: "Em PDF. Você pode ler no celular, tablet, computador ou imprimir para estudar." },
      { q: "Como recebo depois de pagar?", a: "Assim que o pagamento é aprovado, o botão para baixar o PDF aparece na própria tela do checkout. Você também recebe um link de acesso ao seu pedido." },
      { q: "Quais as formas de pagamento?", a: "Pix, com aprovação na hora, ou cartão de crédito." },
      { q: "E se eu não gostar?", a: "Você tem garantia de 7 dias. Se não gostar, é só pedir e devolvemos 100% do seu dinheiro." },
      { q: "Posso usar em estudos com a minha igreja ou célula?", a: "Sim! Os livros trazem perguntas para reflexão, ótimas para grupos. Para distribuir cópias ao grupo, fale com o pastor pelos contatos no fim da página." },
      { q: "Preciso ler na ordem?", a: "Não é obrigatório: cada livro funciona sozinho. Mas, juntos, formam uma série a partir de 1 Pedro, por isso a coleção completa é a melhor experiência." }
    ]
  },
  footer: {
    email: "benhur.santos@hotmail.com",
    whatsapp: "(51) 9869-2886",
    verse: "“Que pelo poder de Deus sois guardados, mediante a fé.” — 1 Pedro 1:5"
  }
};
