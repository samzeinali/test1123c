import Link from "next/link";

const LeftHeader = () => {
  return (
    <div className="w-[33%] mr-[-25px] flex justify-evenly items-center">
      <Link className="text-[18px]" href={"/mali"}>مالی</Link>
      <Link className="text-[18px]" href={"/manage"}>مدیریت</Link>
    </div>
  )
};

export default LeftHeader;
