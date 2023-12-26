import InputMask from "react-input-mask";

export default function CustomerRegister() {
  return (
    <div className="relative pt-8 justify-center flex ">
      <div className=" bg-white shadow-lg rounded-xl flex ">
        <div className="p-10 flex-col divide-y-2 divide-black ">
          <div className="text-center font-medium text-2xl pb-8 ">[ Clientes ]</div>
          <div className="flex justify-center ">
            <form>
              <div className="grid grid-cols-2 divide-x-2 divide-gray-600  py-6">
                {/* COL 01 */}
                <div className="flex flex-col space-y-4 pr-4">
                  <label className="font-semibold">Nome</label>
                  <input
                    type="text"
                    className="border-b border-gray-600 outline-none mb-4"
                    placeholder="Ex. João da Silva"
                  />

                  <label className="font-semibold">Cargo</label>
                  <input
                    type="text"
                    className="border-b border-gray-600 outline-none mb-4"
                    placeholder="Ex. Gerente de Compras"
                  />

                  <label className="font-semibold">E-mail</label>
                  <input
                    type="email"
                    className="border-b border-gray-600 outline-none mb-4"
                    placeholder="Ex. joao.silva@example.com"
                  />

                  <label className="font-semibold">Telefone</label>
                  <InputMask
                    mask="(99) 99999-9999"
                    type="tel"
                    className="border-b border-gray-600 outline-none mb-6"
                    placeholder="Ex. (11) 98765-4321"
                  />
                </div>
                {/* COL 02 */}
                <div className="flex flex-col space-y-4 pl-4">
                  <label className="font-semibold">Código</label>
                  <InputMask
                    mask="#99999"
                    type="text"
                    className="border-b border-gray-600 outline-none "
                    placeholder="Ex. #10000"
                  />

                  <label className="font-semibold">Data de Cadastro</label>
                  <InputMask
                    mask="99/99/9999"
                    maskChar={null}
                    type="text"
                    className="border-b border-gray-600 outline-none mb-2"
                    placeholder="Ex. 14/05/2024"
                  />

                  <label className="font-semibold ">Limite de Crédito</label>
                  <input
                    type="text"
                    className="border-b border-gray-600 outline-none "  
                    placeholder="Ex. R$ 10.000,00"
                  />

                  <label className="font-semibold">Categoria</label>
                  <select className="border-b border-gray-600 outline-none ">
                    <option value="varejo">Varejo</option>
                    <option value="atacado">Atacado</option>
                    <option value="distribuidor">Distribuidor</option>
                  </select>
                </div>
              </div>
              <button className="w-full bg-blue-400 rounded-lg font-semibold py-2">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
