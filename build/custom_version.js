
const razas=[
    "Aleatorio",
    "Dracónido",
    "Dracónido Negro",
    "Dracónido Azul",
    "Dracónido de Latón",
    "Dracónido de Bronce",
    "Dracónido de Cobre",
    "Dracónido Dorado",
    "Dracónido Verde",
    "Dracónido Rojo",
    "Dracónido Plateado",
    "Dracónido Blanco",
    "Enano",
    "Enano de Colina",
    "Enano de Montaña",
    "Elfo",
    "Elfo Oscuro (Drow)",
    "Alto Elfo",
    "Elfo del Bosque",
    "Gnomo",
    "Gnomo del Bosque",
    "Gnomo de Roca",
    "Semielfo",
    "Semiorco",
    "Mediano",
    "Mediano Piesligeros",
    "Mediano Recio",
    "Humano",
    "Humano (Calishita)",
    "Humano (Chondathan)",
    "Humano (Damarano)",
    "Humano (Illuskan)",
    "Humano (Mulan)",
    "Humano (Rashemi)",
    "Humano (Shou)",
    "Humano (Tethyriano)",
    "Humano (Turami)",
    "Tiefling"
  ];
const transfondos=[
    "Aleatorio",
    "Acólito",
    "Charlatán",
    "Criminal",
    "Artista",
    "Héroe Popular",
    "Gladiador",
    "Artesano del Gremio",
    "Mercader del Gremio",
    "Ermitaño",
    "Caballero",
    "Noble",
    "Forastero",
    "Pirata",
    "Sabio",
    "Marinero",
    "Soldado",
    "Espía",
    "Huérfano"
];
const clases= [
    "Aleatorio",
    "Bárbaro",
    "Bardo",
    "Clérigo",
    "Druida",
    "Guerrero",
    "Monje",
    "Paladín",
    "Guardabosques",
    "Pícaro",
    "Hechicero",
    "Brujo",
    "Mago"
];
const alineamientos=[
    "Aleatorio",
    "Legal Bueno",
    "Neutral Bueno",
    "Caótico Bueno",
    "Legal Neutral",
    "Neutral",
    "Caótico Neutral",
    "Legal Malvado",
    "Neutral Malvado",
    "Caótico Malvado"
];

document.addEventListener("DOMContentLoaded", function () {

    loadHtmlTemplate();

    loadSelects();
   
   
    
});

function handleSelectionChange(selectedValues) {
    console.log("Valores seleccionados:", selectedValues);
}
function loadCheckBoxes(){
    const checkboxManager = new CheckboxImage(false);
    checkboxManager.initialize();
}
function loadSelects(){
    const razaSelect = new SelectGenerator("razasContainer", razas, false, "Elige una raza", 2, handleSelectionChange);
    const claseSelect = new SelectGenerator("clasesContainer", clases, false, "Selecciona una clase", null, handleSelectionChange);
    const transfondoSelect = new SelectGenerator("transfondoContainer", transfondos, false, "Elige un transfondo", null, handleSelectionChange);
    const alinSelect = new SelectGenerator("alineamientosContainer", alineamientos, false, "Elige un alineamiento", null, handleSelectionChange);
}
function loadHtmlTemplate(){
    fetch("template/hoja5e.htm") // Carga el archivo HTML
        .then(response => response.text()) // Convierte la respuesta a texto
        .then(data => {
            document.getElementById("container").innerHTML = data; // Inserta el contenido en el div
            loadCheckBoxes();
        })
        .catch(error => console.error("Error al cargar el HTML:", error));
}