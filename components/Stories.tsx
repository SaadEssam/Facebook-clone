import { stories } from "@/constants/stories";
import StoryCard from "./StoryCard";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Stories() {
  return (
    <>
      <div className="relative mx-auto flex justify-center space-x-3">
        {stories.map((story) => (
          <StoryCard
            key={story.src}
            name={story.name}
            src={story.src}
            profile={story.profile}
          />
        ))}
        <div className="absolute -right-6 top-1/2 hidden h-12 w-12 -translate-y-1/2 transform cursor-pointer place-items-center rounded-full border border-gray-200 bg-white text-4xl text-gray-500 shadow hover:bg-gray-100 lg:grid">
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
      <hr className="my-3 bg-gray-300" />
    </>
  );
}

export default Stories;
