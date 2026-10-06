import { Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout.jsx';
import Home from './pages/Home/Home.jsx';
import Catalog from './pages/Catalog/Catalog.jsx';
import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import About from "./pages/About/About.jsx";
import Product from "./pages/Product/Product.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="catalog" element={<Catalog />} />
                <Route path="catalog/:category" element={<Catalog />} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="about" element={<About />} />
                <Route path="product/:id" element={<Product />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App;