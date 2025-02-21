
const Sexto = () => {
    const ApiKey= 'tnYAbRhVaCdAngb0PvwSkz38z3VnsCjq'; 
    const peticion= fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${ApiKey}`);
    peticion.then(resp=>resp.json()).then(data=>console.log("URL:", data.data[0].url)).catch(console.warn);
  return (
    <div>
    </div>
  )
}

export default Sexto
