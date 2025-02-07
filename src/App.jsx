import NavBar from "./components/navBarComponent"
import Bookmark from "./components/bookmarkComponent"
import Stats from "./components/statisticComponent"
import AboutCard from "./components/aboutCardComponent"

function App() {

  return (
    <>
      <NavBar />

      <div className="z-10 max-w-[90%] lg:max-w-[60%] lg:mt-[17%] md:mt-[10%] mt-[45%] m-auto bg-white rounded-md space-y-8 ">
        <Bookmark/>
        <Stats/>
        <AboutCard/>
      </div>


    </>
  )
}

export default App;
