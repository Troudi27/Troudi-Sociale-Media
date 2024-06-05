import Post from "../post/Post"
import Share from "../share/Share"
import "./Feed.css"

export default function feed() {
  return (
    <div className="feeed">
      <div className="feedWrapper">
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}
