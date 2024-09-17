import { useDispatch, useSelector } from "react-redux";
import type {
  StoreTypeDispatch,
  TByContractStore,
} from "../../../redux/store/store";

export const useAppSelector = useSelector.withTypes<TByContractStore>();
export const useAppDispatch = useDispatch.withTypes<StoreTypeDispatch>();
