import { useState } from "react";
import { Fruit } from "./fruit";
import { Supplier } from "./supplier";
import { Employee } from "./employee";


export default function Register() {
  const [option, setOption] = useState("Frutas");
  const [component, setComponent] = useState(true);

  const changeDropdown = (event) => {
    setOption(event.target.value);
    setComponent(true);
  };

  const selectedComponent = () => {
    if (option === "Frutas") {
      return <Fruit />;
    }
    if (option === "Funcionarios") {
      return <Employee />;
    }
    if (option === "Fornecedores") {
      return <Supplier />;
    }

    return null;
  };

  return (
    <>
      <div className="relative pt-8 justify-center flex ">
        <div className="bg-white shadow-lg rounded-xl flex ">
          {/* TEXTO */}
          <div className="p-10 flex-col">
            <div className="text-center font-medium text-2xl pb-2">
              Cadastro
            </div>
            <select
              value={option}
              onChange={changeDropdown}
              className="justify-center w-full py-1 text-gray-600 text-center bg-white border-t  border-[#6c6868] outline-none appearance-none mb-4"
            >
              <option value="Frutas">Frutas</option>
              <option value="Funcionarios">Funcionarios</option>
              <option value="Fornecedores">Fornecedores</option>
            </select> 
            <div className="flex justify-center">
            {component && selectedComponent()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
