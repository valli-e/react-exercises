import React, { useState, createContext } from 'react';

// LanguageContext
export const LanguageContext = createContext();

// DisplayLanguage component
const DisplayLanguage = () => {
  const [language, setLanguage] = useState('English');

  return (
    <LanguageContext.Provider value={language}>
      <h1>{`The current language is ${language}`}</h1>
    </LanguageContext.Provider>
  );
};

//  componente che renderizza DisplayLanguage component
const LanguageSelector = () => {
  const [language, setLanguage] = useState('English');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

   return (
    <div>
      <select value={language} onChange={handleChange}>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
      </select>
      <DisplayLanguage language={language} />
    </div>
  );
};

export default LanguageSelector;
