import {Layout} from "../../components/Layout/Layout.jsx";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {toast} from "react-hot-toast";
import {useAuth} from "../../context/Auth.jsx";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const location = useLocation()
    const [auth, setAuth] = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8080/api/v1/auth/login",
                {email, password,})
            if (res && res.data.success) {
                toast.success(res.data.message)
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token:res.data.token
                })
                localStorage.setItem('auth',JSON.stringify(res.data))
                navigate(location.state || "/")
                console.log("location" + location.state)
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            toast.error("Something went wrong")
        }
    }

    return <>
            <Layout title={"market | Login"}>
                <div className={"flex flex-col justify-center items-center"}>
                    <h1 className={"text-2xl p-4"}>LOGIN PAGE</h1>
                    <form
                        onSubmit={handleSubmit}
                        className={"flex flex-col"}>
                        <div className={"child:p-2 flex flex-col child:my-2 child:rounded-md child:bg-[#11111b]"}>
                            <input type={"email"}
                                   id={"email"}
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   placeholder={"Enter your email"}
                                   required={true}/>
                            <input type={"password"}
                                   id={"password"}
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   placeholder={"Enter your password"}
                                   required={true}/>
                        </div>
                        <button className={"bg-[#181825] p-2 rounded-md border-0 max-w-fit my-2"}>Submit</button>
                        <button className={"bg-[#181825] p-2 rounded-md border-0 max-w-fit my-2"}
                                onClick={() => {
                                    navigate("/forgot-password")
                                }}>Forgot Password?
                        </button>
                    </form>
                </div>
            </Layout>
    </>
}

export default Login
