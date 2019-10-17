// conta ate 30 minutos e redireciona a pagina para algo mais educativo!
var count = 0; 
const minhaPromise = () => new Promise((resolve,reject) =>{

    setTimeout(() => {
        resolve('OK');
        count ++; 
        console.log(count)
    }, 1000);
});
const executaPromise = async () =>{
    for (var i = 0; i < 1800000; i++){
          console.log(await minhaPromise());
          if( i == 1799999){
        document.location = "https://pt-pt.khanacademy.org/math";
        }
    }
}
executaPromise();  
