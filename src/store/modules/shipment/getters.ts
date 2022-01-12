import { GetterTree } from "vuex";
import ShipmentState from "./ShipmentState";
import RootState from "../../RootState";

const getters: GetterTree<ShipmentState, RootState> = {
  getSearchProducts(state) {
    return state.shipments.list;
  },
  getCurrent (state) {
    return state.current;
  }
};
export default getters;
