import "../../css/home/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Avatar(props) {
  //get url active
  const sampleLocation = useLocation();
  const dispatch = useDispatch();
  const version = useSelector((state) => state.version);
  let pageToOpen;
  //adapt the language of the jobTitle
  let jobTitle;
  if (version === "noDevFr") {
    jobTitle = props.titleFr;
  } else {
    jobTitle = props.titleEn;
  }
  //adapt the Switch portfolio button
  if (sampleLocation.pathname === "/Portfolio") {
    pageToOpen = "CV";
  } else {
    pageToOpen = "Portfolio";
  }
  return (
    <div className="header">
      <Link to={`/${pageToOpen}`} className="header_switchCvPortfolio_link">
        <button className="header_switchCvPortfolio_button">
          {pageToOpen}
        </button>
      </Link>
      <div className="header_versionButtons">
        <button
          className="header_versionButtons_button"
          onClick={(event) => {
            dispatch({ type: "setVersionNoDevFr" });
          }}
        >
          Fr
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
            dispatch({ type: "setVersionDev" });
          }}
        >
          Dev
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
