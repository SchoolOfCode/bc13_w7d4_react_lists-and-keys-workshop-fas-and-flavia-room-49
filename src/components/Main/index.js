import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return (
  <div>
  <main id="main"></main>
  {samplePosts.map( function(array) {
    return <Post image={array.image.link} postTitle={array.title} author={array.author} key={array.postId}/>
  })}
  </div>
  );
}

export default Main;

// {samplePosts.highlights.map(function(hArray){
//   return <Post><li>{</li></Post>
// })}