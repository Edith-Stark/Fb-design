import "./Share.css";
import {
  MdOutlinePermMedia,
  MdLabel,
  MdLocationPin,
  MdEmojiEmotions,
} from "react-icons/md";

export default function Share() {
  return (
    <div className="share">
      <div className="sharewrapper">
        <div className="sharetop">
          <img src="/Assets/1.jpg" alt="" className="shareprofilepic" />
          <input placeholder="What is it?" type="text" className="shareinput" />
        </div>
        <hr className="sharehr" />
        <div className="sharebottom">
          <div className="shareoptions">
            <div className="shareoption">
              <MdOutlinePermMedia className="shareicon" />
              <div className="shareoptiontext"> Photos Or Videos </div>
            </div>
            <div className="shareoption">
              <MdLabel className="shareicon" />
              <div className="shareoptiontext"> Tag</div>
            </div>
            <div className="shareoption">
              <MdLocationPin className="shareicon" />
              <div className="shareoptiontext">Location</div>
            </div>
            <div className="shareoption">
              <MdEmojiEmotions className="shareicon" />
              <div className="shareoptiontext"> Emojis</div>
            </div>
          </div>
          <button className="sharebutton">Share</button>
        </div>
      </div>
    </div>
  );
}
