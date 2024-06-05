import { MoreVert } from "@mui/icons-material"
import "./Post.css"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                <img className="postProfileImg" src="/assets/person/8.jpeg" alt="" />
                    <span className="postUsername">Houssem Troudi</span>
                    <span className="postDate">5 min a go</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">hey</span>
                <img className="postImg" src="/assets/post/5.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="postLikeIcon"src="/assets/like.png" alt="" />
                    <img className="postLikeIcon"src="/assets/heart.png" alt="" />
                    <span className="postLikeCounter">32 people Like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
