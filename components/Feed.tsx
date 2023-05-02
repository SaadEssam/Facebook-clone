import Stories from "./Stories";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

function Feed() {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-72 overflow-y-auto overflow-scroll scrollbar-hide">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        <CreatePost />
        <Posts />
      </div>
    </div>
  );
}

export default Feed;
