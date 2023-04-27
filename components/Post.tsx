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

function Post(props: PostProps) {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              className="rounded-full cursor-pointer"
              src={session?.user?.image ?? ""}
              width={40}
              height={40}
              alt="profile picture"
            />
            <div>
              <p className="font-medium font-poppins cursor-pointer">
                {props.name}
              </p>
              <div className="flex items-center text-xs">
                <p className="text-gray-400 font-poppins cursor-pointer hover:underline underline-offset-1 hover:text-gray-500">
                  {moment(new Date(props.timestamp?.seconds * 1000)).fromNow()}{" "}
                </p>
                <BsDot className="text-gray-400" />
                <GiEarthAmerica className="text-gray-400 cursor-pointer" />
              </div>
            </div>
          </div>
          <div>
            <MdMoreHoriz className="text-gray-600 text-2xl cursor-pointer hover:text-gray-800" />
          </div>
        </div>

        <p className="pt-4 font-poppins">{props.message}</p>
      </div>

      {props.image && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={props.image} alt="" objectFit="cover" layout="fill" />
        </div>
      )}

      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <BiLike className="h-4" />
          <p className="text-sm font-poppins sm:text-base">Like</p>
        </div>

        <div className="inputIcon rounded-none">
          <BiCommentDetail className="h-4" />
          <p className="text-sm font-poppins sm:text-base">Comment</p>
        </div>

        <div className="inputIcon rounded-none rounded-br-2xl">
          <BiShareAlt className="h-4" />
          <p className="text-sm font-poppins sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
