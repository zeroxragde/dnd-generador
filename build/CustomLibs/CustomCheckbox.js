class CheckboxImage {
    constructor(isBase64 = false) {
      this.is64 = isBase64;
      this.inputs = [];
      this.states = ["On.png", "Off.png", "DownOn.png", "DownOff.png", "RollOn.png", "RollOff.png"];
      this.states64 = ["imageOn", "imageOff", "imageDownOn", "imageDownOff", "imageRollOn", "imageRollOff"];
    }
  
    initialize() {
      this.inputs = document.querySelectorAll("form input.i"); // ✅ Selección corregida
      this.replaceCheckboxes();
    }
  
    getCssPosition(element) {
      if (!element) return null;
      let computedStyle = window.getComputedStyle(element);
      let top = computedStyle.getPropertyValue("top");
      let left = computedStyle.getPropertyValue("left");
      return { top, left };
    }
  
    replaceCheckboxes() {
      this.inputs.forEach((input, index) => {
        if (input.hasAttribute("images") &&
            !input.hasAttribute("data-imageAdded") &&
            (input.type === "checkbox" || input.type === "radio")) {
          var css = this.getCssPosition(input);
          let img = document.createElement("img");
  
          img.src = input.checked ? this.getSrc(index, 0) : this.getSrc(index, 1);
          img.id = input.id;
          img.onclick = () => this.checkClick(index);
          if (input.hasAttribute("data-fix-position")) {
            let top = parseInt(css.top) - 2;
            let left = parseInt(css.left) - 2;
            img.style.left = `${left}px`;
            img.style.top = `${top}px`;
          }
          input.parentNode.insertBefore(img, input);
          input.style.display = "none";
          input.setAttribute("data-imageAdded", "true");
        }
      });
    }
  
    getSrc(inputIndex, state) {
      return this.is64
        ? this.inputs[inputIndex].getAttribute(this.states64[state])
        : this.inputs[inputIndex].getAttribute("imageName") + this.states[state];
    }
  
    setImage(inputIndex, state) {
      if (this.inputs[inputIndex].getAttribute("images").charAt(state) === "1") {
        document.getElementById(this.inputs[inputIndex].id).src = this.getSrc(inputIndex, state);
      }
    }
  
    checkClick(inputIndex) {
      let input = this.inputs[inputIndex];
      if (input.type === "radio" && input.checked) return;
  
      if (input.checked) {
        input.checked = false;
        this.setImage(inputIndex, 1);
      } else {
        input.checked = true;
        this.setImage(inputIndex, 0);
        if (input.type === "radio") {
          this.uncheckOthers(input);
        }
      }
    }
  
    uncheckOthers(input) {
      let groupName = input.getAttribute("name");
      if (!groupName) return;
      this.inputs.forEach((inp, idx) => {
        if (inp !== input && inp.getAttribute("name") === groupName) {
          inp.checked = false;
          this.setImage(idx, 1);
        }
      });
    }
  
    clearAll() {
      this.inputs.forEach((input, index) => {
        input.checked = false;
        this.setImage(index, 1);
      });
    }
  
    check(index) {
      this.inputs[index].checked = true;
      this.setImage(index, 0);
    }
  
    uncheck(index) {
      this.inputs[index].checked = false;
      this.setImage(index, 1);
    }
    
    // Nuevo método click_on: marca el checkbox y actualiza la imagen
    click_on(index) {
      this.inputs[index].checked = true;
      this.setImage(index, 0);
    }
  }
  
  /*
  // ✅ Inicializar la clase cuando cargue el DOM
  document.addEventListener("DOMContentLoaded", () => {
    const checkboxManager = new CheckboxImage(false);
    checkboxManager.initialize();
  });
  */
  