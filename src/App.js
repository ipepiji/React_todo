import './App.css';
import Header from './components/layouts/Header';
import Homepage from './components/pages/Homepage';
import Aboutus from './components/pages/Aboutus';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route path='/aboutus' component={Aboutus} />
        </Router>
      </div>
    </div>
  );
}

export default App;
