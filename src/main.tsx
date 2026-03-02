import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Footer from "./components/Footer.tsx";
import MainHeader from "./components/MainHeader.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MainHeader />
      <div className="min-h-[50vh] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 pt-24">
        <div className="container">
          <App />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
