import './App.css';
import Header from './components/layouts/Header';
import Homepage from './components/pages/Homepage';
import ListTodos from './components/pages/ListTodos';
import Aboutus from './components/pages/Aboutus';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <Router>
            <Header />
            <Route exact path="/" component={Homepage} />
            <Route path="/listtodos" component={ListTodos} />
            <Route path='/aboutus' component={Aboutus} />
          </Router>
        </div>
      </div>
    </Provider>
  );
}

export default App;
