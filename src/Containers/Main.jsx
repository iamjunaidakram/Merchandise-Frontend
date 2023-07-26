import Navbar from '../Components/Header/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterBar from '../Components/Footer/index';
import Home from './Pages/Home';
import SummerCollection from './Pages/SummerCollection';
import WinterCollection from './Pages/WinterCollection';
import Accessories from './Pages/Accessories';
import ShippingBar from '../Components/Home/ShippingBar/index';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Recover from './Pages/Recover';
import Cart from './Pages/Cart';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';

function MainPage() {
  return (
    <>
      <BrowserRouter>
        <ShippingBar />
        <Navbar />
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="/collection/summer-collection" element={<SummerCollection />} />
            <Route path="/collection/winter-collection" element={<WinterCollection />} />
            <Route path="/collection/accessories" element={<Accessories />} />
            <Route path="/account/login" element={<Login />} />
            <Route path="/account/register" element={<Register />} />
            <Route path="/account/recover" element={<Recover />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/terms-conditions" element={<Terms />} />
            <Route path="/privacy-policy" element={<Privacy />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <FooterBar />
    </>
  );
}

export default MainPage;
