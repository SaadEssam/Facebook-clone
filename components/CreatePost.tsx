import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import Image from "next/image";
import { useRef, useState } from "react";
import { Dialog } from "@headlessui/react";

import { BiHappy } from "react-icons/bi";
import { MdMoreHoriz } from "react-icons/md";
import { FaPhotoVideo, FaVideo } from "react-icons/fa";
import { AiOutlineClose, AiFillTag } from "react-icons/ai";
import { BsPeopleFill, BsFillCaretDownFill } from "react-icons/bs";
import { HiOutlineEmojiHappy, HiLocationMarker, HiFlag } from "react-icons/hi";

import { db, storage } from "@/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

function CreatePost() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (typeof inputRef.current?.value !== "string") return;

    try {
      const docRef = await addDoc(collection(db, "posts"), {
        message: inputRef.current.value,
        name: session?.user?.name || "",
        email: session?.user?.email || "",
        image: session?.user?.image || "",
        timestamp: serverTimestamp(),
      });

      if (imageToPost) {
        const imageRef = ref(storage, `posts/${docRef.id}`);

        await uploadString(imageRef, imageToPost as string, "data_url").then(
          async (snapshot) => {
            const downloadUrl = await getDownloadURL(imageRef);
            await updateDoc(doc(db, "posts", docRef.id), {
              image: downloadUrl,
            });
          }
        );
      } else {
        console.log("No Image");
      }
    } catch (error) {
      console.log(error);
    }
    inputRef.current.value = "";
  };

  const addImageToPost = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result as string);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
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

        <div
          onClick={() => filePickerRef.current.click()}
          className="inputIcon"
        >
          <FaPhotoVideo className="h-7 w-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            type="file"
            onChange={addImageToPost}
            ref={filePickerRef}
            hidden
          />
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
            <div className="relative bg-white w-500 rounded-lg">
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
                    <h6 className="font-medium text-md">
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
                      autoFocus
                      className="w-full placeholder-gray-500 text-lg focus:outline-none"
                      rows={4}
                      placeholder={`What's on your mind, ${session?.user?.name}?`}
                      ref={inputRef}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-9 cursor-pointer"
                        src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
                        alt="image palette"
                      />
                    </div>
                    <div>
                      <HiOutlineEmojiHappy className="h-7 w-7 text-gray-500 hover:text-gray-400 cursor-pointer" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between border border-gray-100 rounded-lg p-3 mt-3">
                    <div>
                      <h2 className="font-small text-gray-700">
                        Add to your post
                      </h2>
                    </div>
                    <div className="flex items-center">
                      <FaPhotoVideo className="addToPostIcon text-green-500 hover:text-green-400" />
                      <AiFillTag className="addToPostIcon text-blue-500 hover:text-blue-400" />
                      <BiHappy className="addToPostIcon text-yellow-500 hover:text-yellow-400" />
                      <HiLocationMarker className="addToPostIcon text-red-500 hover:text-red-400" />
                      <HiFlag className="addToPostIcon text-sky-500 hover:text-sky-400" />
                      <MdMoreHoriz className="addToPostIcon text-gray-500 hover:text-gray-400" />
                    </div>
                  </div>
                </div>
                <div className="my-2 px-4">
                  <button
                    type="submit"
                    className="text-center w-full py-2 rounded-lg bg-blue-500 text-white"
                    onClick={sendPost}
                    // disabled
                  >
                    Post
                  </button>
                </div>
              </Dialog.Description>
            </div>
          </div>
        </Dialog>
      </div>

      {imageToPost && (
        <div
          onClick={removeImage}
          className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
        >
          <img src={imageToPost} alt="" className="h-10 object-contain" />
          <p className="text-xs text-red-500 text-center">Remove</p>
        </div>
      )}
    </div>
  );
}

export default CreatePost;
