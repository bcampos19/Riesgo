function CalculaRiesgo(){
    var peso = 0;
    var calculo =0;
    var pn, pr, p, e, ni,pe;
    var riesgo;

    //calculo = (pn*peso) + (pr*peso) + (p*peso) + (e*peso) + ni+ (pep*peso);

 
    let pais_nacimiento = document.getElementById("pais_nacimiento").value;
    let pais_residencia  = document.getElementById("pais_residencia").value;
    let profesion   = document.getElementById("profesion").value;
    let edad   = document.getElementById("edad").value;
    let nivel_ingresos  = document.getElementById("nivel_ingresos").value;
    let pep  = document.getElementById("pep").value;

    let miTotal=document.getElementById("total");
    let miRiesgo=document.getElementById("riesgo");
    let miPeso=document.getElementById("peso");
    

    //alert("Profesion: " + profesion );

    switch (pais_nacimiento){
        case "Elegir":
            peso = peso + 0;
            pn = 0;
            break;
        case "Panamá":
            peso = peso + 100;
            pn = 100;
            break;
        default:
            peso = peso + 200;
            pn = 200;
    }
   // alert("pais_nacimiento:  " + peso );   

   switch (pais_residencia){
        case "Elegir":
            peso = peso + 0;
            pr = 0;
            break;
        case "Panamá":
            peso = peso + 100;
            pr = 100;
            break;
        default:
            peso = peso + 200;
            pr = 200;
    }
    
    
    switch(profesion) {
        case "Blanco":
            peso = peso + 0;  
            p = 0;     
          break;
        case "Abogado":
            peso = peso + 100;   
            p = 100;       
          break;
        case "Ingeniero":
            peso = peso + 200;
            p = 200;   
            break;
        case "Médico":
            peso = peso + 300;
            p = 300;   
            break;
        case "Contador":
             peso = peso + 400;
             p = 400;   
                break;   
        default:
            peso = peso + 500;
            p = 500;   
       
      }

   

      switch (edad){
        case "Blanco":
            peso = peso + 0;
            e = 0;
            break;
        case "Menos_25":
            peso = peso + 100;
            e = 100;
            break;
        case "E_25_55":
            peso = peso + 200;
            e = 200;
            break;
        default:
            peso = peso + 300;
            e = 300;
         }

         

         switch (nivel_ingresos){
            case "Blanco":
                peso = peso + 0;
                ni = 0;
                break;
            case "Menos_20k":
                peso = peso + 100;
                ni = 100;
                break;
            case "E_20_75k":
                peso = peso + 200;
                ni = 200;
                break;
            default:
                peso = peso + 300;
                ni = 300;
             }
    

             //alert("pep: " + pep);
            
             switch (pep){
                case "Blanco":
                    peso = peso + 0;
                    pe = 0;
                    break;
                case "Si":
                    peso = peso + 200;
                    pe = 200;
                    break;              
                default:
                    pe = 100;
                    peso = peso + 100;
                }


    //alert("Peso: " + peso );

    if (peso <= 1200){
        if (peso != 0) {
            riesgo = "Bajo";
        } else { riesgo = "Llene los datos para poder calcular"}        
    }else if (peso>=1201 & peso<=1400) {
        riesgo = "Medio";}
        else{ riesgo = "Alto"; }

    if (pep == "Si") {
        riesgo = "Alto";
    }
    

    //alert("riesgo: " + riesgo );


      calculo = (pn*peso) + (pr*peso) + (p*peso) + (e*peso) + ni+ (pe*peso);

      //alert("calculo: " + calculo );

      //alert("p: " + p );
     
      miRiesgo.innerText="Riesgo: "+ riesgo;
      miPeso.innerText="Peso: "+ peso;
      miTotal.innerText="Cálculo: "+ calculo;

    
    
}