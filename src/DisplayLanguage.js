import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function DisplayLanguage() {
  const text = {
    en: {
      title 'You selected "English"',
    },
    it: {
      title: 'Hai selezionato "Italiano"',
    },
  };

  const language = useContext(LanguageContext);

  return (
    <>
      <h1>{text[language].title}</h1>
      <p>(The value received from provider is: {language})</p>
    </>
  );
}

export default DisplayLanguage;

