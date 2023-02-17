import "../../../../css/home/SectionData/noDev/SectionDataLeftNoDev.css";
import { profilData } from "../../../../utils/data.js";

import {
  purple,
  blue,
  orange,
  grey,
  yellow,
  green,
  red,
  changeColor,
} from "../../../../utils/fontColor";
import { useSelector } from "react-redux";

export default function SectionDataLeft() {
  console.log(profilData);
  const version = useSelector((state) => state.version);
  //version FR = 0 version EN = 1
  let arrayVersion = 0;
  if (version === "noDevFr") {
    arrayVersion = 0;
  }
  if (version === "noDevEn") {
    arrayVersion = 1;
  }
  return (
    <div className="sectionDataLeft">
      <h3 className="bgWhite">
        {changeColor(blue, `${profilData.titleProfilData[arrayVersion]}`)}
        {changeColor(orange, "() {")}
      </h3>
      <p className="margin20px">
        <br />
        {changeColor(blue, `${profilData.personalData.title[arrayVersion]}`)}
        {changeColor(purple, "() {")}
        <br />
      </p>
      <p className="margin30px">
        {changeColor(yellow, `${profilData.personalData.birth[arrayVersion]}`)}
        {changeColor(blue, " = ")}
        {changeColor(green, "‘29.06.1990’")}
        <br />
        {changeColor(
          yellow,
          `${profilData.personalData.driverLicence[arrayVersion]}`
        )}
        {changeColor(blue, " = ")}
        {changeColor(blue, "[")}
        {changeColor(green, "‘A’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘B’")}
        {changeColor(blue, "]")}
        <br />
        {changeColor(yellow, `${profilData.personalData.city[arrayVersion]}`)}
        {changeColor(blue, " = ")}
        {changeColor(green, "‘44300 Nantes’")}
        <br />
        {changeColor(yellow, `${profilData.personalData.phone[arrayVersion]}`)}
        {changeColor(blue, " = ")}
        {changeColor(green, "‘06.22.67.91.03’")}
        <br />
        {changeColor(yellow, "E-mail ")}
        {changeColor(blue, " = ")}
        {changeColor(green, " ‘a.hebert72@gmail.com’")}
        <br />
        {changeColor(
          yellow,
          `${profilData.personalData.availability[arrayVersion]}`
        )}
        {changeColor(blue, " = ")}
        {changeColor(
          green,
          `${profilData.personalData.availabilityValue[arrayVersion]}`
        )}
      </p>
      <p className="margin20px">
        {changeColor(purple, "}")}
        <br />
        <br />
        {changeColor(blue, `${profilData.skillData.title[arrayVersion]}`)}
        {changeColor(purple, "() {")}
      </p>
      <p className="margin30px">
        {changeColor(yellow, " Code")}
        {changeColor(blue, " = [")}
        {changeColor(green, "‘Html’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘Css’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘Js’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘Jsx’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘React’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘Redux’")}
        {changeColor(blue, "]")}
        <br />
        {changeColor(yellow, `${profilData.skillData.usualUse[arrayVersion]}`)}
        {changeColor(blue, " = [")}
        {changeColor(green, "‘Git/Github’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘Fetch’")}
        {changeColor(blue, "]")}
        <br />
        {changeColor(yellow, " Web design")}
        {changeColor(blue, " = [")}
        {changeColor(green, "‘Responsive design’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘Photoshop’")}
        {changeColor(blue, "]")}
        <br />
        {changeColor(yellow, " Notions")}
        {changeColor(blue, " = [")}
        {changeColor(green, "‘Saas’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘Async’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘Axios’")}
        {changeColor(grey, ",")}
        {changeColor(
          green,
          `${profilData.skillData.notionsTest[arrayVersion]}`
        )}
        {changeColor(grey, ",")}
        {changeColor(
          green,
          `${profilData.skillData.notionsAccess[arrayVersion]}`
        )}
        {changeColor(blue, "]")}
        <br />
        {changeColor(yellow, `${profilData.skillData.languages[arrayVersion]}`)}
        {changeColor(blue, " = {")}
      </p>
      <p className="margin40px">
        {changeColor(red, `${profilData.skillData.languagesFr[arrayVersion]}`)}
        {changeColor(
          green,
          `${profilData.skillData.languagesFrValue[arrayVersion]}`
        )}
        {changeColor(grey, ",")}
        <br />
        {changeColor(red, `${profilData.skillData.languagesEn[arrayVersion]}`)}
        {changeColor(orange, " [")}
        {changeColor(green, "‘Toeic: B1’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘Score: 700’")}
        {changeColor(orange, "]")}
      </p>
      <p className="margin30px">{changeColor(blue, "}")}</p>
      <p className="margin20px">
        {changeColor(purple, "}")}
        <br />
        <br />
        {changeColor(blue, `${profilData.hobbiesData.title[arrayVersion]}`)}
        {changeColor(purple, "() {")}
      </p>
      <p className="margin30px">
        {changeColor(
          yellow,
          `${profilData.hobbiesData.videoGame[arrayVersion]}`
        )}
        {changeColor(blue, " = [")}
        {changeColor(green, "‘WoW’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘LoL’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘Apex’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘...’")}
        {changeColor(blue, "]")}
        <br />
        {changeColor(
          yellow,
          `${profilData.hobbiesData.boardGame[arrayVersion]}`
        )}
        {changeColor(blue, " = [")}
        {changeColor(green, "‘Warhammer’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘BloodBowl’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘...’")}
        {changeColor(blue, "]")}
        <br />
        {changeColor(yellow, `${profilData.hobbiesData.cultur[arrayVersion]}`)}
        {changeColor(blue, " = {")}
      </p>
      <p className="margin40px">
        {changeColor(red, `${profilData.hobbiesData.movie[arrayVersion]}`)}
        {changeColor(orange, " [")}
        {changeColor(green, "‘SF’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘Fantasy’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘Anim’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘Horror’")}
        {changeColor(grey, ",")}
        {changeColor(green, "...")}
        {changeColor(orange, "]")}
        {changeColor(grey, ",")}
        <br />
        {changeColor(red, `${profilData.hobbiesData.music[arrayVersion]}`)}
        {changeColor(orange, " [")}
        {changeColor(green, "‘Rock’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘Electro’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘Lofi’")}
        {changeColor(grey, ",")}
        {changeColor(green, "...")}
        {changeColor(orange, "]")}
      </p>
      <p className="margin30px">{changeColor(blue, "}")}</p>
      <p className="margin20px">{changeColor(purple, "}")}</p>
      <p className="margin10px">{changeColor(orange, "}")}</p>
    </div>
  );
}
