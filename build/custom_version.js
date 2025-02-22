// Objeto que contiene nombres de armaduras y sus valores
const armaduras = {
  armaduraLigera: {
    acolchada: {
      nombreArmadura: "Armadura acolchada",
      armaduraCA: 11 + "{{modificadorDestreza}}",
    },
    cuero: {
      nombreArmadura: "Armadura de cuero",
      armaduraCA: 11 + "{{modificadorDestreza}}",
    },
    cueroTachonado: {
      nombreArmadura: "Cuero tachonado",
      armaduraCA: 12 + "{{modificadorDestreza}}",
    },
  },
  armaduraMedia: {
    piel: {
      nombreArmadura: "Armadura de piel",
      armaduraCA: 12 + "{{modificadorDestreza}}",
    },
    cotaMalla: {
      nombreArmadura: "Camiseta de malla",
      armaduraCA: 13 + "{{modificadorDestreza}}",
    },
    cotaEscamas: {
      nombreArmadura: "Cota de escamas",
      armaduraCA: 14 + "{{modificadorDestreza}}",
    },
    coraza: {
      nombreArmadura: "Coraza",
      armaduraCA: 14 + "{{modificadorDestreza}}",
    },
    mediaArmadura: {
      nombreArmadura: "Media armadura",
      armaduraCA: 15 + "{{modificadorDestreza}}",
    },
    escudo: {
      nombreArmadura: "Escudo",
      armaduraCA: 2,
    },
  },
  armaduraPesada: {
    cotaAnillas: {
      nombreArmadura: "Cota de anillas",
      armaduraCA: 14,
    },
    cotaMalla: {
      nombreArmadura: "Cota de malla",
      armaduraCA: 16,
    },
    bandas: {
      nombreArmadura: "Armadura de bandas",
      armaduraCA: 17,
    },
    placas: {
      nombreArmadura: "Armadura de placas",
      armaduraCA: 18,
    },
  },
};

// Array que contiene lista de armas simples
const armasSimples = [
  "garrote",
  "daga",
  "gran garrote",
  "hacha de mano",
  "martillo ligero",
  "dardo",
  "ballesta ligera",
  "maza",
  "jabalina",
  "bastón",
  "arco corto",
  "hoz",
  "honda",
  "lanza",
  "golpe sin armas",
];

// Array que contiene lista de armas marciales
const armasMarciales = [
  "hacha de batalla",
  "mangual",
  "glave",
  "gran hacha",
  "espada grande",
  "alabarda",
  "lanza de caballería",
  "espada larga",
  "mazo",
  "estrella del alba",
  "pica",
  "estoque",
  "cimitarra",
  "espada corta",
  "tridente",
  "pico de guerra",
  "martillo de guerra",
  "látigo",
  "cerbatana",
  "ballesta de mano",
  "ballesta pesada",
  "arco largo",
];

const instrumentos = [
  "Gaita",
  "Tambor",
  "Salterio",
  "Flauta",
  "Laúd",
  "Lira",
  "Cuerno",
  "Guitarra",
  "Flauta de Pan",
  "Chirimía",
];

const objetosFondoCharlatan = [
  {
    id: 1,
    descripcion: "Diez botellas con tapón llenas de líquido coloreado",
  },
  {
    id: 2,
    descripcion: "Conjunto de dados trucados",
  },
  {
    id: 3,
    descripcion: "Baraja de Carroas marcadas",
  },
  {
    id: 4,
    descripcion: "Anillo de sello de un duque imaginario",
  },
];

const alientoDragon = {
  armasAliento: [
    {
      idRaza: 2, // Dracónido Negro
      color: "Negro",
      tipoDaño: "Ácido",
      area: "línea de 5 por 30 pies",
      tiradaSalvacion: "destreza",
      descripcion:
        "Ácido Arma de Aliento: Puedes usar tu acción para exhalar tu Ascendencia Dracónica en una línea de 5 por 30 pies. Cuando usas tu arma de aliento, cada criatura en el área de la exhalación debe hacer una tirada de salvación de destreza. La DC para esta tirada de salvación es {DC}. Una criatura recibe 2d6 de daño de ácido en una salvación fallida, y la mitad de daño en una salvación exitosa.",
    },
    {
      idRaza: 3, // Dracónido Azul
      color: "Azul",
        "idRaza": 3, // Dracónido Azul
        "color": "Azul",
        "damageType": "Relámpago",
        "area": "línea de 5 por 30 pies",
        "savingThrow": "destreza",
        "descripcion": "Relámpago Arma de Aliento: Puedes usar tu acción para exhalar tu Ascendencia Dracónica en una línea de 5 por 30 pies. Cuando usas tu arma de aliento, cada criatura en el área de la exhalación debe hacer una tirada de salvación de destreza. La DC para esta tirada de salvación es {DC}. Una criatura recibe 2d6 de daño de relámpago en una salvación fallida, y la mitad de daño en una salvación exitosa."
      },
      {
        "idRaza": 4, // Dracónido de Latón
        "color": "Laton",
        "damageType": "Fuego",
        "area": "línea de 5 por 30 pies",
        "savingThrow": "destreza",
        "descripcion": "Fuego Arma de Aliento: Puedes usar tu acción para exhalar tu Ascendencia Dracónica en una línea de 5 por 30 pies. Cuando usas tu arma de aliento, cada criatura en el área de la exhalación debe hacer una tirada de salvación de destreza. La DC para esta tirada de salvación es {DC}. Una criatura recibe 2d6 de daño de fuego en una salvación fallida, y la mitad de daño en una salvación exitosa."
      },
      {
        "idRaza": 5, // Dracónido de Bronce
        "color": "Bronce",
        "damageType": "Relámpago",
        "area": "línea de 5 por 30 pies",
        "savingThrow": "destreza",
        "descripcion": "Relámpago Arma de Aliento: Puedes usar tu acción para exhalar tu Ascendencia Dracónica en una línea de 5 por 30 pies. Cuando usas tu arma de aliento, cada criatura en el área de la exhalación debe hacer una tirada de salvación de destreza. La DC para esta tirada de salvación es {DC}. Una criatura recibe 2d6 de daño de relámpago en una salvación fallida, y la mitad de daño en una salvación exitosa."
      },
      {
        "idRaza": 6, // Dracónido de Cobre
        "color": "Cobre",
        "damageType": "Ácido",
        "area": "línea de 5 por 30 pies",
        "savingThrow": "destreza",
        "descripcion": "Ácido Arma de Aliento: Puedes usar tu acción para exhalar tu Ascendencia Dracónica en una línea de 5 por 30 pies. Cuando usas tu arma de aliento, cada criatura en el área de la exhalación debe hacer una tirada de salvación de destreza. La DC para esta tirada de salvación es {DC}. Una criatura recibe 2d6 de daño de ácido en una salvación fallida, y la mitad de daño en una salvación exitosa."
      },
      {
        "idRaza": 7, // Dracónido Dorado
        "color": "Dorado",
        "damageType": "Fuego",
        "area": "cono de 15 pies",
        "savingThrow": "destreza",
        "descripcion": "Fuego Arma de Aliento: Puedes usar tu acción para exhalar tu Ascendencia Dracónica en un cono de 15 pies. Cuando usas tu arma de aliento, cada criatura en el área de la exhalación debe hacer una tirada de salvación de destreza. La DC para esta tirada de salvación es {DC}. Una criatura recibe 2d6 de daño de fuego en una salvación fallida, y la mitad de daño en una salvación exitosa."
      },
      {
        "idRaza": 8, // Dracónido Rojo
        "color": "Rojo",
        "damageType": "Fuego",
        "area": "cono de 15 pies",
        "savingThrow": "destreza",
        "descripcion": "Fuego Arma de Aliento: Puedes usar tu acción para exhalar tu Ascendencia Dracónica en un cono de 15 pies. Cuando usas tu arma de aliento, cada criatura en el área de la exhalación debe hacer una tirada de salvación de destreza. La DC para esta tirada de salvación es {DC}. Una criatura recibe 2d6 de daño de fuego en una salvación fallida, y la mitad de daño en una salvación exitosa."
      },
      {
        "idRaza": 9, // Dracónido Verde
        "color": "Verde",
        "damageType": "Veneno",
        "area": "cono de 15 pies",
        "savingThrow": "constitución",
        "descripcion": "Veneno Arma de Aliento: Puedes usar tu acción para exhalar tu Ascendencia Dracónica en un cono de 15 pies. Cuando usas tu arma de aliento, cada criatura en el área de la exhalación debe hacer una tirada de salvación de constitución. La DC para esta tirada de salvación es {DC}. Una criatura recibe 2d6 de daño de veneno en una salvación fallida, y la mitad de daño en una salvación exitosa."
      },
      {
        "idRaza": 10, // Dracónido Plateado
        "color": "Plateado",
        "damageType": "Frío",
        "area": "cono de 15 pies",
        "savingThrow": "constitución",
        "descripcion": "Frío Arma de Aliento: Puedes usar tu acción para exhalar tu Ascendencia Dracónica en un cono de 15 pies. Cuando usas tu arma de aliento, cada criatura en el área de la exhalación debe hacer una tirada de salvación de constitución. La DC para esta tirada de salvación es {DC}. Una criatura recibe 2d6 de daño de frío en una salvación fallida, y la mitad de daño en una salvación exitosa."
      },
      {
        "idRaza": 11, // Dracónido Blanco
        "color": "Blanco",
        "damageType": "Frío",
        "area": "cono de 15 pies",
        "savingThrow": "constitución",
        "descripcion": "Frío Arma de Aliento: Puedes usar tu acción para exhalar tu Ascendencia Dracónica en un cono de 15 pies. Cuando usas tu arma de aliento, cada criatura en el área de la exhalación debe hacer una tirada de salvación de constitución. La DC para esta tirada de salvación es {DC}. Una criatura recibe 2d6 de daño de frío en una salvación fallida, y la mitad de daño en una salvación exitosa."
      }
    ]
};

const gamingSets = [
  {
    "id": 1,
    "nombre": "Dados"
  },
  {
    "id": 2,
    "nombre": "Ajedrez de dragón"
  },
  {
    "id": 3,
    "nombre": "Carroas para jugar"
  },
  {
    "id": 4,
    "nombre": "Tres dragones ante"
  }
];

const trinkets = [
  {
    "id": 1,
    "descripcion": "Pieza de cristal que brilla tenuemente a la luz de la luna"
  },
  {
    "id": 2,
    "descripcion": "Moneda de oro acuñada en una tierra desconocida"
  },
  {
    "id": 3,
    "descripcion": "Garra ósea de dragón colgando de un simple collar de cuero"
  },
  {
    "id": 4,
    "descripcion": "Pequeño ícono de plata de un cuervo"
  },
  {
    "id": 5,
    "descripcion": "Llave antigua"
  },
  {
    "id": 6,
    "descripcion": "Calavera de plata del tamaño de una moneda"
  },
  {
    "id": 7,
    "descripcion": "Conjunto de flautas de hueso"
  },
  {
    "id": 8,
    "descripcion": "Flecha antigua de diseño élfico"
  },
  {
    "id": 9,
    "descripcion": "Símbolo sagrado de hierro dedicado a un dios desconocido"
  },
  {
    "id": 10,
    "descripcion": "Invitación a una fiesta donde ocurrió un asesinato"
  },
  {
    "id": 11,
    "descripcion": "Orbe de cristal lleno de humo en movimiento"
  },
  {
    "id": 12,
    "descripcion": "Escritura de una parcela de tierra en un reino desconocido para ti"
  },
  {
    "id": 13,
    "descripcion": "Pieza de ajedrez antigua hecha de vidrio irrompible"
  },
  {
    "id": 14,
    "descripcion": "Pequeña estatua de madera de un mediano presumido"
  },
  {
    "id": 15,
    "descripcion": "Orbe de latón grabado con runas extrañas"
  },
  {
    "id": 16,
    "descripcion": "Fragmento de obsidiana que siempre se siente cálido al tacto"
  },
  {
    "id": 17,
    "descripcion": "Dispositivo metálico rectangular con dos pequeñas copas de metal en un extremo que lanza chispas cuando se moja"
  },
  {
    "id": 18,
    "descripcion": "Gema que parece un trozo de carbón cuando la examina alguien que no seas tú"
  },
  {
    "id": 19,
    "descripcion": "Silbato hecho de madera dorada"
  },
  {
    "id": 20,
    "descripcion": "Mapa del tesoro indescifrable"
  }
];

const admirerFavors = [
  {
    "id": 1,
    "descripcion": "Carroa de amor de un admirador"
  },
  {
    "id": 2,
    "descripcion": "Mechón de cabello de un admirador"
  },
  {
    "id": 3,
    "descripcion": "Un trinket de un admirador"
  }
];

const artisanTools = [
  { "id": 1,  "nombre": "Suministros de alquimista" },
  { "id": 2,  "nombre": "Suministros de cervecero" },
  { "id": 3,  "nombre": "Suministros de calígrafo" },
  { "id": 4,  "nombre": "Herramientas de carpintero" },
  { "id": 5,  "nombre": "Herramientas de Carroógrafo" },
  { "id": 6,  "nombre": "Herramientas de zapatero" },
  { "id": 7,  "nombre": "Utensilios de cocina" },
  { "id": 8,  "nombre": "Herramientas de soplador de vidrio" },
  { "id": 9,  "nombre": "Herramientas de joyero" },
  { "id": 10, "nombre": "Herramientas de curtidor" },
  { "id": 11, "nombre": "Herramientas de albañil" },
  { "id": 12, "nombre": "Suministros de pintor" },
  { "id": 13, "nombre": "Herramientas de alfarero" },
  { "id": 14, "nombre": "Herramientas de herrero" },
  { "id": 15, "nombre": "Herramientas de reparador" },
  { "id": 16, "nombre": "Herramientas de tejedor" },
  { "id": 17, "nombre": "Herramientas de tallador de madera" }
];

const soldierGamingSets = [
  { "id": 1, "nombre": "Dados" },
  { "id": 2, "nombre": "Juego de Carroas" }
];

const soldierTrophies = [
  {
    "id": 1,
    "descripcion": "Daga de un enemigo caído"
  },
  {
    "id": 2,
    "descripcion": "Hoja rota de un enemigo caído"
  },
  {
    "id": 3,
    "descripcion": "Trozo de estandarte de un enemigo caído"
  },
  {
    "id": 4,
    "descripcion": "{{trinket}} de un enemigo caído" 
  }
];





const caracteristicasRazialesFisicas=[
    {
      "id": 2,
      "nombre": "Dracónido Negro",
      "edad": [15, 40],
      "altura": [1.83, 2.03],
      "piel": ["Negro Marfil", "Negro Ónix", "Negro Carbón", "Negro Perlado", "Negro"],
      "cabello": ["", "", "", ""],
      "ojos": ["Violeta", "Azul", "Rojo", "Morado"],
      "peso": [90.72, 154.22],
      "armaAliento": {
        "tipo": "Ácido",
        "area": "línea de 5 por 30 pies",
        "tiradaSalvacion": "destreza"
      }
    },
    {
      "id": 3,
      "nombre": "Dracónido Azul",
      "edad": [15, 40],
      "altura": [1.83, 2.03],
      "piel": ["Azul", "Azul Celeste", "Azul Marino", "Azul Pálido", "Azul Real"],
      "cabello": ["", "", "", ""],
      "ojos": ["Violeta", "Azul", "Rojo", "Morado"],
      "peso": [90.72, 154.22],
      "armaAliento": {
        "tipo": "Relámpago",
        "area": "línea de 5 por 30 pies",
        "tiradaSalvacion": "destreza"
      }
    },
    {
      "id": 4,
      "nombre": "Dracónido de Latón",
      "edad": [15, 40],
      "altura": [1.83, 2.03],
      "piel": ["Latón", "Latón Oxidado", "Cobre y Latón", "Latón Ardiente", "Latón"],
      "cabello": ["", "", "", ""],
      "ojos": ["Amarillo", "Verde", "Rojo", "Azul"],
      "peso": [90.72, 154.22],
      "armaAliento": {
        "tipo": "Fuego",
        "area": "línea de 5 por 30 pies",
        "tiradaSalvacion": "destreza"
      }
    },
    {
      "id": 5,
      "nombre": "Dracónido de Bronce",
      "edad": [15, 40],
      "altura": [1.83, 2.03],
      "piel": ["Bronce", "Oro Viejo", "Bronce Oscuro", "Bronce Arenoso", "Bronce"],
      "cabello": ["", "", "", ""],
      "ojos": ["Amarillo", "Verde", "Rojo", "Azul"],
      "peso": [90.72, 154.22],
      "armaAliento": {
        "tipo": "Relámpago",
        "area": "línea de 5 por 30 pies",
        "tiradaSalvacion": "destreza"
      }
    },
    {
      "id": 6,
      "nombre": "Dracónido de Cobre",
      "edad": [15, 40],
      "altura": [1.83, 2.03],
      "piel": ["Cobre", "Bronce y Cobre", "Cobre Oxidado", "Cobre Ardiente", "Cobre"],
      "cabello": ["", "", "", ""],
      "ojos": ["Amarillo", "Verde", "Rojo", "Azul"],
      "peso": [90.72, 154.22],
      "armaAliento": {
        "tipo": "Ácido",
        "area": "línea de 5 por 30 pies",
        "tiradaSalvacion": "destreza"
      }
    },
    {
      "id": 7,
      "nombre": "Dracónido Dorado",
      "edad": [15, 40],
      "altura": [1.83, 2.03],
      "piel": ["Amarillo Dorado", "Oro", "Vara Dorada", "Oro en Pepita", "Oro"],
      "cabello": ["", "", "", ""],
      "ojos": ["Amarillo", "Verde", "Rojo", "Azul"],
      "peso": [90.72, 154.22],
      "armaAliento": {
        "tipo": "Fuego",
        "area": "cono de 15 pies",
        "tiradaSalvacion": "destreza"
      }
    },
    {
      "id": 8,
      "nombre": "Dracónido Verde",
      "edad": [15, 40],
      "altura": [1.83, 2.03],
      "piel": ["Verde Mar", "Verde Bosque", "Jade", "Esmeralda", "Verde"],
      "cabello": ["", "", "", ""],
      "ojos": ["Amarillo", "Verde", "Rojo", "Azul"],
      "peso": [90.72, 154.22],
      "armaAliento": {
        "tipo": "Veneno",
        "area": "cono de 15 pies",
        "tiradaSalvacion": "constitución"
      }
    },
    {
      "id": 9,
      "nombre": "Dracónido Rojo",
      "edad": [15, 40],
      "altura": [1.83, 2.03],
      "piel": ["Escarlata", "Rojo y Naranja", "Rojo Sangre", "Rojo Cereza", "Rojo"],
      "cabello": ["", "", "", ""],
      "ojos": ["Amarillo", "Verde", "Rojo", "Azul"],
      "peso": [90.72, 154.22],
      "armaAliento": {
        "tipo": "Fuego",
        "area": "cono de 15 pies",
        "tiradaSalvacion": "destreza"
      }
    },
    {
      "id": 10,
      "nombre": "Dracónido Plateado",
      "edad": [15, 40],
      "altura": [1.83, 2.03],
      "piel": ["Plateado Hielo", "Plateado Líquido", "Plateado Lunar", "Plateado", "Plateado"],
      "cabello": ["", "", "", ""],
      "ojos": ["Violeta", "Azul", "Rojo", "Morado"],
      "peso": [90.72, 154.22],
      "armaAliento": {
        "tipo": "Frío",
        "area": "cono de 15 pies",
        "tiradaSalvacion": "constitución"
      }
    },
    {
      "id": 11,
      "nombre": "Dracónido Blanco",
      "edad": [15, 40],
      "altura": [1.83, 2.03],
      "piel": ["Nieve", "Blanco Fantasma", "Humo Blanco", "Blanco Escarcha", "Blanco"],
      "cabello": ["", "", "", ""],
      "ojos": ["Violeta", "Azul", "Rojo", "Morado"],
      "peso": [90.72, 154.22],
      "armaAliento": {
        "tipo": "Frío",
        "area": "cono de 15 pies",
        "tiradaSalvacion": "constitución"
      }
    },
    {
      "id": 13,
      "nombre": "Enano de Colina",
      "edad": [50, 250],
      "altura": [1.32, 1.52],
      "piel": ["Rojo Pálido", "Marrón Claro", "Marrón Oscuro", "Bronceado Oscuro", "Bronceado"],
      "cabello": ["Gris", "Negro", "Marrón", "Rojo"],
      "ojos": ["Negro", "Marrón", "Verde", "Azul"],
      "peso": [49.90, 97.52],
      "armas": ["Hacha de batalla", "Hacha de batalla", "Hacha de mano", "Martillo ligero", "Martillo de guerra"],
      "armadura": [],
      "hp": "+1"
    },
    {
      "id": 14,
      "nombre": "Enano de Montaña",
      "edad": [50, 250],
      "altura": [1.40, 1.60],
      "piel": ["Rojo Pálido", "Marrón Claro", "Marrón Oscuro", "Bronceado Oscuro", "Bronceado"],
      "cabello": ["Gris", "Negro", "Marrón", "Rojo"],
      "ojos": ["Negro", "Marrón", "Verde", "Azul"],
      "peso": [49.90, 97.52],
      "armas": ["Hacha de batalla", "Hacha de batalla", "Hacha de mano", "Hacha de batalla", "Martillo de guerra"],
      "armadura": ["Armadura ligera", "Armadura media"],
      "hp": ""
    },
    {
      "id": 17,
      "nombre": "Alto Elfo",
      "edad": [100, 600],
      "altura": [1.65, 1.86],
      "piel": ["Cobre", "Bronce", "Blanco Azulado", "Blanco Azulado", "Cobre Claro"],
      "cabello": ["Verde", "Azul", "Turquesa", "Plateado Blanco"],
      "ojos": ["Oro", "Plata", "Negro", "Verde"],
      "peso": [49.90, 74.84],
      "armas": [],
      "armadura": [],
      "hp": ""
    },
    {
      "id": 18,
      "nombre": "Elfo del Bosque",
      "edad": [100, 600],
      "altura": [1.65, 1.86],
      "piel": ["Cobre", "Bronce", "Cobre Avellana", "Bronceado Oscuro", "Cobre Claro"],
      "cabello": ["Marrón", "Negro", "Cobre", "Rubio"],
      "ojos": ["Verde", "Marrón", "Avellana", "Ámbar"],
      "peso": [49.90, 74.84],
      "armas": ["Espada larga", "Espada corta", "Arco corto", "Arco largo"],
      "armadura": [],
      "hp": ""
    },
    {
      "id": 16,
      "nombre": "Elfo Oscuro (Drow)",
      "edad": [100, 600],
      "altura": [1.63, 1.80],
      "piel": ["Negro", "Ónix", "Gris Oscuro", "Negro", "Plata Oscura"],
      "cabello": ["Blanco", "Rubio Claro", "Amarillo Pálido", "Blanco y Amarillo"],
      "ojos": ["Lila", "Plata", "Rosa", "Azul"],
      "peso": [45.36, 70.31],
      "armas": ["Estoque", "Espada corta", "Ballesta de mano"],
      "armadura": [],
      "hp": ""
    },
    {
      "id": 25,
      "nombre": "Mediano Piesligeros",
      "edad": [20, 100],
      "altura": [0.81, 1.04],
      "piel": ["Bronceado", "Bronceado Claro", "Pálido y Rubicundo", "Claro", "Justo"],
      "cabello": ["Marrón", "Marrón Arenoso", "Rubio Oscuro", "Castaño"],
      "ojos": ["Marrón", "Avellana", "Verde", "Marrón Claro"],
      "peso": [15.88, 22.68],
      "tamaño": "pequeño",
      "armas": [],
      "armadura": [],
      "hp": ""
    },
    {
      "id": 26,
      "nombre": "Mediano Recio",
      "edad": [20, 100],
      "altura": [0.86, 1.09],
      "piel": ["Pálido", "Bronceado Claro", "Pálido y Rubicundo", "Claro", "Justo y Rubicundo"],
      "cabello": ["Marrón", "Marrón Arenoso", "Marrón Oscuro", "Castaño"],
      "ojos": ["Marrón", "Avellana", "Verde", "Marrón Claro"],
      "peso": [16.78, 23.59],
      "tamaño": "pequeño",
      "armas": [],
      "armadura": [],
      "hp": ""
    },
    {
      "id": 20,
      "nombre": "Gnomo del Bosque",
      "edad": [40, 250],
      "altura": [0.86, 1.09],
      "piel": ["Bronceado", "Bronceado Claro", "Marrón", "Bronceado Oscuro", "Marrón Claro"],
      "cabello": ["Rubio", "Marrón Arenoso", "Rubio Oscuro", "Marrón Claro"],
      "ojos": ["Azul Hielo", "Azul Marino", "Azul Pálido", "Azul Brillante"],
      "peso": [15.88, 22.68],
      "tamaño": "pequeño",
      "armas": [],
      "armadura": [],
      "hp": ""
    },
    {
      "id": 21,
      "nombre": "Gnomo de Roca",
      "edad": [40, 250],
      "altura": [0.89, 1.14],
      "piel": ["Bronceado", "Bronceado Claro", "Marrón", "Bronceado Oscuro", "Marrón Claro"],
      "cabello": ["Rubio", "Marrón Arenoso", "Rubio Oscuro", "Marrón Claro"],
      "ojos": ["Azul Hielo", "Azul Marino", "Azul Pálido", "Azul Brillante"],
      "peso": [16.78, 23.59],
      "tamaño": "pequeño",
      "armas": [],
      "armadura": [],
      "hp": ""
    },
    {
      "id": 22,
      "nombre": "Semielfo",
      "edad": [20, 120],
      "altura": [1.65, 1.88],
      "piel": ["Cobre", "Justo", "Pálido", "Bronceado Oscuro", "Cobre Claro"],
      "cabello": ["Marrón Verdoso", "Negro Azulado", "Blanco Rojizo", "Rubio Plateado"],
      "ojos": ["Oro", "Rosa", "Lila", "Verde"],
      "peso": [54.43, 92.99],
      "armas": [],
      "armadura": [],
      "hp": ""
    },
    {
      "id": 23,
      "nombre": "Semiorco",
      "edad": [15, 40],
      "altura": [1.83, 2.16],
      "piel": ["Grisáceo", "Gris Verdoso", "Gris", "Gris Bronceado", "Grisáceo"],
      "cabello": ["Marrón Claro", "Negro", "Castaño", "Marrón Oscuro"],
      "ojos": ["Verde", "Azul", "Marrón", "Negro"],
      "peso": [77.11, 120.20],
      "armas": [],
      "armadura": [],
      "hp": ""
    },
    {
      "id": 37,
      "nombre": "Tiefling",
      "edad": [20, 55],
      "altura": [1.65, 1.88],
      "piel": ["Rojo Ladrillo", "Bronceado Rojizo", "Granate", "Rojo Sangre", "Rojo Cobrizo"],
      "cabello": ["Morado Oscuro", "Negro", "Rojo Oscuro", "Azul Oscuro"],
      "ojos": ["Blanco", "Negro", "Rojo", "Plata"],
      "peso": [63.50, 111.13],
      "armas": [],
      "armadura": [],
      "hp": ""
    }
]

