import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import Login from "./pages/Login";
const App = () => {
  return <BrowserRouter>
    
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/categories" element={<Categories/>}/>
    <Route path="/orders" element={<Orders/>}/>
    <Route path="/users" element={<Users/>}/>
    <Route path="/login" element={<Login/>}/>
  </Routes>
  </BrowserRouter>;
};

export default App