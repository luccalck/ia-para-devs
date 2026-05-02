import { Users, Crown } from "lucide-react";
import { AnimateOnScroll } from "../components/AnimateOnScroll";
import { AnimatedBackground } from "../components/AnimatedBackground";

// Import images
import luccaImg from "../../assets/team/lucca.png";
import daviImg from "../../assets/team/davi.png";
import miguelImg from "../../assets/team/miguel.png";
import lucasImg from "../../assets/team/lucas.png";
import kauanImg from "../../assets/team/kauan.png";
import joaoImg from "../../assets/team/joao.png";
import renanImg from "../../assets/team/renan.png";
import pedroImg from "../../assets/team/pedro.png";
import anaImg from "../../assets/team/ana.png";
import joaocharleauxImg from "../../assets/team/joaocharleaux.png";
import wesleyImg from "../../assets/team/wesley.png";

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  image?: string;
  isLeader?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: "Lucca Castilho Costa",
    role: "Líder do Projeto",
    initials: "LC",
    image: luccaImg,
    isLeader: true,
  },
  {
    name: "Davi Marcondes Paes de Souza",
    role: "Desenvolvedor",
    initials: "DM",
    image: daviImg,
  },
  {
    name: "Miguel Oliveira de Almeida",
    role: "Desenvolvedor",
    initials: "MO",
    image: miguelImg,
  },
  {
    name: "Lucas Souza da Silva",
    role: "Desenvolvedor",
    initials: "LS",
    image: lucasImg,
  },
  {
    name: "Kauan Alejandro da Rosa",
    role: "Desenvolvedor",
    initials: "KA",
    image: kauanImg,
  },
  {
    name: "João Gabriel Floriano de Olimpo",
    role: "Desenvolvedor",
    initials: "JG",
    image: joaoImg,
  },
  {
    name: "Renan Ramos Capeleti",
    role: "Desenvolvedor",
    initials: "RR",
    image: renanImg,
  },
  {
    name: "Pedro de Lima Cavalcanti",
    role: "Desenvolvedor",
    initials: "PL",
    image: pedroImg,
  },
  {
    name: "João Vitor Charleaux",
    role: "Desenvolvedor",
    initials: "JV",
    image: joaocharleauxImg,
  },
  {
    name: "Ana Carolina Gonçalves",
    role: "Desenvolvedora",
    initials: "AC",
    image: anaImg,
  },
];

const avatarColors = [
  "from-emerald-500 to-teal-600",
  "from-blue-500 to-indigo-600",
  "from-violet-500 to-purple-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-pink-600",
  "from-cyan-500 to-sky-600",
  "from-lime-500 to-green-600",
  "from-fuchsia-500 to-purple-600",
  "from-red-500 to-rose-600",
  "from-teal-500 to-emerald-600",
];

export function Team() {
  const leader = teamMembers.find((m) => m.isLeader);
  const members = teamMembers.filter((m) => !m.isLeader);

  return (
    <main className="container mx-auto px-4 py-12 md:py-16 relative min-h-screen">
      <AnimatedBackground />
      {/* Header */}
      <AnimateOnScroll className="text-center mb-16 max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 mb-6">
          <Users className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Nossa Equipe
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Estudantes de Análise e Desenvolvimento de Sistemas do UniSENAI
          focados em produtividade e ética tecnológica.
        </p>
      </AnimateOnScroll>

      {/* Leader Card */}
      {leader && (
        <AnimateOnScroll className="mb-12">
          <div className="max-w-md mx-auto">
            <div className="relative bg-card border-2 border-primary/50 rounded-2xl p-8 text-center shadow-[0_0_40px_rgba(16,185,129,0.15)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold">
                  <Crown className="size-3.5" />
                  Líder do Projeto
                </div>
              </div>
              <div className="relative mx-auto mb-5 w-24 h-24">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="relative w-24 h-24 rounded-full object-cover ring-4 ring-primary/30"
                  />
                ) : (
                  <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${avatarColors[0]} flex items-center justify-center text-white text-2xl font-bold ring-4 ring-primary/30`}>
                    {leader.initials}
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
              <span className="text-sm text-primary font-medium">
                {leader.role}
              </span>
            </div>
          </div>
        </AnimateOnScroll>
      )}

      {/* Team Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {members.map((member, index) => (
          <AnimateOnScroll key={index} delay={index * 60}>
          <div
            className="group relative bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:border-primary/50 flex flex-col items-center text-center"
          >
            <div className="relative mb-5">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-20 h-20 rounded-full object-cover ring-2 ring-border group-hover:ring-primary/50 transition-all duration-300"
                />
              ) : (
                <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${avatarColors[(index + 1) % avatarColors.length]} flex items-center justify-center text-white text-lg font-bold ring-2 ring-border group-hover:ring-primary/50 transition-all duration-300`}>
                  {member.initials}
                </div>
              )}
            </div>

            <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
              {member.name}
            </h3>
            <span className="text-sm text-muted-foreground">
              {member.role}
            </span>
          </div>
          </AnimateOnScroll>
        ))}
      </section>

      {/* Orientador */}
      <section className="max-w-3xl mx-auto text-center border-t border-border pt-16">
        <h2 className="text-2xl font-bold mb-8">Orientação</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-card/50 border border-border rounded-3xl p-8">
          <div className="relative w-24 h-24 shrink-0">
            <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl" />
            <img
              src={wesleyImg}
              alt="Prof. Wesley Fioreze"
              className="relative w-24 h-24 rounded-full object-cover ring-2 ring-secondary/30"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-1">Prof. Wesley Fioreze</h3>
            <p className="text-secondary text-sm font-medium mb-3">Orientador do Projeto</p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Agradecemos imensamente pela orientação, paciência e por sempre nos
              incentivar a buscar a excelência técnica neste projeto.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

