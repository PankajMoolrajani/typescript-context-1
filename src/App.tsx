import { useState, createContext, useContext } from "react";

import TrendingCard from "./components/TrendingCard";
import WatchListCard from "./components/WatchListCard";
import WatchListContext from "./contexts/WatchListContext";

import "./styles.css";

export default function App() {
  // let initalWatchList = [
  //   { id: "1", name: "Tesla Inc", symbol: "TSLA" },
  //   { id: "2", name: "Pinterest Inc", symbol: "PINS" }
  // ];
  // let [watchList, setWatchList] = useContext(WatchListContext);
  return (
    <div className="App" style={{ textAlign: "left" }}>
      <TrendingCard />
      <WatchListCard />
    </div>
  );
}
