import "../../../css/home/SectionData/SectionDataRight.css";
import Console from "./Console.js";
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

export default function SectionDataRight() {
  return (
    <div className="sectionDataRight">
      <p className="bgWhite">
        {changeColor(purple, "function ")}&nbsp;
        {changeColor(blue, "workExperiencesData")}
        {changeColor(orange, "() {")}
        <br />
      </p>
      <p className="margin20px">
        {changeColor(purple, "const")}
        {changeColor(yellow, " cybercenterAnimator")}
        {changeColor(blue, " = ")}
        {changeColor(purple, "{")}
        <br />
      </p>
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
        {changeColor(purple, "const ")}
        {changeColor(yellow, "hotliner")}
        {changeColor(blue, " = ")}
        {changeColor(purple, "{")}
      </p>
      <p className="margin30px">
        {changeColor(red, "name: ")}
        {changeColor(blue, "[")}
        {changeColor(green, "‘Convergys(Orange)’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘Chronopost’")}
        {changeColor(blue, "]")}
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
        {changeColor(purple, "const")}
        {changeColor(yellow, " leadProducerGameDesigner")}
        {changeColor(blue, " = ")}
        {changeColor(purple, "{")}
      </p>
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
      <p className="margin20px">{changeColor(purple, "}")}</p>
      <p className="margin10px">
        {changeColor(orange, "}")}
        <br />
        <br />
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
