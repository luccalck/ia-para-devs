import { Link } from "react-router";
import { Play, Dumbbell, FileCode, Sparkles, ArrowRight, Brain, Users, Zap, Shield, GraduationCap } from "lucide-react";
import { AnimatedBackground } from "../components/AnimatedBackground";

export function Home() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      {/* Hero Section */}
      <section className="hero-glow relative overflow-hidden">
        {/* Decorative orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 shadow-[0_0_20px_rgba(16,185,129,0.2)] animate-fade-in-up">
              <Sparkles className="size-4 text-primary" />
              <span className="text-sm text-primary">Plataforma Educacional Aberta e Gratuita</span>
            </div>

            <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-up animate-delay-100">
              <span className="gradient-text">IA para Devs:</span>
              <br />
              <span className="text-foreground">Domine a Engenharia,</span>
              <br />
              <span className="text-foreground/70">não o Prompt</span>
            </h1>

            <p className="mb-10 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              Aprenda a usar Inteligência Artificial como mentor no seu aprendizado de programação.
              Desenvolva pensamento crítico e autonomia técnica através da mentoria socrática.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-up animate-delay-300">
              <Link
                to="/cursos"
                className="group flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-105"
              >
                <span className="text-primary-foreground">Começar a Estudar</span>
                <ArrowRight className="size-5 text-primary-foreground transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/recursos"
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card/50 backdrop-blur-sm px-8 py-4 text-lg transition-all duration-300 hover:bg-accent hover:shadow-[0_0_16px_rgba(255,255,255,0.05)] hover:scale-105"
              >
                <FileCode className="size-5" />
                <span>Explorar Recursos</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center animate-fade-in-up">
              <div className="text-3xl font-bold text-primary mb-1">6</div>
              <div className="text-sm text-muted-foreground">Módulos Completos</div>
            </div>
            <div className="text-center animate-fade-in-up animate-delay-100">
              <div className="text-3xl font-bold text-primary mb-1">12</div>
              <div className="text-sm text-muted-foreground">Exercícios Práticos</div>
            </div>
            <div className="text-center animate-fade-in-up animate-delay-200">
              <div className="text-3xl font-bold text-primary mb-1">3h51</div>
              <div className="text-sm text-muted-foreground">de Conteúdo</div>
            </div>
            <div className="text-center animate-fade-in-up animate-delay-300">
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Gratuito</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">O que você vai encontrar</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Uma plataforma completa para desenvolvedores que querem usar IA de forma inteligente e ética.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Link
            to="/cursos"
            className="group rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:-translate-y-1"
          >
            <div className="mb-4 inline-flex size-14 items-center justify-center rounded-xl bg-primary/10">
              <Play className="size-7 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Aulas Gravadas</h3>
            <p className="text-muted-foreground leading-relaxed">
              Acesso a 6 módulos completos de vídeo-aulas sobre fundamentos de programação,
              algoritmos e estruturas de dados.
            </p>
          </Link>

          <Link
            to="/exercicios"
            className="group rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:-translate-y-1"
          >
            <div className="mb-4 inline-flex size-14 items-center justify-center rounded-xl bg-secondary/10">
              <Dumbbell className="size-7 text-secondary" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Exercícios Práticos</h3>
            <p className="text-muted-foreground leading-relaxed">
              12 exercícios com pistas socráticas que desenvolvem seu raciocínio lógico
              sem depender de soluções prontas.
            </p>
          </Link>

          <Link
            to="/recursos"
            className="group rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:-translate-y-1"
          >
            <div className="mb-4 inline-flex size-14 items-center justify-center rounded-xl bg-primary/10">
              <FileCode className="size-7 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Prompts de Ouro</h3>
            <p className="text-muted-foreground leading-relaxed">
              Templates de prompts otimizados e referências brasileiras curadas
              para maximizar o aprendizado com IA.
            </p>
          </Link>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <Brain className="size-4 text-primary" />
            <span className="text-sm text-primary">Metodologia</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Como Funciona a Mentoria Socrática</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ao invés de fornecer respostas diretas, nossa metodologia utiliza IA para
            guiar seu raciocínio através de perguntas estratégicas e pistas progressivas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <div className="rounded-xl border border-border bg-card/50 p-6 text-center">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-primary/10">
              <Zap className="size-7 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Pistas, não Soluções</h4>
            <p className="text-sm text-muted-foreground">
              Receba direcionamentos que estimulam seu pensamento crítico sem entregar a resposta
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 p-6 text-center">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-secondary/10">
              <Shield className="size-7 text-secondary" />
            </div>
            <h4 className="font-semibold mb-2">Autonomia Técnica</h4>
            <p className="text-sm text-muted-foreground">
              Desenvolva independência na resolução de problemas reais
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 p-6 text-center">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-primary/10">
              <GraduationCap className="size-7 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Aprendizado Profundo</h4>
            <p className="text-sm text-muted-foreground">
              Compreenda conceitos fundamentais de forma duradoura
            </p>
          </div>
        </div>

        {/* Chat Demo */}
        <div className="max-w-xl mx-auto">
          <div className="rounded-xl border border-primary/30 bg-card/80 p-6 backdrop-blur-sm shadow-[0_0_40px_rgba(16,185,129,0.15)]">
            <div className="mb-4 flex items-start gap-3">
              <div className="size-8 shrink-0 rounded-lg bg-secondary/20 flex items-center justify-center">
                <span className="text-secondary text-sm">?</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground italic">
                  "Como eu posso implementar uma função recursiva?"
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="size-8 shrink-0 rounded-lg bg-primary/20 flex items-center justify-center">
                <Brain className="size-4 text-primary" />
              </div>
              <div>
                <p className="text-sm">
                  "Excelente pergunta! Antes de implementar, pense:
                  toda recursão precisa de um <strong className="text-primary">caso base</strong>.
                  O que aconteceria se sua função nunca parasse de se chamar?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="rounded-xl border border-border bg-card/30 backdrop-blur-sm p-8 text-center">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-primary/10">
            <Users className="size-7 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Feito por Estudantes para Estudantes</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Uma equipe de 10 estudantes do SENAI dedicados a tornar o aprendizado de programação mais acessível.
          </p>
          <Link
            to="/equipe"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Conheça a equipe
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/5 p-8 text-center shadow-[0_0_40px_rgba(16,185,129,0.1)]">
          <h2 className="text-3xl font-bold mb-4">Pronto para Transformar seu Aprendizado?</h2>
          <p className="mb-6 text-muted-foreground">
            Acesso 100% gratuito e aberto. Sem cadastros, sem barreiras.
          </p>
          <Link
            to="/cursos"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-105"
          >
            <span className="text-primary-foreground">Explorar Cursos Agora</span>
            <ArrowRight className="size-5 text-primary-foreground" />
          </Link>
        </div>
      </section>
    </div>
  );
}
