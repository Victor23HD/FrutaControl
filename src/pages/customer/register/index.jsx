import InputMask from "react-input-mask";
import { useState } from "react";

export default function CustomerRegister() {
  const dateNow = new Date();
  const currentDate = `${dateNow.getDate()}/${
    dateNow.getMonth() + 1
  }/${dateNow.getFullYear()}`;

  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [category, setCategory] = useState("varejo");
  const [street, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [complement, setComplement] = useState("");

  const sendForm = async (e) => {
    e.preventDefault();

    const Customer = {
      Company: company,
      Contact: contact,
      Email: email,
      Telephone: telephone,
      Category: category,
      Street: street,
      Neighborhood: neighborhood,
      Complement: complement,
      CurrentDate: currentDate,
    };

    console.log(Customer);
  };

  return (
    <div className="relative pt-8 justify-center flex ">
      <div className="bg-white shadow-lg rounded-xl flex">
        <div className="p-10 flex-col divide-y-2 divide-black ">
          <div className="text-center font-medium text-2xl pb-8 ">
            [ Clientes ]
          </div>
          <div className="flex justify-center ">
            <form>
              <div className="grid grid-cols-2 divide-x-2 divide-gray-600  py-6">
                {/* COL 01 */}
                <div className="flex flex-col space-y-4 pr-4">
                  {/* EMPRESA */}
                  <label className="flex flex-row font-semibold items-center">
                    Empresa
                    <div className="font-bold text-gray-400 pl-1"> * </div>{" "}
                  </label>

                  <div className="flex flex-col h-8">
                    <input
                      type="text"
                      required
                      minLength={5}
                      className="peer border-b text-sm border-gray-600 outline-none "
                      placeholder="Ex. Assaí atacadista"
                      value={company}
                      onChange={(event) => setCompany(event.target.value)}
                    />
                    <span
                      className={`${
                        company !== ""
                          ? "peer-valid:hidden"
                          : "peer-invalid:visible hidden"
                      }  text-[12px] text-red-500 font-bold`}
                    >
                      - Empresa Inválida!
                    </span>
                  </div>

                  {/* CONTATO */}
                  <label className="flex flex-row font-semibold items-center">
                    Contato
                    <div className="font-bold text-gray-400  pl-1">
                      {" "}
                      *{" "}
                    </div>{" "}
                  </label>
                  <div className="flex flex-col h-8">
                    <input
                      type="text"
                      required
                      minLength={6}
                      maxLength={20}
                      className="peer border-b text-sm border-gray-600 outline-none "
                      placeholder="Ex. João Silva"
                      value={contact}
                      onChange={(event) => setContact(event.target.value)}
                    />
                    <span
                      className={`${
                        contact !== ""
                          ? "peer-valid:hidden"
                          : "peer-invalid:visible hidden"
                      }  text-[12px] text-red-500 font-bold`}
                    >
                      - Contato Inválido!
                    </span>
                  </div>

                  {/* EMAIL */}
                  <label className="flex flex-row font-semibold items-center">
                    E-mail{" "}
                    <div className="font-bold text-gray-400  pl-1"> * </div>{" "}
                  </label>
                  <div className="flex flex-col h-8">
                    <input
                      type="email"
                      required
                      className="peer border-b text-sm border-gray-600 outline-none "
                      placeholder="Ex. joao.silva@frutacontrol.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    <span
                      className={`${
                        email !== ""
                          ? "peer-valid:hidden"
                          : "peer-invalid:visible hidden"
                      } text-[12px] text-red-500 font-bold`}
                    >
                      - E-mail Inválido!
                    </span>
                  </div>
                  {/* TELEFONE */}
                  <label className="flex flex-row font-semibold items-center">
                    {" "}
                    Telefone{" "}
                    <div className="font-bold text-gray-400  pl-1"> * </div>
                  </label>
                  <div className="flex flex-col h-6">
                    <input
                      type="int"
                      required
                      minLength={11}
                      className="peer border-b text-sm border-gray-600 outline-none "
                      placeholder="Ex. 1198765-4321"
                      value={telephone}
                      onChange={(event) => setTelephone(event.target.value)}
                    />
                    <span
                      className={`${
                        telephone !== ""
                          ? "peer-valid:hidden"
                          : "peer-invalid:visible hidden"
                      } text-[12px] text-red-500 font-bold`}
                    >
                      - Telefone Inválido!
                    </span>
                  </div>
                </div>
                {/* COL 02 */}
                <div className="flex flex-col space-y-4 pl-4">
                  {/* CATEGORIA */}
                  <label className="flex flex-row font-semibold items-center">
                    Categoria{" "}
                    <div className="font-bold text-gray-400  pl-1"> * </div>{" "}
                  </label>
                  <div className="flex flex-col h-8">
                    <select
                      className="peer border-b text-sm border-gray-600 outline-none "
                      value={category}
                      required
                      onChange={(event) => setCategory(event.target.value)}
                    >
                      <option value="varejo">Varejo</option>
                      <option value="atacado">Atacado</option>
                    </select>
                    <span
                      className={`${
                        category !== ""
                          ? "peer-valid:hidden"
                          : "peer-invalid:visible hidden"
                      } text-[12px] text-red-500 font-bold`}
                    >
                      - Categoria Inválida!
                    </span>
                  </div>

                  <label className="flex flex-row font-semibold items-center ">
                    Rua<div className="font-bold text-gray-400  pl-1"> * </div>{" "}
                  </label>
                  <div className="flex flex-col h-8">
                    <input
                      type="text"
                      required
                      minLength={6}
                      className="peer border-b text-sm border-gray-600 outline-none"
                      placeholder="R. Gramado Verde"
                      value={street}
                      onChange={(event) => setStreet(event.target.value)}
                    />
                    <span
                      className={`${
                        street !== ""
                          ? "peer-valid:hidden"
                          : "peer-invalid:visible hidden"
                      } text-[12px] text-red-500 font-bold`}
                    >
                      - Rua Inválida!
                    </span>
                  </div>

                  <label className="flex flex-row font-semibold items-center">
                    Bairro
                    <div className="font-bold text-gray-400  pl-1">
                      {" "}
                      *{" "}
                    </div>{" "}
                  </label>
                  <div className="flex flex-col h-8">
                  <input
                    type="text"
                    required
                    minLength={6}
                    className="peer border-b text-sm border-gray-600 outline-none mb-2"
                    placeholder="Ex. Jardim Rio Azul"
                    value={neighborhood}
                    onChange={(event) => setNeighborhood(event.target.value)}
                  />
                   <span
                      className={`${
                        neighborhood !== ""
                          ? "peer-valid:hidden"
                          : "peer-invalid:visible hidden"
                      } text-[12px] text-red-500 font-bold`}
                    >
                      - Rua Inválida!
                    </span>
                  </div>
                 

                  <label className="font-semibold ">Complemento</label>
                  <input
                    type="text"
                    className="border-b text-sm border-gray-600 outline-none "
                    placeholder="Ex. Portão amarelo"
                    value={complement}
                    onChange={(event) => setComplement(event.target.value)}
                  />
                </div>
              </div>
              <button
                className="w-full bg-blue-400 rounded-lg font-semibold mt-3 py-2"
                onClick={sendForm}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
