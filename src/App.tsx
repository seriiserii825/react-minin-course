import { Route, Routes } from "react-router-dom";
import "./App.css";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SingleProductPage from "./pages/SingleProductPage";
import { useIsMiniCartOpen } from "./store/useMiniCartStorage";
import MiniCart from "./components/MiniCart";

function App() {
  const isOpen = useIsMiniCartOpen();
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {isOpen && <MiniCart />}
    </>
  );
}

export default App;
