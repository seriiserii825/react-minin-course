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
      <App />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
