import {
    CognitoUserPool,
    AuthenticationDetails,
    CognitoUser,
  } from "amazon-cognito-identity-js";
  import MainImage from "../../images/background.png";
  import LoginImage from "../../images/login_image.jpg";
  import { useNavigate } from "react-router-dom";
  import { useState } from "react";
  import Cookies from "js-cookie";
  import axios from "axios";
  
  function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    let navigate = useNavigate();
  
    const poolData = {
      UserPoolId: "us-east-1_8u8BOUAWd",
      ClientId: "79n6qn45s8duh7eu5ha6ji3acl",
    };
  
    const userPool = new CognitoUserPool(poolData);
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
  
      const authenticationData = {
        Username: email,
        Password: password,
      };
  
      const authenticationDetails = new AuthenticationDetails(authenticationData);
  
      const userData = {
        Username: email,
        Pool: userPool,
      };
  
      const cognitoUser = new CognitoUser(userData);
  
      await cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (session) => {
          const idToken = session.getIdToken().getJwtToken();
          axios
            .get(
              "https://e6rlxept92.execute-api.us-east-1.amazonaws.com/dev/FrutaControl",
              {
                headers: {
                  "Content-Type": "application/json",
                  "auth-token": idToken,
                },
              }
            )
            .then((response) => {
              if (response.status === 200) {
                  Cookies.set("Token",idToken);
                  Cookies.set("Email",email);
                navigate("/Dashboard");
              } else {
                console.log("Erro de credenciais");
              }
            })
            .catch((error) => {
              console.error("Erro na solicitação:", error);
            });
        },
        onFailure: (err) => {
          console.error("Authentication error: ", err);
        },
      });
    };
  
    return (
      <>
        <div
          className="flex items-center bg-center bg-cover h-screen w-screen"
          style={{ backgroundImage: `url(${MainImage})` }}
        >
          <div className="flex mx-auto bg-white rounded-lg text-[#121212] shadow-2xl max-sm:p-4 sm:grid sm:grid-cols-2 ">
            <div className="flex flex-col p-8">
              <div className="text-3xl text-center font-medium mb-7">Login</div>
              <label className="mb-1 text-lg font-medium">E-mail</label>
              <input
                className="flex w-full p-1 border-b border-gray-900 outline-none mb-3"
                placeholder="user@gmail.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <label className="mb-1 text-lg font-medium">Senha</label>
              <input
                className="w-full p-1 border-b border-gray-900 outline-none mb-5"
                placeholder="Senha12345@"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
              />
              <button
                className="w-full bg-gradient-to-tb from bg-green-500 from to-green-600 text-lg p-2 rounded-lg text-white font-semibold"
                onClick={handleFormSubmit}
              >
                Enviar
              </button>
            </div>
            <div className="hidden sm:flex relative">
              <div
                className="w-full bg-cover rounded-r-lg"
                style={{
                  backgroundImage: `url(${LoginImage})`,
                }}
              ></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center  rounded-r-lg backdrop-blur-sm bg-black/15">
                <div className="text-center text-white text-2xl">
                  <div className="text-4xl font-serif pt-7 ">Fruta-Control</div>
                  <div className=" text-xl font-thin">[ Qualidade garantida ]</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Login;