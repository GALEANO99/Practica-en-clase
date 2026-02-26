import Sidebar from "@/features/Main/components/Sidebar.jsx"

export default function Menu(){

    return (
    <div className="flex h-screen w-screen">

      {/* Sidebar */}
    <div className="w-[240px] bg-base-100 flex flex-col p-4">
        <div>
            {/* espacio para el logo del proyecto */}
        </div>
        <Sidebar />
    </div>

     {/* fondo de pantalla */}
    <div className="flex-1 bg-cover bg-center" 
        style={{ backgroundImage: "url(../src/assets/wallpaper-main.jpg)"}}>
    </div>
    </div>
    );
}
