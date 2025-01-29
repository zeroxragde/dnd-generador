document.addEventListener("DOMContentLoaded", function () {
    fetch("template/hoja5e.htm") // Carga el archivo HTML
        .then(response => response.text()) // Convierte la respuesta a texto
        .then(data => {
            document.getElementById("container").innerHTML = data; // Inserta el contenido en el div
        })
        .catch(error => console.error("Error al cargar el HTML:", error));
});