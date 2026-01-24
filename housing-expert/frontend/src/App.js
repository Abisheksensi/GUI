import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage.jsx';
import LoginPage from './Pages/OnboardingPages/LoginPage/LoginPage.jsx';
import SignInPage from './Pages/OnboardingPages/SignInPage/SignInPage.jsx';
import Properties from './Pages/Properties/Properties.jsx';
import AgentsPage from './Pages/Agents/AgentsPage.jsx';
import Layout from './Components/Layout.jsx';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Routes with NavBar (using Layout) */}
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/agents" element={<AgentsPage />} />
          </Route>
          {/* Routes without NavBar (onboarding pages) */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;