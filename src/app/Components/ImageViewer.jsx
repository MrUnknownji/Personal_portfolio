import Image from "next/image";
import React from "react";

const ImageViewer = ({ viewerImage, title, setViewImage }) => {
  return (
    <div id="image-viewer">
      <div>
        <span
          id="close"
          onClick={() => {
            document.body.style.overflowY = "auto";
            setViewImage(false);
          }}
        >
          &times;
        </span>
        <Image
          src={require(`../Assets/Project/${title}/${viewerImage}`)}
          id="full-image"
          alt="Image"
        />
      </div>
    </div>
  );
};

export default ImageViewer;
