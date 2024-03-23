// まず、renderを定義します。
// 引数には、stateの初期値と Dispatch される Action を設定します。
const todoReducer = (state = [], action) => {
    //そして、Action の type によってデータをどのように変更するのかを switch 分を用いて記述します。
    switch (action.type){
        // Action の type が ADD_TODO の時
        // 現在の todo に追加する形で state を更新します。
        // completed はデフォルトでは false(未完了)としておく。
        case 'ADD_TODO' :
            return [
                // スプレッド構文を用いることで配列やオブジェクトを展開したり、配列同士・オブジェクト同士を結合することができる
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        // Action の type が TOGGLE_TODO のとき、
        // ある一つの todo の completed を反映させて上書きします。
        // ある一つの todo は id をもとにして探します。
        case 'TOGGLE_TODO' :
            return state.map(todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo)
        default:
            return state
    }
}

export default todoReducer