var datosRazas  = {
    "razas": [
      {
        "id": 2, // Dracónido Negro
        "nombre": "Dracónido Negro",
        "additionalFeatures": [
          "Resistencia al Daño: Ácido."
        ],
        "aumentoAtributos": {
          "fuerza": 2,
          "carisma": 1
        },
        "idiomas": [0, 10], // "Comun" y "Dracónico"
        "features": [
          "Ascendencia Dracónica: Dragones Negros."
        ],
        "balance": [0.55, 0.4],
        "moralidad": [0.8, 0.55]
      },
      {
        "id": 3, // Dracónido Azul
        "nombre": "Dracónido Azul",
        "additionalFeatures": [
          "Resistencia al Daño: Relámpago."
        ],
        "aumentoAtributos": {
          "fuerza": 2,
          "carisma": 1
        },
        "idiomas": [0, 10], // "Comun" y "Dracónico"
        "features": [
          "Ascendencia Dracónica: Dragones Azules."
        ],
        "balance": [0.55, 0.4],
        "moralidad": [0.8, 0.55]
      },
      {
        "id": 4, // Dracónido de Latón
        "nombre": "Dracónido de Latón",
        "additionalFeatures": [
          "Resistencia al Daño: Fuego."
        ],
        "aumentoAtributos": {
          "fuerza": 2,
          "carisma": 1
        },
        "idiomas": [0, 10], // "Comun" y "Dracónico"
        "features": [
          "Ascendencia Dracónica: Dragones de Latón."
        ],
        "balance": [0.55, 0.4],
        "moralidad": [0.6, 0.25]
      },
      {
        "id": 5, // Dracónido de Bronce
        "nombre": "Dracónido de Bronce",
        "additionalFeatures": [
          "Resistencia al Daño: Relámpago."
        ],
        "aumentoAtributos": {
          "fuerza": 2,
          "carisma": 1
        },
        "idiomas": [0, 10], // "Comun" y "Dracónico"
        "features": [
          "Ascendencia Dracónica: Dragones de Bronce."
        ],
        "balance": [0.55, 0.4],
        "moralidad": [0.6, 0.25]
      },
      {
        "id": 6, // Dracónido de Cobre
        "nombre": "Dracónido de Cobre",
        "additionalFeatures": [
          "Resistencia al Daño: Ácido."
        ],
        "aumentoAtributos": {
          "fuerza": 2,
          "carisma": 1
        },
        "idiomas": [0, 10], // "Comun" y "Dracónico"
        "features": [
          "Ascendencia Dracónica: Dragones de Cobre."
        ],
        "balance": [0.55, 0.4],
        "moralidad": [0.6, 0.25]
      },
      {
        "id": 7, // Dracónido Dorado
        "nombre": "Dracónido Dorado",
        "additionalFeatures": [
          "Resistencia al Daño: Fuego."
        ],
        "aumentoAtributos": {
          "fuerza": 2,
          "carisma": 1
        },
        "idiomas": [0, 10], // "Comun" y "Dracónico"
        "features": [
          "Ascendencia Dracónica: Dragones Dorados."
        ],
        "balance": [0.55, 0.4],
        "moralidad": [0.6, 0.25]
      },
      {
        "id": 8, // Dracónido Verde
        "nombre": "Dracónido Verde",
        "additionalFeatures": [
          "Resistencia al Daño: Veneno."
        ],
        "aumentoAtributos": {
          "fuerza": 2,
          "carisma": 1
        },
        "idiomas": [0, 10], // "Comun" y "Dracónico"
        "features": [
          "Ascendencia Dracónica: Dragones Verdes."
        ],
        "balance": [0.55, 0.4],
        "moralidad": [0.75, 0.4]
      },
      {
        "id": 9, // Dracónido Rojo
        "nombre": "Dracónido Rojo",
        "additionalFeatures": [
          "Resistencia al Daño: Fuego."
        ],
        "aumentoAtributos": {
          "fuerza": 2,
          "carisma": 1
        },
        "idiomas": [0, 10], // "Comun" y "Dracónico"
        "features": [
          "Ascendencia Dracónica: Dragones Rojos."
        ],
        "balance": [0.55, 0.4],
        "moralidad": [0.75, 0.4]
      },
      {
        "id": 10, // Dracónido Plateado
        "nombre": "Dracónido Plateado",
        "additionalFeatures": [
          "Resistencia al Daño: Frío."
        ],
        "aumentoAtributos": {
          "fuerza": 2,
          "carisma": 1
        },
        "idiomas": [0, 10], // "Comun" y "Dracónico"
        "features": [
          "Ascendencia Dracónica: Dragones Plateados."
        ],
        "balance": [0.55, 0.4],
        "moralidad": [0.6, 0.25]
      },
      {
        "id": 11, // Dracónido Blanco
        "nombre": "Dracónido Blanco",
        "additionalFeatures": [
          "Resistencia al Daño: Frío."
        ],
        "aumentoAtributos": {
          "fuerza": 2,
          "carisma": 1
        },
        "idiomas": [0, 10], // "Comun" y "Dracónico"
        "features": [
          "Ascendencia Dracónica: Dragones Blancos."
        ],
        "balance": [0.55, 0.4],
        "moralidad": [0.75, 0.4]
      },
      {
        "id": 13, // Enano de Colina
        "nombre": "Enano de Colina",
        "additionalFeatures": [
          "Robustez Enana: Tu punto de golpe máximo aumenta en 1, y aumenta en 1 cada vez que subes de nivel."
        ],
        "aumentoAtributos": {
          "constitución": 2,
          "sabiduría": 1
        },
        "idiomas": [0, 1], // "Comun" y "Enano"
        "features": [
          "Visión Nocturna: 19 m",
          "Resistencia Enana: Tienes ventaja en las tiradas de salvación contra veneno."
        ],
        "balance": [0.3, 0.1],
        "moralidad": [0.5, 0.2]
      },
      {
        "id": 14, // Enano de Montaña
        "nombre": "Enano de Montaña",
        "additionalFeatures": [],
        "aumentoAtributos": {
          "fuerza": 2,
          "constitución": 2
        },
        "idiomas": [0, 1], // "Comun" y "Enano"
        "features": [
          "Visión Nocturna: 19 m",
          "Resistencia Enana: Tienes ventaja en las tiradas de salvación contra veneno."
        ],
        "balance": [0.3, 0.1],
        "moralidad": [0.5, 0.2]
      },
      {
        "id": 17, // Alto Elfo
        "nombre": "Alto Elfo",
        "additionalFeatures": [
          "Truco de los Altos Elfos: Conoces un truco (prestidigitación) de tu herencia de Alto Elfo."
        ],
        "aumentoAtributos": {
          "destreza": 2,
          "inteligencia": 1
        },
        "idiomas": [0, 2, "Extra"], // "Comun", "Élfico" y un idioma extra
        "features": [
          "Visión Nocturna: 19 m",
          "Ascendencia Feérica: Tienes ventaja en las tiradas de salvación contra ser encantado."
        ],
        "balance": [0.9, 0.7],
        "moralidad": [0.7, 0.2]
      },
      {
        "id": 18, // Elfo del Bosque
        "nombre": "Elfo del Bosque",
        "additionalFeatures": [
          "Máscara de lo Salvaje: Puedes intentar esconderte incluso cuando solo estás ligeramente oscurecido por follaje, lluvia intensa, nieve cayendo, niebla y otros fenómenos naturales."
        ],
        "aumentoAtributos": {
          "destreza": 2,
          "sabiduría": 1
        },
        "idiomas": [0, 2], // "Comun" y "Élfico"
        "features": [
          "Visión Nocturna: 19 m",
          "Ascendencia Feérica: Tienes ventaja en las tiradas de salvación contra ser encantado."
        ],
        "balance": [0.9, 0.7],
        "moralidad": [0.6, 0.2]
      },
      {
        "id": 16, // Elfo Oscuro (Drow)
        "nombre": "Elfo Oscuro (Drow)",
        "additionalFeatures": [
          "Sensibilidad a la luz solar: Tienes desventaja en las tiradas de ataque y en los chequeos de Sabiduría (Percepción) que dependen de la vista cuando tú, el objetivo de tu ataque o lo que estás tratando de percibir está bajo la luz solar directa."
        ],
        "aumentoAtributos": {
          "destreza": 2,
          "carisma": 1
        },
        "idiomas": [0, 2], // "Comun" y "Élfico"
        "features": [
          "Visión en la Oscuridad Superior: 37 m",
          "Truco de los Drow: Conoces un truco (luces danzantes) de tu herencia de Alto Elfo."
        ],
        "balance": [0.9, 0.7],
        "moralidad": [0.8, 0.4]
      },
      {
        "id": 25, // Mediano Piesligeros
        "nombre": "Mediano Piesligeros",
        "additionalFeatures": [
          "Sigiloso por Naturaleza: Puedes intentar esconderte incluso cuando solo estás oscurecido por una criatura que sea al menos un tamaño más grande que tú."
        ],
        "aumentoAtributos": {
          "destreza": 2,
          "carisma": 1
        },
        "idiomas": [0, 6], // "Comun" y "Mediano"
        "features": [
          "Suerte: Cuando sacas un 1 en una tirada de ataque, puedes volver a tirar el dado."
        ],
        "balance": [0.2, 0.1],
        "moralidad": [0.4, 0.2]
      },
      {
        "id": 26, // Mediano Recio
        "nombre": "Mediano Recio",
        "additionalFeatures": [
          "Resistencia Robusta: Tienes ventaja en las tiradas de salvación contra veneno y tienes resistencia al daño por veneno."
        ],
        "aumentoAtributos": {
          "destreza": 2,
          "constitución": 1
        },
        "idiomas": [0, 6], // "Comun" y "Mediano"
        "features": [
          "Suerte: Cuando sacas un 1 en una tirada de ataque, puedes volver a tirar el dado."
        ],
        "balance": [0.2, 0.1],
        "moralidad": [0.4, 0.2]
      },
      {
        "id": 27, // Humano
        "nombre": "Humano",
        "additionalFeatures": [],
        "aumentoAtributos": {
          "fuerza": 1,
          "destreza": 1,
          "constitución": 1,
          "inteligencia": 1,
          "sabiduría": 1,
          "carisma": 1
        },
        "idiomas": [0, "Extra"], // "Comun" y un idioma extra
        "features": [],
        "balance": [0.6, 0.2],
        "moralidad": [0.66, 0.3]
      },
      {
        "id": 28, // Humano (Calishita)
        "nombre": "Humano (Calishita)",
        "additionalFeatures": [],
        "aumentoAtributos": {
          "fuerza": 1,
          "destreza": 1,
          "constitución": 1,
          "inteligencia": 1,
          "sabiduría": 1,
          "carisma": 1
        },
        "idiomas": [0, "Extra"], // "Comun" y un idioma extra
        "features": [],
        "balance": [0.6, 0.2],
        "moralidad": [0.66, 0.3]
      },
      {
        "id": 29, // Humano (Chondathan)
        "nombre": "Humano (Chondathan)",
        "additionalFeatures": [],
        "aumentoAtributos": {
          "fuerza": 1,
          "destreza": 1,
          "constitución": 1,
          "inteligencia": 1,
          "sabiduría": 1,
          "carisma": 1
        },
        "idiomas": [0, "Extra"], // "Comun" y un idioma extra
        "features": [],
        "balance": [0.6, 0.2],
        "moralidad": [0.66, 0.3]
      },
      {
        "id": 30, // Humano (Damarano)
        "nombre": "Humano (Damarano)",
        "additionalFeatures": [],
        "aumentoAtributos": {
          "fuerza": 1,
          "destreza": 1,
          "constitución": 1,
          "inteligencia": 1,
          "sabiduría": 1,
          "carisma": 1
        },
        "idiomas": [0, "Extra"], // "Comun" y un idioma extra
        "features": [],
        "balance": [0.6, 0.2],
        "moralidad": [0.66, 0.3]
      },
      {
        "id": 31, // Humano (Illuskan)
        "nombre": "Humano (Illuskan)",
        "additionalFeatures": [],
        "aumentoAtributos": {
          "fuerza": 1,
          "destreza": 1,
          "constitución": 1,
          "inteligencia": 1,
          "sabiduría": 1,
          "carisma": 1
        },
        "idiomas": [0, "Extra"], // "Comun" y un idioma extra
        "features": [],
        "balance": [0.6, 0.2],
        "moralidad": [0.66, 0.3]
      },
      {
        "id": 32, // Humano (Mulan)
        "nombre": "Humano (Mulan)",
        "additionalFeatures": [],
        "aumentoAtributos": {
          "fuerza": 1,
          "destreza": 1,
          "constitución": 1,
          "inteligencia": 1,
          "sabiduría": 1,
          "carisma": 1
        },
        "idiomas": [0, "Extra"], // "Comun" y un idioma extra
        "features": [],
        "balance": [0.6, 0.2],
        "moralidad": [0.66, 0.3]
      },
      {
        "id": 33, // Humano (Rashemi)
        "nombre": "Humano (Rashemi)",
        "additionalFeatures": [],
        "aumentoAtributos": {
          "fuerza": 1,
          "destreza": 1,
          "constitución": 1,
          "inteligencia": 1,
          "sabiduría": 1,
          "carisma": 1
        },
        "idiomas": [0, "Extra"], // "Comun" y un idioma extra
        "features": [],
        "balance": [0.6, 0.2],
        "moralidad": [0.66, 0.3]
      },
      {
        "id": 34, // Humano (Shou)
        "nombre": "Humano (Shou)",
        "additionalFeatures": [],
        "aumentoAtributos": {
          "fuerza": 1,
          "destreza": 1,
          "constitución": 1,
          "inteligencia": 1,
          "sabiduría": 1,
          "carisma": 1
        },
        "idiomas": [0, "Extra"], // "Comun" y un idioma extra
        "features": [],
        "balance": [0.6, 0.2],
        "moralidad": [0.66, 0.3]
      },
      {
        "id": 35, // Humano (Tethyriano)
        "nombre": "Humano (Tethyriano)",
        "additionalFeatures": [],
        "aumentoAtributos": {
          "fuerza": 1,
          "destreza": 1,
          "constitución": 1,
          "inteligencia": 1,
          "sabiduría": 1,
          "carisma": 1
        },
        "idiomas": [0, "Extra"], // "Comun" y un idioma extra
        "features": [],
        "balance": [0.6, 0.2],
        "moralidad": [0.66, 0.3]
      },
      {
        "id": 36, // Humano (Turami)
        "nombre": "Humano (Turami)",
        "additionalFeatures": [],
        "aumentoAtributos": {
          "fuerza": 1,
          "destreza": 1,
          "constitución": 1,
          "inteligencia": 1,
          "sabiduría": 1,
          "carisma": 1
        },
        "idiomas": [0, "Extra"], // "Comun" y un idioma extra
        "features": [],
        "balance": [0.6, 0.2],
        "moralidad": [0.66, 0.3]
      },
      {
        "id": 20, // Gnomo del Bosque
        "nombre": "Gnomo del Bosque",
        "additionalFeatures": [
          "Hablar con Bestias Pequeñas: A través de sonidos y gestos, puedes comunicar ideas simples con bestias Pequeñas o más pequeñas."
        ],
        "aumentoAtributos": {
          "inteligencia": 2,
          "destreza": 1
        },
        "idiomas": [0, 4], // "Comun" y "Gnómico"
        "features": [
          "Visión Nocturna: 19 m",
          "Ilusionista Natural: Conoces el truco 'ilusión menor'."
        ],
        "balance": [0.6, 0.4],
        "moralidad": [0.5, 0.2]
      },
      {
        "id": 21, // Gnomo de Roca
        "nombre": "Gnomo de Roca",
        "additionalFeatures": [
          "Conocimiento del Artífice: Siempre que realices un chequeo de Inteligencia (Historia) relacionado con objetos mágicos, objetos alquímicos o dispositivos tecnológicos, puedes agregar el doble de tu bonificación de competencia."
        ],
        "aumentoAtributos": {
          "inteligencia": 2,
          "constitución": 1
        },
        "idiomas": [0, 4], // "Comun" y "Gnómico"
        "features": [
          "Visión Nocturna: 19 m",
          "Manitas: Puedes construir dispositivos mecánicos pequeños."
        ],
        "balance": [0.6, 0.4],
        "moralidad": [0.5, 0.2]
      },
      {
        "id": 22, // Semielfo
        "nombre": "Semielfo",
        "additionalFeatures": [],
        "aumentoAtributos": {
          "carisma": 2,
          "otros": "Elige dos habilidades para aumentar en 1."
        },
        "idiomas": [0, 2, "Extra"], // "Comun", "Élfico" y un idioma extra
        "features": [
          "Visión Nocturna: 19 m",
          "Ascendencia Feérica: Tienes ventaja en las tiradas de salvación contra ser encantado."
        ],
        "balance": [0.8, 0.6],
        "moralidad": [0.6, 0.3]
      },
      {
        "id": 23, // Semiorco
        "nombre": "Semiorco",
        "additionalFeatures": [
          "Ataques Salvajes: Cuando logras un golpe crítico con un ataque de arma cuerpo a cuerpo, puedes tirar uno de los dados de daño del arma una vez más y agregarlo al daño adicional del golpe crítico."
        ],
        "aumentoAtributos": {
          "fuerza": 2,
          "constitución": 1
        },
        "idiomas": [0, 7], // "Comun" y "Orco"
        "features": [
          "Visión Nocturna: 19 m",
          "Resistencia Implacable: Cuando te reduzcan a 0 puntos de golpe pero no te maten, puedes caer a 1 punto de golpe en su lugar."
        ],
        "balance": [0.8, 0.6],
        "moralidad": [0.7, 0.4]
      },
      {
        "id": 37, // Tiefling
        "nombre": "Tiefling",
        "additionalFeatures": [
          "Legado Infernal: Conoces el truco taumaturgia."
        ],
        "aumentoAtributos": {
          "inteligencia": 1,
          "carisma": 2
        },
        "idiomas": [0, 12], // "Comun" y "Infernal"
        "features": [
          "Visión Nocturna: 19 m",
          "Resistencia Infernal: Tienes resistencia al daño por fuego."
        ],
        "balance": [0.8, 0.6],
        "moralidad": [0.7, 0.4]
      }
    ]
};

var hechizos=[];


var idiomaSelect;
var transfondoSelect;
var claseSelect;
var alinSelect;
var razaSelector;
var checkboxManager = new CheckboxImage(false);
document.addEventListener("DOMContentLoaded", function () {

    loadHtmlTemplate();

    //EVENTO DE IDIOMAS
    let boton = document.querySelector("#addIdioma"); // Selecciona el botón justo después del div
    if (boton) {
        boton.addEventListener("click", function() {
            agregarIdiomaSeleccionado();
        });
    } else {
        console.error("El botón no se encontró.");
    }
    let botonGS = document.querySelector("#btnGenerarS"); // Selecciona el botón justo después del div
    if (botonGS) {
      botonGS.addEventListener("click", function() {
        roll_version();
      });
    } else {
        console.error("El botón no se encontró.");
    }
    let btnGenerar =  document.querySelector("#btnGenerar"); // Selecciona el botón justo después del div
    if (btnGenerar) {
        btnGenerar.addEventListener("click", function() {
          makePersonaje();

        });
    } else {
        console.error("El botón no se encontró.");
    }

    //CARAGAR JSON GRANDES
    // Usamos fetch para cargar el archivo data.json (que debe estar en la misma carpeta)
    fetch('/build/CustomLibs/data/hechizos.json')
    .then(response => response.json())  // parsea la respuesta como JSON
    .then(data => {
      hechizos = data;                    // guarda el resultado en miData.
    })
    .catch(error => {
      console.error("Hubo un error al cargar el JSON:", error);
    });
});


function handleSelectionChange(selectedValues) {
    console.log("Valores seleccionados:", selectedValues);
}
function loadCheckBoxes(){
    checkboxManager.initialize();
}
function loadSelects(){

   
    claseSelect = new SelectGenerator("clasesContainer", clases, false, "Selecciona una clase", null, handleSelectionChange);
    razaSelector = new SelectGenerator("razasContainer", razas, false, "Elige una raza", 2, handleSelectionChange);
    transfondoSelect = new SelectGenerator("transfondoContainer", transfondos, true, "Elige un transfondo", null, handleSelectionChange);
    alinSelect = new SelectGenerator("alineamientosContainer", alineamientos, false, "Elige un alineamiento", null, handleSelectionChange);
    idiomaSelect = new SelectGenerator("idiomasContainer", idiomas, false, "Agrega idiomas", null, (idioma)=>{
        console.log("Idioma seleccionado:", idioma);
    });
}
function loadHtmlTemplate(){
    fetch("template/hoja5e.htm") // Carga el archivo HTML
        .then(response => response.text()) // Convierte la respuesta a texto
        .then(data => {
            document.getElementById("container").innerHTML = data; // Inserta el contenido en el div
            loadCheckBoxes();
            loadSelects();
        })
        .catch(error => console.error("Error al cargar el HTML:", error));
}
function agregarIdiomaSeleccionado() {
    let textarea = document.querySelector('[data-field-name="ProficienciesLang"]'); // Obtener textarea
    let seleccionados = idiomaSelect.getSelectedValues(); // Obtener idiomas seleccionados

    if (!textarea || seleccionados.length === 0) return; // No hacer nada si no hay selección

    let contenido = textarea.value;
    let regexIdiomas = /^Idiomas: (.+)/m;

    let match = contenido.match(regexIdiomas);

    if (match) {
        let idiomasActuales = match[1].split(", ").map(i => i.trim());

        // Agregar nuevos idiomas sin duplicados
        seleccionados.forEach(idioma => {
            if (!idiomasActuales.includes(idioma)) {
                idiomasActuales.push(idioma);
            }
        });

        contenido = contenido.replace(regexIdiomas, `Idiomas: ${idiomasActuales.join(", ")}`);
    } else {
        contenido = `Idiomas: ${seleccionados.join(", ")}\n${contenido}`;
    }

    textarea.value = contenido;
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
    textarea.dispatchEvent(new Event('change', { bubbles: true }));
}
// Función para elegir el idioma correcto basado en la raza, asegurando que no se repita
function idioma_correcto(race, firstLanguage, extraLanguage, racialLanguage2) {
    while (
        firstLanguage === extraLanguage ||
        firstLanguage === racialLanguage2 ||
        extraLanguage === racialLanguage2
    ) {
        firstLanguage = idioma_aleatorio(); // Asigna un idioma aleatorio si hay repetición
    }

    if ([
        "Alto Elfo", "Elfo del Bosque", "Elfo"
    ].includes(race)) {
        while (firstLanguage === "Élfico") {
            firstLanguage = idioma_aleatorio();
        }
    } else if ([
        "Enano de Colina", "Enano de Montaña", "Enano"
    ].includes(race)) {
        while (firstLanguage === "Enano") {
            firstLanguage = idioma_aleatorio();
        }
    } else if ([
        "Mediano Piesligeros", "Mediano Recio", "Mediano"
    ].includes(race)) {
        while (firstLanguage === "Mediano") {
            firstLanguage = idioma_aleatorio();
        }
    } else if ([
        "Dracónido", "Dracónido Negro", "Dracónido Azul", "Dracónido de Latón",
        "Dracónido de Bronce", "Dracónido de Cobre", "Dracónido Dorado",
        "Dracónido Verde", "Dracónido Rojo", "Dracónido Plateado", "Dracónido Blanco"
    ].includes(race)) {
        while (firstLanguage === "Dracónico") {
            firstLanguage = idioma_aleatorio();
        }
    } else if ([
        "Gnomo del Bosque", "Gnomo de Roca", "Gnomo"
    ].includes(race)) {
        while (firstLanguage === "Gnómico") {
            firstLanguage = idioma_aleatorio();
        }
    } else if (race === "Semielfo") {
        while (firstLanguage === "Élfico") {
            firstLanguage = idioma_aleatorio();
        }
    } else if (race === "Semiorco") {
        while (firstLanguage === "Orco") {
            firstLanguage = idioma_aleatorio();
        }
    } else if (race === "Tiefling") {
        while (firstLanguage === "Infernal") {
            firstLanguage = idioma_aleatorio();
        }
    }

    return firstLanguage;
}
function obtenerRaza(identificador) {
    if (typeof identificador === "number") {
        return razasData.razas.find(raza => raza.id === identificador) || null;
    }
    return razasData.razas.find(raza => raza.nombre === identificador) || null;
}
function random_musical_instrument() {
    // Selecciona un instrumento aleatorio
    const randomIndex = Math.floor(Math.random() * instrumentos.length);
    return instrumentos[randomIndex];
}
function obtenerArmaAlientoPorIdRaza(idRaza, constitutionModifier) {
    const arma = armasAliento.armasAliento.find(a => a.idRaza === idRaza);
    if (arma) {
      const descripcion = arma.descripcion.replace("{DC}", 10 + constitutionModifier);
      return descripcion;
    }
    return null;
}
// Función para obtener un objeto aleatorio
function randomCharlatanItem() {
  const randomIndex = Math.floor(Math.random() * charlatanBackgroundItems.length);
  return charlatanBackgroundItems[randomIndex];
}
// Función para obtener un objeto aleatorio
function randomGamingSet() {
  const randomIndex = Math.floor(Math.random() * gamingSets.length);
  return gamingSets[randomIndex];
}
// Función para obtener un 'trinket' aleatorio
function randomTrinket() {
  const randomIndex = Math.floor(Math.random() * trinkets.length);
  return trinkets[randomIndex];
}
function randomFavorFromAdmirer() {
  const randomIndex = Math.floor(Math.random() * admirerFavors.length);
  const favor = admirerFavors[randomIndex];

  // Si es la opción 3 (índice 2 en el array),
  // reemplazamos la descripción con la que incluye un trinket aleatorio.
  if (favor.id === 3) {
    const trinketDescripcion = randomTrinket(); 
    return `${trinketDescripcion} de un admirador`;
  }
  return favor.descripcion;
}
// Función para obtener una herramienta de artesano al azar
function randomArtisanTool() {
  const randomIndex = Math.floor(Math.random() * artisanTools.length);
  return artisanTools[randomIndex];
}
// Función para obtener un gaming set de soldado al azar
function randomSoldierGamingSet() {
  const randomIndex = Math.floor(Math.random() * soldierGamingSets.length);
  return soldierGamingSets[randomIndex];
}
// Función para obtener un trofe o
function randomTrophy() {
  const randomIndex = Math.floor(Math.random() * soldierTrophies.length);
  const trophy = soldierTrophies[randomIndex];

  if (trophy.id === 4) {
    const trinketDescripcion = randomTrinket();
    return `${trinketDescripcion} de un enemigo caído`;
  }
  
  return trophy.descripcion;
}
function roll_version() {
  // ROLL STATS STAT BLOCK

  // Function to remove the smallest number from an array, this is used in get_random_stat() to drop 4d6 to 3d6
  function remove_smallest_number(arr) {
    arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
    return arr;
  }

  // Get a random stat for an ability score
  function get_random_stat() {
    randomStatArray = [];
    for (var _i = 0; _i < 4; _i++) {
      randomStatArray.push(get_random_number(6));
    }
    remove_smallest_number(randomStatArray);
    return randomStatArray;
  }

  // Function to get the sum of the 4d6 drop lowest that was rolled by get_random_stat()
  function get_sum(stat) {
    for (i = 0, sum = 0; i < stat.length; sum += stat[i++]) {}
    return sum;
  }

  // Function to organize numbers in ascending order
  function order_stats(array) {
    array.sort(function (a, b) {
      return b - a;
    });
    return array;
  }

  // Block of arrays that are assigned a random stat each
  var firstStat = get_random_stat();
  var secondStat = get_random_stat();
  var thirdStat = get_random_stat();
  var fourthStat = get_random_stat();
  var fifthStat = get_random_stat();
  var sixthStat = get_random_stat();

  // Block of variables that had arrays that were summed up to equal a single number
  var temporaryStatHolder1 = get_sum(firstStat);
  var temporaryStatHolder2 = get_sum(secondStat);
  var temporaryStatHolder3 = get_sum(thirdStat);
  var temporaryStatHolder4 = get_sum(fourthStat);
  var temporaryStatHolder5 = get_sum(fifthStat);
  var temporaryStatHolder6 = get_sum(sixthStat);

  // Assign individual stats to an array named stats
  var statspt1 = [
    temporaryStatHolder1,
    temporaryStatHolder2,
    temporaryStatHolder3,
    temporaryStatHolder4,
    temporaryStatHolder5,
    temporaryStatHolder6,
  ];

  // Assign the ordered stats array to a global variable
  stats = order_stats(statspt1);

  // Stat array in right order
  stat1 = stats[0];
  stat2 = stats[1];
  stat3 = stats[2];
  stat4 = stats[3];
  stat5 = stats[4];
  stat6 = stats[5];

  // 2 means roll
  versionForChecking = 2;
  // Ahora asignamos los valores invertidos a sus respectivos elementos
  document.getElementById("form83_1").value = stat1;
  document.getElementById("form84_1").value = stat2;
  document.getElementById("form82_1").value = stat3;
  document.getElementById("form86_1").value = stat4;
  document.getElementById("form81_1").value = stat5;
  document.getElementById("form85_1").value = stat6;
  // Return stats array
  return 1;
}

