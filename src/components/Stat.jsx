export default function Stat(props) {
    return (
        <div className="stat">
            <p>{props.stat}</p>
            <h2>{props.value}</h2>
        </div>
    )
}