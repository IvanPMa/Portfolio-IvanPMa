import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Technologies } from "./components/Technologies"
import { Projects } from "./components/Projects";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-neutral-900">
          <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]">
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
      </div>
    </div>
  )
}

export default App;