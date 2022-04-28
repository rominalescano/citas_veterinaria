import Paciente from "./Paciente"

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

  return (

    <div className="md:w-1/2 lg:m-3/5 md:h-screen overflow-y-scroll">

{pacientes && pacientes.length?(
  <>
      <h2 className="font-black text-3xl text-center">Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {''}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      {pacientes.map((paciente)=> (
        <Paciente 
        key={paciente.id}
        paciente={paciente}
        setPaciente={setPaciente}
        eliminarPaciente= {eliminarPaciente}
        
        />
      ) //quito el reutn porque queda impplicito
       )}
      
  
  </>

):(
<>
      <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Comienza agregando pacientes {''}
        <span className="text-indigo-600 font-bold">y aparecerán aquí</span>
      </p>

  </>
) }
    </div>
  )
}

export default ListadoPacientes