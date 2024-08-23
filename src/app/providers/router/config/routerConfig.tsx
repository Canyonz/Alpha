import { CardDetailsPage } from "@/pages/cardDetailsPage";
import { CardsPage } from "@/pages/cardsPage";
import { getRouteCard, getRouteCards } from "@/shared/consts/routes";
import { createHashRouter } from "react-router-dom";

export const routesConfig = createHashRouter([
	{
		path: getRouteCards(),
		element: <CardsPage />,
	},
	{
		path: getRouteCard(":id"),
		element: <CardDetailsPage />,
	},
]);
