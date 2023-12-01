import AlertBootstrap from "react-bootstrap/Alert";
import { useState, useEffect } from "react";

function Alert({mensaje}){

    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
        if (mensaje==="Colaborador agregado !"){
            setIsSuccess(true)
           
        } else {
            setIsSuccess(false)
            
        }
    }, [mensaje])

    return (
       <>
            
            {
                mensaje!==""
                ?  
                <AlertBootstrap variant={isSuccess? "success": "danger"} > {mensaje} </AlertBootstrap>         
                : ""
            }   
       </>
    )
}

export default Alert;
