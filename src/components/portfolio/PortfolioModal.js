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
  let listStart;
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
      if (arrayVersion === 0) {
        listSkills = project.skillsFr.map((skills) => (
          <li key={skills.toString()}>{skills}</li>
        ));
        listStart = project.startFr.map((startLi) => (
          <li key={startLi.toString()}>{startLi}</li>
        ));
      } else {
        listSkills = project.skillsEn.map((skills) => (
          <li key={skills.toString()}>{skills}</li>
        ));
        listStart = project.startEn.map((startLi) => (
          <li key={startLi.toString()}>{startLi}</li>
        ));
      }
    }
  });
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
            <h2>Repo: </h2>
            <a href={project.repo}>
              {portfolioData.keyword.link[arrayVersion]}frontend
            </a>
            <br />
            {project.repoBack !== "" ? (
              <a href={project.repoBack}>
                {portfolioData.keyword.link[arrayVersion]}backend
              </a>
            ) : (
              <div> </div>
            )}
            <h2>Description: </h2>
            {project.details[arrayVersion]}
            <br />
            <br />
            <h2>{portfolioData.keyword.skills[arrayVersion]} </h2>
            {listSkills}
            <br />
            <h2>{portfolioData.keyword.start[arrayVersion]} </h2>
            <div className="startList">{listStart}</div>
          </div>
        </div>
      </div>
    );
  }
}
