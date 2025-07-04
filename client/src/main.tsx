import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

document.title = "Some Kind Of Programmers - Telegram Community";

createRoot(rootElement).render(<App />);
