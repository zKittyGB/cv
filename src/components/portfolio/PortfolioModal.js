import "../../css/portfolio/PortfolioModal.css";
import closeButton from "../../assets/closebutton.png";
import { portfolioData } from "../../utils/portfolioData.js";
import { useSelector, useDispatch } from "react-redux";

export default function PortfolioModal() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.isModalPortfolioOpen);
  const projectClicked = useSelector((state) => state.projectClicked);
  const version = useSelector((state) => state.version);
  let project;
  //Get the language version to show
  //version FR = 0 version EN = 1
  let arrayVersion = 0;
  if (version === "noDevFr") {
    arrayVersion = 0;
  }
  if (version === "noDevEn" || version === "dev") {
    arrayVersion = 1;
  }
  //Get data from the work experience clicked
  Object.keys(portfolioData).forEach((key) => {
    if (key === projectClicked) {
      project = portfolioData[key];
    }
  });
  console.log(project);
  if (isModalOpen === "yes") {
    return (
      <div className="portfolioModal">
        <div className="portfolioModal_body">
          <img
            className="portfolioModal_closeButton"
            src={closeButton}
            alt="closeButton"
            onClick={(event) => {
              dispatch({ type: "setModalPortfolioClose" });
            }}
          />
          <div className="portfolioModal_body_header">
            <div className="portfolioModal_body_header_title">
              <h1>{project.title}</h1>
            </div>
            <div className="portfolioModal_picture">
              <img
                src={require(`../../assets/projet/${project.picture}.jpg`)}
                alt={`ar`}
              />
            </div>
          </div>
          <div className="portfolioModal_body_section">
            {project.details[arrayVersion]}
            <a href={project.repo}>Liens vers le repo</a>
          </div>
        </div>
      </div>
    );
  }
}
