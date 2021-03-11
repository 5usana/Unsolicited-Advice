import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Advice from './components/Advice';
import Buttons from './components/Buttons';
import { Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>
      <main>
        <Route path="/advice" component={Advice} />
     

      </main>
      
    </div>
  );
}

export default App;
