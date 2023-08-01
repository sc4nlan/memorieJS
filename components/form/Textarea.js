export default function Textarea({ name, placeholder, handleOnChange, value}){
    return(
        <div className="-mx-3 ">

            <div className="px-3">
                
                <label htmlFor={name} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    {name}:
                </label>

                <textarea
                    className="w-full h-[12rem] bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"       
                    type="text"
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