// Function for trait randomization by length of the array
function random_by_length(array, personalityVariable, id) {
  personalityVariable.push(array[Math.floor(Math.random() * array.length)]);
  document.getElementById(id).value = personalityVariable.join("\r\n");
  return personalityVariable;
}
// Function to get random number depending on int
function get_random_number(int) {
  return Math.ceil(Math.random() * int);
}

function makePersonaje() {
  // Initialize variables
  var language = void 0;
  var firstLanguage = void 0;
  var secondlanguage = void 0;
  var extralanguage = void 0;
  var knowledgeLanguage = void 0;
  var knowledgeLanguage2 = void 0;
  var musicalinstrument = void 0;
  var musicalinstrument2 = void 0;
  var musicalinstrument3 = void 0;
  var artisantool = void 0;
  var randomAritsanTool = void 0;
  var soldierGamingSet = void 0;
  var gladiatorWeapon = void 0;
  var beefiness = void 0;
  var individualDiscrepancy = void 0;
  var randomValue = void 0;
  var lightGo = void 0;
  var finalFirstName = void 0;
  var finalLastName = void 0;
  var race = void 0;
  var raceID = void 0;
  var ancestry = void 0;
  var ancestryHuman = void 0;
  var statTotal = void 0;
  var raceSplitter = void 0;
  var raceSplitter1 = void 0;
  var raceSplitter2 = void 0;
  var raceSplitter3 = void 0;
  var subraceSplitter = void 0;
  var subraceSplitter1 = void 0;
  var subraceSplitter2 = void 0;
  var subraceSplitter3 = void 0;
  var i = void 0;
  var j = void 0;
  var random = void 0;
  var random2 = void 0;
  var className = void 0;
  var classAndLevel = void 0;
  var randomClassVariable = void 0;
  var randomChance = void 0;
  var clericBuild = void 0;
  var name = void 0;
  var newLangs = void 0;
  var newWeaponProfs = void 0;
  var newArmorProfs = void 0;
  var newToolProfs = void 0;
  var firstNumber = void 0;
  var secondNumber = void 0;
  var finalLanguages = void 0;
  var finalweaponProficiencies = void 0;
  var finalarmorProficiencies = void 0;
  var finaltoolProficiencies = void 0;
  var arrayOfAlignment = void 0;
  var lengthOfAlignmentArray = void 0;
  var AlignmentRandomizerNumber = void 0;
  var actualAlignment = void 0;
  var balanceAndMorality = void 0;
  var balance = void 0;
  var morality = void 0;
  var arrayOfBackgrounds = void 0;
  var lengthOfBackgroundArray = void 0;
  var BackgroundRandomizerNumber = void 0;
  var actualBackground = void 0;
  var raceNameLower = void 0;
  var raceNameLowerString = void 0;
  var arrayOfRaces = void 0;
  var lengthOfRaceArray = void 0;
  var RaceRandomizerNumber = void 0;
  var actualRace = void 0;
  var strengthModifier = void 0;
  var dexterityModifier = void 0;
  var constitutionModifier = void 0;
  var intelligenceModifier = void 0;
  var wisdomModifier = void 0;
  var charismaModifier = void 0;
  var firstNameNumber = void 0;
  var lastNameNumber = void 0;
  var number = void 0;
  var raceChecker = 0;
  var arrayOfClass = void 0;
  var lengthOfClassArray = void 0;
  var ClassRandomizerNumber = void 0;
  var actualClass = void 0;
  var alignmentChecker = false;
  var hp = 0;
  var gold = 0;
  var armorClass = 0;
  var arrayOfCheckedClass = [];
  var dwarves = [];
  var dragonborn = [];
  var elves = [];
  var gnomes = [];
  var halflings = [];
  var humans = [];
  var leftoverArray = [];
  var arrayOfCheckedRaces = [];
  var arrayOfCheckedAlignment = [];
  var arrayOfCheckedBackgrounds = [];
  var listOfExoticLanguages = [];
  var listOfStandardLanguages = [];
  var martialWeapons = [];
  var simpleWeapons = [];
  var equipment = [];
  var spellcastingSection = [];
  var alliesAndOrganizations = [];
  var features = [];
  var additionalFeatures = [];
  var personalityTraits = [];
  var alignment = [];
  var ideals = [];
  var bonds = [];
  var flaws = [];
  var proficienciesAndLanguages = [];
  var nivel = 1;
  var profsAndLangs = {
    languages: [],
    armorProficiencies: [],
    weaponProficiencies: [],
    toolProficiencies: [],
  };
  // Array con los IDs de los elementos
  const formIds = ["form83_1", "form84_1", "form82_1", "form86_1", "form81_1", "form85_1"];
  var continuar = true;
  formIds.forEach(id => {
    if(document.getElementById(id).value == ""){
      createCustomAlert("No puedes dejar campos de estadisticas vacios en este modo...", "error");
      continuar=false;
      return true;
    }
  });
  
  if(!continuar){
    return;
  }

  // Stat array in right order
  stat1 =  parseInt(document.getElementById("form83_1").value);
  stat2 =  parseInt(document.getElementById("form84_1").value) ;
  stat3 =  parseInt(document.getElementById("form82_1").value);
  stat4 =  parseInt(document.getElementById("form86_1").value);
  stat5 =  parseInt(document.getElementById("form81_1").value);
  stat6 =  parseInt(document.getElementById("form85_1").value);


  // Function to assign stats based on the class that was rolled.
  function assign_stats(
    strength1,
    dexterity1,
    constitution1,
    intelligence1,
    wisdom1,
    charisma1,
    classtype
  ) {

    strength += strength1;
    dexterity += dexterity1;
    constitution += constitution1;
    intelligence += intelligence1;
    wisdom += wisdom1;
    charisma += charisma1;
    statTotal =
      strength1 +
      dexterity1 +
      intelligence1 +
      constitution1 +
      wisdom1 +
      charisma1;

  }


  // 2 means roll
  versionForChecking = 2;
  charName = document.getElementById("form96_1").value;

  var myTransfondos = transfondoSelect.getSelectedValues();
  if(myTransfondos.length > 0 && myTransfondos[0]!="Aleatorio"){
    const randomIndex = Math.floor(Math.random() * myTransfondos.length);
    newBackground1 =  myTransfondos[randomIndex];  
  }else{
    const randomIndex = Math.floor(Math.random() * (transfondos.length - 1)) + 1;
    newBackground1 =  transfondos[randomIndex];  
  }

  var myClases = claseSelect.getSelectedValues();
  if(myClases.length > 0 && myClases[0]!="Aleatorio"){
    const randomIndex = Math.floor(Math.random() * myClases.length);
    newClassSelected =  myClases[randomIndex];  
  }else{
    const randomIndex = Math.floor(Math.random() * (clases.length - 1)) + 1;
    newClassSelected =  clases[randomIndex];  
  }

  var myRazes = razaSelector.getSelectedValues();
  if(myRazes.length > 0 && myRazes[0]!="Aleatorio"){
    const randomIndex = Math.floor(Math.random() * myRazes.length);
    race =  myRazes[randomIndex];  
    raceID = obtenerIndiceRaza(race);
  }else{
    const randomIndex = Math.floor(Math.random() * (clases.length - 1)) + 1;
    race =  clases[randomIndex];  
    raceID = randomIndex;
  }

  var myAlignament = alinSelect.getSelectedValues();
  if(myAlignament.length > 0 && myAlignament[0]!="Aleatorio"){
    const randomIndex = Math.floor(Math.random() * myAlignament.length);
    balanceAndMorality =  myAlignament[randomIndex]; 
  }else{
    const randomIndex = Math.floor(Math.random() * (alineamientos.length - 1)) + 1;
    balanceAndMorality =  alineamientos[randomIndex];  
  }
  balance = balanceAndMorality.split(" ", 1).toString();
  morality = balanceAndMorality.split(" ", 2);
  if(morality.length>1){
    morality = morality[1].toString();
    defectos_generador(balance, morality);
  }else{
    morality = morality[1].toString();
    defectos_generador(balance, morality);
  }


  
  strength = 0;
  dexterity = 0;
  constitution = 0;
  intelligence = 0;
  wisdom = 0;
  charisma = 0;

  assign_stats(stat1, stat2, stat3, stat4, stat5, stat6, newClassSelected+" "+nivel);
  classAndLevel = newClassSelected+" "+nivel;
   // Variable that holds the value of just the class, not the level
  className = newClassSelected;

  // Variable that holds your character name
  charName = document.getElementById("form96_1").value;
  if(charName == ""){
    charName = nameGenerator.CreateNewName(finalFirstName, finalLastName);
  }
  
//idiomas
  // Variable that holds the name of the player
  name = document.getElementById("form93_1").value;


  // Race and subrace decider
  // 1 al 10 es dragon
  if (raceID >0 && raceID < 11) {
    racialLanguage1 = idiomasEstandar[0];
    racialLanguage2 = idiomasExoticos[2];
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    strength += 2;
    charisma += 1;
    document.getElementById("form87_1").value = "30";
    random_by_length(toughTraits, personalityTraits, "form102_1");
  }else if  (raceID > 11 && raceID < 15) { //enanos
    racialLanguage1 = idiomasEstandar[0];
    racialLanguage2 = idiomasEstandar[1];
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    constitution += 2;
    random_by_length(toughTraits, personalityTraits, "form102_1");
    features.push("Vision Nocturna: 19 m");
    features.push(
      "Resistencia Enana: Tienes ventaja en las tiradas de salvación contra veneno, y tienes resistencia al daño por veneno"
    );
    document.getElementById("form87_1").value = "25";
  } else if (raceID >14 && raceID < 19) {//elfos
    racialLanguage1 = idiomasEstandar[0];
    racialLanguage2 = idiomasEstandar[2];
    dexterity += 2;
    document.getElementById("form87_1").value = "30";
    random_by_length(softTraits, personalityTraits, "form102_1");
    additionalFeatures.push(
      "Ascendencia Feérica: Tienes ventaja en las tiradas de salvación contra ser encantado, y la magia no puede ponerte a dormir."
    );
    additionalFeatures.push(
      "Trance: Los elfos no necesitan dormir. En su lugar, meditan profundamente, permaneciendo semiconscientes, durante 4 horas al día. Mientras meditan, pueden soñar de alguna manera; tales sueños son en realidad ejercicios mentales que se han vuelto reflejos a través de años de práctica. Después de descansar de esta manera, obtienen el mismo beneficio que un humano obtiene de 8 horas de sueño."
    );
  } else  if (raceID >23 && raceID < 27) {//medianos
    racialLanguage1 =  idiomasEstandar[0];
    racialLanguage2 =  idiomasEstandar[6];
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    dexterity += 2;
    document.getElementById("form87_1").value = "25";
    random_by_length(softTraits, personalityTraits, "form102_1");
    additionalFeatures.push(
      "Agilidad del Mediano: Puedes moverte a través del espacio de cualquier criatura que sea de un tamaño mayor que el tuyo."
    );
    additionalFeatures.push(
      "Suerte: Cuando sacas un 1 en una tirada de ataque, chequeo de habilidad o tirada de salvación, puedes volver a tirar el dado y debes usar el nuevo resultado."
    );
    features.push(
      "Valiente: Tienes ventaja en las tiradas de salvación contra ser asustado."
    );
  }else if (raceID >26 && raceID < 37) {//Humano
    racialLanguage1 = idiomasEstandar[0];
    racialLanguage2 = random_language();
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    strength += 1;
    dexterity += 1;
    constitution += 1;
    intelligence += 1;
    wisdom += 1;
    charisma += 1;
    document.getElementById("form87_1").value = "30";
  }else if (raceID > 18 && raceID < 22)  {
    racialLanguage1 = idiomasEstandar[0];
    racialLanguage2 = idiomasEstandar[4];
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    intelligence += 2;
    document.getElementById("form87_1").value = "25";
    random_by_length(softTraits, personalityTraits, "form102_1");
    features.push("Vision Nocturna: 19 m");
    features.push(
      "Astucia Gnómica: Tienes ventaja en todas las tiradas de salvación de Inteligencia, Sabiduría y Carisma contra magia."
    );
  }


  if (raceID === 2) { // Black Dragonborn
    features.push("Ascendencia Dracónica: Black Dragons.");
    features.push("Resistencia al Daño: Acid.");
    generate_balance(0.55, 0.4);
    generate_morality(0.8, 0.55);
  
  } else if (raceID === 3) { // Blue Dragonborn
    features.push("Ascendencia Dracónica: Blue Dragons.");
    features.push("Resistencia al Daño: Lightning.");
    generate_balance(0.55, 0.4);
    generate_morality(0.8, 0.55);
  
  } else if (raceID === 4) { // Brass Dragonborn
    features.push("Ascendencia Dracónica: Brass Dragons.");
    features.push("Resistencia al Daño: Fire.");
    generate_balance(0.55, 0.4);
    generate_morality(0.6, 0.25);
  
  } else if (raceID === 5) { // Bronze Dragonborn
    features.push("Ascendencia Dracónica: Bronze Dragons.");
    features.push("Resistencia al Daño: Lightning.");
    generate_balance(0.55, 0.4);
    generate_morality(0.6, 0.25);
  
  } else if (raceID === 6) { // Copper Dragonborn
    features.push("Ascendencia Dracónica: Copper Dragons.");
    features.push("Resistencia al Daño: Acid.");
    generate_balance(0.55, 0.4);
    generate_morality(0.6, 0.25);
  
  } else if (raceID === 7) { // Gold Dragonborn
    features.push("Ascendencia Dracónica: Gold Dragons.");
    features.push("Resistencia al Daño: Fire.");
    generate_balance(0.55, 0.4);
    generate_morality(0.6, 0.25);
  
  } else if (raceID === 8) { // Green Dragonborn
    features.push("Ascendencia Dracónica: Green Dragons.");
    features.push("Resistencia al Daño: Poison.");
    generate_balance(0.55, 0.4);
    generate_morality(0.75, 0.4);
  
  } else if (raceID === 9) { // Red Dragonborn
    features.push("Ascendencia Dracónica: Red Dragons.");
    features.push("Resistencia al Daño: Fire.");
    generate_balance(0.55, 0.4);
    generate_morality(0.75, 0.4);
  
  } else if (raceID === 10) { // Silver Dragonborn
    features.push("Ascendencia Dracónica: Silver Dragons.");
    features.push("Resistencia al Daño: Cold.");
    generate_balance(0.55, 0.4);
    generate_morality(0.6, 0.25);
  
  } else if (raceID === 11) { // White Dragonborn
    features.push("Ascendencia Dracónica: White Dragons.");
    features.push("Resistencia al Daño: Cold.");
    generate_balance(0.55, 0.4);
    generate_morality(0.75, 0.4);
  
  } else if (raceID === 13) { // Hill Dwarf
    wisdom += 1;
    features.push(
      "Robustez Enana: Tu punto de golpe máximo aumenta en 1, y aumenta en 1 cada vez que subes de nivel."
    );
    generate_balance(0.3, 0.1);
    generate_morality(0.5, 0.2);
  
  } else if (raceID === 14) { // Mountain Dwarf
    strength += 2;
    generate_balance(0.3, 0.1);
    generate_morality(0.5, 0.2);
  
  } else if (raceID === 28) { // Human (Calishite)
    generate_balance(0.6, 0.2);
    generate_morality(0.66, 0.3);
  
  } else if (raceID === 29) { // Human (Chondathan)
    generate_balance(0.6, 0.2);
    generate_morality(0.66, 0.3);
  
  } else if (raceID === 30) { // Human (Damaran)
    generate_balance(0.6, 0.2);
    generate_morality(0.66, 0.3);
  
  } else if (raceID === 31) { // Human (Illuskan)
    generate_balance(0.6, 0.2);
    generate_morality(0.66, 0.3);
  
  } else if (raceID === 32) { // Human (Mulan)
    generate_balance(0.6, 0.2);
    generate_morality(0.66, 0.3);
  
  } else if (raceID === 33) { // Human (Rashemi)
    generate_balance(0.6, 0.2);
    generate_morality(0.66, 0.3);
  
  } else if (raceID === 34) { // Human (Shou)
    generate_balance(0.6, 0.2);
    generate_morality(0.66, 0.3);
  
  } else if (raceID === 35) { // Human (Tethyrian)
    generate_balance(0.6, 0.2);
    generate_morality(0.66, 0.3);
  
  } else if (raceID === 36) { // Human (Turami)
    generate_balance(0.6, 0.2);
    generate_morality(0.66, 0.3);
  
  } else if (raceID === 17) { // High Elf
    features.push("Vision Nocturna: 19 m");
    racialLanguage1 = listOfStandardLanguages[0];
    racialLanguage2 = "Elvish";
    extralanguage = random_language();
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    profsAndLangs.languages.push(extralanguage);
    weapon_adder_2(weapon_adder("espada larga"));
    weapon_adder_2(weapon_adder("espada corta"));
    weapon_adder_2(weapon_adder("arco corto"));
    weapon_adder_2(weapon_adder("arco largo"));
    features.push(
      "Truco de los Altos Elfos: Conoces un truco (prestidigitación) de tu herencia de Alto Elfo, la inteligencia es tu habilidad de lanzamiento de conjuros para ello."
    );
    add_race_cantrip("Prestidigitación");
    intelligence += 1;
    generate_balance(0.9, 0.7);
    generate_morality(0.7, 0.2);
  
  } else if (raceID === 18) { // Wood Elf
    features.push("Vision Nocturna: 19 m");
    racialLanguage1 = listOfStandardLanguages[0];
    racialLanguage2 = "Elvish";
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    weapon_adder_2(weapon_adder("espada larga"));
    weapon_adder_2(weapon_adder("espada corta"));
    weapon_adder_2(weapon_adder("arco corto"));
    weapon_adder_2(weapon_adder("arco largo"));
    wisdom += 1;
    document.getElementById("form87_1").value = "35";
    features.push(
      "Máscara de lo Salvaje: Puedes intentar esconderte incluso cuando solo estás ligeramente oscurecido por follaje, lluvia intensa, nieve cayendo, niebla y otros fenómenos naturales."
    );
    generate_balance(0.9, 0.7);
    generate_morality(0.6, 0.2);
  
  } else if (raceID === 16) { // Dark Elf (Drow)
    racialLanguage1 = listOfStandardLanguages[0];
    racialLanguage2 = "Elvish";
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    weapon_adder_2(weapon_adder("estoque"));
    weapon_adder_2(weapon_adder("espada corta"));
    weapon_adder_2(weapon_adder("ballesta"));
    features.push(
      "Truco de los Drow: Conoces un truco (luces danzantes) de tu herencia de Alto Elfo, el carisma es tu habilidad de lanzamiento de conjuros para ello."
    );
    add_race_cantrip("Dancing Lights");
    charisma += 1;
    features.push("Visión en la Oscuridad Superior: 37 m");
    additionalFeatures.push(
      "Sensibilidad a la luz solar: Tienes desventaja en las tiradas de ataque y en los chequeos de Sabiduría (Percepción) que dependen de la vista cuando tú, el objetivo de tu ataque o lo que estás tratando de percibir está bajo la luz solar directa."
    );
    generate_balance(0.9, 0.7);
    generate_morality(0.8, 0.4);
  
  } else if (raceID === 25) { // Lightfoot Halfling
    charisma += 1;
    features.push(
      "Sigiloso por Naturaleza: Puedes intentar esconderte incluso cuando solo estás oscurecido por una criatura que sea al menos un tamaño más grande que tú."
    );
    generate_balance(0.2, 0.1);
    generate_morality(0.4, 0.2);
  
  } else if (raceID === 26) { // Stout Halfling
    constitution += 1;
    features.push(
      "Resistencia Robusta: Tienes ventaja en las tiradas de salvación contra veneno y tienes resistencia al daño por veneno."
    );
    generate_balance(0.2, 0.1);
    generate_morality(0.4, 0.2);
  
  } else if (raceID === 20) { // Forest Gnome
    constitution += 1;
    additionalFeatures.push(
      "Hablar con Bestias Pequeñas: A través de sonidos y gestos, puedes comunicar ideas simples con bestias Pequeñas o más pequeñas. Los gnomos del bosque aman a los animales y a menudo tienen ardillas, tejones, conejos, topos, pájaros carpinteros y otras criaturas como mascotas queridas."
    );
    features.push(
      "Ilusionista Natural: Conoces el truco 'ilusión menor', la inteligencia es tu habilidad de lanzamiento de conjuros para ello."
    );
    add_race_cantrip("Ilusión Menor");
    generate_balance(0.6, 0.4);
    generate_morality(0.5, 0.2);
  
  } else if (raceID === 21) { // Rock Gnome
    constitution += 1;
    tool_adder_2(tool_adder("herramientas de artesano"));
    features.push(
      "Conocimiento del Artífice: Siempre que realices un chequeo de Inteligencia (Historia) relacionado con objetos mágicos, objetos alquímicos o dispositivos tecnológicos, puedes agregar el doble de tu bonificación de competencia, en lugar de cualquier bonificación de competencia que normalmente aplicarías."
    );
    additionalFeatures.push(
      "Manitas: Usando herramientas de manitas, puedes gastar 1 hora y 10 gp en materiales para construir un dispositivo mecánico pequeño (CA 5, 1 PV). El dispositivo deja de funcionar después de 24 horas (a menos que pases 1 hora reparándolo para mantenerlo funcionando), o cuando usas tu acción para desmantelarlo; en ese momento, puedes recuperar los materiales utilizados para crearlo. Puedes tener hasta tres dispositivos de este tipo activos al mismo tiempo. Cuando creas un dispositivo, elige una de las siguientes opciones:\rJuguete Mecánico: Este juguete es un animal mecánico, monstruo o persona, como una rana, ratón, pájaro, dragón o soldado. Cuando se coloca en el suelo, el juguete se mueve 5 pies por el suelo en cada uno de tus turnos en una dirección aleatoria. Hace ruidos según lo que representa.\rEncendedor: El dispositivo produce una llama en miniatura, que puedes usar para encender una vela, antorcha o fogata. Usar el dispositivo requiere tu acción.\rCaja de Música: Cuando se abre, esta caja de música toca una sola canción a un volumen moderado. La caja deja de jugar cuando termina la canción o cuando se cierra."
    );
    generate_balance(0.6, 0.4);
    generate_morality(0.5, 0.2);
  
  } else if (raceID === 22) { // Half-Elf
    racialLanguage1 = listOfStandardLanguages[0];
    racialLanguage2 = "Elvish";
    extralanguage = random_language();
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    profsAndLangs.languages.push(extralanguage);
    charisma += 2;
    random_by_length(softTraits, personalityTraits, "form102_1");
    firstNumber = Math.floor(Math.random() * 4);
    secondNumber = Math.floor(Math.random() * 4);
    while (firstNumber === secondNumber) {
      firstNumber = Math.floor(Math.random() * 4);
      secondNumber = Math.floor(Math.random() * 4);
    }
    if (firstNumber === 0) {
      strength += 1;
    } else if (firstNumber === 1) {
      dexterity += 1;
    } else if (firstNumber === 2) {
      constitution += 1;
    } else if (firstNumber === 3) {
      intelligence += 1;
    } else if (firstNumber === 4) {
      wisdom += 1;
    }
    if (secondNumber === 0) {
      strength += 1;
    } else if (secondNumber === 1) {
      dexterity += 1;
    } else if (secondNumber === 2) {
      constitution += 1;
    } else if (secondNumber === 3) {
      intelligence += 1;
    } else if (secondNumber === 4) {
      wisdom += 1;
    }
    document.getElementById("form87_1").value = "30";
    features.push("Vision Nocturna: 19 m");
    features.push(
      "Ascendencia Feérica: Tienes ventaja en las tiradas de salvación contra ser encantado, y la magia no puede ponerte a dormir."
    );
    generate_balance(0.8, 0.6);
    generate_morality(0.6, 0.3);
  
  } else if (raceID === 23) { // Half-Orc
    racialLanguage1 = listOfStandardLanguages[0];
    racialLanguage2 = "Orc";
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    strength += 2;
    constitution += 1;
    document.getElementById("form87_1").value = "30";
    random_by_length(toughTraits, personalityTraits, "form102_1");
    features.push("Vision Nocturna: 19 m");
    features.push(
      "Resistencia Implacable: Cuando te reduzcan a 0 puntos de golpe pero no te maten, puedes caer a 1 punto de golpe en su lugar. No puedes usar esta característica nuevamente hasta que termines un descanso largo."
    );
    additionalFeatures.push(
      "Ataques Salvajes: Cuando logras un golpe crítico con un ataque de arma cuerpo a cuerpo, puedes tirar uno de los dados de daño del arma una vez más y agregarlo al daño adicional del golpe crítico."
    );
    generate_balance(0.8, 0.6);
    generate_morality(0.7, 0.4);
  
  } else if (raceID === 37) { // Tiefling
    racialLanguage1 = listOfStandardLanguages[0];
    racialLanguage2 = listOfExoticLanguages[5];
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    features.push(
      "Legado Infernal: Conoces el truco taumaturgia, el carisma es tu habilidad de lanzamiento de conjuros para ello."
    );
    add_race_cantrip("Taumaturgia");
    charisma += 2;
    intelligence += 1;
    document.getElementById("form87_1").value = "30";
    random_by_length(softTraits, personalityTraits, "form102_1");
    features.push("Vision Nocturna: 19 m");
    features.push("Resistencia Infernal: Tienes resistencia al daño por fuego.");
    generate_balance(0.8, 0.6);
    generate_morality(0.7, 0.4);
  }

  // Block that adds proficiency in perception if you are an Elf
  if (raceID == 17 && raceID == 18 && raceID == 16) {
    add_click(7);
    stat_checker(wisdomModifier + 2, "form43_1");
  }
  // Block that adds proficiency in intimidation if you are a Half-Orc
  if (raceID === 23) {
    add_click(24);
    stat_checker(charismaModifier + 2, "form44_1");
  }
  // Creating modifiers for each stat
  strengthModifier = stat_modifier_generator(strength);
  dexterityModifier = stat_modifier_generator(dexterity);
  constitutionModifier = stat_modifier_generator(constitution);
  intelligenceModifier = stat_modifier_generator(intelligence);
  wisdomModifier = stat_modifier_generator(wisdom);
  charismaModifier = stat_modifier_generator(charisma);



  // Filling in all skills before proficiencies are put in
  stat_checker(dexterityModifier, "form38_1"); // acrobatics
  stat_checker(wisdomModifier, "form50_1"); // animal handling
  stat_checker(intelligenceModifier, "form40_1"); // arcana
  stat_checker(strengthModifier, "form49_1"); // athletics
  stat_checker(charismaModifier, "form36_1"); // deception
  stat_checker(intelligenceModifier, "form48_1"); // history
  stat_checker(wisdomModifier, "form35_1"); // insight
  stat_checker(charismaModifier, "form44_1"); // intimidation
  stat_checker(intelligenceModifier, "form31_1"); // investigation
  stat_checker(wisdomModifier, "form53_1"); // medicine
  stat_checker(intelligenceModifier, "form37_1"); // nature
  stat_checker(wisdomModifier, "form43_1"); // perception
  stat_checker(charismaModifier, "form34_1"); // performance
  stat_checker(charismaModifier, "form45_1"); // persuasion
  stat_checker(intelligenceModifier, "form33_1"); // religion
  stat_checker(dexterityModifier, "form46_1"); // sleight of hand
  stat_checker(dexterityModifier, "form32_1"); // stealth
  stat_checker(wisdomModifier, "form47_1"); // survival

  var classID = obtenerIndiceClase(newClassSelected);

// BLOQUE que determina las tiradas de salvación correctas según la clase
// Fuerza
if (
  classID === 1 || // Bárbaro
  classID === 5 || // Guerrero
  classID === 6 || // Monje
  classID === 8    // Guardabosques
) {
  stat_checker(strengthModifier + 2, "form42_1");
  add_click(15);
} else {
  stat_checker(strengthModifier, "form42_1");
}

// Destreza
if (
  classID === 2 || // Bardo
  classID === 9 || // Pícaro
  classID === 8 || // Guardabosques
  classID === 6    // Monje
) {
  stat_checker(dexterityModifier + 2, "form54_1");
  add_click(18);
} else {
  stat_checker(dexterityModifier, "form54_1");
}

// Constitución
if (
  classID === 1 || // Bárbaro
  classID === 5 || // Guerrero
  classID === 10   // Hechicero
) {
  stat_checker(constitutionModifier + 2, "form41_1");
  add_click(22);
} else {
  stat_checker(constitutionModifier, "form41_1");
}

// Inteligencia
if (
  classID === 4 || // Druida
  classID === 9 || // Pícaro
  classID === 12   // Mago
) {
  stat_checker(intelligenceModifier + 2, "form52_1");
  add_click(6);
} else {
  stat_checker(intelligenceModifier, "form52_1");
}

// Sabiduría
if (
  classID === 4 || // Druida
  classID === 3 || // Clérigo
  classID === 12 || // Mago
  classID === 7 || // Paladín
  classID === 11   // Brujo
) {
  stat_checker(wisdomModifier + 2, "form39_1");
  add_click(10);
} else {
  stat_checker(wisdomModifier, "form39_1");
}

// Carisma
if (
  classID === 2 || // Bardo
  classID === 3 || // Clérigo
  classID === 10 || // Hechicero
  classID === 7 || // Paladín
  classID === 11   // Brujo
) {
  stat_checker(charismaModifier + 2, "form51_1");
  add_click(3);
} else {
  stat_checker(charismaModifier, "form51_1");
}
// BLOQUE que determina el dado de golpe según la clase
if (classID === 1) { 
  // Bárbaro -> d12
  stat_checker_2(constitutionModifier, "form89_1", "1d12");
  hp = 12 + constitutionModifier;

} else if (
  classID === 5 || // Guerrero
  classID === 7 || // Paladín
  classID === 8    // Guardabosques
) {
  // Fighter, Paladin, Ranger -> d10
  stat_checker_2(constitutionModifier, "form89_1", "1d10");
  hp = 10 + constitutionModifier;

} else if (
  classID === 2 || // Bardo
  classID === 3 || // Clérigo
  classID === 4 || // Druida
  classID === 6 || // Monje
  classID === 9 || // Pícaro
  classID === 11   // Brujo
) {
  // Bard, Cleric, Druid, Monk, Rogue, Warlock -> d8
  stat_checker_2(constitutionModifier, "form89_1", "1d8");
  hp = 8 + constitutionModifier;

} else if (
  classID === 12 || // Mago
  classID === 10    // Hechicero
) {
  // Wizard, Sorcerer -> d6
  stat_checker_2(constitutionModifier, "form89_1", "1d6");
  hp = 6 + constitutionModifier;
}


if (classID === 1) { // Barbarian
  weapon_adder_2(weapon_adder("armas simples"));
  weapon_adder_2(weapon_adder("armas marciales"));
  armor_adder_2(armor_adder("armadura ligera"));
  armor_adder_2(armor_adder("armadura media"));
  armor_adder_2(armor_adder("Escudo"));
  armorClass += 10 + dexterityModifier + constitutionModifier; // armor class
  equipment.push("4 Jabalinas");
  equipment.push("Paquete de explorador");
  random_by_length(barbarianBonds, bonds, "form101_1");

} else if (classID === 5) { // Fighter
  weapon_adder_2(weapon_adder("armas simples"));
  weapon_adder_2(weapon_adder("armas marciales"));
  armor_adder_2(armor_adder("armadura ligera"));
  armor_adder_2(armor_adder("armadura media"));
  armor_adder_2(armor_adder("armadura pesada"));
  armor_adder_2(armor_adder("Escudo"));
  random_by_length(fighterBonds, bonds, "form101_1");

} else if (classID === 2) { // Bard
  weapon_adder_2(weapon_adder("armas simples"));
  armor_adder_2(armor_adder("armadura ligera"));
  weapon_adder_2(weapon_adder("Ballesta de mano"));
  weapon_adder_2(weapon_adder("Espada larga"));
  weapon_adder_2(weapon_adder("Estoque"));
  weapon_adder_2(weapon_adder("Espada corta"));
  random_by_length(bardBonds, bonds, "form101_1");

} else if (classID === 3) { // Cleric
  weapon_adder_2(weapon_adder("armas simples"));
  armor_adder_2(armor_adder("armadura ligera"));
  armor_adder_2(armor_adder("armadura media"));
  armor_adder_2(armor_adder("Escudo"));
  random_by_length(clericBonds, bonds, "form101_1");

} else if (classID === 10) { // Sorcerer
  weapon_adder_2(weapon_adder("Daga"));
  weapon_adder_2(weapon_adder("dardo"));
  weapon_adder_2(weapon_adder("Bastón"));
  weapon_adder_2(weapon_adder("honda"));
  weapon_adder_2(weapon_adder("ballesta ligera"));
  random_by_length(sorcererBonds, bonds, "form101_1");

} else if (classID === 12) { // Wizard
  weapon_adder_2(weapon_adder("Daga"));
  weapon_adder_2(weapon_adder("dardo"));
  weapon_adder_2(weapon_adder("Bastón"));
  weapon_adder_2(weapon_adder("honda"));
  weapon_adder_2(weapon_adder("ballesta ligera"));
  random_by_length(wizardBonds, bonds, "form101_1");

} else if (classID === 4) { // Druid
  armor_adder_2(armor_adder("armadura ligera"));
  armor_adder_2(armor_adder("armadura media"));
  armor_adder_2(armor_adder("Escudo"));
  features.push("(Toda la armadura y los escudos deben ser no metálicos)");
  weapon_adder_2(weapon_adder("garrote"));
  weapon_adder_2(weapon_adder("Daga"));
  weapon_adder_2(weapon_adder("dardo"));
  weapon_adder_2(weapon_adder("Jabalina"));
  weapon_adder_2(weapon_adder("Maza"));
  weapon_adder_2(weapon_adder("Bastón"));
  weapon_adder_2(weapon_adder("Cimitarra"));
  weapon_adder_2(weapon_adder("hoz"));
  weapon_adder_2(weapon_adder("honda"));
  weapon_adder_2(weapon_adder("Lanza"));
  random_by_length(druidBonds, bonds, "form101_1");

} else if (classID === 9) { // Rogue
  weapon_adder_2(weapon_adder("armas simples"));
  armor_adder_2(armor_adder("armadura ligera"));
  weapon_adder_2(weapon_adder("Ballesta de mano"));
  weapon_adder_2(weapon_adder("Espada larga"));
  weapon_adder_2(weapon_adder("Estoque"));
  weapon_adder_2(weapon_adder("Espada corta"));
  random_by_length(rogueBonds, bonds, "form101_1");

} else if (classID === 11) { // Warlock
  weapon_adder_2(weapon_adder("armas simples"));
  armor_adder_2(armor_adder("armadura ligera"));
  random_by_length(warlockBonds, bonds, "form101_1");

} else if (classID === 8) { // Ranger
  weapon_adder_2(weapon_adder("armas simples"));
  weapon_adder_2(weapon_adder("armas marciales"));
  armor_adder_2(armor_adder("armadura ligera"));
  armor_adder_2(armor_adder("armadura media"));
  armor_adder_2(armor_adder("Escudo"));
  random_by_length(rangerBonds, bonds, "form101_1");

} else if (classID === 7) { // Paladin
  weapon_adder_2(weapon_adder("armas simples"));
  weapon_adder_2(weapon_adder("armas marciales"));
  armor_adder_2(armor_adder("armadura ligera"));
  armor_adder_2(armor_adder("armadura media"));
  armor_adder_2(armor_adder("armadura pesada"));
  armor_adder_2(armor_adder("Escudo"));
  random_by_length(paladinBonds, bonds, "form101_1");

} else if (classID === 6) { // Monk
  armorClass += 10 + dexterityModifier + wisdomModifier; // armor class
  weapon_adder_2(weapon_adder("armas simples"));
  weapon_adder_2(weapon_adder("Espada corta"));
  random_by_length(monkBonds, bonds, "form101_1");
}


// Bloque que determina rasgos físicos según raceID.
// Ajusta los números si tu array "razas" difiere en orden.

// Dracónidos
if (raceID === 2) { // Black Dragonborn
  document.getElementById("form5_2").value = get_random_int(15, 40); // age
  document.getElementById("form1_2").value = get_random_int(72, 80); // height
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12); // height converter
  skin_randomizer("Negro Marfil","Negro Ónix","Negro Carbón","Negro Perlado","Negro");
  hair_randomizer("", "", "", "");
  weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340);
  eye_randomizer("Violeta", "Azul", "Rojo", "Morado");
  breath_decider("Negro", "Ácido");

} else if (raceID === 3) { // Blue Dragonborn
  document.getElementById("form5_2").value = get_random_int(15, 40);
  document.getElementById("form1_2").value = get_random_int(72, 80);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Azul","Azul Celeste","Azul Marino","Azul Pálido","Azul Real");
  hair_randomizer("", "", "", "");
  weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340);
  eye_randomizer("Violeta","Azul","Rojo","Morado");
  breath_decider("Azul", "Relámpago");

} else if (raceID === 4) { // Brass Dragonborn
  document.getElementById("form5_2").value = get_random_int(15, 40);
  document.getElementById("form1_2").value = get_random_int(72, 80);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Latón","Latón Oxidado","Cobre y Latón","Latón Ardiente","Latón");
  hair_randomizer("", "", "", "");
  weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340);
  eye_randomizer("Amarillo","Verde","Rojo","Azul");
  breath_decider("Latón", "Fuego");

} else if (raceID === 5) { // Bronze Dragonborn
  document.getElementById("form5_2").value = get_random_int(15, 40);
  document.getElementById("form1_2").value = get_random_int(72, 80);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Bronce","Oro Viejo","Bronce Oscuro","Bronce Arenoso","Bronce");
  hair_randomizer("", "", "", "");
  weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340);
  eye_randomizer("Amarillo","Verde","Rojo","Azul");
  breath_decider("Bronce", "Relámpago");

} else if (raceID === 6) { // Copper Dragonborn
  document.getElementById("form5_2").value = get_random_int(15, 40);
  document.getElementById("form1_2").value = get_random_int(72, 80);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Cobre","Bronce y Cobre","Cobre Oxidado","Cobre Ardiente","Cobre");
  hair_randomizer("", "", "", "");
  weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340);
  eye_randomizer("Amarillo","Verde","Rojo","Azul");
  breath_decider("Cobre", "Ácido");

} else if (raceID === 7) { // Gold Dragonborn
  document.getElementById("form5_2").value = get_random_int(15, 40);
  document.getElementById("form1_2").value = get_random_int(72, 80);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Amarillo Dorado","Oro","Vara Dorada","Oro en Pepita","Oro");
  hair_randomizer("", "", "", "");
  weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340);
  eye_randomizer("Amarillo","Verde","Rojo","Azul");
  breath_decider("Dorado", "Fuego");

} else if (raceID === 8) { // Green Dragonborn
  document.getElementById("form5_2").value = get_random_int(15, 40);
  document.getElementById("form1_2").value = get_random_int(72, 80);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Verde Mar", "Verde Bosque", "Jade", "Esmeralda", "Verde");
  hair_randomizer("", "", "", "");
  weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340);
  eye_randomizer("Amarillo", "Verde", "Rojo", "Azul");
  breath_decider("Verde", "Veneno");

} else if (raceID === 9) { // Red Dragonborn
  document.getElementById("form5_2").value = get_random_int(15, 40);
  document.getElementById("form1_2").value = get_random_int(72, 80);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Escarlata","Rojo y Naranja","Rojo Sangre","Rojo Cereza","Rojo");
  hair_randomizer("", "", "", "");
  weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340);
  eye_randomizer("Amarillo","Verde","Rojo","Azul");
  breath_decider("Rojo", "Fuego");

} else if (raceID === 10) { // Silver Dragonborn
  document.getElementById("form5_2").value = get_random_int(15, 40);
  document.getElementById("form1_2").value = get_random_int(72, 80);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Plateado Hielo","Plateado Líquido","Plateado Lunar","Plateado","Plateado");
  hair_randomizer("", "", "", "");
  weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340);
  eye_randomizer("Violeta","Azul","Rojo","Morado");
  breath_decider("Plateado", "Frío");

} else if (raceID === 11) { // White Dragonborn
  document.getElementById("form5_2").value = get_random_int(15, 40);
  document.getElementById("form1_2").value = get_random_int(72, 80);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Nieve", "Blanco Fantasma", "Humo Blanco", "Blanco Escarcha", "Blanco");
  hair_randomizer("", "", "", "");
  weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340);
  eye_randomizer("Violeta", "Azul", "Rojo", "Morado");
  breath_decider("Blanco", "Frío");

