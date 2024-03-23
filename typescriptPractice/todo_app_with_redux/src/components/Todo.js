import PropTypes from "prop-types";

// Todo Component では props として、「onClick」・「completed」・「text」が渡されます。
const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    // completed が True だった場合、取り消し線を適用します。
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    {text}
  </li>
);

// TodoList Component と同様にデータ型の定義をしました。
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo
