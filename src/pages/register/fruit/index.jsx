import InputMask from "react-input-mask";

export function Fruit() {
  return (
    <form>
      <div className="grid grid-cols-2 divide-x-2 divide-black pb-6">
        {/* COL 01 */}
        <div className="flex flex-col space-y-4 pr-4">
          <label className="font-semibold">Nome</label>
          <input
            type="text"
            className="border-b border-gray-600 outline-none mb-2"
            placeholder="Ex. Maça"
          />

          <label className="font-semibold">Tipo</label>
          <input
            type="text"
            className="border-b border-gray-600 outline-none mb-2"
            placeholder="Ex. Cítrica, Tropical"
          />
          <label className="font-semibold">Quantidade</label>

          <input
            type="text"
            className="border-b border-gray-600 outline-none mb-2"
            placeholder="Ex. 150KG"
          />

          <label className="font-semibold">Preço</label>
          <input
            type="text"
            className="border-b border-gray-600 outline-none mb-4"
            placeholder="Ex. R$ 49,99"
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

          <label className="font-semibold">Vencimento</label>
          <InputMask
            mask="99/99/9999"
            maskChar={null}
            type="text"
            className="border-b border-gray-600 outline-none"
            placeholder="Ex. 14/05/2024"
          />
          <label className="font-semibold ">Peso por unidade</label>
          <input
            type="text"
            className="border-b border-gray-600 outline-none mb-2"
            placeholder="Ex. 0.2KG"
          />
          <label className="font-semibold">Categoria</label>
          <select className="border-b border-gray-600 outline-none mb-4">
            <option value="frutas">Frutas</option>
            <option value="legumes">Legumes</option>
            <option value="verduras">Verduras</option>
          </select>
        </div>
      </div>
      <button className="w-full bg-blue-400 rounded-lg font-semibold py-2">
        Enviar
      </button>
    </form>
  );
}
