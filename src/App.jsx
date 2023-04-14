import React, { useState, useEffect } from 'react';

import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {
  const lsPacientes = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes] = useState(lsPacientes);
  const [paciente, setPaciente] = useState({});

  // useEffect(()=> {
  //   let lsPacientes = localStorage.getItem('pacientes');
  //   if (lsPacientes){
  //     lsP
  //   }
  //   lsPacientes = lsPacientes = JSON.parse(lsPacientes) : []
  //   console.log(lsPacientes);
  //   setPacientes(lsPacientes);
  // }, [])

  useEffect(()=> {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }



  return (
    <div className="container mx-auto">
      <Header
      />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
