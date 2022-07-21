import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AppNav from './components/AppNav/AppNav.jsx';
import { HashRouter as HashRouter, Routes, Route } from 'react-router-dom';
import navItems from './data/sections.json';
import HomePage from './pages/HomePage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import SectionPage from './pages/SectionPage.jsx';

// moved AppNav into HashRouter to allow use of useNavigation hook in AppNav

function App() {
  return(
    <div className='app'>
      <HashRouter>
      <AppNav navitems={navItems} handleNavClick={(clickedItem) => { console.log(clickedItem) }} />
      <div className='section'>
        <Routes>
          <Route exact path="/" element={ <HomePage /> } />
          <Route exact path="/articles/:articleID" element={ <ArticlePage /> } /> 
          <Route exact path="/sections/:section" element={ <SectionPage /> } />
        </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;