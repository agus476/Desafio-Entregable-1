function menu(){
    let opcion = prompt("Menu: \n1 - Ver productos y precios \n2 - Visualizar peso por maple \n3 - Canjear codigo de descuento \nESC- Salir")

    switch(opcion){
        case "1":
            prices();
            buyProducts();
            break;
        case "2":
            weight();
            menu();
            break;

        case "3": 
        promotion()
        menu()
        ;    
        case "ESC":
            alert ("Gracias por vistarnos")
            break;
        default:
            alert("Opcion Incorrecta")
            menu()
            break;
    }
}

menu()