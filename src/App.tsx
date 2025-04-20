import React, { useState } from 'react';
import './App.css';


import About from './components/About';
import Interests from './components/Interests';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('home'); 

  let content;
  
  
  switch(activePage) {
    case 'home':
      content = <h2>Ana Sayfa İçeriği</h2>;
      break;
    case 'about':
      content = <About />;
      break;
    case 'interests':
      content = <Interests />;
      break;
    case 'skills':
      content = <Skills />;
      break;
    case 'projects':
      content = <Projects />;
      break;
    case 'contact':
      content = <Contact />;
      break;
    default:
      content = <h2>Ana Sayfa İçeriği</h2>;
  }

  return (
    <div className="App">
      <Navbar setActivePage={setActivePage} />
      <header className="App-header">
        <h1>Portföyümü Hoşgeldiniz</h1>
      </header>
      <main>
        {content} 
      </main>
    </div>
  );
};

export default App;
