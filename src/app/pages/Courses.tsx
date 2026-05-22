import { Link } from "react-router";
import { Search, Clock, TrendingUp, Play } from "lucide-react";
import { useState } from "react";
import { lessons as courses } from "../data/lessons";
import { AnimateOnScroll } from "../components/AnimateOnScroll";

export function Courses() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <section className="border-b border-border bg-card/50">
        <AnimateOnScroll className="container mx-auto px-4 py-12 text-center">
          <h1 className="mb-4">Galeria de Módulos</h1>
          <p className="mb-8 text-muted-foreground max-w-2xl mx-auto">
            Explore nossa coleção completa de aulas gravadas. Cada módulo é independente,
            permitindo que você aprenda no seu próprio ritmo.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por módulo ou tópico..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-border bg-input-background py-3 pl-12 pr-4 outline-none transition-all duration-200 focus:border-primary focus:shadow-[0_0_12px_rgba(16,185,129,0.2)]"
            />
          </div>
        </AnimateOnScroll>
      </section>

      {/* Courses Grid */}
      <section className="container mx-auto px-4 py-12">
        {filteredCourses.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-muted-foreground">
              Nenhum módulo encontrado para "{searchTerm}"
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course, index) => (
              <AnimateOnScroll key={course.id} delay={index * 60}>
              <Link
                key={course.id}
                to={`/aula/${course.id}`}
                className="group overflow-hidden rounded-xl bg-card transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:-translate-y-1"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />

                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex size-16 items-center justify-center rounded-full bg-primary/90 shadow-[0_0_20px_rgba(16,185,129,0.4)] text-primary-foreground">
                      <Play className="size-6 ml-1 fill-current" />
                    </div>
                  </div>

                  {/* Difficulty Badge */}
                  <div className="absolute right-3 top-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs ${
                        course.difficulty === "Iniciante"
                          ? "bg-primary/20 text-primary"
                          : course.difficulty === "Avançado"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-secondary/20 text-secondary"
                      }`}
                    >
                      {course.difficulty}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="size-4" />
                    <span>{course.duration}</span>
                  </div>

                  <h3 className="mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>

                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {course.description}
                  </p>
                </div>
              </Link>
              </AnimateOnScroll>
            ))}
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="grid gap-6 rounded-xl border border-border bg-card p-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="mb-2 text-3xl text-primary">6</div>
            <div className="text-sm text-muted-foreground">Módulos Disponíveis</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-3xl text-primary">10h35</div>
            <div className="text-sm text-muted-foreground">Conteúdo Total</div>
          </div>
          <div className="text-center">
            <div className="mb-2 flex items-center justify-center gap-2 text-3xl text-primary">
              <TrendingUp className="size-8" />
              100%
            </div>
            <div className="text-sm text-muted-foreground">Gratuito e Aberto</div>
          </div>
        </div>
      </section>
    </div>
  );
}
