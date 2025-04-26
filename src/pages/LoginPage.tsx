import { useState } from "react"

const LoginPage = () => {

    const [user, setUser] = useState('')

    return (
        <div className="login_container">
            <div className='login_card'>
                <h1 className="login_title">Welcome to CodeLeap network!</h1>
                <div className="login_form">
                    <label className="login_label" htmlFor="username">Please enter your username</label>
                    <input onChange={(e) => setUser(e.target.value)} type="text" placeholder="John Doe" className="login_input" id="username"/>
                </div>
                <span className={`login_button ${user === '' ? 'disabled' : ''}`}>Enter</span>
            </div>
        </div>
    )
}

export default LoginPage