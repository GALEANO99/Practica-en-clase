import UserForm from "@/features/users/components/UserForm"
// import DeleteCounter from "../shared/components/DeleteCounter"
// import ProveedorForm from "@/features/users/components/Supplier.jsx"
import DeleteUseEffect from "@/shared/components/DeleteUseEffect"
export default function App(){
  return(
    <div className="grid grid-cols-1 gap-6 justify-items-center">
      {/* <h1 className="bg-bran text-brand-soft text-2xl font-bold">
          Vital-Plus
      </h1> */}
      <div>
      <UserForm></UserForm>
      </div>
      {/* // formulario para la creacion de proveedores  */}
      {/* <ProveedorForm></ProveedorForm> */}
      <div>  
        {/* <DeleteCounter /> */}
        //
        <DeleteUseEffect/>
      </div>  
    </div>
  )
} 