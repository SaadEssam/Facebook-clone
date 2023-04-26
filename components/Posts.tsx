import { useState, useEffect } from "react"
import { onSnapshot, query, collection, orderBy } from "firebase/firestore";


import { useCollection } from "react-firebase-hooks/firestore";
// import { collection } from 'firebase/firestore';
import { db } from "@/firebase";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState<any[]>([]);
  // const [realtimePosts] = useCollection(
  //   db.collection("posts").orderBy("timestamp", "desc")
  // );
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          email={post.data().email}
          timestamp={post.data().timestamp}
          image={post.data().image}
          postImage={post.data().postImage}
        />
      ))}
    </div>
  );
}

export default Posts;
