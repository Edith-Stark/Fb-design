import "./Feed.css";
import Share from "../Component/Share/Share";
import Post from "../Component/Post/Post";
import { Posts } from "../Data";
export default function Feed() {
  return (
    <div className="feed">
      <div className="feedwrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
