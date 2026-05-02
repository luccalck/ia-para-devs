import { Link } from "react-router";
import { Home, Search } from "lucide-react";

export function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative text-8xl font-bold text-primary">404</div>
          </div>
        </div>

        <h1 className="mb-4">Página não encontrada</h1>

        <p className="mb-8 text-muted-foreground max-w-md mx-auto">
          Parece que você se perdeu no código. A página que você está procurando
          não existe ou foi movida.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 transition-all duration-200 hover:shadow-[0_0_24px_rgba(16,185,129,0.4)]"
          >
            <Home className="size-5 text-primary-foreground" />
            <span className="text-primary-foreground">Voltar ao Início</span>
          </Link>

          <Link
            to="/cursos"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 transition-all duration-200 hover:bg-accent"
          >
            <Search className="size-5" />
            <span>Explorar Cursos</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
