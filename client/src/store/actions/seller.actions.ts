import { AppDispatch } from "..";
import axios from "../../axios";
import { sellersSlice } from "../slices/seller.slice";

export const fetchSellers = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(sellersSlice.actions.fetching());
      const { data } = await axios.get("sellers");
      // console.log(data);
      dispatch(sellersSlice.actions.fetchingSuccess(data));
    } catch (e) {
      dispatch(sellersSlice.actions.fetchingError(e as Error));
    }
  };
};
