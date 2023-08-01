//Adicionar o required

function Input({ name, type, placeholder, handleOnChange, value, text=name}){

    return(
        <div className="-mx-3 ">
            <div className="px-3">

                <label htmlFor={name} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    {text}:
                </label>

                <input 
                    className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"       
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    id={name}
                    onChange={handleOnChange}
                    value={value}
                />
            </div>
        </div>
    )
}

export default Input;