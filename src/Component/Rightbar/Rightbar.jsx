import "./Rightbar.css";
import { Users } from "../../Data";
import { User } from "react-feather";
import Online from "../Online/Online";
export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
        <div className="birthdaycontainer">
          <img src="/Assets/14.png" className="birthdayimg" />
          <span className="birthdaytext">
            <b> Annie Parker</b> and <b> 4 other friends </b> have a birthday
            today
          </span>
        </div>
        <img src="/Assets/13.png" className="rightbarad" />
        <h4 className="rightbartitle"> Online Friends</h4>
        <ul className="rightbarfriendslist">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
