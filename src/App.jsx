import Navbar from "./components/Navbar"
import About from "./section/About"
import Contact from "./section/Contact"
import Home from "./section/Home"
import Porjects from "./section/Porjects"
import Skills from "./section/Skills"

function App() {
  return (
    <div className=" bg-cover bg-fixed bg-[url(../public/background.svg)] bg-no-repeat max-[638px]:bg-[url(../public/background-portrait.svg)] max-[638px]:bg-center max-[638px]:bg-contain max-[638px]:bg-repeat max-[994px]:bg-[url(../public/background-portrait.svg)] max-[994px]:bg-cover max-[994px]:bg-repeat-y">
      <header className="h-16 flex justify-center items-center w-full absolute">
        <Navbar/>
      </header>
      <section id="Home" className=" min-h-screen text-white p-16 max-[638px]:p-5">
        <Home/>
      </section>
      <section id="Skills" className=" min-h-screen text-white p-16 max-[638px]:p-5">
        <Skills/>
      </section>
      <section id="Projects" className=" min-h-screen text-white p-16 max-[638px]:p-5">
        <Porjects/>
      </section>
      <section id="About" className=" min-h-screen text-white p-16 max-[638px]:p-5">
        <About/>
      </section>
      <section id="Contact" className=" h-60 text-white flex justify-center">
        <Contact/>
      </section>
    </div>
  )
}

export default App
