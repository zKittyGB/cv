import "../../../css/home/SectionData/WorkDetailsModal.css";
import closeButton from "../../../assets/closebutton.png";
import { useSelector, useDispatch } from "react-redux";
import { workExperienceData } from "../../../utils/data.js";

export default function WorkDetailsModal() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.isModalOpen);
  const jobClicked = useSelector((state) => state.jobClicked);
  const version = useSelector((state) => state.version);
  let work;
  let listTask;
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
  Object.keys(workExperienceData).forEach((key) => {
    if (key === jobClicked) {
      work = workExperienceData[key];
    }
  });
  //affichage de la modal
  if (isModalOpen === "yes") {
    //adapt the listTask to the language version
    if (arrayVersion === 0) {
      //stock the task list as list
      listTask = work.infos.activityFr.map((task) => (
        <li key={task.toString()}>{task}</li>
      ));
    } else {
      listTask = work.infos.activityEn.map((task) => (
        <li key={task.toString()}>{task}</li>
      ));
    }
    return (
      <div className="WorkDetailsModal">
        {/* fermeture de la modal */}
        <img
          className="WorkDetailsModal_closeButton"
          src={closeButton}
          alt="closeButton"
          onClick={(event) => {
            dispatch({ type: "setModalClose" });
          }}
        />
        <div className="WorkDetailsModal_header">
          <div className="WorkDetailsModal_header_name">
            <h1>{work.infos.name}</h1>
            <h2>{work.infos.job[arrayVersion]}</h2>
          </div>
          <img
            className="workDetailsModal_header_businessPicture"
            src={require(`../../../assets/logo/${work.infos.logo}.png`)}
            alt="business_picture"
          />
        </div>
        <div className="WorkDetailsModal_details">
          <div className="workDetailsModal_details_resume">
            <h3>Informations</h3>
            <p>{work.infos.description[arrayVersion]}</p>
          </div>
          <div className="workDetailsModal_details_activity">
            <h3>
              {workExperienceData.keyword.modal.usualActivity[arrayVersion]}
            </h3>
            <ul>{listTask}</ul>
          </div>
          <div className="workDetailsModal_details_practiceInfo">
            <h3>
              {
                workExperienceData.keyword.modal.usefulInformations[
                  arrayVersion
                ]
              }
            </h3>

            {work.infos.tel !== "" ? (
              workExperienceData.keyword.modal.tel[arrayVersion] +
              work.infos.tel
            ) : (
              <div> </div>
            )}
            <p></p>
            {work.infos.mail !== "" ? "Mail: " + work.infos.mail : <div> </div>}
            <p>
              {workExperienceData.keyword.modal.adress[arrayVersion]}
              {work.infos.location}
            </p>
            <p>
              <a href={work.infos.web}>
                {workExperienceData.keyword.modal.webSite[arrayVersion]}
                {work.infos.web}
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
