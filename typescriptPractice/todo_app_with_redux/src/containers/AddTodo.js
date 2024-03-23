import React from "react";
// connect は、component 内で dispatch を使えるようにするために必要です。
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          // ページのリロードを防ぎます。
          e.preventDefault();
          // 入力された文字列が空だった場合にはこれより先のコードが実行されません。
          if (!input.value.trim()) {
            return;
          }
          // dispatch メソッド実行します
          dispatch(addTodo(input.value));
          // 投稿ボタンを押した後に、テキストボックスの中身を空にします。
          input.value = "";
        }}
      >
        <input ref={(node) => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

// ここで、connectを使用します。
export default connect()(AddTodo);
