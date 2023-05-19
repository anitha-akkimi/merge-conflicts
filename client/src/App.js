import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MyDashBoard from './components/mydashboard';
import Header from './components/header';
import MyProject from './components/myProject';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>  
        <Routes>
        <Route path='/' element={<MyDashBoard/>}/>
        <Route exact path='/projects' element={<MyProject/>}/> 
        </Routes>
        </BrowserRouter>
    
    </>
    
  );
}

export default App;
