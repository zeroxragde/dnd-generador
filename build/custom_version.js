
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
const idiomas = [
    "Comun",
    "Enano",
    "Élfico",
    "Gigante",
    "Gnómico",
    "Goblin",
    "Mediano",
    "Orco",
    "Abisal",
    "Celestial",
    "Dracónico",
    "Lengua Profunda",
    "Infernal",
    "Primordial",
    "Silvano",
    "Común Subterráneo",
    "Ancestral"
];
// Objeto que contiene nombres de armaduras y sus valores
const armor = {
lightArmor: {
    padded: {
    armorname: "Armadura acolchada",
    armorAC: 11 + dexterityModifier,
    },
    leather: {
    armorname: "Armadura de cuero",
    armorAC: 11 + dexterityModifier,
    },
    studdedleather: {
    armorname: "Cuero tachonado",
    armorAC: 12 + dexterityModifier,
    },
},
mediumArmor: {
    hide: {
    armorname: "Armadura de piel",
    armorAC: 12 + dexterityModifier,
    },
    chainshirt: {
    armorname: "Camiseta de malla",
    armorAC: 13 + dexterityModifier,
    },
    scalemail: {
    armorname: "Cota de escamas",
    armorAC: 14 + dexterityModifier,
    },
    breastplate: {
    armorname: "Coraza",
    armorAC: 14 + dexterityModifier,
    },
    halfplate: {
    armorname: "Media armadura",
    armorAC: 15 + dexterityModifier,
    },
    Escudo: {
    armorname: "Escudo",
    armorAC: 2,
    },
},
heavyArmor: {
    ringmail: {
    armorname: "Cota de anillas",
    armorAC: 14,
    },
    chainmail: {
    armorname: "Cota de malla",
    armorAC: 16,
    },
    splint: {
    armorname: "Armadura de bandas",
    armorAC: 17,
    },
    plate: {
    armorname: "Armadura de placas",
    armorAC: 18,
    },
},
};


