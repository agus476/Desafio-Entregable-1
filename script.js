class clinic {
          
         constructor (name, code , price , schedule) {
            this.name = name;
            this.code = code;
            this.price = price;
            this.schedule = schedule;
          }
         
        }

        const cardiology = new clinic ("Cardiologia" , 155504, 700 , [10,16,18])
        const dermatology = new clinic ("Dermatología" , 789546 , 500 )
        const infectology = new clinic ("Infectología" , 54452. , 1000)



function menu(){
    let opcion = prompt("Menu: \n1 - Ver especialidades medicas \n2 - Sacar turno  \n3 - Canjear codigo de descuento \nESC- Salir")

    switch(opcion){
        case "1":
            medicalSp();
            menu()
            break;
        case "2":
            turn();
            
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

function medicalSp ( ){

alert ("En este hospital contamos con las siguientes especialidades medicas \n-Cardiologia \n-Demartologia \n-Infectologia")

}

function turn ( ){

    let speciality = prompt ( " Seleccione a la especialidad a la cual desea sacar un turno \n-Cardiologia \n-Demartologia \n-Infectologia" )


    if (speciality == cardiology.name){

        let hour = prompt ( "Escoja un horario" +  "\n" +  cardiology.schedule[0] + ":00 hs" +"\n" +  cardiology.schedule[1] + ":00 hs" +"\n" +  cardiology.schedule[2] + ":00 hs")


    }

    
}