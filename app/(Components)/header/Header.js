import LeftHeader from "./LeftHeader";
import LogoHeader from "./LogoHeader";
import RightHeader from "./RightHeader";

const Header = () => {
  return (
    <div className="shadow-lg border-zinc-950 border-[1px] rounded-3xl p-[5px] bg-orange-100 w-[90%] mt-[-50px] flex justify-evenly">
      <RightHeader />
      <LogoHeader />
      <LeftHeader />
    </div>
  );
};

export default Header;
