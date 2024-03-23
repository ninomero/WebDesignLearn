import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const shincodeinfo = {
  name: "shincode",
  age: 24
}

//コンテキストを使用する際は変数名を大文字で始める
const ShinCodeContext = createContext(shincodeinfo);

ReactDOM.createRoot(document.getElementById('root')!).render(
  //useContext
  <ShinCodeContext.Provider value={shincodeinfo}>
    {/* // この厳格なモードをするとuseEffectが二回呼ばれる
    // buildしたら1回のみ呼ばれる */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShinCodeContext.Provider>
)

export default ShinCodeContext;
