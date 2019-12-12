import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';

function App() {
  const { t } = useTranslation();

  function handleClick(lang){
  i18next.changeLanguage(lang);
  }
  return (
    <div className="App">
      <nav styler = {{width: '100%', padding: '2rem 0', backgroundColour: 'blue'}}>
        <button onClick={()=>handleClick('en')}>
          English
        </button>
        <button onClick={()=>handleClick('ko')}>
          Korean
        </button>
        <button onClick={()=>handleClick('chi')}>
          Chinese
        </button>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t('MainScreenFirstLine.1')}</p>
        <p>{t('MainScreenSecondLine.1')}</p>
      </header>
    </div>
  );
}

export default App;
