import "../../../../css/home/Console.css";
import console from "../../../../assets/console.jpg";
import arrowBottom from "../../../../assets/arrow_bottom.png";
import arrowRight from "../../../../assets/arrow_right.png";

import {
  whiteConsole,
  blueConsole,
  greenConsole,
  greyConsole,
  changeColor,
} from "../../../../utils/fontColor";
export default function Console() {
  return (
    <div className="console">
      <img className="console_img" src={console} alt="console" />
      <p className="margin10px marginTop">
        {changeColor(whiteConsole, "Education datas ")}
        <br />
      </p>
      <p className="margin20px">
        <img className="arrowRight" src={arrowRight} alt="arrowRight" />
        {changeColor(blueConsole, "developerJS")}
        {changeColor(whiteConsole, ": ")}
        {changeColor(whiteConsole, "[")}
        {changeColor(greenConsole, '"Openclassrooms"')}
        {changeColor(whiteConsole, ",")}
        {changeColor(greenConsole, '"2022 - 2023"')}
        {changeColor(whiteConsole, ",")}
        {changeColor(greenConsole, '"Level 6 degree"')}
        {changeColor(whiteConsole, "]")}
        <br />
        <img className="arrowRight" src={arrowRight} alt="arrowRight" />
        {changeColor(blueConsole, "gameDesign")}
        {changeColor(whiteConsole, ": ")}
        {changeColor(whiteConsole, "[")}
        {changeColor(greenConsole, '"Paul Valery (Montpellier)"')}
        {changeColor(whiteConsole, ",")}
        {changeColor(greenConsole, '"2013 - 2014"')}
        {changeColor(whiteConsole, ",")}
        {changeColor(greenConsole, '"Level 5 degree"')}
        {changeColor(whiteConsole, "]")}
        <br />
        <img className="arrowRight" src={arrowRight} alt="arrowRight" />
        {changeColor(blueConsole, "dutSRC")}
        {changeColor(whiteConsole, ": ")}
        {changeColor(whiteConsole, "[")}
        {changeColor(greenConsole, '"I.U.T de Poitiers (Angoulême)"')}
        {changeColor(whiteConsole, ",")}
        {changeColor(greenConsole, '"2008 - 2009"')}
        {changeColor(whiteConsole, ",")}
        {changeColor(greenConsole, '"Level 5 degree"')}
        {changeColor(whiteConsole, "]")}
        <br />
        <img className="arrowRight" src={arrowRight} alt="arrowRight" />
        {changeColor(blueConsole, "bacSTI")}
        {changeColor(whiteConsole, ": ")}
        {changeColor(whiteConsole, "[")}
        {changeColor(greenConsole, '"Lycée Colbert de Torcy (Sablé)"')}
        {changeColor(whiteConsole, ",")}
        {changeColor(greenConsole, '"2010"')}
        {changeColor(whiteConsole, ",")}
        {changeColor(greenConsole, '"Level 4 degree"')}
        {changeColor(whiteConsole, "]")}
      </p>
    </div>
  );
}
