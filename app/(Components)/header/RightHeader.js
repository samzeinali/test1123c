import Link from "next/link";

const RightHeader = () => {
  return (
    <div className="flex justify-evenly w-[33%] ml-[-25px] items-center">
      <Link className="text-[18px]" href={"/karshenasi"}>کارشناسی</Link>
      <Link className="text-[18px]" href={"/ditailing"}>دیتیلینگ</Link>
    </div>
  )
};

export default RightHeader;
