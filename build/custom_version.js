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
    const checkboxManager = new CheckboxImage(false);
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
  var armor = {};
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
    raceID = obtenerIndice(race);
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
  morality = morality[1].toString();
  defectos_generador(balance, morality);

  
  strength = 0;
  dexterity = 0;
  constitution = 0;
  intelligence = 0;
  wisdom = 0;
  charisma = 0;

  assign_stats(stat1, stat2, stat3, stat4, stat5, stat6, newClassSelected+" "+nivel);

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
  }











  console.log(newBackground1,newClassSelected,nivel,race,balanceAndMorality,race);
  function obtenerIndice(raza) {
    return razas.indexOf(raza);
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