// Enano de Colina
} else if (raceID === 13) {
  document.getElementById("form5_2").value = get_random_int(50, 250);
  document.getElementById("form1_2").value = get_random_int(52, 60);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Rojo Pálido","Marrón Claro","Marrón Oscuro","Bronceado Oscuro","Bronceado");
  hair_randomizer("Gris","Negro","Marrón","Rojo");
  weight_randomizer(constitution, strength, 110, 130, 150, 170, 190, 215);
  eye_randomizer("Negro","Marrón","Verde","Azul");
  weapon_adder_2(weapon_adder("hacha de batalla"));
  weapon_adder_2(weapon_adder("hacha de batalla"));
  weapon_adder_2(weapon_adder("Hacha de mano"));
  weapon_adder_2(weapon_adder("martillo ligero"));
  weapon_adder_2(weapon_adder("Martillo de guerra"));
  hp++;

// Enano de Montaña
} else if (raceID === 14) {
  document.getElementById("form5_2").value = get_random_int(50, 250);
  document.getElementById("form1_2").value = get_random_int(55, 63);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Rojo Pálido","Marrón Claro","Marrón Oscuro","Bronceado Oscuro","Bronceado");
  hair_randomizer("Gris","Negro","Marrón","Rojo");
  weight_randomizer(constitution, strength, 110, 130, 150, 170, 190, 215);
  eye_randomizer("Negro","Marrón","Verde","Azul");
  weapon_adder_2(weapon_adder("hacha de batalla"));
  weapon_adder_2(weapon_adder("hacha de batalla"));
  weapon_adder_2(weapon_adder("Hacha de mano"));
  weapon_adder_2(weapon_adder("hacha de batalla"));
  weapon_adder_2(weapon_adder("Martillo de guerra"));
  armor_adder_2(armor_adder("armadura ligera"));
  armor_adder_2(armor_adder("armadura media"));

// Human (Calishite)
} else if (raceID === 28) {
  document.getElementById("form5_2").value = get_random_int(19, 55);
  document.getElementById("form1_2").value = get_random_int(64, 73);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Marrón Oscuro","Marrón","Marrón Claro","Bronceado","Cobre Claro");
  hair_randomizer("Marrón Oscuro","Marrón","Marrón Claro","Negro","Castaño");
  weight_randomizer(constitution, strength, 140, 160, 180, 200, 225, 240);
  eye_randomizer("Marrón Claro","Marrón Oscuro","Negro","Marrón");

// Human (Chondathan)
} else if (raceID === 29) {
  document.getElementById("form5_2").value = get_random_int(19, 55);
  document.getElementById("form1_2").value = get_random_int(65, 73);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Bronceado","Bronceado Claro","Marrón Claro","Bronceado","Claro");
  hair_randomizer("Rubio","Marrón","Marrón Claro","Negro","Marrón Oscuro");
  weight_randomizer(constitution, strength, 140, 155, 170, 190, 215, 230);
  eye_randomizer("Verde","Avellana","Marrón Oscuro","Marrón");

// Human (Damaran)
} else if (raceID === 30) {
  document.getElementById("form5_2").value = get_random_int(19, 55);
  document.getElementById("form1_2").value = get_random_int(65, 73);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Bronceado","Claro","Bronceado Claro","Bronceado","Claro");
  hair_randomizer("Marrón","Marrón","Marrón Claro","Negro","Marrón Oscuro");
  weight_randomizer(constitution, strength, 145, 165, 180, 200, 225, 245);
  eye_randomizer("Marrón Oscuro","Avellana","Azul","Marrón Claro");

// Human (Illuskan)
} else if (raceID === 31) {
  document.getElementById("form5_2").value = get_random_int(19, 55);
  document.getElementById("form1_2").value = get_random_int(67, 76);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Pálido", "Claro", "Bronceado Claro", "Claro", "Bronceado Claro");
  hair_randomizer("Negro Azabache", "Rojo", "Marrón Claro", "Rubio", "Negro Azabache");
  weight_randomizer(constitution, strength, 68, 75, 84, 93, 104, 113);
  eye_randomizer("Azul", "Acero", "Gris", "Gris Azulado Oscuro");

// Human (Mulan)
} else if (raceID === 32) {
  document.getElementById("form5_2").value = get_random_int(19, 55);
  document.getElementById("form1_2").value = get_random_int(66, 75);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Ámbar","Bronceado Oscuro","Bronceado Claro","Ámbar","Bronceado");
  hair_randomizer("Calvo","Calvo","Marrón Oscuro","Negro","Calvo");
  weight_randomizer(constitution, strength, 145, 160, 175, 195, 220, 235);
  eye_randomizer("Avellana","Marrón","Marrón Oscuro","Avellana Oscura");

// Human (Rashemi)
} else if (raceID === 33) {
  document.getElementById("form5_2").value = get_random_int(19, 55);
  document.getElementById("form1_2").value = get_random_int(64, 71);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Oscuro","Bronceado Oscuro","Bronceado","Marrón","Ámbar Oscuro");
  hair_randomizer("Negro","Marrón","Marrón Oscuro","Castaño Oscuro","Negro");
  weight_randomizer(constitution, strength, 155, 170, 185, 205, 230, 250);
  eye_randomizer("Marrón Oscuro","Marrón","Negro","Avellana Oscuro");

// Human (Shou)
} else if (raceID === 34) {
  document.getElementById("form5_2").value = get_random_int(19, 55);
  document.getElementById("form1_2").value = get_random_int(64, 73);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Amarillo","Bronce","Cobre","Bronce Amarillento","Cobre Claro");
  hair_randomizer("Negro","Marrón","Negro","Negro","Marrón Oscuro");
  weight_randomizer(constitution, strength, 140, 160, 180, 200, 225, 245);
  eye_randomizer("Castaño Oscuro","Marrón Oscuro","Negro","Marrón");

// Human (Tethyrian)
} else if (raceID === 35) {
  document.getElementById("form5_2").value = get_random_int(19, 55);
  document.getElementById("form1_2").value = get_random_int(64, 74);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Oscuro","Claro","Bronceado Oscuro","Bronceado","Oscuro");
  hair_randomizer("Marrón Claro","Negro","Rubio","Rojo","Marrón Oscuro");
  weight_randomizer(constitution, strength, 140, 160, 180, 200, 225, 245);
  eye_randomizer("Azul","Azul","Verde","Avellana");

// Human (Turami)
} else if (raceID === 36) {
  document.getElementById("form5_2").value = get_random_int(19, 55);
  document.getElementById("form1_2").value = get_random_int(66, 76);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Caoba Oscuro","Caoba","Marrón Oscuro","Marrón","Ámbar Oscuro");
  hair_randomizer("Negro","Negro","Marrón Oscuro","Castaño Oscuro","Negro");
  weight_randomizer(constitution, strength, 155, 170, 185, 205, 230, 250);
  eye_randomizer("Marrón Oscuro","Marrón","Negro","Avellana Oscuro");

// High Elf
} else if (raceID === 17) {
  document.getElementById("form5_2").value = get_random_int(100, 600);
  document.getElementById("form1_2").value = get_random_int(65, 73);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Cobre","Bronce","Blanco Azulado Pálido","Blanco Azulado","Cobre Claro");
  hair_randomizer("Verde","Azul","Turquesa","Plateado Blanco");
  weight_randomizer(constitution, strength, 110, 115, 130, 140, 155, 165);
  eye_randomizer("Oro","Plata","Negro","Verde");

// Wood Elf
} else if (raceID === 18) {
  document.getElementById("form5_2").value = get_random_int(100, 600);
  document.getElementById("form1_2").value = get_random_int(65, 73);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Cobre","Bronce","Cobre Avellana","Bronceado Oscuro","Cobre Claro");
  hair_randomizer("Marrón","Negro","Cobre","Rubio");
  weight_randomizer(constitution, strength, 110, 115, 130, 140, 155, 165);
  eye_randomizer("Verde","Marrón","Avellana","Ámbar");
  weapon_adder_2(weapon_adder("Espada larga"));
  weapon_adder_2(weapon_adder("Espada corta"));
  weapon_adder_2(weapon_adder("Arco corto"));
  weapon_adder_2(weapon_adder("Arco largo"));

// Dark Elf (Drow)
} else if (raceID === 16) {
  document.getElementById("form5_2").value = get_random_int(100, 600);
  document.getElementById("form1_2").value = get_random_int(64, 71);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Negro","Ónix","Gris Oscuro","Negro","Plata Oscura");
  hair_randomizer("Blanco","Rubio Claro","Amarillo Pálido","Blanco y Amarillo");
  weight_randomizer(constitution, strength, 45, 48, 54, 59, 66, 70);
  eye_randomizer("Lila","Plata","Rosa","Azul");
  weapon_adder_2(weapon_adder("Estoque"));
  weapon_adder_2(weapon_adder("Espada corta"));
  weapon_adder_2(weapon_adder("Ballesta de mano"));

// Lightfoot Halfling
} else if (raceID === 25) {
  document.getElementById("form5_2").value = get_random_int(20, 100);
  document.getElementById("form1_2").value = get_random_int(32, 41);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Bronceado","Bronceado Claro","Pálido y Rubicundo","Claro","Justo");
  hair_randomizer("Marrón","Marrón Arenoso","Rubio Oscuro","Castaño");
  weight_randomizer_small(constitution, strength, 35, 39, 42, 44, 47, 50);
  eye_randomizer("Marrón","Avellana","Verde","Marrón Claro");
  size = "small";

// Stout Halfling
} else if (raceID === 26) {
  document.getElementById("form5_2").value = get_random_int(20, 100);
  document.getElementById("form1_2").value = get_random_int(34, 43);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Pálido","Bronceado Claro","Pálido y Rubicundo","Claro","Justo y Rubicundo");
  hair_randomizer("Marrón","Marrón Arenoso","Marrón Oscuro","Castaño");
  size = "pequeño";
  weight_randomizer_small(constitution, strength, 37, 41, 44, 46, 49, 52);
  eye_randomizer("Marrón","Avellana","Verde","Marrón Claro");

// Forest Gnome
} else if (raceID === 20) {
  document.getElementById("form5_2").value = get_random_int(40, 250);
  document.getElementById("form1_2").value = get_random_int(34, 43);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Bronceado","Bronceado Claro","Marrón","Bronceado Oscuro","Marrón Claro");
  hair_randomizer("Rubio","Marrón Arenoso","Rubio Oscuro","Marrón Claro");
  weight_randomizer_small(constitution, strength, 35, 39, 42, 44, 47, 50);
  eye_randomizer("Azul Hielo","Azul Marino","Azul Pálido","Azul Brillante");
  size = "pequeño";

// Rock Gnome
} else if (raceID === 21) {
  document.getElementById("form5_2").value = get_random_int(40, 250);
  document.getElementById("form1_2").value = get_random_int(35, 45);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Bronceado","Bronceado Claro","Marrón","Bronceado Oscuro","Marrón Claro");
  hair_randomizer("Rubio","Marrón Arenoso","Rubio Oscuro","Marrón Claro");
  weight_randomizer_small(constitution, strength, 37, 41, 44, 46, 49, 52);
  eye_randomizer("Azul Hielo","Azul Marino","Azul Pálido","Azul Brillante");
  size = "small";

// Half-Elf
} else if (raceID === 22) {
  document.getElementById("form5_2").value = get_random_int(20, 120);
  document.getElementById("form1_2").value = get_random_int(65, 74);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Cobre","Justo","Pálido","Bronceado Oscuro","Cobre Claro");
  hair_randomizer("Marrón Verdoso","Negro Azulado","Blanco Rojizo","Rubio Plateado");
  weight_randomizer(constitution, strength, 54, 59, 66, 75, 82, 93);
  eye_randomizer("Oro","Rosa","Lila","Verde");

// Half-Orc
} else if (raceID === 23) {
  document.getElementById("form5_2").value = get_random_int(15, 40);
  document.getElementById("form1_2").value = get_random_int(72, 85);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Grisáceo", "Gris Verdoso", "Gris", "Gris Bronceado", "Grisáceo");
  hair_randomizer("Marrón Claro", "Negro", "Castaño", "Marrón Oscuro");
  weight_randomizer(constitution, strength, 77, 86, 95, 104, 113, 120);
  eye_randomizer("Verde", "Azul", "Marrón", "Negro");

// Tiefling
} else if (raceID === 37) {
  document.getElementById("form5_2").value = get_random_int(20, 55);
  document.getElementById("form1_2").value = get_random_int(65, 74);
  document.getElementById("form1_2").value =
    Math.floor(document.getElementById("form1_2").value / 12) + "'" +
    (document.getElementById("form1_2").value % 12);
  skin_randomizer("Rojo Ladrillo","Bronceado Rojizo","Granate","Rojo Sangre","Rojo Cobrizo");
  hair_randomizer("Morado Oscuro","Negro","Rojo Oscuro","Azul Oscuro");
  weight_randomizer(constitution, strength, 140, 160, 180, 200, 225, 245);
  eye_randomizer("Blanco","Negro","Rojo","Plata");

// (Opcional) else final por si no coincide nada
} else {
  // ...
}



