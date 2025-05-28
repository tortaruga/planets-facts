import { useEffect, useState } from "react"
import NavLinks from "./components/NavLinks";
import openIcon from '/assets/open.svg';
import closeIcon from '/assets/close.svg';
import PlanetInfo from "./components/PlanetInfo";
import planets from "./planets-data.js";

function App() {
  const [planetSelected, setPlanetSelected] = useState('earth');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [planetData, setPlanetData] = useState({});

  function getPlanetInfo(planet) {
    setPlanetData(planets[planet]);
  }

  useEffect(() => {
    getPlanetInfo(planetSelected);
  }, [planetSelected])

  
  
  return (
    <>
      <header>
        <nav>
          <h1>Solar System</h1>
          <NavLinks setPlanetSelected={setPlanetSelected} mobile={false} />
          <button className="mobile-menu-btn" aria-label="open/close mobile menu" onClick={() => setIsMenuOpen(prevState => !prevState)}>
            <img src={isMenuOpen ? closeIcon : openIcon} alt="mobile menu icon" />
          </button>
        </nav>
        {isMenuOpen && (
            <div className="mobile-menu">
             <NavLinks setPlanetSelected={setPlanetSelected} mobile={true} />
            </div>
        )}
      </header>

      <main>
         <PlanetInfo planet={planetData.name} 
                  desc={planetData.description} 
                  distance={planetData.distanceFromSun} 
                  yearLength={planetData.yearLength}
                  diameter={planetData.diameter}
                  rotationTime={planetData.rotationTime}
                  img={planetData.img} />
      </main>

      <footer>
        <p>data from <a href="https://github.com/k99sharma/planets-api" target="_blank">Planets API</a> and <a href="https://www.rmg.co.uk/stories/space-astronomy/solar-system-data" target="_blank">Royal Museums Greenwich.</a></p>
        <p>images from <a href="https://en.wikipedia.org/wiki/Main_Page" target="_blank">wikipedia</a></p>
        <p>coded by <a href="https://github.com/tortaruga" target="_blank">tortaruga</a></p>
      </footer>
    </>
  )
}

export default App
