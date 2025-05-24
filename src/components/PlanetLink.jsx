export default function PlanetLink(props) {
    return (
        <button className="nav-link" onClick={() => props.setPlanetSelected(props.planetName)}>{props.planetName}</button>
    )
}