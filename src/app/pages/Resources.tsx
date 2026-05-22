import { Copy, Check, ExternalLink, Sparkles, BookOpen, Youtube, Globe } from "lucide-react";
import { useState } from "react";
import { AnimateOnScroll } from "../components/AnimateOnScroll";

const goldenPrompts = [
  {
    category: "Módulos 1-2",
    title: "Mentor Socrático — System Prompt",
    description: "Transforme qualquer IA em um tutor que guia pelo raciocínio",
    prompt: `Atue como um mentor socrático de programação. Siga estas regras OBRIGATÓRIAS:

1. NUNCA forneça código completo ou respostas diretas
2. Sempre responda com PERGUNTAS que guiem meu raciocínio
3. Se eu travar, dê uma PISTA (não a solução)
4. Adapte a dificuldade: se eu errar muito, simplifique a pergunta
5. Ao final, peça que EU explique o conceito com minhas palavras

Meu nível atual: [iniciante/intermediário/avançado]
Tópico que quero aprender: [seu tópico aqui]`,
  },
  {
    category: "Módulos 3-4",
    title: "Debugging Guiado — Análise de Erros",
    description: "Entenda erros sem receber a correção pronta",
    prompt: `Analise o seguinte erro/bug no meu código:

[cole seu código e o erro aqui]

Siga este formato de resposta:
1. EXPLIQUE o que o erro significa em linguagem simples
2. PERGUNTE o que eu acho que está causando o problema
3. Dê uma PISTA sobre onde olhar (arquivo, linha, conceito)
4. NÃO corrija o código — me ajude a encontrar a solução
5. Após eu tentar corrigir, analise minha tentativa`,
  },
  {
    category: "Módulo 5",
    title: "Engenharia Reversa — Dissecação de Código",
    description: "Entenda código existente camada por camada",
    prompt: `Preciso entender este código que NÃO fui eu quem escreveu:

[cole o código aqui]

Explique da seguinte forma:
1. Em UMA frase: qual é o propósito geral deste código?
2. Liste cada VARIÁVEL e seu papel
3. Trace o FLUXO de execução passo a passo
4. Identifique PADRÕES de design usados
5. Gere um FLUXOGRAMA textual da lógica principal
6. Quais perguntas eu deveria me fazer para entender melhor?`,
  },
  {
    category: "Módulo 6",
    title: "Arquiteto de Sistemas — Revisão de Código",
    description: "Crítica construtiva focada em arquitetura e clean code",
    prompt: `Atue como um arquiteto de software sênior revisando meu código.

[cole seu código ou descreva sua arquitetura aqui]

Analise sob estas perspectivas:
1. SOLID: quais princípios estão sendo violados?
2. DRY: existe código duplicado ou lógica repetida?
3. PERFORMANCE: qual a complexidade Big O? Pode melhorar?
4. LEGIBILIDADE: o código se auto-documenta?
5. Para cada problema, NÃO reescreva — me faça perguntas que me levem à melhoria
6. Dê uma nota de 1-10 e justifique`,
  },
  {
    category: "Carreira",
    title: "Preparação para Entrevista Técnica",
    description: "Simule entrevistas com feedback honesto",
    prompt: `Atue como um entrevistador técnico experiente de uma empresa de tecnologia.

Área de foco: [React/Python/SQL/outro]
Meu nível: [júnior/pleno/sênior]

Regras da simulação:
1. Faça UMA pergunta por vez, começando de nível fácil
2. Baseie a próxima pergunta na qualidade da minha resposta
3. Após cada resposta minha, dê: nota (1-10), feedback, e o que faltou
4. Inclua pelo menos 1 pergunta de live coding
5. Ao final, dê um resumo com pontos fortes e o que estudar mais`,
  },
];

const references = [
  {
    title: "Prompting Guide — Guia Completo de Engenharia de Prompt",
    type: "Site",
    description: "Guia open-source com técnicas avançadas de prompt engineering: Chain of Thought, Few-Shot, Tree of Thoughts e mais",
    url: "https://www.promptingguide.ai/pt",
    icon: Globe,
  },
  {
    title: "Lucas Montano — IA e Ferramentas para Devs",
    type: "YouTube",
    description: "Reviews e tutoriais sobre GitHub Copilot, Cursor, ChatGPT para programação e ferramentas de IA para desenvolvedores",
    url: "https://www.youtube.com/@LucasMontano",
    icon: Youtube,
  },
  {
    title: "GitHub Copilot — Documentação Oficial",
    type: "Site",
    description: "Guia completo de como usar IA generativa integrada ao editor de código para autocompletar, gerar e refatorar código",
    url: "https://docs.github.com/pt/copilot",
    icon: Globe,
  },
  {
    title: "Código Fonte TV — IA na Programação",
    type: "YouTube",
    description: "Canal brasileiro com vídeos sobre como a IA está transformando o desenvolvimento de software e dicas práticas",
    url: "https://www.youtube.com/@coaborafontebr",
    icon: Youtube,
  },
  {
    title: "Cursor — IDE com IA Integrada",
    type: "Site",
    description: "Documentação do editor de código baseado em IA que permite programação assistida com contexto completo do projeto",
    url: "https://docs.cursor.com",
    icon: Globe,
  },
  {
    title: "Alura — IA Generativa para Devs",
    type: "Blog",
    description: "Artigos e formações sobre como usar ChatGPT, Gemini e outras IAs generativas no dia a dia do desenvolvedor",
    url: "https://www.alura.com.br/artigos/inteligencia-artificial",
    icon: Globe,
  },
  {
    title: "Filipe Deschamps — Tecnologia e IA",
    type: "YouTube",
    description: "Vídeos sobre o impacto da IA na programação, novidades em tech e reflexões sobre o futuro do desenvolvimento",
    url: "https://www.youtube.com/@FilipeDeschamps",
    icon: Youtube,
  },
  {
    title: "Fabio Akita — Fundamentos e Boas Práticas",
    type: "YouTube",
    description: "Conteúdo aprofundado sobre fundamentos de computação, arquitetura e como pensar como engenheiro de software",
    url: "https://www.youtube.com/@Akitando",
    icon: Youtube,
  },
  {
    title: "TabNews — Comunidade Dev Brasileira",
    type: "Site",
    description: "Plataforma colaborativa com artigos e discussões sobre IA, ferramentas e tendências no desenvolvimento de software",
    url: "https://www.tabnews.com.br",
    icon: Globe,
  },
];



