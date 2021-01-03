import axios from "axios";
import React, { useState } from "react";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

export const App = () => {
  //取得した画像のデータをAppコンポーネントに保持したいのでuseStateを使う
  //初期値はからの配列
  const [images, setimages] = useState([]);
  //ユーザーが検索した文字列で検索を行う関数
  //非同期通信を行うためにasyncとtry/catch構文を使う
  const onSearchSubmit = async (term) => {
    try {
      //これも分割代入っぽい？→あとで調べる。
      //連想配列っぽさもある
      const params = {
        key: "18128449-db79a4160355fe2c6bcda9a88",
        q: term,
      };
      //responseに取得したデータを代入する
      const response = await axios.get("https://pixabay.com/api/", { params });
      //setimages(response.data.hits)を書くことでデータをきちんと受け取った際に、
      //images stateに画像の配列が渡される
      setimages(response.data.hits);
      //万一、画像が一件もなかった場合
      if (response.data.total === 0) {
        window.alert("お探しの画像は見つかりません");
      }
    } catch (err) {
      //http通信が失敗した場合、
      window.alert("写真の取得に失敗しました");
    }
  };
  return (
    //ImageListのpropsとして{images}を渡すことで、pixabayがhttp通信を行った場合、
    //画像データの結果がImageListにpropsとして渡される。
    //ImagesListコンポーネントは一個一個それを展開し、ImagesList内の変数imagesで表示
    <div className="ui container" style={{ marginTop: "20px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
