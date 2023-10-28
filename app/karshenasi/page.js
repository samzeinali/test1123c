'use client'

import Header from "@/app/(Components)/header/Header";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Karshenas1 = () => {
    const [malek , setmalek] = useState("");
    const [finalCarName , setfinalCarName] = useState([]);
    const [searchValue , setsearchValue] = useState("");
    const [searchresBox , setsearchresBox] = useState("hidden");
    const [carsname , setcarsname] = useState([]);
    const [searchcar , setsearchcar] = useState("hidden");
    const [carerr , setcarerr] = useState({malek : "",text:"",textKarshenas:"",karshenasName:""});
    const [errbox , seterrbox] = useState("hidden")
    const [lastcars , setlastcars] = useState([]);
    const [mahal , setmahal] = useState("در مرکز");
    const [phoneNumber , setphoneNeumber] = useState("");
    const [karshenas , setkarshenas] = useState("شروین نیا");
    const [moarefSelect , setmoarefSelect] = useState("مراجعه حضوری");
    const [nameMachine , setnameMachine] = useState("");
    const [model , setmodel] = useState("");
    const [shasi , setshasi] = useState("");
    const [pelak1 , setpelak1] = useState("");
    const [pelak2 , setpelak2] = useState("");
    const [pelak3 , setpelak3] = useState("");
    const [pelak4 , setpelak4] = useState("");
    const [color , setcolor] = useState("");
    const [hanzine , sethazine] = useState('');
    const [errshow , seterrshow] = useState('hidden');
    useEffect(() => {
        const fetchAllCars = async () => {
            const res = await axios.get('http://localhost:8080/cars');
            const nameRes = await axios.get('http://localhost:8080/carname');
            const finalicars = res.data;
            const carNames = nameRes.data;
            setcarsname(carNames);
            setlastcars(finalicars);
        }
        fetchAllCars();
    },[1]);
    const changemalek = (event) => {
        setmalek(event.target.value);
    }
    const changephoneNumber = (event) => {
        setphoneNeumber(event.target.value);
    }
    const changekarshenas = (event) => {
        setkarshenas(event.target.value);
    }
    const changemorefSelect = (event) => {
        setmoarefSelect(event.target.value);
    }
    const changenameMachine = (event) => {
        setnameMachine(event.target.value);
    }
    const changemodel = (event) => {
        setmodel(event.target.value);
    }
    const changeshasi = (event) => {
        setshasi(event.target.value);
        const newvalue = event.target.value;
        lastcars.forEach((item , index)=>{
            const shasinew = item.shasi;
            if (shasinew == newvalue) {
                seterrbox("flex");
                const errcar = lastcars[index];
                setcarerr(errcar);
                seterrshow('flex');
            }
            console.log("shasi is : " , shasinew);
        })
    }
    const changepelak1 = (event) => {
        setpelak1(event.target.value);
    }
    const changepelak2 = (event) => {
        setpelak2(event.target.value);
    }
    const changepelak3 = (event) => {
        setpelak3(event.target.value);
    }
    const changepelak4 = (event) => {
        setpelak4(event.target.value);
    }
    const changecolor = (event) => {
        setcolor(event.target.value);
    }
    const setcolorhandler = (event) => {
        setcolor(event.target.innerText)
    }
    const addHazine = (event) => {
        const selectnumber = event.target.innerText;
        const newhazine = hanzine + selectnumber;
        sethazine(newhazine)
    }
    const changehazine = (event) => {
        sethazine(event.target.value)
    }
    const changemahal = (event) => {
        setmahal(event.target.value)
    }
    const openSearchBox = (event) => {
        setsearchcar("flex");
    }
    const searchHandler = (event) => {
        const newValue = event.target.value;
        setsearchValue(newValue);
        if (newValue.length > 2) {
            console.log(carsname[1]);
            let newcars = [];
            for (let index = 0; index < carsname.length; index++) {
                let car = carsname[index].name;
                newcars.push(car)
            }
            const lastcar =  newcars.filter((value , index)=>{
                return value.includes(newValue)
            })
            setfinalCarName(lastcar);
            setsearchresBox("flex")
        } else {
            setsearchresBox("hidden")
        }
    }
    const closeSearchBox = () => {
        setsearchcar("hidden")
    }
    const carselect = (event) =>{
        const carName = event.target.innerText;
        setnameMachine(carName);
        setsearchcar("hidden");
    }
    return (
        <div className="flex min-h-screen flex-col items-center p-24">
            <Header />
            <div className="flex justify-between w-[90%] mt-[20px]">
                <div className="w-[48%] flex flex-col bg-orange-50 border border-zinc-400 rounded-2xl p-5">
                    <h2 className="w-full text-center text-[20px]">مشخصات مالک و کارشناس</h2>
                    <label >نام مالک : </label>
                    <input value={malek} onChange={changemalek} placeholder="نام و نام خانوادگی" className="w-[100%] bg-orange-100 p-[10px] mt-[10px] border border-zinc-700 rounded-xl" />
                    <label className="mt-[10px]">شماره تماس : </label>
                    <input value={phoneNumber} onChange={changephoneNumber} placeholder="شماره بدون صفر" className="w-[100%] mb-[10px] bg-orange-100 p-[10px] mt-[10px] border border-zinc-700 rounded-xl" />
                    <div className="mt-10px">
                        <label className="mt-[10px]">نوع معرفی : </label>
                        <select onChange={changemorefSelect} className="mr-[10px] border border-zinc-800 rounded-lg px-3 py-[3px]">
                            <option value="مراجعه حضوری">مراجعه حضوری</option>
                            <option value="معرفی آشنایان">معرفی آشنایان</option>
                            <option value="مشتری قدیمی">مشتری قدیمی</option>
                            <option value="معرفی همکار">معرفی همکار</option>
                            <option value="اینستاگرام">اینستاگرام</option>
                        </select>
                        <label className="mt-[10px] mr-[20px]">نوع کارشناسی : </label>
                        <select className="mr-[10px] border border-zinc-800 rounded-lg px-3 py-[3px]" onChange={changemahal}>
                            <option>در مرکز</option>
                            <option>در محل</option>
                        </select>
                    </div>
                    <div className="w-full flex mt-[15px]">
                        <label className="mt-[10px]">نام کارشناس : </label>
                        <select className="mr-[10px] border border-zinc-800 rounded-lg px-3 py-[3px]" onChange={changekarshenas}>
                            <option>شروین نیا</option>
                            <option>کفاش</option>
                        </select>
                    </div>
                    <div className="w-full flex mt-[15px] justify-center items-center">
                        <label className="mt-[10px] w-[30%]">هزینه کارشناسی : </label>
                        <input value={hanzine} onChange={changehazine} placeholder="هزینه کارشناسی به تومان" className="w-[100%] bg-orange-100 p-[10px] mt-[10px] border border-zinc-700 rounded-xl"/>
                    </div>
                    <div className="flex flex-row-reverse mt-[15px]">
                        <div onClick={addHazine} className="w-[10%] h-[45px] mx-[3px] cursor-pointer bg-orange-100 hover:bg-orange-200 p-3 border border-zinc-900 rounded-lg">1</div>
                        <div onClick={addHazine} className="w-[10%] h-[45px] mx-[3px] cursor-pointer bg-orange-100 hover:bg-orange-200 p-3 border border-zinc-900 rounded-lg">2</div>
                        <div onClick={addHazine} className="w-[10%] h-[45px] mx-[3px] cursor-pointer bg-orange-100 hover:bg-orange-200 p-3 border border-zinc-900 rounded-lg">3</div>
                        <div onClick={addHazine} className="w-[10%] h-[45px] mx-[3px] cursor-pointer bg-orange-100 hover:bg-orange-200 p-3 border border-zinc-900 rounded-lg">4</div>
                        <div onClick={addHazine} className="w-[10%] h-[45px] mx-[3px] cursor-pointer bg-orange-100 hover:bg-orange-200 p-3 border border-zinc-900 rounded-lg">5</div>
                        <div onClick={addHazine} className="w-[10%] h-[45px] mx-[3px] cursor-pointer bg-orange-100 hover:bg-orange-200 p-3 border border-zinc-900 rounded-lg">6</div>
                        <div onClick={addHazine} className="w-[10%] h-[45px] mx-[3px] cursor-pointer bg-orange-100 hover:bg-orange-200 p-3 border border-zinc-900 rounded-lg">7</div>
                        <div onClick={addHazine} className="w-[10%] h-[45px] mx-[3px] cursor-pointer bg-orange-100 hover:bg-orange-200 p-3 border border-zinc-900 rounded-lg">8</div>
                        <div onClick={addHazine} className="w-[10%] h-[45px] mx-[3px] cursor-pointer bg-orange-100 hover:bg-orange-200 p-3 border border-zinc-900 rounded-lg">9</div>
                        <div onClick={addHazine} className="w-[10%] h-[45px] mx-[3px] cursor-pointer bg-orange-100 hover:bg-orange-200 p-3 border border-zinc-900 rounded-lg">0</div>
                        <div onClick={addHazine} className="w-[10%] h-[45px] mx-[3px] cursor-pointer bg-orange-100 hover:bg-orange-200 p-3 border border-zinc-900 rounded-lg">00</div>
                        <div onClick={addHazine} className="w-[10%] h-[45px] mx-[3px] cursor-pointer bg-orange-100 hover:bg-orange-200 p-3 border border-zinc-900 rounded-lg">000</div>
                    </div>
                </div>
                <div className="w-[48%] flex flex-col bg-orange-50 border border-zinc-400 rounded-2xl p-5">
                    <h2 className="w-full text-center text-[20px]">مشخصات خودرو</h2>
                    <label className="mt-[10px]">نام خودرو : </label>
                    <div className="w-full flex pt-[15px]">
                        <input value={nameMachine} onChange={changenameMachine} placeholder="نام خودرو" className="w-[90%] bg-orange-100 p-[10px] mt-[10px] border border-zinc-700 rounded-xl"/>
                        <div onClick={openSearchBox} className="flex w-[8%] cursor-pointer justify-center items-center text-[19px] rounded-lg">?</div>
                    </div>
                    <div className="flex mt-[10px] justify-between items-center">
                        <div className="w-[35%]">
                            <label>مدل : </label>
                            <input value={model} onChange={changemodel} placeholder="سال تولید" className="w-[75%] bg-orange-100 p-[10px] mt-[10px] border border-zinc-700 rounded-xl" />
                        </div>
                        <div className="w-[65%] flex items-center justify-between">
                            <label>شماره شاسی : </label>
                            <input onChange={changeshasi} value={shasi} placeholder="شماره 6 رقمی" className="w-[65%] bg-orange-100 p-[10px] mt-[10px] border border-zinc-700 rounded-xl"/>
                            <Link rel="noopener noreferrer" target="_blank" href={"/karshenasi/errpage?name="+ carerr.malek +"&karshenas="+carerr.karshenasName+"&text="+carerr.text+"&textkarshenas="+carerr.textKarshenas} className={errshow}><div className="w-[25px] bg-red-400 text-zinc-950 rounded-lg border-zinc-800 border mx-[2px] text-center text-[18px]">!</div></Link>
                        </div>
                    </div>
                    <div className="mt-[10px]">
                        <label>شماره پلاک : </label>
                        <input value={pelak4} onChange={changepelak4} placeholder="11" className="w-[9%] bg-orange-100 p-[10px] mx-[3px] mt-[10px] border border-zinc-700 rounded-xl"/>
                        <input value={pelak1} onChange={changepelak1} placeholder="11" className="w-[12%] bg-orange-100 p-[10px] mx-[3px] mt-[10px] border border-zinc-700 rounded-xl"/>
                        <input value={pelak2} onChange={changepelak2} placeholder="الف" className="w-[12%] bg-orange-100 p-[10px] mx-[3px] mt-[10px] border border-zinc-700 rounded-xl" />
                        <input value={pelak3} onChange={changepelak3} placeholder="111" className="w-[18%] bg-orange-100 p-[10px] mt-[3px] mx-[10px] border border-zinc-700 rounded-xl" />
                    </div>
                    <div className="mt-[10px] flex justify-between items-center">
                        <div className="flex items-center">
                            <label className="ml-[10px] w-[30%]">رنگ خودرو : </label>
                            <input onChange={changecolor} value={color} placeholder="رنگ خودرو" className="w-[55%] ml-[10px] bg-orange-100 p-[10px] border border-zinc-700 rounded-xl" />
                            <div onClick={setcolorhandler} className="w-[10%] h-[45px] mx-[5px] cursor-pointer bg-white p-3 text-[0px] border border-zinc-900 rounded-lg">سفید</div>
                            <div onClick={setcolorhandler} className="w-[10%] h-[45px] mx-[5px] cursor-pointer bg-black p-3 text-[0px] border border-zinc-900 rounded-lg">مشکی</div>
                            <div onClick={setcolorhandler} className="w-[10%] h-[45px] mx-[5px] cursor-pointer bg-zinc-600 p-3 text-[0px] border border-zinc-900 rounded-lg">خاکستری</div>
                            <div onClick={setcolorhandler} className="w-[10%] h-[45px] mx-[5px] cursor-pointer bg-[#D3D3D3] p-3 text-[0px] border border-zinc-900 rounded-lg">نقره ای</div>
                            <div onClick={setcolorhandler} className="w-[10%] h-[45px] mx-[5px] cursor-pointer bg-[#ffe4e1] p-3 text-[0px] border border-zinc-900 rounded-lg">بژ</div>
                        </div>
                    </div>
                    <Link href={"/karshenasi/karshenas2?name="+malek+"&phone="+phoneNumber+"&karshenas="+karshenas+"&moarefselect="+moarefSelect+"&nameMachine="+nameMachine+"&model="+model+"&shasi="+shasi+"&pelak1="+pelak1+"&pelak2="+pelak2+"&pelak3="+pelak3+"&pelak4="+pelak4+"&color="+color+"&hazine="+hanzine+"&mahal="+mahal}>
                        <div className="w-[100%] text-center cursor-pointer hover:bg-orange-300 transition bg-orange-100 p-[10px] mt-[20px] border border-zinc-700 rounded-xl">
                            ثبت و ادامه
                        </div>
                    </Link>
                </div>
            </div>
            <div className={searchcar+" "+"absolute flex-col border border-zinc-900 rounded-2xl z-50 w-[80%] bg-white"}>
                <div className="w-full flex justify-between p-6 border-b-zinc-500 bg-zinc-100">
                    <input value={searchValue} className="w-[60%] border border-zinc-900 rounded-2xl p-[10px]" onChange={searchHandler} placeholder="نام خودرو را وارد کنید"/>
                    <div onClick={closeSearchBox} className="w-[20px] h-[20px] cursor-pointer">X</div>
                </div>
                <div className={searchresBox + " " + "flex-wrap"}>
                    {finalCarName.map((value , index)=>{
                        return (
                            <div key={index} className="border border-zinc-900 p-5 bg-green-50 rounded-2xl cursor-pointer m-[10px]" onClick={carselect}>
                                {value}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Karshenas1;