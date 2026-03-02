import { Route, Routes } from "react-router-dom";
import "./App.css";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SingleProductPage from "./pages/SingleProductPage";

function App() {
  return (
    <div className=" bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 pt-20">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
