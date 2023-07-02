import React from "react";
import ReactDOMClient from "react-dom/client";
import { ProductDetailsPage } from "./screens/ProductDetailsPage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ProductDetailsPage />);
