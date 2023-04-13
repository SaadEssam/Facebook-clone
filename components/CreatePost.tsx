import { useSession } from "next-auth/react";
import { Session } from "next-auth";

import Image from "next/image";
import { useState } from "react";

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
          <input
            onClick={handleClick}
            type="text"
            placeholder={`What's on your mind, ${session?.user?.name}?`}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none font-poppins"
          />
        </form>
      </div>
      <div className="px-4">
        <hr className="bg-gray-300" />
      </div>
      {/* <PostModal showModal={showModal} handleClick={handleClick} /> */}
    </div>
  );
}

export default CreatePost;
