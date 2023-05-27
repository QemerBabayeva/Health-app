
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './tailwind.css'
import CulturePage from './Pages/CulturePage';
import HomePage from './Pages/HomePage';
import PoliticsPage from './Pages/PoliticsPage';
import SportPage from './Pages/SportPage';
import ReviewsPage from './Pages/ReviewsPage';
import MemesPage from './Pages/MemesPage';
import BoxedPage from './Pages/BoxedPage';
import FixedComponents from './Router/FixedComponents';
import FeaturedPage from './Pages/FeaturedPage';
import SportSecondPage from './Pages/SportSecondPage';
import FashionPage from './Pages/FashionPage';
import TechnologyPage from './Pages/TechnologyPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FixedComponents/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/culture" element={<CulturePage/>}/>
        <Route path="/sport" element={<SportPage/>}/>
        <Route path="/reviews" element={<ReviewsPage/>}/>
        <Route path="/boxed" element={<BoxedPage/>}/>
        <Route path="/politics" element={<PoliticsPage/>}/>
        <Route path="/memes" element={<MemesPage/>}/>
        <Route path="/featured" element={<FeaturedPage/>}/>
        <Route path="/sportsecond" element={<SportSecondPage/>}/>
        <Route path="/fashion" element={<FashionPage/>}/>
        <Route path="/technology" element={<TechnologyPage/>}/>
        
        </Route>

      </Routes>
    
    </div>
  );
}

export default App;
