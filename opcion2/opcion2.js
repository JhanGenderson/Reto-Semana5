// “El náufrago satisfecho” ofrece hamburguesas
// sencillas, dobles y triples,
// las cuales tienen un costo de $20.00, $25.00 y $28.00 respectivamente.
// La empresa acepta tarjetas de crédito con un cargo de 5 % sobre la compra.
// Suponiendo que los clientes adquieren sólo un tipo de hamburguesa, realice un algoritmo
// para determinar cuánto debe.

let pedidos = +prompt("Cuantas hamburguesas pediras")
let sencilla=0;
let dobles=0;
let triples=0;

for (let i=0; i<pedidos;i++){
    let conteo= +prompt("Ingrese 1. Sencilla, 2. Dobles 3. Triples");
    switch(conteo){
        case 1:
            sencilla=sencilla + 1
            break;
        case 2:
            dobles=dobles + 1
            break;
        case 3:
            triples=triples + 1
            break;
        default:
            alert("Ingrese de Nuevo");
            i--;
    }
}
let precio1= (sencilla*20)
let precio2= (dobles*25)
let precio3= (triples*28)
let total= (precio1+precio2+precio3)

    let descuento= prompt("¿Paga con Tarjeta? Si o No");
    switch(descuento){
        case "Si":
            pago=parseFloat(total+(total*0.05));
            break;
        case "No":
            pago=(total*1);
            break;
        default:
            prompt("Paga con Tarjeta 1. Si 2. No");
            break;
    }


console.log(`El pedido es:\n
            sencilla ${sencilla + "x" + "20"+" = "+precio1}\n
            dobles ${dobles + "x" + "25"+" = "+precio2}\n
            triples ${triples + "x" + "28"+" = "+precio3}\n
            El total a pagar: ${total}
            El pago con tarjeta es: ${pago}`)


