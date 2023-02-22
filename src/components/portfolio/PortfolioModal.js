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
  let listSkills;
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
  listSkills = project.skills.map((skills) => (
    <li key={skills.toString()}>{skills}</li>
  ));
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
            <h2>Description: </h2>
            {project.details[arrayVersion]}
            <br />
            <br />
            <h2>Compétences utilisées: </h2>
            {listSkills}
            <br />
            <h2>Lancer l'application: </h2>
            <br />
            <br />
            <a href={project.repo}>Liens vers le repo</a>
          </div>
        </div>
      </div>
    );
  }
}
