import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";

interface StoryProps {
  name: string;
  src: string;
  profile: string;
}

function StoryCard({ name, src, profile }: StoryProps) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
      <Image
        alt=""
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-5 border-2 border-blue-600 shadow-md"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
      />
      <Image
        alt=""
        className="object-cover filter brightness-75 rounded-full lg:rounded-xl sm:border-2 sm:border-blue-600 p-0.5 lg:border-none"
        src={src}
        layout="fill"
      />
      <h1 className="absolute opacity-0 lg:opacity-100 z-50 bottom-3  font-normal font-poppins text-gray-200">
        {name}
      </h1>
    </div>
  );
}

export default StoryCard;
