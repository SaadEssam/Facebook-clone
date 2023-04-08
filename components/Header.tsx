import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <div>
      {/* Leftside */}
      <div className="flex items-center">
        <Image
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
          alt="Facebook logo"
          width={50}
          height={50}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-500" />
          <input
            type="text"
            className="flex ml-2 items-center bg-transparent focus:outline-none placeholder-gray-500"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* Center */}
      <div>
        
      </div>

      {/* Rightside */}
    </div>
  );
}

export default Header;
