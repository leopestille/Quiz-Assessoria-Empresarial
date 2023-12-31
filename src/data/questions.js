const data = [
  {
    question: "Qual foi o seu faturamento nos últimos 12 meses?",
    options: [
      { label: "Até R$ 20.000,00", value: 10 },
      { label: "De R$ 20.000,00 a R$ 50.000,00", value: 8 },
      { label: "De R$ 50.000,00 a R$ 100.000,00", value: 6 },
      { label: "De R$ 100.000,00 a R$ 500.000,00", value: 4 },
      { label: "Acima de R$ 500.000,00", value: 0 },
    ],
    type: "choice",
    category: "Financeiro",
  },
  {
    question: "Você Possui funcionários:",
    options: [
      { label: "Não", value: 100 },
      { label: "Sim, até 5", value: 0 },
      { label: "Sim, de 6 a 10", value: 0 },
      { label: "Sim, de 11 a 50", value: 0 },
      { label: "Sim, mais de 50", value: 0 },
    ],
    type: "choice",
    category: "RH",
  },
  {
    question: "Existem políticas de contratação e retenção de funcionários?",
    options: [
      { label: "Não sei o que é ", value: 0 },
      { label: "Não", value: 4 },
      { label: "Algumas", value: 6 },
      { label: "Sim", value: 10 },
    ],
    type: "choice",
    category: "RH",
  },
  {
    question: "A Empresa possui um planejamento estratégico?",
    options: [
      { label: "Não", value: 0 },
      { label: "Sim, somente na criação dela", value: 4 },
      { label: "Sim, de curto prazo(3 meses)", value: 6 },
      { label: "Sim, de curto e médio prazo(2 anos)", value: 8 },
      { label: "Sim, de longo prazo(5 anos)", value: 10 },
    ],
    type: "choice",
    category: "Diretiva",
  },
  {
    question: "Qual a sua estratégia de Marketing?",
    options: [
      { label: "Não temos", value: 0 },
      { label: "Mídias off line (jornal, revista, folder e etc.)", value: 4 },
      {
        label: "Mídias on line (redes sociais, site, e-mail marketing e etc.)",
        value: 6,
      },
      { label: "Temos uma agência que cuida disso", value: 8 },
      { label: "Temos um setor que cuida disso", value: 10 },
    ],
    type: "choice",
    category: "Marketing",
  },
  {
    question:
      "Você faz uso de tecnologias em suas operações? (Ex.: Vendas on-line, fechamentos de contrato on-line, CRM)",
    options: [
      { label: "Não", value: 0 },
      { label: "Sim", value: 10 },
    ],
    type: "choice",
    category: "Tecnologia",
  },
  {
    question: "A empresa possui um departamento jurídico interno ou terceirizado?",
    options: [
      { label: "Não temos", value: 0 },
      { label: "Terceirizado", value: 5 },
      { label: "Interno", value: 10 },
    ],
    type: "choice",
    category: "Jurídico",
  },
  {
    question: "Você organiza e mantém seus registros contábeis?",
    options: [
      { label: "Não", value: 0 },
      { label: "Sim, em parte", value: 10 },
      { label: "Sim, todos", value: 20 },
    ],
    type: "choice",
    category: "Contábil",
  },
  {
    question: "Você teve lucro nos últimos 12 meses?",
    options: [
      { label: "Não sei", value: 0 },
      { label: "Não", value: 4 },
      { label: "De 1 a 4 meses", value: 6 },
      { label: "De 5 a 8 meses ", value: 8 },
      { label: "De 9 a 12 meses", value: 10 },
    ],
    type: "choice",
    category: "Financeiro",
  },
  {
    question:
      "Você promove o desenvolvimento de competências dos funcionários?",
    options: [
      { label: "Não", value: 0 },
      { label: "Realizo feedback 1x1", value: 4 },
      { label: "Promovo treinamentos até 3x ao ano", value: 6 },
      {
        label: "Promovo treinamento contínuo (possuímos um setor de T&D) ",
        value: 10,
      },
    ],
    type: "choice",
    category: "RH",
  },
  {
    question: "Como é o processo de tomada de decisão estratégica?",
    options: [
      { label: "Feeling, sentimento ou impressão", value: 0 },
      { label: "Necessidade imediata", value: 4 },
      { label: "Com análise de dados", value: 6 },
      {
        label:
          "Após análise de dados e verificação dos objetivos de longo prazo",
        value: 10,
      },
    ],
    type: "choice",
    category: "Diretiva",
  },
  {
    question:
      "Você faz uso de análise de dados para planejar suas campanhas de marketing?",
    options: [
      { label: "Não", value: 0 },
      { label: "Sim", value: 10 },
    ],
    type: "choice",
    category: "Marketing",
  },
  {
    question: "Você tem um plano de transformação digital?",
    options: [
      { label: "Não Tenho", value: 0 },
      { label: "Sim", value: 10 },
    ],
    type: "choice",
    category: "Tecnologia",
  },
  {
    question:
      "A Empresa está em conformidade com todas as regulamentações do setor?",
    options: [
      { label: "Não sei", value: 4 },
      { label: "Nunca falei sobre isso com meus advogados", value: 6 },
      { label: "Acho que sim", value: 0 },
      { label: "Sim", value: 10 },
    ],
    type: "choice",
    category: "Jurídico",
  },
  {
    question: "Você faz uso de algum software de contabilidade?",
    options: [
      { label: "Não", value: 0 },
      { label: "Sim", value: 20 },
    ],
    type: "choice",
    category: "Contábil",
  },
  {
    question: "Você tem uma reserva de emergência financeira?",
    options: [
      { label: "Não", value: 0 },
      { label: "Sim, até 3 meses", value: 4 },
      { label: "Sim, até 6 meses", value: 6 },
      { label: "Sim, até 1 ano", value: 8 },
      { label: "Sim, mais de 1 ano", value: 10 },
    ],
    type: "choice",
    category: "Financeiro",
  },
  {
    question: "Existe um plano de carreira definido para os funcionários?",
    options: [
      { label: "Não", value: 0 },
      { label: "Sim", value: 10 },
    ],
    type: "choice",
    category: "RH",
  },
  {
    question: "Existe um plano de sucessão para a diretoria/Dono?",
    options: [
      { label: "Não", value: 0 },
      { label: "Sim", value: 10 },
    ],
    type: "choice",
    category: "Diretiva",
  },
  {
    question: "Quem é o seu público alvo?",
    options: [
      { label: "Não sei", value: 0 },
      { label: "Conheço, mas não tenho registrado", value: 4 },
      {
        label: "Conheço e os parâmetros NÃO são usados nas campanhas",
        value: 6,
      },
      { label: "Conheço e os parâmetros são usados nas campanhas", value: 10 },
    ],
    type: "choice",
    category: "Marketing",
  },
  {
    question: "Como é a segurança da informação na empresa?",
    options: [
      { label: "Não faço", value: 0 },
      { label: "Faço backup", value: 5 },
      { label: "Uma empresa presta esse serviço", value: 10 },
    ],
    type: "choice",
    category: "Tecnologia",
  },
  {
    question: "Como é o processo de revisão de contratos na empresa?",
    options: [
      { label: "Não utilizamos contratos", value: 0 },
      { label: "Eu mesmo reviso", value: 4 },
      { label: "Os advogados externos revisam", value: 6 },
      { label: "O setor jurídico inteiro revisa", value: 10 },
    ],
    type: "choice",
    category: "Jurídico",
  },
  {
    question:
      "Quais são os principais indicadores contábeis que você monitora?",
    options: [
      { label: "Nenhum", value: 0 },
      { label: "Liquidez", value: 8 },
      { label: "Rentabilidade", value: 12 },
      { label: "Endividamento", value: 16 },
      { label: "Liquidez + Rentabilidade + Endividamento", value: 20 },
    ],
    type: "choice",
    category: "Contábil",
  },
  {
    question: "Como você controla suas despesas e receitas?",
    options: [
      { label: "Não controlo", value: 0 },
      { label: "Papel, caderneta ou etc", value: 4 },
      { label: "Planilhas/Excel", value: 6 },
      { label: "Aplicativo(NIBO, Organizze, conta azul)", value: 8 },
      { label: "Software(ERP, Sankya, TOTV)", value: 10 },
    ],
    type: "choice",
    category: "Financeiro",
  },
  {
    question: "Você mede o nível de satisfação dos funcionários?",
    options: [
      { label: "Não", value: 0 },
      { label: "Sim", value: 10 },
    ],
    type: "choice",
    category: "RH",
  },
  {
    question: "Como a sua empresa lida com mudanças no ambiente externo?",
    options: [
      { label: "Reativamente", value: 0 },
      { label: "Análise de Impacto e Ação", value: 4 },
      { label: "Temos alguns planos de contenção de danos", value: 6 },
      { label: "Temos uma comissão para esses assuntos", value: 10 },
    ],
    type: "choice",
    category: "Diretiva",
  },
  {
    question: "Quais são os seus principais canais de marketing?",
    options: [
      { label: "Não Sei", value: 0 },
      { label: "Mídia Tradicional", value: 4 },
      { label: "Email Marketing", value: 6 },
      { label: "Publicidade Online", value: 8 },
      { label: "Mídia Tradicional, E-mail, Online e Influência", value: 10 },
    ],
    type: "choice",
    category: "Marketing",
  },
  {
    question: "a Empresa possui uma equipe de TI interna ou terceirizada?",
    options: [
      { label: "Terceirizada", value: 0 },
      { label: "Interna", value: 10 },
    ],
    type: "choice",
    category: "Tecnologia",
  },
  {
    question: "A empresa já enfrentou ou enfrenta algum processo legal?",
    options: [
      { label: "Sim, mais de 15 vezes", value: 0 },
      { label: "Sim, até 15 vezes", value: 4 },
      { label: "Sim, até 10 vezes", value: 6 },
      { label: "Sim, menos de 5 vezes", value: 8 },
      { label: "Não", value: 10 },
    ],
    type: "choice",
    category: "Jurídico",
  },
  {
    question: "Você possui uma auditoria contábil regular?",
    options: [
      { label: "Não", value: 8 },
      { label: "Sim, anual", value: 12 },
      { label: "Sim, semestral", value: 16 },
      { label: "Sim, trimestral", value: 20 },
    ],
    type: "choice",
    category: "Contábil",
  },
  {
    question: "Quais são suas principais despesas?",
    options: [
      { label: "Não sei", value: 0 },
      { label: "Pessoal(folha de pagamento)", value: 4 },
      { label: "Produtos(estoque)", value: 6 },
      { label: "Financeiro(empréstimos)", value: 8 },
      { label: "Marketing", value: 10 },
    ],
    type: "choice",
    category: "Financeiro",
  },
  {
    question: "Como é feita a Avaliação de Desempenho?",
    options: [
      { label: "Não avalio", value: 0 },
      { label: "Formulário impresso", value: 5 },
      { label: "Software", value: 10 },
    ],
    type: "choice",
    category: "RH",
  },
  {
    question:
      "Quais são as áreas com maiores desafios enfrentados pela diretoria/Dono?",
    options: [
      { label: "Financeiro", value: 10 },
      { label: "RH", value: 7 },
      { label: "Diretiva", value: 5 },
      { label: "Marketing", value: 3 },
      { label: "Tecnologia", value: 0 },
      { label: "Contábil", value: 9 },
      { label: "Jurídico", value: 1 },
    ],
    type: "choice",
    category: "Diretiva",    
  },
  {
    question: "Como você mede o retorno sobre o investimento em marketing?",
    options: [
      { label: "Não meço", value: 0 },
      { label: "ROI", value: 4 },
      { label: "CAC", value: 6 },
      { label: "ROI + LTV + CAC + CHURN", value: 10 },
    ],
    type: "choice",
    category: "Marketing",
  },
  {
    question: "Quais são os principais desafios tecnológicos da empresa?",
    options: [
      { label: "Implantar um sistema", value: 0 },
      { label: "adesão dos funcionários a um novo sistema", value: 4 },
      { label: "encontrar um software que me atenda", value: 6 },
      { label: "ter um time inteiro cuidando disso", value: 10 },
    ],
    type: "choice",
    category: "Tecnologia",
  },
  {
    question: "Como é o processo de gestão dos riscos legais?",
    options: [
      { label: "Não temos", value: 0 },
      { label: "Eu faço", value: 4 },
      { label: "Os advogados externos fazem", value: 6 },
      { label: "Os advogados internos fazem", value: 8 },
      { label: "Temos um setor de compliance", value: 10 },
    ],
    type: "choice",
    category: "Jurídico",
  },
  {
    question:
      "Você tem um processo de revisão regular para verificar possíveis erros e fraudes contábeis?",
    options: [
      { label: "Não", value: 0 },
      { label: "Sim", value: 20 },
    ],
    type: "choice",
    category: "Contábil",
  },
  {
    question: "Você está satisfeito com o seu retorno sobre o investimento?",
    options: [
      { label: "Não sei", value: 0 },
      { label: "Não", value: 5 },
      { label: "Sim", value: 10 },
    ],
    type: "choice",
    category: "Financeiro",
  },
  {
    question: "Qual é a taxa de rotatividade de funcionários(Turn over)?",
    options: [
      { label: "Não sei o que é", value: 0 },
      { label: "Acima de 21%", value: 4 },
      { label: "De 11 a 20%", value: 6 },
      { label: "De 6 a 10%", value: 8 },
      { label: "Até 5%", value: 10 },
    ],
    type: "choice",
    category: "RH",
  },
  {
    question:
      "Como a empresa se posiciona em relação à responsabilidade social",
    options: [
      { label: "Nunca pensei sobre", value: 0 },
      { label: "Temos algumas ações", value: 5 },
      { label: "Considero irrelevante", value: 10 },
    ],
    type: "choice",
    category: "Diretiva",
  },
  {
    question: "Qual é a estratégia de branding da empresa?",
    options: [
      { label: "Não possuo", value: 0 },
      { label: "Posicionamento de marca", value: 4 },
      { label: "Identidade Visual", value: 6 },
      { label: "Storytelling", value: 8 },
      { label: "Experiência do cliente", value: 10 },
    ],
    type: "choice",
    category: "Marketing",
  },
  {
    question:
      "A empresa faz uso de alguma tecnologia emergente? (IA, Blockchain)",
    options: [
      { label: "Não faço", value: 0 },
      { label: "Sim", value: 10 },
    ],
    type: "choice",
    category: "Tecnologia",
  },
  {
    question: "A empresa está em dia com as obrigações fiscais?",
    options: [
      { label: "Não", value: 0 },
      { label: "Sim", value: 10 },
    ],
    type: "choice",
    category: "Jurídico",
  },
  {
    question: "Qual é a sua estratégia de gestão de riscos financeiros?",
    options: [
      { label: "Não possuo", value: 0 },
      { label: "Saldo disponível (Capital de Giro)", value: 4 },
      { label: "Margem para investimentos", value: 6 },
      { label: "Investimento com liquidez imediata", value: 8 },
      { label: "Reserva de Emergência", value: 10 },
    ],
    type: "choice",
    category: "Financeiro",
  },
  {
    question: "Como a empresa lida com conflitos internos?",
    options: [
      {
        label: "Não lida, deixamos as coisas se resolverem sozinhas",
        value: 0,
      },
      { label: "E-mails e pronunciamentos", value: 5 },
      { label: "Reuniões e feedbacks de alinhamento", value: 10 },
    ],
    type: "choice",
    category: "RH",
  },
  {
    question:
      "Quais os principais indicadores de desempenho utilizados pela diretoria/Dono?",
    options: [
      { label: "Não utilizamos indicadores", value: 0 },
      { label: "Financeiros", value: 4 },
      { label: "Clientes atendidos", value: 6 },
      { label: "Satisfação do cliente", value: 10 },
    ],
    type: "choice",
    category: "Diretiva",
  },
  {
    question: "O quanto sua empresa se diferencia em relação a concorrência?",
    options: [
      { label: "Não sei dizer", value: 0 },
      { label: "Muito pouco", value: 4 },
      { label: "Pouco", value: 6 },
      { label: "Muita diferença", value: 10 },
    ],
    type: "choice",
    category: "Marketing",
  },
  {
    question: "Como é o processo de atualização e manutenção dos sistemas?",
    options: [
      { label: "Não fazemos", value: 0 },
      { label: "Interno", value: 5 },
      { label: "Externo", value: 10 },
    ],
    type: "choice",
    category: "Tecnologia",
  },
  {
    question: "Como é feita a proteção de propriedade intelectual da empresa?",
    options: [
      { label: "Não fazemos", value: 0 },
      { label: "Estamos registrados", value: 10 },
    ],
    type: "choice",
    category: "Jurídico",
  },
  {
    question:
      "Você faz uso de alguma ferramenta de controle financeiro? (contas a pagar, a receber, fluxo de caixa, cartões e boletos e etc.)",
    options: [
      { label: "Não controlo", value: 0 },
      { label: "Papel, Caderneta, etc", value: 4 },
      { label: "Planilhas, Excel", value: 6 },
      { label: "Aplicativo (NIBO, Organizze, conta azul)", value: 8 },
      { label: "Software (ERP, Sanka, TOTV)", value: 10 },
    ],
    type: "choice",
    category: "Financeiro",
  },
  {
    question: "Há algum programa de benefícios para os funcionários?",
    options: [
      { label: "Somente os exigidos por lei", value: 0 },
      { label: "Até 3", value: 4 },
      { label: "De 4 a 5", value: 6 },
      { label: "Mais de 6", value: 10 },
    ],
    type: "choice",
    category: "RH",
  },
  {
    question: "Como a diretoria incentiva a inovação?",
    options: [
      { label: "Não há estratégia", value: 0 },
      { label: "Palavras de afirmação", value: 4 },
      { label: "Bônus em dinheiro", value: 6 },
      { label: "Temos um setor de P & D", value: 10 },
    ],
    type: "choice",
    category: "Diretiva",
  },
  {
    question: "Como você acompanha as tendências de mercado?",
    options: [
      { label: "Não acompanho", value: 0 },
      { label: "Jornais e Revistas", value: 4 },
      { label: "Internet", value: 6 },
      { label: "Recebo Relatório de Empresa especializada", value: 10 },
    ],
    type: "choice",
    category: "Marketing",
  },
  {
    question:
      "Você utiliza soluções de software de código aberto ou proprietário?",
    options: [
      { label: "Aberto", value: 0 },
      { label: "Proprietário", value: 10 },
    ],
    type: "choice",
    category: "Tecnologia",
  },
  {
    question:
      "A empresa tem políticas para garantir a conformidade com a legislação trabalhista?",
    options: [
      { label: "Não", value: 0 },
      { label: "Sim", value: 10 },
    ],
    type: "choice",
    category: "Jurídico",
  },
  {
    question: "Como são tomadas as decisões de investimento na empresa?",
    options: [
      { label: "Tenho um pressentimento", value: 0 },
      { label: "Pelo tempo de reclamação da equipe", value: 4 },
      { label: "Para cumprir com a promessa que fiz", value: 6 },
      { label: "Tenho planejamento de curto e médio prazo", value: 8 },
      {
        label: "Se está alinhado com o planejamento de longo prazo",
        value: 10,
      },
    ],
    type: "choice",
    category: "Financeiro",
  },
  {
    question: "Como é feita a comunicação interna?",
    options: [
      { label: "Somente verbal", value: 0 },
      { label: "Verbal e escrita (e-mails e memorandos)", value: 4 },
      { label: "Verbal, escrita, software de mensagem", value: 6 },
      {
        label: "Verbal, escrita, software de mensagem e reuniões gerais",
        value: 10,
      },
    ],
    type: "choice",
    category: "RH",
  },
  {
    question: "Qual é a visão de futuro da empresa?",
    options: [
      { label: "Não consigo imaginar", value: 0 },
      { label: "Ruim", value: 4 },
      { label: "Boa", value: 6 },
      { label: "Ótima", value: 10 },
    ],
    type: "choice",
    category: "Diretiva",
  },
  {
    question: "Quais são suas estratégias de retenção de clientes?",
    options: [
      { label: "Não temos", value: 0 },
      { label: "Preço Baixo", value: 4 },
      { label: "Comunicação Personalizada", value: 6 },
      { label: "Atendimento excepcional", value: 10 },
    ],
    type: "choice",
    category: "Marketing",
  },
  {
    question:
      "A empresa possui um site ou aplicativo para interação com clientes?",
    options: [
      { label: "Não possui", value: 0 },
      { label: "Possui site", value: 4 },
      { label: "Possui site e  aplicativo de terceiros", value: 6 },
      { label: "Possui site e aplicativo próprio", value: 10 },
    ],
    type: "choice",
    category: "Tecnologia",
  },
  {
    question:
      "Como a empresa se prepara para mudanças na legislação que afetam o negócio?",
    options: [
      { label: "Não se prepara", value: 0 },
      { label: "Acompanha pessoalmente as mudanças", value: 5 },
      { label: "recebo relatórios jurídicos", value: 10 },
    ],
    type: "choice",
    category: "Jurídico",
  },
  {
    question:
      "Qual é o seu processo para a realização do planejamento financeiro?",
    options: [
      { label: "Não planejo", value: 0 },
      { label: "Planejo mas só eu sei o plano", value: 4 },
      {
        label: "Planejo terminar o mes com a maioria das contas pagas",
        value: 6,
      },
      { label: "Já planejei mas nunca executei", value: 8 },
      {
        label:
          "Tenho planejamento, processo de execução e modelos de acompanhamento",
        value: 10,
      },
    ],
    type: "choice",
    category: "Financeiro",
  },
  {
    question: "Qual é a estratégia para a formação de lideranças?",
    options: [
      { label: "Não existe", value: 0 },
      { label: "Tempo de empresa", value: 4 },
      { label: "Resultados financeiros", value: 6 },
      { label: "Plano de cargos e carreiras", value: 10 },
    ],
    type: "choice",
    category: "RH",
  },
  {
    question: "A diretoria se envolve no dia a dia operacional da empresa?",
    options: [
      { label: "Não", value: 0 },
      { label: "Sim, interfere o tempo inteiro", value: 5 },
      { label: "Sim, interfere pontualmente", value: 10 },
    ],
    type: "choice",
    category: "Diretiva",
  },
  {
    question: "Você utiliza estratégias de marketing digital?",
    options: [
      { label: "Não", value: 0 },
      { label: "Sim", value: 10 },
    ],
    type: "choice",
    category: "Marketing",
  },
  {
    question: "A empresa possui alguma estratégia de automação de processos?",
    options: [
      { label: "Não possui", value: 0 },
      { label: "Sim", value: 10 },
    ],
    type: "choice",
    category: "Tecnologia",
  },
  {
    question: "A empresa possui um código de ética e conduta?",
    options: [
      { label: "Não", value: 0 },
      { label: "Sim", value: 10 },
    ],
    type: "choice",
    category: "Jurídico",
  },
];

export default data;
