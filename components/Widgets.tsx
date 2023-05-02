import React from "react";
import { FaVideo } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMoreHoriz } from "react-icons/md";
import { contact } from "@/constants/contacts";
import Contact from "./Contact";

function Widget() {
  return (
    <div className="w-1/5 pt-16 h-full hidden xl:block px-4 fixed top-0 right-0 font-poppins overflow-scroll scrollbar-hide">
      <div className="h-full mt-3">
        <>
          <div className="flex justify-between items-center px-0 pt-4">
            <span className="font-semibold text-gray-500 text-lg ">
              Sponsored
            </span>
          </div>
          <div className="mt-2">
            <div className="flex items-center space-x-4 rounded-lg transition-all cursor-pointer">
              <img
                src="https://img.icons8.com/fluency/48/null/meta.png"
                alt="Sponsored logo"
                className="w-8 h-8 rounded-full"
              />
              <div className="">
                <span className="font-medium">Meta</span>
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <div className="flex-1 space-x-2 mt-2">
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

          <div className="border-b border-gray-300 mb-3"></div>

          <div>
            <div className="flex justify-start font-semibold text-lg text-gray-500">
              <h1>Birthdays</h1>
            </div>
            <div className="flex justify-between mt-3 cursor-pointer px-2 py-2 rounded-md">
              <img
                className="w-8 h-8 mr-2"
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

        <div className="border-b border-gray-300 mb-3"></div>

        <div className="flex justify-between items-center text-gray-500">
          <span className="font-semibold text-lg">Contacts</span>
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
