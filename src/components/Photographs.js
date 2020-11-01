import React from "react";

function Photographs(props) {
  return (
    <div className="container">
      <h1 className="text-center mb-5">RB Cameras</h1>
      <div className="row">
        {props.getPhotoData.works.map((camera, i) => (
          <div key={i} className="col-12 col-md-4 w-100 text-center mb-5">
            {!!camera.exif.model ? (
              <h4 className="">{`${camera.exif.make} - ${camera.exif.model}`}</h4>
            ) : (
              <h4>Unkown model</h4>
            )}
            <img
              src={camera.urls[0].link}
              className=""
              style={{ height: "10em" }}
              alt={`${camera.exif.make} - ${camera.exif.model}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photographs;
