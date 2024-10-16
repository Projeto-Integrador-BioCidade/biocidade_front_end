import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Register from "./pages/register/Register";
import Login from "./pages/login/login";
import { AuthProvider } from "./contexts/AuthContext";
import DeleteProduct from "./components/product/delete/DeleteProduct";
import FormProduct from "./components/product/form/FormProduct";
import ListProduct from "./components/product/list/ListProduct";
import Perfil from "./pages/perfil/Perfil";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./components/cart/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "./pages/produto/Product";
import Blog from "./pages/blog/Blog";

function App() {
  return (
    <>
      <CartProvider>
        <AuthProvider>
          <ToastContainer />
          <BrowserRouter>
            <Navbar />
            <div className="bg-fundo-base lg:*:min-h-[80vh]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={<ListProduct />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/registerproduct" element={<FormProduct />} />
                <Route path="/editarproduto/:id" element={<FormProduct />} />
                <Route path="/deletarproduto/:id" element={<DeleteProduct />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/blog" element={<Blog />} />
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
