import React from 'react'

interface PostProps {
  key: string;
  name: string;
  message: string;
  email: string;
  timestamp: any;
  image: string;
  postImage: string;
}

function Post(props: PostProps) {
  return (
    <div>Post</div>
  )
}

export default Post