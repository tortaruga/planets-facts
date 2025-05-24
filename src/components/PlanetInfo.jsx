import Stat from "./Stat";

export default function PlanetInfo(props) {
    return (
        <div className="planet-info">
            <div className="main-content">
                <img className="planet-img" src={props.img} alt="planet image" />

                <div className="text">
                    <h1>{props.planet}</h1>
                    <p>{props.desc}</p>
                </div>
            </div>

            <div className="secondary-content">
                <Stat key={0} stat='distance from the sun' value={props.distance} />
                <Stat key={1} stat='year length' value={`${props.yearLength} days`} />
                <Stat key={2} stat='diameter' value={`${props.diameter} km`} />
                <Stat key={3} stat='rotation time' value={props.rotationTime} />
            </div>
        </div>
    )
}