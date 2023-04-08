import Image from "next/image";

import { AiOutlineSearch } from "react-icons/ai";
import { BsPlayBtn } from "react-icons/bs";
import { HiOutlineUserGroup, HiHome } from "react-icons/hi";
import { BiStore } from "react-icons/bi";
import { IoLogoGameControllerB } from "react-icons/io";
import HeaderIcons from "./HeaderIcons";

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Leftside */}
      <div className="flex items-center">
        <Image
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
          alt="Facebook logo"
          width={70}
          height={70}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          {/* <SearchIcon className="h-6 text-gray-500" /> */}
          <AiOutlineSearch className="h-6 text-gray-500" size="1.5rem" />
          <input
            type="text"
            className="flex ml-2 items-center bg-transparent focus:outline-none placeholder-gray-500 flex-shrink"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcons Icon={HiHome} active={true} />
          <HeaderIcons Icon={BsPlayBtn} active={false} />
          <HeaderIcons Icon={BiStore} active={false} />
          <HeaderIcons Icon={HiOutlineUserGroup} active={false} />
          <HeaderIcons Icon={IoLogoGameControllerB} active={false} />
        </div>
      </div>

      {/* Rightside */}
    </div>
  );
}

export default Header;