if (newBackground1 === transfondos[1]) { // Acólito
  firstLanguage = random_language();
  firstLanguage = right_language();
  profsAndLangs.languages.push(firstLanguage);
  secondlanguage = random_language();
  secondlanguage = right_language();
  profsAndLangs.languages.push(secondlanguage);
  add_click(13);
  stat_checker(wisdomModifier + 2, "form35_1");
  add_click(20);
  stat_checker(intelligenceModifier + 2, "form33_1");
  equipment.push("Un símbolo sagrado");
  equipment.push("Libro de oraciones");
  equipment.push("5 varillas de incienso");
  equipment.push("Vestimentas");
  equipment.push("Conjunto de ropa común");
  equipment.push("Bolsa de cinturón");
  gold += 15;
  features.push(
    "Refugio de los Fieles: Puedes realizar las ceremonias religiosas de tu deidad. Tu grupo de aventureros puede esperar recibir curación y cuidado gratuitos en un establecimiento de tu fe, aunque debes proporcionar cualquier componente material necesario para los conjuros. Aquellos que comparten tu religión te apoyarán con un estilo de vida modesto. Mientras estés cerca de tu establecimiento de origen, puedes pedir ayuda a los sacerdotes, siempre que no sea peligroso."
  );
  document.getElementById("form15_2").value =
    "¿Qué te hizo empezar a aventurar?\r¿Cuáles fueron las circunstancias de tu nacimiento?\r¿Qué te llevó a convertirte en un acólito?\r¿Qué deidad sirves?\r¿Dónde estaba tu templo/monasterio?\r¿Por qué aprendiste esos idiomas?\r¿Por qué eres un " +
    className.toLowerCase() +
    "?\r" +
    "¿Cómo pasaste de ser un acólito a un " +
    className.toLowerCase() +
    "?\r" +
    "¿Qué significa para ti ser un " +
    race +
    "?";
} else if (newBackground1 === transfondos[2]) { // Charlatán
  tool_adder_2(tool_adder("Kit de disfraz"));
  tool_adder_2(tool_adder("kit de falsificación"));
  add_click(17);
  stat_checker(charismaModifier + 2, "form36_1");
  add_click(4);
  stat_checker(dexterityModifier + 2, "form46_1");
  equipment.push("Kit de disfraz");
  equipment.push(random_con());
  equipment.push("Conjunto de ropa fina");
  equipment.push("Bolsa de cinturón");
  gold += 15;
  features.push(
    "Identidad Falsa: Tienes una segunda identidad que incluye documentación, conocidos establecidos y disfraces que te permiten asumir esa persona. Además, puedes falsificar documentos, incluidos papeles oficiales y Carroas personales, siempre que hayas visto un ejemplo del tipo de documento o la escritura que estás tratando de copiar."
  );
  document.getElementById("form15_2").value =
    "¿Qué te hizo empezar a aventurar?\r¿Cuáles fueron las circunstancias de tu nacimiento?\r¿Qué te llevó a convertirte en un charlatán?\r¿Cuál es tu truco preferido?\r¿Cuál fue tu mayor engaño?\r¿Por qué eres un " +
    className.toLowerCase() +
    "?\r" +
    "¿Cómo pasaste de ser un charlatán a un " +
    className.toLowerCase() +
    "?\r" +
    "¿Qué significa para ti ser un " +
    race +
    "?\r" +
    "¿Sigues engañando a la gente? Si no, ¿por qué el cambio de corazón?";
} else if (newBackground1 === transfondos[3]) { // Criminal
  tool_adder_2(tool_adder("herramientas de ladrón"));
  tool_adder_2(tool_adder(random_gaming_set_capitalize().toLowerCase()));
  add_click(17);
  stat_checker(charismaModifier + 2, "form36_1");
  add_click(23);
  stat_checker(dexterityModifier + 2, "form32_1");
  equipment.push("Palanca");
  equipment.push("Conjunto de ropa oscura común con capucha");
  equipment.push("Bolsa de cinturón");
  gold += 15;
  features.push(
    "Contacto Criminal: Tienes un contacto confiable y leal que actúa como tu enlace con una red de otros criminales. Sabes cómo enviar mensajes hacia y desde tu contacto, incluso a grandes distancias; específicamente, conoces a los mensajeros locales, maestros de caravanas corruptos y marineros sospechosos que pueden entregar mensajes por ti."
  );
  document.getElementById("form15_2").value =
    "¿Qué te llevó a comenzar a aventurarte?\r¿Cuáles fueron las circunstancias de tu nacimiento?\r¿Qué te llevó a convertirte en un criminal?\r¿Qué tipo de criminal eras?\r¿Hiciste algo terrible?\r¿Quién es tu contacto criminal?\r¿Por qué eres un " +
    className.toLowerCase() +
    "?\r" +
    "¿Cómo pasaste de ser un criminal a " +
    className.toLowerCase() +
    "?\r" +
    "¿Qué significa para ti ser un " +
    race +
    "?\r" +
    "¿Sigues infringiendo la ley? Si no, ¿por qué cambiaste de opinión?";
} else if (newBackground1 === transfondos[4]) { // Artista (Entertainer)
  musicalinstrument = random_musical_instrument();
  tool_adder_2(tool_adder(musicalinstrument.toLowerCase()));
  tool_adder_2(tool_adder("Kit de disfraz"));
  add_click(19);
  stat_checker(dexterityModifier + 2, "form38_1");
  add_click(16);
  stat_checker(charismaModifier + 2, "form34_1");
  equipment.push(musicalinstrument);
  equipment.push("Disfraz");
  document.getElementById("form14_2").value = random_favor_from_admirer();
  equipment.push("Bolsa de cinturón");
  gold += 15;
  features.push(
    "Por Demanda Popular: Siempre puedes encontrar un lugar para actuar. En ese lugar, recibes alojamiento y comida gratuitos de un estándar modesto o cómodo, siempre que actúes cada noche. Tu actuación también te convierte en una figura local, cuando te reconocen, generalmente te toman cariño."
  );
  document.getElementById("form15_2").value =
    "¿Qué te hizo empezar a aventurar?\r¿Cuáles fueron las circunstancias de tu nacimiento?\r¿Qué te llevó a convertirte en un artista?\r¿Cómo entretenías?\r¿Todavía tienes algún contacto o personas que conoces de tus actuaciones?\r¿Por qué eres un " +
    className.toLowerCase() +
    "?\r" +
    "¿Cómo pasaste de ser un artista a un " +
    className.toLowerCase() +
    "?\r" +
    "¿Qué significa para ti ser un " +
    race +
    "?";
} else if (newBackground1 === transfondos[5]) { // Héroe Popular (Folk Hero)
  artisantool = random_artisan_tool();
  tool_adder_2(tool_adder(artisantool.toLowerCase()));
  tool_adder_2(tool_adder("vehículos terrestres"));
  add_click(8);
  stat_checker(wisdomModifier + 2, "form50_1");
  add_click(12);
  stat_checker(wisdomModifier + 2, "form47_1");
  equipment.push(artisantool);
  equipment.push("Pala");
  equipment.push("Olla de hierro");
  equipment.push("Conjunto de ropa común");
  equipment.push("Bolsa de cinturón");
  gold += 10;
  features.push(
    "Hospitalidad Rústica: Dado que provienes de las filas del pueblo común, encajas entre ellos con facilidad. Puedes encontrar un lugar para esconderte, descansar o recuperarte entre otros plebeyos, a menos que te hayas mostrado como un peligro para ellos. Te protegerán de la ley o de cualquier otra persona que te busque, aunque no arriesgarán sus vidas por ti."
  );
  document.getElementById("form15_2").value =
    "¿Qué te hizo empezar a aventurar?\r¿Cuáles fueron las circunstancias de tu nacimiento?\r¿Qué te hizo famoso entre tu gente?\r¿Por qué los dejaste?\r¿Por qué eres un " +
    className.toLowerCase() +
    "?\r" +
    "¿Cómo pasaste de ser un héroe del pueblo a un " +
    className.toLowerCase() +
    "?\r" +
    "¿Qué significa para ti ser un " +
    race +
    "?";
} else if (newBackground1 === transfondos[6]) { // Gladiador (Gladiator)
  gladiatorWeapon = random_gladiator_weapon();
  random_gladiator_weapon_checker(gladiatorWeapon);
  tool_adder_2(tool_adder("Kit de disfraz"));
  add_click(19);
  stat_checker(dexterityModifier + 2, "form38_1");
  add_click(16);
  stat_checker(charismaModifier + 2, "form34_1");
  equipment.push("Disfraz");
  equipment.push("Bolsa de cinturón");
  gold += 15;
  features.push(
    "Por Demanda Popular: Siempre puedes encontrar un lugar para actuar que esté centrado en el combate. En ese lugar, recibes alojamiento y comida gratuitos de un estándar modesto o cómodo, siempre que actúes cada noche. Tu actuación también te convierte en una figura local, cuando te reconocen, generalmente te toman cariño."
  );
  document.getElementById("form15_2").value =
    "¿Qué te hizo empezar a aventurar?\r¿Cuáles fueron las circunstancias de tu nacimiento?\r¿Por qué te convertiste en gladiador?\r¿Fue esclavitud?\r¿Fue por dinero?\r¿Fue por familia?\r¿Por qué eres un " +
    className.toLowerCase() +
    "?\r" +
    "¿Cómo pasaste de ser un gladiador a un " +
    className.toLowerCase() +
    "?\r" +
    "¿Qué significa para ti ser un " +
    race +
    "?";
} else if (newBackground1 === transfondos[7]) { // Artesano del Gremio (Guild Artisan)
  firstLanguage = random_language();
  firstLanguage = right_language();
  profsAndLangs.languages.push(firstLanguage);
  artisantool = random_artisan_tool();
  tool_adder_2(tool_adder(artisantool.toLowerCase()));
  add_click(13);
  stat_checker(wisdomModifier + 2, "form35_1");
  add_click(1);
  stat_checker(charismaModifier + 2, "form45_1");
  equipment.push(artisantool);
  equipment.push("Carroa de presentación del gremio");
  equipment.push("Conjunto de ropa de viajero");
  equipment.push("Bolsa de cinturón");
  gold += 15;
  features.push(
    "Membresía del Gremio: Tus compañeros de gremio te proporcionarán alojamiento y comida si es necesario, y pagarán tu funeral. Si eres acusado de un crimen, tu gremio te apoyará si eres inocente o tienes una causa justa. 5Gp/mes por membresía, beneficios solo si pagas a tiempo."
  );
  document.getElementById("form15_2").value =
    "¿Qué te hizo empezar a aventurar?\r¿Cuáles fueron las circunstancias de tu nacimiento?\r¿Por qué te convertiste en artesano?\r¿Por qué elegiste tu oficio?\r¿Cuál es el nombre de tu gremio?\r¿Fue por dinero?\r¿Fue por pasión?\r¿Fue el negocio familiar?\r¿Por qué eres un " +
    className.toLowerCase() +
    "?\r" +
    "¿Cómo pasaste de ser un artesano del gremio a un " +
    className.toLowerCase() +
    "?\r" +
    "¿Qué significa para ti ser un " +
    race +
    "?";
} else if (newBackground1 === transfondos[8]) { // Mercader del Gremio (Guild Merchant)
  firstLanguage = random_language();
  firstLanguage = right_language();
  profsAndLangs.languages.push(firstLanguage);
  secondlanguage = random_language();
  secondlanguage = right_language();
  profsAndLangs.languages.push(secondlanguage);
  add_click(13);
  stat_checker(wisdomModifier + 2, "form35_1");
  add_click(1);
  stat_checker(charismaModifier + 2, "form45_1");
  equipment.push("Carroa de presentación del gremio");
  equipment.push("Conjunto de ropa de viajero");
  equipment.push("Bolsa de cinturón");
  equipment.push("Mula");
  equipment.push("Carro");
  gold += 15;
  features.push(
    "Membresía del Gremio: Tus compañeros de gremio te proporcionarán alojamiento y comida si es necesario, y pagarán tu funeral. Si eres acusado de un crimen, tu gremio te apoyará si eres inocente o tienes una causa justa. 5Gp/mes por membresía, beneficios solo si pagas a tiempo."
  );
  document.getElementById("form15_2").value =
    "¿Qué te hizo empezar a aventurar?\r¿Cuáles fueron las circunstancias de tu nacimiento?\r¿Por qué te convertiste en comerciante?\r¿Por qué elegiste tu oficio?\r¿Cuál es el nombre de tu gremio?\r¿Fue por dinero?\r¿Fue por pasión por el comercio o conocer gente nueva?\r¿Fue el negocio familiar?\r¿Por qué eres un " +
    className.toLowerCase() +
    "?\r" +
    "¿Cómo pasaste de ser un comerciante del gremio a un " +
    className.toLowerCase() +
    "?\r" +
    "¿Qué significa para ti ser un " +
    race +
    "?";
} else if (newBackground1 === transfondos[9]) { // Ermitaño (Hermit)
  firstLanguage = random_language();
  firstLanguage = right_language();
  profsAndLangs.languages.push(firstLanguage);
  tool_adder_2(tool_adder("kit de herboristería"));
  add_click(5);
  stat_checker(wisdomModifier + 2, "form53_1");
  add_click(20);
  stat_checker(intelligenceModifier + 2, "form33_1");
  equipment.push("Estuche de pergaminos lleno de notas de tus estudios");
  equipment.push("Manta de invierno");
  equipment.push("Conjunto de ropa común");
  equipment.push("kit de herboristería");
  gold += 5;
  features.push(
    "Descubrimiento: La tranquila reclusión de tu prolongado ermitaño te dio acceso a un descubrimiento único y poderoso."
  );
  document.getElementById("form15_2").value =
    "¿Qué te hizo empezar a aventurar?\r¿Cuáles fueron las circunstancias de tu nacimiento?\r¿Dónde estuviste recluido?\r¿Viajaste mucho?\r¿Cuál es tu gran descubrimiento? Habla de ello con tu DM también.\r¿Por qué eres un " +
    className.toLowerCase() +
    "?\r" +
    "¿Cómo pasaste de ser un ermitaño a un " +
    className.toLowerCase() +
    "?\r" +
    "¿Qué significa para ti ser un " +
    race +
    "?";
} else if (newBackground1 === transfondos[10]) { // Caballero (Knight)
  firstLanguage = random_language();
  firstLanguage = right_language();
  profsAndLangs.languages.push(firstLanguage);
  tool_adder_2(tool_adder(random_gaming_set_capitalize().toLowerCase()));
  add_click(9);
  stat_checker(intelligenceModifier + 2, "form48_1");
  add_click(1);
  stat_checker(charismaModifier + 2, "form45_1");
  bonds.splice(0, 1);
  bonds.push("Tengo un emblema de caballería y castidad de una dama noble.");
  equipment.push("Emblema de caballería");
  equipment.push("Anillo de sello");
  equipment.push("Pergamino de linaje");
  equipment.push("Conjunto de ropa fina");
  equipment.push("Cartera");
  gold += 25;
  features.push(
    "Criados: Tienes tres criados leales a tu familia. Estos criados son un escudero de nacimiento noble, un mozo para tu caballo y un sirviente para tareas mundanas. Tus criados son personas que pueden realizar tareas para ti, pero no lucharán por ti, no te seguirán a áreas peligrosas y se irán si son frecuentemente puestos en peligro o maltratados."
  );
  document.getElementById("form15_2").value =
    "¿Qué te hizo empezar a aventurar?\r¿Cuáles fueron las circunstancias de tu nacimiento?\r¿Quién es tu familia?\r¿Hay alguna persona famosa en ella, o tu familia es famosa por algo en particular?\r¿Quién es la mujer de la que recibiste el Emblema de caballería?.\r¿Por qué eres un " +
    className.toLowerCase() +
    "?\r" +
    "¿Cómo pasaste de ser un caballero a un " +
    className.toLowerCase() +
    "?\r" +
    "¿Qué significa para ti ser un " +
    race +
    "?";
} else if (newBackground1 === transfondos[11]) { // Noble
  firstLanguage = random_language();
  firstLanguage = right_language();
  profsAndLangs.languages.push(firstLanguage);
  tool_adder_2(tool_adder(random_gaming_set_capitalize().toLowerCase()));
  add_click(9);
  stat_checker(intelligenceModifier + 2, "form48_1");
  add_click(1);
  stat_checker(charismaModifier + 2, "form45_1");
  equipment.push("Anillo de sello");
  equipment.push("Pergamino de linaje");
  equipment.push("Conjunto de ropa fina");
  equipment.push("Cartera");
  gold += 25;
  features.push(
    "Posición de Privilegio: Eres bienvenido en la alta sociedad, y la gente asume que tienes derecho a estar donde estás. La gente común y los comerciantes hacen todo lo posible para acomodarte y evitar tu desagrado, y otras personas de alta cuna te tratan como un miembro de la misma esfera social. Puedes asegurar una audiencia con un noble local si lo necesitas."
  );
  document.getElementById("form15_2").value =
    "¿Qué te hizo empezar a aventurar?\r¿Cuáles fueron las circunstancias de tu nacimiento?\r¿Quién es tu familia?\r¿Hay alguna persona famosa en ella, o tu familia es famosa por algo en particular?\r¿Por qué eres un " +
    className.toLowerCase() +
    "?\r" +
    "¿Cómo pasaste de ser un noble a un " +
    className.toLowerCase() +
    "?\r" +
    "¿Qué significa para ti ser un " +
    race +
    "?";
} else if (newBackground1 === transfondos[12]) { // Forastero (Outlander)
  musicalinstrument = random_musical_instrument();
  tool_adder_2(tool_adder(musicalinstrument.toLowerCase()));
  add_click(2);
  stat_checker(strengthModifier + 2, "form49_1");
  add_click(12);
  stat_checker(wisdomModifier + 2, "form47_1");
  equipment.push("Staff");
  equipment.push("Trampa de Caza");
  equipment.push(random_animal_trophy());
  equipment.push("Conjunto de ropa de viajero");
  equipment.push("Bolsa de cinturón");
  gold += 10;
  features.push(
    "Errante: Tienes una excelente memoria para mapas y geografía, y siempre puedes recordar la disposición general del terreno, asentamientos y otras características a tu alrededor. Además, puedes encontrar comida y agua fresca para ti y hasta cinco personas más cada día, siempre que la tierra ofrezca bayas, caza menor, agua, etc."
  );
  document.getElementById("form15_2").value =
    "¿Qué te hizo empezar a aventurar?\r¿Cuáles fueron las circunstancias de tu nacimiento?\r¿Dónde estabas?\r¿Viajaste mucho?\r¿Cuál es la historia detrás de tu trofeo animal?\r¿Por qué eres un " +
    className.toLowerCase() +
    "?\r" +
    "¿Cómo pasaste de ser un forastero a un " +
    className.toLowerCase() +
    "?\r" +
    "¿Qué significa para ti ser un " +
    race +
    "?";
} else if (newBackground1 === transfondos[13]) { // Pirata
  tool_adder_2(tool_adder("herramientas de navegación"));
  tool_adder_2(tool_adder("vehículos acuáticos"));
  add_click(2);
  stat_checker(strengthModifier + 2, "form49_1");
  add_click(7);
  stat_checker(wisdomModifier + 2, "form43_1");
  equipment.push("garrote");
  equipment.push("15 metros de cuerda de seda");
  document.getElementById("form14_2").value = random_trinket();
  equipment.push("Conjunto de ropa común");
  equipment.push("Bolsa de cinturón");
  gold += 10;
  features.push(
    "Mala Reputación: No importa a dónde vayas, la gente te teme debido a tu reputación. Cuando estás en un asentamiento civilizado, puedes salirte con la tuya con delitos menores, como negarte a pagar por la comida en una taberna o derribar puertas en una tienda local, ya que la mayoría de la gente no informará de tu actividad a las autoridades."
  );
  document.getElementById("form15_2").value =
    "¿Qué te hizo empezar a aventurar?\r¿Cuáles fueron las circunstancias de tu nacimiento?\r¿Cómo te convertiste en pirata?\r¿Tenías un puerto marítimo que fuera tu hogar?\r¿Sigues en contacto con tus compañeros de barco?\r¿Por qué eres un " +
    className.toLowerCase() +
    "?\r" +
    "¿Cómo pasaste de ser un pirata a un " +
    className.toLowerCase() +
    "?\r" +
    "¿Qué significa para ti ser un " +
    race +
    "?\r" +
    "¿Por qué ya no eres un pirata?";
} else if (newBackground1 === transfondos[14]) { // Sabio (Sage)
  firstLanguage = random_language();
  firstLanguage = right_language();
  profsAndLangs.languages.push(firstLanguage);
  secondlanguage = random_language();
  secondlanguage = right_language();
  profsAndLangs.languages.push(secondlanguage);
  add_click(21);
  stat_checker(intelligenceModifier + 2, "form40_1");
  add_click(9);
  stat_checker(intelligenceModifier + 2, "form48_1");
  equipment.push("Botella de tinta negra");
  equipment.push("Pluma");
  equipment.push("Small knife");
  equipment.push("Carta de un colega fallecido");
  equipment.push("Conjunto de ropa común");
  equipment.push("Bolsa de cinturón");
  gold += 10;
  features.push(
    "Investigador: Cuando intentas aprender o recordar una pieza de conocimiento, si no conoces esa información, a menudo sabes dónde y de quién puedes obtenerla. Por lo general, esta información proviene de una biblioteca, scriptorium, universidad o de un sabio u otra persona o criatura erudita."
  );
  document.getElementById("form15_2").value =
    "¿Qué te hizo empezar a aventurar?\r¿Cuáles fueron las circunstancias de tu nacimiento?\r¿Qué estabas estudiando todo ese tiempo?\r¿Qué dice la carta de tu colega fallecido?\r¿Por qué aprendiste esos idiomas?\r¿Por qué eres un " +
    className.toLowerCase() +
    "?\r" +
    "¿Cómo pasaste de ser un sabio a un " +
    className.toLowerCase() +
    "?\r" +
    "¿Qué significa para ti ser un " +
    race +
    "?";
} else if (newBackground1 === transfondos[15]) { // Marinero (Sailor)
  tool_adder_2(tool_adder("herramientas de navegación"));
  tool_adder_2(tool_adder("vehículos acuáticos"));
  add_click(2);
  stat_checker(strengthModifier + 2, "form49_1");
  add_click(7);
  stat_checker(wisdomModifier + 2, "form43_1");
  equipment.push("garrote");
  equipment.push("15 metros de cuerda de seda");
  document.getElementById("form14_2").value = random_trinket();
  equipment.push("Conjunto de ropa común");
  equipment.push("Bolsa de cinturón");
  gold += 10;
  features.push(
    "Pasaje en Barco: Puedes asegurar un pasaje gratuito en un barco de vela para ti y tus compañeros de aventura. Podrías navegar en el barco en el que serviste, o en otro barco con el que tengas buenas relaciones. A cambio de tu pasaje gratuito, tú y tus compañeros deben ayudar a la tripulación durante el viaje."
  );
  document.getElementById("form15_2").value =
    "¿Qué te hizo empezar a aventurar?\r¿Cuáles fueron las circunstancias de tu nacimiento?\r¿Cómo te convertiste en marinero?\r¿Tenías un puerto marítimo que fuera tu hogar?\r¿Sigues en contacto con tus compañeros de barco?\r¿Por qué eres un " +
    className.toLowerCase() +
    "?\r" +
    "¿Cómo pasaste de ser un marinero a un " +
    className.toLowerCase() +
    "?\r" +
    "¿Qué significa para ti ser un " +
    race +
    "?\r";
} else if (newBackground1 === transfondos[16]) { // Soldado (Soldier)
  soldierGamingSet = random_gaming_set_soldier();
  tool_adder_2(tool_adder(soldierGamingSet.toLowerCase()));
  tool_adder_2(tool_adder("vehículos terrestres"));
  add_click(2);
  stat_checker(strengthModifier + 2, "form49_1");
  add_click(24);
  stat_checker(charismaModifier + 2, "form44_1");
  equipment.push("Insignia de rango");
  document.getElementById("form14_2").value = random_trophy();
  if (soldierGamingSet === "Dice") {
    equipment.push("Juego de " + soldierGamingSet + " de hueso");
  } else {
    equipment.push(soldierGamingSet);
  }
  equipment.push("Conjunto de ropa común");
  equipment.push("Bolsa de cinturón");
  gold += 10;
  features.push(
    "Rango Militar: Los soldados leales a tu antigua organización militar aún reconocen tu autoridad e influencia, y te respetan si son de un rango inferior. Puedes invocar tu rango para ejercer influencia sobre otros soldados y requisar equipo simple o caballos para uso temporal. Puedes acceder a campamentos y fortalezas militares amistosas donde se reconozca tu rango."
  );
  document.getElementById("form15_2").value =
    "¿Qué te hizo empezar a aventurar?\r¿Cuáles fueron las circunstancias de tu nacimiento?\r¿Cómo te convertiste en soldado?\r¿Qué rango tenías?\r¿Sigues en contacto con alguno de tus hermanos y hermanas de armas?\r¿Por qué eres un " +
    className.toLowerCase() +
    "?\r" +
    "¿Cómo pasaste de ser un soldado a un " +
    className.toLowerCase() +
    "?\r" +
    "¿Qué significa para ti ser un " +
    race +
    "?\r";
} else if (newBackground1 === transfondos[17]) { // Espía (Spy)
  tool_adder_2(tool_adder("herramientas de ladrón"));
  tool_adder_2(tool_adder(random_gaming_set_capitalize().toLowerCase()));
  add_click(17);
  stat_checker(charismaModifier + 2, "form36_1");
  add_click(23);
  stat_checker(dexterityModifier + 2, "form32_1");
  equipment.push("Palanca");
  equipment.push("Conjunto de ropa oscura común con capucha");
  equipment.push("Bolsa de cinturón");
  gold += 15;
  features.push(
    "Contacto Espía: Tienes un contacto confiable y de confianza que actúa como tu enlace con una red de otros espías o criminales. Sabes cómo enviar y recibir mensajes de tu contacto, incluso a grandes distancias; específicamente, conoces a los mensajeros locales, maestros de caravanas corruptos y marineros sórdidos que pueden entregar mensajes por ti."
  );
  document.getElementById("form15_2").value =
    "¿Qué te hizo empezar a aventurar?\r¿Cuáles fueron las circunstancias de tu nacimiento?\r¿Qué te llevó a convertirte en espía?\r¿Hiciste algo terrible?\r¿Quién es tu contacto espía?\r¿Por qué eres un " +
    className.toLowerCase() +
    "?\r" +
    "¿Cómo pasaste de ser un espía a un " +
    className.toLowerCase() +
    "?\r" +
    "¿Qué significa para ti ser un " +
    race +
    "?\r" +
    "¿Para quién trabajabas cuando eras espía?";
} else if (newBackground1 === transfondos[18]) { // Huérfano (Urchin)
  tool_adder_2(tool_adder("Kit de disfraz"));
  tool_adder_2(tool_adder("herramientas de ladrón"));
  add_click(4);
  stat_checker(dexterityModifier + 2, "form46_1");
  add_click(23);
  stat_checker(dexterityModifier + 2, "form32_1");
  equipment.push("Cuchillo pequeño");
  equipment.push("Mapa de la ciudad natal");
  equipment.push("ratón mascota");
  document.getElementById("form14_2").value =
    random_trinket() + " de los padres";
  equipment.push("Conjunto de ropa común");
  equipment.push("Bolsa de cinturón");
  gold += 10;
  features.push(
    "Secretos de la Ciudad: Conoces los patrones y el flujo secretos de las ciudades y puedes encontrar pasajes a través del entramado urbano que otros pasarían por alto. Cuando no estás en combate, tú (y los compañeros que lideres) pueden viajar entre dos ubicaciones de la ciudad el doble de rápido de lo que normalmente permitiría tu velocidad."
  );
  document.getElementById("form15_2").value =
    "¿Qué te hizo empezar a aventurar?\r¿Cuáles fueron las circunstancias de tu nacimiento?\r¿Qué te llevó a convertirte en un huérfano?\r¿Alguien te hizo daño?\r¿Eres un huérfano?\r¿Fracasaron los trabajos de tu familia?\r¿Por qué eres un " +
    className.toLowerCase() +
    "?\r" +
    "¿Cómo pasaste de ser un huérfano a un " +
    className.toLowerCase() +
    "?\r" +
    "¿Qué significa para ti ser un " +
    race +
    "?\r";
}
  // Pushes string to alliesAndOrganizations as a writing prompt
  alliesAndOrganizations.push(
    "¿Amigos? ¿Familia? ¿Gremio? ¿Tripulación? ¿Hermanos de armas? ¿Sacerdotes? ¿Huérfanos? ¿Monstruos buenos? ¿Amantes? ¿Deidades? ¿Rivales? ¿Enemigos? ¿Relaciones complicadas? ¿Miembros del grupo?"
  );
  //Block of arrays that makes new arrays with commas between them
  newLangs = profsAndLangs.languages.join(", ");
  newWeaponProfs = profsAndLangs.weaponProficiencies.join(", ");
  newArmorProfs = profsAndLangs.armorProficiencies.join(", ");
  newToolProfs = profsAndLangs.toolProficiencies.join(", ");



  //Block of arrays that makes new arrays with the sections at the start
  finalLanguages = "Idiomas: " + determine_if_empty(newLangs);
  finalweaponProficiencies =
    "Competencias en armas: " + determine_if_empty(newWeaponProfs);
  finalarmorProficiencies =
    "Competencias en armaduras: " + determine_if_empty(newArmorProfs);
  finaltoolProficiencies =
    "Competencias en herramientas: " + determine_if_empty(newToolProfs);

  // Pushes arrays to proficienciesAndLanguages
  proficienciesAndLanguages.push(finalLanguages);
  proficienciesAndLanguages.push(finalweaponProficiencies);
  proficienciesAndLanguages.push(finalarmorProficiencies);
  proficienciesAndLanguages.push(finaltoolProficiencies);


