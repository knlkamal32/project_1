import { Navigate, Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import Checkout from "./Checkout";
import Nav from "./Nav";


function Home() {

    return(
        <div>
            <Nav />
            <Routes>
                <Route path="/add_products" element={<AddProduct />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/" element={<Navigate to={'/add_products'} />} />
            </Routes>
        </div>
    )
}

export default Home;