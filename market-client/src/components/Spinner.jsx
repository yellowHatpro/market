import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {CgSpinner} from "react-icons/cg";

function Spinner({path = "login"}) {
    const [count, setCount] = useState(3)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const interval = setInterval(()=>{
            setCount(prevState => --prevState)
        },1000);
        count === 0 && navigate(`/${path}`, {
            state: location.pathname
        })
        return () => clearInterval(interval)
    }, [count, navigate, location,path]);
    return (
        <div className={"flex flex-col justify-center items-center align-middle min-h-[100vh]"}>
            <h1 className={"text-center p-2"}> Redirecting in {count} seconds</h1>
            <CgSpinner className={"animate-spin text-3xl"}/>
        </div>
    );
}

export default Spinner;
