import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Disclosure from './pages/Disclosure'
import ProjectView from './pages/ProjectView';
import Submission from './pages/Submission'
import NotFound from './pages/NotFound';
import WebGamePage from './pages/WebGame'
import ScrollToTop from './components/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <NavBar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' exact component={About}/>
            <Route path='/contact' exact component={Contact}/>
            <Route path='/disclosure' exact component={Disclosure}/>
            <Route path='/game' exact component={WebGamePage}/>
            <Route path='/project-view' exact component={ProjectView}/>
            <Route path='/submission' exact component={Submission}/>
            <Route path='*' exact component={NotFound}/>
          </Switch>
          <Footer />
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;
