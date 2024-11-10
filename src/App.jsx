import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./pages/Home.jsx";
import { Register } from "./pages/Register.jsx";
import { Login } from "./pages/Login.jsx";
import { Cart } from "./pages/Cart.jsx";
import { Pizza } from "./pages/Pizza.jsx";
import { Profile } from "./pages/Profile.jsx";
import { NotFound } from "./components/NotFound.jsx";
import { useUser } from "./context/UserContext.jsx";

function App() {
  const { token } = useUser();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:idPizza" element={<Pizza />} />
        <Route
          path="/profile"
          element={!token ? <Navigate to="/login" /> : <Profile />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
