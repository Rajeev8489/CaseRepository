import './App.css';
import Navbar from './components/Navbar';
import Footbar from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Claim from './pages/claimform';
import Contact from './pages/contact';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/claimform' component={Claim} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footbar />
      </Router>
      
    </div>
  );
}

export default App;
