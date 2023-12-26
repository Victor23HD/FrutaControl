import Cookies from "js-cookie";
import axios from "axios";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ModelPage({ children }) {

  let navigate = useNavigate();

  (async function () {
    await axios
      .get(
        `https://kq6xsqxnoa.execute-api.us-east-1.amazonaws.com/dev/FrutaControl`,
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": Cookies.get("Token"),
          },
        }
      )
      .then((res) => {
        return null;
      }).catch((error) => {
        navigate("/Login");
      });
  })();

  return (
    <>
      <div className="flex">
        <div className="h-screen border-r border-[border-gray-600] px-2">
          <Sidebar />
        </div>
        <div className="w-screen h-screen">
          <div className="flex flex-col items-center h-screen bg-gradient-to-bl from-orange-300 to-green-400">
            <Navbar />
            <div className="h-full">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
