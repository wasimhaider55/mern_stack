import React,{useState} from 'react'


const Login = () => {
    const [username, setusername] = useState("");
    const [password, setpassowrd] = useState("");
  return (
    <div>
        <form>
            <input 
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={e => setusername (e.target.value)}
            />

            <input 
            type="password"
            name="password"
            id="password"
            value={password}
            onChange = {e => setpassowrd(e.target.value)}
            />
        </form>
    </div>
  )
}

export default Login