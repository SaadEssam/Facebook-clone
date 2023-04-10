import Image from "next/image";

function Login() {
  return (
    <div className="flex items-center justify-between w-full h-screen p-10 bg-blue-50">
      <div className="w-1/3 space-y-4 p-8">
        <Image
          src="https://i.postimg.cc/NMyj90t9/logo.png"
          alt="Facebook"
          height={300}
          width={300}
          objectFit="contain"
        />
        <p className="font-normal text-2xl">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center h-screen w-5/12 ">
        <div className="bg-white p-5 rounded-lg shadow-lg w-96">
          <form className="flex flex-col ">
            <input
              type="email"
              placeholder="Email address"
              className="mb-4 py-3 px-3 rounded-sm border-gray-300 border focus:outline-none "
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-4 py-3 px-3 rounded-sm border-gray-300 border focus:outline-none "
              required
            />
            <button
              type="submit"
              className="py-3 px-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-600"
            >
              Log In
            </button>
          </form>
          <div className="flex flex-col mt-3 text-sm text-gray-500">
            <a href="#" className="mx-auto text-blue-600 hover:underline">
              Forgotten Password
            </a>
            <hr className="mt-3" />
            <button
              type="submit"
              className="py-3 px-3 w-1/2 mx-auto mt-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 focus:outline-none focus:ring focus:border-green-600"
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
