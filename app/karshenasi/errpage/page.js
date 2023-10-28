'use client'

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/app/(Components)/header/Header";

const ErrPage = () => {
    const param = useSearchParams();
    const [malek , setmalek] = useState("");
    const [karshenas , setkarshenas] = useState("");
    const [text , settext] = useState("");
    const [textKarshenas , settextkarshenas] = useState("");

    useEffect(() => {
        setmalek(param.get('name'));
        setkarshenas(param.get('karshenas'));
        settext(param.get('text'));
        settextkarshenas(param.get('textkarshenas'));
    });

    return (
        <div className="flex min-h-screen flex-col items-center p-24">
            <Header />
            <div className="flex w-[90%] mt-[20px]">
                <div className="border-zinc-900 border p-3 bg-white">{malek}</div>
                <div className="border-zinc-900 border p-3 bg-white">{karshenas}</div>
                <div className="border-zinc-900 border p-3 bg-white">متن کارشناسی : {" "+text}</div>
                <div className="border-zinc-900 border p-3 bg-white">{textKarshenas}</div>
            </div>
        </div>
    )
}
export default ErrPage;