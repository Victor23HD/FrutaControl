import Cookies from "js-cookie";
import axios from "axios";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

// eslint-disable-next-line react/prop-types
export default function ModelPage({ children }) {
  const token = Cookies.get("jwt-authorization");

  (async function () {
    console.log(token);
    await axios.get(`http://localhost:3000/users/${token}`).then((res) => {
      console.log(res);
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
