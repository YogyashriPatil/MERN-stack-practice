export function SidebarClass1(){
    return <div className="flex">
        <div className="bg-red-200 h-screen w-96 hidden md:block">
            Sidebar
        </div>
        <div className="bg-green-200 w-full h-screen">
            Content
        </div>
    </div>
}