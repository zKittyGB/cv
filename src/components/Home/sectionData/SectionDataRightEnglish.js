import "../../../css/home/SectionData/SectionDataRight.css";
import Console from "./Console.js";
import clic from "../../../assets/clic.gif";
import {
  purple,
  blue,
  orange,
  grey,
  yellow,
  green,
  red,
  changeColor,
} from "../../../utils/fontColor";
import { useDispatch } from "react-redux";

export default function SectionDataRight() {
  const dispatch = useDispatch();

  return (
    <div className="sectionDataRight">
      <div className="secionDataRight_workSection">
        <p className="bgWhite_right">
          {changeColor(grey, "//User’s work experiences datas")}
        </p>
        <p className="margin10px">
          {changeColor(purple, "function ")}&nbsp;
          {changeColor(blue, "workExperiencesData")}
          {changeColor(orange, "() {")}
          <br />
        </p>
        <p className="margin20px">
          {changeColor(grey, "//Work experience as cybercentre  animator")}
        </p>
        <div
          className="margin20px cursor"
          onClick={(event) => {
            dispatch({
              type: "setModalOpen",
              payload: { job: "animator" },
            });
          }}
        >
          {changeColor(purple, "const")}
          {changeColor(yellow, " cybercenterAnimator")}
          {changeColor(blue, " = ")}
          {changeColor(purple, "{")}
          <img className="clic" src={clic} alt="clic_gif" />
        </div>
        <p className="margin30px">
          {changeColor(red, "name: ")}
          {changeColor(green, "‘L'Archy'Made’")}
          {changeColor(grey, ",")}
          <br />
          {changeColor(red, "location: ")}
          {changeColor(green, "‘Champigné 49300’")}
          {changeColor(grey, ",")}
          <br />
          {changeColor(red, "date: ")}
          {changeColor(green, "‘Febuary 2017 - May 2021’")}
        </p>
        <p className="margin20px">
          {changeColor(purple, "}")}
          <br />
          {changeColor(grey, "//Work experience as hotliner")}
          <br />
        </p>
        <div
          className="margin20px  cursor"
          onClick={(event) => {
            dispatch({
              type: "setModalOpen",
              payload: { job: "hotlinerOrange" },
            });
          }}
        >
          {changeColor(purple, "const ")}
          {changeColor(yellow, "hotliner")}
          {changeColor(blue, " = ")}
          {changeColor(purple, "{")}
          <img className="clic" src={clic} alt="clic_gif" />
        </div>
        <p className="margin30px">
          {changeColor(red, "name: ")}
          {changeColor(green, "‘Stream(Orange)’")}
          {changeColor(grey, ",")}
          <br />
          {changeColor(red, "location: ")}
          {changeColor(green, "‘Angers 49000’")}
          {changeColor(grey, ",")}
          <br />
          {changeColor(red, "date: ")}
          {changeColor(green, "‘November 2015 - Feubary 2017’")}
        </p>
        <p className="margin20px">
          {changeColor(purple, "}")}
          <br />
          {changeColor(grey, "//Work experience as game designer")}
          <br />
        </p>
        <div
          className="margin20px cursor"
          onClick={(event) => {
            dispatch({
              type: "setModalOpen",
              payload: { job: "gameDesign" },
            });
          }}
        >
          {changeColor(purple, "const")}
          {changeColor(yellow, " leadProducerGameDesigner")}
          {changeColor(blue, " = ")}
          {changeColor(purple, "{")}
          <img className="clic" src={clic} alt="clic_gif" />
        </div>
        <p className="margin30px">
          {changeColor(red, "name: ")}
          {changeColor(green, "‘Studio Nyx’")}
          {changeColor(grey, ",")}
          <br />
          {changeColor(red, "location: ")}
          {changeColor(green, "‘Angoulême 16000’")}
          {changeColor(grey, ",")}
          <br />
          {changeColor(red, "date: ")}
          {changeColor(green, "‘March 2014 - September 2015’")}
        </p>
        <p className="margin20px">
          {changeColor(purple, "}")}
          <br />
          {changeColor(grey, "//Work experience as setter railways")}
          <br />
        </p>
        <div
          className="margin20px cursor"
          onClick={(event) => {
            dispatch({
              type: "setModalOpen",
              payload: { job: "railways" },
            });
          }}
        >
          {changeColor(purple, "const")}
          {changeColor(yellow, " setterRailways")}
          {changeColor(blue, " = ")}
          {changeColor(purple, "{")}
          <img className="clic" src={clic} alt="clic_gif" />
        </div>
        <p className="margin30px">
          {changeColor(red, "name: ")}
          {changeColor(green, "‘CLMTP’")}
          {changeColor(grey, ",")}
          <br />
          {changeColor(red, "location: ")}
          {changeColor(green, "‘Sablé-sur-Sarthe 72300’")}
          {changeColor(grey, ",")}
          <br />
          {changeColor(red, "date: ")}
          {changeColor(green, "‘August 2012 - December 2013’")}
        </p>
        <p className="margin20px">
          {changeColor(purple, "}")}
          <br />
          {changeColor(grey, "//Work experience as hotliner")}
          <br />
        </p>
        <div
          className="margin20px cursor"
          onClick={(event) => {
            dispatch({
              type: "setModalOpen",
              payload: { job: "hotlinerCanal" },
            });
          }}
        >
          {changeColor(purple, "const")}
          {changeColor(yellow, " hotliner")}
          {changeColor(blue, " = ")}
          {changeColor(purple, "{")}
          <img className="clic" src={clic} alt="clic_gif" />
        </div>
        <p className="margin30px">
          {changeColor(red, "name: ")}
          {changeColor(green, "‘Stream(Canal+)’")}
          {changeColor(grey, ",")}
          <br />
          {changeColor(red, "location: ")}
          {changeColor(green, "‘Angers 49000’")}
          {changeColor(grey, ",")}
          <br />
          {changeColor(red, "date: ")}
          {changeColor(green, "‘September 2010 - Febuary 2011’")}
        </p>
        <p className="margin20px">{changeColor(purple, "}")}</p>
        <p className="margin10px">{changeColor(orange, "}")}</p>
      </div>
      <p className="margin10px">
        <br />
        {changeColor(grey, "//Get education datas")}
        <br />
        {changeColor(blue, "educationData")}
        {changeColor(orange, "()")}
      </p>
      <Console />
    </div>
  );
}
