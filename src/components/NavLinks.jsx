import PlanetLink from "./PlanetLink";

export default function NavLinks(props) {
    return (
        <ul className={props.mobile ? 'planet-links mobile' : 'planet-links'}>
          <li>
            <PlanetLink planetName='mercury' setPlanetSelected={props.setPlanetSelected} />
          </li>

          <li>
            <PlanetLink planetName='venus' setPlanetSelected={props.setPlanetSelected} />
          </li>

          <li>
            <PlanetLink planetName='earth' setPlanetSelected={props.setPlanetSelected} />
          </li>

          <li>
            <PlanetLink planetName='mars' setPlanetSelected={props.setPlanetSelected} />
          </li>

          <li>
            <PlanetLink planetName='jupiter' setPlanetSelected={props.setPlanetSelected} />
          </li>

          <li>
            <PlanetLink planetName='saturn' setPlanetSelected={props.setPlanetSelected} />
          </li>

          <li>
            <PlanetLink planetName='uranus' setPlanetSelected={props.setPlanetSelected} />
          </li>

          <li>
            <PlanetLink planetName='neptune' setPlanetSelected={props.setPlanetSelected} />
          </li>
          
        </ul>
    )
}