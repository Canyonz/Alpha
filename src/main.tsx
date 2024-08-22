import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { AppStore } from "./app/providers/store/index.ts";
import "./app/styles/index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AppStore>
			<App />
		</AppStore>
	</StrictMode>
);
