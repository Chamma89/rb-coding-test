import React from "react";

function Photo(props) {
  return (
    <div className="col-12 col-md-4 w-100 text-center mb-5">
      <h4>{`${props.item.exif.make} - ${props.item.exif.model}`}</h4>
      <img
        src={props.item.urls[0].link}
        className=""
        style={{ height: "10em" }}
        alt={`${props.item.exif.make} - ${props.item.exif.model}`}
      />
    </div>
  );
}

export default Photo;
