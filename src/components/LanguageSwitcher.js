import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  console.log(i18n.language);

  return (
    <div className="flex gap-1 items-center">
      <button
        className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
          i18n.language === "en" || i18n.language === "en-US"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 hover:bg-gray-300 text-gray-700"
        }`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <span className="text-gray-400">|</span>
      <button
        className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
          i18n.language === "tr"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 hover:bg-gray-300 text-gray-700"
        }`}
        onClick={() => changeLanguage("tr")}
      >
        TR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
