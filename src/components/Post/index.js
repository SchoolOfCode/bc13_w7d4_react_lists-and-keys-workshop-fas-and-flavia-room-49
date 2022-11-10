import React from "react";

import "./index.css";

function Post(props) {
  return (
    <article>
      <img height='60px' width='60px' src={props.image} alt="bird" />
      <p>{props.title}</p>
      <p>{props.author}</p>
      <p>{props.date}</p>
      <p>{props.text}</p>
      {props.highlights.map(function(array){
        return <li>{array}</li>
      })}
    </article>
  );
}

export default Post;
