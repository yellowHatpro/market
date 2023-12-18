import { Routes, Route } from 'react-router-dom';
import {Home, About, Contact, PageNotFound, Category, Register, Login, ForgotPassword} from './pages'
import Dashboard from "./pages/user/Dashboard.jsx";
import PrivateRoute from "./components/routes/PrivateRoute.jsx";
import AdminRoute from "./components/routes/AdminRoute.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";


export default function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path={"/dashboard"} element={<PrivateRoute/> }>
          <Route path={"user"} element={<Dashboard/>}/>
      </Route>
      <Route path={"/dashboard"} element={<AdminRoute/>}>
        <Route path={"admin"} element={<AdminDashboard/>}/>
      </Route>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path={"/category"} element={<Category/>}/>
      <Route path={"/register"} element={<Register/>}/>
      <Route path={"/login"} element={<Login/>}/>
      <Route path={"/forgot-password"} element={<ForgotPassword/>} />
      <Route path="/*" element={<PageNotFound/>}/>

    </Routes>
  </>)
}

