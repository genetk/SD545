import logo from "../../images/logo.jpeg";
import { useState, ChangeEvent, FormEvent } from "react";

import songsService from "../../apis/services/songs.service";
import { useNavigate } from "react-router-dom";
import backgroundimage from '../../images/backgroundimage.jpeg'


function Login() {
  const nav=useNavigate()
  const [username, setUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [error, setError] = useState("");

  const handleUser = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    SetPassword(e.target.value);
  };
  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
    const response = await songsService.login({
      username,
      password
  });
  console.log(response.data)
    if (response.status===200) {
      localStorage.setItem('accessToken',response.data.accessToken)
    
      nav('/welcome')
    }
  }catch(error){
    setError('incorrect username and password')
    nav('/login')
    }
    
  };

  return (
    <div  style={{ textAlign: "center", margin: "150px"}}>
      <form onSubmit={handleSubmit}>
        <img
          className="mb-4"
          src={logo}
          alt="Maharshi Logo"
          width="100"
          height="100"
        />
        <h3 className="h3 mb-3 fw-normal">Please sign in</h3>

        <div>
          <input type="text" placeholder="username" onChange={handleUser} />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
        </div>

        <button className="btn btn-primary mt-3" type="submit">
          Sign in
        </button>
        {error&&<p style={{color:'red'}}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
