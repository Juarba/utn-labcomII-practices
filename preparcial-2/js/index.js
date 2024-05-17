let inputPesos = document.getElementById("pesos");
let selectMoneda = document.getElementById("cambio");

let cotizaciones = {
    dolares: 950,
    euros: 1200
}


function validarCampos(){
    /*Valido los datos que entran*/
    if (inputPesos.value == '') {
        alert("El campo pesos no esta completo");
        return false;
    } else if (selectMoneda.value == '') {
            alert("Seleccione una moneda");
            return false;
        }
    return true
}

function Calcular() {
    if (validarCampos()){
        /*realizo el calculo*/
        let pesos = inputPesos.value;
        let valCotizacion = cotizaciones[selectMoneda.value];

        let cot = pesos * valCotizacion;
        document.getElementById("resultado").value = cot;

    } else {
        alert("Ha ocurrido un error")
    }


}

let inputNuevaMoneda = document.getElementById("nuevaMoneda");
let inputValorMoneda = document.getElementById("valorMoneda");

function addMoneda(){
    let nomMoneda = inputNuevaMoneda.value;
    let valMoneda = Number(inputValorMoneda.value)

    selectMoneda.options.add(new Option(nomMoneda, nomMoneda));

    cotizaciones[nomMoneda] = valMoneda;

}