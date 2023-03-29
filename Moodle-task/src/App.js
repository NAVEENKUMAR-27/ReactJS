  import logo from './logo.svg';
  import './App.css';
  import { Hello } from './components/task1/hello_task';
  import { Card } from './components/task2/card_task';
  import { Ipl } from './components/task3/task_super';
  import { Button } from './components/task4/button';
  import { Menu } from './components/menu/menu';
  import {BrowserRouter,Routes,Route} from 'react-router-dom'
  import { Sign } from './components/form/form';
  import { Resume } from './components/resume/resume';
  import { Noti } from './components/notification/notification';
  import { Login } from './components/login/login';
  import { Tech } from './components/technolgy/tech';
import { Calculator } from './components/hookstask1/hooks';
import { Fruits } from './components/fruits_task/fruits';
import { Feed } from './components/feedback/feedback';
import { Back } from './components/feedback/feedback1';
import { Date } from './components/Date_function/date';
 

  
  function App() {
    return (
      <>
      <BrowserRouter>
       <Routes>
            <Route path='/' element={[<Menu/>,<Resume/>]}/>
            <Route path='/Sign' element={[<Menu/>,<Sign/>]}/>
            <Route path='/Card' element={[<Menu/>,<Card/>]}/>
            <Route path='/Ipl' element={[<Menu/>,<Ipl/>]}/>
            <Route path='/But' element={[<Menu/>,<Button/>]}/>
            <Route path='/Hello' element={[<Menu/>,<Hello/>]}/>
            <Route path='/Noti' element={[<Menu/>,<Noti/>]}/>
            <Route path='/Login' element={[<Menu/>,<Login/>]}/>
             <Route path='/Tech' element={[<Menu/>,<Tech/>]}/>
             <Route path='/Cal' element={[<Menu/>,<Calculator/>]}/>
             <Route path='/Fru' element={[<Menu/>,<Fruits/>]}/>
             <Route path='/Feed' element={[<Menu/>,<Feed/>]}/>
             <Route path='/Bac' element={[<Menu/>,<Back/>]}/>
             <Route path='/Date' element={[<Menu/>,<Date/>]}/>
             

        </Routes>
      </BrowserRouter>
      </>
    );
  }

  export default App;

