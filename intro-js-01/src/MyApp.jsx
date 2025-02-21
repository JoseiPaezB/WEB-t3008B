import { heroes } from "./data/heroes.js";

export function MyApp() {
    const getHeroeByID = (id)=> heroes.find ((heroe)=>heroe.id===id); 
    const getHeroByEmpresa=(owner) =>heroes.filter((heroe)=>heroe.owner===owner);
    console.log(getHeroeByID(2));
    console.log(getHeroByEmpresa('DC'));
    return (
        <div>
            <h1>Heroes</h1>
            <ul>
                {
                    heroes.map((heroe)=>(
                        <li key={heroe.id}>
                            {heroe.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )

   

 

}

