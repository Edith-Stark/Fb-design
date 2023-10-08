import "./Post.css";
import { MdMoreVert } from "react-icons/md";
import { Users } from "../../Data";
import { useState } from "react";
export default function Post({ post }) {
  let user = Users.filter((u) => u.id == post.userId)[0].username;
  let pic = Users.filter((u) => u.id == post.userId)[0].profilePicture;
  const [like, setlike] = useState(post.like);
  const [isLiked, setisLiked] = useState(false);
  const likehandler = () => {
    setlike(isLiked ? like - 1 : like + 1);
    setisLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postwrapper">
        <div className="posttop">
          <div className="posttopleft">
            <img src={pic} className="postprofileImg" />
            <span className="postusername">{user}</span>
            <span className="postdate">{post.date}</span>
          </div>
          <div className="posttopright">
            <MdMoreVert />
          </div>
        </div>
        <div className="postcenter">
          <span className="posttext"> {post?.desc}</span>
          <img src={post.photo} className="postimg" />
        </div>
        <div className="postbottom">
          <div className="postbottomleft">
            <img
              src="/Assets/5.png"
              onClick={likehandler}
              className="likeicon"
            />
            <img
              src="/Assets/6.png"
              onClick={likehandler}
              className="likeicon"
            />
            <span className="postlikecounter">{like} likes</span>
          </div>
          <div className="postbottomright">
            <span className="postcomment"> {post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
