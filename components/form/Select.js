export default function Select({name, options, handleOnChange, value}){
    return(
        <>
            <div>
                <label className="flex flex-itens uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 keep-all">{name}:</label>

                <select
                    className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-blue-500 focus:border-blue-500 block">
                    name={name} 
                    id={name} 
                    onChange={handleOnChange}
                    value={value || ''}

                    <option selected disabled>Selecione uma opção</option>
                    
                    {options.map((option) => (
                        <option value={option.id} key={option.id}>
                            {option.name}
                        </option>
                    ))}
                </select>   
            </div>
        </>
    )
}

