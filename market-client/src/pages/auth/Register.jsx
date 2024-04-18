import {Layout} from "../../components/Layout/Layout.jsx";
import {useState} from "react";
import {toast} from "react-hot-toast";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [answer, setAnswer] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
       e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8080/api/v1/auth/register",
                {name, email, password, phone, address, answer})
            if (res && res.data.success){
                toast.success(res.data.message)
                navigate("/login")
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            toast.error("Something went wrong")
        }
    }

    return (<>
            <Layout title={"market | Register"}>
                <div className={"flex flex-col justify-center items-center"}>
                    <h1 className={"text-2xl p-4"}>REGISTER PAGE</h1>
                    <form
                        onSubmit={handleSubmit}
                        className={"flex flex-col items-center"}>
                        <div className={"child:p-2 flex flex-col child:m-2 child:rounded-md child:bg-[#11111b]"}>
                            <input type={"text"}
                                   id={"name"}
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}
                                   placeholder={"Enter your name"}
                                   required={true}/>
                            <input type={"tel"}
                                   id={"phone"}
                                   value={phone}
                                   onChange={(e) => setPhone(e.target.value)}
                                   placeholder={"Enter your phone number"}
                                   required={true}/>
                            <input type={"text"}
                                   id={"address"}
                                   value={address}
                                   onChange={(e) => setAddress(e.target.value)}
                                   placeholder={"Enter your address"}
                                   required={true}/>
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
                            <input type={"text"}
                                   id={"answer"}
                                   value={answer}
                                   onChange={(e) => setAnswer(e.target.value)}
                                   placeholder={"Which is your favorite sport?"}
                                   required={true}/>
                        </div>
                        <button className={"bg-[#181825] p-2 rounded-md border-0 max-w-fit"}>Submit</button>
                    </form>
                </div>
            </Layout>
        </>
    )
}
export default Register
