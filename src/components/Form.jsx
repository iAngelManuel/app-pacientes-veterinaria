import { useState, useEffect } from 'react'
import Alert from './Alert'

export default function Form({ pacientes, setPacientes, paciente, setPaciente }) {

  const [mascota, setMascota] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  
  useEffect(() => {
    const { mascota, propietario, email, fecha, sintomas } = paciente

    if (Object.keys(paciente).length > 0) {
      setMascota(mascota)
      setPropietario(propietario)
      setEmail(email)
      setFecha(fecha)
      setSintomas(sintomas)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).slice(2)
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  const handleSubmit = e => {
    e.preventDefault()

    if([mascota, propietario, email, fecha, sintomas].includes('')) {
      return setError(true)
    }

    setError(false)

    const objetForm = {
      mascota,
      propietario,
      email,
      fecha,
      sintomas
    }

    if (paciente.id) { // Editando
      objetForm.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetForm : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      objetForm.id = generarId();
      setPacientes([...pacientes, objetForm])
    }

    setMascota('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 mb-5 text-center">Añade pacientes y <span className="text-indigo-600 font-bold">Administralos</span></p>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg py-10 px-5 mb-10">
        {error && <Alert>Todos los campos son obligatorios</Alert>}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >Nombre Mascota</label>

          <input
            type="text"
            id="mascota"
            placeholder="Nombre de la mascota"
            value={mascota}
            onChange={e => setMascota(e.target.value)}
            className="border-b border-gray-400 w-full p-2 mt-2 placeholder-gray-400"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >Nombre Propietario</label>

          <input
            type="text"
            id="propietario"
            placeholder="Nombre del Propietario"
            value={propietario}
            onChange={e => setPropietario(e.target.value)}
            className="border-b border-gray-400 w-full p-2 mt-2 placeholder-gray-400"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >Email</label>

          <input
            type="email"
            id="email"
            placeholder="Correo del Propietario"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border-b border-gray-400 w-full p-2 mt-2 placeholder-gray-400"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >Alta</label>

          <input
            type="date"
            id="alta"
            value={fecha}
            onChange={e => setFecha(e.target.value)}
            className="border-b border-gray-400 w-full p-2 mt-2 placeholder-gray-400"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >Sintomas</label>

          <textarea
            id="sintomas"
            placeholder="Los sintomas de la mascota"
            value={sintomas}
            onChange={e => setSintomas(e.target.value)}
            className="border border-gray-200 w-full p-2 mt-2 placeholder-gray-400"
          />
        </div>
        <input
          type="submit"
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
          className="bg-indigo-600 hover:bg-indigo-800 w-full p-3 text-white uppercase font-bold rounded-full cursor-pointer transition-colors"
        />
      </form>
    </div>
  )
}
