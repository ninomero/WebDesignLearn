import PropTypes from "prop-types";
// 下記を追加
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map((todo) => (
      // ここで Todo コンポーネントを描画します。
      // onClickには、toggleTodo(引数は todo の id)を渡します。
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
