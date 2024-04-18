import { Link} from "react-router-dom";
import {useAuth} from "../../context/Auth.jsx";
import {toast} from "react-hot-toast";

export const Header = () => {
    const [auth, setAuth] = useAuth()
    const handleLogout = () => {
        setAuth({
                ...auth, user:null,token:''
            })
        localStorage.removeItem('auth')
        toast.success("Logout successfully")
    }
    return (
  <div className={"flex flex-row bg-[#181825] justify-between p-4 text-xl"}>
  <div className={"font-bold"}>
   market.
  </div>
   <nav className={"child:px-2"}>
    <Link to={"/"}>Home</Link>
       <Link to={"/category"}>Category</Link>
       {
           !auth.user ? (<>
               <Link to={"/register"}>Register</Link>
               <Link to={"/login"}>Login</Link>
           </>) : (
               <>
                   <details className="dropdown dropdown-bottom dropdown-end">
                       <summary className="btn bg-red-300">{auth?.user?.name}</summary>
                       <ul className="p-2 shadow menu dropdown-content z-[1] bg-red-300 rounded-box">
                           <li><Link to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`}>Dashboard</Link></li>
                           <li><Link onClick={handleLogout} to={"/login"}>Logout</Link></li>
                       </ul>
                   </details>
               </>
           )
       }
   </nav>
  </div>
)
}
