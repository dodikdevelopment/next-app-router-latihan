"use client"

import { useState } from "react";

export default function AdminProductPage(){

    const [status, setStatus] = useState("");
    
    const revalidate = async () => {
        const res = await fetch("http://localhost:3000/api/revalidate?tag=product&secret=AsYnCron12356", {
            method: "POST",
        });

        if(!res.ok){
            setStatus("Revalidate failed");
        }else{
        const response = await res.json();
        if(response.revalidate){
            setStatus("Revalidate success");
        }
    }
};

    return (
        <div>
            <h1>Admin Product Page</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-base" onClick={revalidate}>Revalidate</button>
        </div>
    );
}