import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage.jsx';
import LoginPage from './Pages/OnboardingPages/LoginPage/LoginPage.jsx';
import Properties from './Pages/Properties/Properties.jsx';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/properties" element={<Properties/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;