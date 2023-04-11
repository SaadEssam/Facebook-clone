import Image from "next/image";

import { AiOutlineSearch } from "react-icons/ai";
import { BsPlayBtn } from "react-icons/bs";
import { HiOutlineUserGroup, HiHome } from "react-icons/hi";
import { BiStore } from "react-icons/bi";
import { IoLogoGameControllerB } from "react-icons/io";

import HeaderIcons from "./HeaderIcons";

import { signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Leftside */}
      <div className="flex items-center">
        <Image
          src="https://img.icons8.com/fluency/96/null/facebook-new.png"
          alt="Facebook logo"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <AiOutlineSearch className="h-6 text-gray-500" size="1.5rem" />
          <input
            type="text"
            className="hidden md:inline-flex ml-2 items-center bg-transparent focus:outline-none placeholder-gray-500 flex-shrink"
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
      <div className="flex items-center sm:space-x-2 justify-end">
        <div className="icon group">
          <svg width="20" height="20" viewBox="0 0 50 50" className="svg-icon">
            <path d="M 25 2 C 12.300781 2 2 11.601563 2 23.5 C 2 29.800781 4.898438 35.699219 10 39.800781 L 10 48.601563 L 18.601563 44.101563 C 20.699219 44.699219 22.800781 44.898438 25 44.898438 C 37.699219 44.898438 48 35.300781 48 23.398438 C 48 11.601563 37.699219 2 25 2 Z M 27.300781 30.601563 L 21.5 24.398438 L 10.699219 30.5 L 22.699219 17.800781 L 28.601563 23.699219 L 39.101563 17.800781 Z"></path>
          </svg>
        </div>
        <div className="icon group">
          <svg width="20" height="20" viewBox="0 0 50 50" className="svg-icon">
            <path d="M 25 0 C 22.792969 0 21 1.792969 21 4 C 21 6.207031 22.792969 8 25 8 C 27.207031 8 29 6.207031 29 4 C 29 1.792969 27.207031 0 25 0 Z M 19.375 6.09375 C 14.804688 8.050781 12 12.457031 12 18 C 12 29 8.199219 31.761719 5.9375 33.40625 C 4.933594 34.132813 4 34.808594 4 36 C 4 40.207031 10.28125 42 25 42 C 39.71875 42 46 40.207031 46 36 C 46 34.808594 45.066406 34.132813 44.0625 33.40625 C 41.800781 31.761719 38 29 38 18 C 38 12.441406 35.199219 8.046875 30.625 6.09375 C 29.769531 8.367188 27.566406 10 25 10 C 22.433594 10 20.230469 8.363281 19.375 6.09375 Z M 19 43.875 C 19 43.914063 19 43.960938 19 44 C 19 47.308594 21.691406 50 25 50 C 28.308594 50 31 47.308594 31 44 C 31 43.960938 31 43.914063 31 43.875 C 29.117188 43.953125 27.117188 44 25 44 C 22.882813 44 20.882813 43.953125 19 43.875 Z"></path>
          </svg>
        </div>

        {/* Profile pic */}
        {session?.user && (
          <Image
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
            alt="profile picture"
            className="rounded-full cursor-pointer"
            src={session.user.image ?? ""}
            width="40"
            height="40"
            layout="fixed"
          />
        )}

        {/* <p className="whitespace-nowrap font-semibold pr-3">Saad Essam</p> */}
      </div>
    </div>
  );
}

export default Header;
