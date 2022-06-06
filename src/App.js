import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RequiredAuth from "./hoc/RequiredAuth";
import Product from "./components/Products/Product/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path=""
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        ></Route>
        <Route path="/products/" element={<Products />}></Route>

        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
