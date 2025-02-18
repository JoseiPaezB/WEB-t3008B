import { heroes } from "./data/heroes.js";

export function MyApp() {
    const getHeroeByID = (id)=> heroes.find ((heroe)=>heroe.id===id); 
    const getHeroByEmpresa=(owner) =>heroes.filter((heroe)=>heroe.owner===owner);
    console.log(getHeroeByID(2));
    console.log(getHeroByEmpresa('DC'));
    return (
        <div>
            <h1>Tercer Componente en LOG</h1>
            <h2> CTRL + SHIFT + I</h2>
        </div>
    )

   

 

}

