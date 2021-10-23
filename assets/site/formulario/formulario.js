inputName = document.getElementById('name');
inputProvince = document.getElementById('province');
inputCity = document.getElementById('city');
inputSector = document.getElementById('sector');
inputstreet = document.getElementById('street');
inputcareer = document.getElementById('career');


/***Header***/
function abrir(url, contenedor) {
    $.get(url, {}, function (data) {
        $("#" + contenedor).html(data);
    });
}

/***Formulario***/
//validador de que se ingresaron datos
function validate() {
    let valueName = inputName.value;
    let valueprovince = inputProvince.value;
    let valuecity = inputCity.value;
    let valuesector = inputSector.value;
    let valuestreet = inputstreet.value;
    let valuecareer = inputcareer.value;
    let bool = true;
    //Name
    if (valueName == "") {
        bool = false;
        inputName.classList.add('input-error');
        document.getElementById('error-name').classList.add('error-text');
        document.getElementById('error-name').innerText = "Campo vacio";
    } else {
        bool = true;
        inputName.classList.remove('input-error');
        document.getElementById('error-name').classList.remove('error-text');
        document.getElementById('error-name').innerText = "";
    }

    //sector
    if (valuesector == "") {
        bool = false;
        inputSector.classList.add('input-error');
        document.getElementById('error-sector').classList.add('error-text');
        document.getElementById('error-sector').innerText = "Campo vacio";
    } else {
        bool = true;
        inputSector.classList.remove('input-error');
        document.getElementById('error-sector').classList.remove('error-text');
        document.getElementById('error-sector').innerText = "";
    }

    //ciudad
    if (valuecity == "") {
        bool = false;
        inputCity.classList.add('input-error');
        document.getElementById('error-city').classList.add('error-text');
        document.getElementById('error-city').innerText = "Campo vacio";
    } else {
        bool = true;
        inputCity.classList.remove('input-error');
        document.getElementById('error-city').classList.remove('error-text');
        document.getElementById('error-city').innerText = "";
    }

    //procince
    if (valueprovince == "") {
        bool = false;
        inputProvince.classList.add('input-error');
        document.getElementById('error-province').classList.add('error-text');
        document.getElementById('error-province').innerText = "Campo vacio";
    } else {
        bool = true;
        inputProvince.classList.remove('input-error');
        document.getElementById('error-province').classList.remove('error-text');
        document.getElementById('error-province').innerText = "";
    }

    //street
    if (valuestreet == "") {
        bool = false;
        inputstreet.classList.add('input-error');
        document.getElementById('error-calle').classList.add('error-text');
        document.getElementById('error-calle').innerText = "Campo vacio";
    } else {
        bool = true;
        inputstreet.classList.remove('input-error');
        document.getElementById('error-calle').classList.remove('error-text');
        document.getElementById('error-calle').innerText = "";
    }

    //carrera
    if (valuecareer == "") {
        bool = false;
        inputcareer.classList.add('input-error');
        document.getElementById('error-career').classList.add('error-text');
        document.getElementById('error-career').innerText = "Campo vacio";
    } else {
        bool = true;
        inputcareer.classList.remove('input-error');
        document.getElementById('error-career').classList.remove('error-text');
        document.getElementById('error-career').innerText = "";
    }
    return bool;
}
//
function limpiar() {
    inputName.value = "";
    inputName.focus();
    inputcareer.value="";
    inputstreet.value="";
    inputCity.value="";
    inputSector.value="";
    inputProvince.value="";

}

function getdata() {

    datos = window.localStorage.getItem("datos");
    if (datos == null) {
        return;
    }
    datos = JSON.parse(datos);
    inputName.value = datos.valueName;
    inputcareer.value = datos.valuecareer;
    inputstreet.value = datos.valuestreet;
    inputCity.value = datos.valuecity;
    inputProvince.value = datos.valueprovince;
    inputSector.value=datos.valuesector;
}

getdata();

function init() {
    if (validate()) {
        determinacarrera();
    }
}

function savedata() {
    let valueName = inputName.value;
    let valueprovince = inputProvince.value;
    let valuecity = inputCity.value;
    let valuesector = inputSector.value;
    let valuestreet = inputstreet.value;
    let valuecareer = inputcareer.value;
    datos = {
        valueName, valuecareer, valuestreet, valuesector, valueprovince, valuecity
    }

    window.localStorage.setItem("datos", JSON.stringify(datos));
}

function determinacarrera() {
    abrir('seleccion.html', 'contenedor_principal');
}



