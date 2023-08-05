import './online.css'

export default function Online({user}) {
  return (
    <li className="rightbarFriend">
        <div className="rigthbarProfileImgContainer">
            <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
            <span className="rightOnline"></span>
        </div>
        <span className="rigthbarUser">{user.username}</span>
    </li>
  )
}
