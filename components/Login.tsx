import { signIn, SignInResponse } from "next-auth/react";
import Image from "next/image";

function Login() {
  const handleSignIn = async (): Promise<SignInResponse> => {
    const response = await signIn("facebook");
    if (response !== undefined) {
      return response;
    } else {
      throw new Error("Sign in failed");
    }
    // return response;
  };
  
  return (
    <div className="flex sm:flex-col md:flex-row items-center justify-between w-full sm:h-full md:h-screen p-10 bg-blue-50">
      <div className="grid sm:place-items-center md:place-items-start sm:w-full md:w-1/3 space-y-4 p-8">
        <Image
          src="https://i.postimg.cc/NMyj90t9/logo.png"
          alt="Facebook"
          height={300}
          width={300}
          objectFit="contain"
        />
        <p className="sm:font-medium md:font-normal sm:text-sm md:text-2xl">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-full sm:w-5/12 sm:self-center">
        <div className="bg-white p-5 rounded-lg shadow-lg w-full sm:w-96">
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
            <button
              type="button"
              onClick={handleSignIn}
              className="py-3 px-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-500 focus:outline-none"
            >
              Log In
            </button>
          </form>
          <div className="flex flex-col mt-4 text-sm">
            <a href="#" className="mx-auto text-blue-600 hover:underline">
              Forgotten Password
            </a>
            <hr className="mt-3" />
            <button
              type="submit"
              className="py-3 px-3 w-1/2 mx-auto mt-4 bg-green-600 text-white rounded-md font-medium hover:bg-green-500 focus:outline-none"
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
