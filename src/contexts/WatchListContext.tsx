import { createContext } from "react";

import WatchListType from "../types/WatchListType";
import TickrType from "../types/TickrType";
// const WatchListContext = createContext<WatchListType[] | []>([]);

interface WatchListContextType {
  tickrs: TickrType[];
  setWatchList: (tickrs: TickrType[]) => {};
}
const WatchListContext = createContext<WatchListContextType | undefined>(
  undefined
);

export { WatchListContextType };
export default WatchListContext;