// Determina los hechizos basados en la clase y estadísticas

if (classID == 2) { // Bardo (índice 2 en el array 'clases')
  document.getElementById("form214_3").value = className; // clase que lanza hechizos
  document.getElementById("form196_3").value = "CHA"; // habilidad de lanzamiento de hechizos
  document.getElementById("form194_3").value = 10 + charismaModifier; // CD de salvación de hechizo
  stat_checker(charismaModifier + 2, "form195_3"); // bono de ataque de hechizo
  document.getElementById("form97_3").value = 2;
  document.getElementById("form193_3").value = "Encantar Persona";
  document.getElementById("form159_3").value = "Fuego Feérico";
  if (strength > 12 && constitution > 12) {
    document.getElementById("form137_3").value = "Ola de Trueno";
  } else {
    document.getElementById("form137_3").value = "Risa Horrenda de Tasha";
  }
  if (strength > 12 && constitution > 12) {
    document.getElementById("form136_3").value = "Curar Heridas";
  } else {
    document.getElementById("form136_3").value = "Palabra Curativa";
  }
  if (document.getElementById("form198_3").value === "Ilusión Menor") {
    document.getElementById("form213_3").value = "Mofa Viciosa";
    document.getElementById("form204_3").value = "Prestidigitación";
  } else if (
    document.getElementById("form198_3").value === "Prestidigitación"
  ) {
    document.getElementById("form213_3").value = "Mofa Viciosa";
    document.getElementById("form204_3").value = "Prestidigitación";
  } else if (document.getElementById("form198_3").value === "Taumaturgia") {
    document.getElementById("form213_3").value = "Ilusión Menor";
    document.getElementById("form204_3").value = "Mofa Viciosa";
  } else {
    document.getElementById("form213_3").value = "Mofa Viciosa";
    document.getElementById("form204_3").value = "Prestidigitación";
  }
  document.getElementById("form62_1").value = "d6";
} else if (classID == 10) { // Hechicero (Sorcerer) - índice 10
  document.getElementById("form214_3").value = className; // clase que lanza hechizos
  document.getElementById("form196_3").value = "CHA"; // habilidad de lanzamiento de hechizos
  document.getElementById("form194_3").value = 10 + charismaModifier; // CD de salvación de hechizo
  stat_checker(charismaModifier + 2, "form195_3"); // bono de ataque de hechizo
  document.getElementById("form97_3").value = 2;
  document.getElementById("form213_3").value = "Prestidigitación";
  document.getElementById("form204_3").value = "Amistades";
  document.getElementById("form203_3").value = "Mensaje";
  document.getElementById("form202_3").value = "Rayo de Fuego";
  document.getElementById("form193_3").value = "Encantar Persona";
  document.getElementById("form159_3").value = "Manos Ardientes";
} else if (classID == 11) { // Brujo (Warlock) - índice 11
  document.getElementById("form214_3").value = className; // clase que lanza hechizos
  document.getElementById("form196_3").value = "CHA"; // habilidad de lanzamiento de hechizos
  document.getElementById("form194_3").value = 10 + charismaModifier; // CD de salvación de hechizo
  stat_checker(charismaModifier + 2, "form195_3"); // bono de ataque de hechizo
  document.getElementById("form213_3").value = "Rayo Sobrenatural";
  document.getElementById("form204_3").value = "Rociada Venenosa";
  document.getElementById("form137_3").value = "Maldición";
  document.getElementById("form136_3").value = "Rayo de Bruja";
  document.getElementById("form97_3").value = 1;
} else if (classID == 12) { // Mago (Wizard) - índice 12
  document.getElementById("form214_3").value = className; // clase que lanza hechizos
  document.getElementById("form196_3").value = "INT"; // habilidad de lanzamiento de hechizos
  document.getElementById("form194_3").value = 10 + intelligenceModifier; // CD de salvación de hechizo
  stat_checker(intelligenceModifier + 2, "form195_3"); // bono de ataque de hechizo
  document.getElementById("form213_3").value = "Prestidigitación";
  if (document.getElementById("form198_3").value === "Ilusión Menor") {
    document.getElementById("form204_3").value = "Mano de Mago";
  } else {
    document.getElementById("form204_3").value = "Ilusión Menor";
  }
  document.getElementById("form203_3").value = "Rayo de Fuego";
  if (intelligenceModifier === 0) {
    document.getElementById("form193_3").value = "Misil Mágico";
  } else if (intelligenceModifier === 1) {
    document.getElementById("form193_3").value = "Misil Mágico";
    document.getElementById("form159_3").value = "Armadura de Mago";
  } else if (intelligenceModifier === 2) {
    document.getElementById("form193_3").value = "Misil Mágico";
    document.getElementById("form159_3").value = "Armadura de Mago";
    document.getElementById("form137_3").value = "Sueño";
  } else if (intelligenceModifier === 3) {
    document.getElementById("form193_3").value = "Misil Mágico";
    document.getElementById("form159_3").value = "Armadura de Mago";
    document.getElementById("form137_3").value = "Sueño";
    document.getElementById("form136_3").value = "Manos Ardientes";
  } else if (intelligenceModifier === 4) {
    document.getElementById("form193_3").value = "Misil Mágico";
    document.getElementById("form159_3").value = "Armadura de Mago";
    document.getElementById("form137_3").value = "Sueño";
    document.getElementById("form136_3").value = "Manos Ardientes";
    document.getElementById("form135_3").value = "Risa Horrenda de Tasha";
  } else if (intelligenceModifier === 5) {
    document.getElementById("form193_3").value = "Misil Mágico";
    document.getElementById("form159_3").value = "Armadura de Mago";
    document.getElementById("form137_3").value = "Sueño";
    document.getElementById("form136_3").value = "Manos Ardientes";
    document.getElementById("form135_3").value = "Risa Horrenda de Tasha";
    document.getElementById("form133_3").value = "Sirviente Invisible";
  }
  document.getElementById("form97_3").value = 2;
} else if (classID == 3) { // Clérigo (Cleric) - índice 3
  document.getElementById("form214_3").value = className; // clase que lanza hechizos
  document.getElementById("form196_3").value = "WIS"; // habilidad de lanzamiento de hechizos
  document.getElementById("form194_3").value = 10 + wisdomModifier; // CD de salvación de hechizo
  stat_checker(wisdomModifier + 2, "form195_3"); // bono de ataque de hechizo
  document.getElementById("form97_3").value = 2;
} else if (classID == 4) { // Druida (Druid) - índice 4
  document.getElementById("form214_3").value = className; // clase que lanza hechizos
  document.getElementById("form196_3").value = "WIS"; // habilidad de lanzamiento de hechizos
  document.getElementById("form194_3").value = 10 + wisdomModifier; // CD de salvación de hechizo
  stat_checker(wisdomModifier + 2, "form195_3"); // bono de ataque de hechizo
  document.getElementById("form97_3").value = 2;
  if (strength > dexterity) {
    document.getElementById("form213_3").value = "Garrote";
    document.getElementById("form204_3").value = "Arte Druídico";
  } else {
    document.getElementById("form213_3").value = "Produce Flame";
    document.getElementById("form204_3").value = "Arte Druídico";
  }
  if (wisdomModifier === 0) {
    document.getElementById("form193_3").value = "Palabra Curativa";
  } else if (wisdomModifier === 1) {
    document.getElementById("form193_3").value = "Palabra Curativa";
    document.getElementById("form159_3").value = "Ola de Trueno";
  } else if (wisdomModifier === 2) {
    document.getElementById("form193_3").value = "Palabra Curativa";
    document.getElementById("form159_3").value = "Ola de Trueno";
    document.getElementById("form137_3").value = "Enredar";
  } else if (wisdomModifier === 3) {
    document.getElementById("form193_3").value = "Palabra Curativa";
    document.getElementById("form159_3").value = "Ola de Trueno";
    document.getElementById("form137_3").value = "Enredar";
    document.getElementById("form136_3").value = "Curar Heridas";
  } else if (wisdomModifier === 4) {
    document.getElementById("form193_3").value = "Palabra Curativa";
    document.getElementById("form159_3").value = "Ola de Trueno";
    document.getElementById("form137_3").value = "Enredar";
    document.getElementById("form136_3").value = "Curar Heridas";
    document.getElementById("form135_3").value = "Fuego Feérico";
  } else if (wisdomModifier === 5) {
    document.getElementById("form193_3").value = "Palabra Curativa";
    document.getElementById("form159_3").value = "Ola de Trueno";
    document.getElementById("form137_3").value = "Enredar";
    document.getElementById("form136_3").value = "Curar Heridas";
    document.getElementById("form135_3").value = "Fuego Feérico";
    document.getElementById("form133_3").value = "Tremor de Tierra";
  }
}


// For loop that searches your inventory and determines armor class based on what armor you have
  for (var _i22 = 0; _i22 < equipment.length; _i22++) {
    if (equipment[_i22] === armor.lightArmor.padded.armorname) {
      armorClass += 11 + dexterityModifier;
    } else if (equipment[_i22] === armor.lightArmor.leather.armorname) {
      armorClass += 11 + dexterityModifier;
    } else if (equipment[_i22] === armor.lightArmor.studdedleather.armorname) {
      armorClass += 12 + dexterityModifier;
    } else if (equipment[_i22] === armor.mediumArmor.hide.armorname) {
      armorClass += 12 + dexterityModifier;
    } else if (equipment[_i22] === armor.mediumArmor.chainshirt.armorname) {
      armorClass += 13 + dexterityModifier;
    } else if (equipment[_i22] === armor.mediumArmor.scalemail.armorname) {
      armorClass += 14 + dexterityModifier;
      features.push(
        "Cota de escamas: Desventaja en tiradas de sigilo por armadura media."
      );
    } else if (equipment[_i22] === armor.heavyArmor.ringmail.armorname) {
      armorClass += 14;
      features.push(
        "Ring Mail: Desventaja en tiradas de sigilo por armadura pesada.."
      );
    } else if (equipment[_i22] === armor.heavyArmor.chainmail.armorname) {
      armorClass += 16;
      features.push(
        "Cota de mallas: Desventaja en tiradas de sigilo por llevar armadura pesada."
      );
    }
  }

  // For loop that searches your inventory and adds +2 armor class if you have a Escudo
  for (var _i23 = 0; _i23 < equipment.length; _i23++) {
    if (
      equipment[_i23] === "Escudo" ||
      equipment[_i23] === "Escudo - Focus" ||
      equipment[_i23] === "Escudo de madera"
    ) {
      armorClass += 2;
    } else {
    }
  }




  console.log(newBackground1,newClassSelected,nivel,race,balanceAndMorality,race);



  class_proficiencies(); // Get proficiencies based on class and previous proficiencies
  stat_checker(strengthModifier, "form56_1"); // str modifier
  stat_checker(dexterityModifier, "form59_1"); // dex modifier
  stat_checker(dexterityModifier, "form88_1"); // initiative
  stat_checker(constitutionModifier, "form58_1"); // con modifier
  stat_checker(intelligenceModifier, "form57_1"); // int modifier
  stat_checker(wisdomModifier, "form60_1"); // wis modifier
  stat_checker(charismaModifier, "form55_1"); // cha modifier
  document.getElementById("form13_2").value = alliesAndOrganizations.join("\r"); // allies and organizations pg 2
  document.getElementById("form61_1").value = "+2"; // proficiency
  document.getElementById("form80_1").value = hp; // max hp
  document.getElementById("form97_1").value = hp; // current hp
  document.getElementById("form67_1").value = 1; // number of hit dice
  document.getElementById("form91_1").value = 0; // experience points
  document.getElementById("form93_1").value =  name; // name
  document.getElementById("form90_1").value = newBackground1; // background
  document.getElementById("form96_1").value = charName; // character name
  document.getElementById("form8_2").value =  charName;; // character name 2nd page
  document.getElementById("form83_1").value = strength; // strength stat
  document.getElementById("form84_1").value = dexterity; // dex stat
  document.getElementById("form82_1").value = constitution; // con stat
  document.getElementById("form86_1").value = intelligence; // int stat
  document.getElementById("form81_1").value = wisdom; // wis stat
  document.getElementById("form85_1").value = charisma; // cha stat
  document.getElementById("form95_1").value = race; // race text field
  document.getElementById("form68_1").value = gold; // gold
  document.getElementById("form104_1").value = equipment.join("\r\n"); // equipment section
  document.getElementById("form94_1").value = classAndLevel; // class and level text field
  document.getElementById("form105_1").value = proficienciesAndLanguages.join("\r"); // proficiencies and languages
  document.getElementById("form106_1").value = features.join("\r\n"); // features & traits
  document.getElementById("form16_2").value = additionalFeatures.join("\r\n"); // additional features, pg. 2
  document.getElementById("form92_1").value = alignment; // alignment text fielddice
  document.getElementById("form73_1").value = armorClass; // AC
  document.getElementById("form103_1").value = spellcastingSection.join("\r\n"); // adding spell descriptions to the spellcasting section


// Block to determine passive perception
if (document.getElementById("form7_1").checked === "checked") {
  document.getElementById("form63_1").value = 12 + wisdomModifier; // passive perception
} else {
  document.getElementById("form63_1").value = 10 + wisdomModifier; // passive perception
}

//FUNCIONES AUXILOIARES



