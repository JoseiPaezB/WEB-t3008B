import React from 'react'

const Form = () => {
    const [matricula, setMatricula] = useState('')
    const [nombre, setNombre] = useState('')    
    const [apellido, setApellido] = useState('')
    const [edad, setEdad] = useState('')
    const [universidad, setUniversidad] = useState('')
    const [carrera, setCarrera] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(matricula, nombre, apellido, edad, universidad, carrera)
    }
  return (
    <div>
        <form className="form" action="">
            <label htmlFor="matricula">Matricula</label>
            <input type="text" id="matricula" name="matricula" value={matricula} onChange={(e) => setMatricula(e.target.value)}/>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            <label htmlFor="apellido">Apellido</label>
            <input type="text" id="apellido" name="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)}/>
            <label htmlFor="edad">Edad</label>
            <input type="text" id="edad" name="edad" value={edad} onChange={(e) => setEdad(e.target.value)}/>
            <label htmlFor="universidad">Universidad</label>
            <input type="text" id="universidad" name="universidad" value={universidad} onChange={(e) => setUniversidad(e.target.value)}/>
            <label htmlFor="carrera">Carrera</label>
            <input type="text" id="carrera" name="carrera" value={carrera} onChange={(e) => setCarrera(e.target.value)}/>

        </form>
      
    </div>
  )
}

export default Form
