import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { Courses } from "./pages/Courses";
import { Lesson } from "./pages/Lesson";
import { Exercises } from "./pages/Exercises";
import { Resources } from "./pages/Resources";
import { Team } from "./pages/Team";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "cursos", Component: Courses },
      { path: "aula/:id", Component: Lesson },
      { path: "exercicios", Component: Exercises },
      { path: "recursos", Component: Resources },
      { path: "equipe", Component: Team },
      { path: "*", Component: NotFound },
    ],
  },
]);
