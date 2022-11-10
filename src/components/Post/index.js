import React from "react";

import "./index.css";

function Post(props) {
  return (
    <article>
      <img height='40px' width='40px' src={props.image} alt="bird" />,{props.postTitle}, {props.author}, {props.highlights}
    </article>
  );
}

export default Post;
