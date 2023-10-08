import "./Online.css";
export default function Online({ user }) {
  return (
    <li className="rightbarfriend">
      <div className="rightbarprofileimgconatiner">
        <img src={user.profilePicture} className="rightbarprofileimg" />
        <span className="rightbaronline"></span>
      </div>
      <span className="rightbarusername">{user.username}</span>
    </li>
  );
}
