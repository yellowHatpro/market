import {Link} from "react-router-dom";

const AdminMenu = () => {
    return (
            <div className={"flex flex-col"}>
                <text className={"text-center"}>Admin Panel</text>
                <Link to={"/dashboard/admin/create-category"} className={""}>
                    Create Category
                </Link>
                <Link to={"/dashboard/admin/create-product"} className={""}>
                    Create Product
                </Link>
                <Link to={"/dashboard/admin/users"} className={""}>
                    Users
                </Link>

            </div>
    )
}

export default AdminMenu
