import './App.css';
import Nav from './components/Nav';
import Advice from './components/Advice';
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
