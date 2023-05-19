import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";

interface StoryProps {
  name: string;
  src: string;
  profile: string;
}

function StoryCard({ name, src, profile }: StoryProps) {
  return (
    <div className="overflow-x relative h-14 w-14 transform cursor-pointer p-3 transition duration-200 ease-in hover:scale-105 hover:animate-pulse md:h-20 md:w-20 lg:h-56 lg:w-32">
      <Image
        alt=""
        className="absolute top-5 z-50 rounded-full border-2 border-blue-600 opacity-0 shadow-md lg:opacity-100"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
      />
      <Image
        alt=""
        className="rounded-full object-cover p-0.5 brightness-75 filter sm:border-2 sm:border-blue-600 lg:rounded-xl lg:border-none"
        src={src}
        layout="fill"
      />
      <h1 className="absolute bottom-3 z-50 font-poppins font-normal  text-gray-200 opacity-0 lg:opacity-100">
        {name}
      </h1>
    </div>
  );
}

export default StoryCard;
