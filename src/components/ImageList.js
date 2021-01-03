import React from "react";

//https通信でゲットした画像の配列データを展開するためのコンポーネント
//propsとしてimagesをAppコンポーネントから受け取る
const ImageList = (props) => {
  //たくさんの配列がきた場合、それを展開するのはmap関数を使う
  //Appコンポーネントから送られてきたimagesをmapを用いて展開
  //配列の一個一個のデータがmap関数の引数imageに入っている
  const images = props.images.map((image) => {
    return (
      <a
        //遷移先
        href={image.pageURL}
        //mapを使うときは必ずkeyを指定する
        key={image.id}
        //別タブでリンク先を開く処理
        target="_blank"
        //↑の処理だけだとセキュリティ上問題があるので、relを追加する
        rel="noopener noreferrer"
        className="ui medium image"
      >
        <img src={image.webformatURL} alt={image.tags} />
      </a>
      //imgタグのsrcに、ひとつひとつの画像が持っている{image.webformatURL}を指定
    );
  });

  return (
    <div>
      <p>{images}</p>
    </div>
  );
};

export default ImageList;
