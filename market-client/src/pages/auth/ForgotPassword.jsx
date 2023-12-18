import {Layout} from "../../components/Layout/Layout.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {toast} from "react-hot-toast";

const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [answer, setAnswer] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8080/api/v1/auth/forgot-password",
                {email, newPassword, answer})
            if (res && res.data.success) {
                toast.success(res.data.message)
                navigate("/login")
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            toast.error("Something went wrong")
        }
    }

    return <>
        <Layout title={"market | Forgot Password"}>
            <div className={"flex flex-col justify-center items-center"}>
                <h1 className={"text-2xl p-4"}>RESET PASSWORD</h1>
                <form
                    onSubmit={handleSubmit}
                    className={"child:p-4 flex flex-col child:border-2 child:m-2 child:rounded-xl"}>
                    <input type={"email"}
                           id={"email"}
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder={"Enter your email"}
                           required={true}/>
                    <input type={"password"}
                           id={"password"}
                           value={newPassword}
                           onChange={(e) => setNewPassword(e.target.value)}
                           placeholder={"Enter your new password"}
                           required={true}/>
                    <input type={"text"}
                           id={"answer"}
                           value={answer}
                           onChange={(e) => setAnswer(e.target.value)}
                           placeholder={"Enter your favorite sport"}
                           required={true}/>
                    <button className={"bg-blue-600 border-0 max-w-fit"}>Submit</button>
                </form>
            </div>
        </Layout>
    </>
};

export default ForgotPassword;