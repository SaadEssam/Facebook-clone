import { useSession } from "next-auth/react";
import SidebarRow from "./SidebarRow";
import { FcMenu } from "react-icons/fc";
import { Session } from "next-auth";
import Image from "next/image";

function Sidebar() {
  const { data: session }: { data: Session | null | undefined } = useSession();

  return (
    <>
      <div className="mt-5 max-w-[600px] p-2 xl:min-w-[300px]">
        <div className="flex items-center justify-between space-x-2">
          <h1 className="px-4 font-poppins text-2xl font-bold">Home</h1>
          <h2 className="cursor-pointer font-poppins text-blue-600 hover:underline">
            Create
          </h2>
        </div>
        <div>
          {session?.user && (
            <SidebarRow
              src={session.user.image ?? ""}
              title={session.user.name!}
            />
          )}
          <hr className="my-1 h-0.5 bg-gray-300" />
          <SidebarRow
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/0cF-NVaaM2z.png"
            title="Events"
          />
          <SidebarRow
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/qirqv2EkNyF.png"
            title="Saved"
          />
          <SidebarRow
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/TbOx5lWkw-N.png"
            title="Pages"
          />
          <SidebarRow
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/P3LEV6Y0FCf.png"
            title="Friends"
          />
          <SidebarRow
            src="https://img.icons8.com/3d-fluency/94/null/gear--v2.png"
            title="Settings & Privacy"
          />
          <SidebarRow Icon={FcMenu} title="See More" />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
