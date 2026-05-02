export interface Resource {
  title: string;
  type: string;
  size?: string;
  url?: string;
}

export interface Prompt {
  title: string;
  content: string;
}

export interface LinkItem {
  title: string;
  url: string;
}

export interface LessonData {
  id: number;
  title: string;
  duration: string;
  difficulty: "Iniciante" | "Intermediário" | "Avançado";
  thumbnail: string;
  description: string;
  approach: string;
  materials: Resource[];
  prompts: Prompt[];
  suggestedSites: LinkItem[];
}

export const lessons: LessonData[] = [
  {
    id: 1,
    title: 'Módulo 1: O Fim do "Vibecoding" e o Mindset de Engenheiro',
    duration: "1h30",
    difficulty: "Iniciante",
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&q=80",
    description: "Diferença entre copiar e colar e programação assistida.",
    approach: 'Diferença entre "copiar e colar" e "programação assistida". Como não deixar o cérebro atrofiar enquanto a IA escreve.',
    materials: [
      { title: 'PDF "Manual do Desenvolvedor Aumentado"', type: 'PDF', size: '2.1 MB' }
    ],
    prompts: [
      { title: "System Prompt", content: 'Setup de "System Prompt" para transformar o ChatGPT/Gemini em um tutor socrático.' }
    ],
    suggestedSites: [
      { title: "Documentação oficial da OpenAI", url: "#" },
      { title: "Documentação oficial da Google", url: "#" }
    ]
  },
  {
    id: 2,
    title: "Módulo 2: Engenharia de Prompt para Lógica de Programação",
    duration: "1h45",
    difficulty: "Iniciante",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80",
    description: "Decomponha problemas complexos em passos menores.",
    approach: "Como decompor problemas complexos em passos menores (Chain of Thought) antes de pedir qualquer linha de código.",
    materials: [
      { title: "Slides sobre decomposição de requisitos", type: "Slide", size: "3.5 MB" }
    ],
    prompts: [
      { title: "Few-shot prompting", content: 'Técnicas de "Few-shot prompting" para ensinar padrões de código específicos à IA.' }
    ],
    suggestedSites: [
      { title: "PromptingGuide.ai", url: "#" }
    ]
  },
  {
    id: 3,
    title: "Módulo 3: Setup do Ambiente: IDEs e Extensões Inteligentes",
    duration: "2h00",
    difficulty: "Iniciante",
    thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&q=80",
    description: "Configuração profissional do VS Code ou Cursor.",
    approach: 'Configuração profissional do VS Code com extensões (Codeium, Continue) ou uso do Cursor. Como gerenciar o "contexto" de arquivos.',
    materials: [
      { title: "Guia de Instalação e atalhos de produtividade", type: "PDF", size: "1.2 MB" }
    ],
    prompts: [
      { title: "Comandos de Terminal", content: "Comandos de terminal explicados pela IA." }
    ],
    suggestedSites: [
      { title: "Marketplace do VS Code", url: "#" },
      { title: "Cursor.com", url: "#" }
    ]
  },
  {
    id: 4,
    title: "Módulo 4: Debugging Consciente: Aprendendo com o Erro",
    duration: "1h30",
    difficulty: "Iniciante",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=80",
    description: "Usando IA para explicar Stack Traces.",
    approach: 'Usar a IA para explicar o "Stack Trace" (erro do console). Por que o erro aconteceu e como evitar que ele volte.',
    materials: [
      { title: "Lista de erros comuns de juniores explicados", type: "PDF", size: "4.8 MB" }
    ],
    prompts: [
      { title: "Explicação Socrática", content: '"Explique este erro passo a passo, mas não me dê a solução corrigida ainda."' }
    ],
    suggestedSites: [
      { title: "Stack Overflow", url: "#" }
    ]
  },
  {
    id: 5,
    title: "Módulo 5: Engenharia Reversa e Leitura de Código",
    duration: "1h50",
    difficulty: "Iniciante",
    thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=80",
    description: "Análise e dissecação de códigos legados ou famosos.",
    approach: 'Pegar um código legado ou de uma biblioteca famosa e usar a IA para "dessecar" o que cada função faz na memória.',
    materials: [
      { title: "Código-fonte de um projeto Open Source pequeno para análise", type: "ZIP", size: "10 MB" }
    ],
    prompts: [
      { title: "Comentários para Iniciantes", content: '"Comente este código para um estudante de 1º semestre"' },
      { title: "Fluxograma Textual", content: '"Gere um fluxograma textual desta lógica"' }
    ],
    suggestedSites: [
      { title: "GitHub", url: "#" }
    ]
  },
  {
    id: 6,
    title: "Módulo 6: Arquitetura e Modelagem de Dados",
    duration: "2h00",
    difficulty: "Intermediário",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80",
    description: "Planejamento de banco de dados e rotas API.",
    approach: "Planejar o banco de dados e as rotas da API antes de codar. Usar IA para sugerir estruturas de tabelas e relacionamentos.",
    materials: [
      { title: "Template de Diagrama Entidade-Relacionamento (DER)", type: "Template", size: "1.5 MB" }
    ],
    prompts: [
      { title: "Arquiteto de Sistemas", content: '"Atue como um arquiteto de sistemas e critique esta estrutura de banco de dados para um e-commerce."' }
    ],
    suggestedSites: [
      { title: "dbdiagram.io", url: "#" },
      { title: "Mermaid.js", url: "#" }
    ]
  },
  {
    id: 7,
    title: "Módulo 7: Refatoração, Clean Code e Performance",
    duration: "1h45",
    difficulty: "Intermediário",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
    description: "Melhorar códigos com SOLID, DRY e análise Big O.",
    approach: "Melhorar códigos antigos. Princípios SOLID e DRY aplicados com auxílio de IA. Análise de complexidade (Big O).",
    materials: [
      { title: 'PDF "Checklist de Clean Code para Devs"', type: "PDF", size: "2.3 MB" }
    ],
    prompts: [
      { title: "Otimização de Performance", content: '"Como posso tornar esta função mais performática sem perder a legibilidade?"' }
    ],
    suggestedSites: [
      { title: "Refactoring.guru", url: "#" }
    ]
  },
  {
    id: 8,
    title: "Módulo 8: Testes Automatizados e Qualidade de Software",
    duration: "2h15",
    difficulty: "Intermediário",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    description: "Geração de testes unitários e casos de borda com IA.",
    approach: "Como usar a IA para prever casos de borda (edge cases) e gerar testes unitários significativos.",
    materials: [
      { title: "Roteiro de testes para uma função de validação", type: "Documento", size: "800 KB" }
    ],
    prompts: [
      { title: "Cenários de Teste", content: '"Quais cenários de teste eu esqueci para este formulário de cadastro?"' }
    ],
    suggestedSites: [
      { title: "Jest Docs", url: "#" },
      { title: "Pytest Docs", url: "#" }
    ]
  },
  {
    id: 9,
    title: "Módulo 9: Automatizando o Trabalho Maçante (Boring Stuff)",
    duration: "1h30",
    difficulty: "Avançado",
    thumbnail: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=400&q=80",
    description: "Automação de documentação, READMEs e mock data.",
    approach: "Documentação (JSDoc, Swagger), arquivos README, mensagens de Git Commit e criação de dados fictícios (Mock Data).",
    materials: [
      { title: "Exemplos de READMEs que encantam recrutadores", type: "Markdown", size: "450 KB" }
    ],
    prompts: [
      { title: "Geração de README", content: '"Gere um arquivo README profissional baseado neste repositório"' },
      { title: "Mock Data JSON", content: '"Crie um JSON com 20 usuários fictícios para teste"' }
    ],
    suggestedSites: [
      { title: "JSON Generator", url: "#" }
    ]
  },
  {
    id: 10,
    title: "Módulo 10: IA na Carreira e Preparação para Entrevistas",
    duration: "2h00",
    difficulty: "Avançado",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80",
    description: "Simulação de entrevistas técnicas e otimização de perfil.",
    approach: "Como usar a IA para simular entrevistas técnicas (Live Coding) e otimizar o LinkedIn/Portfólio. Ética e o futuro do trabalho.",
    materials: [
      { title: 'Guia de "Soft Skills para o Dev da Era IA"', type: "PDF", size: "3.1 MB" }
    ],
    prompts: [
      { title: "Simulação de Entrevista", content: '"Atue como um recrutador técnico da Google e me faça 3 perguntas difíceis sobre React."' }
    ],
    suggestedSites: [
      { title: "LinkedIn", url: "#" },
      { title: "Glassdoor", url: "#" }
    ]
  }
];