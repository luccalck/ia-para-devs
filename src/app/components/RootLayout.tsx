import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { CursorGlow } from "./CursorGlow";
import { ScrollToTop } from "./ScrollToTop";
import { Code2 } from "lucide-react";

export function RootLayout() {
  return (
    <div className="min-h-screen bg-grid-pattern text-foreground dark flex flex-col">
      <CursorGlow />
      <ScrollToTop />
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/70">
                <Code2 className="size-4 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium">IA para Devs</span>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Projeto de Extensão — UniSENAI — Análise e Desenvolvimento de Sistemas
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
