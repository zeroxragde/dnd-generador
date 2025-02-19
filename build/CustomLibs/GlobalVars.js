
const razas=[
    "Aleatorio",//0
    "Dracónido",//1
    "Dracónido Negro",//2
    "Dracónido Azul",//3
    "Dracónido de Latón",//4
    "Dracónido de Bronce",//5
    "Dracónido de Cobre",//6
    "Dracónido Dorado",//7
    "Dracónido Verde",//8
    "Dracónido Rojo",//9
    "Dracónido Plateado",//10
    "Dracónido Blanco",//11
    "Enano",//12
    "Enano de Colina",//13
    "Enano de Montaña",//14
    "Elfo",//15
    "Elfo Oscuro (Drow)",//16
    "Alto Elfo",//17
    "Elfo del Bosque",//18
    "Gnomo",//19
    "Gnomo del Bosque",//20
    "Gnomo de Roca",//21
    "Semielfo",//22
    "Semiorco",//23
    "Mediano",//24
    "Mediano Piesligeros",//25
    "Mediano Recio",//26
    "Humano",//27
    "Humano (Calishita)",//28
    "Humano (Chondathan)",//29
    "Humano (Damarano)",//30
    "Humano (Illuskan)",//31
    "Humano (Mulan)",//32
    "Humano (Rashemi)",//33
    "Humano (Shou)",//34
    "Humano (Tethyriano)",//35
    "Humano (Turami)",//36
    "Tiefling"//37
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
// Definimos qué consideramos “estándar” y qué “exótico” en D&D
const idiomasEstandar = [
  "Comun",
  "Enano",
  "Élfico",
  "Gigante",
  "Gnómico",
  "Goblin",
  "Mediano",
  "Orco"
];

const idiomasExoticos = [
  "Abisal",
  "Celestial",
  "Dracónico",
  "Lengua Profunda",     // Deep Speech
  "Infernal",
  "Primordial",
  "Silvano",             // Sylvan
  "Común Subterráneo",   // Undercommon
  "Ancestral"            // Ajusta según tu homebrew
];

// Personality is from race
var toughTraits = [
    "No me arrodillo ante ningún hombre que considere indigno.",
    "Camino mi propio sendero, sin importar cómo otros lo critiquen.",
    "Me encanta un buen insulto, incluso si es dirigido a mí.",
    "Fui golpeado cuando era joven, así que actúo rudo para ocultar que estoy herido.",
    "Cuido de aquellos que me importan como si fueran cachorros.",
    "Aplastaré a mis enemigos, con furia y poder.",
    "No pongo valor en la gente adinerada o de modales refinados.",
    "El dinero y los modales no te salvarán de un búho oso hambriento.",
    "Trabajo duro para poder divertirme a lo grande cuando el trabajo termina.",
    "Tengo un sentido del humor crudo.",
    "Soy seguro de mí mismo y asertivo.",
  ];
  
  var softTraits = [
    "No hay nada que me guste más que un buen misterio.",
    "Mis amigos saben que pueden contar conmigo, pase lo que pase.",
    "Enfrento los problemas de frente. Una solución simple y directa es el mejor camino al éxito.",
    "Hago muchas preguntas.",
    "Me gusta caminar cuando necesito pensar y ODIO estar atado o restringido.",
    "Soy metódico, calculador y exigente... a menos que haya bebido algo, lo que sea.",
    "Me esfuerzo mucho por lucir siempre lo mejor posible y seguir las últimas modas.",
    "Me gusta conocer gente nueva, me acercaré a cualquiera, en cualquier momento y lugar.",
    "Puedo encontrar un terreno común entre cualquier persona, incluso los enemigos más feroces.",
    "Veo presagios en cada evento y acción.",
  ];
  // Ideals are from good/neutral/chaotic
  var goodIdeals = [
    "Siempre trato de ayudar a los necesitados, sin importar el costo personal.",
    "Creo que cosas hermosas como el arte hacen del mundo un lugar mejor.",
    "Me siento agradecido por mi vida y necesito que importe.",
    "Los pequeños e inocentes deben ser cuidados y protegidos.",
    "Intento ayudar a quienes lo necesitan, sin importar el costo.",
    "Debo enmendar lo que la gente asume que hice.",
    "Cada día es una nueva oportunidad para hacer el bien en el mundo.",
    "Ayudar a los demás es lo más importante en el mundo.",
    "Mis poderes pueden protegernos de todos los males en todos los mundos.",
    "Hay todo tipo de seres a nuestro alrededor; mi deber es evitar que dañen a la gente buena.",
  ];
  
  var neutralIdeals = [
    "Respeta a aquellos que son diferentes y deja que todos sean quienes deseen ser.",
    "Hay tanto por ver y aprender.",
    "Todos tienen cargas que soportar.",
    "Todos merecen sentirse seguros.",
    "Come o serás comido.",
    "Las personas merecen ser juzgadas por sus acciones, no por las de alguien más.",
    "Nunca debo perder el control sobre mí mismo nuevamente, no después de la última vez.",
    "Si sigo mi propio camino, me convertiré en quien estaba destinado a ser.",
    "Estoy obsesivamente enfocado en descubrir mi pasado.",
    "Mejorarse a uno mismo es esencial en la vida.",
  ];
  var evilIdeals = [
    "Mi opinión es la única que importa y los demás deben reforzar mi importancia.",
    "El mundo me debe algo, y tomaré lo que merezco.",
    "La única forma de superar la adversidad es ser poderoso.",
    "No muestro piedad a aquellos que se oponen a mí.",
    "Soy un monstruo que mata monstruos.",
    "Tomaré lo que quiero o necesite.",
    "Haré justicia por cualquier agravio contra mi grupo o contra mí.",
    "Si no atacas primero, mueres.",
    "Siempre tengo un plan para salvarme a mí mismo o a mi grupo, sin importar los daños colaterales.",
    "Mis gustos refinados merecen ser atendidos.",
  ];
  
  var rangerBonds = [
    "Le debo una gran deuda a mi gremio por forjarme en la persona que soy hoy.",
    "Mi terreno es mi hogar, y lucharé para defenderlo.",
    "Nadie más debería soportar las dificultades que yo he pasado.",
    "Mi pipa es mi cosa favorita en el mundo. Básicamente fumaré cualquier cosa en ella. Es tan relajante.",
    "El alcohol lo uso para adormecer el dolor de mis pecados pasados que me atormentan casi siempre.",
    "¿Gemelos? ¡Bah! ¡Soy quintillizo!",
    "Mi mejor amigo nunca volverá a caminar por culpa de una batalla que provoqué. Ahora elijo mis peleas con mucho más cuidado.",
    "Escuché de un lugar perfecto para mí, pero parece que siempre viajo en la dirección opuesta.",
    "Mi arma me fue dada para proteger mi tierra, y pienso hacerlo, contra cualquier amenaza.",
  ];
  
  var rogueBonds = [
    "Engañé a la persona equivocada y debo trabajar para asegurarme de que nunca se cruce conmigo ni con quienes me importan.",
    "Le debo todo a mi mentor, una persona horrible que probablemente está pudriéndose en la cárcel.",
    "Una persona poderosa mató a alguien que amo. Algún día pronto, me vengaré.",
    "Me convertiré en el mejor ladrón que haya existido.",
    "Patrocino un orfanato para evitar que otros pasen por lo que yo tuve que soportar.",
    "Escapé de la pobreza una vez robándole a alguien importante, y me buscan por eso.",
    "Fui resucitado después de morir, pero quien hizo el ritual sigue siendo un misterio para mí.",
    "Maté a un miembro de un gremio de ladrones poderoso en una disputa por botín, y ahora me cazan.",
    "Robé a una familia noble extremadamente poderosa y buscan recuperar su preciada reliquia a toda costa.",
    "Hice lo que tenía que hacer para sobrevivir. Espero no tener que hablar nunca más de lo que hice.",
  ];
  
  var barbarianBonds = [
    "Haré cualquier cosa para demostrarme superior a mi rival odiado.",
    "Trabajé la tierra, amo la tierra y la protegeré.",
    "Mis herramientas son símbolos de mi vida pasada, y las llevo para no olvidar mis raíces.",
    "Ojalá mi amor de la infancia hubiera venido conmigo a perseguir mi destino.",
    "Enfrentaré cualquier desafío para ganar la aprobación de mi familia.",
    "La gente común debe verme como un héroe del pueblo.",
    "Es mi deber tener hijos para sostener a mi tribu.",
    "Alguien me salvó la vida en el campo de batalla. Hasta el día de hoy, nunca abandonaré a un amigo.",
    "Aquellos que luchan a mi lado son los que valen la pena morir por ellos.",
    "Un ser querido es un hombre lobo, y haré lo que sea necesario para protegerlo y guardar su secreto.",
  ];
  
  var wizardBonds = [
    "Estoy tratando de pagar una vieja deuda que le debo a un benefactor generoso.",
    "Tengo un texto antiguo que contiene secretos terribles que no deben caer en las manos equivocadas.",
    "Trabajo para desenterrar una biblioteca que ha estado oculta durante los últimos mil años.",
    "La obra de mi vida es una serie de tomos relacionados con un campo específico del conocimiento.",
    "Tengo una deuda que nunca podré pagar a la persona que se interesó en mí y, más importante aún, me tuvo lástima.",
    "Sufro una enfermedad exótica que me obliga a comer o beber algo inusual cada día.",
    "He sido condenado por un crimen que no cometí, y soy un fugitivo de mi propia tierra.",
    "Por casualidad, logré matar a un asesino que me tenía como objetivo. Ahora siempre estoy en busca del próximo ataque.",
    "Sigo el ejemplo de un gran ídolo, a quien modelo mi trabajo y mi estilo.",
    "Creo que puedo desbloquear los secretos de magias que se perdieron hace mucho tiempo.",
  ];
  
  var warlockBonds = [
    "Algo importante me fue arrebatado, y planeo recuperarlo.",
    "Nada es más importante que los otros miembros de mi familia.",
    "Tengo un texto antiguo que contiene secretos terribles que no deben caer en manos equivocadas.",
    "Vendí mi alma por poder. Espero hacer suficientes buenas acciones para recuperarla.",
    "La estatua en mi casa es en realidad mi hermana petrificada, a quien he jurado devolver a la carne.",
    "Mi padre vendió su alma a algún tipo de diablo para salvarme de una enfermedad mortal en la infancia.",
    "Odio a alguien, lo odio tanto que el odio se extiende a su familia y amigos.",
    "Tatuajes distintivos adornan mis brazos, y debo mantenerlos cubiertos y ocultos para que su secreto no me lleve a la muerte.",
    "Tengo una vendetta personal contra una persona muy popular. Solo vivo para ver su reputación y fortuna destruidas.",
    "Renuncié a mi posesión más preciada para asegurar un trato. Todavía busco una forma de recuperarla.",
  ];
  var clericBonds = [
    "Moriría por recuperar una reliquia antigua de mi fe que se perdió hace mucho tiempo.",
    "Le debo mi vida al sacerdote que me acogió cuando mis padres murieron.",
    "Haré cualquier cosa para proteger el templo donde serví.",
    "Busco preservar un texto sagrado que mis enemigos consideran herético y quieren destruir.",
    "Sufro terribles visiones de un desastre inminente y haré lo que sea para prevenirlo.",
    "Mi tío es un miembro de alto rango en un templo importante, que no es de mi deidad.",
    "Puede que nunca hayas oído hablar de mi templo, pero es el lugar más precioso del mundo.",
    "Mi patrón me sacó de la miseria y me trajo a esta vida. Le debo todo.",
    "Mi reliquia me fue entregada por un extraño en el momento más bajo de mi vida. Obtengo fuerza de ella.",
    "Mi vida es una serie de señales de mi deidad.",
  ];
  
  var bardBonds = [
    "En algún lugar, tengo un hijo que no me conoce. Estoy haciendo el mundo mejor para él o ella.",
    "Mi instrumento es mi posesión más preciada y me recuerda a alguien que amo.",
    "Alguien robó mi instrumento preciado, y algún día lo recuperaré.",
    "Quiero ser famoso, cueste lo que cueste.",
    "Haría cualquier cosa por los otros miembros de mi antigua compañía.",
    "Algo de mi infancia me hizo temer a la oscuridad. Hasta el día de hoy, lucho por entrar en cuevas u otros espacios oscuros y cerrados.",
    "No tengo recuerdos de más allá de unos pocos años. A veces tengo destellos de mi pasado... ansío saber quién era.",
    "Cuando salgo, nunca lo hago sin el 'grupo'. Juntos somos el alma de la fiesta, y sin ellos, todo es sombrío.",
    "Tengo un hermano responsable, a quien amo por sacarme de problemas y a quien odio por siempre eclipsarme.",
    "Había una historia que leía una y otra vez, y he modelado toda mi vida en base a ella.",
    "No puedo tratar a las mujeres igual que a los hombres, son demasiado hermosas.",
  ];
  
  var paladinBonds = [
    "Todo lo que hago es por el pueblo común.",
    "Provengo de una familia noble, y algún día recuperaré mis tierras y mi título de quienes me los robaron.",
    "Un noble orgulloso me dio una terrible paliza, y me vengaré de cualquier matón que encuentre.",
    "Protejo a aquellos que no pueden protegerse a sí mismos.",
    "Lucho por aquellos que no pueden luchar por sí mismos.",
    "Algún día, llevaré con orgullo el tabardo de mi orden nuevamente.",
    "Mi tatuaje simboliza mi pertenencia a una fraternidad secreta de caballeros que creí exterminada, excepto por mí.",
    "Cuando casi morí, tuve visiones de los Nueve Infiernos. Ahora busco expiar los pecados de mi pasado.",
    "En su juventud, mi padre huyó de una gran batalla y ha vivido bajo el insulto de 'cobarde'. Espero demostrar que eso es una mentira.",
    "Un sinvergüenza robó la reliquia más preciada de mi familia, y planeo recuperarla.",
  ];
  
  var sorcererBonds = [
    "Busco riqueza para asegurar el amor de alguien.",
    "He estado buscando toda mi vida la respuesta a una pregunta específica.",
    "En una ciudad portuaria, tengo un amor cuyos ojos casi me arrebataron del mundo.",
    "Me estafaron en mi parte justa de las ganancias, y quiero lo que me corresponde.",
    "No conozco mi verdadero nombre. Uso un alias, pero busco descubrir los secretos de mi propio pasado.",
    "La marca de nacimiento en mi frente me señala como la resolución de una antigua profecía de mi pueblo.",
    "Estoy impulsado por sueños nocturnos sobre una figura misteriosa que repite una frase ominosa.",
    "De niño, mi gemelo se sacrificó a un diablo para que yo pudiera vivir, y ahora me atormenta en sueños con un motivo que aún no comprendo.",
    "Mi madre es una bruja, despreciada y expulsada de nuestro pueblo. Siempre he sentido que es mi deber protegerla.",
    "Busco encontrar mi verdadera herencia, desde que supe de ella.",
  ];
  
  var monkBonds = [
    "Alguien que amaba murió por un error que cometí. Eso nunca volverá a suceder.",
    "Nada es más importante que los otros miembros de mi orden.",
    "Todavía busco la iluminación que perseguí en mi aislamiento, y aún me elude.",
    "Entré en aislamiento porque amaba a alguien que no podía tener.",
    "Si mi descubrimiento saliera a la luz, podría traer la ruina al mundo.",
    "Mi aislamiento me dio una gran visión de un gran mal que solo yo puedo destruir.",
    "Trabajo para preservar un monasterio.",
    "Tengo vívidas y repetidas visiones de la muerte de alguien, y aunque nunca he conocido a esta persona, de alguna manera sé que lo haré.",
    "En el este, veo una luz dorada que emerge de los cielos a intervalos inciertos. Nadie más parece poder ver esta luz.",
    "Durante mi iluminación, se me dijo en un sueño que encontrara a un grupo particular de personas y los siguiera hasta los confines del mundo.",
  ];
  
  var druidBonds = [
    "Entré en aislamiento para esconderme de aquellos que podrían estar cazándome. Algún día debo enfrentarlos.",
    "Si mi descubrimiento saliera a la luz, podría traer la ruina al mundo.",
    "Una herida en la naturaleza virgen de mi hogar es una herida para mí.",
    "Traeré una terrible ira sobre los malhechores que destruyeron mi tierra natal.",
    "Soy el último de mi tribu, y depende de mí asegurar que sus nombres entren en la leyenda.",
    "Su tarántula mascota 'Karace' vive en su cabello y le teje seda que usa para hacer atrapasueños.",
    "Mi mejor amigo fue experimentado por un mago, y aún sufre hasta el día de hoy. Deseo encontrar una manera de curarlo.",
    "Hay un antiguo amigo al que lastimé terriblemente. Quiero arreglarlo, pero no me atrevo a acercarme por temor a empeorarlo.",
    "Cuando estaba aprendiendo mis poderes druídicos, dañé gravemente el árbol sagrado de mi clan que alberga a nuestra deidad.",
    "Mi foco druídico ha sido transmitido durante diez generaciones, debo protegerlo y, con él, a mi pueblo.",
  ];
  
  var fighterBonds = [
    "Idolatro a un héroe de los viejos cuentos y mido mis hazañas contra las suyas.",
    "Tengo una familia, pero no tengo idea de dónde están. Algún día, espero volver a verlos.",
    "Mi tribu es lo más importante en mi vida, incluso cuando están lejos de mí.",
    "Todavía daría mi vida por las personas con las que fui a la guerra.",
    "Mi honor es mi vida.",
    "Nunca olvidaré la aplastante derrota que sufrió mi tribu ni los enemigos que la infligieron.",
    "Mi arma es una reliquia familiar, es, con mucho, mi posesión más preciada.",
    "Llevo tantas armas como puedo, en caso de que pierda una.",
    "Mi antepasado fue bastante famoso, y deseo eclipsar su legado con el mío.",
    "Fui criado como rehén de un clan enemigo, donde me hice amigo del heredero del clan enemigo.",
  ];
  
  var lawfulFlaws = [
    "Tengo una 'señal' que revela cuándo estoy mintiendo.",
    "Tengo problemas para ocultar mis verdaderos sentimientos.",
    "Soy rápido para asumir que alguien está tratando de engañarme.",
    "Nadie debe enterarse de que una vez robé dinero de mi pueblo.",
    "Mataría por adquirir un título noble.",
    "Soy lento para confiar en miembros de otras razas.",
    "Ignoro soluciones obvias a favor de las complicadas.",
    "Sigo órdenes, incluso si creo que están equivocadas.",
    "Al tocar un arma nueva por primera vez, tira un d100. Si obtienes 100, el arma estalla en llamas y se convierte en cenizas.",
    "Vejiga pequeña.",
  ];
  
  var neutralFlaws = [
    "Soy un tonto para un rostro bonito.",
    "Dejo que mi necesidad de ganar discusiones opaque las amistades y la armonía.",
    "Me gusta guardar secretos y no los compartiré con nadie.",
    "Creo en secreto que todos están por debajo de mí.",
    "Tengo un deseo insaciable por placeres carnales.",
    "Creo que todos los aldeanos y habitantes de la ciudad están en mi contra.",
    "No puedo guardar un secreto para salvar mi vida, ni la de nadie más.",
    "Mi orgullo probablemente me llevará a mi destrucción.",
    "Daltónico.",
    "Soy grandioso, creo que todo se trata de mí al final, sin importar cuán no relacionado esté.",
  ];
  
  var chaoticFlaws = [
    "Prefiero matar a alguien mientras duerme que pelear limpiamente.",
    "No puedo resistirme a molestar a personas que son más poderosas que yo.",
    "Si hay un plan, lo olvidaré. Si no lo olvido, lo ignoraré.",
    "Un escándalo me impide volver a casa. Ese tipo de problemas parecen seguirme a donde vaya.",
    "Una vez satiricé a un noble que aún quiere mi cabeza. Fue un error que probablemente repetiré.",
    "A pesar de mis mejores esfuerzos, soy poco confiable para mis amigos.",
    "El tirano que gobierna mi tierra no se detendrá ante nada para verme muerto.",
    "Con demasiada frecuencia escucho insultos y amenazas veladas en cada palabra que se me dirige, y soy rápido para enojarme.",
    "No hay lugar para la precaución en una vida vivida al máximo.",
    "Narro mis propios pensamientos.",
  ];
  