export const Cuarto =()=>{
    const promesa=new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(); 
            console.log('Dentro de la promesa')
        },2000)
    });
    promesa.then(()=>{
        console.log("Then de la promesa")
    }); 





}