import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useStateValue} from './StateProvider';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login'

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    
    <div className="app">
      {(!user || !user.email.endsWith('bits-pilani.ac.in')) ?(
        <Login/>
      ) :(
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
)}

          </div>
  );
}

export default App;
