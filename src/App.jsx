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
    <div className="myContainer row p-3 p-xl-5 align-items-xl-center">
    
        <div className='listContainer col-12 col-xl-9'>
            <h1>Lista de colaboradores</h1>
            <Buscador colaboradores = {colaboradores} setColaboradores = {setColaboradores} baseColaboradores={BaseColaboradores} />
            <Listado arrayColaboradores = {colaboradores} />         
        </div>
        <div className="formContainer col">
            <Formulario setColaboradores = {setColaboradores} colaboradores ={colaboradores} setVerificacion={setVerificacion} />
            <Alert mensaje= {verificacion} />
        </div>

    </div>
  );
    
}

export default App
