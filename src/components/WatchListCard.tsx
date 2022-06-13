// import stuff from react library
import React, { useContext, useEffect, useState } from "react";
import LanguageContext from "../contexts/LanguageContext";
import { WatchListContextType } from "../contexts/WatchListContext";
import LanguageSwitcher from "./../components/LanguageSwitcher";
const WatchListCard: React.FC = () => {
  // state variable and setter functions
  // let watchListTickrs: WatchListContextType = [
  //   { id: "8", name: "Google Inc", symbol: "GOOGL" },
  //   { id: "9", name: "Meta Inc", symbol: "FB" }
  // ];
  const [language, setLanguage] = useState("en");
  const value = { language, setLanguage };
  return (
    <LanguageContext.Provider value={value}>
      <h2>Current Language: {language}</h2>
      <LanguageSwitcher />
      <div>
        <h1>WatchList Tickrs</h1>
      </div>
    </LanguageContext.Provider>
  );
};

export default WatchListCard;
