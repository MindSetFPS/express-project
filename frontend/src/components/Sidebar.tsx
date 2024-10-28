import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { Avatar } from "flowbite-react";

export default function SidebarComponent() {
    return(
        <Sidebar aria-label="Default sidebar example" className="h-[100vh]">
            <Avatar img=""  status="online" rounded statusPosition="top-right" size="lg" />
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        Inicio
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="dark">
                        Productos
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiInbox} label="3">
                        Ventas
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                        Usuarios
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiShoppingBag}>
                        Envíos
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiArrowSmRight}>
                        Categorías
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiTable}>
                        Soporte
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                        Codigos de Descuento
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="dark">
                        Moderación
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiInbox} label="3">
                        Imagenes
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}