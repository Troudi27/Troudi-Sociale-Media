import Rightbar from "../../../components/rightbar/Rightbar"
import Sidebar from "../../../components/sidebar/Sidebar"
import Topbar from "../../../components/topbar/Topbar"
import Feeed from "../../../components/feed/Feed";

import "./Profile.css"

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div>
      <Topbar/>
      <div className="profile">
      <Sidebar/>
      <div className="profileRight"> 
      <div className="profileRightTop">
        <div className="profileCover">
            <img className="profileCoverImg" src={`${PF}post/2.jpeg`}alt="" />
            <img className="profileUserImg" src={`${PF}person/1.jpeg`} alt="" />
        </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">Houssem Troudi</h4>
            <span className="profileInfoDesc">kklkl;kl;kl</span>
        </div>
      </div>
        <div className="profileRightBottom">
      <Feeed/>
      <Rightbar profile/>
     
      </div>
      </div>
      

      </div>
      
    </div>
  )
}
