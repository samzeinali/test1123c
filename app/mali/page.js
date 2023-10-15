'use client'
import { useEffect, useState } from "react";
import Header from "../(Components)/header/Header";

const Mali = () => {
    const [loginstatus , setloginstatus] = useState(false);
    useEffect(() => {
        const logins = localStorage.getItem("userlogin");
        if (logins = "malitrue") {
            setloginstatus(true);
            console.log(logins);
        }
    });
    return (
        <div className="flex min-h-screen flex-col items-center p-24">
            <Header />
            <div className={(loginstatus)?"flex":"hidden"}>
                بحش مالی هنوز طراحی نشده است
            </div>
        </div>
    )
}

export default Mali;