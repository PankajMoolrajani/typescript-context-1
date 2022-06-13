import React, { useContext, useEffect } from "react";
import LanguageContext from "./../contexts/LanguageContext";

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <button onClick={() => setLanguage("jp")}>
      Switch Language (Current: {language})
    </button>
  );
};

export default LanguageSwitcher;
