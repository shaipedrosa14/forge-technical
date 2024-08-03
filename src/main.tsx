import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import "./assets/styles/index.css";
import { QuestionProvider } from "./providers/QuestionProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
     <QuestionProvider>
      <App />
    </QuestionProvider>
  </React.StrictMode>
);
