import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import './App.css';
import axios from "axios"

function App() {
  
  const responseSuccessGoogle = async (res) => {
    console.log(res.Lu)
    let info = await axios.post(
      `http://localhost:4000/mm/singup`,
      {
        username:res.Lu.tf,
        email: res.Lu.Bv
      },
    );
    console.log(info, "data")
    
  }
  const responseErrorGoogle =(res)=>{
  }

  const responseFacebook = async (res)=>{
    console.log(res)

    console.log(res.name)
    let info = await axios.post(
      `http://localhost:4000/mm/singup`,
      {
        name:res.name,
        userID:res.userID
      },
    );
    console.log(info, "data")
  }

return (
    <div className="App">
      <div className="App-header">
        <h1>
          Login with Google
        </h1>


        <GoogleLogin
    clientId="292402598329-hg10fnjl6panpmbnatfrtk5pkumq53dd.apps.googleusercontent.com"
    buttonText="  Login with Google   "
    onSuccess={responseSuccessGoogle}
    onFailure={responseErrorGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>
    <h1>
      Login with facebook</h1>
      <FacebookLogin
      appId="2993180237569264"
      autoLoad={true}
      callback={responseFacebook} />
    </div>
  );
}

export default App;
