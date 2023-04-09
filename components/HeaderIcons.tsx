interface Props {
  Icon: any;
  active: boolean;
}

function HeaderIcons({ Icon, active }: Props) {
  return (
    <div className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 hover:border-b-4 active:border-b-4 border-blue-600 ease-in-out duration-200 rounded group">
      <Icon
        className={`text-gray-600 h-5 text-center sm:h-7 mx-auto group-active:text-blue-600 ${
          active && "text-blue-600"
        }`}
        size="1.5rem"
      />
    </div>
  );
}

export default HeaderIcons;
