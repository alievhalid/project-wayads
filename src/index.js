import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./common/App";
import { BrowserRouter } from "react-router-dom";
import "./firebase";
// Создаем корневой элемент для рендеринга
const rootElement = document.getElementById("root");

// Создаем корневой узел с помощью createRoot
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
            <App />
    </BrowserRouter>
  </React.StrictMode>
);