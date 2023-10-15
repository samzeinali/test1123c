"use client"
import Header from "./(Components)/header/Header";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [userName , setUserName] = useState("");
  const [password , setpassword] = useState("");
  const route = useRouter()

  const usernameChange = (event) => {
    setUserName(event.target.value);
  }
  const passwordChange = (event) => {
    setpassword(event.target.value);
  }
  const submitClick = () => {
    if (userName == "hanafi" && password == "NewPassword@1") {
      localStorage.setItem("userlogin", "karshenastrue");
      route.push('/karshenasi');
    } else {
      alert("نام کاربری یا رمز عبور اشتباه است")
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Header />
      <div className=" shadow-lg border-zinc-950 border-[1px] rounded-3xl bg-orange-50 w-[90%] mt-[10px] flex flex-col justify-evenly p-[25px]">
          <h2 className="w-[100%] text-[24px] mb-1">
            توجه :
          </h2>
          <p>
            این اپلیکیشن در انحصار مجموعه حنفی کار بوده و برای استفاده از امکانات آن بایستی یا کاربر محموعه حنفی کار باشید و یا اشتراک خریداری نمایید. در صورتی که یوزر کارشناس هستید از طریق بخش کارشناس و در صورتی که نمایندگی ثبت شده هستید برای ورود از بخش نمایندگی اقدام نمایید.
          </p>
      </div>
      <div className="w-[90%] flex justify-between">
        <div className="border-zinc-950 shadow-md border-[1px] rounded-3xl bg-orange-50 w-[49%] mt-[10px] flex flex-col justify-evenly p-[25px]" >
          <p className="w-full text-center text-[18px] font-[vazirBold]">ورود کاربران </p>
          <div className="w-full h-[1px] bg-zinc-400 my-[10px]"></div>
          <label className="pr-[10px] mt-[10px]">نام کاربری :</label>
          <input onChange={usernameChange} value={userName} id="username" className="w-[100%] bg-orange-100 p-[10px] mt-[10px] border border-zinc-700 rounded-xl" placeholder="نام کاربری یا شماره همراه" />
          <label className="pr-[10px] mt-[20px]">رمز ورود :</label>
          <input onChange={passwordChange} id="password" value={password} className="w-[100%] bg-orange-100 p-[10px] mt-[10px] border border-zinc-700 rounded-xl" placeholder="رمز ورود ..." />
          <div onClick={submitClick} id="buttonUser" className="w-[100%] hover:bg-orange-300 transition bg-orange-100 p-[10px] mt-[20px] border border-zinc-700 rounded-xl" >ورود به پنل کاربری</div>
        </div>
        <div className="border-zinc-950 border-[1px] shadow-md rounded-3xl bg-orange-50 w-[49%] mt-[10px] flex flex-col justify-evenly p-[25px]" >
          <p className="w-full text-center text-[18px] font-[vazirBold]">ورود به پنل نمایندگی - به زودی ...</p>
          <div className="w-full h-[1px] bg-zinc-400 my-[10px]"></div>
          <label className="pr-[10px] mt-[10px]">نام نمایندگی : </label>
          <input disabled className="w-[100%] bg-orange-100 p-[10px] mt-[10px] border border-zinc-700 rounded-xl" placeholder="نام نمایندگی یا کد نمایندگی" />
          <label className="pr-[10px] mt-[20px]">رمز ورود :</label>
          <input disabled className="w-[100%] bg-orange-100 p-[10px] mt-[10px] border border-zinc-700 rounded-xl" placeholder="رمز ورود ..." />
          <button disabled className="w-[100%] hover:bg-gray-200 transition bg-orange-100 p-[10px] mt-[20px] border border-zinc-700 rounded-xl" >ورود به پنل نمایندگی</button>
        </div>
      </div>
    </main>
  );
}
