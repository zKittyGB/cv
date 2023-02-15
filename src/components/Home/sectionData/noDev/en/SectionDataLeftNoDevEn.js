import "../../../../../css/home/SectionData/noDev/SectionDataLeftNoDev.css";
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

export default function SectionDataLeft() {
  return (
    <div className="sectionDataLeft">
      <h3 className="bgWhite">
        {changeColor(blue, "Profil Datas")}&nbsp;
        {changeColor(orange, "() {")}
      </h3>
      <p className="margin20px">
        <br />
        {changeColor(blue, "Personal Datas")}
        {changeColor(purple, "() {")}
        <br />
      </p>
      <p className="margin30px">
        {changeColor(yellow, " Birth")}
        {changeColor(blue, " = ")}
        {changeColor(green, "‘29.06.1990’")}
        <br />
        {changeColor(yellow, " Driver's License")}
        {changeColor(blue, " = ")}
        {changeColor(blue, "[")}
        {changeColor(green, "‘A’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘B’")}
        {changeColor(blue, "]")}
        <br />
        {changeColor(yellow, "City ")}
        {changeColor(blue, " = ")}
        {changeColor(green, "‘44300 Nantes’")}
        <br />
        {changeColor(yellow, "Phone ")}
        {changeColor(blue, " = ")}
        {changeColor(green, "‘06.22.67.91.03’")}
        <br />
        {changeColor(yellow, "E-mail ")}
        {changeColor(blue, " = ")}
        {changeColor(green, " ‘a.hebert72@gmail.com’ ")}
        <br />
        {changeColor(yellow, "Availability ")}
        {changeColor(blue, " = ")}
        {changeColor(green, " ‘Immediate availability’ ")}
      </p>
      <p className="margin20px">
        {changeColor(purple, "}")}
        <br />
        <br />
        {changeColor(blue, "Skills Datas")}
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
        {changeColor(yellow, " Usual use")}
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
        <br />
        {changeColor(green, "Axios")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘Unit tests(jest)’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘Accessibility’")}
        {changeColor(blue, "]")}
        <br />
        {changeColor(yellow, " Language")}
        {changeColor(blue, " = {")}
      </p>
      <p className="margin40px">
        {changeColor(red, "French:")}
        {changeColor(green, " ‘Mother tongue’")}
        {changeColor(grey, ",")}
        <br />
        {changeColor(red, "English:")}
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
        {changeColor(blue, "Hobbies Datas")}
        {changeColor(purple, "() {")}
      </p>
      <p className="margin30px">
        {changeColor(yellow, " Video games")}
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
        {changeColor(yellow, " Board games")}
        {changeColor(blue, " = [")}
        {changeColor(green, "‘Warhammer’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘BloodBowl’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘...’")}
        {changeColor(blue, "]")}
        <br />
        {changeColor(yellow, " Culture")}
        {changeColor(blue, " = {")}
      </p>
      <p className="margin40px">
        {changeColor(red, "Movies:")}
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
        {changeColor(red, "Music:")}
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
