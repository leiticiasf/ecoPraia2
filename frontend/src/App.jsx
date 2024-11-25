import './App.css';
import React from 'react';
import Home from './componentes/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Entrar from "./componentes/Entrar";
import Visualizar from "./componentes/Visualizar";
import PontoDeColeta from "./componentes/pontoDeColeta";
import Mapa from "./componentes/Mapa";
import EditarPerfil from './componentes/EditarPerfil';
import Registros from './componentes/Registros';
import Logado from './componentes/logado';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <>

<Router>
      {}
      <Routes>
         {}
        <Route path="/users" element={<Entrar />} />
        {}
        <Route path="/" element={<Home />} />
        {}
        <Route path="/mapa" element={<Mapa />} />
        {}
        <Route path="/pontoDeColeta" element={<PontoDeColeta />} />
        {}
        <Route path="/visualizar" element={<Visualizar/>} />
        {}
        <Route path="/editarPerfil" element={<EditarPerfil />} />
        {}
        <Route path="/registros" element={<Registros />} />
        {}
        <Route path="/homel" element={<Logado />} />
         </Routes>

        </Router>

          </>
  );  
}

export default App;
