import { Route, Routes } from "react-router-dom";
import CustomCursor from "./components/cursor";
import { Footer } from "./components/footer";
import { Home } from "./components/home";
import { NavBar } from "./components/navbar";
import { Projects } from "./components/projects";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="font-lato mt-10 max-w-7xl mx-auto">
            <div>
              <CustomCursor />
              <NavBar />

              <div className="mt-20 mb-52">
                <Home />
              </div>
            </div>

            <Projects />

            <Footer />
          </div>
        }
      />

      <Route path="ads" element={<div><h1 className="text-center text-3xl font-semibold">Hello Mr</h1></div>} />
    </Routes>
  );
}
