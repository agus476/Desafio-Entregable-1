class clinic {
          
         constructor (name, code , price , schedule) {
            this.name = name;
            this.code = code;
            this.price = price;
            this.schedule = schedule;
          }
         
        }

        const cardiology = new clinic ("Cardiologia" , 155504, 700 , [10,16,18])
        const dermatology = new clinic ("Dermatologia" , 789546 , 500 , [12,15,20] )
        const infectology = new clinic ("Infectologia" , 54452. , 1000 ,[11,15,22])



function menu(){
    let opcion = prompt(" Hospital \n Menu: \n1 - Ver especialidades medicas \n2 - Sacar turno  \nESC- Salir")

    switch(opcion){
        case "1":
            medicalSp();
            menu()
            break;
        case "2":
            turn();
            break;

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






function askForTurn() {
    let number = parseInt(prompt("Seleccione la cantidad de turnos que desea, con un maximo de 3 turnos"));
    while (isNaN(number) || number <= 0 || number >= 4) {
        number = parseInt(prompt("Por favor, escriba el tamaño entre 1 y 3"));
    }
    return number;
} 




    


function turn ( ){
    
    
    const quantityNumber = askForTurn();
    
    let hour = 0; 



    for (let i = 0 ; i < quantityNumber; i++ ) {

        let speciality = prompt ( " Seleccione a la especialidad a la cual desea sacar un turno \n-Cardiologia \n-Demartologia \n-Infectologia" )


        if (speciality == cardiology.name){
    
            hour = prompt ( "Escoja un horario" +  "\n" +  cardiology.schedule[0] + ":00 hs" +"\n" +  cardiology.schedule[1] + ":00 hs" +"\n" +  cardiology.schedule[2] + ":00 hs")
             

            priceOfTurn(cardiology.price)
            }
    
        else if (speciality == dermatology.name) {
    
    
            hour = prompt ( "Escoja un horario" +  "\n" +  dermatology.schedule[0] + ":00 hs" +"\n" +  dermatology.schedule[1] + ":00 hs" +"\n" +  dermatology.schedule[2] + ":00 hs")
     

            priceOfTurn(dermatology.price)
    
        }
    
    
       else if (speciality == infectology.name) {
    
    
            hour = prompt ( "Escoja un horario" +  "\n" + infectology.schedule[0] + ":00 hs" +"\n" +  infectology.schedule[1] + ":00 hs" +"\n" +  infectology.schedule[2] + ":00 hs")

            priceOfTurn(infectology.price)
    
     
      }
    
    
      else { 
    
         alert ("Esa especialidad no es valida , porfavor vuelva a intentarlo")
         
      }
    
    

      alert ("Usted saco turno para" + " " + speciality + " a las  " + hour + ":00 hs" + "\n" + " Cuenta con un precio de" + " "+ finalPrice) 

    }
    
    
        
    
}


function priceOfTurn(price){
  
    finalPrice = price
    
    
    }