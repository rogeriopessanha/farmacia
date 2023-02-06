
import './App.css';
import Header from './common/header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div >
      <Router>
      <Header />
      <Switch>
        {/* <Route path='/'>
          <About />
        </Route> */}
      </Switch>
      </Router>
    </div>
  );
}

export default App;
