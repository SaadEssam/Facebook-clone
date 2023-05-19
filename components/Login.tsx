import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

function Login() {
  const { data: session } = useSession();

  return (
    <div className="flex w-full items-center justify-between bg-blue-50 p-10 sm:h-full sm:flex-col md:h-screen md:flex-row">
      <div className="grid space-y-4 p-8 sm:w-full sm:place-items-center md:w-1/3 md:place-items-start">
        <Image
          src="https://i.postimg.cc/NMyj90t9/logo.png"
          alt="Facebook"
          height={300}
          width={300}
          objectFit="contain"
        />
        <p className="sm:text-sm sm:font-medium md:text-2xl md:font-normal">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center sm:w-5/12 sm:self-center">
        <div className="w-full rounded-lg bg-white p-5 shadow-lg sm:w-96">
          <form className="flex flex-col">
            {/* <input
              type="email"
              placeholder="Email address"
              className="mb-4 py-3 px-3 rounded-sm border-gray-300 border focus:outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-4 py-3 px-3 rounded-sm border-gray-300 border focus:outline-none"
              required
            /> */}

            {!session && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
                className="rounded-md bg-blue-600 px-3 py-3 font-medium text-white hover:bg-blue-500 focus:outline-none"
              >
                Log In
              </button>
            )}
          </form>
          <div className="mt-4 flex flex-col text-sm">
            <a href="#" className="mx-auto text-blue-600 hover:underline">
              Forgotten Password
            </a>
            <hr className="mt-3" />
            <button
              type="submit"
              className="mx-auto mt-4 w-1/2 rounded-md bg-green-600 px-3 py-3 font-medium text-white hover:bg-green-500 focus:outline-none"
            >
              Create New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
