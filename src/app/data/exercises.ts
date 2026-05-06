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
        title: "Abstração e Entendimento de Compiladores",
        problem: 'Solicite à inteligência artificial: "Por que um computador requer uma linguagem de programação estruturada para interpretar comandos humanos?".',
        hint: "Caso a resposta técnica seja excessivamente complexa, instrua a IA a reformular a explicação utilizando uma analogia simples do cotidiano para garantir a compreensão da lógica subjacente.",
      },
      {
        id: "1-2",
        lessonId: 1,
        title: "Parametrização do Mentor Socrático",
        problem: 'Insira o Prompt de Ouro fornecido no Módulo 1 na interface da inteligência artificial. Em seguida, solicite: "Explique o conceito de Variável em programação".',
        hint: "Verifique o comportamento da IA. O objetivo é que ela faça perguntas guiadas para testar seu raciocínio. Se ela fornecer a resposta completa imediatamente, reforce o prompt exigindo o comportamento socrático.",
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
        title: "Estruturação Lógica Algorítmica",
        problem: 'Cenário: Você precisa desenvolver um sistema que libere acesso a um conteúdo exclusivo apenas para usuários maiores de 18 anos. Solicite à IA: "Liste os passos lógicos sequenciais necessários para verificar a idade de um usuário e liberar acesso. Não forneça código, apenas o fluxo de decisão."',
        hint: "Observe a capacidade de segmentação do problema (Chain of Thought). Caso os passos estejam muito abrangentes, instrua a IA a detalhar etapas intermediárias.",
      },
      {
        id: "2-2",
        lessonId: 2,
        title: "Decomposição de Estados",
        problem: 'Peça à IA para descrever a lógica de estados de uma aplicação de carrinho de compras. Comando sugerido: "Quais são as etapas de validação lógica desde a adição de um item ao carrinho até a finalização do pedido?".',
        hint: "Este exercício reforça a percepção de que fluxos digitais possuem validações sequenciais essenciais antes do processamento final.",
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
        title: "Testando a Inteligência da IDE",
        problem: 'Em seu ambiente de desenvolvimento configurado, crie um arquivo JavaScript vazio. Escreva um comentário declarativo: "// Função que recebe duas strings e retorna a concatenação delas".',
        hint: "Observe a sugestão gerada pela extensão de IA. Analise a estrutura do código sugerido e confirme se compreende a sintaxe antes de aceitar a autocompleção.",
      },
      {
        id: "3-2",
        lessonId: 3,
        title: "Navegação Via Interface de Linha de Comando",
        problem: 'Utilize a IA para aprender comandos essenciais do terminal. Solicite: "Explique o funcionamento básico do terminal de sistema operacional e descreva o comando para criar um novo diretório e acessá-lo logo em seguida".',
        hint: "Compreender a interface de linha de comando é um diferencial de autonomia. Teste o comando sugerido em seu próprio terminal.",
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
        title: "Simulação Controlada de Exceção",
        problem: 'Instrua a IA: "Gere um script básico contendo uma função matemática com um erro de referência intencional". Em seguida, sem visualizar a solução, analise a mensagem de erro retornada e tente identificar o tipo de falha.',
        hint: "A habilidade fundamental do debugging é a interpretação do stack trace. Identifique o número da linha e a descrição do erro no log fornecido.",
      },
      {
        id: "4-2",
        lessonId: 4,
        title: "Verificação de Lógica via IA",
        problem: 'Forneça à IA um pequeno trecho de lógica condicional que você idealizou. Solicite: "Vou descrever o que espero que este trecho faça. Atue como compilador e aponte se o fluxo que descrevi bate com o código, identificando possíveis furos na minha lógica".',
        hint: "A validação cruzada entre intenção e implementação é uma das práticas mais efetivas para evitar bugs em produção.",
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
        title: "Mapeamento de Fluxo de Dados",
        problem: 'Forneça à IA uma estrutura de código simulando o fluxo de autenticação de um usuário (Login). Solicite: "Descreva a trajetória dos dados de entrada (email e senha) por essa estrutura, destacando em qual momento a validação ocorre".',
        hint: "Foque na interpretação do ciclo de vida dos dados e nas verificações de segurança realizadas durante a execução do método.",
      },
      {
        id: "5-2",
        lessonId: 5,
        title: "Documentação Intencional",
        problem: 'Extraia um método de média complexidade de qualquer repositório público. Instrua a IA: "Adicione comentários técnicos focados no "porquê" as decisões arquiteturais foram tomadas neste código, evitando comentar o comportamento óbvio de sintaxe".',
        hint: "Praticar a leitura de comentários construtivos eleva o nível da sua própria documentação profissional.",
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
        title: "Definição Inicial de Entidades",
        problem: 'Projete um escopo mínimo para um aplicativo de "Gestão de Tarefas". Instrua a IA: "Liste as propriedades fundamentais necessárias para estruturar as entidades de Usuário e Tarefa em um banco de dados relacional. Considere o estado de conclusão da tarefa".',
        hint: "Diferenciar tipos de dados primitivos (Strings, Inteiros, Booleanos) para cada propriedade é o princípio central da modelagem de dados técnica.",
      },
      {
        id: "6-2",
        lessonId: 6,
        title: "Análise Reversa de Domínio",
        problem: 'Solicite à IA a análise estrutural de uma plataforma de streaming: "Com base na interface visual padrão de plataformas de vídeo, quais seriam as três principais tabelas de banco de dados que alimentam a exibição inicial?".',
        hint: "Este exercício desenvolve a capacidade de abstração arquitetural, permitindo visualizar os modelos de dados implícitos em interfaces do usuário.",
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
        title: "Aplicação de Nomenclatura Explícita",
        problem: 'Forneça à IA um código ofuscado contendo variáveis nomeadas como "x", "arr" e "val". Instrua: "Refatore o trecho fornecido substituindo as variáveis genéricas por nomes descritivos adequados para o contexto de cálculo de folha de pagamento".',
        hint: "Nomenclatura semântica reduz a carga cognitiva da equipe de engenharia e mitiga a necessidade de comentários excessivos.",
      },
      {
        id: "7-2",
        lessonId: 7,
        title: "Redução de Complexidade Ciclomática",
        problem: 'Solicite à IA a geração de um código com validações condicionais aninhadas (múltiplos IFs dentro de IFs). Após receber o código, exija: "Aplique o conceito de "Early Return" (Retorno Antecipado) para achatar as condicionais e melhorar a legibilidade".',
        hint: "A remoção de condicionais encadeadas é a forma mais imediata de tornar funções escaláveis e seguras contra bugs lógicos.",
      },
    ],
  },
  {
    lessonId: 8,
    lesson: "Módulo 8: IA na Carreira e Preparação para Entrevistas",
    exercises: [
      {
        id: "8-1",
        lessonId: 8,
        title: "Sintetização de Perfil Técnico",
        problem: 'Instrua a IA: "Elabore um resumo profissional objetivo (máximo 4 linhas) para um currículo de Desenvolvedor Júnior, enfatizando o diferencial na utilização técnica e arquitetural da Engenharia Assistida e metodologias lógicas".',
        hint: "Valorizar o foco em estruturação algorítmica e raciocínio crítico destaca seu perfil frente a candidatos com abordagem de codificação puramente mecânica.",
      },
      {
        id: "8-2",
        lessonId: 8,
        title: "Análise de Requisitos e Lacunas",
        problem: 'Cole a descrição de uma vaga real para Desenvolvedor Backend Júnior. Solicite à IA: "Mapeie as competências exigidas na descrição e cruze com meus conhecimentos atuais em lógica de programação. Sugira um cronograma prático focando nos requisitos primários faltantes".',
        hint: "O direcionamento de estudos baseado em demandas ativas do mercado otimiza significativamente sua inserção profissional no setor de tecnologia.",
      },
    ],
  },
];
