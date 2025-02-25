import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        matricula: 'A01643012',
        Nombre: 'Jose',
        Apellidos: 'Páez Batallas',
        Edad: '20',
        Universidad: 'Tec',
        Carrera: 'ITC'
    });

    const [submittedData, setSubmittedData] = useState(null); // Nuevo estado para almacenar los datos enviados

    const { matricula, Nombre, Apellidos, Edad, Universidad, Carrera } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    useEffect(() => {
        // console.log('useEffect called!');
    }, []);

    useEffect(() => {
        // console.log('formState changed!');
    }, [formState]);

    useEffect(() => {
        // console.log('matricula changed!');
    }, [matricula]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
        setSubmittedData(formState); 
    };

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <div className="res">
                <form onSubmit={handleSubmit} className="form"> 
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Matrícula"
                        name="matricula"
                        value={matricula}
                        onChange={onInputChange}
                    />
                    <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Nombre"
                        name="Nombre"
                        value={Nombre}
                        onChange={onInputChange}
                    />
                    <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Apellidos"
                        name="Apellidos"
                        value={Apellidos}
                        onChange={onInputChange}
                    />
                    <input
                        type="number"
                        className="form-control mt-2"
                        placeholder="Edad"
                        name="Edad"
                        value={Edad}
                        onChange={onInputChange}
                    />
                    <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Universidad"
                        name="Universidad"
                        value={Universidad}
                        onChange={onInputChange}
                    />
                    <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Carrera"
                        name="Carrera"
                        value={Carrera}
                        onChange={onInputChange}
                    />
                    <button type="submit" className="btn btn-primary mt-2">Send</button>
                </form>
            </div>

            {matricula === 'A01643012' && <Message />}

            {submittedData && (
                <div className="mt-4">
                    <h2>Estudiante</h2>
                    <p><strong>Matrícula:</strong> {submittedData.matricula}</p>
                    <p><strong>Nombre:</strong> {submittedData.Nombre}</p>
                    <p><strong>Apellidos:</strong> {submittedData.Apellidos}</p>
                    <p><strong>Edad:</strong> {submittedData.Edad}</p>
                    <p><strong>Universidad:</strong> {submittedData.Universidad}</p>
                    <p><strong>Carrera:</strong> {submittedData.Carrera}</p>
                </div>
            )}
        </>
    );
};
