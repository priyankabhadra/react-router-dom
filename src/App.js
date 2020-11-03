import './App.css';
import Home from './Home';
import About from './About';
import Nav from './Nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FirstPage from './component/firstpage';
import SecondPage from './component/secondpage';
import ThirdPage from './component/thirdpage';
import FinalPage from './component/FinalPage';

function App() {
  return (
    <>
    <Switch>
      <Router>
        <div className="App">
        <h1>App</h1>
        </div>
        <Route exact path="/" component={Shop}>
        </Route>
        <Route exact path="/home" component={Home}>
        </Route>
        <Route exact path="/about" component={About}>
        </Route>
        <Route exact path="/nav" component={Nav}>
        </Route>
        <Route path="/firstpage" exact component={FirstPage}>
        </Route>
        <Route path="/secondpage" exact component={SecondPage}>         
        </Route>
        <Route path="/thirdpage" exact component={ThirdPage}>         
        </Route>
        <Route path="/finalpage" exact component={FinalPage}>
        </Route>
    </Router>
    </Switch>
    </>
  );
}


const Shop = () => {
  return(
    <div>
      <h3>Shop Page</h3>
    </div>
  )
}

export default App;
