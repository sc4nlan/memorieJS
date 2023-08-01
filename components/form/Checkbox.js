export default function CheckboxType({ handleOnChange, name, text=name}) {
    return (
        <>
            <div>
                <div className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ">{text}:</div>
                <fieldset>
                    <ul className="container flex grid grid-cols-2 2xl:grid-cols-4 mx-auto text-gray-700 font-medium">
                        <li>
                            <input
                                type="checkbox"
                                id="gestor"
                                onChange={handleOnChange}
                                value="gestor"
                                className="mx-1"
                            />
                            <label htmlFor="gestor" className="px-1">
                                Gestor
                            </label>
                        </li>


                        <li>
                            <input
                                type="checkbox"
                                id="admin"
                                onChange={handleOnChange}
                                value="admin"
                                className="mx-1"
                            />
                            <label htmlFor="admin" className="px-1">
                                Admin
                            </label>
                        </li>


                        <li>
                            <input
                                type="checkbox"
                                id="pesquisador"
                                onChange={handleOnChange}
                                value="pesquisador"
                                className="mx-1"
                            />
                            <label htmlFor="pesquisador" className="px-1">
                                Pesquisador
                            </label>
                        </li>


                        <li>
                            <input
                                type="checkbox"
                                id="padrao"
                                onChange={handleOnChange}
                                value="padrao"
                                className="mx-1"
                            />
                            <label htmlFor="padrao" className="px-1">
                                Padrão
                            </label>
                        </li>
                    </ul>
                </fieldset>
            </div>
        </>
    )
}