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
    return <Post 
    image={array.image.link} 
    title={array.title} 
    date={array.date}
    text={array.text}
    author={array.author} 
    key={array.postId}
    highlights={array.highlights}
    />
  })}
  </div>
  );
}

export default Main;

// {samplePosts.highlights.map(function(hArray){
//   return <Post><li>{</li></Post>
// })}