import { Provider } from "react-redux";
import { storeConfig } from "../config/storeConfig";
import { ReactElement } from "react";

interface AppStoreProps {
	children: ReactElement;
}

export const AppStore = ({ children }: AppStoreProps) => {
	return <Provider store={storeConfig}>{children}</Provider>;
};
