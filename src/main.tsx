import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Button } from "./components/practice/Button.tsx";
import { Ref } from "./components/practice/Ref.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <Ref />
      <Button />
      <App />
    </>
  </StrictMode>
);
