import { Link, useLocation } from "react-router";
import { Code2, BookOpen, Target, FileText, Users } from "lucide-react";

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { path: "/", label: "Início", icon: Code2 },
    { path: "/cursos", label: "Aulas", icon: BookOpen },
    { path: "/exercicios", label: "Exercícios", icon: Target },
    { path: "/recursos", label: "Recursos", icon: FileText },
    { path: "/equipe", label: "Equipe", icon: Users },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70">
              <Code2 className="size-6 text-primary-foreground" />
            </div>
            <span className="hidden sm:block">
              IA para Devs
            </span>
          </Link>

          <ul className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2 transition-all duration-200 ${
                      active
                        ? "bg-primary/10 text-primary shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`}
                  >
                    <Icon className="size-4" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
