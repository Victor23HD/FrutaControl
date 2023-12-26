
import InputMask from 'react-input-mask';

export function Employee() {
  return (
    <form>
      <div className="grid grid-cols-2 divide-x-2 divide-black pb-6">
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
            placeholder="Ex. Analista de Vendas"
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

          <label className="font-semibold">Data de Admissão</label>
          <InputMask
            mask="99/99/9999"
            maskChar={null}
            type="text"
            className="border-b border-gray-600 outline-none mb-2"
            placeholder="Ex. 14/05/2024"
          />

          <label className="font-semibold ">Salário</label>
          <input
            type="text"
            className="border-b border-gray-600 outline-none mb-3"
            placeholder="Ex. R$ 5.000,00"
          />

          <label className="font-semibold  ">Departamento</label>
          <select className="border-b border-gray-600 outline-none ">
            <option value="vendas">Vendas</option>
            <option value="rh">Recursos Humanos</option>
            <option value="financeiro">Financeiro</option>
          </select>
        </div>
      </div>
      <button className="w-full bg-blue-400 rounded-lg font-semibold py-2">
        Enviar
      </button>
    </form>
  );
}
