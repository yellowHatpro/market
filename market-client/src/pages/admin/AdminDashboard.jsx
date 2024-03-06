import {Layout} from "../../components/Layout/Layout.jsx";
import AdminMenu from "../../components/Layout/AdminMenu.jsx";

const AdminDashboard = () => {
    return (
        <Layout>
            <div className={"flex flex-row justify-around items-center"}>
                <AdminMenu/>
                <div>content</div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;
