import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
 
 <Header></Header>
 <Outlet/>

    </div>
  );
}

export default App;
