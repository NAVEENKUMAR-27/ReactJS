  import logo from './logo.svg';
  import './App.css';
  import { Hello } from './components/moodel-task/task1/hello_task';
  import { Card } from './components/moodel-task/task2/card_task';
  import { Ipl } from './components/moodel-task/task3/task_super';
  import { Button } from './components/moodel-task/task4/button';
  import { Menu } from './components/moodel-task/menu/menu';
  import { BrowserRouter,Routes,Route} from 'react-router-dom'
  import { Sign } from './components/moodel-task/form/form';
  import { Resume } from './components/moodel-task/resume/resume';
  import { Noti } from './components/moodel-task/notification/notification';
  import { Login } from './components/moodel-task/login/login';
  import { Tech } from './components/moodel-task/technolgy/tech';
  import { Calculator } from './components/moodel-task/hookstask1/hooks';
  import { Fruits } from './components/moodel-task/fruits_task/fruits';
  import { Feed } from './components/moodel-task/feedback/feedback';
  import { Back } from './components/moodel-task/feedback/feedback1';
  import { Date_add } from './components/moodel-task/Date_function/date';
  import { About, Menu_port } from './components/portfolio/Menu-bar/port_menu';
  import { Firstjson } from './components/moodel-task/jason/newjason';
  import { Porthome } from './components/portfolio/Home/prot_home';
  import { Api } from './components/moodel-task/jason/fakeproduct';
  import { Deta } from './components/moodel-task/jason/product deatils/prodetails';
  import { About_me } from './components/portfolio/about/port_about';
  import { Port_contact } from './components/portfolio/contacts/port_contact';
  import { Certificate_port } from './components/portfolio/certificates/port_certificate';
  import { Example } from './components/portfolio/example';
  import { Education } from './components/portfolio/education/port_education';
  import { Overall } from './components/portfolio/Menu-bar/overall';
  import { Skill } from './components/portfolio/Skills/port_Skill';
  import { Prot_project } from './components/portfolio/My work/port_project';
  import { Photoshop } from './components/portfolio/My work/photoshop';
  import { Live } from './components/moodel-task/weather/weathe';
  import { Weather_live } from './components/moodel-task/weather/weather_effect';
  import { Cricket} from'./components/moodel-task/live scroe/livescroe'
  import { Html_work } from './components/portfolio/My work/html/pro_html';
  import {Skills_jason} from './components/skills task/skills_task';



 

  
  function App() {
    return (
      <>


           {/* <Live/> */}
           {/* <Weather_live/> */}
           {/* <Cricket/> */}
           
       {/* <BrowserRouter>
       <Routes>
             <Route path='/moodel' element={<Menu/>}/>
             <Route path='/res' element={[<Menu/>,<Resume/>]}/>
             <Route path='/Sign' element={[<Menu/>,<Sign/>]}/>
             <Route path='/Card' element={[<Menu/>,<Hello/>]}/>
             <Route path='/Ipl' element={[<Menu/>,<Ipl/>]}/>
             <Route path='/But' element={[<Menu/>,<Button/>]}/>
             <Route path='/Hello' element={[<Menu/>,<Card/>]}/>
             <Route path='/Noti' element={[<Menu/>,<Noti/>]}/>
             <Route path='/Login' element={[<Menu/>,<Login/>]}/>
             <Route path='/Tech' element={[<Menu/>,<Tech/>]}/>
             <Route path='/Cal' element={[<Menu/>,<Calculator/>]}/>
             <Route path='/Fru' element={[<Menu/>,<Fruits/>]}/>
             <Route path='/Feed' element={[<Menu/>,<Feed/>]}/>
             <Route path='/Bac' element={[<Menu/>,<Back/>]}/>
             <Route path='/Date' element={[<Menu/>,<Date_add/>]}/>
             <Route path='/Products' element={[<Menu/>,<Api/>]}/>
             <Route path='/Deta/:id' element={[<Menu/>,<Deta/>]}/>
             <Route path='/weather' element={[<Menu/>,<Weather_live/>]}/>
             <Route path='/Photo' element={[<Menu_port/>,<Photoshop/>]}/>
             <Route path='/Html' element={[<Menu_port/>,<Html_work/>]}/>  */}

                       {/* //port folio// */}
                 {/* <Route path='/' element={[<Menu_port/>,<Porthome/>,<About_me/>,<Education/>,<Certificate_port/>,<Skill/>,<Prot_project/>,<Port_contact/>]}/>
                
        </Routes>
      </BrowserRouter> */}

 {/* <BrowserRouter> 
       <Routes>
             
            <Route path='/' element={[<Menu/>,<Resume/>,<Tech/>,<Sign/>,<Card/>,<Ipl/>,<Button/>,<Hello/>,<Noti/>,<Login/>,<Calculator/>,<Fruits/>,<Feed/>,<Back/>,<Date/>,<Api/>,<Deta/>]}/>
  
          </Routes>
      </BrowserRouter>  */}







        <Skills_jason/>
       


{/* 
       <BrowserRouter>
         <Routes>
                
                <Route path='/' element={[<Menu_port/>,<Porthome/>]}/>
                <Route path='/About_me' element={[<Menu_port/>,<About_me/>]}/>
                <Route path='/port_education' element={[<Menu_port/>,<Education/>]}/>
                <Route path='/certifi' element={[<Menu_port/>,<Certificate_port/>]}/>
                <Route path='/Skil' element={[<Menu_port/>,<Skill/>]}/>
                <Route path='/Contact' element={[<Menu_port/>,<Port_contact/>]}/>
                <Route path='/Project' element={[<Menu_port/>,<Prot_project/>]}/>
         </Routes>
         
       </BrowserRouter> */}

{/* <Photoshop/> */}

    

           
      </>
    );
  }

  export default App;

