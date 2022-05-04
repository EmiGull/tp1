function sumar(a, b) {
    alert (a + b);
    console.log("termine!");
}

function func_ej1(){
    // alert ('Me ejecuto dentro de una función!')
   let ej1_n1= parseFloat (document.getElementById('ej1_n1').value);
   let ej1_n2= parseFloat (document.getElementById('ej1_n2').value);
   let ej1_n3= parseFloat (document.getElementById('ej1_n3').value);

    if (ej1_n1 > ej1_n2 && ej1_n1 > ej1_n3){
        document.getElementById('ej1_resultado').value = "El nro. 1 es el más grande";
    }
    if (ej1_n2 > ej1_n1 && ej1_n2 > ej1_n3){
        document.getElementById('ej1_resultado').value = "El nro. 2 es el más grande";
    }
    if (ej1_n3 > ej1_n1 && ej1_n3 > ej1_n2){
        document.getElementById('ej1_resultado').value = "El nro. 3 es el más grande";
    }
   // const suma = ej1_n1 + ej1_n2 + ej1_n3
    //document.getElementById('ej1_resultado').value = suma;


}

function func_ej2(){
    // alert ('Me ejecuto dentro de una función!')
   let ej2_n1= parseFloat (document.getElementById('ej2_n1').value);
   let ej2_n2= parseFloat (document.getElementById('ej2_n2').value);

   const suma = ej2_n1 + ej2_n2
document.getElementById('ej2_resultado').value = suma;

}


function func_ej3(){
    let ej3_palabra= document.getElementById('ej3_palabra').value;
    let ej3_n= parseFloat (document.getElementById('ej3_n').value);
     let texto = ""

    for (let index = 0; index < ej3_n; index++) {
     texto += ej3_palabra +" "
    }
    
    // let i = 3
    // while (i > o) {
     // alert (i)
     // i--
     //}
 

 document.getElementById('ej3_resultado').value = texto;

 }

function func_ej4(){
    let ej4_grados_cent= parseFloat (document.getElementById('ej4_grados_cent').value);
    let ej4_grados_far= parseFloat (document.getElementById('ej4_grados_far').value)
    let conversion
    if (!isNaN(ej4_grados_cent)){
        //calculamos farenheit
        conversion = (ej4_grados_cent*1.8) + 32
        document.getElementById('ej4_grados_far').value = conversion;
    }else{
         //calculamos centigrados
         conversion = (ej4_grados_far - 32) * 5/9
         document.getElementById('ej4_grados_cent').value = conversion;
    }
   
   

 }

function func_ej5(){
    let ej5_palabra = document.getElementById('ej5_palabra').value
    
    ej5_letras= ej5_palabra.length;
    
    document.getElementById('ej5_letras').value = ej5_letras
 
    }

function func_ej6(){

    let ej6_numero= parseFloat(document.getElementById('ej6_numero').value);
        
       document.getElementById('ej6_numero').value = numero;
    
        if(numero%2==0){
            document.getElementById('ej6_tipo').value = "El nro. es par";
           
        }else{
            
            document.getElementById('ej6_tipo').value = "El nro. es impar";
            
        }
        
        }

function func_ej7(){

            let ej7_nro1= parseFloat (document.getElementById('ej7_nro1').value);
            let ej7_nro2= parseFloat (document.getElementById('ej7_nro2').value);
            let ej7_resultado= parseFloat (document.getElementById('ej7_resultado').value);
            
            
            for (ej7_resultado=1; ej7_resultado <=ej7_nro2; ej7_resultado++) {
            }
        
            if (ej7_resultado % ej7_nro1 == 0){
            }
        
            }


function func_ej8(){
        
                    let ej8_nro= parseFloat (document.getElementById('ej8_nro').value);
                    let ej8_resultado= parseFloat (document.getElementById('ej8_resultado').value);
                
                    if(ej8_nro % i === 0) return false;
                        for(let i = 2; i <= ej8_nro; i++)
                            if(ej8_nro % i === 0) return false;
            }
        
function func_ej9(){

                let ej9_nombre = "ej9_nombre"
                let ej9_apellido = "ej9_apellido"
                let ej9_edad = "ej9_edad"
                let ej9_ciudad = "ej9_ciudad"
                let resultado = ""
                
            document.getElementById('resultado').value = 'Mi nombre es "+ej9_nombre+" "+ej9_apellido+", tengo "+ej9_edad+" años. Nací en la ciudad de "+ej9_ciudad+".';
            
                }
        
function func_ej10(){

                    let ej10_nro1= parseFloat (document.getElementById('ej10_nro1').value);
                    let ej10_nro2= parseFloat (document.getElementById('ej10_nro2').value);
                    let ej10_resultados= parseFloat (document.getElementById('ej10_resultados').value);
                
                      
                      ej10_resultados = String  
                
                
                    }
        
    
    
        
