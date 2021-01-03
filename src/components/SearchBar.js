import React, { useState } from "react";

//onSubmit（onSearchSubmit関数が入った属性）をpropsとして分割代入で受け取る
export const SearchBar = ({ onSubmit }) => {
  //[stateを管理したい変数,stateが変更された時に発火する関数]=useState(初期値)；
  const [term, setTerm] = useState("");

  //デフォルトだとフォームでEnterを押すとページがリロードれてしまうので、
  //Enterキーをしたときの動作を決める関数を定義する
  //引数にeventを指定する

  const onFormSubmit = (event) => {
    // event.preventDefault();はデフォルトで用意されている動作をやめる
    //これを書いておけばページのリロードがされない
    event.preventDefault();
    onSubmit(term);
  };
  return (
    //formタグのonSubmit属性の属性値にonFormSubmit関数を指定
    //value属性に、inputに表示する内容を{term}として定義
    //inputの内容が変わった場合はonChange関数が走る
    //event.target.valueは検索欄に入力された文字列
    <div className="ui segment">
      <form onSubmit={onFormSubmit} class="ui form">
        <div class="field">
          <label>Image Search</label>
          <input
            type="text"
            name="search"
            placeholder=""
            value={term}
            onChange={(event) => {
              setTerm(event.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
