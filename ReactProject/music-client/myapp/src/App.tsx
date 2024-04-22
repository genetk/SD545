
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/welcome";

import Login from "./components/Login/Login.componenets";

function App() {

 return(
<div className="container">
  

  <Routes>
    <Route path='/' element={<Navigate to='/login'/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/welcome' element={<Welcome/>}></Route>
    
  </Routes>
</div>

  )

 
}
export default App;
