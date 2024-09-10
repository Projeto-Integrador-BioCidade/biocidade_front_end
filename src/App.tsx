import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Register from "./pages/register/Register";
import Login from "./pages/login/login";
import { AuthProvider } from "./contexts/AuthContext";
import DeleteCategory from "./components/category/delete/DeleteCategory";
import FormCategory from "./components/category/form/FormCategory";
import ListCategory from "./components/category/list/ListCategory";
import DeleteProduct from "./components/product/delete/DeleteProduct";
import FormProduct from "./components/product/form/FormProduct";
import ListProduct from "./components/product/list/ListProduct";
import Perfil from "./pages/perfil/Perfil";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <>
      <CartProvider>
        <AuthProvider>
          <BrowserRouter>
            <Navbar/>
            <div className="bg-bio-City-cream">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/categories" element={<ListCategory />} />
                <Route path="/editcategories/:id" element={<FormCategory />} />
                <Route path="/deletcategories/:id" element={<DeleteCategory />} />
                <Route path="/products" element={<ListProduct />} />
                <Route path="/products/:id" element={<ListProduct />} />
                <Route path="/cadproducts" element={<FormProduct />} />
                <Route path="/editarproduto/:id" element={<FormProduct />} />
                <Route path="/deletarproduto/:id" element={<DeleteProduct />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </CartProvider>

    </>
  );
}

export default App;
