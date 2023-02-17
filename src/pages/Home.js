import "../css/home/Home.css";
import middleSeparator from "../assets/middleSeparator.jpg";
import Avatar from "../components/Home/Avatar.js";
import Header from "../components/Home/Header.js";
import WorkDetailsModal from "../components/Home/sectionData/WorkDetailsModal.js";
import SectionDataLeftEnglish from "../components/Home/sectionData/SectionDataLeftEnglish.js";
import SectionDataRightEnglish from "../components/Home/sectionData/SectionDataRightEnglish.js";
import SectionDataLeftNoDev from "../components/Home/sectionData/noDev/SectionDataLeftNoDev.js";
import SectionDataRightNoDev from "../components/Home/sectionData/noDev/SectionDataRightNoDev.js";
import { useSelector } from "react-redux";

export default function Home() {
  const version = useSelector((state) => state.version);
  if (version === "dev") {
    //conditional render for cv version DEV
    return (
      <div className="bodyCV">
        <Avatar />
        <div className="bodyCV_data">
          <Header
            titleFr={"Développeur d'application Javascript React"}
            titleEn={"Application developer Javascript React"}
          />
          <div className="bodyCV_data_section">
            <SectionDataLeftEnglish />
            <WorkDetailsModal />

            <img
              className="bodyCV_data_section_separator"
              src={middleSeparator}
              alt="separator"
            />
            <SectionDataRightEnglish />
            <img
              className="bodyCV_data_section_separator"
              src={middleSeparator}
              alt="separator"
            />
          </div>
        </div>
      </div>
    );
  }
  //conditional render for cv version no dev french
  if (version === "noDevFr" || version === "noDevEn") {
    return (
      <div className="bodyCV">
        <Avatar />
        <div className="bodyCV_data">
          <Header
            titleFr={"Développeur d'application Javascript React"}
            titleEn={"Application developer Javascript React"}
          />
          <div className="bodyCV_data_section">
            <SectionDataLeftNoDev />
            <WorkDetailsModal />
            <img
              className="bodyCV_data_section_separator"
              src={middleSeparator}
              alt="separator"
            />
            <SectionDataRightNoDev />
            <img
              className="bodyCV_data_section_separator"
              src={middleSeparator}
              alt="separator"
            />
          </div>
        </div>
      </div>
    );
  }
}
