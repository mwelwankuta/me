import CustomCursor from "./components/cursor";
import { Footer } from "./components/footer";
import { Home } from "./components/home";
import { NavBar } from "./components/navbar";
import { Projects } from "./components/projects";
import "./index.css";

export default function App() {
  return (
    <div className="font-lato mt-10 max-w-7xl mx-auto">
      <div className="h-screen bg-white">
        <CustomCursor />
        <NavBar />

        <div className="mt-20">
          <Home />
        </div>
      </div>

      <Projects />
      <Footer />
    </div>
  );
}
