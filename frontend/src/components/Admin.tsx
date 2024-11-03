import AdminContent from "./AdminContent";
import SidebarComponent from "./Sidebar";

interface Props {
    type? : string;
}

const Admin: React.FC<Props> = ({type}) => {
    return (
        <div className="flex items-center h-dvh">
            <SidebarComponent />
            <AdminContent type={type} />
        </div>
    )
}

export default Admin