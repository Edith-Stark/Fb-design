import "./Sidebar.css";

import {
  Rss,
  MessageSquare,
  Youtube,
  Bookmark,
  HelpCircle,
  Briefcase,
  Calendar,
  BookOpen,
} from "react-feather";
import { GrGroup } from "react-icons/gr";
import { Users } from "../../Data";
import Friend from "../Friend/Friend";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <ul className="sidebarlist">
          <li className="sidebarlistitem">
            <Rss className="sidebaricon" />
            <span className="sidebarlistitemtext">Feed</span>
          </li>
          <li className="sidebarlistitem">
            <MessageSquare className="sidebaricon" />
            <span className="sidebarlistitemtext">Chat</span>
          </li>
          <li className="sidebarlistitem">
            <Youtube className="sidebaricon" />
            <span className="sidebarlistitemtext">Videos</span>
          </li>
          <li className="sidebarlistitem">
            <GrGroup className="sidebaricon" />
            <span className="sidebarlistitemtext">Groups</span>
          </li>
          <li className="sidebarlistitem">
            <Bookmark className="sidebaricon" />
            <span className="sidebarlistitemtext">Bookmarks</span>
          </li>
          <li className="sidebarlistitem">
            <HelpCircle className="sidebaricon" />
            <span className="sidebarlistitemtext">Questions</span>
          </li>
          <li className="sidebarlistitem">
            <Briefcase className="sidebaricon" />
            <span className="sidebarlistitemtext">Jobs</span>
          </li>
          <li className="sidebarlistitem">
            <Calendar className="sidebaricon" />
            <span className="sidebarlistitemtext">Events</span>
          </li>
          <li className="sidebarlistitem">
            <BookOpen className="sidebaricon" />
            <span className="sidebarlistitemtext">Courses</span>
          </li>
        </ul>
        <button className="sidebarbutton">Show more</button>
        <hr className="sidebarhr" />
        <ul className="sidebarfriendlist">
          {Users.map((u) => (
            <Friend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
