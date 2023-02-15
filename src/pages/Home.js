import "../css/home/Home.css";
import middleSeparator from "../assets/middleSeparator.jpg";
import Avatar from "../components/Home/Avatar.js";
import Header from "../components/Home/Header.js";
import SectionDataLeftEnglish from "../components/Home/sectionData/SectionDataLeftEnglish.js";
import SectionDataRightEnglish from "../components/Home/sectionData/SectionDataRightEnglish.js";
import SectionDataLeftNoDevEn from "../components/Home/sectionData/noDev/en/SectionDataLeftNoDevEn.js";
import SectionDataRightNoDevEn from "../components/Home/sectionData/noDev/en/SectionDataRightNoDevEn.js";
import SectionDataLeftNoDevFr from "../components/Home/sectionData/noDev/fr/SectionDataLeftNoDevFr.js";
import SectionDataRightNoDevFr from "../components/Home/sectionData/noDev/fr/SectionDataRightNoDevFr.js";
import { useSelector } from "react-redux";

export default function Home() {
  const version = useSelector((state) => state.version);
  if (version === "dev") {
    //conditional render for cv version DEV
    return (
      <div className="bodyCV">
        <Avatar />
        <div className="bodyCV_data">
          <Header props={"Application developer Javascript React"} />
          <div className="bodyCV_data_section">
            <SectionDataLeftEnglish />
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
  //conditional render for cv version No DEV english
  if (version === "noDevEn") {
    return (
      <div className="bodyCV">
        <Avatar />
        <div className="bodyCV_data">
          <Header props={"Application developer Javascript React"} />
          <div className="bodyCV_data_section">
            <SectionDataLeftNoDevEn />
            <img
              className="bodyCV_data_section_separator"
              src={middleSeparator}
              alt="separator"
            />
            <SectionDataRightNoDevEn />
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
  if (version === "noDevFr") {
    return (
      <div className="bodyCV">
        <Avatar />
        <div className="bodyCV_data">
          <Header props={"Développeur d'application Javascript React"} />
          <div className="bodyCV_data_section">
            <SectionDataLeftNoDevFr />
            <img
              className="bodyCV_data_section_separator"
              src={middleSeparator}
              alt="separator"
            />
            <SectionDataRightNoDevFr />
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