function equipment_chooser(classAndLevel) {


  random = Math.random();
  random2 = Math.random();

  // =========================
  // BÁRBARO ("Bárbaro 1")
  // =========================
  if (classAndLevel === clases[1]) {
    features.push(
      "Furia (2/lr): En tu turno, puedes entrar en furia como una Acción adicional. Mientras estés en furia, obtienes los siguientes beneficios si no estás usando armadura pesada: Tienes ventaja en Chequeos de Fuerza y tiradas de salvación de Fuerza. Cuando haces un Ataque con un arma cuerpo a cuerpo usando Fuerza, obtienes un bono de +2 al daño. Este bono aumenta a medida que subes de nivel. Tienes Resistencia al daño contundente, perforante y cortante. Si eres capaz de lanzar Conjuros, no puedes lanzarlos ni concentrarte en ellos mientras estés en furia. Consulta el manual del jugador para más detalles."
    );
    features.push(
      "Defensa sin armadura: Mientras no lleves armadura, tu clase de armadura es igual a 10 + tu modificador de destreza + tu modificador de constitución, usable con escudo."
    );
    spellcastingSection.push(
      "Furia (2/lr): Usa tu acción adicional para entrar en furia y obtener +2 a las tiradas de daño cuerpo a cuerpo usando fuerza, y obtener beneficios defensivos descritos en la sección de características."
    );

    if (dexterity > strength) {
      if (
        document.getElementById("form90_1").value === "Sailor" ||
        document.getElementById("form90_1").value === "Pirate" ||
        document.getElementById("form90_1").value === "Gladiator"
      ) {
        equipment.push("Tridente");
        document.getElementById("form79_1").value = "Tridente"; 
        stat_checker(dexterityModifier + 2, "form64_1"); 
        stat_checker_3(dexterityModifier, "form76_1", "1d6/8", "P");

        equipment.push("Ballesta pesada");
        document.getElementById("form78_1").value = "Ballesta pesada"; 
        stat_checker(dexterityModifier + 2, "form65_1");
        stat_checker_3(dexterityModifier, "form74_1", "1d10", "P");
      } else {
        equipment.push("Pico de Guerra");
        document.getElementById("form79_1").value = "Pico de Guerra"; 
        stat_checker(dexterityModifier + 2, "form64_1"); 
        stat_checker_3(dexterityModifier, "form76_1", "1d8", "P");

        equipment.push("Arco largo");
        document.getElementById("form78_1").value = "Arco largo"; 
        stat_checker(dexterityModifier + 2, "form65_1"); 
        stat_checker_3(dexterityModifier, "form74_1", "1d8", "P");
      }
    } else {
      if (random > 0.666) {
        equipment.push("Hacha grande");
        document.getElementById("form79_1").value = "Hacha grande";
        stat_checker(strengthModifier + 2, "form64_1");
        stat_checker_3(strengthModifier, "form76_1", "1d12", "S");
      } else if (random > 0.333) {
        equipment.push("Espada grande");
        document.getElementById("form79_1").value = "Espada grande";
        stat_checker(strengthModifier + 2, "form64_1");
        stat_checker_3(strengthModifier, "form76_1", "2d6", "S");
      } else {
        equipment.push("Maza");
        document.getElementById("form79_1").value = "Maza";
        stat_checker(strengthModifier + 2, "form64_1");
        stat_checker_3(strengthModifier, "form76_1", "2d6", "B");
      }
      equipment.push("Hacha de mano x2");
      document.getElementById("form78_1").value = "Hacha de mano";
      stat_checker(strengthModifier + 2, "form65_1");
      stat_checker_3(strengthModifier, "form74_1", "1d6", "S");
    }

  // =========================
  // BARDO ("Bardo 1")
  // =========================
  } else if (classAndLevel === clases[2]) {
    if (charismaModifier < 1) {
      bardModifier = 1;
    } else {
      bardModifier = charismaModifier;
    }
    features.push(
      "Inspiración Bardica (" +
        bardModifier +
        "/lr): Usa una acción adicional en tu turno para elegir una criatura que no seas tú y que esté a 60 pies de ti y pueda oírte. Esa criatura gana un dado de Inspiración Bardica, un d6. Una vez dentro de los próximos 10 minutos, la criatura puede tirar el dado y sumar el número obtenido a una prueba de habilidad, tirada de ataque o tirada de salvación que realice."
    );
    spellcastingSection.push(
      "Inspiración Bardica (" +
        bardModifier +
        "/lr): Usa una acción adicional para dar a otra criatura un dado de inspiración de 1d6."
    );
    musicalinstrument = random_musical_instrument();
    tool_adder_2(tool_adder(musicalinstrument.toLowerCase()));
    equipment.push(musicalinstrument + " - Focus");
    musicalinstrument2 = random_musical_instrument();
    tool_adder_2(tool_adder(musicalinstrument2.toLowerCase()));
    if (random > 0.5) {
      tool_adder_2(tool_adder("voz"));
    } else {
      musicalinstrument3 = random_musical_instrument();
      tool_adder_2(tool_adder(musicalinstrument3.toLowerCase()));
    }
    equipment.push("Armadura de cuero");
    equipment.push("Daga");
    document.getElementById("form78_1").value = "Daga";
    if (strength > dexterity) {
      stat_checker(strengthModifier + 2, "form65_1");
      stat_checker_3(strengthModifier, "form74_1", "1d4", "P");
      equipment.push("Espada larga");
      document.getElementById("form79_1").value = "Espada larga";
      stat_checker(strengthModifier + 2, "form64_1");
      stat_checker_3(strengthModifier, "form76_1", "1d8", "S");
    } else {
      equipment.push("Estoque");
      document.getElementById("form79_1").value = "Estoque";
      stat_checker(dexterityModifier + 2, "form64_1");
      stat_checker_3(dexterityModifier, "form76_1", "1d8", "P");
      stat_checker(dexterityModifier + 2, "form65_1");
      stat_checker_3(dexterityModifier, "form74_1", "1d4", "P");
    }
    if (random2 > 0.5) {
      equipment.push("Paquete de diplomático");
    } else {
      equipment.push("Paquete de artista");
    }

  // =========================
  // CLÉRIGO ("Clérigo 1")
  // =========================
  } else if (classAndLevel === clases[3]) {
    if (random2 > 0.5) {
      equipment.push("Paquete de explorador");
    } else {
      equipment.push("Paquete de sacerdote");
    }
    equipment.push("Escudo");
    equipment.push("Un símbolo sagrado");

    // ... (todo el bloque de código de Cleric 1)
    //     (se mantiene igual, solo cambiamos la condición arriba)

    if (clericBuild === "STR") {
      equipment.push("Hacha de mano");
      document.getElementById("form78_1").value = "Hacha de mano";
      stat_checker(strengthModifier + 2, "form65_1");
      stat_checker_3(strengthModifier, "form74_1", "1d6", "S");
      // ... resto del código para Cleric STR build ...
      // (Mantén todo tal cual; solo te muestro la estructura)
    } else if (clericBuild === "DEX") {
      equipment.push("Ballesta ligera con 20 virotes");
      document.getElementById("form78_1").value = "Ballesta ligera";
      stat_checker(dexterityModifier + 2, "form65_1");
      stat_checker_3(dexterityModifier, "form74_1", "1d8", "P");
      // ... resto del código para Cleric DEX build ...
    } else if (clericBuild === "WIS") {
      equipment.push("Maza");
      // ... resto del código para Cleric WIS build ...
    }

  // =========================
  // DRUIDA ("Druida 1")
  // =========================
  } else if (classAndLevel === clases[4]) {
    tool_adder_2(tool_adder("kit de herboristería"));
    profsAndLangs.languages.push("Druídico");
    features.push(
      "Druídico: Conoces el idioma Druídico, puedes ver mensajes ocultos de los druidas y hablar el idioma. Aquellos que no conocen el Druídico pueden ver el mensaje con una prueba exitosa de Sabiduría DC 15, pero no pueden descifrarlo."
    );
    equipment.push("Armadura de cuero");
    equipment.push("Paquete de explorador");
    // ... resto del código de Druid 1 ...

  // =========================
  // GUERRERO ("Guerrero 1")
  // =========================
  } else if (classAndLevel === clases[5]) {
    // Antes "Fighter 1"
    features.push(
      "Segundo Aliento (1/r): En tu turno, puedes usar una acción adicional para recuperar puntos de golpe iguales a 1d10 + tu nivel de luchador."
    );
    spellcastingSection.push(
      "Segundo Aliento (1/r): Usa una acción adicional para ganar 1d10 + 1 pg."
    );
    spellcastingSection.push(" ");
    // ... resto del código de Fighter 1 ...

  // =========================
  // MONJE ("Monje 1")
  // =========================
  } else if (classAndLevel === clases[6]) {
    features.push(
      "Defensa sin armadura: Mientras no lleves armadura ni escudos, tu clase de armadura es igual a 10 + tu modificador de destreza + tu modificador de sabiduría."
    );
    features.push(
      "Artes Marciales: Obtienes los siguientes beneficios cuando estás desarmado o empuñando solo armas de monje y no llevas armadura ni escudo: ..."
    );
    spellcastingSection.push(
      "Artes Marciales: Cuando atacas con las armas mencionadas, puedes usar tu acción adicional para hacer un golpe desarmado."
    );
    musicalinstrument = random_musical_instrument();
    tool_adder_2(tool_adder(musicalinstrument));
    randomAritsanTool = random_artisan_tool();
    tool_adder_2(tool_adder(randomAritsanTool));
    document.getElementById("form78_1").value = "Desarmado";
    stat_checker(dexterityModifier + 2, "form65_1");
    stat_checker_3(dexterityModifier, "form74_1", "1d4", "B");
    // ... resto del código de Monk 1 ...

  // =========================
  // PALADÍN ("Paladín 1")
  // =========================
  } else if (classAndLevel === clases[7]) {
    // Antes "Paladin 1"
    equipment.push("Cota de mallas");
    features.push(
      "Sentido Divino (" +
        (charismaModifier + 1) +
        "/lr: Como acción, hasta el final de tu próximo turno, conoces la ubicación de cualquier celestial, demonio o no-muerto dentro de 60 pies de ti que no esté detrás de una cobertura total..."
    );
    // ... resto del código de Paladin 1 ...

  // =========================
  // GUARDABOSQUES ("Guardabosques 1")
  // =========================
  } else if (classAndLevel === clases[8]) {
    // Antes "Ranger 1"
    equipment.push("2 Espada cortas");
    document.getElementById("form78_1").value = "Espada corta";
    stat_checker(dexterityModifier + 2, "form65_1");
    stat_checker_3(dexterityModifier, "form74_1", "1d6", "S");
    equipment.push("Arco largo w/ quiver of 20 flechas");
    document.getElementById("form79_1").value = "Arco largo";
    stat_checker(dexterityModifier + 2, "form64_1");
    stat_checker_3(dexterityModifier, "form76_1", "1d8", "P");
    // ... resto del código de Ranger 1 ...

  // =========================
  // PÍCARO ("Pícaro 1")
  // =========================
  } else if (classAndLevel === clases[9]) {
    // Antes "Rogue 1"
    tool_adder_2(tool_adder("herramientas de ladrón"));
    equipment.push("Estoque");
    document.getElementById("form79_1").value = "Estoque";
    stat_checker(dexterityModifier + 2, "form64_1");
    stat_checker_3(dexterityModifier, "form76_1", "1d8", "P");
    equipment.push("Armadura de cuero");
    equipment.push("2 Dagas");
    document.getElementById("form78_1").value = "Daga";
    stat_checker(dexterityModifier + 2, "form65_1");
    stat_checker_3(dexterityModifier, "form74_1", "1d4", "P");
    equipment.push("Arco corto w/ quiver of 20 flechas");
    document.getElementById("form77_1").value = "Arco corto";
    stat_checker(dexterityModifier + 2, "form66_1");
    stat_checker_3(dexterityModifier, "form75_1", "1d6", "P");
    features.push(
      "Ataque Furtivo: Si un enemigo está flanqueado o tienes ventaja en el ataque, puedes usar tus dados de ataque furtivo (1d6)..."
    );
    spellcastingSection.push(
      "Ataque Furtivo: 1d6 al primer ataque de la ronda que tenga ventaja y acierte."
    );
    language_adder_2(language_adder("Jerga de Ladrones"));
    features.push("Jerga de Ladrones...");
    if (random > 0.5) {
      features.push(
        "Pericia: Tus dos habilidades de pericia son Sigilo y Percepción..."
      );
      stat_checker(dexterityModifier + 4, "form32_1"); // sigilo
      stat_checker(wisdomModifier + 4, "form43_1");    // percepción
    } else if (document.getElementById("form17_1").checked === true) {
      features.push(
        "Pericia: Tus dos habilidades de pericia son Sigilo y Engaño..."
      );
      stat_checker(dexterityModifier + 4, "form32_1");
      stat_checker(charismaModifier + 4, "form36_1");
    } else if (document.getElementById("form14_1").checked === true) {
      features.push(
        "Pericia: Tus dos habilidades de pericia son Sigilo e Investigación..."
      );
      stat_checker(dexterityModifier + 4, "form32_1");
      stat_checker(intelligenceModifier + 4, "form31_1");
    } else {
      features.push(
        "Pericia: Tus dos habilidades de pericia son Sigilo y herramientas de ladrón..."
      );
      stat_checker(dexterityModifier + 4, "form32_1");
      equipment.push("herramientas de ladrón (+4)");
    }

  // =========================
  // HECHICERO ("Hechicero 1")
  // =========================
  } else if (classAndLevel === clases[10]) {
    // Antes "Sorcerer 1"
    equipment.push("2 Dagas");
    document.getElementById("form79_1").value = "Daga";
    stat_checker(dexterityModifier + 2, "form64_1");
    stat_checker_3(dexterityModifier, "form76_1", "1d4", "P");
    equipment.push("Ballesta ligera con 20 virotes");
    document.getElementById("form78_1").value = "Ballesta ligera";
    stat_checker(dexterityModifier + 2, "form65_1");
    stat_checker_3(dexterityModifier, "form74_1", "1d8", "P");
    equipment.push("Bolsa de componentes");

    if (random > 0.5) {
      equipment.push("Paquete de explorador");
      // Ancestro dracónico
      if (random2 > 0.9) {
        features.push(
          "Ancestro Dracónico: Negro, y conoces el idioma 'Dracónico'..."
        );
        features.push(
          "Resiliencia Dracónica: En el nivel 1, tu máximo de puntos de golpe aumenta en 1..."
        );
        armorClass += 13 + dexterityModifier;
        hp++;
      } else if (random2 > 0.8) {
        features.push("Ancestro Dracónico: Azul, y conoces el idioma 'Dracónico'...");
        features.push("Resiliencia Dracónica...");
        armorClass += 13 + dexterityModifier;
        hp++;
      }
      // ... resto de los else if para otros colores dracónicos ...
    } else {
      equipment.push("Paquete de explorador");
      // Magia Salvaje
      features.push(
        "Oleada de Magia Salvaje: Inmediatamente después de lanzar un conjuro..."
      );
      features.push(
        "Mareas del Caos (1/lr): Puedes ganar ventaja en una tirada de ataque, chequeo de habilidad o tirada de salvación..."
      );
      armorClass += 10 + dexterityModifier;
    }

  // =========================
  // BRUJO ("Brujo 1")
  // =========================
  } else if (classAndLevel === clases[11]) {
    equipment.push("2 Dagas");
    equipment.push("Bolsa de componentes");
    equipment.push("Armadura de cuero");

    if (strength > dexterity) {
      document.getElementById("form77_1").value = "Daga";
      stat_checker(strengthModifier + 2, "form66_1");
      stat_checker_3(strengthModifier, "form75_1", "1d4", "P");
      equipment.push("Hacha de mano");
      document.getElementById("form78_1").value = "Hacha de mano";
      stat_checker(strengthModifier + 2, "form65_1");
      stat_checker_3(strengthModifier, "form74_1", "1d6", "S");
      equipment.push("Maza");
      document.getElementById("form79_1").value = "Maza";
      stat_checker(strengthModifier + 2, "form64_1");
      stat_checker_3(strengthModifier, "form76_1", "1d6", "B");
      equipment.push("Paquete de erudito");
    } else {
      equipment.push("Bastón");
      document.getElementById("form79_1").value = "Bastón";
      stat_checker(strengthModifier + 2, "form64_1");
      stat_checker_3(strengthModifier, "form76_1", "1d6", "B");
      equipment.push("Paquete de explorador");
      document.getElementById("form77_1").value = "Daga";
      stat_checker(dexterityModifier + 2, "form66_1");
      stat_checker_3(dexterityModifier, "form75_1", "1d4", "P");
      equipment.push("Ballesta ligera con 20 virotes");
      document.getElementById("form78_1").value = "Ballesta ligera";
      stat_checker(dexterityModifier + 2, "form65_1");
      stat_checker_3(dexterityModifier, "form74_1", "1d8", "P");
    }
    if (random2 > 0.666) {
      features.push("Patrón de otro mundo: Archifey.");
      document.getElementById("form193_3").value = "Fuego Feérico";
      document.getElementById("form159_3").value = "Sueño";
      features.push(
        "Presencia Feérica (1/r): Como acción, puedes hacer que cada criatura..."
      );
    } else if (random2 > 0.333) {
      features.push("Patrón de otro mundo: Demonio.");
      document.getElementById("form193_3").value = "Manos Ardientes";
      document.getElementById("form159_3").value = "Mandato";
      features.push(
        "Bendición del Oscuro: Cuando reduces a una criatura hostil a 0 puntos de golpe..."
      );
    } else {
      features.push("Patrón de otro mundo: Gran Anciano.");
      document.getElementById("form193_3").value = "Susurros disonantes";
      document.getElementById("form159_3").value = "Risa Horrenda de Tasha";
      features.push(
        "Mente Despierta: Puedes comunicarte telepáticamente con cualquier criatura..."
      );
    }

  // =========================
  // MAGO ("Mago 1")
  // =========================
  } else if (classAndLevel === clases[12]) {
    armorClass += 10 + dexterityModifier;
    features.push(
      "Recuperación Arcana (1/d): Cuando terminas un descanso corto una vez al día..."
    );
    if (random > 0.5) {
      equipment.push("Paquete de erudito");
      equipment.push("Bastón");
      document.getElementById("form79_1").value = "Bastón";
      stat_checker(strengthModifier + 2, "form64_1");
      stat_checker_3(strengthModifier, "form76_1", "1d6", "B");
    } else {
      equipment.push("Paquete de explorador");
      equipment.push("Daga");
      document.getElementById("form79_1").value = "Daga";
      stat_checker(dexterityModifier + 2, "form64_1");
      stat_checker_3(dexterityModifier, "form76_1", "1d4", "P");
    }
    if (random2 > 0.8) {
      equipment.push("Notas arrugadas - Libro de hechizos");
      equipment.push("Relámpago en una botella - Enfoque");
    } else if (random2 > 0.6) {
      equipment.push("Varios tatuajes coloridos - Libro de hechizos");
      equipment.push("Cristal con agua rosada dentro - Enfoque");
    } else if (random2 > 0.4) {
      equipment.push(
        "Libro encuadernado en cuero con tinta sospechosamente roja - Libro de hechizos"
      );
      equipment.push("Vara metálica con piedra de ámbar en la parte superior - Enfoque");
    } else if (random2 > 0.2) {
      equipment.push(
        "Cuero negro grueso con esquinas reforzadas con platino, tinta plateada, el frente grabado con tu nombre, " +
          charName +
          " - Libro de hechizos"
      );
      equipment.push("Bastón de madera especialmente tallado y nudoso - Enfoque");
    } else {
      equipment.push(
        "Libro de cuero ligero con lomo incrustado de gemas - Libro de hechizos"
      );
      equipment.push("Varita de sauce parcialmente petrificada - Enfoque");
    }
  }

}

  // Function to determine a random artisan tool
  function random_artisan_tool() {
    random = Math.floor(Math.random() * 17);
    if (random === 0) {
      return "Suministros de alquimista";
    } else if (random === 1) {
      return "Suministros de cervecero";
    } else if (random === 2) {
      return "Suministros de calígrafo";
    } else if (random === 3) {
      return "Herramientas de carpintero";
    } else if (random === 4) {
      return "Herramientas de Carroógrafo";
    } else if (random === 5) {
      return "Herramientas de zapatero";
    } else if (random === 6) {
      return "Utensilios de cocina";
    } else if (random === 7) {
      return "Herramientas de soplador de vidrio";
    } else if (random === 8) {
      return "Herramientas de joyero";
    } else if (random === 9) {
      return "Herramientas de curtidor";
    } else if (random === 10) {
      return "Herramientas de albañil";
    } else if (random === 11) {
      return "Suministros de pintor";
    } else if (random === 12) {
      return "Herramientas de alfarero";
    } else if (random === 13) {
      return "Herramientas de herrero";
    } else if (random === 14) {
      return "Herramientas de reparador";
    } else if (random === 15) {
      return "Herramientas de tejedor";
    } else if (random === 16) {
      return "Herramientas de tallador de madera";
    }    
  }


  // Function to determine a random gaming set
  function random_gaming_set_capitalize() {
    random = Math.floor(Math.random() * 4);
    if (random === 0) {
      return "Dados";
    } else if (random === 1) {
      return "Ajedrez de dragón";
    } else if (random === 2) {
      return "Carroas para jugar";
    } else if (random === 3) {
      return "Tres dragones ante";
    }    
  }

  // Function to choose a random language, with a small chance for exotic languages
  function random_language() {
    var random = Math.random();
    var randomStandardLanguageNumber = Math.floor(Math.random() * 7);
    var randomExoticLanguageNumber = Math.floor(Math.random() * 8);
    while (
      listOfStandardLanguages[randomStandardLanguageNumber] === racialLanguage2
    ) {
      randomStandardLanguageNumber = Math.floor(Math.random() * 7);
    }
    if (random >= 0.1) {
      language = listOfStandardLanguages[randomStandardLanguageNumber];
    } else {
      language = listOfExoticLanguages[randomExoticLanguageNumber];
    }
    return language;
  }

  // Function to choose the right language based on race, with error checking that it doesn't give the same language twice
  function right_language() {
    if (race === "High Elf" || race === "Wood Elf" || race === "Elf") {
      while (
        firstLanguage === "Elvish" ||
        firstLanguage === extralanguage ||
        extralanguage === racialLanguage2
      ) {
        firstLanguage = random_language();
      }
    } else if (race === "Hill Dwarf" || race === "Mountain Dwarf") {
      while (
        firstLanguage === "Dwarvish" ||
        firstLanguage === extralanguage ||
        extralanguage === racialLanguage2
      ) {
        firstLanguage = random_language();
      }
    } else if (race === "Lightfoot Halfling" || race === "Stout Halfling") {
      while (
        firstLanguage === "Halfling" ||
        firstLanguage === extralanguage ||
        extralanguage === racialLanguage2
      ) {
        firstLanguage = random_language();
      }
    } else if (
      race === "Black Dragonborn" ||
      race === "Blue Dragonborn" ||
      race === "Brass Dragonborn" ||
      race === "Bronze Dragonborn" ||
      race === "Copper Dragonborn" ||
      race === "Gold Dragonborn" ||
      race === "Green Dragonborn" ||
      race === "Red Dragonborn" ||
      race === "Silver Dragonborn" ||
      race === "White Dragonborn"
    ) {
      while (
        firstLanguage === "Draconic" ||
        firstLanguage === extralanguage ||
        extralanguage === racialLanguage2
      ) {
        firstLanguage = random_language();
      }
    } else if (race === "Forest Gnome" || race === "Rock Gnome") {
      while (
        firstLanguage === "Gnomish" ||
        firstLanguage === extralanguage ||
        extralanguage === racialLanguage2
      ) {
        firstLanguage = random_language();
      }
    } else if (race === "Half-Elf") {
      while (
        firstLanguage === "Elvish" ||
        firstLanguage === extralanguage ||
        extralanguage === racialLanguage2
      ) {
        firstLanguage = random_language();
      }
    } else if (race === "Orc") {
      while (
        firstLanguage === "Orc" ||
        firstLanguage === extralanguage ||
        extralanguage === racialLanguage2
      ) {
        firstLanguage = random_language();
      }
    } else if (race === "Tiefling") {
      while (
        firstLanguage === "Infernal" ||
        firstLanguage === extralanguage ||
        extralanguage === racialLanguage2
      ) {
        firstLanguage = random_language();
      }
    }
    return firstLanguage;
  }

  // Function to choose another language after you already added one via right language
  function right_language2(languagevariable) {
    while (
      firstLanguage === languagevariable ||
      languagevariable === racialLanguage1 ||
      languagevariable === racialLanguage2 ||
      extralanguage === languagevariable ||
      knowledgeLanguage === languagevariable
    ) {
      languagevariable = random_language();
    }
    return languagevariable;
  }


