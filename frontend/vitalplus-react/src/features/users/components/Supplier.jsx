import Input from "@/shared/components/Input";
import "../../../styles/semantic.css";


export default function ProveedorForm(){
    return (
        <div className="min-h-screen gap-6 flex items-center justify-center ">
            {/* headear de la pagina */}
            {/*  */}
            {/* Formulario */}
        <div className="flex flex-col gap-4 flex-1">
            
            <Input
                    label="Nombre proveedor"
                    type="text"
                    placeholder="Ingrese el nombre del proveedor"
                />
            <Input
                    label="Nombre contacto (representante)"
                    type="text"
                    placeholder="Ingrese el nombre del contacto"
                />
            <Input
                    label="ciudad"
                    type="text"
                    placeholder="Ingrese la ciudad del proveedor"
                />
        </div>

        {/* columna 2  */}

        <div className="flex flex-col gap-4 flex-1">
            
            <Input
                    label="NIT"
                    type="text"
                    placeholder="Ingrese el numero de telefono"
                />
            <Input
                    label="Telefono contacto"
                    type="tel"
                    placeholder="Ingrese el numero del proveedor"
                />
            <Input
                    label="Direccion"
                    type="text"
                    placeholder="Ingrese la direccion del proveedor"
                />
        </div>

        {/* columna 3 */}
        <div className="flex flex-col gap-4 flex-1">
            
            <Input
                    label="Razon social"
                    type="text"
                    placeholder="Ingrese la razon social"
                />
            <Input
                    label="Correo electronico contacto"
                    type="email"
                    placeholder="Ingrese el correo electronico"
                />
                    
        
        </div>
        </div>
    );
}