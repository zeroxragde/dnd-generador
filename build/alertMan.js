// Crear la alerta personalizada
function createCustomAlert(message, type = "info") {
    // Verificar si ya existe una alerta
    if (document.getElementById("custom-alert")) return;

    // Crear el contenedor principal
    const alertBox = document.createElement("div");
    alertBox.id = "custom-alert";
    alertBox.style.position = "fixed";
    alertBox.style.top = "20px";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translateX(-50%)";
    alertBox.style.padding = "15px 30px";
    alertBox.style.borderRadius = "8px";
    alertBox.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    alertBox.style.zIndex = "1000";
    alertBox.style.fontFamily = "Arial, sans-serif";
    alertBox.style.color = "#fff";
    alertBox.style.fontSize = "16px";
    alertBox.style.transition = "opacity 0.3s ease, top 0.3s ease";

    // Colores según el tipo de alerta
    let backgroundColor;
    switch (type) {
        case "success":
            backgroundColor = "#4caf50";
            break;
        case "error":
            backgroundColor = "#f44336";
            break;
        case "warning":
            backgroundColor = "#ff9800";
            break;
        default:
            backgroundColor = "#2196f3"; // Info
            break;
    }
    alertBox.style.backgroundColor = backgroundColor;

    // Añadir el mensaje
    alertBox.textContent = message;

    // Añadir la alerta al DOM
    document.body.appendChild(alertBox);

    // Animación inicial
    setTimeout(() => {
        alertBox.style.opacity = "1";
    }, 10);

    // Remover la alerta automáticamente después de 3 segundos
    setTimeout(() => {
        alertBox.style.opacity = "0";
        alertBox.style.top = "10px";
        setTimeout(() => {
            if (alertBox.parentNode) {
                alertBox.parentNode.removeChild(alertBox);
            }
        }, 300);
    }, 3000);
}

// Ejemplo de uso
// createCustomAlert("Esto es un mensaje de éxito", "success");
// createCustomAlert("Esto es un mensaje de error", "error");
// createCustomAlert("Esto es una advertencia", "warning");
// createCustomAlert("Esto es información", "info");
