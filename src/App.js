
import './App.css';
import Wicomm from './Wicomm';
import { Navbar } from './components/Navbar';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Wicomm/>
    </div>
  );
}

export default App;
