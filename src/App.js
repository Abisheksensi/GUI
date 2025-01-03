import './index.css'; // Ensure Tailwind is configured in this file
import Button from './components/Button'; 
import NavBar from './components/NavBar';

function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <NavBar/>
      <Button text="Primary Button" onClick={handleClick} styleType="primary" />
      <Button text="Secondary Button" onClick={handleClick} styleType="secondary" />
    </div>
  );
}

export default App;

