// Async / await

// Qué es?
// Funciones asincronicas que disfrazan una promesa - otra forma de escribir un callback

function principal(){

    let promesa = new Promise(function(resolve,reject){

        setTimeout(function(){
            console.log("Soy la función principal")

            resolve("terminé")

        },2000)

    })

    return promesa
}

async function callback(){
    try{

        await principal()
        console.log("Soy el callback <:3 ")

    }
    catch(error){

        console.log("ups... : "+error)

    }
}

callback()