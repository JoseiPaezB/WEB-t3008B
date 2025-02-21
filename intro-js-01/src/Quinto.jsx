export const Quinto=()=>{
    const promesa= new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Dentro de la promesa')
        },2000)
    });

    return (
        <div>
            
        </div>
    )
}