import { motion } from "framer-motion";
import { useState } from "react";
import Cookies from "js-cookie";
import InputMask from "react-input-mask";
import axios from "axios";

export default function CustomerRegister() {
  const dateNow = new Date();
  const currentDate = `${
    dateNow.getDate() <= 9 ? `0${dateNow.getDate()}` : `${dateNow.getDate()}`
  }/${
    dateNow.getMonth() + 1 <= 9
      ? `${dateNow.getMonth() + 1}0`
      : `${dateNow.getMonth() + 1}`
  }/${dateNow.getFullYear()}`;

  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [category, setCategory] = useState("varejo");
  const [cep, setCep] = useState();
  const [street, setStreet] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [complement, setComplement] = useState("");

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

  const sendForm = async (e) => {
    e.preventDefault();

    const idToken = Cookies.get("Token");

    await axios
      .post(
        "https://kq6xsqxnoa.execute-api.us-east-1.amazonaws.com/dev/TesteTeste",

        {
          Company: company,
          Contact: contact,
          Email: email,
          Cnpj: cnpj,
          Telephone: telephone,
          Category: category,
          Cep: cep,
          Street: street,
          Neighborhood: neighborhood,
          Complemet: complement,
          CurrentDate: currentDate,
          headers: {
            "Content-Type": "application/json",
            "auth-token": idToken,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    console.log(idToken);
  };

  return (
    <div className="relative pt-8 justify-center flex ">
      <div className="bg-white shadow-lg rounded-2xl flex">
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
                      className="peer border-b text-sm border-b-gray-600 outline-none"
                      placeholder="Ex. Assaí atacadista"
                      value={company}
                      onChange={(event) => setCompany(event.target.value)}
                    />
                    <motion.span
                      variants={dropdown}
                      animate={
                        company !== "" && company.length <= 6
                          ? "show"
                          : "hidden"
                      }
                      className={`${
                        company !== ""
                          ? "peer-valid:hidden"
                          : "peer-invalid:visible hidden"
                      }  text-[12px] text-red-500 font-bold`}
                    >
                      - Empresa Inválida!
                    </motion.span>
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
                    <motion.span
                      variants={dropdown}
                      animate={
                        contact !== "" && contact.length < 6 ? "show" : "hidden"
                      }
                      className={`${
                        contact !== ""
                          ? "peer-valid:hidden"
                          : "peer-invalid:visible hidden"
                      }  text-[12px] text-red-500 font-bold`}
                    >
                      - Contato Inválido!
                    </motion.span>
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
                    <motion.span
                      variants={dropdown}
                      animate={
                        email !== "" && email.length < 13 ? "show" : "hidden"
                      }
                      className={`${
                        email !== ""
                          ? "peer-valid:hidden"
                          : "peer-invalid:visible hidden"
                      } text-[12px] text-red-500 font-bold`}
                    >
                      - E-mail Inválido!
                    </motion.span>
                  </div>
                  {/* CNPJ */}
                  <label className="flex flex-row font-semibold items-center">
                    CNPJ
                    <div className="font-bold text-gray-400  pl-1"> * </div>
                  </label>
                  <div className="flex flex-col h-8 ">
                    <InputMask
                      mask={"99.999.999/9999-99"}
                      type="text"
                      required
                      minLength={14}
                      className="peer border-b text-sm border-gray-600 outline-none "
                      placeholder="Ex. 12.345.678/0001-00"
                      value={cnpj}
                      onChange={(event) => setCnpj(event.target.value)}
                    />
                    <motion.span
                      variants={dropdown}
                      animate={
                        cnpj !== "" && cnpj.length < 14 ? "show" : "hidden"
                      }
                      className={`${
                        cnpj !== ""
                          ? "peer-valid:hidden"
                          : "peer-invalid:visible hidden"
                      } text-[12px] text-red-500 font-bold`}
                    >
                      - CNPJ Inválido!
                    </motion.span>
                  </div>
                  {/* TELEFONE */}
                  <label className="flex flex-row font-semibold items-center">
                    Telefone
                    <div className="font-bold text-gray-400  pl-1"> * </div>
                  </label>
                  <div className="flex flex-col h-6">
                    <InputMask
                      mask="(99) 99999-9999"
                      type="tel"
                      required
                      minLength={15}
                      className="peer border-b text-sm border-gray-600 outline-none "
                      placeholder="Ex. 1198765-4321"
                      value={telephone}
                      onChange={(event) => setTelephone(event.target.value)}
                    />
                    <motion.span
                      variants={dropdown}
                      animate={
                        telephone !== "" && telephone.length < 15
                          ? "show"
                          : "hidden"
                      }
                      className={`${
                        telephone !== ""
                          ? "peer-valid:hidden"
                          : "peer-invalid:visible hidden"
                      } text-[12px] text-red-500 font-bold`}
                    >
                      - Telefone Inválido!
                    </motion.span>
                  </div>
                </div>
                {/* COL 02 */}
                <div className="flex flex-col space-y-4 pl-4">
                  {/* CATEGORIA */}
                  <label className="flex flex-row font-semibold items-center">
                    Categoria{" "}
                    <div className="font-bold text-gray-400 pl-1"> * </div>{" "}
                  </label>
                  <div className="flex flex-col h-8">
                    <select
                      className="peer border-b text-sm border-gray-600 outline-none "
                      value={category}
                      required
                      maxLength={11}
                      onChange={(event) => setCategory(event.target.value)}
                    >
                      <option value="varejo">Varejo</option>
                      <option value="atacado">Atacado</option>
                    </select>
                    <motion.span
                      variants={dropdown}
                      animate={
                        category !== "" && category.length < 11
                          ? "show"
                          : "hidden"
                      }
                      className={`${
                        category !== ""
                          ? "peer-valid:hidden"
                          : "peer-invalid:visible hidden"
                      } text-[12px] text-red-500 font-bold`}
                    >
                      - Categoria Inválida!
                    </motion.span>
                  </div>

                  {/* CEP */}
                  <label className="flex flex-row font-semibold items-center">
                    CEP
                    <div className="font-bold text-gray-400  pl-1"> * </div>
                  </label>
                  <div className="flex flex-col h-8">
                    <InputMask
                      mask="99999-999"
                      type="text"
                      maxLength={20}
                      className="peer border-b text-sm border-gray-600 outline-none "
                      placeholder="Ex. 1198765-4321"
                      value={cep}
                      onChange={(event) => setCep(event.target.value)}
                    />
                    <motion.span
                      variants={dropdown}
                      animate={cep !== "" && cep < 5 ? "show" : "hidden"}
                      className={`${
                        cep !== ""
                          ? "peer-valid:hidden"
                          : "peer-invalid:visible hidden"
                      } text-[12px] text-red-500 font-bold`}
                    >
                      - CEP Inválido!
                    </motion.span>
                  </div>
                  {/* STREET */}
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
                    <motion.span
                      variants={dropdown}
                      animate={
                        street !== "" && street.length < 6 ? "show" : "hidden"
                      }
                      className={`${
                        street !== ""
                          ? "peer-valid:hidden"
                          : "peer-invalid:visible hidden"
                      } text-[12px] text-red-500 font-bold`}
                    >
                      - Rua Inválida!
                    </motion.span>
                  </div>
                  {/* NEIGHBORHOOD */}
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
                      className="peer border-b text-sm border-gray-600 outline-none"
                      placeholder="Ex. Jardim Rio Azul"
                      value={neighborhood}
                      onChange={(event) => setNeighborhood(event.target.value)}
                    />
                    <motion.span
                      variants={dropdown}
                      animate={
                        neighborhood !== "" && neighborhood.length < 6
                          ? "show"
                          : "hidden"
                      }
                      className={`${
                        neighborhood !== ""
                          ? "peer-valid:hidden"
                          : "peer-invalid:visible hidden"
                      } text-[12px] text-red-500 font-bold`}
                    >
                      - Bairro Inválida!
                    </motion.span>
                  </div>

                  {/* COMPLEMENTO */}
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
