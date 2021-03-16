import './App.css';
import Nav from './components/Nav';
import Advice from './components/Advice';
import Home from './components/Home';
import { Route } from "react-router-dom";


function App() {
  return (
    <div className="grid-container">
      <nav > 
        <Nav />
      </nav>
      <main>
        <Route path="/" exact component={Home} />
        <Route path="/advice" exact component={Advice} />
      </main>   
    </div>
  );
}

export default App;
