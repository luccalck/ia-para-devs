# IA para Devs — Curso de Extensão

Landing page e plataforma do curso de extensão **"IA para Devs"** ministrado pela equipe ao longo de 8 aulas. Projeto desenvolvido como atividade de Extensão Universitária — SENAI ADS.

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** + **Shadcn/UI** + **Radix UI**
- **MUI** (componentes auxiliares)
- **Framer Motion** / **Embla Carousel** / **Recharts**
- **React Router v7**

## Conteúdo do curso

| Aula | Tema | Slides |
|---|---|---|
| 1 | Mindset do Engenheiro | [pdf](public/slides/aula-1-mindset-engenheiro.pdf) |
| 2 | Lógica de Programação | [pdf](public/slides/aula-2-logica-programacao.pdf) |
| 3 | Setup de Ambiente | [pdf](public/slides/aula-3-setup-ambiente.pdf) |
| 4 | Debugging Consciente | [pdf](public/slides/aula-4-debugging-consciente.pdf) |
| 5 | Engenharia Reversa | [pdf](public/slides/aula-5-engenharia-reversa.pdf) |
| 6 | Arquitetura & Modelagem | [pdf](public/slides/aula-6-arquitetura-modelagem.pdf) |
| 7 | Código Limpo | [pdf](public/slides/aula-7-codigo-limpo.pdf) |
| 8 | IA, Carreira & Entrevistas | [pdf](public/slides/aula-8-ia-carreira-entrevistas.pdf) |

## Estrutura

```
ProjetoExtensao/
├── src/
│   ├── app/              # Páginas e componentes
│   ├── assets/           # Imagens da equipe
│   ├── styles/           # Tailwind + theme + globals
│   └── main.tsx          # Entry point
├── public/
│   ├── slides/           # 8 PDFs das aulas
│   ├── equipe.jpg
│   └── favicon.svg
├── ATTRIBUTIONS.md
├── package.json
└── vite.config.ts
```

## Como rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de produção em dist/
```

## Créditos

Veja [`ATTRIBUTIONS.md`](./ATTRIBUTIONS.md) para créditos de bibliotecas e assets.
