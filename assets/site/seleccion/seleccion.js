enlistarMaterias = document.getElementById("enlistar-materias");
namesRadio = 0;


/**Determina carrera seleccionada**/
function determina() {
    carreras = {
        software: [
            {Materia: "Prog 1", Horario: ["L 8:00-12:00", "M 16:00-20:30", "MI 11:00- 13:00"]},
            {Materia: "Prog 2", Horario: ["L 16:00-19:00", "S 9:00-11:00", "J 08:00-10:00"]},
            {Materia: "Inteligencia Artificial", Horario: ["V 16:00-19:00", "D 9:00-11:00"]},
        ],
        mecatronica: [
            {
                Materia: "CAD Avanzado",
                Horario: ["M 16:00-19:00", "J 9:00-11:00", "D 08:00-10:00"],
            },
            {
                Materia: "Laboratorio de fisica",
                Horario: ["L 25 - 90", "MI 25 - 90", "M 25 - 90"],
            },

          {
            Materia: "Electronica",
            Horario: ["J 16:00-19:00", "V 9:00-11:00", "S 08:00-10:00"],
          },
        ],

      ciberseguridad: [
        {Materia: "Sistemas Operativos", Horario: ["S 8:00-12:00", "D 16:00-20:30", "M 11:00- 13:00"]},
        {Materia: "Ciberseguridad", Horario: ["V 16:00-19:00", "J 9:00-11:00", "MI 08:00-10:00"]},
        {Materia: "Etica I", Horario: ["L 16:00-19:00", "M 9:00-11:00"]},
      ],
    };

    let {valuecareer} = JSON.parse(window.localStorage.getItem("datos"));
    let listMaterias = carreras[valuecareer];

    namesRadio = listMaterias.map((m) => m.Materia);

    //div-flex justify-content-center
    listMaterias.forEach((materia) => {
        materiasHTML = materia.Horario.map(
            (horario) => ` <div>
        <input type="radio" id="${horario}${materia.Materia}" name="${materia.Materia}" value="${horario}"
               >
        <label for="${horario}${materia.Materia}" >${horario}</label>
      </div>
      `
        );

        materiasHTML = materiasHTML.join("\n");
        htmlT = `
        <div>
            <div class="panel-heading card-body">
                <button type="button" class="botonmateria" data-target="#panel-1" data-toggle="collapse">
                    ${materia.Materia}
                </button>
            </div>

            <div class="panel-collapse collapse d-flex justify-content-between p-4" id="panel-1">
               ${materiasHTML}
            </div>
        </div>
        
        `;

        enlistarMaterias.innerHTML += htmlT;
    });
}

/**Sofware**/
function software() {
    let radios = [];

    let valuesMateria = [];
    namesRadio.forEach((name) => {
        radioCheck = "";
        radiosT = document.getElementsByName(name);
        for (
            let i = 0, length = radiosT.length;
            i < length;
            i++
        ) {
            if (radiosT[i].checked) {

                if (radiosT[i].value.startsWith('L')) {

                    radioCheck = {dia: 1, horarioSeleccionando: radiosT[i].value};
                }
                if (radiosT[i].value.startsWith('M')) {

                    radioCheck = {dia: 2, horarioSeleccionando: radiosT[i].value};
                }
                if (radiosT[i].value.startsWith('Mi')) {

                    radioCheck = {dia: 3, horarioSeleccionando: radiosT[i].value};
                }
                if (radiosT[i].value.startsWith('J')) {

                    radioCheck = {dia: 4, horarioSeleccionando: radiosT[i].value};
                }
                if (radiosT[i].value.startsWith('V')) {

                    radioCheck = {dia: 5, horarioSeleccionando: radiosT[i].value};
                }
                if (radiosT[i].value.startsWith('S')) {

                    radioCheck = {dia: 6, horarioSeleccionando: radiosT[i].value};
                }
                if (radiosT[i].value.startsWith('D')) {

                    radioCheck = {dia: 7, horarioSeleccionando: radiosT[i].value};
                }

                break;
            }
        }
        if (radioCheck != '') radios.push({name, horarioSeleccionando: radioCheck});
    });

    console.log(radios);

    window.localStorage.setItem("materias_seleccionadas", JSON.stringify(radios));
}
function seleccionar() {
    abrir('muestra.html','contenedor_principal');
    software();
}
determina();

