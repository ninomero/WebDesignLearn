// css 読み込み
import "./App.css";
import "./assets/reset.css";
import "./assets/style.css";

import {SignUp, SignIn, LogOut, ProductList, ProductEdit } from './templates/Index'

// SPAを実装するにあたって使用するreact-router-dom
// インストール方法 → 「npm i react-router-dom」
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./components/Home";

function App() {
  return (
    <>
        <Router>
          <div>
            <Routes>
            <Route exact path="/" element={<Index />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/logOut" element={<LogOut />} />
              <Route path="/edit" element={<ProductEdit />} />
              {/* exact を付けると完全一致になる */}
              <Route exact path="/productList" element={<ProductList />} />
            </Routes>
          </div>
        </Router>
    </>
  );
}

export default App;
