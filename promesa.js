// Qué es una promesa?
// Algo que se espera que se tenga que cumplir
// Es un Callback disfrazado 
// Función que se ejecuta después de otra

// Como se implementan
// Debemos utilziar una clase de js (Promise())


function principal(){

    let promesa = new Promise(function(resolve,reject){

        setTimeout(function(){
            console.log("Soy la función principal")
            resolve("soy el callback :V")

        },2000)

    })

    return promesa
    
}

principal()
.then(function(respuesta){
    console.log(respuesta)
})
