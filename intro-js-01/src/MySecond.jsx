export function MySecond(){
    const aboutme = {
        name: 'Jose', 
        lastname: 'Paez', 
        age:100, 


    }
    return ( 
        <div>
            <h1>Este es el segundo componente</h1>
            <h2>My name is {aboutme.name} {aboutme.lastname}</h2>
            <h3>I am {aboutme.age} years old</h3>
        </div>
    )
}