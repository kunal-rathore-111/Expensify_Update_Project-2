
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { GoogleLogin } from "./Login/googleLogin";
import { ExpensePage } from "./expenses/expneses";
import { ErrorElement } from "./ErrorPage/errorPage";
import "./App.css"

function App() {

  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GoogleLogin></GoogleLogin>} />
        <Route path="/api/user/expenses" element={<ExpensePage></ExpensePage>} />
        <Route path="*" element={<ErrorElement />} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;