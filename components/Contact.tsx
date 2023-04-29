import Image from "next/image";

interface ContactProps {
  name: string;
  profile: string;
}

function Contact({ name, profile }: ContactProps) {
  return (
    <div className="flex items-center space-x-2 p-3 hover:bg-gray-200 rounded-xl cursor-pointer">
      <div className="relative">
        <Image
          alt="Friends profile picture"
          className="rounded-full"
          src={profile}
          width={30}
          height={30}
          layout="fixed"
        />
        <span className="bg-green-500 w-2 h-2 rounded-full absolute right-0 top-3/4 border-white border-2"></span>
      </div>

      <p className="hidden sm:inline-flex font-medium text-sm font-poppins">
        {name}
      </p>
    </div>
  );
}

export default Contact;
