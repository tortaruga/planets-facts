import { useEffect, useState } from "react"
import NavLinks from "./components/NavLinks";
import openIcon from '/assets/open.svg';
import closeIcon from '/assets/close.svg';
import PlanetInfo from "./components/PlanetInfo";
import ErrorMsg from "./components/ErrorMsg";

function App() {
  const [planetSelected, setPlanetSelected] = useState('earth');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [planetData, setPlanetData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  async function getPlanetInfo(planet) {
    const url = `https://planets-17f2.onrender.com/planets/getPlanet?name=${planet}`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      setPlanetData(data);
      setIsLoading(false);
    } catch {
       setIsLoading(true);
    }
    
  }

  useEffect(() => {
    getPlanetInfo(planetSelected);
  }, [planetSelected])

  
  const planets = {
    mercury: {
      rotationTime: '58.65d',
      diameter: '4878'
    },
    venus: {
      rotationTime: '243d',
      diameter: '12,100'
    },
    earth: {
      rotationTime: '23.934h',
      diameter: '12,756'
    },
    mars: {
      rotationTime: '24.623h',
      diameter: '6794'
    },
    jupiter: {
      rotationTime: '9.842h',
      diameter: '142,800'
    },
    saturn: {
      rotationTime: '10.233h',
      diameter: '120,000'
    },
    uranus: {
      rotationTime: '16-28h',
      diameter: '52,400'
    },
    neptune: {
      rotationTime: '18-20h',
      diameter: '48,400'
    },
  };

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
        {isLoading ? <ErrorMsg /> : ( 
        <PlanetInfo planet={planetData.name} 
                  desc={planetData.description} 
                  distance={planetData.distanceFromSun} 
                  yearLength={planetData.yearLength}
                  diameter={planets[planetSelected].diameter}
                  rotationTime={planets[planetSelected].rotationTime}
                  img={planetData.picture} /> )}
      </main>

      <footer>
        <p>data from <a href="https://github.com/k99sharma/planets-api" target="_blank">Planets API</a> and <a href="https://www.rmg.co.uk/stories/space-astronomy/solar-system-data" target="_blank">Royal Museums Greenwich.</a></p>
        <p>coded by <a href="https://github.com/tortaruga" target="_blank">tortaruga</a></p>
      </footer>
    </>
  )
}

export default App
