import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Factbook</h3>
                <span className="loginDesc">
                Connect with friends and the world around you on Lamasocial.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="text" placeholder="Username" className="loginInput" />
                    <input type="Email" placeholder="Email" className="loginInput" />
                    <input type="Password" placeholder="password" className="loginInput" />
                    <input type="Password" placeholder="Renter-Password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Login to Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
