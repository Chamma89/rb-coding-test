import React from "react";

function Photograph(props) {
  return (
    <div className="col-12 col-md-4 w-100 text-center mb-5">
      {!!props.item.exif.model ? (
        <h4>{`${props.item.exif.make} - ${props.item.exif.model}`}</h4>
      ) : (
        <h4>Unknown model</h4>
      )}
      <img
        src={props.item.urls[0].link}
        className=""
        style={{ height: "10em" }}
        alt={`${props.item.exif.make} - ${props.item.exif.model}`}
      />
    </div>
  );
}

export default Photograph;
