const data = [
  {
    questions: [
      {
        question: "Sua empresa possui missão, visão e valores? ",
        options: ["Sim", "Não"],
        type: "choice",
      },
      {
        question:
          "Você possui objetivos e metas de curto prazo (até 2 anos) para sua empresa? ",
        options: ["Sim", "Não"],
        type: "choice",
      },
      {
        question:
          "Você possui objetivos e metas de médio prazo (de 2 a 4 anos) para sua empresa? ",
        options: ["Sim", "Não"],
        type: "choice",
      },
      {
        question:
          "Você possui objetivos e metas de longo prazo (mais de 5 anos) para sua empresa? ",
        options: ["Sim", "Não"],
        type: "choice",
      },
      {
        question:
          "Qual é o tamanho da empresa em termos de número de funcionários?",
        options: [
          "Até 5 funcionários",
          "de 6 a 10",
          "de 11 a 20",
          "de 21 a 50",
          "+50",
        ],
        type: "choice",
      },
      {
        question: "Qual o faturamento da sua empresa por mês?",
        options: [
          "Até R$ 10 mil",
          "de R$ 11 a 50",
          "de 51 a 100",
          "de 101 a 500",
          +"R$ 500 mil",
        ],
        type: "choice",
      },
      {
        question: "Sua empresa sofre sazonalidade?",
        options: ["Sim", "Não", "Não sei o que significa"],
        type: "choice",
      },
      {
        question: "Quantos concorrentes diretos seu negócio possui?",
        options: ["Até 5", "de 6 a 10", "de 11 a 20", "de 21 a 50", "+50"],
        type: "choice",
      },
      {
        question: "Como a empresa está posicionada no mercado?",
        options: ["Internet", "Físico", "App"],
        type: "choice",
      },
      {
        question: "Sua empresa faz parte de qual segmento?",
        options: ["Industria", "Serviços", "Varejo", "Agro"],
        type: "choice",
      },
      {
        question:
          "Quais ferramentas você usa para gerenciar as finanças da sua empresa?",
        options: ["Não uso nenhuma", "papel", "excel", "tenho um software"],
        type: "choice",
      },
      {
        question: "Você mistura suas finanças pessoais com as da empresa?",
        options: ["Sim", "Não"],
        type: "choice",
        tip: "Ex.: Usa cartão de crédito da empresa para pagar despesas pessoais",
      },
      {
        question:
          "Atualmente você utiliza indicadores-chave de desempenho (KPIs) para avaliar o sucesso da empresa?",
        options: ["Sim", "Não"],
        type: "choice",
      },
      {
        question:
          "Quais ferramentas você usa para gerenciar as pessoas da sua empresa?",
        options: ["Não uso nenhuma", "Papel", "Excel", "Tenho um Software"],
        type: "choice",
      },
      {
        question: "Existe alguma crise acontecendo agora?",
        options: ["Sim", "Não"],
        type: "choice",
      },
      {
        question:
          "Em 1 frase, como você descreveria a cultura organizacional do seu negócio.",
        type: "open",
      },
    ],
  },
];

export default data;
