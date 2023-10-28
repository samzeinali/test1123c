'use client'

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Barge = () => {
    const param = useSearchParams();
    const [malek , setmalek] = useState("");
    const [karshenas , setkarshenas] = useState("");
    const [hazine , sethazine] = useState("");
    const [mahal , setmahal] = useState("");
    const [phoneNumber , setphoneNeumber] = useState("");
    const [moarefName , setmoarefName] = useState("");
    const [moarefSelect , setmoarefSelect] = useState("");
    const [nameMachine , setnameMachine] = useState("");
    const [model , setmodel] = useState("");
    const [shasi , setshasi] = useState("");
    const [pelak1 , setpelak1] = useState("");
    const [pelak2 , setpelak2] = useState("");
    const [pelak3 , setpelak3] = useState("");
    const [pelak4 , setpelak4] = useState("");
    const [color , setcolor] = useState("");
    const [text , settext] = useState("");
    useEffect(() => {
        setkarshenas(param.get('karshenas'));
        sethazine(param.get('hazine'));
        setmahal(param.get('mahal'));
        setmalek(param.get('name'));
        setphoneNeumber(param.get('phone'));
        setmoarefName(param.get('moarefName'));
        setmoarefSelect(param.get('moarefSelect'));
        setnameMachine(param.get('nameMachine'));
        setmodel(param.get('model'));
        setshasi(param.get('shasi'));
        setpelak1(param.get('pelak1'));
        setpelak2(param.get('pelak2'));
        setpelak3(param.get('pelak3'));
        setpelak4(param.get('pelak4'));
        setcolor(param.get('color'));
        settext(param.get('text'));
        setTimeout(() => {
            window.print();
        }, 200);
    });
    return(
        <div className="flex min-h-screen flex-col items-center p-24 bg-white">
            <p className='absolute text-[12px] top-[247px] right-[410px]'>{malek}</p>
            <p className='absolute text-[12px] top-[280px] right-[410px]'>{phoneNumber}</p>
            <p className='absolute text-[12px] top-[315px] right-[410px]'>{shasi}</p>
            <p className='absolute text-[12px] top-[247px] right-[645px]'>{pelak1}</p>
            <p className='absolute text-[12px] top-[247px] right-[665px]'>{pelak2}</p>
            <p className='absolute text-[12px] top-[247px] right-[680px]'>{pelak3}</p>
            <p className='absolute text-[12px] top-[250px] right-[620px]'>{pelak4}</p>
            <p className='absolute text-[12px] top-[280px] right-[620px]'>{model}</p>
            <p className='absolute text-[12px] top-[310px] right-[620px]'>{nameMachine +" "+ color}</p>
            <p className='absolute top-[420px] w-[275px] text-[12px] right-[345px]'>{text}</p>
        </div>
    )
}

export default Barge;