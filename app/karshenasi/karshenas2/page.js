'use client'

import Header from "@/app/(Components)/header/Header";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const Karshenas2 =  () => {
    const param = useSearchParams();
    const [malek , setmalek] = useState("");
    const [karshenas , setkarshenas] = useState("شروین نیا");
    const [hazine , sethazine] = useState("");
    const [mahal , setmahal] = useState("در مرکز");
    const [phoneNumber , setphoneNeumber] = useState("");
    const [moarefSelect , setmoarefSelect] = useState("مراجعه حضوری");
    const [nameMachine , setnameMachine] = useState("");
    const [model , setmodel] = useState("");
    const [shasi , setshasi] = useState("");
    const [pelak , setpelak1] = useState("");
    const [pelak2 , setpelak2] = useState("");
    const [pelak3 , setpelak3] = useState("");
    const [pelak4 , setpelak4] = useState("");
    const [color , setcolor] = useState("");
    const [text , settext] = useState("");
    const [textkarshenas , settextkarshenas] = useState("");
    useEffect(() => {
        setkarshenas(param.get('karshenas'));
        sethazine(param.get('hazine'));
        setmahal(param.get('mahal'));
        setmalek(param.get('name'));
        setphoneNeumber(param.get('phone'));
        setmoarefSelect(param.get('moarefselect'));
        setnameMachine(param.get('nameMachine'));
        setmodel(param.get('model'));
        setshasi(param.get('shasi'));
        setpelak1(param.get('pelak1'));
        setpelak2(param.get('pelak2'));
        setpelak3(param.get('pelak3'));
        setpelak4(param.get('pelak4'));
        setcolor(param.get('color'));
    });
    const addText = (event) => {
        const changeText = event.target.innerText;
        console.log(changeText.innerText);
        const newText = text + " "+changeText;
        settext(newText)
    }
    const addTextKarshenas = (event) => {
        const textKarshenasi = event.target.value;
        settextkarshenas(textKarshenasi);
    }
    const addTextDasti = (event) => {
        const newEditText = event.target.value;
        settext(newEditText);
        console.log(text);
    }
    const addData = async() => {
        if (text == "") {
            alert("شما هنوز توضیحاتی وارد نکرده اید")
        } else {
            const data = {karshenas , mahal , malek , phoneNumber , moarefSelect , nameMachine , shasi , pelak , pelak2 , pelak3 , pelak4 , hazine , text , textkarshenas};
            try {
              const res = await axios.post('http://localhost:8080/cars' , data );
              alert(textkarshenas)
              alert("با موفقیت ذخیره شد");
              console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <div className="flex min-h-screen flex-col items-center p-24">
            <Header />
            <div className="flex justify-between w-[90%] mt-[20px]">
                <div className="w-[65%] flex flex-col">
                   <div className="w-[100%] flex items-center mb-[10px] justify-between bg-orange-50 border border-zinc-400 rounded-2xl p-5">
                        <p>اجزای بدنه : </p>
                        <div className="w-[90%] flex flex-wrap pt-[-10px]">
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">خودرو</div>
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">شاسی</div>
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">درب</div>
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">گلگیر</div>
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">درب کاپوت</div>
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">درب صندوق</div>
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">ستون</div>
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">سقف</div>
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">سینی</div>
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">پالونی</div>
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">سینی پشت گلگیر</div>
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">سینی پشت چراغ</div>
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">زه کنار</div>
                        </div>
                   </div>
                   <div className="w-[100%] mb-[10px] items-center flex justify-between bg-orange-50 border border-zinc-400 rounded-2xl p-5">
                        <p>سمت ها : </p>
                        <div className="flex w-[90%] pt-[-10px] flex-wrap">
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">سمت</div>
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">جلو</div>
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">عقب</div>
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">راست</div>
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">چپ</div>
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">راننده</div>
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">شاگرد</div>
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">میانی</div>
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">وسط</div>
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">سر</div>
                            <div onClick={addText} className="p-1 mt-[10px] border text-[14px] border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">وسط</div>
                        </div>
                   </div>
                   <div className="w-[100%] mb-[10px] items-center flex justify-between bg-orange-50 border border-zinc-400 rounded-2xl p-5">
                        <p>آسیب ها : </p>
                        <div className="flex w-[90%] pt-[-10px] flex-wrap">
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">بتونه رنگ</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">آبرنگ</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">لیسه گیری</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">تعویض</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">صافکاری بی رنگ</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">خوردگی</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">لکه رنگ</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">لیسه</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">جوشکاری</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">خط و خش</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">آفتاب سوختگی</div>
                        </div>
                   </div>
                   <div className="w-[100%] flex mb-[10px]  items-center justify-between bg-orange-50 border border-zinc-400 rounded-2xl p-5">
                        <p>حروف ربط و جمله بندی : </p>
                        <div className="flex w-[79%] flex-wrap pt-[-10px]">
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">دارای</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">است.</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">دارد.</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">شده</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">می باشد.</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">هست.</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">بوده</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">داشته</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">قسمت</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">قسمتی</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">از</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">به</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">در</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">را</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">تا</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">که</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">این</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 hover:scale-110 transition">جزئی</div>
                        </div>
                   </div>
                   <div className="w-[100%] flex mb-[10px] justify-between items-center bg-orange-50 border border-zinc-400 rounded-2xl p-5">
                        <p className="w-[11%]">اصطلاحات : </p>
                        <div className="flex w-[88%]">
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 transition">جهت بازدید اتاق به مراجع تعویض پلاک مراجعه شود.</div>
                            <div onClick={addText} className="p-1 mt-[10px] text-[14px] border border-zinc-800 rounded-lg mx-1 cursor-pointer text-center bg-orange-100 hover:bg-orange-200 transition">خودرو از نظر بدنه و شاسی کاملا سالم و بدون رنگ است.</div>
                        </div>
                   </div>

                </div>
                <div className="w-[34%] flex flex-col bg-orange-50 border border-zinc-400 rounded-2xl p-5">
                    <textarea className="w-full h-[45%] border border-zinc-900 rounded-lg p-3" value={text} onChange={addTextDasti} placeholder="توضیحات"></textarea>
                    <textarea className="w-full mt-[10px] h-[35%] border border-zinc-900 rounded-lg p-3" value={textkarshenas} onChange={addTextKarshenas} placeholder="توضیحات ویژه کارشناس"></textarea>
                    <div onClick={addData} className="w-[100%] text-center cursor-pointer hover:bg-orange-300 transition bg-orange-100 p-[10px] mt-[20px] border border-zinc-700 rounded-xl">
                        ثبت خودرو
                    </div>
                    <Link rel="noopener noreferrer" target="_blank" href={"/karshenasi/barge?name="+malek+"&phone="+phoneNumber+"&karshenas="+karshenas+"&moarefselect="+moarefSelect+"&nameMachine="+nameMachine+"&model="+model+"&shasi="+shasi+"&pelak1="+pelak+"&pelak2="+pelak2+"&pelak3="+pelak3+"&pelak4="+pelak4+"&color="+color+"&text="+text}>
                        <div className={"w-[100%] text-center cursor-pointer hover:bg-orange-300 transition bg-orange-100 p-[10px] mt-[20px] border border-zinc-700 rounded-xl"}>
                            چاپ برگه کارشناسی
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Karshenas2;