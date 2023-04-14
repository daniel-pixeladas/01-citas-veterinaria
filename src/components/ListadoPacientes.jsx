import Paciente from './Paciente'

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente}) {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-center text-3xl">Listado de Pacientes</h2>
          <p className="mt-5 mb-10 text-center">Administra tus {""} <span className="text-indigo-600 font-bold">pacientes</span></p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente} 
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}/>
          ))}

        </>
      ) : (
        <>
          <h2 className="font-black text-center text-3xl">No hay pacientes</h2>
          <p className="mt-5 mb-10 text-center">Empieza a crearlos {""} <span className="text-indigo-600 font-bold">y aparecerán aquí</span></p>
        </>
      )
      }
    </div>


  )
}

export default ListadoPacientes