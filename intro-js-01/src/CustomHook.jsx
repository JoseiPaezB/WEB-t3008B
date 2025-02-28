import { useFetch } from './hooks/useFetch';
import { useCounter } from './hooks/useCounter';
import { Loading } from './Loading';
import { Card } from './Card';
export const CustomHook = () => {
const { counter, decrement, increment, reset } = useCounter(1);
const {data, hasError, isLoading} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);
return (
    <>

        <div className='card'>
        <h1>Imagenes</h1>
        <hr/>
        <h2>{counter}</h2>
        {isLoading ? <Loading/>
        : (<Card  name={data.name} sprites={ [
        data.image
        ] } />)}
        </div>
        <div className="card card-body">
        <button className='btn btn-primary' onClick= { ()=>decrement() }>Anterior</button>
        <button className = 'btn btn-danger' onClick= { ()=>reset() } >Reset</button>
        <button className='btn btn-primary' onClick= { ()=>increment() } >Siguiente</button>
        </div>

    </>
    )
    }
