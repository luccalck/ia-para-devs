import { Lightbulb, CheckCircle2, Dumbbell, ChevronRight, BookOpen } from "lucide-react";
import { useState } from "react";
import { exerciseData } from "../data/exercises";
import { lessons } from "../data/lessons";
import { AnimateOnScroll } from "../components/AnimateOnScroll";
import { Link } from "react-router";

function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case "Iniciante":
      return { bg: "bg-primary/10", border: "border-primary/30", text: "text-primary", dot: "bg-primary" };
    case "Intermediário":
      return { bg: "bg-secondary/10", border: "border-secondary/30", text: "text-secondary", dot: "bg-secondary" };
    case "Avançado":
      return { bg: "bg-red-500/10", border: "border-red-500/30", text: "text-red-400", dot: "bg-red-400" };
    default:
      return { bg: "bg-muted", border: "border-border", text: "text-muted-foreground", dot: "bg-muted-foreground" };
  }
}

export function Exercises() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [revealedHints, setRevealedHints] = useState<Set<string>>(new Set());

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

  const totalExercises = exerciseData.reduce(
    (acc, group) => acc + group.exercises.length,
    0
  );

  const selectedGroup = selectedModule !== null
    ? exerciseData.find((g) => g.lessonId === selectedModule)
    : null;

  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <section className="border-b border-border bg-card/50">
        <AnimateOnScroll>
          <div className="container mx-auto px-4 py-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2">
              <Dumbbell className="size-4 text-secondary" />
              <span className="text-sm text-secondary">{exerciseData.length} módulos • {totalExercises} exercícios</span>
            </div>
            <h1 className="mb-4">Central de Exercícios</h1>
            <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
              Selecione um módulo para ver os exercícios práticos.
              Use as pistas socráticas da IA para guiar seu raciocínio.
            </p>

            <div className="flex items-start gap-3 rounded-xl border border-secondary/30 bg-secondary/5 p-4 max-w-2xl mx-auto">
              <Lightbulb className="mt-0.5 size-5 shrink-0 text-secondary" />
              <div className="text-sm text-left">
                <strong className="text-foreground">Metodologia Socrática:</strong>
                <span className="text-muted-foreground">
                  {" "}
                  As pistas foram projetadas para guiar seu pensamento, não para dar respostas prontas.
                </span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Main Content Area */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar - Modules List */}
          <div className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-24 space-y-2">
            <h3 className="text-lg font-bold mb-4 px-2">Módulos de Estudo</h3>
            <div className="flex flex-col gap-2 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
              {exerciseData.map((group, index) => {
                const lesson = lessons.find((l) => l.id === group.lessonId);
                const difficulty = lesson?.difficulty || "Iniciante";
                const diffColor = getDifficultyColor(difficulty);
                const isSelected = selectedModule === group.lessonId;

                return (
                  <AnimateOnScroll key={group.lessonId} delay={index * 30}>
                    <button
                      onClick={() => setSelectedModule(group.lessonId)}
                      className={`w-full text-left rounded-xl border p-4 transition-all duration-300 flex items-center justify-between group ${
                        isSelected
                          ? `${diffColor.border} ${diffColor.bg} shadow-md`
                          : "border-transparent bg-transparent hover:bg-card hover:border-border"
                      }`}
                    >
                      <div className="flex flex-col gap-1 pr-3">
                        <div className="flex items-center gap-2 mb-1">
                           <div className={`size-2 rounded-full ${diffColor.dot} ${isSelected ? "animate-pulse" : ""}`} />
                           <span className={`text-xs font-bold ${isSelected ? diffColor.text : "text-muted-foreground"}`}>
                             {group.lessonId}
                           </span>
                        </div>
                        <h3 className={`text-sm font-semibold line-clamp-2 ${isSelected ? "text-foreground" : "text-muted-foreground group-hover:text-foreground transition-colors"}`}>
                          {group.lesson.replace(/^Módulo \d+: /, "")}
                        </h3>
                        <span className="text-xs text-muted-foreground mt-1">
                          {group.exercises.length} exercícios
                        </span>
                      </div>
                      <ChevronRight className={`size-4 shrink-0 transition-transform ${isSelected ? diffColor.text : "text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"}`} />
                    </button>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>

          {/* Right Content - Exercises Details */}
          <div className="lg:col-span-8 xl:col-span-9">
            {selectedGroup ? (
              <AnimateOnScroll key={selectedGroup.lessonId}>
                <div className="rounded-2xl border border-border bg-card/30 p-6 md:p-8">
                  {/* Module Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <BookOpen className="size-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{selectedGroup.lesson}</h2>
                        <p className="text-sm text-muted-foreground mt-1">
                          Resolva os {selectedGroup.exercises.length} desafios práticos usando IA como mentora
                        </p>
                      </div>
                    </div>
                    <Link
                      to={`/aula/${selectedGroup.lessonId}`}
                      className="shrink-0 flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      Assistir Aula <ChevronRight className="size-4" />
                    </Link>
                  </div>

                  {/* Exercise Cards List */}
                  <div className="grid gap-6">
                    {selectedGroup.exercises.map((exercise, idx) => {
                      const hintRevealed = revealedHints.has(exercise.id);

                      return (
                        <AnimateOnScroll key={exercise.id} delay={idx * 100}>
                          <div className="rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/30">
                            {/* Exercise Title */}
                            <div className="mb-4 flex items-start gap-3">
                              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                              <h4 className="text-lg font-semibold">{exercise.title}</h4>
                            </div>

                            {/* Problem Description */}
                            <div className="mb-6 rounded-lg bg-muted/30 p-5">
                              <p className="text-sm text-foreground/90 whitespace-pre-wrap leading-relaxed">
                                {exercise.problem}
                              </p>
                            </div>

                            {/* Hint Button & Content */}
                            <div>
                              <button
                                onClick={() => toggleHint(exercise.id)}
                                className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                                  hintRevealed
                                    ? "bg-primary/10 text-primary border border-primary/20"
                                    : "border border-secondary/50 bg-secondary/5 text-secondary hover:bg-secondary/10"
                                }`}
                              >
                                <Lightbulb className="size-4" />
                                {hintRevealed ? "Ocultar Orientação" : "Pista da IA"}
                              </button>

                              {/* Hint Content */}
                              {hintRevealed && (
                                <div className="mt-4 rounded-lg border border-primary/30 bg-primary/5 p-5 animate-fade-in-up">
                                  <div className="mb-3 flex items-center gap-2">
                                    <Lightbulb className="size-4 text-primary" />
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                                      Mentoria Socrática
                                    </span>
                                  </div>
                                  <p className="text-sm text-foreground/90 italic leading-relaxed border-l-2 border-primary/40 pl-4">
                                    {exercise.hint}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </AnimateOnScroll>
                      );
                    })}
                  </div>
                </div>
              </AnimateOnScroll>
            ) : (
              <AnimateOnScroll>
                <div className="flex flex-col items-center justify-center text-center p-12 rounded-2xl border border-dashed border-border bg-card/20 min-h-[500px]">
                  <div className="size-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                    <Dumbbell className="size-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Selecione um Módulo</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Escolha um dos módulos na barra lateral para visualizar e praticar os exercícios propostos para aquela aula.
                  </p>
                </div>
              </AnimateOnScroll>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
