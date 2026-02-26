// import UserForm from "@/features/users/components/UserForm"
// import DeleteCounter from "../shared/components/DeleteCounter"
// import DeleteUseEffect from "@/shared/components/DeleteUseEffect"
import Menu from "@/features/Main/page/MainMenu" 
// import ProveedorForm from "../features/users/components/Supplier"

export default function App(){
  return(
    <div className="grid grid-cols-1 gap-6 justify-items-center">
        {/* <h1 className="bg-bran text-brand-soft text-2xl font-bold">
            Vital-Plus
        </h1> */}
        <div>
        {/* <UserForm></UserForm> */}
        <Menu></Menu>
        {/* <ProveedorForm></ProveedorForm> */}
        </div>
        {/* // formulario para la creacion de proveedores  */}
        {/* <ProveedorForm></ProveedorForm> */}
        <div>  
          {/* <DeleteCounter/>
          <DeleteUseEffect/> */}
        </div>  
    </div>
  )
}

