import { useState, useEffect } from "react"
import Error from './Error';

const Formulario = ({setPacientes, pacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    } 
  }, [paciente]);


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")){
      setError(true);
      return;
    } 
    setError(false);
    const generarId = () => {
      const random = Math.random().toString(36).substring(2);
      const fecha = Date.now().toString();
      // console.log(fecha);
      return fecha + random;
    }

    const objetoPaciente = {
      nombre, propietario, email, fecha, sintomas
    }

    if (paciente.id) {
      // Editando el registro
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id 
        ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      // Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }
    
    // setNombre("");
    // setPropietario("");
    // setEmail("");
    // setFecha("");
    // setSintomas("");
  }


  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Segumiento pacientes</h2>
      <p className="text-lg mt-5 mb-10 text-center">Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}>
          {error && (
            <Error mensaje="Faltan datos en el formulario" />
          )}
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre mascota</label>
          <input id="mascota" 
            value={nombre} onChange={(e) => setNombre(e.target.value)}
            type="text" placeholder="Nombre mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre propietario</label>
          <input id="propietario" 
            value={propietario} onChange={(e) => setPropietario(e.target.value)}
            type="text" placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
          <input id="email" 
            value={email} onChange={(e) => setEmail(e.target.value)}
            type="email" placeholder="Email contacto" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
          <input id="alta" 
            value={fecha} onChange={(e) => setFecha(e.target.value)}
            type="date" placeholder="Email contacto" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Síntomas</label>
          <textarea id="sintomas" 
            value={sintomas} onChange={(e) => setSintomas(e.target.value)}
            placeholder="Escribe los síntomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>

        <input type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold 
            hover:bg-indigo-800 rounded cursor-pointer transition-all" 
          value={paciente.id ? 'Guardar paciente' : 'Agregar paciente'}/>
      </form>
    </div>

  )
}

export default Formulario