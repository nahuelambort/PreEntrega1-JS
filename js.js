let variableCambiante = true;

alert("Bienvenido a La Pizzería")

let nombre = prompt("Ingrese su nombre para tomar el pedido");

//MENÚ DE LA PIZZERÍA//

function tienda(pedido){
    switch (pedido){
        case 1:
            pedido = "Pizza de muzzarella";
            valor = 2500;
            alert("Usted a elegido " + pedido + "\nCon un costo de $" + valor);
            break;
        case 2:
            pedido = "Pizza 4 quesos";
            valor = 3000;
            alert("Usted a elegido " + pedido + "\nCon un costo de $" + valor);
            break;
        case 3:
            pedido = "Pizza Napolitana";
            valor = 3000;
            alert("Usted a elegido " + pedido + "\nCon un costo de $" + valor);
            break;
        case 4:
            pedido = "Pizza Fugazzeta";
            valor = 3000;
            alert("Usted a elegido " + pedido + "\nCon un costo de $" + valor);
            break;
        case 5:
            pedido = "Pizza Tropical";
            valor = 3000;
            alert("Usted a elegido " + pedido + "\nCon un costo de $" + valor);
            break;
        case 6:
            pedido = "Pizza Calabresa";
            valor = 3000;
            alert("Usted a elegido " + pedido + "\nCon un costo de $" + valor);
            break;
        case 7:
            alert("Vuelva pronto");
            break;
        default:
            alert("El dato ingresado no es correcto");
            break;
    }
}


while (variableCambiante){
    if (nombre != ""){
        variableCambiante = false;
        alert(`El pedido se tomará a nombre de ${nombre}\nA continuación, será llevado a la tienda`);

        let entradaSalida = Number(prompt("1 - Para ver nuestro menú\n2 - Para abandonar la tienda"));

        if (entradaSalida === 1){
            alert("A continuación, seleccione el producto que desea llevar");
            let pedido = Number(prompt("1 - $2500 - Pizza de muzzarella \n2 - $3000 - Pizza 4 quesos \n3 - $3000 - Pizza Napolitana  \n4 - $3000 - Pizza Fugazzeta  \n5 - $3000 - Pizza Tropical  \n6 - $3000 - Pizza Calabresa  \n7 - Salir"));
            
            tienda(pedido);
            if (pedido === 1 || pedido == 2 || pedido == 3 || pedido == 4 || pedido == 5 || pedido == 6){
                alert("A continuación elija el método de pago");
                let cuotas = Number(prompt("1 - Contado \n3 - Pago en 3 cuotas"));
                pago(cuotas);
                alert("Gracias por su compra, vuelva pronto!");
            }

        }else if (entradaSalida != 1 && entradaSalida != 2){
            alert("El dato ingresado no es correcto");
        }else{
            alert("Vuelva pronto")
        }
    }else{
        alert("Nombre no ingresado. \nDebe ingresar su nombre para poder tomar el pedido.");
        nombre = prompt("Ingrese su nombre para tomar el pedido");
    }
}

//MÉTODOS DE PAGO//

function pago(cuotas, total){
    let interes = 0;
    switch (cuotas){
        case 1:
            total = valor;
            alert("Usted abonara $" + total + " de contado");
            break;
        case 3:
            total = valor * 1.3;
            interes = total / 3;
            alert("Usted abonara $" + total + " en 3 cuotas de $" + interes);
            break;
        default:
            alert("Ingreso una opción incorrecta o no ingreso niguna opción");
            break;
    }
}
