import Stories from "./Stories";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

function Feed() {
  return (
    <div className="mr-4 h-screen flex-grow overflow-scroll overflow-y-auto pb-44 pt-6 scrollbar-hide xl:mr-72">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        <CreatePost />
        <Posts />
      </div>
    </div>
  );
}

export default Feed;
