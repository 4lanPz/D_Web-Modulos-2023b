const login = (user,pass) =>{
    if(!user && pass) return console.log("No puedes entrar mi pana")
    console.log(`Bienvenido mi pana ${user}`)
}

const likes = 10


// COMMONJS
// module.export = login (1 SOLO DATO)
/*module.exports = {
    login,
    likes
}*/


//ES MODULES
//export default login //(1 SOLO DATO)
export {
    login,
    likes
}