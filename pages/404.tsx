import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";

function Error() {
  return (
    <>
      <div className="h-screen bg-gray-100 overflow-hidden">
        <Header />
        <main className="flex">
          <Sidebar />
          <div className="flex flex-col items-center justify-center h-screen mx-auto font-poppins">
            <div className="flex flex-col items-center max-w-lg space-y-2">
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
              <p className="text-gray-500 text-center w-70">
                When this happens, it's usually because the owner only shared it
                with a small group of people, changed who can see it or it's
                been deleted.
              </p>
              <button
                type="button"
                className="py-2 px-6 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-500 focus:outline-none"
              >
                Go to News Feed
              </button>
              <Link href="/" className="text-blue-600 font-medium">
                Go Back
              </Link>
              <Link href="#" className="text-blue-600 font-medium">
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
