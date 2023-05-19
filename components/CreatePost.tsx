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
    if (inputRef.current) {
      inputRef.current.value = "";
    }
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
    <div className="mt-6 rounded-lg bg-white p-2 font-medium text-gray-500 shadow-md">
      <div className="flex items-center space-x-4 p-4">
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
            className="h-12 flex-grow rounded-full bg-gray-100 px-1 font-poppins hover:bg-gray-50 focus:outline-none"
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
          className="fixed inset-0 z-10 overflow-y-auto font-poppins"
        >
          <div className="flex min-h-screen items-center justify-center">
            {/* dialog overlay  */}
            <Dialog.Overlay className="fixed inset-0 bg-gray-700 opacity-30" />
            {/* dialog card  */}
            <div className="relative w-500 rounded-lg bg-white">
              {/* dialog header  */}
              <div className="relative flex justify-center border-b">
                {/* dialog title  */}
                <Dialog.Title className="py-4 text-xl font-bold">
                  Create Post
                </Dialog.Title>
                {/* dialog close icon button  */}
                <div className="absolute right-0 p-2">
                  <button
                    className="rounded-full bg-gray-200 p-2 text-gray-500 hover:bg-gray-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <AiOutlineClose className="h-6 w-6" />
                  </button>
                </div>
              </div>
              {/* dialog body  */}
              <Dialog.Description>
                {/* post author profile */}
                <div className="my-2 flex items-center space-x-2 px-4">
                  <Image
                    alt=""
                    className="rounded-full"
                    src={session?.user?.image ?? ""}
                    width={40}
                    height={40}
                    layout="fixed"
                  />
                  <div>
                    <h6 className="text-md font-medium">
                      {session?.user?.name}
                    </h6>
                    {/* author friends dropdown  */}

                    <div className="flex cursor-pointer items-center space-x-2 rounded-lg bg-gray-200 px-2 py-1 font-medium">
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
                      className="w-full text-lg placeholder-gray-500 focus:outline-none"
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
                      <HiOutlineEmojiHappy className="h-7 w-7 cursor-pointer text-gray-500 hover:text-gray-400" />
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between rounded-lg border border-gray-100 p-3">
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
                    className="w-full rounded-lg bg-blue-500 py-2 text-center text-white"
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
          className="flex transform cursor-pointer flex-col filter transition duration-150 hover:scale-105 hover:brightness-110"
        >
          <img src={imageToPost} alt="" className="h-10 object-contain" />
          <p className="text-center text-xs text-red-500">Remove</p>
        </div>
      )}
    </div>
  );
}

export default CreatePost;
