import "../../../../../css/home/SectionData/noDev/SectionDataRightNoDev.css";
import ConsoleNoDev from "../ConsoleNoDev.js";
import {
  purple,
  blue,
  orange,
  grey,
  yellow,
  green,
  red,
  changeColor,
} from "../../../../../utils/fontColor";

export default function SectionDataRight() {
  return (
    <div className="sectionDataRight">
      <h3 className="bgWhite">
        {changeColor(blue, "Work Experiences Datas")}
        {changeColor(orange, "() {")}
      </h3>
      <br />
      <p className="margin20px">
        {changeColor(yellow, "Cybercenter Animator")}
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
        <br />
        {changeColor(yellow, "Hotliner")}
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
        <br />
        {changeColor(yellow, " Lead Producer - Game Designer")}
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
      </p>
      <h3 className="bgWhite">
        {changeColor(blue, "Education Datas")}
        {changeColor(orange, "() {")}
      </h3>
      <p className="margin20px"></p>
      <ConsoleNoDev />
    </div>
  );
}
