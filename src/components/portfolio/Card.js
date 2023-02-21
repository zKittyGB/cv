import "../../css/portfolio/Card.css";
import { useDispatch } from "react-redux";

export default function Card(props) {
  const dispatch = useDispatch();
  return (
    <div
      className="body_card"
      onClick={(event) => {
        dispatch({
          type: "setModalPortfolioOpen",
          payload: { project: `${props.picture}` },
        });
      }}
    >
      <div className="body_card_picture">
        <img
          src={require(`../../assets/projet/${props.picture}.jpg`)}
          alt={`${props.picture}`}
        />
      </div>
      <div className="body_card_title">
        <h1>{props.title}</h1>
        <h2>{props.subjectFR}</h2>
      </div>
    </div>
  );
}
