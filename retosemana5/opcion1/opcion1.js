// Desarrolle el siguiente algoritmo:
// Un productor de leche lleva el registro de lo que produce en litros
// , pero cuando entrega le pagan en galones. 
// Realice un algoritmo, y represéntelo en JS, 
// que ayude al productor a saber cuánto recibirá por la entrega de su
// producción de un día (1 galón= 3.785 litros).
let produccion = +prompt("¿Cuantos litros se despachan?")
console.log("La produccion es:" + produccion +" litros ")

let total = parseFloat(produccion / 3.785)
console.log("Recibiras:" +" "+ total +" "+"galones")