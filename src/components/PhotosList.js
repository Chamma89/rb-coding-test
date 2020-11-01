import React from "react";
import Photo from "./Photo";

function PhotosList(props) {
  return (
    <div className="row">
      {props.photos.map((item, i) => (
        <Photo key={i} item={item} />
      ))}
    </div>
  );
}

export default PhotosList;
