import Input from "@/shared/components/Input";
import Button from "@/shared/components/Button";

export default function UserForm(){

    // const handleNameChange = (e) => {
    //     console.log("Nombre del usuario: " +  e.target.value)
    // };

    const handleEmailBlur = (e) => {
        console.log("Nombre del usuario: " +  e.target.value)
    };
    
    // Una validacion basica
    const handleNameChange = (e) => {
        console.log("Nombre del usuario: " +  e.target.value)

        if (e.target.value === ""){
            console.log(`Este campo no puede estar vacio `)
        }

    // const handleSubmit = () => {
    //     console.log("Se hizo click en el boton : ")
    //     if (e.target.value === ""){
    //         console.log(`Este campo no puede estar vacio `)
    //     }

    };

        return(

            <div >
                {/* Formulario para crear el usuario */}
                <form >

                    <Input
                        label="Nombre"
                        placeholder="Ingrese su nombre"
                        onChange={handleNameChange}
                    >
                    </Input>

                    <Input
                        label="Email"
                        placeholder="Ingrese su correo"
                        onChange={handleEmailBlur}
                    >
                    </Input>

                    {/* //botones en componentes */}
                    <div className="flex gap-4 items-center justify-center">
                        <Button 
                        variant = "secundary"
                        size ="sm"
                        onClick={()=> console.log("Oprimio Guardar")}>
                            Cancelar
                        </Button>
    
                        <Button 
                        variant = "primary"
                        size ="md"
                        type ="submit"
                        onClick={()=> console.log("Oprimio cancelar")} 
                        >
                            Guardar
                        </Button>

                        
                    </div>

                </form>
            </div>

        )

    }