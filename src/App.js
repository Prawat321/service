
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Allroutes from './component/allroute/Allroutes';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Allroutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
