import { Route, Routes } from "react-router-dom";
import "./App.css";
import MiniCart from "./components/MiniCart";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SingleProductPage from "./pages/SingleProductPage";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <MiniCart />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
