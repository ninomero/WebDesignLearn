import { connect } from "react-redux";
// Action として定義した、toggleTodoを import します
import { toggleTodo } from "../actions";
// state と dispatch メソッドを渡す先であるコンポーネントをimportします。
import TodoList from '../components/TodoList';

// これは、state をコンポーネントに渡すための準備です。
// 「todos」という名前で state を渡します。
const mapStateToProps = state => ({
    todos: state
})

// これは、Dispatchメソッドをコンポーネントに渡すための準備です。
// toggleTodo という関数を渡します。
// この関数は、Todo の id のみの情報を必要としています。
// ↓の書き方理解できていない
const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

// 上で定義した todos と toggleTodo を TodoList コンポーネントに渡しています。
// ↓の書き方理解できていない
// ./components/TodoList メソッドを呼び出している
export default connect(
    mapStateToProps,
    mapDispatchToProps   
)(TodoList)