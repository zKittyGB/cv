import "../../css/home/Avatar.css";
import imgAvatar from "../../assets/portrait_moi_avatar.jpg";
export default function Avatar() {
  return (
    <div className="avatarArea">
      <img className="avatarArea_img" src={imgAvatar} alt="avatar" />
    </div>
  );
}
