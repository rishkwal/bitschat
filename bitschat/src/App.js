import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    //BEM Naming convention
    <div className="app">
      <div class="app_body">
        <Sidebar/>
        <Chat/>    
      </div> 
    </div>
  );
}

export default App;
