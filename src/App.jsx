import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300">
      <div className="fixed inset-0 -z-10">
        <div class="relative h-full w-full bg-slate-950">
            <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
          </div>
        </div>

      </div>

      <div className="container mx-auto px-8">
        <Navbar />
      </div>
    </div>
  )
}

export default App;