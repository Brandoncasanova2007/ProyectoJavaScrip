function sumar(){
    let valor1=document.getElementById("numero").value;
    let valor2=document.getElementById("numerodos").value;
    let resultadoTotal=document.getElementById("resultado");
    let ResultadoSuma=  parseFloat(valor1)+ parseFloat(valor2);


   
    
    if(valor1==false ||  valor2==false){
        alert("debes escribir un numero")
    }

    else{
        resultadoTotal.innerHTML="El resultado es: " + ResultadoSuma;
    }


}
