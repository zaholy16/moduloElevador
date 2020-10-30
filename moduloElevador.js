var pisoActual=1;
var estadoPuerta=1; //1 abierta //0 cerrada

function subirPiso() {
    if(estadoPuerta==0)
    {
        if(pisoActual!=6)
            pisoActual++;
        else
            console.log("Ya no hay mas pisos");
    }
    else
    {
        console.log("Cierre la puerta");
        cerrarPuerta();
    }     
}

function bajarPiso() {
    if(estadoPuerta==0)
        if(pisoActual!=1)
            pisoActual--;
    else
    {
        console.log("Cierre la puerta");
        cerrarPuerta();
    }
}

function abrirPuerta() {

    if(estadoPuerta==0)
        estadoPuerta=1;
    else
        console.log("Puerta Abierta");
}

function cerrarPuerta() {
    if(estadoPuerta==1)
        estadoPuerta=0;
    else
        console.log("Puerta Cerrada");
}

function estadoPiso(){
    if(estadoPuerta==0)
    {
        console.log("Piso "+ pisoActual + " de 6, puerta Cerrada");
    }
    else
    {
        console.log("Piso " + pisoActual + " de 6, puerta Abierta");
    }
}

function cambiarPiso(pisoDestino) {
    if(estadoPuerta==0)
    {
        if(pisoActual>pisoDestino) {
            for(var i=pisoActual; i>pisoDestino; i--){
                console.log(i);
                bajarPiso();
            }
            console.log("LLegaste al piso "+pisoActual);
            abrirPuerta();
        }     
        else if(pisoActual<pisoDestino){
            for(var i=pisoActual; i<pisoDestino; i++){
                console.log(i);
                subirPiso();
            }
            console.log("LLegaste al piso "+pisoActual);
            abrirPuerta();
        }
        else if(pisoActual==pisoDestino)
        {
            console.log("Ya estas en ese piso");
        }
    }
    else
    {
        console.log("Cierre la puerta");
        cerrarPuerta();
    }
}

module.exports = {
    ElejirPiso: cambiarPiso,
    Cierre: cerrarPuerta,
    Abra: abrirPuerta,
    Estado: estadoPiso
};

