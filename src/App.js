import logo from './logo.svg';
import './App.css';
import { Timer } from './Components/Timer';

function App() {
  return (
    <div className="App">
      <Timer initial={0} end = {20}/> 
    </div>
  );
}

export default App;
