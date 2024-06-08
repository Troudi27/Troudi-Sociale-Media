import Post from "../post/Post"
import Share from "../share/Share"
import "./Feed.css"
import {Posts} from "../../dummyData"

export default function feed() {
  return (
    <div className="feeed">
      <div className="feedWrapper">
        <Share/>
        {Posts.map(p=>(
          <Post key={p.id} post={p}/>
        ))}
        
       
      </div>
    </div>
  )
}
