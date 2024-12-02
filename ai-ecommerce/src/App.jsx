import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import ProductDetail from "./Pages/ProductDetail";
import ProductList from "./Pages/ProductList";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Register from "./Pages/Ragister";
import Login from "./Pages/Login";
import AdminPanel from "./Pages/AdminPanel";

function App() {
  return (
    <>
      <Router>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
