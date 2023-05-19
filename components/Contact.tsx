import Image from "next/image";

interface ContactProps {
  name: string;
  profile: string;
}

function Contact({ name, profile }: ContactProps) {
  return (
    <div className="flex cursor-pointer items-center space-x-2 rounded-xl p-3 hover:bg-gray-200">
      <div className="relative">
        <Image
          alt="Friends profile picture"
          className="rounded-full"
          src={profile}
          width={30}
          height={30}
          layout="fixed"
        />
        <span className="absolute right-0 top-3/4 h-2 w-2 rounded-full border-2 border-white bg-green-500"></span>
      </div>

      <p className="hidden font-poppins text-sm font-medium sm:inline-flex">
        {name}
      </p>
    </div>
  );
}

export default Contact;
