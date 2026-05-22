import { useParams, Link } from "react-router";
import { Download, Copy, Check, Play, ChevronLeft, ChevronRight, ExternalLink, Lightbulb, Dumbbell, CheckCircle2, BookOpen, FileText, Clock } from "lucide-react";
import { useState } from "react";
import { lessons } from "../data/lessons";
import { exerciseData } from "../data/exercises";
import { AnimateOnScroll } from "../components/AnimateOnScroll";

function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case "Iniciante":
      return { badge: "bg-primary/20 text-primary", text: "text-primary/70", glow: "shadow-[0_0_12px_rgba(16,185,129,0.2)]" };
    case "Intermediário":
      return { badge: "bg-secondary/20 text-secondary", text: "text-secondary/70", glow: "shadow-[0_0_12px_rgba(249,115,22,0.2)]" };
    case "Avançado":
      return { badge: "bg-red-500/20 text-red-400", text: "text-red-400/70", glow: "shadow-[0_0_12px_rgba(239,68,68,0.2)]" };
    default:
      return { badge: "bg-muted text-muted-foreground", text: "text-muted-foreground", glow: "" };
  }
}

type TabId = "exercises" | "resources" | "about";

export function Lesson() {
  const { id } = useParams();
  const currentLesson = lessons.find((l) => l.id === Number(id));
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [revealedHints, setRevealedHints] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<TabId>("exercises");

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const toggleHint = (exerciseId: string) => {
    setRevealedHints((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(exerciseId)) {
        newSet.delete(exerciseId);
      } else {
        newSet.add(exerciseId);
      }
      return newSet;
    });
  };

  if (!currentLesson) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4">Aula não encontrada</h2>
          <Link to="/cursos" className="text-primary hover:underline">
            Voltar para Cursos
          </Link>
        </div>
      </div>
    );
  }

  const diffColor = getDifficultyColor(currentLesson.difficulty);
  const lessonExercises = exerciseData.find((e) => e.lessonId === currentLesson.id);
  const currentIndex = lessons.findIndex((l) => l.id === currentLesson.id);
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  const tabs: { id: TabId; label: string; icon: typeof Dumbbell; count?: number }[] = [
    { id: "exercises", label: "Exercícios", icon: Dumbbell, count: lessonExercises?.exercises.length },
    { id: "resources", label: "Recursos", icon: FileText, count: (currentLesson.materials?.length || 0) + (currentLesson.prompts?.length || 0) },
    { id: "about", label: "Sobre", icon: BookOpen },
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/cursos" className="hover:text-foreground transition-colors">
              Cursos
            </Link>
            <ChevronRight className="size-3" />
            <span className="text-foreground font-medium truncate">
              Módulo {currentLesson.id}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Left Column */}
          <div className="space-y-6 min-w-0">
            {/* Video Player */}
            <AnimateOnScroll>
              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_0_24px_rgba(0,0,0,0.3)]">
                <div className="relative aspect-video bg-zinc-950">
                  {currentLesson.videoUrl ? (
                    <video
                      src={currentLesson.videoUrl}
                      poster={currentLesson.thumbnail}
                      controls
                      className="size-full object-contain"
                    />
                  ) : (
                    <div className="flex size-full items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 p-6 text-center">
                      <div className="max-w-md">
                        <div className="mb-4 flex justify-center">
                          <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary">
                            <Play className="size-8 opacity-60" />
                          </div>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Gravação em Processamento</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          A gravação em vídeo deste módulo estará disponível em breve.
                          Enquanto isso, você já pode acessar e resolver todos os
                          <strong className="text-foreground"> Exercícios Práticos</strong> e copiar os
                          <strong className="text-foreground"> Prompts de Ouro</strong> na aba de recursos abaixo!
                        </p>
                      </div>
                    </div>
                  )}
                  {/* Overlay badges (always shown, styled perfectly) */}
                  {!currentLesson.videoUrl && (
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${diffColor.badge}`}>
                        {currentLesson.difficulty}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/50 text-white backdrop-blur-sm flex items-center gap-1">
                        <Clock className="size-3" />
                        {currentLesson.duration}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Lesson Title */}
            <AnimateOnScroll delay={100}>
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                {currentLesson.title}
              </h1>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {currentLesson.description}
              </p>
            </AnimateOnScroll>

            {/* Tabs */}
            <AnimateOnScroll delay={200}>
              <div className="border-b border-border">
                <div className="flex gap-1">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-all duration-200 ${
                          isActive
                            ? "border-primary text-primary"
                            : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                        }`}
                      >
                        <Icon className="size-4" />
                        {tab.label}
                        {tab.count !== undefined && (
                          <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? "bg-primary/10" : "bg-muted"}`}>
                            {tab.count}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Tab Content */}
            <div className="min-h-[300px]">
              {/* === EXERCISES TAB === */}
              {activeTab === "exercises" && (
                <AnimateOnScroll>
                  {lessonExercises && lessonExercises.exercises.length > 0 ? (
                    <div className="text-center py-12 rounded-xl border border-dashed border-border bg-card/20">
                      <Dumbbell className="mx-auto size-12 text-muted-foreground mb-4 opacity-50" />
                      <h3 className="text-lg font-bold mb-2">Exercícios Práticos</h3>
                      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                        Este módulo possui {lessonExercises.exercises.length} exercícios práticos com orientação socrática passo a passo.
                      </p>
                      <Link
                        to={`/exercicios?modulo=${currentLesson.id}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        Resolver Exercícios <ChevronRight className="size-4" />
                      </Link>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      Nenhum exercício disponível para este módulo.
                    </div>
                  )}
                </AnimateOnScroll>
              )}

              {/* === RESOURCES TAB === */}
              {activeTab === "resources" && (
                <AnimateOnScroll>
                  <div className="space-y-8">
                    {/* Materials */}
                    {currentLesson.materials && currentLesson.materials.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Materiais de Apoio</h4>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {currentLesson.materials.map((material, idx) => {
                              if (material.url) {
                                return (
                                  <a 
                                    key={idx} 
                                    href={material.url}
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex w-full items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:border-primary/50 hover:shadow-[0_0_12px_rgba(16,185,129,0.1)]"
                                  >
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                      <Download className="size-5 text-primary" />
                                    </div>
                                    <div className="flex-1 text-left min-w-0">
                                      <div className="text-sm font-medium truncate">{material.title}</div>
                                      <div className="text-xs text-muted-foreground">{material.type} {material.size ? `• ${material.size}` : ''}</div>
                                    </div>
                                  </a>
                                );
                              }
                              return (
                                <button key={idx} className="flex w-full items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:border-primary/50 hover:shadow-[0_0_12px_rgba(16,185,129,0.1)] opacity-70 cursor-not-allowed" title="Arquivo indisponível para download">
                                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                    <Download className="size-5 text-primary" />
                                  </div>
                                  <div className="flex-1 text-left min-w-0">
                                    <div className="text-sm font-medium truncate">{material.title}</div>
                                    <div className="text-xs text-muted-foreground">{material.type} {material.size ? `• ${material.size}` : '(Indisponível)'}</div>
                                  </div>
                                </button>
                              );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Prompts */}
                    {currentLesson.prompts && currentLesson.prompts.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Prompts Recomendados</h4>
                        <div className="space-y-3">
                          {currentLesson.prompts.map((prompt, index) => (
                            <div
                              key={index}
                              className="rounded-xl border border-border bg-card p-4 relative group"
                            >
                              <div className="mb-2 pr-10">
                                <span className="text-sm font-bold text-foreground">{prompt.title}</span>
                              </div>
                              <div className="font-mono text-sm text-muted-foreground bg-black/30 p-3 rounded-lg whitespace-pre-wrap border border-white/5">
                                {prompt.content}
                              </div>
                              <button
                                onClick={() => handleCopy(prompt.content, index)}
                                className="absolute top-4 right-4 shrink-0 rounded-lg bg-primary/10 p-2 transition-all duration-200 hover:bg-primary/20 opacity-0 group-hover:opacity-100 focus:opacity-100"
                                aria-label="Copiar prompt"
                              >
                                {copiedIndex === index ? (
                                  <Check className="size-4 text-primary" />
                                ) : (
                                  <Copy className="size-4 text-primary" />
                                )}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </AnimateOnScroll>
              )}

              {/* === ABOUT TAB === */}
              {activeTab === "about" && (
                <AnimateOnScroll>
                  <div className="space-y-6">
                    <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="mt-0.5 size-5 shrink-0 text-primary" />
                        <div>
                          <h3 className="text-sm font-bold text-primary mb-2">Como usar a IA como mentora neste tópico</h3>
                          <p className="text-sm text-foreground/90 leading-relaxed">
                            {currentLesson.approach}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-xl border border-border bg-card p-4 text-center">
                        <div className="text-2xl font-bold text-primary mb-1">{currentLesson.duration}</div>
                        <div className="text-xs text-muted-foreground">Duração</div>
                      </div>
                      <div className="rounded-xl border border-border bg-card p-4 text-center">
                        <div className={`text-2xl font-bold mb-1 ${diffColor.text.replace('/70', '')}`}>{currentLesson.difficulty}</div>
                        <div className="text-xs text-muted-foreground">Nível</div>
                      </div>
                      <div className="rounded-xl border border-border bg-card p-4 text-center">
                        <div className="text-2xl font-bold text-secondary mb-1">{lessonExercises?.exercises.length || 0}</div>
                        <div className="text-xs text-muted-foreground">Exercícios</div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              )}
            </div>

            {/* Prev/Next Navigation */}
            <AnimateOnScroll>
              <div className="flex items-center justify-between pt-6 border-t border-border">
                {prevLesson ? (
                  <Link
                    to={`/aula/${prevLesson.id}`}
                    className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm transition-all hover:border-primary/50 hover:shadow-[0_0_12px_rgba(16,185,129,0.1)]"
                  >
                    <ChevronLeft className="size-4" />
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground">Anterior</div>
                      <div className="font-medium truncate max-w-[180px]">Módulo {prevLesson.id}</div>
                    </div>
                  </Link>
                ) : <div />}
                {nextLesson ? (
                  <Link
                    to={`/aula/${nextLesson.id}`}
                    className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm transition-all hover:border-primary/50 hover:shadow-[0_0_12px_rgba(16,185,129,0.1)]"
                  >
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Próximo</div>
                      <div className="font-medium truncate max-w-[180px]">Módulo {nextLesson.id}</div>
                    </div>
                    <ChevronRight className="size-4" />
                  </Link>
                ) : <div />}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column - Playlist */}
          <div className="lg:sticky lg:top-20 lg:h-fit">
            <AnimateOnScroll>
              <div className="rounded-xl border border-border bg-card overflow-hidden">
                {/* Playlist Header */}
                <div className="border-b border-border p-4">
                  <h3 className="text-sm font-bold">Playlist do Curso</h3>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-muted-foreground">Módulo {currentLesson.id} de {lessons.length}</p>
                    <span className="text-xs text-primary font-medium">
                      {Math.round((currentLesson.id / lessons.length) * 100)}%
                    </span>
                  </div>
                  {/* Progress Bar */}
                  <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-500"
                      style={{ width: `${(currentLesson.id / lessons.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Lesson List */}
                <div className="max-h-[calc(100vh-280px)] overflow-y-auto">
                  {lessons.map((lesson) => {
                    const isActive = lesson.id === Number(id);
                    const lessonDiffColor = getDifficultyColor(lesson.difficulty);
                    return (
                      <Link
                        key={lesson.id}
                        to={`/aula/${lesson.id}`}
                        className={`flex items-start gap-3 border-b border-border p-3.5 transition-all duration-200 ${
                          isActive
                            ? `border-l-4 border-l-primary bg-primary/5 ${diffColor.glow}`
                            : "border-l-4 border-l-transparent hover:bg-accent"
                        }`}
                      >
                        <div
                          className={`mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {lesson.id}
                        </div>

                        <div className="min-w-0 flex-1">
                          {isActive && (
                            <div className="mb-1 flex items-center gap-1">
                              <div className="size-1.5 rounded-full bg-primary animate-pulse" />
                              <span className="text-[10px] text-primary font-medium uppercase tracking-wider">Assistindo</span>
                            </div>
                          )}
                          <div
                            className={`text-xs font-medium line-clamp-2 leading-snug ${
                              isActive ? "text-primary" : ""
                            }`}
                          >
                            {lesson.title.replace(/^Módulo \d+: /, "")}
                          </div>
                          <div className="mt-1 text-[10px] text-muted-foreground flex items-center gap-1.5">
                            <span>{lesson.duration}</span>
                            <span>•</span>
                            <span className={lessonDiffColor.text}>
                              {lesson.difficulty}
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
