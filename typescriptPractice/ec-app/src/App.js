// css 読み込み
import "./App.css";
import "./assets/reset.css";
import "./assets/style.css";

// SPAを実装するにあたって使用するreact-router-dom
// インストール方法 → 「npm i react-router-dom」
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./templates/SignUp";

function App() {
  return (
    <>
        <Router>
          <div>
            <Routes>
              <Route path="/signUp" element={<SignUp />} />
              {/* <Route path="(/)?" exact component={<App />} /> */}
            </Routes>
          </div>
        </Router>
    </>
  );
}

export default App;
