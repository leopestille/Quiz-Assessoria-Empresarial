const data = [
  {
    question: "Sua empresa possui missão, visão e valores? ",
    options: [
      { label: "Sim", value: 10 },
      { label: "Não", value: 5 },
    ],
    type: "choice",
  },
  {
    question:
      "Você possui objetivos e metas de curto prazo (até 2 anos) para sua empresa? ",
    options: [
      { label: "Sim", value: 10 },
      { label: "Não", value: 5 },
    ],
    type: "choice",
  },
  {
    question:
      "Você possui objetivos e metas de médio prazo (de 2 a 4 anos) para sua empresa? ",
    options: [
      { label: "Sim", value: 10 },
      { label: "Não", value: 5 },
    ],
    type: "choice",
  },
  {
    question:
      "Você possui objetivos e metas de longo prazo (mais de 5 anos) para sua empresa? ",
    options: [
      { label: "Sim", value: 10 },
      { label: "Não", value: 5 },
    ],
    type: "choice",
  },
  {
    question:
      "Qual é o tamanho da empresa em termos de número de funcionários?",
    options: [
      { label: "Até 5 funcionários", value: 2 },
      { label: "de 6 a 10", value: 4 },
      { label: "de 11 a 20", value: 6 },
      { label: "de 21 a 50", value: 8 },
      { label: "+50", value: 10 },
    ],
    type: "choice",
  },
  {
    question: "Qual o faturamento da sua empresa por mês?",
    options: [
      { label: "Até R$ 10 mil", value: 2 },
      { label: "de R$ 11 a 50 mil", value: 4 },
      { label: "de R$ 51 mil a 100 mil", value: 6 },
      { label: "de R$ 101 mil a 500 mil", value: 8 },
      { label: "R$ 500 mil+", value: 10 },
    ],
    type: "choice",
  },
  {
    question: "Sua empresa sofre sazonalidade?",
    options: [
      { label: "Sim", value: 6 },
      { label: "Não", value: 4 },
      { label: "Não sei o que significa", value: 2 },
    ],
    type: "choice",
  },
  {
    question: "Quantos concorrentes diretos seu negócio possui?",
    options: [
      { label: "Até 5", value: 2 },
      { label: "de 6 a 10", value: 4 },
      { label: "de 11 a 20", value: 6 },
      { label: "de 21 a 50", value: 8 },
      { label: "+50", value: 10 },
    ],
    type: "choice",
  },
  {
    question: "Como a empresa está posicionada no mercado?",
    options: [
      { label: "Internet", value: 2 },
      { label: "Físico", value: 4 },
      { label: "App", value: 6 },
    ],
    type: "choice",
  },
  {
    question: "Sua empresa faz parte de qual segmento?",
    options: [
      { label: "Industria", value: 2 },
      { label: "Serviços", value: 4 },
      { label: "Varejo", value: 6 },
      { label: "Agro", value: 8 },
    ],
    type: "choice",
  },
  {
    question:
      "Quais ferramentas você usa para gerenciar as finanças da sua empresa?",
    options: [
      { label: "Não uso nenhuma", value: 2 },
      { label: "Papel", value: 4 },
      { label: "Excel", value: 6 },
      { label: "Tenho um software", value: 8 },
    ],
    type: "choice",
  },
  {
    question: "Você mistura suas finanças pessoais com as da empresa?",
    options: [
      { label: "Sim", value: 10 },
      { label: "Não", value: 5 },
    ],
    type: "choice",
    tip: "Ex.: Usa cartão de crédito da empresa para pagar despesas pessoais",
  },
  {
    question:
      "Atualmente você utiliza indicadores-chave de desempenho (KPIs) para avaliar o sucesso da empresa?",
    options: [
      { label: "Sim", value: 10 },
      { label: "Não", value: 5 },
    ],
    type: "choice",
  },
  {
    question:
      "Quais ferramentas você usa para gerenciar as pessoas da sua empresa?",
    options: [
      { label: "Não uso nenhuma", value: 2 },
      { label: "Papel", value: 4 },
      { label: "Excel", value: 6 },
      { label: "Tenho um software", value: 8 },
    ],
    type: "choice",
  },
  {
    question: "Existe alguma crise acontecendo agora?",
    options: [
      { label: "Sim", value: 5 },
      { label: "Não", value: 10 },
    ],
    type: "choice",
  },
  {
    question:
      "Em 1 frase, como você descreveria a cultura organizacional do seu negócio.",
    type: "open",
  },
];

export default data;