export function Resources() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <section className="border-b border-border bg-card/50">
        <AnimateOnScroll className="container mx-auto px-4 py-12 text-center">
          <h1 className="mb-4">Repositório de Conteúdo</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Acesse nossa coleção de prompts otimizados e referências brasileiras
            curadas para acelerar seu aprendizado com IA.
          </p>
        </AnimateOnScroll>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Golden Prompts Section */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
              <Sparkles className="size-6 text-primary" />
            </div>
            <div>
              <h2 className="text-sm">Prompts de Ouro</h2>
              <p className="text-sm text-muted-foreground">
                Templates prontos com placeholders — copie, personalize e use
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {goldenPrompts.map((item, index) => (
              <AnimateOnScroll key={index} delay={index * 50}>
              <div
                className="group h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_24px_rgba(16,185,129,0.15)]"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                      {item.category}
                    </div>
                    <h3 className="mb-2 text-sm">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleCopy(item.prompt, index)}
                    className="shrink-0 rounded-xl bg-primary/10 p-3 transition-all duration-200 hover:bg-primary/20 hover:shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                    aria-label="Copiar prompt"
                  >
                    {copiedIndex === index ? (
                      <Check className="size-5 text-primary" />
                    ) : (
                      <Copy className="size-5 text-primary" />
                    )}
                  </button>
                </div>

                <div className="rounded-lg bg-black/30 border border-white/5 p-4 font-mono">
                  <p className="text-xs text-foreground/90 whitespace-pre-wrap leading-relaxed">
                    {item.prompt}
                  </p>
                </div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        {/* References Section */}
        <AnimateOnScroll className="mt-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-xl bg-secondary/10">
              <BookOpen className="size-6 text-secondary" />
            </div>
            <div>
              <h2 className="text-sm">Referências e Recursos</h2>
              <p className="text-sm text-muted-foreground">
                Blogs, sites e canais do YouTube brasileiros para aprofundamento
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {references.map((ref, index) => {
              const IconComponent = ref.icon;
              return (
                <AnimateOnScroll key={index} delay={index * 50}>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-secondary/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)]"
                >
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <IconComponent className="size-4 text-secondary" />
                      <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs text-secondary">
                        {ref.type}
                      </span>
                    </div>
                    <ExternalLink className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-secondary" />
                  </div>

                  <h4 className="mb-2 text-sm line-clamp-2 group-hover:text-secondary transition-colors">
                    {ref.title}
                  </h4>

                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {ref.description}
                  </p>
                </a>
                </AnimateOnScroll>
              );
            })}
          </div>
        </AnimateOnScroll>

        {/* Additional Tips */}
        <AnimateOnScroll className="mt-16">
          <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-8">
            <h3 className="mb-4 flex items-center gap-2 text-sm">
              <Sparkles className="size-5 text-primary" />
              Dicas para Usar Prompts Eficazmente
            </h3>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="shrink-0 text-primary">•</span>
                <span>
                  <strong className="text-foreground">Preencha os placeholders:</strong> Substitua
                  os textos entre [colchetes] com seu conteúdo real antes de enviar
                </span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 text-primary">•</span>
                <span>
                  <strong className="text-foreground">Contextualize:</strong> Sempre forneça
                  contexto sobre seu nível de conhecimento e objetivo ao usar um prompt
                </span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 text-primary">•</span>
                <span>
                  <strong className="text-foreground">Personalize:</strong> Adapte os
                  prompts à sua situação específica — eles são templates, não comandos fixos
                </span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 text-primary">•</span>
                <span>
                  <strong className="text-foreground">Itere:</strong> Se a resposta não foi
                  satisfatória, refine sua pergunta com base no que aprendeu
                </span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 text-primary">•</span>
                <span>
                  <strong className="text-foreground">Reflita:</strong> Não aceite respostas
                  passivamente — questione, teste e valide o que a IA sugere
                </span>
              </li>
            </ul>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