// Array that contains list of armas simples
const simpleWeapons = [
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

// Array that contains list of armas marciales
const martialWeapons = [
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
"Tridentee",
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
    "Chirimía"
];

const dragonAliento={
    "armasAliento": [
      {
        "idRaza": 2, // Dracónido Negro
        "color": "Negro",
        "damageType": "Ácido",
        "area": "línea de 5 por 30 pies",
        "savingThrow": "destreza",
        "descripcion": "Ácido Arma de Aliento: Puedes usar tu acción para exhalar tu Ascendencia Dracónica en una línea de 5 por 30 pies. Cuando usas tu arma de aliento, cada criatura en el área de la exhalación debe hacer una tirada de salvación de destreza. La DC para esta tirada de salvación es {DC}. Una criatura recibe 2d6 de daño de ácido en una salvación fallida, y la mitad de daño en una salvación exitosa."
      },
      {
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
const caracteristicasRazialesFisicas={
    "razas": [
      {
        "id": 2,
        "nombre": "Dracónido Negro",
        "edad": "15-40 años",
        "altura": "6'0\" - 6'8\"",
        "piel": ["Negro Marfil", "Negro Ónix", "Negro Carbón", "Negro Perlado", "Negro"],
        "cabello": ["", "", "", ""],
        "ojos": ["Violeta", "Azul", "Rojo", "Morado"],
        "peso": "200-340 lbs",
        "armaAliento": {
          "tipo": "Ácido",
          "area": "línea de 5 por 30 pies",
          "tiradaSalvacion": "destreza"
        }
      },
      {
        "id": 3,
        "nombre": "Dracónido Azul",
        "edad": "15-40 años",
        "altura": "6'0\" - 6'8\"",
        "piel": ["Azul", "Azul Celeste", "Azul Marino", "Azul Pálido", "Azul Real"],
        "cabello": ["", "", "", ""],
        "ojos": ["Violeta", "Azul", "Rojo", "Morado"],
        "peso": "200-340 lbs",
        "armaAliento": {
          "tipo": "Relámpago",
          "area": "línea de 5 por 30 pies",
          "tiradaSalvacion": "destreza"
        }
      },
      {
        "id": 4,
        "nombre": "Dracónido de Latón",
        "edad": "15-40 años",
        "altura": "6'0\" - 6'8\"",
        "piel": ["Latón", "Latón Oxidado", "Cobre y Latón", "Latón Ardiente", "Latón"],
        "cabello": ["", "", "", ""],
        "ojos": ["Amarillo", "Verde", "Rojo", "Azul"],
        "peso": "200-340 lbs",
        "armaAliento": {
          "tipo": "Fuego",
          "area": "línea de 5 por 30 pies",
          "tiradaSalvacion": "destreza"
        }
      },
      {
        "id": 5,
        "nombre": "Dracónido de Bronce",
        "edad": "15-40 años",
        "altura": "6'0\" - 6'8\"",
        "piel": ["Bronce", "Oro Viejo", "Bronce Oscuro", "Bronce Arenoso", "Bronce"],
        "cabello": ["", "", "", ""],
        "ojos": ["Amarillo", "Verde", "Rojo", "Azul"],
        "peso": "200-340 lbs",
        "armaAliento": {
          "tipo": "Relámpago",
          "area": "línea de 5 por 30 pies",
          "tiradaSalvacion": "destreza"
        }
      },
      {
        "id": 6,
        "nombre": "Dracónido de Cobre",
        "edad": "15-40 años",
        "altura": "6'0\" - 6'8\"",
        "piel": ["Cobre", "Bronce y Cobre", "Cobre Oxidado", "Cobre Ardiente", "Cobre"],
        "cabello": ["", "", "", ""],
        "ojos": ["Amarillo", "Verde", "Rojo", "Azul"],
        "peso": "200-340 lbs",
        "armaAliento": {
          "tipo": "Ácido",
          "area": "línea de 5 por 30 pies",
          "tiradaSalvacion": "destreza"
        }
      },
      {
        "id": 7,
        "nombre": "Dracónido Dorado",
        "edad": "15-40 años",
        "altura": "6'0\" - 6'8\"",
        "piel": ["Amarillo Dorado", "Oro", "Vara Dorada", "Oro en Pepita", "Oro"],
        "cabello": ["", "", "", ""],
        "ojos": ["Amarillo", "Verde", "Rojo", "Azul"],
        "peso": "200-340 lbs",
        "armaAliento": {
          "tipo": "Fuego",
          "area": "cono de 15 pies",
          "tiradaSalvacion": "destreza"
        }
      },
      {
        "id": 8,
        "nombre": "Dracónido Verde",
        "edad": "15-40 años",
        "altura": "6'0\" - 6'8\"",
        "piel": ["Verde Mar", "Verde Bosque", "Jade", "Esmeralda", "Verde"],
        "cabello": ["", "", "", ""],
        "ojos": ["Amarillo", "Verde", "Rojo", "Azul"],
        "peso": "200-340 lbs",
        "armaAliento": {
          "tipo": "Veneno",
          "area": "cono de 15 pies",
          "tiradaSalvacion": "constitución"
        }
      },
      {
        "id": 9,
        "nombre": "Dracónido Rojo",
        "edad": "15-40 años",
        "altura": "6'0\" - 6'8\"",
        "piel": ["Escarlata", "Rojo y Naranja", "Rojo Sangre", "Rojo Cereza", "Rojo"],
        "cabello": ["", "", "", ""],
        "ojos": ["Amarillo", "Verde", "Rojo", "Azul"],
        "peso": "200-340 lbs",
        "armaAliento": {
          "tipo": "Fuego",
          "area": "cono de 15 pies",
          "tiradaSalvacion": "destreza"
        }
      },
      {
        "id": 10,
        "nombre": "Dracónido Plateado",
        "edad": "15-40 años",
        "altura": "6'0\" - 6'8\"",
        "piel": ["Plateado Hielo", "Plateado Líquido", "Plateado Lunar", "Plateado", "Plateado"],
        "cabello": ["", "", "", ""],
        "ojos": ["Violeta", "Azul", "Rojo", "Morado"],
        "peso": "200-340 lbs",
        "armaAliento": {
          "tipo": "Frío",
          "area": "cono de 15 pies",
          "tiradaSalvacion": "constitución"
        }
      },
      {
        "id": 11,
        "nombre": "Dracónido Blanco",
        "edad": "15-40 años",
        "altura": "6'0\" - 6'8\"",
        "piel": ["Nieve", "Blanco Fantasma", "Humo Blanco", "Blanco Escarcha", "Blanco"],
        "cabello": ["", "", "", ""],
        "ojos": ["Violeta", "Azul", "Rojo", "Morado"],
        "peso": "200-340 lbs",
        "armaAliento": {
          "tipo": "Frío",
          "area": "cono de 15 pies",
          "tiradaSalvacion": "constitución"
        }
      },
      {
        "id": 13,
        "nombre": "Enano de Colina",
        "edad": "50-250 años",
        "altura": "4'4\" - 5'0\"",
        "piel": ["Rojo Pálido", "Marrón Claro", "Marrón Oscuro", "Bronceado Oscuro", "Bronceado"],
        "cabello": ["Gris", "Negro", "Marrón", "Rojo"],
        "ojos": ["Negro", "Marrón", "Verde", "Azul"],
        "peso": "110-215 lbs",
        "armas": ["Hacha de batalla", "Hacha de batalla", "Hacha de mano", "Martillo ligero", "Martillo de guerra"],
        "armadura": [],
        "hp": "+1"
      },
      {
        "id": 14,
        "nombre": "Enano de Montaña",
        "edad": "50-250 años",
        "altura": "4'7\" - 5'3\"",
        "piel": ["Rojo Pálido", "Marrón Claro", "Marrón Oscuro", "Bronceado Oscuro", "Bronceado"],
        "cabello": ["Gris", "Negro", "Marrón", "Rojo"],
        "ojos": ["Negro", "Marrón", "Verde", "Azul"],
        "peso": "110-215 lbs",
        "armas": ["Hacha de batalla", "Hacha de batalla", "Hacha de mano", "Hacha de batalla", "Martillo de guerra"],
        "armadura": ["Armadura ligera", "Armadura media"],
        "hp": ""
      },
      {
        "id": 17,
        "nombre": "Alto Elfo",
        "edad": "100-600 años",
        "altura": "5'5\" - 6'1\"",
        "piel": ["Cobre", "Bronce", "Blanco Azulado", "Blanco Azulado", "Cobre Claro"],
        "cabello": ["Verde", "Azul", "Turquesa", "Plateado Blanco"],
        "ojos": ["Oro", "Plata", "Negro", "Verde"],
        "peso": "110-165 lbs",
        "armas": [],
        "armadura": [],
        "hp": ""
      },
      {
        "id": 18,
        "nombre": "Elfo del Bosque",
        "edad": "100-600 años",
        "altura": "5'5\" - 6'1\"",
        "piel": ["Cobre", "Bronce", "Cobre Avellana", "Bronceado Oscuro", "Cobre Claro"],
        "cabello": ["Marrón", "Negro", "Cobre", "Rubio"],
        "ojos": ["Verde", "Marrón", "Avellana", "Ámbar"],
        "peso": "110-165 lbs",
        "armas": ["Espada larga", "Espada corta", "Arco corto", "Arco largo"],
        "armadura": [],
        "hp": ""
      },
      {
        "id": 16,
        "nombre": "Elfo Oscuro (Drow)",
        "edad": "100-600 años",
        "altura": "5'4\" - 5'11\"",
        "piel": ["Negro", "Ónix", "Gris Oscuro", "Negro", "Plata Oscura"],
        "cabello": ["Blanco", "Rubio Claro", "Amarillo Pálido", "Blanco y Amarillo"],
        "ojos": ["Lila", "Plata", "Rosa", "Azul"],
        "peso": "100-155 lbs",
        "armas": ["Estoque", "Espada corta", "Ballesta de mano"],
        "armadura": [],
        "hp": ""
      },
      {
        "id": 25,
        "nombre": "Mediano Piesligeros",
        "edad": "20-100 años",
        "altura": "2'8\" - 3'5\"",
        "piel": ["Bronceado", "Bronceado Claro", "Pálido y Rubicundo", "Claro", "Justo"],
        "cabello": ["Marrón", "Marrón Arenoso", "Rubio Oscuro", "Castaño"],
        "ojos": ["Marrón", "Avellana", "Verde", "Marrón Claro"],
        "peso": "35-50 lbs",
        "tamaño": "pequeño",
        "armas": [],
        "armadura": [],
        "hp": ""
      },
      {
        "id": 26,
        "nombre": "Mediano Recio",
        "edad": "20-100 años",
        "altura": "2'10\" - 3'7\"",
        "piel": ["Pálido", "Bronceado Claro", "Pálido y Rubicundo", "Claro", "Justo y Rubicundo"],
        "cabello": ["Marrón", "Marrón Arenoso", "Marrón Oscuro", "Castaño"],
        "ojos": ["Marrón", "Avellana", "Verde", "Marrón Claro"],
        "peso": "37-52 lbs",
        "tamaño": "pequeño",
        "armas": [],
        "armadura": [],
        "hp": ""
      },
      {
        "id": 20,
        "nombre": "Gnomo del Bosque",
        "edad": "40-250 años",
        "altura": "2'10\" - 3'7\"",
        "piel": ["Bronceado", "Bronceado Claro", "Marrón", "Bronceado Oscuro", "Marrón Claro"],
        "cabello": ["Rubio", "Marrón Arenoso", "Rubio Oscuro", "Marrón Claro"],
        "ojos": ["Azul Hielo", "Azul Marino", "Azul Pálido", "Azul Brillante"],
        "peso": "35-50 lbs",
        "tamaño": "pequeño",
        "armas": [],
        "armadura": [],
        "hp": ""
      },
      {
        "id": 21,
        "nombre": "Gnomo de Roca",
        "edad": "40-250 años",
        "altura": "2'11\" - 3'9\"",
        "piel": ["Bronceado", "Bronceado Claro", "Marrón", "Bronceado Oscuro", "Marrón Claro"],
        "cabello": ["Rubio", "Marrón Arenoso", "Rubio Oscuro", "Marrón Claro"],
        "ojos": ["Azul Hielo", "Azul Marino", "Azul Pálido", "Azul Brillante"],
        "peso": "37-52 lbs",
        "tamaño": "pequeño",
        "armas": [],
        "armadura": [],
        "hp": ""
      },
      {
        "id": 22,
        "nombre": "Semielfo",
        "edad": "20-120 años",
        "altura": "5'5\" - 6'2\"",
        "piel": ["Cobre", "Justo", "Pálido", "Bronceado Oscuro", "Cobre Claro"],
        "cabello": ["Marrón Verdoso", "Negro Azulado", "Blanco Rojizo", "Rubio Plateado"],
        "ojos": ["Oro", "Rosa", "Lila", "Verde"],
        "peso": "120-205 lbs",
        "armas": [],
        "armadura": [],
        "hp": ""
      },
      {
        "id": 23,
        "nombre": "Semiorco",
        "edad": "15-40 años",
        "altura": "6'0\" - 7'1\"",
        "piel": ["Grisáceo", "Gris Verdoso", "Gris", "Gris Bronceado", "Grisáceo"],
        "cabello": ["Marrón Claro", "Negro", "Castaño", "Marrón Oscuro"],
        "ojos": ["Verde", "Azul", "Marrón", "Negro"],
        "peso": "170-265 lbs",
        "armas": [],
        "armadura": [],
        "hp": ""
      },
      {
        "id": 37,
        "nombre": "Tiefling",
        "edad": "20-55 años",
        "altura": "5'5\" - 6'2\"",
        "piel": ["Rojo Ladrillo", "Bronceado Rojizo", "Granate", "Rojo Sangre", "Rojo Cobrizo"],
        "cabello": ["Morado Oscuro", "Negro", "Rojo Oscuro", "Azul Oscuro"],
        "ojos": ["Blanco", "Negro", "Rojo", "Plata"],
        "peso": "140-245 lbs",
        "armas": [],
        "armadura": [],
        "hp": ""
      }
    ]
  };

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


  

  
var idiomaSelect;
document.addEventListener("DOMContentLoaded", function () {

    loadHtmlTemplate();
    loadSelects();
    //EVENTO DE IDIOMAS
    let boton = document.querySelector("#addIdioma"); // Selecciona el botón justo después del div
    if (boton) {
        boton.addEventListener("click", function() {
            agregarIdiomaSeleccionado();
        });
    } else {
        console.error("El botón no se encontró.");
    }
    
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
        })
        .catch(error => console.error("Error al cargar el HTML:", error));
}
/**
 * Agrega los idiomas seleccionados al contenido de un textarea específico.
 * 
 * Esta función obtiene los valores seleccionados de un elemento de selección de idiomas
 * y los agrega a un textarea que contiene una lista de idiomas. Si el textarea ya contiene
 * una lista de idiomas, se agregan los nuevos idiomas sin duplicados. Si no, se crea una
 * nueva lista de idiomas en el textarea.
 * 
 * @function
 * @name agregarIdiomaSeleccionado
 * 
 * @returns {void}
 */
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
  var raceChecker = void 0;
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
  var profsAndLangs = {
    languages: [],
    armorProficiencies: [],
    weaponProficiencies: [],
    toolProficiencies: [],
  };

}