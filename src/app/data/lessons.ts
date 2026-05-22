import { exerciseData } from "./exercises";

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
  videoUrl?: string;
}

export const lessons: LessonData[] = [
  {
    id: 1,
    title: 'Módulo 1: O Fim do "Vibecoding" e o Mindset de Engenheiro',
    duration: "1h03",
    difficulty: "Iniciante",
    thumbnail: "https://images.unsplash.com/photo-1770171323762-7b9a517a7094?w=800&q=80",
    description: "Compreensão da diferença entre copiar código e utilizar programação assistida de forma inteligente.",
    approach: "Diferença conceitual entre programação passiva e engenharia assistida. Práticas para manter o desenvolvimento cognitivo estruturado ao utilizar inteligência artificial.",
    materials: [
      { title: "Apresentação: O Fim do Vibecoding e o Mindset de Engenheiro", type: "PDF", url: "/slides/aula-1-mindset-engenheiro.pdf" },
      { title: "Recursos e Exercícios: Aula 1", type: "DOCX" }
    ],
    prompts: [
      { title: "O Mentor Socrático", content: '"Atue como um instrutor técnico sênior paciente. Sou iniciante em desenvolvimento de software. Não forneça soluções prontas. Ao solicitar ajuda, responda com perguntas guiadas que estimulem o raciocínio lógico. Se houver dificuldade extrema, utilize analogias do cotidiano para explicar conceitos técnicos."' }
    ],
    videoUrl: "https://www.youtube.com/embed/h2mGLHN8qZQ"
  },
  {
    id: 2,
    title: "Módulo 2: Engenharia de Prompt para Lógica de Programação",
    duration: "37min",
    difficulty: "Iniciante",
    thumbnail: "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?w=800&q=80",
    description: "Decomposição de problemas complexos em etapas estruturadas menores.",
    approach: "Estratégias de decomposição de problemas utilizando o método Chain-of-Thought para estruturação lógica antes da codificação.",
    materials: [
      { title: "Apresentação: Engenharia de Prompt para Lógica de Programação", type: "PDF", url: "/slides/aula-2-logica-programacao.pdf" },
      { title: "Recursos e Exercícios: Aula 2", type: "DOCX" }
    ],
    prompts: [
      { title: "Passo a Passo Estruturado", content: '"Tenho o seguinte problema de lógica estrutural: [DESCREVA O PROBLEMA]. Antes da geração de código, crie uma sequência de passos lógicos sobre como o sistema deve processar a informação. Utilize linguagem clara, focando na abstração do problema."' }
    ],
    videoUrl: "https://www.youtube.com/embed/HA0dLGRAfII"
  },
  {
    id: 3,
    title: "Módulo 3: Setup do Ambiente: IDEs e Extensões Inteligentes",
    duration: "48min",
    difficulty: "Iniciante",
    thumbnail: "https://images.unsplash.com/photo-1691169467000-d1d929ec380d?w=800&q=80",
    description: "Configuração profissional de ambientes de desenvolvimento integrados (IDEs).",
    approach: "Preparação de um ambiente de desenvolvimento robusto, instalação de ferramentas essenciais e gestão de contexto em projetos de software.",
    materials: [
      { title: "Apresentação: Setup do Ambiente: IDEs e Extensões Inteligentes", type: "PDF", url: "/slides/aula-3-setup-ambiente.pdf" },
      { title: "Recursos e Exercícios: Aula 3", type: "DOCX" }
    ],
    prompts: [
      { title: "Assistente de Configuração", content: '"Preciso configurar a seguinte ferramenta no meu ambiente: [NOME DA FERRAMENTA]. Forneça um guia passo a passo estruturado para a instalação. Caso ocorram erros no terminal, enviarei a saída (log) para que você me auxilie na resolução."' }
    ],
    videoUrl: "https://www.youtube.com/embed/k_A03W58kuw"
  },
  {
    id: 4,
    title: "Módulo 4: Debugging Consciente: Aprendendo com o Erro",
    duration: "31min",
    difficulty: "Iniciante",
    thumbnail: "https://images.unsplash.com/photo-1765408217560-fff31d67c54c?w=800&q=80",
    description: "Utilização de ferramentas e metodologias para identificação e resolução de erros no código.",
    approach: "Interpretação técnica de Stack Traces e mensagens de erro do compilador. Práticas para prevenção de reincidência de falhas estruturais.",
    materials: [
      { title: "Apresentação: Debugging Consciente: Aprendendo com o Erro", type: "PDF", url: "/slides/aula-4-debugging-consciente.pdf" },
      { title: "Recursos e Exercícios: Aula 4", type: "DOCX" }
    ],
    prompts: [
      { title: "Intérprete de Stack Trace", content: '"O sistema retornou a seguinte exceção durante a execução: [COLE O ERRO]. Analise o stack trace fornecido e explique a causa raiz do problema em linguagem acessível, indicando onde o fluxo lógico pode ter falhado."' }
    ],
    videoUrl: "https://www.youtube.com/embed/Dbsv_k1RTIQ"
  },
  {
    id: 5,
    title: "Módulo 5: Engenharia Reversa e Leitura de Código",
    duration: "26min",
    difficulty: "Iniciante",
    thumbnail: "https://images.unsplash.com/photo-1670751781907-d59be4c3e208?w=800&q=80",
    description: "Metodologias analíticas para compreensão de bases de código legadas ou desconhecidas.",
    approach: "Técnicas de engenharia reversa conceitual auxiliada por IA para analisar fluxo de dados, estado e chamadas de função em repositórios complexos.",
    materials: [
      { title: "Apresentação: Engenharia Reversa e Leitura de Código", type: "PDF", url: "/slides/aula-5-engenharia-reversa.pdf" },
      { title: "Recursos e Exercícios: Aula 5", type: "DOCX" }
    ],
    prompts: [
      { title: "Analisador de Lógica", content: '"Analise o seguinte trecho de código estrutural: [COLE O CÓDIGO]. Descreva o fluxo de processamento de forma sequencial. Utilize analogias claras para elucidar conceitos complexos, como alocação de memória ou concorrência, caso existam."' }
    ],
    videoUrl: "https://www.youtube.com/embed/1AtPmqb9XmE"
  },
  {
    id: 6,
    title: "Módulo 6: Arquitetura e Modelagem de Dados",
    duration: "26min",
    difficulty: "Iniciante",
    thumbnail: "https://images.unsplash.com/photo-1680992044138-ce4864c2b962?w=800&q=80",
    description: "Planejamento estrutural de persistência de dados e rotas lógicas.",
    approach: "Modelagem inicial de entidades. Utilização de IA para validação de relacionamentos, normalização básica e design de API.",
    materials: [
      { title: "Apresentação: Arquitetura e Modelagem: O Desenho antes do Código", type: "PDF", url: "/slides/aula-6-arquitetura-modelagem.pdf" },
      { title: "Recursos e Exercícios: Aula 6", type: "DOCX" }
    ],
    prompts: [
      { title: "Arquiteto de Domínio", content: '"Desenvolverei um sistema com a seguinte finalidade: [IDEIA DO SISTEMA]. Auxilie na modelagem inicial dos dados identificando as entidades primárias necessárias e seus atributos cruciais, garantindo uma organização relacional eficiente."' }
    ],
    videoUrl: "https://www.youtube.com/embed/aVV62CcssPo"
  }
];