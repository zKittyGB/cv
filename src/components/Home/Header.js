import "../../css/home/Header.css";
import { useDispatch } from "react-redux";

export default function Avatar(props) {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="header_versionButtons">
        <button
          className="header_versionButtons_button"
          onClick={(event) => {
            dispatch({ type: "setVersionDev" });
          }}
        >
          Dev
        </button>
        <button
          className="header_versionButtons_button"
          onClick={(event) => {
            dispatch({ type: "setVersionNoDevEn" });
          }}
        >
          En
        </button>
        <button
          className="header_versionButtons_button"
          onClick={(event) => {
            dispatch({ type: "setVersionNoDevFr" });
          }}
        >
          Fr
        </button>
      </div>
      <div className="header_name">
        <h1>AXEL HÉBERT</h1>
      </div>
      <div className="header_jobTitle">
        <h2>{props.props}</h2>
      </div>
    </div>
  );
}
