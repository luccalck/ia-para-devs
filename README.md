# IA para Devs — Extension Course

Landing page and platform for the **"AI for Devs"** extension course taught by the team across 8 lessons. Developed as a University Extension activity — SENAI ADS.

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** + **Shadcn/UI** + **Radix UI**
- **MUI** (auxiliary components)
- **Framer Motion** / **Embla Carousel** / **Recharts**
- **React Router v7**

## Course content

| Lesson | Topic | Slides |
|---|---|---|
| 1 | Engineer's Mindset | [pdf](public/slides/aula-1-mindset-engenheiro.pdf) |
| 2 | Programming Logic | [pdf](public/slides/aula-2-logica-programacao.pdf) |
| 3 | Environment Setup | [pdf](public/slides/aula-3-setup-ambiente.pdf) |
| 4 | Conscious Debugging | [pdf](public/slides/aula-4-debugging-consciente.pdf) |
| 5 | Reverse Engineering | [pdf](public/slides/aula-5-engenharia-reversa.pdf) |
| 6 | Architecture & Modeling | [pdf](public/slides/aula-6-arquitetura-modelagem.pdf) |
| 7 | Clean Code | [pdf](public/slides/aula-7-codigo-limpo.pdf) |
| 8 | AI, Career & Interviews | [pdf](public/slides/aula-8-ia-carreira-entrevistas.pdf) |

## Structure

```
ia-para-devs/
├── src/
│   ├── app/              # Pages and components
│   ├── assets/           # Team images
│   ├── styles/           # Tailwind + theme + globals
│   └── main.tsx          # Entry point
├── public/
│   ├── slides/           # 8 lesson PDFs
│   ├── equipe.jpg
│   └── favicon.svg
├── ATTRIBUTIONS.md
├── package.json
└── vite.config.ts
```

## How to run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Credits

See [`ATTRIBUTIONS.md`](./ATTRIBUTIONS.md) for library and asset credits.
