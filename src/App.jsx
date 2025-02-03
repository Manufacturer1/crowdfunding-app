import NavBar from "./components/navBarComponent"
import Bookmark from "./components/bookmarkComponent"
import Stats from "./components/statisticComponent"
import AboutCard from "./components/aboutCardComponent"

function App() {

  return (
    <>
      <NavBar/>

      <div className="z-10 absolute top-[50%] left-[27%] w-[50%] bg-white rounded-md grid gap-8">
        <Bookmark/>
        <Stats/>
        <AboutCard/>
      </div>
    </>
  )
}

export default App
