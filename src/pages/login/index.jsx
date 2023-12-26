import MainImage from "../../images/background.png";
import LoginImage from "../../images/login_image.jpg"

function Login(){
    return ( <div
        className="flex items-center bg-center bg-cover h-screen w-screen"
        style={{ backgroundImage: `url(${MainImage})` }}
      >
        <div className="flex mx-auto bg-white rounded-lg text-[#121212] shadow-2xl max-sm:p-4 sm:grid sm:grid-cols-2 ">
          <div className="flex flex-col p-8">
            <div className="text-2xl text-center font-medium mb-4">Login</div>
            <label className="mb-1 font-medium">E-mail</label>
            <input
              className="flex w-full p-1 border-b border-gray-900 outline-none mb-3"
              placeholder="user@gmail.com"
            />
            <label className="mb-1 font-medium">Senha</label>
            <input
              className="w-full p-1 border-b border-gray-900 outline-none mb-5"
              placeholder="Senha12345@"
            />
            <button className="w-full bg-gradient-to-tb from bg-green-500 from to-green-600 text-lg p-2 rounded-lg text-white font-semibold">
              Enviar
            </button>
          </div>
          <div className="hidden sm:flex relative">
            <div
              className="w-full bg-cover rounded-r-lg"
              style={{
                backgroundImage:`url(${LoginImage})`
              }}
            ></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center  rounded-r-lg backdrop-blur-sm bg-black/10">
              <div className="text-center text-white text-2xl">
                <div className="text-4xl font-serif pt-7 ">Fruta-Control</div>
                <div className="text-lg font-thin">[ Qualidade garantida ]</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
}

export default Login;