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

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[72vh] bg-bio-City-cream">
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
              <Route path="/editproducts/:id" element={<FormProduct />} />
              <Route path="/deletproducts/:id" element={<DeleteProduct />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
