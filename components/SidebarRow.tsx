import Image from "next/image";

interface RowProps {
  src?: string;
  Icon?: React.ElementType;

  title: string;
}

function SidebarRow({ src, Icon, title }: RowProps) {
  return (
    <div className="flex cursor-pointer items-center space-x-2 rounded-xl p-4 hover:bg-gray-200">
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
      <p className="hidden font-poppins font-medium sm:inline-flex">{title}</p>
    </div>
  );
}

export default SidebarRow;
