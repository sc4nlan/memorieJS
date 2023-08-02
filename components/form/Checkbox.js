export default function CheckboxType({ handleOnChange, name, text=name, checks, value}) {

    return (
        <>
            <div>
                <div className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ">{text}:</div>
                <fieldset>
                    <ul className="container flex grid grid-cols-2 2xl:grid-cols-4 mx-auto text-gray-700">
                        {checks.map((check) => (
                            <li>
                                <input
                                    type="checkbox"
                                    id={check.id}
                                    onChange={handleOnChange}
                                    value={check.name}
                                    className="mx-1"                   
                                />
                                <label htmlFor={check.id} className="px-1">
                                    {check.name}
                                </label>                                
                            </li>
                        ))}
                    </ul>
                </fieldset>
            </div>
        </>
    )
}