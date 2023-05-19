import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";

function Error() {
  return (
    <>
      <div className="h-screen overflow-hidden bg-gray-100">
        <Header />
        <main className="flex">
          <Sidebar />
          <div className="mx-auto flex h-screen flex-col items-center justify-center font-poppins">
            <div className="flex max-w-lg flex-col items-center space-y-2">
              <Image
                alt=""
                src="https://www.facebook.com/images/comet/empty_states_icons/permissions/permissions_dark_mode.svg"
                width={120}
                height={120}
                layout="fixed"
              />
              <h1 className="text-xl font-bold">
                This content isn't available right now
              </h1>
              <p className="w-70 text-center text-gray-500">
                When this happens, it's usually because the owner only shared it
                with a small group of people, changed who can see it or it's
                been deleted.
              </p>
              <button
                type="button"
                className="rounded-md bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-500 focus:outline-none"
              >
                Go to News Feed
              </button>
              <Link href="/" className="font-medium text-blue-600">
                Go Back
              </Link>
              <Link href="#" className="font-medium text-blue-600">
                Visit Help Center
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Error;
