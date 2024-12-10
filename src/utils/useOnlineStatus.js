import { useEffect, useState } from "react";

const useOnlineStatus = () =>{

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })
        
        window.addEventListener("online",()=>{
            setOnlineStatus(false);
        })
    },[]);

    return onlineStatus;
}

export default useOnlineStatus;