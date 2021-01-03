import React from "react";

//https通信でゲットした画像の配列データを展開するためのコンポーネント
//propsとしてimagesをAppコンポーネントから受け取る
const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <a
        href={image.pageURL}
        key={image.id}
        target="_blank"
        rel="noopener noreferrer"
        className="ui medium image"
      >
        <img src={image.webformatURL} alt={image.tags} />
      </a>
    );
  });
  return (
    <div>
      <p>{images}</p>
    </div>
  );
};

export default ImageList;
