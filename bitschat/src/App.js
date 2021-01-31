import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    
    <div className="app">
      <div class="app_body">
      <Router>
        <Sidebar/>
        <Switch>
          <Route path="/rooms/:roomId">
          <Chat/>
          </Route>
        </Switch>
      </Router>    
      </div> 
    </div>
  );
}

export default App;
