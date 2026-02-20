
export default function Select({ 
    label,
    name,
    options = [],

    }
){


    return(
        <div className="w-[320px]">


            {/* label si el label tiene contenido que es igual a turthy, sino es falsy y no muestra el label  */}
            {label && ( 
                <label className="text-caption mb-1 text-text-muted">
                    {label}
                </label>
            )}
            <select 
                name={name}
                className="
                    w-full
                    h-12
                    rounded-md
                    border
                    border-border 
                    px-4
                "
            >

            <option value="Seleccione un tipo de documento"> </option>
            {options.map((option)=> ( 
                <option key = {option.id} value={option.id}>
                {option.label}
            </option>
            ))};

            </select>

        </div>
    );

};