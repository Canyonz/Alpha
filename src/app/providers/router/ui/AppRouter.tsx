import { RouterProvider } from "react-router-dom";
import { routesConfig } from "../config/routerConfig";

export const AppRouter = () => {
	return <RouterProvider router={routesConfig} />;
};
