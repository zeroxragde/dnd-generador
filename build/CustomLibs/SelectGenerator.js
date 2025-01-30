class SelectGenerator {
    constructor(containerId, data, isMultiple = false, placeholderText = "Seleccionar", maxSelections = null, onChangeCallback = null) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error("El contenedor no existe.");
            return;
        }

        this.data = data.map(item => (typeof item === "string" ? { value: item, text: item } : item));
        this.isMultiple = isMultiple;
        this.placeholderText = placeholderText;
        this.maxSelections = maxSelections; // Nuevo parámetro
        this.onChangeCallback = onChangeCallback;
        this.selectedValues = new Set(); // Almacenar selección

        this.init();
    }

    init() {
        this.container.innerHTML = "";

        // Crear div envolvente
        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("select-wrapper");

        // Crear botón de selección
        this.selectButton = document.createElement("button");
        this.selectButton.textContent = this.placeholderText;
        this.selectButton.classList.add("select-button");
        this.selectButton.addEventListener("click", (e) => {
            e.stopPropagation();
            this.toggleDropdown();
        });

        // Crear input de búsqueda
        this.searchInput = document.createElement("input");
        this.searchInput.type = "text";
        this.searchInput.placeholder = "Buscar...";
        this.searchInput.classList.add("search-box");
        this.searchInput.style.display = "none";
        this.searchInput.addEventListener("input", () => this.filterOptions());

        // Crear el contenedor de opciones (dropdown)
        this.dropdownContainer = document.createElement("div");
        this.dropdownContainer.classList.add("dropdown-container");
        this.dropdownContainer.style.display = "none";

        // Llenar el dropdown con opciones
        this.createOptions();

        // Cerrar si se hace clic fuera
        document.addEventListener("click", (e) => {
            if (!this.wrapper.contains(e.target)) {
                this.closeDropdown();
            }
        });

        // Agregar elementos al wrapper
        this.wrapper.appendChild(this.selectButton);
        
        this.wrapper.appendChild(this.dropdownContainer);
        this.container.appendChild(this.wrapper);
    }

    createOptions() {
        this.dropdownContainer.innerHTML = "";
        this.dropdownContainer.appendChild(this.searchInput);
        this.data.forEach(option => {
            const optionElement = document.createElement("div");
            optionElement.classList.add("dropdown-option");
            optionElement.textContent = option.text;
            optionElement.dataset.value = option.value;

            optionElement.addEventListener("click", (event) => this.selectOption(event));

            this.dropdownContainer.appendChild(optionElement);
        });
    }

    toggleDropdown() {
        const isOpen = this.dropdownContainer.style.display === "block";
        if (isOpen) {
            this.closeDropdown();
        } else {
            this.openDropdown();
        }
    }

    openDropdown() {
        this.dropdownContainer.style.display = "block";
        this.searchInput.style.display = "block";
        this.searchInput.focus();
    }

    closeDropdown() {
        this.dropdownContainer.style.display = "none";
        this.searchInput.style.display = "none";
        this.searchInput.value = "";
        this.filterOptions();
    }

    filterOptions() {
        const searchTerm = this.searchInput.value.toLowerCase();
        const options = this.dropdownContainer.children;

        for (let option of options) {
            if (option.tagName.toLowerCase() === "input") {
                continue;
             }
            option.style.display = option.textContent.toLowerCase().includes(searchTerm) ? "" : "none";
        }
    }

    selectOption(event) {
        const selectedValue = event.target.dataset.value;

        if (this.isMultiple) {
            if (this.selectedValues.has(selectedValue)) {
                this.selectedValues.delete(selectedValue);
                event.target.classList.remove("selected");
            } else {
                if (this.maxSelections !== null && this.selectedValues.size >= this.maxSelections) {
                    console.warn(`Solo puedes seleccionar hasta ${this.maxSelections} opciones.`);
                    return;
                }
                this.selectedValues.add(selectedValue);
                event.target.classList.add("selected");
            }
        } else {
            this.selectedValues.clear();
            this.selectedValues.add(selectedValue);
            Array.from(this.dropdownContainer.children).forEach(opt => opt.classList.remove("selected"));
            event.target.classList.add("selected");
            this.closeDropdown();
        }

        this.updateButtonText();
        if (this.onChangeCallback) {
            this.onChangeCallback(this.getSelectedValues());
        }
    }
    getSelectedValues() {return this.getSelectedValues();}

    updateButtonText() {
        const selectedArray = Array.from(this.selectedValues);
        const selectedTexts = selectedArray.map(value => {
            const option = this.data.find(item => item.value === value);
            return option ? option.text : value;
        });

        this.selectButton.textContent = selectedTexts.length ? selectedTexts.join(", ") : this.placeholderText;
    }

    getSelectedValues() {
        return Array.from(this.selectedValues);
    }

    setMultipleMode(isMultiple) {
        this.isMultiple = isMultiple;
    }

    setSelectedValues(values) {
        if (this.maxSelections !== null && values.length > this.maxSelections) {
            console.warn(`Solo puedes seleccionar hasta ${this.maxSelections} opciones.`);
            return;
        }
        
        this.selectedValues = new Set(values);
        Array.from(this.dropdownContainer.children).forEach(option => {
            option.classList.toggle("selected", this.selectedValues.has(option.dataset.value));
        });
        this.updateButtonText();
    }
}
/*
// JSON de prueba con valores y textos personalizados
const jsonData = {
    "Razas": [
        { value: "draconido", text: "Dracónido" },
        { value: "elfo", text: "Elfo" },
        { value: "gnomo", text: "Gnomo" },
        { value: "humano", text: "Humano" },
        { value: "tiefling", text: "Tiefling" }
    ],
    "Clases": [
        { value: "barbaro", text: "Bárbaro" },
        { value: "bardo", text: "Bardo" },
        { value: "clerigo", text: "Clérigo" },
        { value: "druida", text: "Druida" },
        { value: "guerrero", text: "Guerrero" },
        { value: "mago", text: "Mago" }
    ]
};

// Callback para manejar cambios
function handleSelectionChange(selectedValues) {
    console.log("Seleccionado:", selectedValues);
}

// Crear select con máximo de 2 selecciones permitidas
const razaSelect = new SelectGenerator("razasContainer", jsonData.Razas, true, "Elige una raza", 2, handleSelectionChange);
const claseSelect = new SelectGenerator("clasesContainer", jsonData.Clases, false, "Selecciona una clase", null, handleSelectionChange);

// Establecer valores preseleccionados después de crear el select
setTimeout(() => {
    razaSelect.setSelectedValues(["elfo", "humano"]);
    claseSelect.setSelectedValues(["mago"]);
}, 1000);


*/