import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BoardProvider } from "./provider/BoardProvider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <BoardProvider>
        <App />
    </BoardProvider>
);
