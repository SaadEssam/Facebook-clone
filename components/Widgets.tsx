import React from "react";
import { FaVideo } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMoreHoriz } from "react-icons/md";
import { contact } from "@/constants/contacts";
import Contact from "./Contact";

function Widget() {
  return (
    <div className="fixed right-0 top-0 hidden h-full w-1/5 overflow-scroll px-4 pt-16 font-poppins scrollbar-hide xl:block">
      <div className="mt-3 h-full">
        <>
          <div className="flex items-center justify-between px-0 pt-4">
            <span className="text-lg font-semibold text-gray-500 ">
              Sponsored
            </span>
          </div>
          <div className="mt-2">
            <div className="flex cursor-pointer items-center space-x-4 rounded-lg transition-all">
              <img
                src="https://img.icons8.com/fluency/48/null/meta.png"
                alt="Sponsored logo"
                className="h-8 w-8 rounded-full"
              />
              <div className="">
                <span className="font-medium">Meta</span>
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="mt-2 flex-1 space-x-2">
              <p className="text-sm text-gray-600">
                Facebook's parent company has changed its name to Meta and
                updated its logo to...
              </p>
            </div>
            <div className="mb-5">
              <img
                className="rounded-xl"
                src="https://static.dezeen.com/uploads/2021/11/meta-facebook-rebranding-name-news_dezeen_2364_col_hero2.jpg"
                alt="sponsored Image"
              />
            </div>
          </div>

          <div className="mb-3 border-b border-gray-300"></div>

          <div>
            <div className="flex justify-start text-lg font-semibold text-gray-500">
              <h1>Birthdays</h1>
            </div>
            <div className="mt-3 flex cursor-pointer justify-between rounded-md px-2 py-2">
              <img
                className="mr-2 h-8 w-8"
                src="https://i.postimg.cc/jdr7fwV8/gift.png"
                alt=""
              />
              <p className="text-md">
                <span className="font-medium">Triza van</span> and{" "}
                <span className="font-medium">2 others</span> have birthdays
                today
              </p>
            </div>
          </div>
        </>

        <div className="mb-3 border-b border-gray-300"></div>

        <div className="flex items-center justify-between text-gray-500">
          <span className="text-lg font-semibold">Contacts</span>
          <div className="flex space-x-1">
            <div className="contactsIcon">
              <FaVideo />
            </div>
            <div className="contactsIcon">
              <AiOutlineSearch />
            </div>
            <div className="contactsIcon">
              <MdMoreHoriz />
            </div>
          </div>
        </div>

        <div className="mt-2">
          {contact.map((contact) => (
            <Contact
              key={contact.profile}
              profile={contact.profile}
              name={contact.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Widget;
