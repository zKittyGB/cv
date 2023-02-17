import "../../css/home/Header.css";
import { useDispatch, useSelector } from "react-redux";

export default function Avatar(props) {
  const dispatch = useDispatch();
  const version = useSelector((state) => state.version);
  //adate the language of the jobTitle
  let jobTitle;
  if (version === "noDevFr") {
    jobTitle = props.titleFr;
  } else {
    jobTitle = props.titleEn;
  }
  return (
    <div className="header">
      <button className="header_repo_button">
        <a href="https://github.com/zKittyGB?tab=repositories">Repo Github</a>
      </button>

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
        <h2>{jobTitle}</h2>
      </div>
    </div>
  );
}