// Function to determine what proficiencies a character gets based on their class and their proficiencies they already have
  function class_proficiencies() {
    if (classID == 1) { // Bárbaro (Barbarian 1)
      for (var _i11 = 0; _i11 < 2; _i11++) {
        if (document.getElementById("form7_1").checked === undefined) {
          add_click(7);
          stat_checker(wisdomModifier + 2, "form43_1"); // perception
        } else if (document.getElementById("form2_1").checked === undefined) {
          add_click(2);
          stat_checker(strengthModifier + 2, "form49_1"); // athletics
        } else if (document.getElementById("form12_1").checked === undefined) {
          add_click(12);
          stat_checker(wisdomModifier + 2, "form47_1"); // survival
        } else if (document.getElementById("form24_1").checked === undefined) {
          add_click(24);
          stat_checker(charismaModifier + 2, "form44_1"); // intimidation
        } else if (document.getElementById("form8_1").checked === undefined) {
          add_click(8);
          stat_checker(wisdomModifier + 2, "form50_1"); // animal handling
        } else if (document.getElementById("form11_1").checked === undefined) {
          add_click(11);
          stat_checker(intelligenceModifier + 2, "form37_1"); // nature
        }
      }
    } else if (classID == 5) { // Guerrero (Fighter 1)
      for (var _i12 = 0; _i12 < 2; _i12++) {
        if (document.getElementById("form7_1").checked === undefined) {
          add_click(7);
          stat_checker(wisdomModifier + 2, "form43_1"); // perception
        } else if (
          document.getElementById("form2_1").checked === undefined &&
          strength >= dexterity
        ) {
          add_click(2);
          stat_checker(strengthModifier + 2, "form49_1"); // athletics
        } else if (
          document.getElementById("form19_1").checked === undefined &&
          dexterity > strength
        ) {
          add_click(19);
          stat_checker(dexterityModifier + 2, "form38_1"); // acrobatics
        } else if (document.getElementById("form12_1").checked === undefined) {
          add_click(12);
          stat_checker(wisdomModifier + 2, "form47_1"); // survival
        } else if (document.getElementById("form13_1").checked === undefined) {
          add_click(13);
          stat_checker(wisdomModifier + 2, "form35_1"); // insight
        } else if (document.getElementById("form24_1").checked === undefined) {
          add_click(24);
          stat_checker(charismaModifier + 2, "form44_1"); // intimidation
        } else if (document.getElementById("form9_1").checked === undefined) {
          add_click(9);
          stat_checker(intelligenceModifier + 2, "form48_1"); // history
        } else if (document.getElementById("form8_1").checked === undefined) {
          add_click(8);
          stat_checker(wisdomModifier + 2, "form50_1"); // animal handling
        }
      }
    } else if (classID == 2) { // Bardo (Bard 1)
      if (document.getElementById("form1_1").checked === undefined) {
        add_click(1);
        stat_checker(charismaModifier + 2, "form45_1"); // persuasion
      } else {
        skill_adder();
      }
      if (document.getElementById("form16_1").checked === undefined) {
        add_click(16);
        stat_checker(charismaModifier + 2, "form34_1"); // performance
      } else {
        skill_adder();
      }
      skill_adder();
    } else if (classID == 3) { // Clérigo (Cleric 1)
      for (var _i13 = 0; _i13 < 2; _i13++) {
        if (document.getElementById("form13_1").checked === undefined) {
          add_click(13);
          stat_checker(wisdomModifier + 2, "form35_1"); // insight
        } else if (document.getElementById("form1_1").checked === undefined) {
          add_click(1);
          stat_checker(charismaModifier + 2, "form45_1"); // persuasion
        } else if (document.getElementById("form20_1").checked === undefined) {
          add_click(20);
          stat_checker(intelligenceModifier + 2, "form33_1"); // religion
        } else if (document.getElementById("form9_1").checked === undefined) {
          add_click(9);
          stat_checker(intelligenceModifier + 2, "form48_1"); // history
        } else if (document.getElementById("form5_1").checked === undefined) {
          add_click(5);
          stat_checker(wisdomModifier + 2, "form53_1"); // medicine
        }
      }
    } else if (classID == 10) { // Hechicero (Sorcerer 1)
      for (var _i14 = 0; _i14 < 2; _i14++) {
        if (document.getElementById("form21_1").checked === undefined) {
          add_click(21);
          stat_checker(intelligenceModifier + 2, "form40_1"); // arcana
        } else if (document.getElementById("form24_1").checked === undefined) {
          add_click(24);
          stat_checker(charismaModifier + 2, "form44_1"); // intimidation
        } else if (document.getElementById("form1_1").checked === undefined) {
          add_click(1);
          stat_checker(charismaModifier + 2, "form45_1"); // persuasion
        } else if (document.getElementById("form20_1").checked === undefined) {
          add_click(20);
          stat_checker(intelligenceModifier + 2, "form33_1"); // religion
        } else if (document.getElementById("form13_1").checked === undefined) {
          add_click(13);
          stat_checker(wisdomModifier + 2, "form35_1"); // insight
        } else if (document.getElementById("form17_1").checked === undefined) {
          add_click(17);
          stat_checker(charismaModifier + 2, "form36_1"); // deception
        }
      }
    } else if (classID == 12) { // Mago (Wizard 1)
      for (var _i15 = 0; _i15 < 2; _i15++) {
        if (document.getElementById("form21_1").checked === undefined) {
          add_click(21);
          stat_checker(intelligenceModifier + 2, "form40_1"); // arcana
        } else if (document.getElementById("form14_1").checked === undefined) {
          add_click(14);
          stat_checker(intelligenceModifier + 2, "form31_1"); // investigation
        } else if (document.getElementById("form9_1").checked === undefined) {
          add_click(9);
          stat_checker(intelligenceModifier + 2, "form48_1"); // history
        } else if (document.getElementById("form20_1").checked === undefined) {
          add_click(20);
          stat_checker(intelligenceModifier + 2, "form33_1"); // religion
        } else if (document.getElementById("form13_1").checked === undefined) {
          add_click(13);
          stat_checker(wisdomModifier + 2, "form35_1"); // insight
        } else if (document.getElementById("form5_1").checked === undefined) {
          add_click(5);
          stat_checker(wisdomModifier + 2, "form53_1"); // medicine
        }
      }
    } else if (classID == 4) { // Druida (Druid 1)
      for (var _i16 = 0; _i16 < 2; _i16++) {
        if (document.getElementById("form7_1").checked === undefined) {
          add_click(7);
          stat_checker(wisdomModifier + 2, "form43_1"); // perception
        } else if (document.getElementById("form11_1").checked === undefined) {
          add_click(11);
          stat_checker(intelligenceModifier + 2, "form37_1"); // nature
        } else if (document.getElementById("form12_1").checked === undefined) {
          add_click(12);
          stat_checker(wisdomModifier + 2, "form47_1"); // survival
        } else if (document.getElementById("form13_1").checked === undefined) {
          add_click(13);
          stat_checker(wisdomModifier + 2, "form35_1"); // insight
        } else if (document.getElementById("form8_1").checked === undefined) {
          add_click(8);
          stat_checker(wisdomModifier + 2, "form50_1"); // animal handling
        } else if (document.getElementById("form20_1").checked === undefined) {
          add_click(20);
          stat_checker(intelligenceModifier + 2, "form33_1"); // religion
        } else if (document.getElementById("form21_1").checked === undefined) {
          add_click(21);
          stat_checker(intelligenceModifier + 2, "form40_1"); // arcana
        } else if (document.getElementById("form5_1").checked === undefined) {
          add_click(5);
          stat_checker(wisdomModifier + 2, "form53_1"); // medicine
        }
      }
    } else if (classID == 9) { // Pícaro (Rogue 1)
      for (var _i17 = 0; _i17 < 4; _i17++) {
        if (document.getElementById("form7_1").checked === undefined) {
          add_click(7);
          stat_checker(wisdomModifier + 2, "form43_1"); // perception
        } else if (document.getElementById("form23_1").checked === undefined) {
          add_click(23);
          stat_checker(dexterityModifier + 2, "form32_1"); // stealth
        } else if (
          document.getElementById("form2_1").checked === undefined &&
          strength >= dexterity
        ) {
          add_click(2);
          stat_checker(strengthModifier + 2, "form49_1"); // athletics
        } else if (
          document.getElementById("form19_1").checked === undefined &&
          dexterity > strength
        ) {
          add_click(19);
          stat_checker(dexterityModifier + 2, "form38_1"); // acrobatics
        } else if (document.getElementById("form17_1").checked === undefined) {
          add_click(17);
          stat_checker(charismaModifier + 2, "form36_1"); // deception
        } else if (document.getElementById("form4_1").checked === undefined) {
          add_click(4);
          stat_checker(dexterityModifier + 2, "form46_1"); // sleight of hand
        } else if (document.getElementById("form14_1").checked === undefined) {
          add_click(14);
          stat_checker(intelligenceModifier + 2, "form31_1"); // investigation
        } else if (document.getElementById("form1_1").checked === undefined) {
          add_click(1);
          stat_checker(charismaModifier + 2, "form45_1"); // persuasion
        } else if (document.getElementById("form16_1").checked === undefined) {
          add_click(16);
          stat_checker(charismaModifier + 2, "form34_1"); // performance
        } else if (document.getElementById("form12_1").checked === undefined) {
          add_click(12);
          stat_checker(wisdomModifier + 2, "form47_1"); // survival
        } else if (document.getElementById("form13_1").checked === undefined) {
          add_click(13);
          stat_checker(wisdomModifier + 2, "form35_1"); // insight
        }
      }
    } else if (classID == 11) { // Brujo (Warlock 1)
      for (var _i18 = 0; _i18 < 2; _i18++) {
        if (document.getElementById("form21_1").checked === undefined) {
          add_click(21);
          stat_checker(intelligenceModifier + 2, "form40_1"); // arcana
        } else if (document.getElementById("form17_1").checked === undefined) {
          add_click(17);
          stat_checker(charismaModifier + 2, "form36_1"); // deception
        } else if (document.getElementById("form24_1").checked === undefined) {
          add_click(24);
          stat_checker(charismaModifier + 2, "form44_1"); // intimidation
        } else if (document.getElementById("form20_1").checked === undefined) {
          add_click(20);
          stat_checker(intelligenceModifier + 2, "form33_1"); // religion
        } else if (document.getElementById("form11_1").checked === undefined) {
          add_click(11);
          stat_checker(intelligenceModifier + 2, "form37_1"); // nature
        } else if (document.getElementById("form14_1").checked === undefined) {
          add_click(14);
          stat_checker(intelligenceModifier + 2, "form31_1"); // investigation
        } else if (document.getElementById("form9_1").checked === undefined) {
          add_click(9);
          stat_checker(intelligenceModifier + 2, "form48_1"); // history
        }
      }
    } else if (classID == 8) { // Guardabosques (Ranger 1)
      for (var _i19 = 0; _i19 < 3; _i19++) {
        if (document.getElementById("form7_1").checked === undefined) {
          add_click(7);
          stat_checker(wisdomModifier + 2, "form43_1"); // perception
        } else if (document.getElementById("form12_1").checked === undefined) {
          add_click(12);
          stat_checker(wisdomModifier + 2, "form47_1"); // survival
        } else if (document.getElementById("form23_1").checked === undefined) {
          add_click(23);
          stat_checker(dexterityModifier + 2, "form32_1"); // stealth
        } else if (document.getElementById("form11_1").checked === undefined) {
          add_click(11);
          stat_checker(intelligenceModifier + 2, "form37_1"); // nature
        } else if (document.getElementById("form2_1").checked === undefined) {
          add_click(2);
          stat_checker(strengthModifier + 2, "form49_1"); // athletics
        } else if (document.getElementById("form8_1").checked === undefined) {
          add_click(8);
          stat_checker(wisdomModifier + 2, "form50_1"); // animal handling
        } else if (document.getElementById("form14_1").checked === undefined) {
          add_click(14);
          stat_checker(intelligenceModifier + 2, "form31_1"); // investigation
        } else if (document.getElementById("form13_1").checked === undefined) {
          add_click(13);
          stat_checker(wisdomModifier + 2, "form35_1"); // insight
        }
      }
    } else if (classID == 7) { // Paladín (Paladin 1)
      for (var _i20 = 0; _i20 < 2; _i20++) {
        if (document.getElementById("form20_1").checked === undefined) {
          add_click(20);
          stat_checker(intelligenceModifier + 2, "form33_1"); // religion
        } else if (document.getElementById("form2_1").checked === undefined) {
          add_click(2);
          stat_checker(strengthModifier + 2, "form49_1"); // athletics
        } else if (document.getElementById("form24_1").checked === undefined) {
          add_click(24);
          stat_checker(charismaModifier + 2, "form44_1"); // intimidation
        } else if (document.getElementById("form13_1").checked === undefined) {
          add_click(13);
          stat_checker(wisdomModifier + 2, "form35_1"); // insight
        } else if (document.getElementById("form1_1").checked === undefined) {
          add_click(1);
          stat_checker(charismaModifier + 2, "form45_1"); // persuasion
        } else if (document.getElementById("form5_1").checked === undefined) {
          add_click(5);
          stat_checker(wisdomModifier + 2, "form53_1"); // medicine
        }
      }
    } else if (classID == 6) { // Monje (Monk 1)
      for (var _i21 = 0; _i21 < 2; _i21++) {
        if (document.getElementById("form20_1").checked === undefined) {
          add_click(20);
          stat_checker(intelligenceModifier + 2, "form33_1"); // religion
        } else if (
          document.getElementById("form2_1").checked === undefined &&
          strength >= dexterity
        ) {
          add_click(2);
          stat_checker(strengthModifier + 2, "form49_1"); // athletics
        } else if (
          document.getElementById("form19_1").checked === undefined &&
          dexterity > strength
        ) {
          add_click(19);
          stat_checker(dexterityModifier + 2, "form38_1"); // acrobatics
        } else if (document.getElementById("form23_1").checked === undefined) {
          add_click(23);
          stat_checker(dexterityModifier + 2, "form32_1"); // stealth
        } else if (document.getElementById("form13_1").checked === undefined) {
          add_click(13);
          stat_checker(wisdomModifier + 2, "form35_1"); // insight
        } else if (document.getElementById("form9_1").checked === undefined) {
          add_click(9);
          stat_checker(intelligenceModifier + 2, "form48_1"); // history
        }
      }
    }
  }



 // Function to get a random interger between a minimum value and a maximum value
 function get_random_int(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


  // Function to determine if an array is empty
  function determine_if_empty(array) {
    if (array.length === 0) {
      return "none";
    } else {
      return array;
    }
  }

  // Function to determine a random trinket
  function random_trinket() {
    random = Math.floor(Math.random() * 20);
    if (random === 0) {
      return "Pieza de cristal que brilla tenuemente a la luz de la luna";
    } else if (random === 1) {
      return "Moneda de oro acuñada en una tierra desconocida";
    } else if (random === 2) {
      return "Garra ósea de dragón colgando de un simple collar de cuero";
    } else if (random === 3) {
      return "Pequeño ícono de plata de un cuervo";
    } else if (random === 4) {
      return "Llave antigua";
    } else if (random === 5) {
      return "Calavera de plata del tamaño de una moneda";
    } else if (random === 6) {
      return "Conjunto de flautas de hueso";
    } else if (random === 7) {
      return "Flecha antigua de diseño élfico";
    } else if (random === 8) {
      return "Símbolo sagrado de hierro dedicado a un dios desconocido";
    } else if (random === 9) {
      return "Invitación a una fiesta donde ocurrió un asesinato";
    } else if (random === 10) {
      return "Orbe de cristal lleno de humo en movimiento";
    } else if (random === 11) {
      return "Escritura de una parcela de tierra en un reino desconocido para ti";
    } else if (random === 12) {
      return "Pieza de ajedrez antigua hecha de vidrio irrompible";
    } else if (random === 13) {
      return "Pequeña estatua de madera de un mediano presumido";
    } else if (random === 14) {
      return "Orbe de latón grabado con runas extrañas";
    } else if (random === 15) {
      return "Fragmento de obsidiana que siempre se siente cálido al tacto";
    } else if (random === 16) {
      return "Dispositivo metálico rectangular con dos pequeñas copas de metal en un extremo que lanza chispas cuando se moja";
    } else if (random === 17) {
      return "Gema que parece un trozo de carbón cuando la examina alguien que no seas tú";
    } else if (random === 18) {
      return "Silbato hecho de madera dorada";
    } else if (random === 19) {
      return "Mapa del tesoro indescifrable";
    }
    
  }

  // Randomize hair based on parameters
  function hair_randomizer(hair1, hair2, hair3, hair4) {
    random = Math.floor(Math.random() * 4);
    if (random === 0) {
      document.getElementById("form3_2").value = hair1;
    } else if (random === 1) {
      document.getElementById("form3_2").value = hair2;
    } else if (random === 2) {
      document.getElementById("form3_2").value = hair3;
    } else if (random === 3) {
      document.getElementById("form3_2").value = hair4;
    }
  }

  // Randomize weight based on how strong and tough they are, as well as the races height and weight parameters
  function weight_randomizer(
    constitutionNumber,
    strengthNumber,
    lowestWeight,
    lowerWeight,
    mediumWeight,
    highWeight,
    higherWeight,
    highestWeight
  ) {
    beefiness = constitutionNumber + strengthNumber;
    random = Math.floor(Math.random() * 3);
    individualDiscrepancy = 0;
    if (random === 0) {
      individualDiscrepancy = -get_random_int(5, 15);
    } else if (random === 1) {
      individualDiscrepancy = get_random_int(5, 15);
    } else if (random === 2) {
      individualDiscrepancy = Math.floor(Math.random() * 5);
    }
    if (beefiness < 14) {
      document.getElementById("form4_2").value =
        lowestWeight + individualDiscrepancy;
    } else if (beefiness < 20) {
      document.getElementById("form4_2").value =
        lowerWeight + individualDiscrepancy;
    } else if (beefiness < 24) {
      document.getElementById("form4_2").value =
        mediumWeight + individualDiscrepancy;
    } else if (beefiness < 32) {
      document.getElementById("form4_2").value =
        highWeight + individualDiscrepancy;
    } else if (beefiness < 36) {
      document.getElementById("form4_2").value =
        higherWeight + individualDiscrepancy;
    } else {
      document.getElementById("form4_2").value =
        highestWeight + individualDiscrepancy;
    }
  }

  // Randomize weight based on how strong and tough they are, as well as the races height and weight parameters, but for the small races
  function weight_randomizer_small(
    constitutionNumber,
    strengthNumber,
    lowestWeight,
    lowerWeight,
    mediumWeight,
    highWeight,
    higherWeight,
    highestWeight
  ) {
    beefiness = constitutionNumber + strengthNumber;
    random = Math.floor(Math.random() * 3);
    individualDiscrepancy = 0;
    if (random === 0) {
      individualDiscrepancy = -get_random_int(1, 3);
    } else if (random === 1) {
      individualDiscrepancy = get_random_int(1, 3);
    } else if (random === 2) {
      individualDiscrepancy = Math.floor(Math.random() * 2);
    }
    if (beefiness < 14) {
      document.getElementById("form4_2").value =
        lowestWeight + individualDiscrepancy;
    } else if (beefiness < 20) {
      document.getElementById("form4_2").value =
        lowerWeight + individualDiscrepancy;
    } else if (beefiness < 24) {
      document.getElementById("form4_2").value =
        mediumWeight + individualDiscrepancy;
    } else if (beefiness < 32) {
      document.getElementById("form4_2").value =
        highWeight + individualDiscrepancy;
    } else if (beefiness < 36) {
      document.getElementById("form4_2").value =
        higherWeight + individualDiscrepancy;
    } else {
      document.getElementById("form4_2").value =
        highestWeight + individualDiscrepancy;
    }
  }

  // Function to determine breath type, calculate the saving throw, and push to additional features
  function breath_decider(color, damagetype) {
    if (
      color === "Black" ||
      color === "Blue" ||
      color === "Brass" ||
      color === "Bronze" ||
      color === "Copper"
    ) {
      additionalFeatures.push(
        damagetype +
          " Arma de Aliento: Puedes usar tu acción para exhalar tu Ascendencia Dracónica en una línea de 5 por 30 pies. Cuando usas tu arma de aliento, cada criatura en el área de la exhalación debe hacer una tirada de salvación de destreza. La DC para esta tirada de salvación es " +
          (10 + constitutionModifier) +
          ". Una criatura recibe 2d6 de daño de " +
          damagetype.toLowerCase() +
          " en una salvación fallida, y la mitad de daño en una salvación exitosa."
      );
    } else if (color === "Gold" || color === "Red") {
      additionalFeatures.push(
        damagetype +
          " Arma de Aliento: Puedes usar tu acción para exhalar tu Ascendencia Dracónica en un cono de 15 pies. Cuando usas tu arma de aliento, cada criatura en el área de la exhalación debe hacer una tirada de salvación de destreza. La DC para esta tirada de salvación es " +
          (10 + constitutionModifier) +
          ". Una criatura recibe 2d6 de daño de " +
          damagetype.toLowerCase() +
          " en una salvación fallida, y la mitad de daño en una salvación exitosa."
      );
    } else if (color === "Green" || color === "Silver" || color === "White") {
      additionalFeatures.push(
        damagetype +
          " Arma de Aliento: Puedes usar tu acción para exhalar tu Ascendencia Dracónica en un cono de 15 pies. Cuando usas tu arma de aliento, cada criatura en el área de la exhalación debe hacer una tirada de salvación de constitución. La DC para esta tirada de salvación es " +
          (10 + constitutionModifier) +
          ". Una criatura recibe 2d6 de daño de " +
          damagetype.toLowerCase() +
          " en una salvación fallida, y la mitad de daño en una salvación exitosa."
      );
    }
  }

  // Randomize skin based on parameters
  function skin_randomizer(skin1, skin2, skin3, skin4, skin5) {
    random = Math.floor(Math.random() * 5);
    if (random === 0) {
      document.getElementById("form2_2").value = skin1;
    } else if (random === 1) {
      document.getElementById("form2_2").value = skin2;
    } else if (random === 2) {
      document.getElementById("form2_2").value = skin3;
    } else if (random === 3) {
      document.getElementById("form2_2").value = skin4;
    } else if ((random = 4)) {
      document.getElementById("form2_2").value = skin5;
    }
  }

  // Randomize eye color based on parameters
  function eye_randomizer(eyecolor1, eyecolor2, eyecolor3, eyecolor4) {
    random = Math.floor(Math.random() * 4);
    if (random === 0) {
      document.getElementById("form6_2").value = eyecolor1;
    } else if (random === 1) {
      document.getElementById("form6_2").value = eyecolor2;
    } else if (random === 2) {
      document.getElementById("form6_2").value = eyecolor3;
    } else if (random === 3) {
      document.getElementById("form6_2").value = eyecolor4;
    }
  }
  // Function to add armor to proficiencies section
  function armor_adder(armorToAddToList) {
    for (var _i9 = 0; _i9 < profsAndLangs.armorProficiencies.length; _i9++) {
      if (profsAndLangs.armorProficiencies[_i9] === armorToAddToList) {
        return;
      }
    }
    return armorToAddToList;
  }

  // Function to check armor_adder()
  function armor_adder_2(armor_adder1) {
    if (armor_adder1 !== undefined) {
      profsAndLangs.armorProficiencies.push(armor_adder1);
    }
  }
  // Function to add tools to proficiencies section
  function tool_adder(tool) {
    for (j = 0; j < profsAndLangs.toolProficiencies.length; j++) {
      if (profsAndLangs.toolProficiencies[j] === tool) {
        return;
      }
    }
    return tool;
  }

  // Function to check tool_adder()
  function tool_adder_2(tool_adder1) {
    if (tool_adder1 !== undefined) {
      profsAndLangs.toolProficiencies.push(tool_adder1);
    }
  }

    // Function to add weapons to proficiencies section
    function weapon_adder(weapon) {
      for (var _i7 = 0; _i7 < simpleWeapons.length; _i7++) {
        if (simpleWeapons[_i7] === weapon) {
          for (j = 0; j < profsAndLangs.weaponProficiencies.length; j++) {
            if (profsAndLangs.weaponProficiencies[j] === "Simple Arma") {
              return;
            } else if (profsAndLangs.weaponProficiencies[j] === weapon) {
              return;
            }
          }
        }
      }
      for (var _i8 = 0; _i8 < martialWeapons.length; _i8++) {
        if (martialWeapons[_i8] === weapon) {
          for (j = 0; j < profsAndLangs.weaponProficiencies.length; j++) {
            if (profsAndLangs.weaponProficiencies[j] === "Arma Marcial") {
              return;
            } else if (profsAndLangs.weaponProficiencies[j] === weapon) {
              return;
            }
          }
        }
      }
      return weapon;
    }
  
    // Function to check weapon_adder()
    function weapon_adder_2(weapon_adder1) {
      if (weapon_adder1 !== undefined) {
        profsAndLangs.weaponProficiencies.push(weapon_adder1);
      }
    }
  
  // Function to make a skill proficient and checked
  function add_click(j) {
    var i = j.toString();
    document.getElementById("form" + i + "_1").checked = "checked";
    //click_on(i - 1);
    checkboxManager.click_on(i-1);
  }


  function obtenerIndiceRaza(raza) {
    return razas.indexOf(raza);
  }
  function obtenerIndiceClase(clase) {
    return clases.indexOf(clase);
  }
  // Function to add a racial cantrip to the last form in the cantrip section
  function add_race_cantrip(cantrip) {
    document.getElementById("form198_3").value = cantrip;
  }
  // Function for picking balance alignment
  function generate_balance(higherDecimal, lowerDecimal) {
    if (!alignmentChecker) {
        let randomValue = Math.random();

        if (randomValue >= higherDecimal) {
            alignment.push(alineamientos[1]); // "Legal Bueno"
            random_by_length(lawfulFlaws, flaws, "form99_1");
        } else if (higherDecimal >= randomValue && lowerDecimal >= Math.random()) {
            alignment.push(alineamientos[7]); // "Caótico Malvado"
            random_by_length(chaoticFlaws, flaws, "form99_1");
        } else if (randomValue >= lowerDecimal) {
            alignment.push(alineamientos[5]); // "Neutral"
            random_by_length(neutralFlaws, flaws, "form99_1");
        } else {
            alignment.push(alineamientos[5]); // "Neutral"
            random_by_length(neutralFlaws, flaws, "form99_1");
        }
    }
}

  // Function for picking morality alignment
  function generate_morality(higherDecimal, lowerDecimal) {
    if (alignmentChecker === false) {
      if (Math.random() >= higherDecimal) {
        alignment.push("Good");
        random_by_length(goodIdeals, ideals, "form100_1");
      } else if (
        higherDecimal >= Math.random() &&
        lowerDecimal >= Math.random()
      ) {
        alignment.push("Evil");
        random_by_length(evilIdeals, ideals, "form100_1");
      } else if (Math.random() >= lowerDecimal) {
        alignment.push("Neutral");
        random_by_length(neutralIdeals, ideals, "form100_1");
      } else {
        alignment.push("Evil");
        random_by_length(evilIdeals, ideals, "form100_1");
      }
    }
  }

  // Function to check if a stat needs a plus or not, usually used to add it to ability modifiers or saving throw modifiers
  function stat_checker(stat, id) {
    if (stat <= 0) {
      document.getElementById(id).value = stat;
    } else {
      document.getElementById(id).value = "+" + stat;
    }
  }
    // Function to check if the hit die is less than, equal to, or greater than 0, and add the proper syntax
    function stat_checker_2(stat, id, dieType) {
      if (stat < 0) {
        document.getElementById(id).value = dieType + stat;
      } else if (stat === 0) {
        document.getElementById(id).value = dieType;
      } else if (stat > 0) {
        document.getElementById(id).value = dieType + "+" + stat;
      }
    }
  
  // Create stat modifiers for under the ability scores
  function stat_modifier_generator(stat) {
    if (3 >= stat) {
      statModifier = -4;
    } else if (5 >= stat) {
      statModifier = -3;
    } else if (7 >= stat) {
      statModifier = -2;
    } else if (9 >= stat) {
      statModifier = -1;
    } else if (11 >= stat) {
      statModifier = 0;
    } else if (13 >= stat) {
      statModifier = 1;
    } else if (15 >= stat) {
      statModifier = 2;
    } else if (17 >= stat) {
      statModifier = 3;
    } else if (19 >= stat) {
      statModifier = 4;
    } else if (20 >= stat) {
      statModifier = 5;
    }
    return statModifier;
  }
  
  // Function to choose a random language, with a small chance for exotic languages
  function generate_morality(higherDecimal, lowerDecimal) {
    if (!alignmentChecker) {
        let randomValue = Math.random();

        if (randomValue >= higherDecimal) {
            alignment.push(alineamientos[2]); // "Neutral Bueno"
            random_by_length(goodIdeals, ideals, "form100_1");
        } else if (higherDecimal >= randomValue && lowerDecimal >= Math.random()) {
            alignment.push(alineamientos[8]); // "Neutral Malvado"
            random_by_length(evilIdeals, ideals, "form100_1");
        } else if (randomValue >= lowerDecimal) {
            alignment.push(alineamientos[5]); // "Neutral"
            random_by_length(neutralIdeals, ideals, "form100_1");
        } else {
            alignment.push(alineamientos[8]); // "Neutral Malvado"
            random_by_length(evilIdeals, ideals, "form100_1");
        }
    }
}
  function defectos_generador(balance, morality) {
    alignmentChecker = true;
    alignment.push(balance);
    if (balance === "Legal") {
      return random_by_length(lawfulFlaws, flaws, "form99_1");
    } else if (balance === "Neutral") {
      return random_by_length(neutralFlaws, flaws, "form99_1");
    } else if (balance === "Caótico") {
      return random_by_length(chaoticFlaws, flaws, "form99_1");
    }
    alignment.push(morality);
    if (morality === "Bueno") {
      return random_by_length(goodIdeals, ideals, "form100_1");
    } else if (morality === "Neutral") {
      return random_by_length(neutralIdeals, ideals, "form100_1");
    } else if (morality === "Malvado") {
      return random_by_length(evilIdeals, ideals, "form100_1");
    }
  }
}