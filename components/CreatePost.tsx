import { useSession } from "next-auth/react";
import { Session } from "next-auth";

import Image from "next/image";
import { useState } from "react";

import { BiHappy } from "react-icons/bi";
import { FaPhotoVideo, FaVideo } from "react-icons/fa";

function CreatePost() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };

  const { data: session }: { data: Session | null | undefined } = useSession();
  return (
    <div className="bg-white p-2 rounded-lg shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          alt=""
          className="rounded-full"
          src={session?.user?.image ?? ""}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <button
            onClick={handleClick}
            // placeholder={`What's on your mind, ${session?.user?.name}?`}
            className="rounded-full h-12 bg-gray-100 hover:bg-gray-50 flex-grow px-1 focus:outline-none font-poppins"
          >
            <span className="flex items-start justify-start p-2">
              {`What's on your mind, ${session?.user?.name}?`}
            </span>
          </button>
        </form>
      </div>
      <div className="px-4">
        <hr className="bg-gray-300" />
      </div>
      <div className="flex justify-evenly p-2 ">
        <div className="inputIcon">
          <FaVideo className="h-7 w-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div className="inputIcon">
          <FaPhotoVideo className="h-7 w-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>

        <div className="inputIcon">
          <BiHappy className="h-7 w-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/activity</p>
        </div>
      </div>
      {/* <PostModal showModal={showModal} handleClick={handleClick} /> */}
    </div>
  );
}

export default CreatePost;
