export const Card = ({id, name, sprites = []}) => {
    return (
        <section style = {{height:200}}>
        <h2 className="text-capitalize">#{id} - { name } </h2>
        { /*imagenes */ }
        <div>{
        sprites.map( sprite => (
        <img src={sprite} key={sprite} alt={name} style={{width:'10rem', height:'10rem'}}/>))
        }
        </div>
        </section>
    )
    }