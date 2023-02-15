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
        {changeColor(blue, "Informations sur le profil")}
        {changeColor(orange, "() {")}
      </h3>
      <p className="margin20px">
        <br />
        {changeColor(blue, "Données Personnelles")}
        {changeColor(purple, "() {")}
        <br />
      </p>
      <p className="margin30px">
        {changeColor(yellow, "Naissance")}
        {changeColor(blue, " = ")}
        {changeColor(green, "‘29.06.1990’")}
        <br />
        {changeColor(yellow, " Permis de conduire")}
        {changeColor(blue, " = ")}
        {changeColor(blue, "[")}
        {changeColor(green, "‘A’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘B’")}
        {changeColor(blue, "]")}
        <br />
        {changeColor(yellow, "Ville")}
        {changeColor(blue, " = ")}
        {changeColor(green, "‘44300 Nantes’")}
        <br />
        {changeColor(yellow, "Tel ")}
        {changeColor(blue, " = ")}
        {changeColor(green, "‘06.22.67.91.03’")}
        <br />
        {changeColor(yellow, "E-mail ")}
        {changeColor(blue, " = ")}
        {changeColor(green, " ‘a.hebert72@gmail.com’ ")}
        <br />
        {changeColor(yellow, "Disponibilité ")}
        {changeColor(blue, " = ")}
        {changeColor(green, " ‘Disponibilité immédiate’ ")}
      </p>
      <p className="margin20px">
        {changeColor(purple, "}")}
        <br />
        <br />
        {changeColor(blue, "Données de compétences")}
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
        {changeColor(yellow, "Courramment utilisé")}
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
        {changeColor(green, "‘Test unitaire(jest)’")}
        {changeColor(grey, ",")}
        {changeColor(green, "‘Accessibilité’")}
        {changeColor(blue, "]")}
        <br />
        {changeColor(yellow, " Langues")}
        {changeColor(blue, " = {")}
      </p>
      <p className="margin40px">
        {changeColor(red, "Français:")}
        {changeColor(green, " ‘Langue maternelle’")}
        {changeColor(grey, ",")}
        <br />
        {changeColor(red, "Anglais:")}
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
        {changeColor(blue, "Données des hobbies")}
        {changeColor(purple, "() {")}
      </p>
      <p className="margin30px">
        {changeColor(yellow, " Jeux vidéo")}
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
        {changeColor(yellow, "Jeux de plateau")}
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
        {changeColor(red, "Films:")}
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
        {changeColor(red, "Musique:")}
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
