import { stories } from "@/constants/stories";
import StoryCard from "./StoryCard";

function Stories() {
  return (
    <>
      <div className="flex justify-center space-x-3 mx-auto">
        {stories.map((story) => (
          <StoryCard
            key={story.src}
            name={story.name}
            src={story.src}
            profile={story.profile}
          />
        ))}
      </div>
      <hr className="my-3 bg-gray-300" />
    </>
  );
}

export default Stories;
