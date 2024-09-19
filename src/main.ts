import "./style.css";



const costoTotal = 120;
const bebidas = 18
const numeroDePersonas = 7; 
const preciofinal = costoTotal - bebidas
const cantidadPorPersona = preciofinal / numeroDePersonas
const pagototal = bebidas + cantidadPorPersona


console.log(`Yo pagaria en total: ${pagototal.toFixed(2)} €`);
console.log(`Los otros 6 amigos pagarían: ${cantidadPorPersona.toFixed(2)} €`);



