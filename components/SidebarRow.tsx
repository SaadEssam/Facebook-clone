import Image from "next/image";

interface RowProps {
  src?: string;
  Icon?: React.ElementType;

  title: string;
}

function SidebarRow({ src, Icon, title }: RowProps) {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
      {src && (
        <Image
          alt=""
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />
      )}
      {Icon && <Icon className="h-8 w-8" />}
      <p className="hidden sm:inline-flex font-medium font-poppins">{title}</p>
    </div>
  );
}

export default SidebarRow;
