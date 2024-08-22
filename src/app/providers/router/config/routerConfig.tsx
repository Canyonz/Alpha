import { CardDetailsPage } from "@/pages/cardDetailsPage";
import { CardsPage } from "@/pages/cardsPage";
import { getRouteCard, getRouteCards } from "@/shared/consts/routes";
import { createBrowserRouter } from "react-router-dom";

export const routesConfig = createBrowserRouter([
	{
		path: getRouteCards(),
		element: <CardsPage />,
	},
	{
		path: getRouteCard(":id"),
		element: <CardDetailsPage />,
	},
]);
