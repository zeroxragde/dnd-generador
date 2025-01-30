var CustomCheckbox = {
    is64: false,
    inputs: [],
    states: ["On.png", "Off.png", "DownOn.png", "DownOff.png", "RollOn.png", "RollOff.png"],
    states64: ["imageOn", "imageOff", "imageDownOn", "imageDownOff", "imageRollOn", "imageRollOff"],
  
    init: function(isBase64) {
      this.is64 = isBase64;
      this.inputs = document.querySelectorAll("form input.i");
      this.replaceChecks();
    },
  
    replaceChecks: function() {
      this.inputs.forEach((input, i) => {
        if (
          input.hasAttribute("images") &&
          input.getAttribute("class") !== "idr-hidden" &&
          input.getAttribute("data-imageAdded") !== "true" &&
          (input.type === "checkbox" || input.type === "radio")
        ) {
          var img = document.createElement("img");
          img.src = input.checked ? this.getSrc(i, 0) : this.getSrc(i, 1);
          img.id = input.getAttribute("id");
          img.onclick = () => this.checkClick(i);
          input.parentNode.insertBefore(img, input);
          input.setAttribute("data-imageAdded", "true");
          input.style.display = "none";
        }
      });
    },
  
    getSrc: function(index, state) {
      return this.is64
        ? this.inputs[index].getAttribute(this.states64[state])
        : this.inputs[index].getAttribute("imageName") + this.states[state];
    },
  
    checkClick: function(index) {
      var input = this.inputs[index];
      input.checked = !input.checked;
      this.setImage(index, input.checked ? 0 : 1);
  
      if (input.type === "radio" && input.checked && input.name) {
        this.uncheckOtherRadios(input.name, index);
      }
    },
  
    setImage: function(index, state) {
      var input = this.inputs[index];
      if (input.getAttribute("images").charAt(state) === "1") {
        document.getElementById(input.getAttribute("id")).src = this.getSrc(index, state);
      }
    },
  
    uncheckOtherRadios: function(name, checkedIndex) {
      this.inputs.forEach((input, i) => {
        if (i !== checkedIndex && input.name === name) {
          input.checked = false;
          this.setImage(i, 1);
        }
      });
    },
  
    clearAll: function() {
      this.inputs.forEach((input, i) => {
        input.checked = false;
        this.setImage(i, 1);
      });
    },
  
    clickOn: function(id) {
      var index = this.getIndexById(id);
      if (index !== -1) {
        this.inputs[index].checked = true;
        this.setImage(index, 0);
      }
    },
  
    clickOff: function(id) {
      var index = this.getIndexById(id);
      if (index !== -1) {
        this.inputs[index].checked = false;
        this.setImage(index, 1);
      }
    },
  
    getIndexById: function(id) {
      return Array.from(this.inputs).findIndex(input => input.getAttribute("id") === id);
    }
  };
  
 
  