import './App.css';
import Header from './componentes/layuot/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Cuentasc } from "./pages/Cuentasc";
import {CompCreateCc} from './pages/createCc';
import EditCc from './pages/editCc';
import { MostrarUsuarios } from './pages/mostrarUsuarios';
import CompCreateUsers from './pages/createUsers';
import EditUser from './pages/editUser';
import { Error404 } from './pages/Error404';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cuentasc" element={<Cuentasc/>}/>
          <Route path="/createCc" element={<CompCreateCc/>}/>
          <Route path="/editCc/:id" element={<EditCc/>}/>
          <Route path="/usuarios" element={<MostrarUsuarios/>}/>
          <Route path="/createUsers" element={<CompCreateUsers/>}/>
          <Route path="/editUsers/:id" element={<EditUser/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
