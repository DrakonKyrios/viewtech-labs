import "./App.css";
import { Summary } from "./components/summary.component";
import { Galaxy } from "./pages/galaxy/galaxy.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Blog } from "./pages/blog.component";
import { SideContainer } from "./components/side/side-container.component";
import Resume from "./pages/resume/resume.component";

function App() {
  const router = createBrowserRouter([
    {
      element: <Resume />,
      path: "",
    },
    {
      element: <Galaxy />,
      path: "",
    },
    {
      element: <Blog />,
      path: "",
    },
  ]);
  return (
    <main style={{ display: "flex" }}>
      <SideContainer></SideContainer>
      <section
        style={{ width: "100%", display: "flex", flexDirection: "column" }}
      >
        <Summary></Summary>
        <RouterProvider router={router}></RouterProvider>
      </section>
    </main>
  );
}

export default App;
