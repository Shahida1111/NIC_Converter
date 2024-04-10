import Login from './Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup';
import NicConversion from './NicConversion';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/NicConversion' element={<NicConversion/>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
