import "../../../../css/home/SectionData/noDev/SectionDataRightNoDev.css";
import ConsoleNoDev from "./ConsoleNoDev.js";
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
import { workExperienceData } from "../../../../utils/data.js";
import { useDispatch, useSelector } from "react-redux";

export default function SectionDataRight() {
  const dispatch = useDispatch();
  const version = useSelector((state) => state.version);
  //version FR = 0 version EN = 1
  let arrayVersion = 0;
  if (version === "noDevFr") {
    arrayVersion = 0;
  }
  if (version === "noDevEn") {
    arrayVersion = 1;
  }
  let degreeLevel = [];
  if (arrayVersion === 0) {
    degreeLevel = [
      '"Diplôme de niveau 6"',
      '"Diplôme de niveau 5"',
      '"Diplôme de niveau 4"',
    ];
  } else {
    degreeLevel = ['"Level 6 degree"', '"Level 5 degree"', '"Level 4 degree"'];
  }

  return (
    <div className="sectionDataRight">
      <div className="secionDataRight_workSectionNoDev">
        <h3 className="bgWhite_right">
          {changeColor(
            blue,
            `${workExperienceData.titleWorkExp[arrayVersion]}`
          )}
          {changeColor(orange, "() {")}
        </h3>
        <br />
        <p className="margin20px">
          {changeColor(
            grey,
            `${workExperienceData.animator.comment[arrayVersion]}`
          )}
        </p>
        <div
          className="margin20px"
          onClick={(event) => {
            dispatch({
              type: "setModalOpen",
              payload: { job: "animator" },
            });
          }}
        >
          {changeColor(
            yellow,
            `${workExperienceData.animator.job[arrayVersion]}`
          )}
          {changeColor(blue, " = ")}
          {changeColor(purple, "{")}
        </div>

        <p className="margin30px">
          {changeColor(red, `${workExperienceData.keyword.name[arrayVersion]}`)}
          {changeColor(green, `${workExperienceData.animator.name}`)}
          {changeColor(grey, ",")}
          <br />
          {changeColor(
            red,
            `${workExperienceData.keyword.location[arrayVersion]}`
          )}
          {changeColor(green, `${workExperienceData.animator.location}`)}
          {changeColor(grey, ",")}
          <br />
          {changeColor(red, "date: ")}
          {changeColor(
            green,
            `${workExperienceData.animator.date[arrayVersion]}`
          )}
        </p>
        <p className="margin20px">
          {changeColor(purple, "}")}
          <br />
          <br />
          {changeColor(
            grey,
            `${workExperienceData.hotlinerOrange.comment[arrayVersion]}`
          )}
          <br />
        </p>
        <div
          className="margin20px"
          onClick={(event) => {
            dispatch({
              type: "setModalOpen",
              payload: { job: "hotlinerOrange" },
            });
          }}
        >
          {changeColor(yellow, `${workExperienceData.hotlinerOrange.job}`)}
          {changeColor(blue, " = ")}
          {changeColor(purple, "{")}
        </div>
        <p className="margin30px">
          {changeColor(red, `${workExperienceData.keyword.name[arrayVersion]}`)}
          {changeColor(green, `${workExperienceData.hotlinerOrange.name[0]}`)}
          {changeColor(grey, ",")}
          <br />
          {changeColor(
            red,
            `${workExperienceData.keyword.location[arrayVersion]}`
          )}
          {changeColor(green, `${workExperienceData.hotlinerOrange.location}`)}
          {changeColor(grey, ",")}
          <br />
          {changeColor(red, "date: ")}
          {changeColor(
            green,
            `${workExperienceData.hotlinerOrange.date[arrayVersion]}`
          )}
        </p>
        <p className="margin20px">
          {changeColor(purple, "}")}
          <br />
          <br />
          {changeColor(
            grey,
            `${workExperienceData.gameDesign.comment[arrayVersion]}`
          )}
          <br />
        </p>
        <div
          className="margin20px"
          onClick={(event) => {
            dispatch({ type: "setModalOpen", payload: { job: "gameDesign" } });
          }}
        >
          {changeColor(
            yellow,
            `${workExperienceData.gameDesign.job[arrayVersion]}`
          )}
          {changeColor(blue, " = ")}
          {changeColor(purple, "{")}
        </div>

        <p className="margin30px">
          {changeColor(red, `${workExperienceData.keyword.name[arrayVersion]}`)}
          {changeColor(green, `${workExperienceData.gameDesign.name}`)}
          {changeColor(grey, ",")}
          <br />
          {changeColor(
            red,
            `${workExperienceData.keyword.location[arrayVersion]}`
          )}
          {changeColor(green, `${workExperienceData.gameDesign.location}`)}
          {changeColor(grey, ",")}
          <br />
          {changeColor(red, "date: ")}
          {changeColor(
            green,
            `${workExperienceData.gameDesign.date[arrayVersion]}`
          )}
        </p>
        <p className="margin20px">{changeColor(purple, "}")}</p>
        <p className="margin10px">
          <br />
          {changeColor(
            grey,
            `${workExperienceData.railways.comment[arrayVersion]}`
          )}
          <br />
        </p>
        <div
          className="margin20px"
          onClick={(event) => {
            dispatch({ type: "setModalOpen", payload: { job: "railways" } });
          }}
        >
          {changeColor(purple, "const ")}
          {changeColor(
            yellow,
            `${workExperienceData.railways.job[arrayVersion]}`
          )}
          {changeColor(blue, " = ")}
          {changeColor(purple, "{")}
        </div>

        <p className="margin30px">
          {changeColor(red, `${workExperienceData.keyword.name[arrayVersion]}`)}
          {changeColor(green, `${workExperienceData.railways.name}`)}
          {changeColor(grey, ",")}
          <br />
          {changeColor(
            red,
            `${workExperienceData.keyword.location[arrayVersion]}`
          )}
          {changeColor(green, `${workExperienceData.railways.location}`)}
          {changeColor(grey, ",")}
          <br />
          {changeColor(red, "date: ")}
          {changeColor(
            green,
            `${workExperienceData.railways.date[arrayVersion]}`
          )}
        </p>
        <p className="margin20px">
          {changeColor(purple, "}")}
          <br />
          <br />
          {changeColor(
            grey,
            `${workExperienceData.hotlinerCanal.comment[arrayVersion]}`
          )}
          <br />
        </p>
        <div
          className="margin20px"
          onClick={(event) => {
            dispatch({
              type: "setModalOpen",
              payload: { job: "hotlinerCanal" },
            });
          }}
        >
          {changeColor(purple, "const ")}
          {changeColor(yellow, `${workExperienceData.hotlinerCanal.job}`)}
          {changeColor(blue, " = ")}
          {changeColor(purple, "{")}
        </div>

        <p className="margin30px">
          {changeColor(red, `${workExperienceData.keyword.name[arrayVersion]}`)}
          {changeColor(green, `${workExperienceData.hotlinerCanal.name}`)}
          {changeColor(grey, ",")}
          <br />
          {changeColor(
            red,
            `${workExperienceData.keyword.location[arrayVersion]}`
          )}
          {changeColor(green, `${workExperienceData.hotlinerCanal.location}`)}
          {changeColor(grey, ",")}
          <br />
          {changeColor(red, "date: ")}
          {changeColor(
            green,
            `${workExperienceData.hotlinerCanal.date[arrayVersion]}`
          )}
        </p>
        <p className="margin20px">{changeColor(purple, "}")}</p>
        <p className="margin10px">{changeColor(orange, "}")}</p>
      </div>
      <br />
      <br />
      <br />
      <h3 className="bgWhite">
        {changeColor(blue, `${workExperienceData.titleEducExp[arrayVersion]}`)}
        {changeColor(orange, "() {")}
      </h3>
      <p className="margin20px"></p>
      <ConsoleNoDev props={degreeLevel} />
    </div>
  );
}
