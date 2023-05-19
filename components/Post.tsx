import React from "react";
import { useSession } from "next-auth/react";

import moment from "moment";
import Image from "next/image";
import { MdMoreHoriz } from "react-icons/md";
import { GiEarthAmerica } from "react-icons/gi";
import { BsDot } from "react-icons/bs";
import { BiLike, BiCommentDetail, BiShareAlt } from "react-icons/bi";

interface PostProps {
  key: string;
  name: string;
  message: string;
  email: string;
  timestamp: any;
  image: string;
}

function Post({ name, message, email, timestamp, image }: PostProps) {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col">
      <div className="mt-5 rounded-t-2xl bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              className="cursor-pointer rounded-full"
              src={session?.user?.image ?? ""}
              width={40}
              height={40}
              alt="profile picture"
            />
            <div>
              <p className="cursor-pointer font-poppins font-medium">{name}</p>
              <div className="flex items-center text-xs">
                <p className="cursor-pointer font-poppins text-gray-400 underline-offset-1 hover:text-gray-500 hover:underline">
                  {moment(new Date(timestamp?.seconds * 1000)).fromNow()}{" "}
                </p>
                <BsDot className="text-gray-400" />
                <GiEarthAmerica className="cursor-pointer text-gray-400" />
              </div>
            </div>
          </div>
          <div>
            <MdMoreHoriz className="cursor-pointer text-2xl text-gray-600 hover:text-gray-800" />
          </div>
        </div>

        <p className="pt-4 font-poppins">{message}</p>
      </div>

      {image && (
        <div className="relative h-56 bg-white md:h-96">
          <Image src={image} alt="" objectFit="cover" layout="fill" />
        </div>
      )}

      <div className="flex items-center justify-between rounded-b-2xl border-t bg-white text-gray-400 shadow-md">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <BiLike className="h-4" />
          <p className="font-poppins text-sm sm:text-base">Like</p>
        </div>

        <div className="inputIcon rounded-none">
          <BiCommentDetail className="h-4" />
          <p className="font-poppins text-sm sm:text-base">Comment</p>
        </div>

        <div className="inputIcon rounded-none rounded-br-2xl">
          <BiShareAlt className="h-4" />
          <p className="font-poppins text-sm sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
