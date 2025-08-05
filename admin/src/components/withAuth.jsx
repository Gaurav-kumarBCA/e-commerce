import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { useEffect } from "react";

const withAuth=(WrappedComponent)=>(props)=>{
    const navigate=useNavigate();
    const {user,loading}=useAuth();
    useEffect(()=>{
        if(!user && !loading){
            navigate("/login");
        }
    },[loading]);
    return user ? <WrappedComponent {...props}/> : null
};


export default withAuth;