interface Props {
  Icon: any;
  active: boolean;
}

function HeaderIcons({ Icon, active }: Props) {
  return (
    <div className="group flex cursor-pointer items-center rounded border-blue-600 duration-200 ease-in-out hover:border-b-4 active:border-b-4 sm:h-14 md:px-10 md:hover:bg-gray-100">
      <Icon
        className={`mx-auto h-5 text-center text-gray-600 group-active:text-blue-600 sm:h-7 ${
          active && "text-blue-600"
        }`}
        size="1.5rem"
      />
    </div>
  );
}

export default HeaderIcons;
