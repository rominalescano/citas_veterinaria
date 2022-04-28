import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'



function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente]= useState({});

  useEffect(()=>{
    const obtenerLocalStorage = ()=> {
      const pacientesLS= JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
    } 
    obtenerLocalStorage();
  }, []); //se ejecuta una sola vez, cuando el componente está listo

  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify (pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id)=>{
    const pacientesActualizados= pacientes.filter(paciente=> paciente.id !== id); 
    // filtro los pacientes que no quiero eliminar
    setPacientes(pacientesActualizados);
  }

  return (
    <div>
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario 
        pacientes= {pacientes}
        setPacientes= {setPacientes}
        paciente={paciente}
        setPaciente= {setPaciente}
        />

        <ListadoPacientes 
        pacientes= {pacientes}
        setPaciente= {setPaciente}
        eliminarPaciente= {eliminarPaciente}
        />
      </div>
   
    </div>
  )
}

export default App
