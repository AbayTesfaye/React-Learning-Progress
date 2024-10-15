import "../App.css";
import Image from "./Image";

function Card(props) {
  return (
    <div className="cardContainer">
      <div>
        <Image img={props.img} />
        <h1>{props.name}</h1>
        <p>{props.discription}</p>
      </div>
    </div>
  );
}

export default Card;
