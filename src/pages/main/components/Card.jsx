import "./Card.css"
function Card(props) {
  return (
    <>
    < div className="card-container">
        <h1 id="header-container">Who are we  ?</h1>
        <p id="card-paragragh">{props.details}</p>
    </div>
    <button className="details"></button>
    </>
  )
}

export default Card