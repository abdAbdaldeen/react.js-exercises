import './App.css';
import Home from './pages/home/home'
import ToDo from './pages/todo/todo'
import Header  from "./component/header/header";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import {UserContext} from './UserContext'
function App() {
  return (
    <Router>
          <div className="App">
      <Header />
      <UserContext.Provider value='Hello from context'>
      <Route path="/" exact component={Home} />
      <Route path="/todo" component={ToDo} />
      </UserContext.Provider>

    </div>
    </Router>

  );
}

export default App;
