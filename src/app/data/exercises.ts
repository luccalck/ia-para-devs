export interface Exercise {
  id: string;
  lessonId: number;
  title: string;
  problem: string;
  hint: string;
}

export interface LessonExercises {
  lessonId: number;
  lesson: string;
  exercises: Exercise[];
}

export const exerciseData: LessonExercises[] = [
  {
    lessonId: 1,
    lesson: 'Módulo 1: O Fim do "Vibecoding" e o Mindset de Engenheiro',
    exercises: [
      {
        id: "1-1",
        lessonId: 1,
        title: "Programação Assistida vs. Copiar e Colar",
        problem:
          'Você recebeu um código de um chatbot que resolve um problema de ordenação. Analise o código abaixo e responda: Quais partes você entende completamente? Quais partes você NÃO entende? Para cada parte que não entende, formule uma pergunta específica para a IA.\n\nfunction sort(arr) {\n  for (let i = 0; i < arr.length; i++) {\n    for (let j = 0; j < arr.length - i - 1; j++) {\n      if (arr[j] > arr[j+1]) {\n        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];\n      }\n    }\n  }\n  return arr;\n}',
        hint: "Não se trata de 'funciona ou não funciona'. A pergunta certa é: 'Eu consigo explicar CADA linha para outra pessoa?' Se a resposta for não, você está vibecoding.",
      },
      {
        id: "1-2",
        lessonId: 1,
        title: "Criando seu System Prompt de Mentor",
        problem:
          'Escreva um "System Prompt" que transforme um chatbot de IA em um mentor socrático. Ele deve: (1) nunca dar respostas diretas, (2) fazer perguntas que guiem seu raciocínio, (3) adaptar o nível de dificuldade baseado nas suas respostas. Teste com uma pergunta sobre loops.',
        hint: "Pense em como um bom professor age. Ele não diz 'a resposta é X'. Ele pergunta 'O que acontece quando Y?'. Inclua restrições claras no seu prompt como 'Nunca forneça código completo'.",
      },
    ],
  },
  {
    lessonId: 2,
    lesson: "Módulo 2: Engenharia de Prompt para Lógica de Programação",
    exercises: [
      {
        id: "2-1",
        lessonId: 2,
        title: "Chain of Thought — Decomposição de Problemas",
        problem:
          "Você precisa criar um sistema de carrinho de compras. Em vez de pedir diretamente o código à IA, decomponha o problema em pelo menos 5 etapas menores usando a técnica Chain of Thought. Escreva cada etapa como um prompt separado.",
        hint: "A chave do Chain of Thought é: cada passo deve ser tão simples que você consegue verificar se está certo. Ex: Passo 1: 'Como representar um produto com nome e preço?' — Isso é verificável!",
      },
      {
        id: "2-2",
        lessonId: 2,
        title: "Few-Shot Prompting para Padrões de Código",
        problem:
          'Crie um prompt Few-Shot que ensine à IA o padrão de nomenclatura que você quer. Forneça 3 exemplos de funções nomeadas no seu padrão e peça que a IA gere mais 3 seguindo o mesmo estilo. Compare os resultados.',
        hint: "Few-Shot = dar exemplos antes do pedido. Quanto mais consistentes seus exemplos, mais a IA entende o padrão. Tente fornecer exemplos que cubram diferentes cenários (CRUD, validação, transformação).",
      },
    ],
  },
  {
    lessonId: 3,
    lesson: "Módulo 3: Setup do Ambiente: IDEs e Extensões Inteligentes",
    exercises: [
      {
        id: "3-1",
        lessonId: 3,
        title: "Configuração do VS Code com IA",
        problem:
          'Liste 5 extensões do VS Code que integram IA no seu fluxo de trabalho. Para cada uma, descreva: (1) o que ela faz, (2) quando usá-la, (3) quando NÃO usá-la. Justifique por que a extensão é útil sem criar dependência.',
        hint: "Pense em extensões como ferramentas, não muletas. Uma chave de fenda é útil, mas você precisa saber qual parafuso apertar. Pesquise sobre Codeium, Continue, GitHub Copilot, e extensões de linting.",
      },
      {
        id: "3-2",
        lessonId: 3,
        title: "Gerenciamento de Contexto em IA",
        problem:
          'Abra um projeto com pelo menos 3 arquivos. Peça à IA para explicar uma função, mas sem fornecer os arquivos relacionados. Depois, forneça o contexto completo. Compare as respostas. O que mudou?',
        hint: "A IA não tem memória mágica — ela só sabe o que você mostra. O 'contexto' é tudo: imports, tipos, arquivos relacionados. Sem contexto, a IA inventa; com contexto, ela acerta.",
      },
    ],
  },
  {
    lessonId: 4,
    lesson: "Módulo 4: Debugging Consciente: Aprendendo com o Erro",
    exercises: [
      {
        id: "4-1",
        lessonId: 4,
        title: "Leitura de Stack Trace",
        problem:
          'Analise o seguinte erro e identifique: (1) Em qual arquivo o erro ocorreu, (2) Em qual linha, (3) Qual o tipo de erro, (4) Qual a causa provável.\n\nTypeError: Cannot read properties of undefined (reading \'map\')\n  at UserList (src/components/UserList.tsx:15:22)\n  at renderWithHooks (react-dom.development.js:14985:18)\n  at mountIndeterminateComponent (react-dom.development.js:17811:13)',
        hint: "Leia o Stack Trace de CIMA para BAIXO. A primeira linha é onde o erro aconteceu. 'Cannot read properties of undefined' significa que algo que deveria existir é undefined. O que poderia ser undefined na linha 15?",
      },
      {
        id: "4-2",
        lessonId: 4,
        title: "Debugging Socrático com IA",
        problem:
          'Pegue um bug real de um código seu (ou invente um). Em vez de pedir à IA para corrigir, use o prompt: "Explique este erro passo a passo, mas não me dê a solução corrigida ainda. Faça perguntas que me ajudem a encontrar o problema." Documente o diálogo.',
        hint: "O objetivo não é a correção rápida, é o entendimento profundo. Quando você entende POR QUE o bug aconteceu, você evita bugs similares no futuro. A IA como mentor > IA como autocomplete.",
      },
    ],
  },
  {
    lessonId: 5,
    lesson: "Módulo 5: Engenharia Reversa e Leitura de Código",
    exercises: [
      {
        id: "5-1",
        lessonId: 5,
        title: "Dissecando Código Open Source",
        problem:
          'Escolha uma função de uma biblioteca popular (ex: a função debounce do Lodash). Sem olhar a documentação, tente entender o que cada linha faz. Depois, peça à IA para explicar para um estudante de 1º semestre. Compare sua análise com a explicação da IA.',
        hint: "Comece identificando: (1) quais são os parâmetros, (2) o que é retornado, (3) quais variáveis de estado existem. Engenharia reversa é como arqueologia: você escava camada por camada.",
      },
      {
        id: "5-2",
        lessonId: 5,
        title: "Geração de Fluxograma a partir de Código",
        problem:
          'Pegue uma função com pelo menos 2 condicionais e 1 loop. Peça à IA para gerar um fluxograma textual da lógica. Depois, tente reescrever o código a partir do fluxograma sem olhar o original. Os códigos são equivalentes?',
        hint: "Fluxogramas revelam a LÓGICA separada da SINTAXE. Se você consegue entender o fluxograma, você entende o algoritmo — independente da linguagem de programação.",
      },
    ],
  },
  {
    lessonId: 6,
    lesson: "Módulo 6: Arquitetura e Modelagem de Dados",
    exercises: [
      {
        id: "6-1",
        lessonId: 6,
        title: "Modelagem de Banco de Dados",
        problem:
          'Projete o banco de dados para um sistema de biblioteca com: livros, autores, empréstimos e usuários. Desenhe as tabelas, campos e relacionamentos. Depois, peça à IA para criticar seu modelo. Ela encontrou falhas que você não viu?',
        hint: "Pense nos relacionamentos: Um autor pode ter muitos livros? Um livro pode ter muitos autores? Isso muda o modelo! Considere também: o que acontece quando um livro é emprestado duas vezes?",
      },
      {
        id: "6-2",
        lessonId: 6,
        title: "Design de API REST",
        problem:
          "Projete as rotas de uma API REST para o sistema de biblioteca do exercício anterior. Defina: método HTTP, URL, corpo da requisição e resposta esperada para pelo menos 5 endpoints. Siga as convenções REST.",
        hint: "REST tem convenções: GET para ler, POST para criar, PUT para atualizar, DELETE para remover. A URL deve representar o RECURSO, não a AÇÃO. Ex: GET /livros (correto) vs GET /buscarLivros (incorreto).",
      },
    ],
  },
  {
    lessonId: 7,
    lesson: "Módulo 7: Refatoração, Clean Code e Performance",
    exercises: [
      {
        id: "7-1",
        lessonId: 7,
        title: "Aplicando Princípios SOLID",
        problem:
          'Analise esta classe e identifique quais princípios SOLID ela viola:\n\nclass UserManager {\n  createUser(data) { /* salva no banco */ }\n  sendEmail(user) { /* envia email */ }\n  generatePDF(user) { /* gera relatório */ }\n  validateCPF(cpf) { /* valida CPF */ }\n  logAction(action) { /* salva log */ }\n}\n\nProponha uma refatoração que respeite pelo menos o SRP (Single Responsibility Principle).',
        hint: "O SRP diz: uma classe deve ter apenas UMA razão para mudar. A classe UserManager muda se: a lógica de email mudar, OU o formato do PDF mudar, OU a validação mudar... Quantas responsabilidades ela tem?",
      },
      {
        id: "7-2",
        lessonId: 7,
        title: "Análise de Complexidade Big O",
        problem:
          'Compare estas duas funções que verificam se um array contém duplicatas. Qual é a complexidade (Big O) de cada uma? Qual é mais eficiente e por quê?\n\n// Versão A\nfunction hasDupsA(arr) {\n  for (let i = 0; i < arr.length; i++)\n    for (let j = i+1; j < arr.length; j++)\n      if (arr[i] === arr[j]) return true;\n  return false;\n}\n\n// Versão B\nfunction hasDupsB(arr) {\n  return new Set(arr).size !== arr.length;\n}',
        hint: "Conte quantas vezes cada elemento é comparado. Na versão A, cada par é verificado — isso é O(n²). Na versão B, o Set percorre o array uma vez — isso é O(n). Para 1000 elementos: 1.000.000 vs 1.000 operações!",
      },
    ],
  },
  {
    lessonId: 8,
    lesson: "Módulo 8: Testes Automatizados e Qualidade de Software",
    exercises: [
      {
        id: "8-1",
        lessonId: 8,
        title: "Identificando Edge Cases",
        problem:
          'Você tem uma função que calcula o preço final de um produto com desconto:\n\nfunction calcularPreco(preco, desconto) {\n  return preco - (preco * desconto / 100);\n}\n\nListe TODOS os edge cases que deveriam ser testados. Pense em: valores negativos, zeros, limites, tipos incorretos, etc.',
        hint: "Edge cases são os extremos e exceções. O que acontece com desconto de 0%? E 100%? E 150%? E preço negativo? E se alguém passar uma string? A IA pode ajudar: 'Quais cenários de teste eu esqueci?'",
      },
      {
        id: "8-2",
        lessonId: 8,
        title: "Escrevendo Testes Unitários",
        problem:
          'Para a função calcularPreco do exercício anterior, escreva pelo menos 5 testes unitários cobrindo os edge cases que você identificou. Use o formato: dado X, quando Y, então Z. Peça à IA para revisar se seus testes são suficientes.',
        hint: "Formato AAA (Arrange, Act, Assert): 1) Prepare os dados, 2) Execute a função, 3) Verifique o resultado. Um bom teste testa UMA coisa e tem um nome descritivo como 'deve retornar 0 quando desconto é 100%'.",
      },
    ],
  },
  {
    lessonId: 9,
    lesson: "Módulo 9: Automatizando o Trabalho Maçante (Boring Stuff)",
    exercises: [
      {
        id: "9-1",
        lessonId: 9,
        title: "Gerando Documentação Profissional",
        problem:
          'Pegue uma função ou classe de um projeto seu que NÃO tem documentação. Escreva: (1) JSDoc completo com @param e @returns, (2) Um README.md para o módulo com exemplos de uso. Use IA para revisar, mas não para escrever do zero.',
        hint: "Boa documentação responde 3 perguntas: O QUE faz? COMO usar? POR QUE existe? JSDoc é para a primeira, README é para as duas últimas. Comece pelo README — se você não consegue explicar em texto, o código pode estar complexo demais.",
      },
      {
        id: "9-2",
        lessonId: 9,
        title: "Criando Mock Data Realista",
        problem:
          'Crie um prompt que gere 10 objetos JSON de "produtos de e-commerce" com campos realistas (nome, preço, categoria, estoque, avaliações). Os dados devem ser coerentes entre si (ex: preços fazem sentido para a categoria).',
        hint: "Dados fictícios ruins geram bugs invisíveis. Um produto com preço -5 ou estoque 999999 não testa nada real. Peça à IA para gerar dados que 'pareçam vir de um banco de dados de produção'. Inclua variações e exceções.",
      },
    ],
  },
  {
    lessonId: 10,
    lesson: "Módulo 10: IA na Carreira e Preparação para Entrevistas",
    exercises: [
      {
        id: "10-1",
        lessonId: 10,
        title: "Simulação de Entrevista Técnica",
        problem:
          'Use a IA como entrevistador técnico. Peça que ela faça 3 perguntas progressivas sobre um tema (ex: React, Python, SQL). Para cada resposta sua, peça feedback honesto e uma nota de 1-10. Documente o que você errou e precisa estudar.',
        hint: "Entrevistas técnicas testam PROFUNDIDADE, não AMPLITUDE. A IA vai perguntar 'O que é X?' e depois 'Como X funciona internamente?' e depois 'Quando X é uma má escolha?'. Prepare-se para os 'por quês'.",
      },
      {
        id: "10-2",
        lessonId: 10,
        title: "Otimização de Perfil Profissional",
        problem:
          'Escreva um resumo profissional (bio) de 3-4 linhas para LinkedIn. Depois, peça à IA para: (1) avaliar objetivamente, (2) sugerir melhorias focadas em palavras-chave do mercado, (3) reescrever mantendo sua voz. Compare as versões.',
        hint: "Recrutadores buscam por palavras-chave. Sua bio deve ter: tecnologias que você domina, tipo de problema que resolve, e resultado que entrega. 'Desenvolvedor React' é fraco. 'Desenvolvedor Frontend focado em interfaces acessíveis com React e TypeScript' é forte.",
      },
    ],
  },
];
