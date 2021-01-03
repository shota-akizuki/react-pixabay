import React from "react";
import SearchBar from "./components/SearchBar";

export const App = () => {
  //コンソール画面にユーザーが検索した文字列を表示する関数
  const onSearchSubmit = (term) => {
    console.log(term);
  };
  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
    </div>
  );
};

export default App;
