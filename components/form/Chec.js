function CheckboxType({ handleOnChange, value }) {
    const isChecked = (checkboxValue) => checkboxValue === value;
  
    return (
      <>
        <div>
          <h3 className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 keep-all">
            Tipo:
          </h3>
          <ul className="mx-auto flex items-center grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 text-sm font-medium text-gray-700 focus:outline-none focus:bg-white">
            <li className="flex items-center rounded-lg py-1">
              <input
                type="checkbox"
                id="gestor"
                onChange={handleOnChange}
                checked={isChecked('gestor')}
                value="gestor"
              />
              <label htmlFor="gestor-checkbox" className="px-1">
                Gestor
              </label>
            </li>
  
            <li className="flex items-center rounded-lg py-1">
              <input
                type="checkbox"
                id="administrador"
                onChange={handleOnChange}
                checked={isChecked('administrador')}
                value="administrador"
              />
              <label htmlFor="administrador-checkbox" className="px-1">
                Admin
              </label>
            </li>
  
            <li className="flex items-center rounded-lg py-1">
              <input
                type="checkbox"
                id="pesquisador"
                onChange={handleOnChange}
                checked={isChecked('pesquisador')}
                value="pesquisador"
              />
              <label htmlFor="pesquisador-checkbox" className="px-1">
                Pesquisador
              </label>
            </li>
  
            <li className="flex items-center rounded-lg py-1">
              <input
                type="checkbox"
                id="padrao"
                onChange={handleOnChange}
                checked={isChecked('padrao')}
                value="padrao"
              />
              <label htmlFor="padrao-checkbox" className="px-1">
                Padrão
              </label>
            </li>
          </ul>
        </div>
      </>
    );
  }
  
  export default CheckboxType;
  