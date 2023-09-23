import Image from "next/image";
import React from "react";

const ImageViewer = ({ viewerImage, title, setViewImage }) => {
  return (
    <div id="image-viewer">
      <div>
        <span className="bk-btn text-4xl font-black p-4 cursor-pointer hover:opacity-75 duration-300">{"<"}</span>
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
        <span className="fb-btn text-4xl font-black p-4 cursor-pointer hover:opacity-75 duration-300">{">"}</span>
      </div>
    </div>
  );
};

export default ImageViewer;
