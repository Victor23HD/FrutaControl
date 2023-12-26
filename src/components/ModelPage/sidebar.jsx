import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Sidebar() {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const dropdown = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  const showDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="mx-auto flex flex-col items-center justify-center py-4 text-[#121212]">
        <div
          className="mb-2 h-20 w-20 rounded-full border-2 border-black bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://avatars.githubusercontent.com/u/103453296?v=4')",
          }}
        ></div>
        <div className="flex flex-col items-center">
          <div className="font-medium text-xl">Victor Oliveira</div>
          <div className="border-b text-sm font-thin">victor@gmail.com</div>
        </div>
      </div>
      <div className="flex w-full rounded-lg border-t hover:border-black  border-[#939191] p-2 transition duration-300 hover:bg-slate-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
          />
        </svg>

        <button className="px-3" onClick={() => navigate("/Supplier")}>
          Fornecedores
        </button>
      </div>
      <div className="flex rounded-lg border-t hover:border-black  border-[#939191] p-2 transition duration-300 hover:bg-slate-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>

        <button className="px-3" onClick={() => navigate("/Report")}>
          Relatórios
        </button>
      </div>

      <div className="flex rounded-lg border-t hover:border-black  border-[#939191] p-2 transition duration-300 hover:bg-slate-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
          />
        </svg>
        <button className="px-3" onClick={() => navigate("/Register")}>
          Cadastros
        </button>
      </div>
      <div className="flex rounded-lg border-t hover:border-black  border-[#939191] p-2 transition duration-300 hover:bg-slate-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
        <button className="px-3" onClick={() => navigate("/Stock")}>
          Estoque
        </button>
      </div>
      <div className="flex rounded-lg border-t  hover:border-black  border-[#939191] p-2 transition duration-300 hover:bg-slate-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
          />
        </svg>
        <div className="px-3" onClick={() => navigate("/Sale")}>
          Vendas
        </div>
      </div>

      <div
        className={`flex flex-col rounded-lg  ${
          isOpen ? "border border-black divide-y-2 divide-black" : "border-t "
        } hover:border-black border-[#939191] p-2 `}
      >
        <button
          onClick={showDropdown}
          className={`flex flex-row space-x-3 items-center ${
            isOpen ? "mb-2" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <div className="flex items-center">Clientes</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`w-5 h-5  ${isOpen ? "transform rotate-180" : ""}`}
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <motion.div variants={dropdown} animate={isOpen ? "show" : "hidden"}>
          <ul className=" border-gray-900 pt-2 space-y-2 font-medium">
            <motion.li
              variants={item}
              className="border hover:bg-slate-100 border-black rounded-md  p-2 "
            >
              <button onClick={() => {showDropdown(); navigate("/Customer/Register");}}>
                |- Registrar
              </button>
            </motion.li>
            <motion.li
              variants={item}
              className="border hover:bg-slate-100 border-black rounded-md  p-2 "
            >
              <button onClick={() => {showDropdown();  navigate("/Customer/List");}}>
                |-Listar
              </button>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </>
  );
}
