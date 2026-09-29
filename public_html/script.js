function calcularPromedio() {

    // Obtener los datos del formulario

    let nombre = document.getElementById("nombre").value;
    
    let edad = parseFloat(
        document.getElementById("edad").value
    );

    let calificacion1 = parseFloat(
        document.getElementById("calificacion1").value
    );

    let calificacion2 = parseFloat(
        document.getElementById("calificacion2").value
    );

    let calificacion3 = parseFloat(
        document.getElementById("calificacion3").value
    );
    
     let calificacion4 = parseFloat(
        document.getElementById("calificacion4").value
    );


    // Validar que los datos estén completos

    if (
        nombre === "" ||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3) ||
        isNaN(calificacion4)
    ) {

        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";

        return;
    }


    // Calcular promedio

    let promedio =
        (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;


    // Mostrar resultado

    if (promedio <= 10 && promedio >= 9) {

        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>EXCELENTE";

    } else if(promedio <= 8.9 && promedio >= 8){
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>MUY BIEN";

    } else if(promedio <= 7.9 && promedio >= 7){
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>BIEN";
    } else if(promedio <= 8.9 && promedio >= 8){
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>MUY BIEN";
    } else if(promedio <= 6.9 && promedio >= 6.5){
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>PIENSA EN CONTABILIDAD";
    } else if(promedio <= 6.4 && promedio >= 6){
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>DATE DE BAJA";
    } else if(promedio <= 5.9 && promedio >= 0){
        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>VETE A TURISMO";
    } 
   

}

function limpiarCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("calificacion1").value = "";
    document.getElementById("calificacion2").value = "";
    document.getElementById("calificacion3").value = "";
    document.getElementById("calificacion4").value = "";
}

// 1. Declarar el arreglo global donde se almacenarán los datos
let listaAlumnos = [];

function guardarDatos() {
    // 2. Obtener los valores de cada campo por su ID
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let cal1 = document.getElementById("calificacion1").value;
    let cal2 = document.getElementById("calificacion2").value;
    let cal3 = document.getElementById("calificacion3").value;
    let cal4 = document.getElementById("calificacion4").value;

    // 3. Crear un objeto con la información del alumno
    let nuevoAlumno = {
        nombre: nombre,
        edad: edad,
        calificacion1: cal1,
        calificacion2: cal2,
        calificacion3: cal3,
        calificacion4: cal4
    };

    // 4. Agregar el objeto al arreglo usando push()
    listaAlumnos.push(nuevoAlumno);

    // Opcional: Mostrar el arreglo en la consola para verificar que se guardó
    console.log("Arreglo actual:", listaAlumnos);
    
    alert("¡Datos guardados correctamente en el arreglo!");
}

function mostrarDatos() {
    let contenedor = document.getElementById("resultadoAlumnos");
    
    // Limpiar el contenedor antes de volver a mostrar
    contenedor.innerHTML = "<h3>Lista de Alumnos Guardados:</h3>";

    // Si el arreglo está vacío, avisar
    if (listaAlumnos.length === 0) {
        contenedor.innerHTML += "<p>No hay alumnos registrados todavía.</p>";
        return;
    }

    // Recorrer el arreglo y crear un párrafo o tarjeta por cada alumno
    for (let i = 0; i < listaAlumnos.length; i++) {
        let alumno = listaAlumnos[i];
        
        contenedor.innerHTML += `
            <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 8px; border-radius: 5px;">
                <strong>Alumno ${i + 1}:</strong> ${alumno.nombre} <br>
                Edad: ${alumno.edad} | 
                Calificaciones: ${alumno.calificacion1}, ${alumno.calificacion2}, ${alumno.calificacion3}, ${alumno.calificacion4}
            </div>
        `;
    }
}

