import { AppDispatchType } from "@/app/providers/store/config/storeConfig";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatchType>();
