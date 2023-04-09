import Image from "next/image";

function Login() {
  return (
    <div className="flex items-center justify-between h-screen px-10">
      <div className="w-96 space-y-3 p-8">
        <Image
          src="https://i.postimg.cc/NMyj90t9/logo.png"
          alt="Facebook"
          height={250}
          width={250}
          objectFit="contain"
        />
        <p className="font-semibold">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="flex flex-col bg-white shadow-lg p-8 rounded-lg">
        <form action="" className="flex flex-col ">
          <input
            type="text"
            placeholder="Email address or phone number"
            className=""
          />
          <input type="password" placeholder="Password" />
          <button type="submit">Log In</button>
          <a href="#" className="text-blue-600 hover:underline">
            Forgotten Password
          </a>
        </form>
        <hr className="w-2 h-2 text-gray-400" />
        <div className="create-btn">
          <a href="" target="_blank">
            Create New Account
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
