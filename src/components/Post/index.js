import React from 'react';

import './index.css';

function Post(props) {
  return <article>{props.postTitle}, {props.author}</article>;
}

export default Post;
