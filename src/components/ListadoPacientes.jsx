import Paciente from './Paciente'

export default function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {

  return (

    <div className="md:w-1/2 lg:w-3/5 mx-5 md:h-screen md:overflow-y-scroll">
      {pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg mt-5 mb-5 text-center">Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>
          {pacientes.map(paciente => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes aún</h2>
          <p className="text-xl mt-5 mb-5 text-center">Comienza agregando pacientes y <span className="text-indigo-600 font-bold">Apareceran en este lugar</span></p>
        </>
      )}    
    </div>
  )
}
