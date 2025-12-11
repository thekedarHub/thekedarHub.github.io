import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNavigation from './components/BottomNavigation';
import Home from './pages/Home';
import Search from './pages/Search';
import Jobs from './pages/Jobs';
import Profile from './pages/Profile';
import BookSurvey from './pages/BookSurvey';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="pb-nav">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/book-survey" element={<BookSurvey />} />
          </Routes>
        </div>
        <BottomNavigation />
      </div>
    </Router>
  );
}

export default App;