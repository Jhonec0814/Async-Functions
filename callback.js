// Definición de CallBack
// Una llamada de espera, una función secundaria, una función que es un argumento de otra

// ¿Para qué sirve?
// - Para llamar una función si y SOLO SI una función previa se ha ejecutado

function principal(callback){

    setTimeout(function(){
        console.log("Soy la función principal")
        callback()
    },2000)
}

principal(function(){

    console.log("Soy el callback :V")

})