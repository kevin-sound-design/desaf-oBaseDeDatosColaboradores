import './App.css'
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';
import { BaseColaboradores } from './js/baseColaboradores'
import Listado from './components/Listado';
import { useState } from 'react';

function App() {

  const [colaboradores, setColaboradores]=useState(BaseColaboradores);
  const [verificacion, setVerificacion]=useState("");

  return (
    <div className="myContainer">
    
        <div className='listContainer'>
            <h1>Lista de colaboradores</h1>
            <Buscador colaboradores = {colaboradores} setColaboradores = {setColaboradores} baseColaboradores={BaseColaboradores} />
            <Listado arrayColaboradores = {colaboradores} />         
        </div>
        <div className="formContainer">
            <Formulario setColaboradores = {setColaboradores} colaboradores ={colaboradores} setVerificacion={setVerificacion} />
            <Alert mensaje= {verificacion} />
        </div>

    </div>
  );
    
}

export default App
