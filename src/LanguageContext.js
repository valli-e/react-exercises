import React, { useState, useContext } from 'react';

const LanguageContext = React.createContext();

const DisplayLanguage = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <p>{`The current language is ${language}`}</p>
    </div>
  );
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('English');
  const changeLanguage = (event) => setLanguage(event.target.value);

  return (
    <LanguageContext.Provider value={{ language }}>
      <div>
        <select onChange={changeLanguage}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <DisplayLanguage />
    </LanguageProvider>
  );
};

export default App;
