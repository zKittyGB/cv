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
        {changeColor(blue, "Données d'expériences professionnelles")}
        {changeColor(orange, "() {")}
      </h3>
      <br />
      <p className="margin20px">
        {changeColor(yellow, "Animateur en cybercentre")}
        {changeColor(blue, " = ")}
        {changeColor(purple, "{")}
        <br />
      </p>
      <p className="margin30px">
        {changeColor(red, "nom: ")}
        {changeColor(green, "‘L'Archy'Made’")}
        {changeColor(grey, ",")}
        <br />
        {changeColor(red, "lieu: ")}
        {changeColor(green, "‘Champigné 49300’")}
        {changeColor(grey, ",")}
        <br />
        {changeColor(red, "date: ")}
        {changeColor(green, "‘Février 2017 - Mai 2021’")}
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
        {changeColor(red, "nom: ")}
        {changeColor(blue, "[")}
        {changeColor(green, "‘Convergys(Orange)’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘Chronopost’")}
        {changeColor(blue, "]")}
        {changeColor(grey, ",")}
        <br />
        {changeColor(red, "lieu: ")}
        {changeColor(green, "‘Angers 49000’")}
        {changeColor(grey, ",")}
        <br />
        {changeColor(red, "date: ")}
        {changeColor(green, "‘Novembre 2015 - Février 2017’")}
      </p>
      <p className="margin20px">
        {changeColor(purple, "}")}
        <br />
        <br />
        {changeColor(yellow, " Chef de projet - Game Designer")}
        {changeColor(blue, " = ")}
        {changeColor(purple, "{")}
      </p>
      <p className="margin30px">
        {changeColor(red, "nom: ")}
        {changeColor(green, "‘Studio Nyx’")}
        {changeColor(grey, ",")}
        <br />
        {changeColor(red, "lieu: ")}
        {changeColor(green, "‘Angoulême 16000’")}
        {changeColor(grey, ",")}
        <br />
        {changeColor(red, "date: ")}
        {changeColor(green, "‘Mars 2014 - Septembre 2015’")}
      </p>
      <p className="margin20px">{changeColor(purple, "}")}</p>
      <p className="margin10px">
        {changeColor(orange, "}")}
        <br />
        <br />
        <br />
      </p>
      <h3 className="bgWhite">
        {changeColor(blue, "Données de scolarité")}
        {changeColor(orange, "() {")}
      </h3>
      <p className="margin20px"></p>
      <ConsoleNoDev />
    </div>
  );
}
