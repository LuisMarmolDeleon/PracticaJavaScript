student = window.localStorage.getItem('datos')
student  = JSON.parse(student);


document.getElementById('career').value = student.valuecareer
document.getElementById('name').value = student.valueName


materiasSeleccionadas = window.localStorage.getItem('materias_seleccionadas')
materiasSeleccionadas = JSON.parse(materiasSeleccionadas);

tableBody = document.getElementById('table-body-mat')

tableBodyHTML = ''

materiasSeleccionadas.forEach(element => {
  tableBodyHTMLI = `
                  <tr>
                    <th scope="row">${element.name}</th>
  `
  for (let index = 1; index <= 7; index++) {
    if(index == element.horarioSeleccionando.dia){
      tableBodyHTMLI+= `<td> ${ element.horarioSeleccionando.horarioSeleccionando} </td>`
    }  
    else{
      tableBodyHTMLI+= `<td> </td>`
    }
  }

  tableBodyHTMLI += "</tr>"
  tableBodyHTML +=tableBodyHTMLI
});

tableBody.innerHTML = tableBodyHTML


  function reset (){
    if (confirm('Desea validar su seleccion de materia?')) {
      localStorage.clear();
      abrir('formulario.html','contenedor_principal');
    }
  }