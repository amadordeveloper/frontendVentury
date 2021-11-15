// styles 
import './App.css';

//Componentes 
import Header from './components/header/Header';
import Welcome from './components/home/Welcome';
import Sidebar from './components/sidebar/Sidebar';

// assets
import avatar from "./assets/images/avatar.png";
import Events from './components/home/events/Events';
import Activity from './components/home/activity/Activity';
import Progress from './components/home/progress/Progress';

function App() {
  const user = {
    name: "Clarence",
    lastName: "Russell",
    avatar: avatar
}
  return (
    <div className="App">
      <Header user={user}/>
      <Sidebar />
      <Welcome user={user}/>
      <Events />
      <Activity/>
      <Progress/>
    </div>
  );
}

export default App;
