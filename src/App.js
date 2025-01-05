import './index.css'; // Ensure Tailwind is configured in this file
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
function App() {

  return (
    <div>
      <NavBar/>
       <div className="max-7-xl mx-auto pt-20 px-6"></div>
       <HeroSection/>
    </div>
  );
}

export default App;

