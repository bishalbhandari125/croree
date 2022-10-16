import {BrowserRouter as  Router,Routes,Route} from "react-router-dom"
import Login from './Components/Login';
import Politicianlistformain from "./Components/MainpageComp/Politicianlistformain";
import Registration from './Components/Registration';
import Detailedpage from "./Pages/Detailedpage";
import Mainpage from './Pages/Mainpage';
import Compareslideup from "./Components/Compareslideup";


function App() {
  return (
    <>
    <Router>
       <Mainpage>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/mainpage' element={<Politicianlistformain /> } />
          <Route path="/detailedpage" element={<Detailedpage/>} />
          <Route path="/compareslideup" element={<Compareslideup/>} />
        </Routes>
     </Mainpage> 
    </Router>
    </>
  );
}

export default App;
