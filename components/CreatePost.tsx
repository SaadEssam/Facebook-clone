import { useSession } from "next-auth/react";
import { Session } from "next-auth";

import Image from "next/image";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

import { AiOutlineClose, AiFillTag } from "react-icons/ai";
import { HiOutlineEmojiHappy, HiLocationMarker, HiFlag } from "react-icons/hi";
import { BiHappy } from "react-icons/bi";
import { MdMoreHoriz } from "react-icons/md";
import { FaPhotoVideo, FaVideo } from "react-icons/fa";
import { BsPeopleFill, BsFillCaretDownFill } from "react-icons/bs";

function CreatePost() {
  const [isOpen, setIsOpen] = useState(false);

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
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(true);
            }}
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
      <div>
        {/* create post dialog  */}
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed z-10 inset-0 overflow-y-auto font-poppins"
        >
          <div className="flex items-center justify-center min-h-screen">
            {/* dialog overlay  */}
            <Dialog.Overlay className="fixed inset-0 bg-gray-700 opacity-30" />
            {/* dialog card  */}
            <div className="relative bg-white w-96 rounded-lg">
              {/* dialog header  */}
              <div className="flex justify-center relative border-b">
                {/* dialog title  */}
                <Dialog.Title className="py-4 text-xl font-bold">
                  Create Post
                </Dialog.Title>
                {/* dialog close icon button  */}
                <div className="absolute right-0 p-2">
                  <button
                    className="bg-gray-200 p-2 hover:bg-gray-300 rounded-full text-gray-500"
                    onClick={() => setIsOpen(false)}
                  >
                    <AiOutlineClose className="h-6 w-6" />
                  </button>
                </div>
              </div>
              {/* dialog body  */}
              <Dialog.Description>
                {/* post author profile */}
                <div className="my-2 px-4 flex items-center space-x-2">
                  <Image
                    alt=""
                    className="rounded-full"
                    src={session?.user?.image ?? ""}
                    width={40}
                    height={40}
                    layout="fixed"
                  />
                  <div>
                    <h6 className="font-medium text-sm">
                      {session?.user?.name}
                    </h6>
                    {/* author friends dropdown  */}

                    <div className="flex items-center space-x-2 bg-gray-200 font-medium px-2 py-1 rounded-lg cursor-pointer">
                      <BsPeopleFill />
                      <span className="text-sm">Friends</span>
                      <BsFillCaretDownFill />
                    </div>
                  </div>
                </div>

                {/* create post interface */}
                <div className="px-4 py-2">
                  <div className="mb-4">
                    <textarea
                      className="w-full placeholder-gray-500 text-lg focus:outline-none"
                      rows={6}
                      placeholder={`What's on your mind, ${session?.user?.name}?`}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-9 cursor-pointer"
                        src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
                        alt="image pallete"
                      />
                    </div>
                    <div>
                      <HiOutlineEmojiHappy className="h-7 w-7 text-gray-500 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between border border-gray-100 rounded-lg p-3 mt-3">
                    <div>
                      <h2>Add to your post</h2>
                    </div>
                    <div className="flex items-center">
                      <FaVideo className="h-4 w-4 text-red-500 mr-2 cursor-pointer" />
                      <HiLocationMarker className="h-4 w-4 text-red-500 mr-2 cursor-pointer" />
                      <HiFlag className="h-4 w-4 text-sky-500 mr-2 cursor-pointer" />
                      <FaPhotoVideo className="h-4 w-4 text-green-500 mr-2 cursor-pointer" />
                      <AiFillTag className="h-4 w-4 text-blue-500 mr-2 cursor-pointer" />
                      <BiHappy className="h-4 w-4 text-yellow-500 mr-2 cursor-pointer" />
                      <MdMoreHoriz className="h-4 w-4 text-gray-500 mr-2 cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div className="my-2 px-4">
                  <button
                    className="text-center w-full py-2 rounded-lg bg-blue-500 text-white"
                    disabled
                  >
                    Post
                  </button>
                </div>
              </Dialog.Description>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
}

export default CreatePost;
