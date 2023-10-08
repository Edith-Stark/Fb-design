import "./Topbar.css";
import { FaSearch, FaUser, FaFacebookMessenger, FaBell } from "react-icons/fa";

function Topbar() {
  return (
    <div className="TopbarContainer">
      <div className="Topbarleft">
        <span className="logo"> My Social</span>
      </div>
      <div className="Topbarcenter">
        <div className="searchbar">
          <FaSearch className="searchIcon" />
          <input placeholder="Search" type="Search" className="searchinput" />
        </div>
      </div>
      <div className="TopbarRight">
        <div className="topbarlinks">
          <span className="topbarlink"> Homepage</span>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbaricons">
          <div className="topbariconitem">
            <FaUser className="mymodicon" />
            <span className="topbariconbadge">1</span>
          </div>
          <div className="topbariconitem">
            <FaFacebookMessenger className="mymodicon" />
            <span className="topbariconbadge">1</span>
          </div>
          <div className="topbariconitem">
            <FaBell className="mymodicon" />
            <span className="topbariconbadge">1</span>
          </div>
        </div>
        <img src="/Assets/1.jpg" alt="" className="TopbarImg" />
      </div>
    </div>
  );
}

export default Topbar;
