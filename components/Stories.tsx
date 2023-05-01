import { stories } from "@/constants/stories";
import StoryCard from "./StoryCard";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Stories() {
  return (
    <>
      <div className="flex justify-center relative space-x-3 mx-auto">
        {stories.map((story) => (
          <StoryCard
            key={story.src}
            name={story.name}
            src={story.src}
            profile={story.profile}
          />
        ))}
        <div className="w-12 h-12 rounded-full hidden lg:grid place-items-center text-4xl bg-white absolute -right-6 top-1/2 transform -translate-y-1/2 border border-gray-200 cursor-pointer hover:bg-gray-100 shadow text-gray-500">
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
      <hr className="my-3 bg-gray-300" />
    </>
  );
}

export default Stories;
