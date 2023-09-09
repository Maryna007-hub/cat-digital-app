import Weather from './Weather'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        
         <Weather/>
          <footer>
          This project was coded by 
           <a href='/'> Maryna Holinka </a>
           and is <a href='https://github.com/Maryna007-hub/digital-ocean-tutorial'
          target="_blank"
          rel="noopener noreferrer">
     open-soursed on GitHub
        </a>
        </footer>
    </div>
  </div>
  );
}

export default App;