// Initialize stats and stats array
var stats = [];
var size = "";
var strength = 0;
var dexterity = 0;
var constitution = 0;
var intelligence = 0;
var wisdom = 0;
var charisma = 0;
var min = 0;
var max = 0;
var racialLanguage1 = void 0;
var racialLanguage2 = void 0;
var randomStatArray = [];
var stat1 = stats[0];
var stat2 = stats[1];
var stat3 = stats[2];
var stat4 = stats[3];
var stat5 = stats[4];
var stat6 = stats[5];
var newBackground1 = "";
var newBackground2 = 0;
var currentName = void 0;
var bardModifier = void 0;
var charName = void 0;
var statModifier = void 0;
var nameGenerator = {};

// Function to get random number depending on int
function get_random_number(int) {
  return Math.ceil(Math.random() * int);
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

// Initialize length of all arrays
var lengthOfCheckedRaceArray = 0;
var lengthOfCheckedBackgroundArray = 0;
var lengthOfCheckedClassArray = 0;
var lengthOfCheckedAlignmentArray = 0;

// To determine which version is being used this variable will be assigned a value at the end of each version's ()
var versionForChecking = 0;

function standard_version() {
  // STANDARD ARRAY STAT BLOCK

  // Standard array used for stats
  var standard_array = [15, 14, 13, 12, 10, 8];

  // Assign the standard array to a different variable
  var final_stat_array1 = standard_array;

  // Assign the shuffled array into individual variables
  stat1 = final_stat_array1[0];
  stat2 = final_stat_array1[1];
  stat3 = final_stat_array1[2];
  stat4 = final_stat_array1[3];
  stat5 = final_stat_array1[4];
  stat6 = final_stat_array1[5];

  // Assign individual stats to an array named stats
  stats = [stat1, stat2, stat3, stat4, stat5, stat6];

  // 1 means standard
  versionForChecking = 1;

  // Return stats array
  return stats;
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

  // Return stats array
  return 1;
}

function manual_version() {

    // Array con los IDs de los elementos
  const formIds = ["form83_1", "form84_1", "form82_1", "form86_1", "form81_1", "form85_1"];
  var continuar = true;
  // Iterar sobre cada ID y vaciar su valor
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

  // 2 means roll
  versionForChecking = 2;

  // Return stats array
  return 1;
}

function pointbuy_version() {
  // POINT BUY STAT BLOCK

  // Array of all possible combinations of the point buy system
  var array_of_stat_combos = [
    [15, 15, 15, 8, 8, 8],
    [15, 15, 14, 10, 8, 8],
    [15, 15, 14, 9, 9, 8],
    [15, 15, 13, 12, 8, 8],
    [15, 15, 13, 11, 9, 8],
    [15, 15, 13, 10, 10, 8],
    [15, 15, 13, 10, 9, 9],
    [15, 15, 12, 12, 9, 8],
    [15, 15, 12, 11, 10, 8],
    [15, 15, 12, 11, 9, 9],
    [15, 15, 12, 10, 10, 9],
    [15, 15, 11, 11, 11, 8],
    [15, 15, 11, 11, 10, 9],
    [15, 15, 11, 10, 10, 10],
    [15, 14, 14, 12, 8, 8],
    [15, 14, 14, 11, 9, 8],
    [15, 14, 14, 10, 10, 8],
    [15, 14, 14, 10, 9, 9],
    [15, 14, 13, 13, 9, 8],
    [15, 14, 13, 12, 10, 8],
    [15, 14, 13, 12, 9, 9],
    [15, 14, 13, 11, 11, 8],
    [15, 14, 13, 11, 10, 9],
    [15, 14, 13, 10, 10, 10],
    [15, 14, 12, 12, 11, 8],
    [15, 14, 12, 12, 10, 9],
    [15, 14, 12, 11, 11, 9],
    [15, 14, 12, 11, 10, 10],
    [15, 14, 11, 11, 11, 10],
    [15, 13, 13, 13, 11, 8],
    [15, 13, 13, 13, 10, 9],
    [15, 13, 13, 12, 12, 8],
    [15, 13, 13, 12, 11, 9],
    [15, 13, 13, 12, 10, 10],
    [15, 13, 13, 11, 11, 10],
    [15, 13, 12, 12, 12, 9],
    [15, 13, 12, 12, 11, 10],
    [15, 13, 12, 11, 11, 11],
    [15, 12, 12, 12, 12, 10],
    [15, 12, 12, 12, 11, 11],
    [14, 14, 14, 13, 9, 8],
    [14, 14, 14, 12, 10, 8],
    [14, 14, 14, 12, 9, 9],
    [14, 14, 14, 11, 11, 8],
    [14, 14, 14, 11, 10, 9],
    [14, 14, 14, 10, 10, 10],
    [14, 14, 13, 13, 11, 8],
    [14, 14, 13, 13, 10, 9],
    [14, 14, 13, 12, 12, 8],
    [14, 14, 13, 12, 11, 9],
    [14, 14, 13, 12, 10, 10],
    [14, 14, 13, 11, 11, 10],
    [14, 14, 12, 12, 12, 9],
    [14, 14, 12, 12, 11, 10],
    [14, 14, 12, 11, 11, 11],
    [14, 13, 13, 13, 13, 8],
    [14, 13, 13, 13, 12, 9],
    [14, 13, 13, 13, 11, 10],
    [14, 13, 13, 12, 12, 10],
    [14, 13, 13, 12, 11, 11],
    [14, 13, 12, 12, 12, 11],
    [14, 12, 12, 12, 12, 12],
    [13, 13, 13, 13, 13, 10],
    [13, 13, 13, 13, 12, 11],
    [13, 13, 13, 12, 12, 12],
  ];

  // Function to shuffle all the numbers in a random point buy combination into random order and return it
  function random_array() {
    var number = Math.floor(Math.random() * 65);
    var array = array_of_stat_combos[number];
    return array;
  }

  // Final array of the random point buy combination
  var final_stat_array2 = random_array();

  // Block of variables that are assigned a random stat each
  stat1 = final_stat_array2[0];
  stat2 = final_stat_array2[1];
  stat3 = final_stat_array2[2];
  stat4 = final_stat_array2[3];
  stat5 = final_stat_array2[4];
  stat6 = final_stat_array2[5];

  // Assign individual stats to an array named stats
  stats = [stat1, stat2, stat3, stat4, stat5, stat6];

  // 3 means pointbuy
  versionForChecking = 3;

  // Return stats array
  return stats;
}

// Function used to generate a new character
function generate_character(isManual = false) {
  // Name generator object that contains all names
  nameGenerator = {
    _races: {
      _dragonborn: {
        // 20 first, 20 last
        firstName: [
          "Arjhan",
          "Balasar",
          "Bharash",
          "Donaar",
          "Ghesh",
          "Heskan",
          "Kriv",
          "Medrash",
          "Mehen",
          "Nadarr",
          "Pandjed",
          "Patrin",
          "Rhogar",
          "Shamash",
          "Shedinn",
          "Tarhun",
          "Torinn",
          "Tever",
          "Arsiarth",
          "Griddry",
        ],
        lastName: [
          "Clethiallor",
          "Daardendrian",
          "Delmirev",
          "Drachedandion",
          "Fenkebradon",
          "Kepemolik",
          "Kerrhylon",
          "Kimbatuul",
          "Linxandalor",
          "Myastan",
          "Nemmonis",
          "Norixius",
          "Ophshtalajiir",
          "Prexjandilin",
          "Sheseliath",
          "Turnuroth",
          "Verthurgiesh",
          "Yarjerit",
          "Kezzayrth",
          "Froithudeom",
        ],
      },
      _dwarf: {
        // 20 first, 20 last
        firstName: [
          "Adrik",
          "Baern",
          "Bruenor",
          "Dain",
          "Delg",
          "Eberk",
          "Einkil",
          "Fargrim",
          "Kildrak",
          "Morgran",
          "Orsik",
          "Rurik",
          "Taklinn",
          "Thoradin",
          "Thorin",
          "Tordek",
          "Traubon",
          "Ulfgar",
          "Veit",
          "Vondal",
        ],
        lastName: [
          "Balderk",
          "Battlehammer",
          "Brawnanvil",
          "Dankil",
          "Fireforge",
          "Frostbeard",
          "Gorunn",
          "Holderhek",
          "Ironfist",
          "Loderr",
          "Lutgehr",
          "Rumnaheim",
          "Strakeln",
          "Torunn",
          "Ungart",
          "Onyxfury",
          "Brewfinger",
          "Caskborn",
          "Grayheart",
          "Mountainheart",
        ],
      },
      _elf: {
        // 20 first, 20 last
        firstName: [
          "Adran",
          "Aelar",
          "Aramil",
          "Arannis",
          "Aust",
          "Beiro",
          "Berrian",
          "Carric",
          "Enialis",
          "Erdan",
          "Erevan",
          "Galinndan",
          "Hadarai",
          "Heian",
          "Himo",
          "Immeral",
          "Ivellios",
          "Laucian",
          "Mindartis",
          "Paelias",
          "Peren",
          "Quarion",
          "Riardon",
          "Rolen",
          "Soveliss",
          "Thamior",
          "Tharivol",
        ],
        lastName: [
          "Amakiir",
          "Amastacia",
          "Galanodel",
          "Holimion",
          "Ilphelkiir",
          "Liadon",
          "Meliamne",
          "Nai'lo",
          "Siannodel",
          "Xiloscient",
          "Issisil",
          "Adynore",
          "Liazana",
          "Reyro",
          "Wynynore",
          "Inavyre",
          "Presnorin",
          "Ulaleth",
          "Daeyra",
          "Elkas",
        ],
      },
      _gnome: {
        // 20 first, 20 last
        firstName: [
          "Alston",
          "Brocc",
          "Burgell",
          "Dimble",
          "Eldon",
          "Erky",
          "Fonkin",
          "Frug",
          "Gerbo",
          "Gimble",
          "Glim",
          "Jebeddo",
          "Namfoodle",
          "Orryn",
          "Roondar",
          "Seebo",
          "Sindri",
          "Warryn",
          "Wrenn",
          "Zook",
        ],
        lastName: [
          "Beren",
          "Daergel",
          "Folkor",
          "Garrick",
          "Nackle",
          "Murnig",
          "Ningel",
          "Raulnor",
          "Scheppen",
          "Timbers",
          "Turen",
          "Kovocun",
          "Nudums",
          "Walmudluss",
          "Pewaed",
          "Gan",
          "Middlambuss",
          "Ebobbla",
          "Kreesp",
          "Fimebs",
        ],
      },
      _halfelf: {
        // 20 first, 20 last
        firstName: [
          "Ralmevik",
          "Shaumar",
          "Vladislak",
          "Aoth",
          "Bareris",
          "Kulenov",
          "Stor",
          "Glar",
          "Grigor",
          "Morn",
          "Adran",
          "Aelar",
          "Aramil",
          "Peren",
          "Quarion",
          "Riardon",
          "Theren",
          "Varis",
          "Equival",
          "Ailduin",
        ],
        lastName: [
          "Leoavor",
          "Tyrlamir",
          "Ilophanis",
          "Eirxiron",
          "Loraharice",
          "Caina",
          "Evenwood",
          "Greycastle",
          "Tallstag",
          "Tan",
          "Wan",
          "Khalid",
          "Mostana",
          "Chergoba",
          "Dyernina",
          "Keaphyra",
          "Iarfir",
          "Enrora",
          "Yllasatra",
          "Alexstraza",
        ],
      },
      _halforc: {
        // 20 first, 20 last
        firstName: [
          "Dench",
          "Feng",
          "Gell",
          "Henk",
          "Holg",
          "Imsh",
          "Keth",
          "Krusk",
          "Shump",
          "Thokk",
          "Romero",
          "Salazar",
          "Umbero",
          "Bai",
          "Chao",
          "Jia",
          "Ivor",
          "Kosef",
          "Mival",
          "Glar",
        ],
        lastName: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "Mhurren",
          "Ront",
          "Agosto",
          "Astorio",
          "Calabra",
          "Amblecrown",
          "Buckman",
          "Dundragon",
          "Basha",
          "Dumein",
          "Jassan",
          "Fezim",
        ],
      },
      _halfling: {
        // 20 first, 20 last
        firstName: [
          "Alton",
          "Ander",
          "Cade",
          "Corrin",
          "Eldon",
          "Errich",
          "Finnan",
          "Garret",
          "Lindal",
          "Lyle",
          "Merric",
          "Milo",
          "Osborn",
          "Perrin",
          "Reed",
          "Roscoe",
          "Wellby",
          "Adelbert",
          "Munderic",
          "Godun",
        ],
        lastName: [
          "Brushgather",
          "Goodbarrel",
          "Greenbottle",
          "High-hill",
          "Hilltopple",
          "Leagallow",
          "Tealeaf",
          "Thorngage",
          "Tosscobble",
          "Underbough",
          "Fleetfoot",
          "Gamwich",
          "Townsend",
          "Wanderfoot",
          "Hlothran",
          "Goodbody",
          "Hayward",
          "Bottomhill",
          "Brownlock",
          "Oakbottom",
        ],
      },
      _human: {
        // 20 first, 20 last
        firstName: [
          "Ehput-Ki",
          "Luth",
          "Malcer",
          "Randal",
          "Fai",
          "Anton",
          "Diero",
          "Khemed",
          "Mehmen",
          "Borivik",
          "Faurgar",
          "Jandar",
          "Kanithar",
          "Madislak",
          "On",
          "Shan",
          "Shui",
          "Wen",
          "Chernin",
          "Dotsk",
        ],
        lastName: [
          "Shemov",
          "Starag",
          "Brightwood",
          "Helder",
          "Hornraven",
          "Stormwind",
          "Ankhalab",
          "Anskuld",
          "Stayanoga",
          "Ulmokina",
          "Pisacar",
          "Ramondo",
          "Sum",
          "Chien",
          "Pashar",
          "Rein",
          "Greycastle",
          "Tallstag",
          "Marsk",
          "Nemetsk",
        ],
      },
      _tiefling: {
        // 20 first, 20 last
        firstName: [
          "Akmenos",
          "Amnon",
          "Barakas",
          "Damakos",
          "Ekemon",
          "Iados",
          "Kairon",
          "Leucis",
          "Melech",
          "Mordai",
          "Morthos",
          "Pelaios",
          "Skamos",
          "Therai",
          "Vanlor",
          "Daozon",
          "Uwaizihr",
          "Coasihr",
          "Clielhar",
          "Shuizalu",
        ],
        lastName: [
          "Art",
          "Carrion",
          "Chant",
          "Creed",
          "Despair",
          "Fear",
          "Glory",
          "Hope",
          "Ideal",
          "Music",
          "Nowhere",
          "Open",
          "Poetry",
          "Quest",
          "Random",
          "Reverence",
          "Sorrow",
          "Temerity",
          "Torment",
          "Weary",
        ],
      },
    },
    _backgroundsPhysicalMentalDexterous: [
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
      "Huérfano Callejero",
    ], // 18 total
    _backgroundsPhysical: [
      "Criminal",
      "Héroe Popular",
      "Gladiador",
      "Ermitaño",
      "Caballero",
      "Forastero",
      "Pirata",
      "Marinero",
      "Soldado",
    ], // 9 total
    _backgroundsMental: [
      "Acolito",
      "Artista",
      "Héroe Popular",
      "Artesano del Gremio",
      "Mercader del Gremio",
      "Ermitaño",
      "Noble",
      "Sabio",
    ], // 8 total
    _backgroundsDexterous: [
      "Charlatán",
      "Criminal",
      "Artista",
      "Héroe Popular",
      "Artesano del Gremio",
      "Mercader del Gremio",
      "Ermitaño",
      "Forastero",
      "Espía",
      "Huérfano Callejero",
    ], // 10 en total
    _backgroundsDexterousPhysical: [
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
      "Forastero",
      "Pirata",
      "Marinero",
      "Soldado",
      "Espía",
      "Huérfano Callejero",
    ], // 16 en total
    _backgroundsDexterousMental: [
      "Acólito",
      "Charlatán",
      "Criminal",
      "Artista",
      "Héroe Popular",
      "Artesano del Gremio",
      "Mercader del Gremio",
      "Ermitaño",
      "Noble",
      "Forastero",
      "Sabio",
      "Soldado",
      "Espía",
      "Huérfano Callejero",
    ], // 14 en total
    _backgroundsPhysicalMental: [
      "Acólito",
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
    ], // 15 en total
    _backgroundsNone: [
      "Artista",
      "Héroe Popular",
      "Artesano del Gremio",
      "Mercader del Gremio",
      "Ermitaño",
      "Noble",
    ], // 6 en total
    _backgroundsCleric: [
      "Acólito",
      "Criminal",
      "Héroe Popular",
      "Gladiador",
      "Ermitaño",
      "Caballero",
      "Pirata",
      "Sabio",
      "Marinero",
      "Soldado",
    ], // 10 en total
    _backgroundsDruid: [
      "Charlatán",
      "Héroe Popular",
      "Ermitaño",
      "Forastero",
      "Sabio",
    ], // 5 en total
    _backgroundsWarlock: [
      "Acólito",
      "Criminal",
      "Artista",
      "Artesano del Gremio",
      "Mercader del Gremio",
      "Ermitaño",
      "Noble",
      "Sabio",
      "Huérfano Callejero",
    ], // 9 en total
    // Function to get a background that fits their stats
    get_new_background: function get_new_background() {
      if (
        strength > 11 &&
        constitution > 9 &&
        intelligence > 11 &&
        dexterity > 11
      ) {
        newBackground2 =
          this._backgroundsPhysicalMentalDexterous[
            Math.floor(Math.random() * 18)
          ];
      } else if (
        strength > 11 &&
        constitution > 9 &&
        intelligence < 12 &&
        dexterity < 12
      ) {
        newBackground2 =
          this._backgroundsPhysical[Math.floor(Math.random() * 9)];
      } else if (
        (strength < 12 || constitution < 10) &&
        intelligence > 11 &&
        dexterity < 12
      ) {
        newBackground2 = this._backgroundsMental[Math.floor(Math.random() * 8)];
      } else if (
        (strength < 12 || constitution < 10) &&
        intelligence < 12 &&
        dexterity > 11
      ) {
        newBackground2 =
          this._backgroundsDexterous[Math.floor(Math.random() * 9)];
      } else if (
        strength > 11 &&
        constitution > 9 &&
        intelligence < 12 &&
        dexterity > 11
      ) {
        newBackground2 =
          this._backgroundsDexterousPhysical[Math.floor(Math.random() * 16)];
      } else if (
        (strength < 12 || constitution < 10) &&
        intelligence > 11 &&
        dexterity > 11
      ) {
        newBackground2 =
          this._backgroundsDexterousMental[Math.floor(Math.random() * 14)];
      } else if (
        strength > 11 &&
        constitution > 9 &&
        intelligence > 11 &&
        dexterity < 12
      ) {
        newBackground2 =
          this._backgroundsPhysicalMental[Math.floor(Math.random() * 15)];
      } else if (classAndLevel === "Cleric 1") {
        newBackground2 =
          this._backgroundsCleric[Math.floor(Math.random() * 10)];
      } else if (classAndLevel === "Druid 1") {
        newBackground2 = this._backgroundsDruid[Math.floor(Math.random() * 5)];
      } else if (classAndLevel === "Warlock 1") {
        newBackground2 =
          this._backgroundsWarlock[Math.floor(Math.random() * 9)];
      } else {
        newBackground2 = this._backgroundsNone[Math.floor(Math.random() * 6)];
      }
      return newBackground2;
    },
    // Create a name pulling from the name object
    CreateNewName: function CreateNewName(firstName, lastName) {
      // If they are a Half-orc without a last name, don't append a space.
      if (lastName === "") {
        currentName = firstName;
      } else {
        currentName = firstName + " " + lastName;
      }
      return currentName;
    },
  };
  
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
  
  classAndLevel = "";
  randomClassVariable = get_random_number(12);
  randomChance = Math.random();
  clericBuild = "";

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
    // Change the value of the temp hit points section to tell the user what the total stats are, and each individual stat in order.
    document.getElementById("form98_1").value =
      classtype +
      "(" +
      statTotal +
      "): " +
      strength1 +
      ", " +
      dexterity1 +
      ", " +
      constitution1 +
      ", " +
      intelligence1 +
      ", " +
      wisdom1 +
      ", " +
      charisma1;
  }

  function class_dropdown_generator() {
    // Needs:
    // Function to determine which ones are checked and not
    arrayOfClass = document.querySelectorAll("input.class_class");
    arrayOfCheckedClass = [];
    // Length of how many are checked
    lengthOfClassArray = arrayOfClass.length;
    // If statement to choose based on the choices given
    for (var _i2 = 0; _i2 < lengthOfClassArray; _i2++) {
      if (arrayOfClass[_i2].checked) {
        arrayOfCheckedClass.push(arrayOfClass[_i2].value);
      }
    }
    // Length of how many are checked
    lengthOfCheckedClassArray = arrayOfCheckedClass.length;
    // Equation to randomize based on length
    ClassRandomizerNumber = Math.floor(
      Math.random() * lengthOfCheckedClassArray
    );
    // Find Class value
    actualClass = arrayOfCheckedClass[ClassRandomizerNumber];
    return actualClass;
  }

  // Generates class based on user input
  if (document.getElementById("class_random").checked) {
    if (randomClassVariable === 1) {
      classAndLevel = "Barbarian 1";
    } else if (randomClassVariable === 2) {
      classAndLevel = "Bard 1";
    } else if (randomClassVariable === 3) {
      classAndLevel = "Cleric 1";
    } else if (randomClassVariable === 4) {
      classAndLevel = "Druid 1";
    } else if (randomClassVariable === 5) {
      classAndLevel = "Fighter 1";
    } else if (randomClassVariable === 6) {
      classAndLevel = "Monk 1";
    } else if (randomClassVariable === 7) {
      classAndLevel = "Paladin 1";
    } else if (randomClassVariable === 8) {
      classAndLevel = "Ranger 1";
    } else if (randomClassVariable === 9) {
      classAndLevel = "Rogue 1";
    } else if (randomClassVariable === 10) {
      classAndLevel = "Sorcerer 1";
    } else if (randomClassVariable === 11) {
      classAndLevel = "Warlock 1";
    } else if (randomClassVariable === 12) {
      classAndLevel = "Wizard 1";
    }
  } else {
    classAndLevel = class_dropdown_generator() + " 1";
  }

  // Code block that assigns the stats to the class that was chosen
  if(!isManual){
    if (classAndLevel === "Barbarian 1") {
      if (randomChance > 0.5) {
        assign_stats(stat1, stat3, stat2, stat6, stat4, stat5, "Barbarian");
      } else {
        assign_stats(stat3, stat2, stat1, stat6, stat4, stat5, "Barbarian");
      }
    } else if (classAndLevel === "Bard 1") {
      if (randomChance > 0.5) {
        assign_stats(stat6, stat2, stat3, stat4, stat5, stat1, "Bard");
      } else {
        assign_stats(stat2, stat4, stat3, stat5, stat6, stat1, "Bard");
      }
    } else if (classAndLevel === "Cleric 1") {
      if (randomChance > 0.66) {
        assign_stats(stat4, stat2, stat3, stat5, stat1, stat6, "Cleric");
        clericBuild = "DEX";
      } else if (randomChance > 0.33) {
        assign_stats(stat2, stat4, stat3, stat6, stat1, stat5, "Cleric");
        clericBuild = "STR";
      } else {
        assign_stats(stat5, stat3, stat2, stat4, stat1, stat6, "Cleric");
        clericBuild = "WIS";
      }
    } else if (classAndLevel === "Druid 1") {
      if (randomChance > 0.5) {
        assign_stats(stat6, stat3, stat2, stat5, stat1, stat4, "Druid");
      } else {
        assign_stats(stat6, stat3, stat2, stat4, stat1, stat5, "Druid");
      }
    } else if (classAndLevel === "Fighter 1") {
      if (randomChance > 0.66) {
        assign_stats(stat6, stat1, stat2, stat4, stat3, stat5, "Fighter");
      } else if (randomChance > 0.33) {
        assign_stats(stat1, stat4, stat2, stat5, stat3, stat6, "Fighter");
      } else {
        assign_stats(stat1, stat4, stat3, stat2, stat5, stat6, "Fighter");
      }
    } else if (classAndLevel === "Monk 1") {
      if (randomChance > 0.5) {
        assign_stats(stat4, stat1, stat3, stat6, stat2, stat5, "Monk");
      } else {
        assign_stats(stat5, stat1, stat3, stat6, stat2, stat4, "Monk");
      }
    } else if (classAndLevel === "Paladin 1") {
      if (randomChance > 0.5) {
        assign_stats(stat5, stat1, stat3, stat6, stat4, stat2, "Paladin");
      } else {
        assign_stats(stat1, stat5, stat3, stat6, stat4, stat2, "Paladin");
      }
    } else if (classAndLevel === "Ranger 1") {
      if (randomChance > 0.5) {
        assign_stats(stat5, stat1, stat2, stat4, stat3, stat6, "Ranger");
      } else {
        assign_stats(stat1, stat2, stat3, stat5, stat4, stat6, "Ranger");
      }
    } else if (classAndLevel === "Rogue 1") {
      if (randomChance > 0.66) {
        assign_stats(stat6, stat1, stat2, stat5, stat3, stat4, "Rogue");
      } else if (randomChance > 0.33) {
        assign_stats(stat6, stat1, stat2, stat5, stat4, stat3, "Rogue");
      } else {
        assign_stats(stat6, stat1, stat3, stat2, stat4, stat5, "Rogue");
      }
    } else if (classAndLevel === "Sorcerer 1") {
      if (randomChance > 0.5) {
        assign_stats(stat6, stat3, stat2, stat5, stat4, stat1, "Sorcerer");
      } else {
        assign_stats(stat6, stat2, stat3, stat4, stat5, stat1, "Sorcerer");
      }
    } else if (classAndLevel === "Warlock 1") {
      if (randomChance > 0.5) {
        assign_stats(stat6, stat2, stat3, stat4, stat5, stat1, "Warlock");
      } else {
        assign_stats(stat6, stat3, stat2, stat5, stat4, stat1, "Warlock");
      }
    } else if (classAndLevel === "Wizard 1") {
      if (randomChance > 0.5) {
        assign_stats(stat6, stat2, stat3, stat1, stat4, stat5, "Wizard");
      } else {
        assign_stats(stat5, stat3, stat2, stat1, stat4, stat6, "Wizard");
      }
    }
  }else{
  
    strength = 0;
    dexterity = 0;
    constitution = 0;
    intelligence = 0;
    wisdom = 0;
    charisma = 0;

    assign_stats(stat1, stat2, stat3, stat4, stat5, stat6, classAndLevel);
  }
  // Create variables for the name generator to use
  firstNameNumber = Math.floor(Math.random() * 20);
  lastNameNumber = Math.floor(Math.random() * 20);

  // Random number generator assigned to a variable
  number = Math.floor(Math.random() * 9);

  // Code block to read what the user input for the race dropdown box
  if (document.getElementById("race_random").checked) {
    if (number === 0) {
      raceChecker = 0;
      race_generator("Dragonborn");
    } else if (number === 1) {
      raceChecker = 0;
      race_generator("Dwarf");
    } else if (number === 2) {
      raceChecker = 0;
      race_generator("Elf");
    } else if (number === 3) {
      raceChecker = 0;
      race_generator("Gnome");
    } else if (number === 4) {
      raceChecker = 0;
      race_generator("HalfElf");
    } else if (number === 5) {
      raceChecker = 0;
      race_generator("HalfOrc");
    } else if (number === 6) {
      raceChecker = 0;
      race_generator("Halfling");
    } else if (number === 7) {
      raceChecker = 0;
      race_generator("Human");
    } else if (number === 8) {
      raceChecker = 0;
      race_generator("Tiefling");
    }
  } else {
    raceChecker++;
    race_dropdown_generator();
  }

  // Function to minimize code when assigning race based on user-choice
  function race_generator(raceName) {
    raceNameLower = raceName.toLowerCase();
    raceNameLowerString = "_" + raceNameLower.toString();
    finalFirstName =
      nameGenerator["_races"][raceNameLowerString]["firstName"][
        firstNameNumber
      ];
    finalLastName =
      nameGenerator["_races"][raceNameLowerString]["lastName"][lastNameNumber];
    if (raceName === "HalfElf") {
      race = "Half-Elf";
    } else if (raceName === "HalfOrc") {
      race = "Half-Orc";
    } else {
      race = raceName;
    }
  }

  function sub_subrace_picker(race, arrayYouWantToAddTo) {
    randomValue = Math.floor(Math.random() * race.length);
    if (race.length === 0) {
    } else {
      arrayYouWantToAddTo.push(race[randomValue]);
    }
  }

  function subrace_picker(thearray) {
    for (var _i3 = 0; _i3 < thearray.length; _i3++) {
      subraceSplitter = thearray[_i3];
      if (
        subraceSplitter === "HalfElf" ||
        subraceSplitter === "HalfOrc" ||
        subraceSplitter === "Tiefling"
      ) {
        leftoverArray.push(subraceSplitter);
      } else {
        subraceSplitter1 = subraceSplitter.split(" ", 1).toString();
        subraceSplitter2 = subraceSplitter.split(" ", 2);
        subraceSplitter3 = subraceSplitter2[1];
      }
      if (subraceSplitter3 === "Dragonborn") {
        dragonborn.push(subraceSplitter);
      } else if (subraceSplitter3 === "Dwarf") {
        dwarves.push(subraceSplitter);
      } else if (
        subraceSplitter3 === "Elf" ||
        subraceSplitter === "Dark Elf (Drow)"
      ) {
        elves.push(subraceSplitter);
      } else if (subraceSplitter3 === "Gnome") {
        gnomes.push(subraceSplitter);
      } else if (subraceSplitter3 === "Halfling") {
        halflings.push(subraceSplitter);
      } else if (subraceSplitter1 === "Human") {
        humans.push(subraceSplitter);
      }
    }
    sub_subrace_picker(dragonborn, leftoverArray);
    sub_subrace_picker(dwarves, leftoverArray);
    sub_subrace_picker(elves, leftoverArray);
    sub_subrace_picker(gnomes, leftoverArray);
    sub_subrace_picker(halflings, leftoverArray);
    sub_subrace_picker(humans, leftoverArray);
    return leftoverArray;
  }

  function race_dropdown_generator() {
    // Needs:
    // Function to determine which ones are checked and not
    arrayOfRaces = document.querySelectorAll("input.race_class");
    arrayOfCheckedRaces = [];
    // Length of how many are checked
    lengthOfRaceArray = arrayOfRaces.length;
    // If statement to choose based on the choices given
    for (var _i4 = 0; _i4 < lengthOfRaceArray; _i4++) {
      if (arrayOfRaces[_i4].checked) {
        arrayOfCheckedRaces.push(arrayOfRaces[_i4].value);
      }
    }
    arrayOfCheckedRaces = subrace_picker(arrayOfCheckedRaces);

    // Length of how many are checked
    lengthOfCheckedRaceArray = arrayOfCheckedRaces.length;
    // Equation to randomize based on length
    RaceRandomizerNumber = Math.floor(Math.random() * lengthOfCheckedRaceArray);

    // Find race value
    actualRace = arrayOfCheckedRaces[RaceRandomizerNumber];
    if (actualRace === "HalfElf") {
      race = "Half-Elf";
    } else if (actualRace === "HalfOrc") {
      race = "Half-Orc";
    } else {
      race = actualRace;
    }

    raceSplitter = race;

    if (
      raceSplitter === "HalfElf" ||
      raceSplitter === "HalfOrc" ||
      raceSplitter === "(Drow)"
    ) {
    } else {
      raceSplitter1 = raceSplitter.split(" ", 1).toString();
      raceSplitter2 = raceSplitter.split(" ", 2);
      raceSplitter3 = raceSplitter2[1];
    }

    if (raceSplitter3 === undefined) {
      raceNameLower = actualRace.toLowerCase();
      raceNameLowerString = "_" + raceNameLower.toString();
      finalFirstName =
        nameGenerator["_races"][raceNameLowerString]["firstName"][
          firstNameNumber
        ];
      finalLastName =
        nameGenerator["_races"][raceNameLowerString]["lastName"][
          lastNameNumber
        ];
    } else if (raceSplitter1 === "Human") {
      raceNameLower = raceSplitter1.toLowerCase();
      raceNameLowerString = "_" + raceNameLower.toString();
      finalFirstName =
        nameGenerator["_races"][raceNameLowerString]["firstName"][
          firstNameNumber
        ];
      finalLastName =
        nameGenerator["_races"][raceNameLowerString]["lastName"][
          lastNameNumber
        ];
    } else if (raceSplitter3 === "(Drow)") {
      raceNameLower = "Elf";
      raceNameLowerString = "_" + raceNameLower.toString();
      finalFirstName =
        nameGenerator["_races"][raceNameLowerString]["firstName"][
          firstNameNumber
        ];
      finalLastName =
        nameGenerator["_races"][raceNameLowerString]["lastName"][
          lastNameNumber
        ];
    } else {
      raceNameLower = raceSplitter3.toLowerCase();
      raceNameLowerString = "_" + raceNameLower.toString();
      finalFirstName =
        nameGenerator["_races"][raceNameLowerString]["firstName"][
          firstNameNumber
        ];
      finalLastName =
        nameGenerator["_races"][raceNameLowerString]["lastName"][
          lastNameNumber
        ];
    }
  }

  function background_dropdown_generator() {
    // Needs:
    // Function to determine which ones are checked and not
    arrayOfBackgrounds = document.querySelectorAll("input.background_class");
    // Length of how many are checked
    lengthOfBackgroundArray = arrayOfBackgrounds.length;
    // If statement to choose based on the choices given
    for (var _i5 = 0; _i5 < lengthOfBackgroundArray; _i5++) {
      if (arrayOfBackgrounds[_i5].checked) {
        arrayOfCheckedBackgrounds.push(arrayOfBackgrounds[_i5].value);
      }
    }
    // Length of how many are checked
    lengthOfCheckedBackgroundArray = arrayOfCheckedBackgrounds.length;
    // Equation to randomize based on length
    BackgroundRandomizerNumber = Math.floor(
      Math.random() * lengthOfCheckedBackgroundArray
    );

    // Find Background value
    actualBackground = arrayOfCheckedBackgrounds[BackgroundRandomizerNumber];
    newBackground1 = actualBackground;
    return newBackground1;
  }

  // Generates background based on user input
  if (document.getElementById("background_random").checked) {
    newBackground1 = nameGenerator.get_new_background();
  } else {
    newBackground1 = background_dropdown_generator();
  }

  // Function to help facilitate easier code for alignment picking
  function alignment_helper(balance, morality) {
    alignmentChecker = true;
    alignment.push(balance);
    if (balance === "Lawful") {
      random_by_length(lawfulFlaws, flaws, "form99_1");
    } else if (balance === "Neutral") {
      random_by_length(neutralFlaws, flaws, "form99_1");
    } else if (balance === "Chaotic") {
      random_by_length(chaoticFlaws, flaws, "form99_1");
    }
    alignment.push(morality);
    if (morality === "Good") {
      random_by_length(goodIdeals, ideals, "form100_1");
    } else if (morality === "Neutral") {
      random_by_length(neutralIdeals, ideals, "form100_1");
    } else if (morality === "Evil") {
      random_by_length(evilIdeals, ideals, "form100_1");
    }
  }

  function alignment_dropdown_generator() {
    // Needs:
    // Function to determine which ones are checked and not
    arrayOfAlignment = document.querySelectorAll("input.alignment_class");
    // Length of how many are checked
    lengthOfAlignmentArray = arrayOfAlignment.length;
    // If statement to choose based on the choices given
    for (var _i6 = 0; _i6 < lengthOfAlignmentArray; _i6++) {
      if (arrayOfAlignment[_i6].checked) {
        arrayOfCheckedAlignment.push(arrayOfAlignment[_i6].value);
      }
    }
    // Length of how many are checked
    lengthOfCheckedAlignmentArray = arrayOfCheckedAlignment.length;
    // Equation to randomize based on length
    AlignmentRandomizerNumber = Math.floor(
      Math.random() * lengthOfCheckedAlignmentArray
    );
    // Find Alignment value
    actualAlignment = arrayOfCheckedAlignment[AlignmentRandomizerNumber];
    return actualAlignment;
  }

  // Generates alignment based on the users input
  if (document.getElementById("alignment_random").checked) {
  } else {
    balanceAndMorality = alignment_dropdown_generator();
    balance = balanceAndMorality.split(" ", 1).toString();
    morality = balanceAndMorality.split(" ", 2);
    morality = morality[1].toString();
    alignment_helper(balance, morality);
  }

  // Function to get a random interger between a minimum value and a maximum value
  function get_random_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
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

  // Function to check if the weapon dice are less than, equal to, or greater than 0, and add the proper syntax
  function stat_checker_3(stat, id, dieType, damagetype) {
    if (stat < 0) {
      document.getElementById(id).value = dieType + stat + " " + damagetype;
    } else if (stat === 0) {
      document.getElementById(id).value = dieType + " " + damagetype;
    } else if (stat > 0) {
      document.getElementById(id).value =
        dieType + "+" + stat + " " + damagetype;
    }
  }

  // Function to check the weapon dice in the attack & spellcasting section are less than, equal to, or greater than 0, and add the proper syntax
  function stat_checker_no_id(stat) {
    if (stat <= 0) {
      return stat;
    } else {
      return "+" + stat;
    }
  }

  // Array de idiomas estándar
  listOfStandardLanguages = [
    "Comun",
    "Enano",
    "Élfico",
    "Gigante",
    "Gnómico",
    "Goblin",
    "Mediano",
    "Orco",
  ];

  // Array de idiomas exóticos
  listOfExoticLanguages = [
    "Abisal",
    "Celestial",
    "Dracónico",
    "Lengua Profunda",
    "Infernal",
    "Primordial",
    "Silvano",
    "Común Subterráneo",
  ];

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

// Objeto que contiene nombres de armaduras y sus valores
armor = {
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
    shield: {
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


  // Array that contains list of simple weapons
  simpleWeapons = [
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

  // Array that contains list of martial weapons
  martialWeapons = [
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

  // Function to add languages to proficiencies section
  function language_adder(language) {
    for (j = 0; j < profsAndLangs.languages.length; j++) {
      if (profsAndLangs.languages[j] === language) {
        return;
      }
    }
    return language;
  }

  // Function to check language_adder()
  function language_adder_2(language_adder1) {
    if (language_adder1 !== undefined) {
      profsAndLangs.languages.push(language_adder1);
    }
  }

  // Variable used to determine ancestry of the Dragonborn race
  ancestry = get_random_number(10);

  // Variable used to determine ancestry of the Human race
  ancestryHuman = get_random_number(9);

  // Function to add a racial cantrip to the last form in the cantrip section
  function add_race_cantrip(cantrip) {
    document.getElementById("form198_3").value = cantrip;
  }

  // Race and subrace decider
  if (race === "Dragonborn" || raceSplitter3 === "Dragonborn") {
    racialLanguage1 = listOfStandardLanguages[0];
    racialLanguage2 = listOfStandardLanguages[3];
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    strength += 2;
    charisma += 1;
    document.getElementById("form87_1").value = "30";
    random_by_length(toughTraits, personalityTraits, "form102_1");
    if (raceChecker === 0) {
      if (ancestry === 1) {
        race = "Black Dragonborn";
      } else if (ancestry === 2) {
        race = "Blue Dragonborn";
      } else if (ancestry === 3) {
        race = "Brass Dragonborn";
      } else if (ancestry === 4) {
        race = "Bronze Dragonborn";
      } else if (ancestry === 5) {
        race = "Copper Dragonborn";
      } else if (ancestry === 6) {
        race = "Gold Dragonborn";
      } else if (ancestry === 7) {
        race = "Green Dragonborn";
      } else if (ancestry === 8) {
        race = "Red Dragonborn";
      } else if (ancestry === 9) {
        race = "Silver Dragonborn";
      } else if (ancestry === 10) {
        race = "White Dragonborn";
      }
    }
  } else if (race === "Dwarf" || raceSplitter3 === "Dwarf") {
    racialLanguage1 = listOfStandardLanguages[0];
    racialLanguage2 = listOfStandardLanguages[2];
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    constitution += 2;
    random_by_length(toughTraits, personalityTraits, "form102_1");
    features.push("Vision Nocturna: 19 m");
    features.push(
      "Dwarven Resilience: You have advantage on saving throws against poison, and you have resistance against poison damage."
    );
    document.getElementById("form87_1").value = "25";
    if (raceChecker === 0) {
      if (wisdom >= strength) {
        race = "Hill Dwarf";
      } else {
        race = "Mountain Dwarf";
      }
    }
  } else if (race === "Elf" || raceSplitter3 === "Elf") {
    dexterity += 2;
    document.getElementById("form87_1").value = "30";
    random_by_length(softTraits, personalityTraits, "form102_1");
    additionalFeatures.push(
      "Ascendencia Feérica: Tienes ventaja en las tiradas de salvación contra ser encantado, y la magia no puede ponerte a dormir."
    );
    additionalFeatures.push(
      "Trance: Los elfos no necesitan dormir. En su lugar, meditan profundamente, permaneciendo semiconscientes, durante 4 horas al día. Mientras meditan, pueden soñar de alguna manera; tales sueños son en realidad ejercicios mentales que se han vuelto reflejos a través de años de práctica. Después de descansar de esta manera, obtienen el mismo beneficio que un humano obtiene de 8 horas de sueño."
    );
    if (raceChecker === 0) {
     
      
    }
  } else if (race === "Halfling" || raceSplitter3 === "Halfling") {
    racialLanguage1 = listOfStandardLanguages[0];
    racialLanguage2 = "Halfling";
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    dexterity += 2;
    document.getElementById("form87_1").value = "25";
    random_by_length(softTraits, personalityTraits, "form102_1");
    additionalFeatures.push(
      "Agilidad del Halfling: Puedes moverte a través del espacio de cualquier criatura que sea de un tamaño mayor que el tuyo."
    );
    additionalFeatures.push(
      "Suerte: Cuando sacas un 1 en una tirada de ataque, chequeo de habilidad o tirada de salvación, puedes volver a tirar el dado y debes usar el nuevo resultado."
    );
    features.push(
      "Valiente: Tienes ventaja en las tiradas de salvación contra ser asustado."
    );
    if (raceChecker === 0) {
      if (charisma >= constitution) {
        race = "Lightfoot Halfling";
      } else if (constitution > charisma) {
        race = "Stout Halfling";
      }
    }
  } else if (race === "Human" || raceSplitter1 === "Human") {
    racialLanguage1 = listOfStandardLanguages[0];
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
    if (raceChecker === 0) {
      if (ancestryHuman === 1) {
        race = "Human (Calishite)";
        random_by_length(softTraits, personalityTraits, "form102_1");
      } else if (ancestryHuman === 2) {
        race = "Human (Chondathan)";
        random_by_length(softTraits, personalityTraits, "form102_1");
      } else if (ancestryHuman === 3) {
        race = "Human (Damaran)";
        random_by_length(softTraits, personalityTraits, "form102_1");
      } else if (ancestryHuman === 4) {
        race = "Human (Illuskan)";
        random_by_length(softTraits, personalityTraits, "form102_1");
      } else if (ancestryHuman === 5) {
        race = "Human (Mulan)";
        random_by_length(softTraits, personalityTraits, "form102_1");
      } else if (ancestryHuman === 6) {
        race = "Human (Rashemi)";
        random_by_length(toughTraits, personalityTraits, "form102_1");
      } else if (ancestryHuman === 7) {
        race = "Human (Shou)";
        random_by_length(toughTraits, personalityTraits, "form102_1");
      } else if (ancestryHuman === 8) {
        race = "Human (Tethyrian)";
        random_by_length(toughTraits, personalityTraits, "form102_1");
      } else if (ancestryHuman === 9) {
        race = "Human (Turami)";
        random_by_length(toughTraits, personalityTraits, "form102_1");
      }
    }
  } else if (race === "Gnome" || raceSplitter3 === "Gnome") {
    racialLanguage1 = listOfStandardLanguages[0];
    racialLanguage2 = "Gnomish";
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    intelligence += 2;
    document.getElementById("form87_1").value = "25";
    random_by_length(softTraits, personalityTraits, "form102_1");
    features.push("Vision Nocturna: 19 m");
    features.push(
      "Astucia Gnómica: Tienes ventaja en todas las tiradas de salvación de Inteligencia, Sabiduría y Carisma contra magia."
    );
    if (raceChecker === 0) {
      if (dexterity >= constitution) {
        race = "Forest Gnome";
      } else if (constitution > dexterity) {
        race = "Rock Gnome";
      }
    }
  }

  // Function for trait randomization by length of the array
  function random_by_length(array, personalityVariable, id) {
    personalityVariable.push(array[Math.floor(Math.random() * array.length)]);
    document.getElementById(id).value = personalityVariable.join("\r\n");
  }

  // Function for picking balance alignment
  function generate_balance(higherDecimal, lowerDecimal) {
    if (alignmentChecker === false) {
      if (Math.random() >= higherDecimal) {
        alignment.push("Lawful");
        random_by_length(lawfulFlaws, flaws, "form99_1");
      } else if (
        higherDecimal >= Math.random() &&
        lowerDecimal >= Math.random()
      ) {
        alignment.push("Chaotic");
        random_by_length(chaoticFlaws, flaws, "form99_1");
      } else if (Math.random() >= lowerDecimal) {
        alignment.push("Neutral");
        random_by_length(neutralFlaws, flaws, "form99_1");
      } else {
        alignment.push("Neutral");
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

  // Function to become proficient in a random skill if it isn't already proficient
  function skill_adder() {
    random = Math.floor(Math.random() * 17);
    if (document.getElementById("form7_1").checked === undefined) {
      add_click(7);
      stat_checker(wisdomModifier + 2, "form43_1"); // perception
    } else if (
      random === 0 &&
      document.getElementById("form19_1").checked === undefined
    ) {
      add_click(19);
      stat_checker(dexterityModifier + 2, "form38_1"); // acrobatics
    } else if (
      random === 1 &&
      document.getElementById("form8_1").checked === undefined
    ) {
      add_click(8);
      stat_checker(wisdomModifier + 2, "form50_1"); // animal handling
    } else if (
      random === 2 &&
      document.getElementById("form21_1").checked === undefined
    ) {
      add_click(21);
      stat_checker(intelligenceModifier + 2, "form40_1"); // arcana
    } else if (
      random === 3 &&
      document.getElementById("form2_1").checked === undefined
    ) {
      add_click(2);
      stat_checker(strengthModifier + 2, "form49_1"); // athletics
    } else if (
      random === 4 &&
      document.getElementById("form17_1").checked === undefined
    ) {
      add_click(17);
      stat_checker(charismaModifier + 2, "form36_1"); // deception
    } else if (
      random === 5 &&
      document.getElementById("form9_1").checked === undefined
    ) {
      add_click(9);
      stat_checker(intelligenceModifier + 2, "form48_1"); // history
    } else if (
      random === 6 &&
      document.getElementById("form13_1").checked === undefined
    ) {
      add_click(13);
      stat_checker(wisdomModifier + 2, "form35_1"); // insight
    } else if (
      random === 7 &&
      document.getElementById("form24_1").checked === undefined
    ) {
      add_click(24);
      stat_checker(charismaModifier + 2, "form44_1"); // intimidation
    } else if (
      random === 8 &&
      document.getElementById("form14_1").checked === undefined
    ) {
      add_click(14);
      stat_checker(intelligenceModifier + 2, "form31_1"); // investigation
    } else if (
      random === 9 &&
      document.getElementById("form5_1").checked === undefined
    ) {
      add_click(5);
      stat_checker(wisdomModifier + 2, "form53_1"); // medicine
    } else if (
      random === 10 &&
      document.getElementById("form11_1").checked === undefined
    ) {
      add_click(11);
      stat_checker(intelligenceModifier + 2, "form37_1"); // nature
    } else if (
      random === 11 &&
      document.getElementById("form16_1").checked === undefined
    ) {
      add_click(16);
      stat_checker(charismaModifier + 2, "form34_1"); // performance
    } else if (
      random === 12 &&
      document.getElementById("form1_1").checked === undefined
    ) {
      add_click(1);
      stat_checker(charismaModifier + 2, "form45_1"); // persuasion
    } else if (
      random === 13 &&
      document.getElementById("form20_1").checked === undefined
    ) {
      add_click(20);
      stat_checker(intelligenceModifier + 2, "form33_1"); // religion
    } else if (
      random === 14 &&
      document.getElementById("form4_1").checked === undefined
    ) {
      add_click(4);
      stat_checker(dexterityModifier + 2, "form46_1"); // sleight of hand
    } else if (
      random === 15 &&
      document.getElementById("form23_1").checked === undefined
    ) {
      add_click(23);
      stat_checker(dexterityModifier + 2, "form32_1"); // stealth
    } else if (
      random === 16 &&
      document.getElementById("form12_1").checked === undefined
    ) {
      add_click(12);
      stat_checker(wisdomModifier + 2, "form47_1"); // survival
    } else {
      if (document.getElementById("form7_1").checked === undefined) {
        add_click(7);
        stat_checker(wisdomModifier + 2, "form43_1"); // perception
      } else if (document.getElementById("form23_1").checked === undefined) {
        add_click(23);
        stat_checker(dexterityModifier + 2, "form32_1"); // stealth
      } else if (document.getElementById("form2_1").checked === undefined) {
        add_click(2);
        stat_checker(strengthModifier + 2, "form49_1"); // athletics
      } else if (document.getElementById("form17_1").checked === undefined) {
        add_click(17);
        stat_checker(charismaModifier + 2, "form36_1"); // deception
      } else if (document.getElementById("form13_1").checked === undefined) {
        add_click(13);
        stat_checker(wisdomModifier + 2, "form35_1"); // insight
      } else if (document.getElementById("form24_1").checked === undefined) {
        add_click(24);
        stat_checker(charismaModifier + 2, "form44_1"); // intimidation
      } else if (document.getElementById("form14_1").checked === undefined) {
        add_click(14);
        stat_checker(intelligenceModifier + 2, "form31_1"); // investigation
      } else if (document.getElementById("form1_1").checked === undefined) {
        add_click(1);
        stat_checker(charismaModifier + 2, "form45_1"); // persuasion
      }
    }
  }

  // Racial features adder
  if (race === "Black Dragonborn") {
    features.push("Ascendencia Dracónica: Black Dragons.");
    features.push("Resistencia al Daño: Acid.");
    generate_balance(0.55, 0.4);
    generate_morality(0.8, 0.55);
  } else if (race === "Blue Dragonborn") {
    features.push("Ascendencia Dracónica: Blue Dragons.");
    features.push("Resistencia al Daño: Lightning.");
    generate_balance(0.55, 0.4);
    generate_morality(0.8, 0.55);
  } else if (race === "Brass Dragonborn") {
    features.push("Ascendencia Dracónica: Brass Dragons.");
    features.push("Resistencia al Daño: Fire.");
    generate_balance(0.55, 0.4);
    generate_morality(0.6, 0.25);
  } else if (race === "Bronze Dragonborn") {
    features.push("Ascendencia Dracónica: Bronze Dragons.");
    features.push("Resistencia al Daño: Lightning.");
    generate_balance(0.55, 0.4);
    generate_morality(0.6, 0.25);
  } else if (race === "Copper Dragonborn") {
    features.push("Ascendencia Dracónica: Copper Dragons.");
    features.push("Resistencia al Daño: Acid.");
    generate_balance(0.55, 0.4);
    generate_morality(0.6, 0.25);
  } else if (race === "Gold Dragonborn") {
    features.push("Ascendencia Dracónica: Gold Dragons.");
    features.push("Resistencia al Daño: Fire.");
    generate_balance(0.55, 0.4);
    generate_morality(0.6, 0.25);
  } else if (race === "Green Dragonborn") {
    features.push("Ascendencia Dracónica: Green Dragons.");
    features.push("Resistencia al Daño: Poison.");
    generate_balance(0.55, 0.4);
    generate_morality(0.75, 0.4);
  } else if (race === "Red Dragonborn") {
    features.push("Ascendencia Dracónica: Red Dragons.");
    features.push("Resistencia al Daño: Fire.");
    generate_balance(0.55, 0.4);
    generate_morality(0.75, 0.4);
  } else if (race === "Silver Dragonborn") {
    features.push("Ascendencia Dracónica: Silver Dragons.");
    features.push("Resistencia al Daño: Cold.");
    generate_balance(0.55, 0.4);
    generate_morality(0.6, 0.25);
  } else if (race === "White Dragonborn") {
    features.push("Ascendencia Dracónica: White Dragons.");
    features.push("Resistencia al Daño: Cold.");
    generate_balance(0.55, 0.4);
    generate_morality(0.75, 0.4);
  } else if (race === "Hill Dwarf") {
    wisdom += 1;
    features.push(
      "Robustez Enana: Tu punto de golpe máximo aumenta en 1, y aumenta en 1 cada vez que subes de nivel."
    );
    generate_balance(0.3, 0.1);
    generate_morality(0.5, 0.2);
  } else if (race === "Mountain Dwarf") {
    strength += 2;
    generate_balance(0.3, 0.1);
    generate_morality(0.5, 0.2);
  } else if (race === "Human (Calishite)") {
    generate_balance(0.6, 0.2);
    generate_morality(0.66, 0.3);
  } else if (race === "Human (Chondathan)") {
    generate_balance(0.6, 0.2);
    generate_morality(0.66, 0.3);
  } else if (race === "Human (Damaran)") {
    generate_balance(0.6, 0.2);
    generate_morality(0.66, 0.3);
  } else if (race === "Human (Illuskan)") {
    generate_balance(0.6, 0.2);
    generate_morality(0.66, 0.3);
  } else if (race === "Human (Mulan)") {
    generate_balance(0.6, 0.2);
    generate_morality(0.66, 0.3);
  } else if (race === "Human (Rashemi)") {
    generate_balance(0.6, 0.2);
    generate_morality(0.66, 0.3);
  } else if (race === "Human (Shou)") {
    generate_balance(0.6, 0.2);
    generate_morality(0.66, 0.3);
  } else if (race === "Human (Tethyrian)") {
    generate_balance(0.6, 0.2);
    generate_morality(0.66, 0.3);
  } else if (race === "Human (Turami)") {
    generate_balance(0.6, 0.2);
    generate_morality(0.66, 0.3);
  } else if (race === "High Elf") {
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
  } else if (race === "Wood Elf") {
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
  } else if (race === "Dark Elf (Drow)") {
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
  } else if (race === "Lightfoot Halfling") {
    charisma += 1;
    features.push(
      "Sigiloso por Naturaleza: Puedes intentar esconderte incluso cuando solo estás oscurecido por una criatura que sea al menos un tamaño más grande que tú."
    );
    generate_balance(0.2, 0.1);
    generate_morality(0.4, 0.2);
  } else if (race === "Stout Halfling") {
    constitution += 1;
    features.push(
      "Resistencia Robusta: Tienes ventaja en las tiradas de salvación contra veneno y tienes resistencia al daño por veneno."
    );
    generate_balance(0.2, 0.1);
    generate_morality(0.4, 0.2);
  } else if (race === "Forest Gnome") {
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
  } else if (race === "Rock Gnome") {
    constitution += 1;
    tool_adder_2(tool_adder("herramientas de artesano"));
    features.push(
      "Conocimiento del Artífice: Siempre que realices un chequeo de Inteligencia (Historia) relacionado con objetos mágicos, objetos alquímicos o dispositivos tecnológicos, puedes agregar el doble de tu bonificación de competencia, en lugar de cualquier bonificación de competencia que normalmente aplicarías."
    );
    additionalFeatures.push(
      "Manitas: Usando herramientas de manitas, puedes gastar 1 hora y 10 gp en materiales para construir un dispositivo mecánico pequeño (CA 5, 1 PV). El dispositivo deja de funcionar después de 24 horas (a menos que pases 1 hora reparándolo para mantenerlo funcionando), o cuando usas tu acción para desmantelarlo; en ese momento, puedes recuperar los materiales utilizados para crearlo. Puedes tener hasta tres dispositivos de este tipo activos al mismo tiempo. Cuando creas un dispositivo, elige una de las siguientes opciones:\rJuguete Mecánico: Este juguete es un animal mecánico, monstruo o persona, como una rana, ratón, pájaro, dragón o soldado. Cuando se coloca en el suelo, el juguete se mueve 5 pies por el suelo en cada uno de tus turnos en una dirección aleatoria. Hace ruidos según lo que representa.\rEncendedor: El dispositivo produce una llama en miniatura, que puedes usar para encender una vela, antorcha o fogata. Usar el dispositivo requiere tu acción.\rCaja de Música: Cuando se abre, esta caja de música toca una sola canción a un volumen moderado. La caja deja de tocar cuando termina la canción o cuando se cierra."
    );
    generate_balance(0.6, 0.4);
    generate_morality(0.5, 0.2);
  } else if (race === "Half-Elf") {
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
  } else if (race === "Half-Orc") {
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
  } else if (race === "Tiefling") {
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

  // Variable that holds the value of just the class, not the level
  className = classAndLevel.split(" ")[0];

  // Block that determines the right saving throws by class
  if (
    classAndLevel === "Barbarian 1" ||
    classAndLevel === "Fighter 1" ||
    classAndLevel === "Monk 1" ||
    classAndLevel === "Ranger 1"
  ) {
    stat_checker(strengthModifier + 2, "form42_1");
    add_click(15);
  } else {
    stat_checker(strengthModifier, "form42_1");
  }
  if (
    classAndLevel === "Bard 1" ||
    classAndLevel === "Rogue 1" ||
    classAndLevel === "Ranger 1" ||
    classAndLevel === "Monk 1"
  ) {
    stat_checker(dexterityModifier + 2, "form54_1");
    add_click(18);
  } else {
    stat_checker(dexterityModifier, "form54_1");
  }
  if (
    classAndLevel === "Barbarian 1" ||
    classAndLevel === "Fighter 1" ||
    classAndLevel === "Sorcerer 1"
  ) {
    stat_checker(constitutionModifier + 2, "form41_1");
    add_click(22);
  } else {
    stat_checker(constitutionModifier, "form41_1");
  }
  if (
    classAndLevel === "Druid 1" ||
    classAndLevel === "Rogue 1" ||
    classAndLevel === "Wizard 1"
  ) {
    stat_checker(intelligenceModifier + 2, "form52_1");
    add_click(6);
  } else {
    stat_checker(intelligenceModifier, "form52_1");
  }
  if (
    classAndLevel === "Druid 1" ||
    classAndLevel === "Cleric 1" ||
    classAndLevel === "Wizard 1" ||
    classAndLevel === "Paladin 1" ||
    classAndLevel === "Warlock 1"
  ) {
    stat_checker(wisdomModifier + 2, "form39_1");
    add_click(10);
  } else {
    stat_checker(wisdomModifier, "form39_1");
  }
  if (
    classAndLevel === "Bard 1" ||
    classAndLevel === "Cleric 1" ||
    classAndLevel === "Sorcerer 1" ||
    classAndLevel === "Paladin 1" ||
    classAndLevel === "Warlock 1"
  ) {
    stat_checker(charismaModifier + 2, "form51_1");
    add_click(3);
  } else {
    stat_checker(charismaModifier, "form51_1");
  }

  // Block that determines the right hit die by class
  if (classAndLevel === "Barbarian 1") {
    stat_checker_2(constitutionModifier, "form89_1", "1d12");
    hp = 12 + constitutionModifier;
  } else if (
    classAndLevel === "Fighter 1" ||
    classAndLevel === "Paladin 1" ||
    classAndLevel === "Ranger 1"
  ) {
    stat_checker_2(constitutionModifier, "form89_1", "1d10");
    hp = 10 + constitutionModifier;
  } else if (
    classAndLevel === "Bard 1" ||
    classAndLevel === "Cleric 1" ||
    classAndLevel === "Druid 1" ||
    classAndLevel === "Monk 1" ||
    classAndLevel === "Rogue 1" ||
    classAndLevel === "Warlock 1"
  ) {
    stat_checker_2(constitutionModifier, "form89_1", "1d8");
    hp = 8 + constitutionModifier;
  } else if (classAndLevel === "Wizard 1" || classAndLevel === "Sorcerer 1") {
    stat_checker_2(constitutionModifier, "form89_1", "1d6");
    hp = 6 + constitutionModifier;
  }

  // Block that adds proficiency in perception if you are an Elf
  if (
    race === "High Elf" ||
    race === "Dark Elf (Drow)" ||
    race === "Wood Elf"
  ) {
    add_click(7);
    stat_checker(wisdomModifier + 2, "form43_1");
  }

  // Block that adds proficiency in intimidation if you are a Half-Orc
  if (race === "Half-Orc") {
    add_click(24);
    stat_checker(charismaModifier + 2, "form44_1");
  }

  // Function to choose a random musical instrument
  function random_musical_instrument() {
    random = Math.floor(Math.random() * 10);
    if (random === 0) {
      return "Gaita";
    } else if (random === 1) {
      return "Tambor";
    } else if (random === 2) {
      return "Salterio";
    } else if (random === 3) {
      return "Flauta";
    } else if (random === 4) {
      return "Laúd";
    } else if (random === 5) {
      return "Lira";
    } else if (random === 6) {
      return "Cuerno";
    } else if (random === 7) {
      return "Flauta de Pan";
    } else if (random === 8) {
      return "Chirimía";
    } else if (random === 9) {
      return "Viola";
    }
    
  }

  // Function to determine what equipment/spells/features you should have based on your class
  function equipment_chooser(classAndLevel) {
    random = Math.random();
    random2 = Math.random();
    if (classAndLevel === "Barbarian 1") {
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
          document.getElementById("form79_1").value = "Tridente"; // 1st weapon 1st section
          stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(dexterityModifier, "form76_1", "1d6/8", "P"); // 1st weapon 3rd section

            equipment.push("Ballesta pesada");
            document.getElementById("form78_1").value = "Ballesta pesada"; // 2nd weapon 1st section
          stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
          stat_checker_3(dexterityModifier, "form74_1", "1d10", "P"); // 2nd weapon 3rd section
        } else {
          equipment.push("Pico de Guerra");
            document.getElementById("form79_1").value = "Pico de Guerra"; // 1ra arma 1ra sección
          stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(dexterityModifier, "form76_1", "1d8", "P"); // 1st weapon 3rd section

          equipment.push("Arco largo");
            document.getElementById("form78_1").value = "Arco largo"; // 2da arma 1ra sección
          stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
          stat_checker_3(dexterityModifier, "form74_1", "1d8", "P"); // 2nd weapon 3rd section
        }
      } else {
        if (random > 0.666) {
          equipment.push("Hacha grande");
            document.getElementById("form79_1").value = "Hacha grande"; // 1ra arma 1ra sección
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d12", "S"); // 1st weapon 3rd section
        } else if (random > 0.333) {
          equipment.push("Espada grande");
            document.getElementById("form79_1").value = "Espada grande"; // 1ra arma 1ra sección
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "2d6", "S"); // 1st weapon 3rd section
        } else {
          equipment.push("Maza");
            document.getElementById("form79_1").value = "Maza"; // 1ra arma 1ra sección
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "2d6", "B"); // 1st weapon 3rd section
        }
        equipment.push("Hacha de mano x2");
        document.getElementById("form78_1").value = "Hacha de mano"; // 2da arma 1ra sección
        stat_checker(strengthModifier + 2, "form65_1"); // 2nd weapon 2nd section
        stat_checker_3(strengthModifier, "form74_1", "1d6", "S"); // 2nd weapon 3rd section
      }
    } else if (classAndLevel === "Bard 1") {
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
      equipment.push(musicalinstrument + " - Foco");
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
      document.getElementById("form78_1").value = "Daga"; // 2nd weapon 1st section
      if (strength > dexterity) {
        stat_checker(strengthModifier + 2, "form65_1"); // 2nd weapon 2nd section
        stat_checker_3(strengthModifier, "form74_1", "1d4", "P"); // 2nd weapon 3rd section
        equipment.push("Espada larga");
        document.getElementById("form79_1").value = "Espada larga"; // 1st weapon 1st section
        stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(strengthModifier, "form76_1", "1d8", "S"); // 1st weapon 3rd section
      } else {
        equipment.push("Estoque");
        document.getElementById("form79_1").value = "Estoque"; // 1ra arma 1ra sección
        stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(dexterityModifier, "form76_1", "1d8", "P"); // 1st weapon 3rd section
        stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
        stat_checker_3(dexterityModifier, "form74_1", "1d4", "P"); // 2nd weapon 3rd section
      }
      if (random2 > 0.5) {
        equipment.push("Paquete de diplomático");
      } else {
        equipment.push("Paquete de artista");
      }
        } else if (classAndLevel === "Cleric 1") {
      if (random2 > 0.5) {
        equipment.push("Paquete de explorador");
      } else {
        equipment.push("Paquete de sacerdote");
      }
      equipment.push("Escudo");
      equipment.push("Un símbolo sagrado");
      if (clericBuild === "STR") {
        equipment.push("Handaxe");
        document.getElementById("form78_1").value = "Handaxe"; // 2nd weapon 1st section
        stat_checker(strengthModifier + 2, "form65_1"); // 2nd weapon 2nd section
        stat_checker_3(strengthModifier, "form74_1", "1d6", "S"); // 2nd weapon 3rd section
        if (random > 0.66) {
            equipment.push("Maza");
          document.getElementById("form79_1").value = "Maza"; // 1st weapon 1st section
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d6", "B"); // 1st weapon 3rd section
            features.push("Dominio del Clérigo: Vida.");
            if (wisdomModifier === 0) {
            document.getElementById("form137_3").value = "Palabra Curativa";
            } else if (wisdomModifier === 1) {
            document.getElementById("form137_3").value = "Palabra Curativa";
            document.getElementById("form136_3").value = "Guiar Rayo";
            } else if (wisdomModifier === 2) {
            document.getElementById("form137_3").value = "Palabra Curativa";
            document.getElementById("form136_3").value = "Guiar Rayo";
            document.getElementById("form135_3").value = "Bendición";
            } else if (wisdomModifier === 3) {
            document.getElementById("form137_3").value = "Palabra Curativa";
            document.getElementById("form136_3").value = "Guiar Rayo";
            document.getElementById("form135_3").value = "Bendición";
            document.getElementById("form133_3").value = "Escudo de Fe";
            } else if (wisdomModifier === 4) {
            document.getElementById("form137_3").value = "Palabra Curativa";
            document.getElementById("form136_3").value = "Guiar Rayo";
            document.getElementById("form135_3").value = "Bendición";
            document.getElementById("form133_3").value = "Escudo de Fe";
            document.getElementById("form131_3").value = "Purificar Comida y Bebida";
            } else if (wisdomModifier === 5) {
            document.getElementById("form137_3").value = "Palabra Curativa";
            document.getElementById("form136_3").value = "Guiar Rayo";
            document.getElementById("form135_3").value = "Bendición";
            document.getElementById("form133_3").value = "Escudo de Fe";
            document.getElementById("form131_3").value = "Purificar Comida y Bebida";
            document.getElementById("form129_3").value = "Detectar el Bien y el Mal";
            }
            document.getElementById("form213_3").value = "Guía";
            document.getElementById("form204_3").value = "Llama Sagrada";
            document.getElementById("form203_3").value = "Revivir a los Muertos";
            armor_adder_2(armor_adder("armadura pesada"));
            equipment.push("Cota de malla");
            features.push(
            "Discípulo de la Vida: Siempre que uses un hechizo de nivel 1 o superior para restaurar puntos de golpe, el objetivo recupera puntos de golpe adicionales iguales a 2 + el nivel del hechizo."
            );
            document.getElementById("form193_3").value = "Bendecir";
            document.getElementById("form159_3").value = "Curar Heridas";
        if (random > 0.33) {
          features.push("Dominio del Clérigo: Guerra.");
          armor_adder_2(armor_adder("armadura pesada"));
          equipment.push("Cota de malla");
          weapon_adder_2(weapon_adder("armas marciales"));
          equipment.push("Martillo de guerra");
          document.getElementById("form213_3").value = "Guía";
          document.getElementById("form204_3").value = "Llama Sagrada";
          document.getElementById("form203_3").value = "Taumaturgia";
          if (wisdomModifier === 0) {
            document.getElementById("form137_3").value = "Bendecir";
          } else if (wisdomModifier === 1) {
            document.getElementById("form137_3").value = "Bendecir";
            document.getElementById("form136_3").value = "Palabra Curativa";
          } else if (wisdomModifier === 2) {
            document.getElementById("form137_3").value = "Bendecir";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
          } else if (wisdomModifier === 3) {
            document.getElementById("form137_3").value = "Bendecir";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Condenar";
          } else if (wisdomModifier === 4) {
            document.getElementById("form137_3").value = "Bendecir";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Condenar";
            document.getElementById("form131_3").value = "Curar Heridas";
          } else if (wisdomModifier === 5) {
            document.getElementById("form137_3").value = "Bendecir";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Condenar";
            document.getElementById("form131_3").value = "Curar Heridas";
            document.getElementById("form129_3").value = "Ordenar";
          }
          document.getElementById("form79_1").value = "Martillo de guerra"; // 1ra arma 1ra sección
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d8", "B"); // 1st weapon 3rd section
          document.getElementById("form193_3").value = "Favor Divino";
          document.getElementById("form159_3").value = "Escudo de Fe";
          if (wisdomModifier <= 0) {
            lightGo = 1;
          } else {
            lightGo = wisdomModifier;
          }
          features.push(
            "Sacerdote de Guerra (" +
              lightGo +
              "/lr): Cuando usas la acción de Ataque, puedes hacer un ataque con arma como acción adicional. Puede usarse igual a tu modificador de SAB (mínimo una vez) por descanso largo."
          );
        } else {
          features.push("Dominio del Clérigo: Naturaleza.");
          armor_adder_2(armor_adder("armadura pesada"));
          equipment.push("Maza");
          document.getElementById("form79_1").value = "Maza"; // 1ra arma 1ra sección
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d6", "B"); // 1st weapon 3rd section
          document.getElementById("form213_3").value = "Guía";
          document.getElementById("form204_3").value = "Llama Sagrada";
          document.getElementById("form203_3").value = "Reparar";
          document.getElementById("form202_3").value = "Shilelagh";
          equipment.push("Cota de malla");
          if (wisdomModifier === 0) {
            document.getElementById("form137_3").value = "Bendecir";
          } else if (wisdomModifier === 1) {
            document.getElementById("form137_3").value = "Bendecir";
            document.getElementById("form136_3").value = "Palabra Curativa";
          } else if (wisdomModifier === 2) {
            document.getElementById("form137_3").value = "Bendecir";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
          } else if (wisdomModifier === 3) {
            document.getElementById("form137_3").value = "Bendecir";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Condenar";
          } else if (wisdomModifier === 4) {
            document.getElementById("form137_3").value = "Bendecir";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Condenar";
            document.getElementById("form131_3").value = "Curar Heridas";
          } else if (wisdomModifier === 5) {
            document.getElementById("form137_3").value = "Bendecir";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Condenar";
            document.getElementById("form131_3").value = "Curar Heridas";
            document.getElementById("form129_3").value = "Santuario";
          }
          document.getElementById("form193_3").value = "Amistad con los Animales";
          document.getElementById("form159_3").value = "Hablar con los Animales";
          if (
            random === 1 &&
            document.getElementById("form8_1").checked === undefined
          ) {
            add_click(8);
            stat_checker(wisdomModifier + 2, "form50_1"); // manejo de animales
          } else if (
            random === 10 &&
            document.getElementById("form11_1").checked === undefined
          ) {
            add_click(11);
            stat_checker(intelligenceModifier + 2, "form37_1"); // naturaleza
          } else if (
            random === 16 &&
            document.getElementById("form12_1").checked === undefined
          ) {
            add_click(12);
            stat_checker(wisdomModifier + 2, "form47_1"); // supervivencia
          } else {
            add_click(11);
            stat_checker(intelligenceModifier + 2, "form37_1"); // naturaleza
          }
        }
      } else if (clericBuild === "DEX") {
        equipment.push("Light crossbow w/ 20 bolts");
        document.getElementById("form78_1").value = "Light CB"; // 2nd weapon 1st section
        stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
        stat_checker_3(dexterityModifier, "form74_1", "1d8", "P"); // 2nd weapon 3rd section
        if (random > 0.66) {
          features.push("Cleric Domain: Trickery.");
          document.getElementById("form213_3").value = "Guidance";
          document.getElementById("form204_3").value = "Mending";
          document.getElementById("form203_3").value = "Light";
          if (wisdomModifier === 0) {
            document.getElementById("form137_3").value = "Bless";
          } else if (wisdomModifier === 1) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
          } else if (wisdomModifier === 2) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Guiding Bolt";
          } else if (wisdomModifier === 3) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Guiding Bolt";
            document.getElementById("form133_3").value = "Bane";
          } else if (wisdomModifier === 4) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Guiding Bolt";
            document.getElementById("form133_3").value = "Bane";
            document.getElementById("form131_3").value = "Cure Wounds";
          } else if (wisdomModifier === 5) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Guiding Bolt";
            document.getElementById("form133_3").value = "Bane";
            document.getElementById("form131_3").value = "Cure Wounds";
            document.getElementById("form129_3").value = "Detect Magic";
          }
          document.getElementById("form193_3").value = "Charm Person";
          document.getElementById("form159_3").value = "Disguise Self";
          equipment.push("Armadura de cuero");");
          features.push(
            "Blessing of the Trickster: You can use your action to touch a willing creature other than yourself to give it advantage on Stealth checks. This blessing lasts for 1 hour or until you use this feature again."
          );
          equipment.push("Maza");
          document.getElementById("form79_1").value = "Maza"; // 1st weapon 1st section
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d6", "B"); // 1st weapon 3rd section
        } else if (random > 0.33) {
          features.push("Cleric Domain: Tempest.");
          armor_adder_2(armor_adder("heavy armor"));
          equipment.push("Chain mail");
          weapon_adder_2(weapon_adder("martial weapons"));
          equipment.push("Warhammer");
          document.getElementById("form213_3").value = "Guidance";
          document.getElementById("form204_3").value = "Sacred Flame";
          document.getElementById("form203_3").value = "Thaumaturgy";
          if (wisdomModifier === 0) {
            document.getElementById("form137_3").value = "Bless";
          } else if (wisdomModifier === 1) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
          } else if (wisdomModifier === 2) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Guiding Bolt";
          } else if (wisdomModifier === 3) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Guiding Bolt";
            document.getElementById("form133_3").value = "Bane";
          } else if (wisdomModifier === 4) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Guiding Bolt";
            document.getElementById("form133_3").value = "Bane";
            document.getElementById("form131_3").value = "Cure Wounds";
          } else if (wisdomModifier === 5) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Guiding Bolt";
            document.getElementById("form133_3").value = "Bane";
            document.getElementById("form131_3").value = "Cure Wounds";
            document.getElementById("form129_3").value = "Detect Magic";
          }
          document.getElementById("form79_1").value = "Warhammer"; // 1st weapon 1st section
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d8", "B"); // 1st weapon 3rd section
          document.getElementById("form193_3").value = "Fog Cloud";
          document.getElementById("form159_3").value = "Thunderwave";
          if (wisdomModifier <= 0) {
            lightGo = 1;
          } else {
            lightGo = wisdomModifier;
          }
          features.push(
            "Wrath of the Storm (" +
              lightGo +
              "/lr): When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a DEX saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one. Can be used = to WIS modifier (minimum of once) per long rest."
          );
        } else {
          features.push("Cleric Domain: Death.");
          weapon_adder_2(weapon_adder("martial weapons"));
          equipment.push("Warhammer");
          document.getElementById("form213_3").value = "Guidance";
          document.getElementById("form204_3").value = "Sacred Flame";
          document.getElementById("form203_3").value = "Spare the Dying";
          document.getElementById("form79_1").value = "Warhammer"; // 1st weapon 1st section
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d8", "B"); // 1st weapon 3rd section
          document.getElementById("form202_3").value = "Chill Touch";
          equipment.push("Scale mail");
          if (wisdomModifier === 0) {
            document.getElementById("form137_3").value = "Bane";
          } else if (wisdomModifier === 1) {
            document.getElementById("form137_3").value = "Bane";
            document.getElementById("form136_3").value = "Healing Word";
          } else if (wisdomModifier === 2) {
            document.getElementById("form137_3").value = "Bane";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Inflict Wounds";
          } else if (wisdomModifier === 3) {
            document.getElementById("form137_3").value = "Bane";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Inflict Wounds";
            document.getElementById("form133_3").value = "Bless";
          } else if (wisdomModifier === 4) {
            document.getElementById("form137_3").value = "Bane";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Inflict Wounds";
            document.getElementById("form133_3").value = "Bless";
            document.getElementById("form131_3").value = "Guiding Bolt";
          } else if (wisdomModifier === 5) {
            document.getElementById("form137_3").value = "Bane";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Inflict Wounds";
            document.getElementById("form133_3").value = "Bless";
            document.getElementById("form131_3").value = "Guiding Bolt";
            document.getElementById("form129_3").value = "Cure Wounds";
          }
          document.getElementById("form193_3").value = "False Life";
          document.getElementById("form159_3").value = "Ray of Sickness";
          features.push(
            "Reaper: You learn one neromancy cantrip, and when you cast a necromancy cantrip that normally targets only one creature, the spell instead targets two creatures within range and within 5 feet of each other."
          );
        }
      } else if (clericBuild === "WIS") {
        equipment.push("Maza");
        document.getElementById("form79_1").value = "Maza"; // 1st weapon 1st section
        stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(strengthModifier, "form76_1", "1d6", "B"); // 1st weapon 3rd section
        equipment.push("Light crossbow w/ 20 bolts");
        document.getElementById("form78_1").value = "Light CB"; // 2nd weapon 1st section
        stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
        stat_checker_3(dexterityModifier, "form74_1", "1d8", "P"); // 2nd weapon 3rd section
        if (random > 0.66) {
          features.push("Cleric Domain: Knowledge.");
          document.getElementById("form213_3").value = "Guidance";
          document.getElementById("form204_3").value = "Sacred Flame";
          document.getElementById("form203_3").value = "Thaumaturgy";
          if (wisdomModifier === 0) {
            document.getElementById("form137_3").value = "Bless";
          } else if (wisdomModifier === 1) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
          } else if (wisdomModifier === 2) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Guiding Bolt";
          } else if (wisdomModifier === 3) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Guiding Bolt";
            document.getElementById("form133_3").value = "Bane";
          } else if (wisdomModifier === 4) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Guiding Bolt";
            document.getElementById("form133_3").value = "Bane";
            document.getElementById("form131_3").value = "Cure Wounds";
          } else if (wisdomModifier === 5) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Guiding Bolt";
            document.getElementById("form133_3").value = "Bane";
            document.getElementById("form131_3").value = "Cure Wounds";
            document.getElementById("form129_3").value = "Detect Magic";
          }
          equipment.push("Scale mail");
          knowledgeLanguage = random_language();
          knowledgeLanguage = right_language2(knowledgeLanguage);
          profsAndLangs.languages.push(knowledgeLanguage);
          knowledgeLanguage2 = random_language();
          knowledgeLanguage2 = right_language2(knowledgeLanguage2);
          profsAndLangs.languages.push(knowledgeLanguage2);
          document.getElementById("form193_3").value = "Command";
          document.getElementById("form159_3").value = "Identify";
          for (var _i10 = 0; _i10 < 2; _i10++) {
            if (document.getElementById("form20_1").checked === undefined) {
              add_click(20);
              stat_checker(intelligenceModifier + 4, "form33_1"); // religion
              features.push("Knowledge Double Proficiency: Religion.");
            } else if (
              document.getElementById("form9_1").checked === undefined
            ) {
              add_click(9);
              stat_checker(intelligenceModifier + 4, "form48_1"); // history
              features.push("Knowledge Double Proficiency: History.");
            } else if (
              document.getElementById("form21_1").checked === undefined
            ) {
              add_click(21);
              stat_checker(intelligenceModifier + 4, "form40_1"); // arcana
              features.push("Knowledge Double Proficiency: Arcana.");
            } else if (
              document.getElementById("form11_1").checked === undefined
            ) {
              add_click(11);
              stat_checker(intelligenceModifier + 4, "form37_1"); // nature
              features.push("Knowledge Double Proficiency: Nature.");
            }
          }
        } else if (random > 0.33) {
          features.push("Cleric Domain: Light.");
          document.getElementById("form213_3").value = "Guidance";
          document.getElementById("form204_3").value = "Sacred Flame";
          document.getElementById("form203_3").value = "Thaumaturgy";
          document.getElementById("form202_3").value = "Light";
          equipment.push("Scale mail");
          if (wisdomModifier === 0) {
            document.getElementById("form137_3").value = "Bless";
          } else if (wisdomModifier === 1) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
          } else if (wisdomModifier === 2) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Guiding Bolt";
          } else if (wisdomModifier === 3) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Guiding Bolt";
            document.getElementById("form133_3").value = "Bane";
          } else if (wisdomModifier === 4) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Guiding Bolt";
            document.getElementById("form133_3").value = "Bane";
            document.getElementById("form131_3").value = "Cure Wounds";
          } else if (wisdomModifier === 5) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Guiding Bolt";
            document.getElementById("form133_3").value = "Bane";
            document.getElementById("form131_3").value = "Cure Wounds";
            document.getElementById("form129_3").value = "Command";
          }
          document.getElementById("form193_3").value = "Burning Hands";
          document.getElementById("form159_3").value = "Faerie Fire";
          if (wisdomModifier <= 0) {
            lightGo = 1;
          } else {
            lightGo = wisdomModifier;
          }
          features.push(
            "Warding Flare (" +
              lightGo +
              "/lr): When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll causing light to flare before the attacker before it hits or misses. An attacker can't be blinded is immune to this feature. You can use this equal to your WIS modifier (minimum of once) per long rest."
          );
        } else {
          features.push("Cleric Domain: Arcana.");
          document.getElementById("form213_3").value = "Guidance";
          document.getElementById("form204_3").value = "Sacred Flame";
          document.getElementById("form203_3").value = "Thaumaturgy";
          document.getElementById("form202_3").value = "Acid Splash";
          document.getElementById("form201_3").value = "Frostbite";
          if (wisdomModifier === 0) {
            document.getElementById("form137_3").value = "Bless";
          } else if (wisdomModifier === 1) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
          } else if (wisdomModifier === 2) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Guiding Bolt";
          } else if (wisdomModifier === 3) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Guiding Bolt";
            document.getElementById("form133_3").value = "Bane";
          } else if (wisdomModifier === 4) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Guiding Bolt";
            document.getElementById("form133_3").value = "Bane";
            document.getElementById("form131_3").value = "Cure Wounds";
          } else if (wisdomModifier === 5) {
            document.getElementById("form137_3").value = "Bless";
            document.getElementById("form136_3").value = "Healing Word";
            document.getElementById("form135_3").value = "Guiding Bolt";
            document.getElementById("form133_3").value = "Bane";
            document.getElementById("form131_3").value = "Cure Wounds";
            document.getElementById("form129_3").value = "Sanctuary";
          }
          equipment.push("Scale mail");
          document.getElementById("form193_3").value = "Detect Magic";
          document.getElementById("form159_3").value = "Magic Missile";
          add_click(21);
          stat_checker(intelligenceModifier + 4, "form40_1"); // arcana
        }
      }
    } else if (classAndLevel === "Druid 1") {
      tool_adder_2(tool_adder("herbalism kit"));
      profsAndLangs.languages.push("Druidic");
      features.push(
        "Druidic: You know the language Druidic, you can see hidden messages of druids and speak the language. Those who don't know Druidic can see the message with a succesful DC 15 Wisdom check, but cannot decipher it."
      );
      equipment.push("Armadura de cuero");");
      equipment.push("Explorer's pack");
      if (random2 > 0.5) {
        equipment.push("Wooden shield");
      } else {
        equipment.push("Shortbow");
        document.getElementById("form78_1").value = "Shortbow"; // 2nd weapon 1st section
        stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
        stat_checker_3(dexterityModifier, "form74_1", "1d6", "P"); // 2nd weapon 3rd section
      }
      if (strength > dexterity) {
        equipment.push("Quarterstaff");
        document.getElementById("form79_1").value = "Quarterstaff"; // 1st weapon 1st section
        stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(strengthModifier, "form76_1", "1d6/10", "B"); // 1st weapon 3rd section
        equipment.push("Petrified bear heart - Focus");
      } else if (random > 0.8) {
        equipment.push("Scimitar");
        document.getElementById("form79_1").value = "Scimitar"; // 1st weapon 1st section
        if (dexterity > strength) {
          stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(dexterityModifier, "form76_1", "1d6", "S"); // 1st weapon 3rd section
        } else {
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d6", "S"); // 1st weapon 3rd section
        }
        equipment.push("Yew branch - Focus");
      } else if (random > 0.6) {
        equipment.push("Spear");
        document.getElementById("form79_1").value = "Spear"; // 1st weapon 1st section
        stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(dexterityModifier, "form76_1", "1d6", "P"); // 1st weapon 3rd section
        equipment.push("Opalized oak wand - Focus");
      } else if (random > 0.2) {
        equipment.push("Scimitar");
        document.getElementById("form79_1").value = "Scimitar"; // 1st weapon 1st section
        if (dexterity > strength) {
          stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(dexterityModifier, "form76_1", "1d6", "S"); // 1st weapon 3rd section
        } else {
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d6", "S"); // 1st weapon 3rd section
        }
        equipment.push("Dreamcatcher willow totem - Focus");
      } else if (random <= 0.2) {
        equipment.push("Spear");
        document.getElementById("form79_1").value = "Spear"; // 1st weapon 1st section
        stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(dexterityModifier, "form76_1", "1d6", "P"); // 1st weapon 3rd section
        equipment.push("Animal totem staff - Focus");
      }
    } else if (classAndLevel === "Fighter 1") {
      features.push(
        "Second Wind (1/r): On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level."
      );
      spellcastingSection.push(
        "Second Wind (1/r): Use a bonus action to gain 1d10 + 1 hp."
      );
      spellcastingSection.push(" ");
      if (strength > dexterity) {
        equipment.push("Chain mail");
        equipment.push("Hacha de mano x2");
        document.getElementById("form78_1").value = "Handaxe"; // 2nd weapon 1st section
        stat_checker(strengthModifier + 2, "form65_1"); // 2nd weapon 2nd section
        stat_checker_3(strengthModifier, "form74_1", "1d6", "S"); // 2nd weapon 3rd section
        if (strength > constitution) {
          equipment.push("Dungeoneer's pack");
          features.push(
            "Fighting Style: Great Weapon Fighting, when you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must be a two-handed weapon or have the versatile property to gain this benefit."
          );
          spellcastingSection.push(
            "Great Weapon Fighting: Reroll damage rolls that are a 1 or a 2, once per roll."
          );

          equipment.push("Espada grande");
          document.getElementById("form79_1").value = "Espada grande"; // 1st weapon 1st section
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "2d6", "S"); // 1st weapon 3rd section

          equipment.push(Maza);
          document.getElementById("form77_1").value = Maza; // 3rd weapon 1st section
          stat_checker(strengthModifier + 2, "form66_1"); // 3rd weapon 2nd section
          stat_checker_3(strengthModifier, "form75_1", "2d6", "B"); // 3rd weapon 3rd section
        } else {
          equipment.push("Explorer's pack");
          if (random2 > 0.5) {
            features.push(
              "Fighting Style: Dueling, when you are wielding a melee wepaon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."
            );
            spellcastingSection.push("Dueling: +2 bonus to damage rolls");
          } else {
            features.push(
              "Fighting Style: Protection, When a creature you can see attacks a target other than you that is within 5 feet o f you, you can use your reaction to impose disadvantage on the attack roll. You must be w ielding a shield."
            );
            spellcastingSection.push(
              "Protection: Can use reaction to impose DA on the attack roll of an enemy."
            );
          }
          if (random > 0.75) {
            equipment.push("Shield");
            equipment.push("Warhammer");
            document.getElementById("form79_1").value = "Warhammer"; // 1st weapon 1st section
            stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
            stat_checker_3(strengthModifier, "form76_1", "1d8", "B"); // 1st weapon 3rd section
          } else if (random > 0.5) {
            equipment.push("Shield");
            equipment.push("Espada larga");
            document.getElementById("form79_1").value = "Espada larga"; // 1st weapon 1st section
            stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
            stat_checker_3(strengthModifier, "form76_1", "1d8", "S"); // 1st weapon 3rd section
          } else if (random > 0.25) {
            equipment.push("Shield");
            equipment.push("Flail");
            document.getElementById("form79_1").value = "Flail"; // 1st weapon 1st section
            stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
            stat_checker_3(strengthModifier, "form76_1", "1d8", "B"); // 1st weapon 3rd section
          } else {
            equipment.push("Shield");
            equipment.push("Morningstar");
            document.getElementById("form79_1").value = "Morningstar"; // 1st weapon 1st section
            stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
            stat_checker_3(strengthModifier, "form76_1", "1d8", "P"); // 1st weapon 3rd section
          }
        }
      } else {
        equipment.push("Armadura de cuero");");
        equipment.push("Arco largo w/ 20 arrows");
        if (random > 0.5) {
          document.getElementById("form78_1").value = "Arco largo"; // 2nd weapon 1st section
          stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
          stat_checker_3(dexterityModifier, "form74_1", "1d8", "P"); // 2nd weapon 3rd section
          features.push(
            "Fighting Style: Two Weapon Fighting, can add your ability modifier to the damage of the second attack."
          );
          spellcastingSection.push(
            "Two Weapon Fighting: +" +
              dexterityModifier +
              " to offhand attacks."
          );
          equipment.push("Two scimitars");
          document.getElementById("form79_1").value = "Scimitar (L/R)"; // 1st weapon 1st section
          stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(dexterityModifier, "form76_1", "1d6", "P"); // 1st weapon 3rd section
          equipment.push("Light crossbow w/ 20 bolts");
          document.getElementById("form77_1").value = "Light CB"; // 1st weapon 1st section
          stat_checker(dexterityModifier + 2, "form66_1"); // 1st weapon 2nd section
          stat_checker_3(dexterityModifier, "form75_1", "1d8", "P"); // 1st weapon 3rd section
          equipment.push("Dungeoneer's pack");
        } else {
          features.push(
            "Fighting Style: Archery, gain a +2 bonus to attack rolls you make with ranged weapons."
          );
          spellcastingSection.push("Archery: +2 ranged attack bonus");
          spellcastingSection.push(" ");
          spellcastingSection.push(
            "Shortsword  " +
              stat_checker_no_id(dexterityModifier + 2) +
              "  1d8" +
              stat_checker_no_id(dexterityModifier) +
              " P"
          );
          equipment.push("Hand crossbow");
          document.getElementById("form79_1").value = "Hand CB"; // 1st weapon 1st section
          stat_checker(dexterityModifier + 4, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(dexterityModifier, "form76_1", "1d6", "P"); // 1st weapon 3rd section
          equipment.push("Light crossbow w/ 20 bolts");
          document.getElementById("form77_1").value = "Light CB"; // 3rd weapon 1st section
          stat_checker(dexterityModifier + 4, "form66_1"); // 3rd weapon 2nd section
          stat_checker_3(dexterityModifier, "form75_1", "1d8", "P"); // 3rd weapon 3rd section
          equipment.push("Shortsword");
          equipment.push("Explorer's pack");
          document.getElementById("form78_1").value = "Arco largo"; // 2nd weapon 1st section
          stat_checker(dexterityModifier + 4, "form65_1"); // 2nd weapon 2nd section
          stat_checker_3(dexterityModifier, "form74_1", "1d8", "P"); // 2nd weapon 3rd section
        }
      }
    } else if (classAndLevel === "Monk 1") {
      features.push(
        "Unarmored Defense: While you are not wearing any armor or shields, your armor class equals 10 + your dexterity modifier + your wisdom modifier."
      );
      features.push(
        "Martial Arts: You gain the following benefits when you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield:\rYou can use DEX instead of STR for atk and dmg rolls of your unarmed strikes or monk weapons.\rYou can roll a d4 in place of the normal dmg of your unarmed strike or monk weapon.\rWhenever you use the Attack action with an unarmed strike or monk weapon, you can use your bonus action to make an unarmed strike as well."
      );
      spellcastingSection.push(
        "Martial Arts: When you attack with the above weapons, you can use your bonus action to make an unarmed strike."
      );
      musicalinstrument = random_musical_instrument();
      tool_adder_2(tool_adder(musicalinstrument));
      randomAritsanTool = random_artisan_tool();
      tool_adder_2(tool_adder(randomAritsanTool));
      document.getElementById("form78_1").value = "Unarmed"; // 2nd weapon 1st section
      stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
      stat_checker_3(dexterityModifier, "form74_1", "1d4", "B"); // 2nd weapon 3rd section
      if (random2 > 0.5) {
        equipment.push("Dungeoneer's pack");
      } else {
        equipment.push("Explorer's pack");
      }
      equipment.push("Ten darts");
      document.getElementById("form77_1").value = "Dart"; // 3rd weapon 1st section
      stat_checker(dexterityModifier + 2, "form66_1"); // 3rd weapon 2nd section
      stat_checker_3(dexterityModifier, "form75_1", "1d4", "P"); // 3rd weapon 3rd section
      if (random > 0.666) {
        equipment.push("Nunchaku");
        document.getElementById("form79_1").value = "Nunchaku"; // 1st weapon 1st section
        stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(dexterityModifier, "form76_1", "1d4", "B"); // 1st weapon 3rd section
      } else if (random > 0.333) {
        equipment.push("Kama");
        document.getElementById("form79_1").value = "Kama"; // 1st weapon 1st section
        stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(dexterityModifier, "form76_1", "1d4", "S"); // 1st weapon 3rd section
      } else {
        equipment.push("Quarterstaff");
        document.getElementById("form79_1").value = "Quarterstaff"; // 1st weapon 1st section
        stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(dexterityModifier, "form76_1", "1d6", "B"); // 1st weapon 3rd section
      }
    } else if (classAndLevel === "Paladin 1") {
      equipment.push("Chain mail");
      features.push(
        "Divine Sense (" +
          (charismaModifier + 1) +
          "/lr: As an action, until the end of your next turn, you know the location of any celestial, fiend, or Undead within 60 feet of you that is not behind total cover. You know the type of any being whose presence you sense, but not its identity. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated."
      );
      features.push(
        "Lay on Hands (5 hp/lr): You can restore a total number of hit points equal to your paladin level x 5. As an action, you can use your pool to heal a target. Alternatively, you can expend 5 hit points from your pool to cure the target of one disease or neutralize one poison affecting it. No effect on Undead and constructs."
      );
      spellcastingSection.push(
        "Lay on Hands (5 hp/lr): As an action you can heal another creature or cure them of disease or poison."
      );
      if (alignment[0] === "Lawful" && alignment[1] === "Good") {
        equipment.push("Silver bracer - Symbol");
        alliesAndOrganizations.push(
          "Pholtus - God of light and law, I will protect the good and bright light to such dark times like the present. This is my moment, this is his will."
        );
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Neutral" && alignment[1] === "Good") {
        equipment.push("Sun tattoo on right palm - Symbol");
        alliesAndOrganizations.push(
          "Pelor, God of the sun and healing, the sun has been beating on my back my entire life, I have only just begun to appreciate the wonders it has presented me."
        );
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Chaotic" && alignment[1] === "Good") {
        equipment.push("Triangular star ring - Symbol");
        alliesAndOrganizations.push(
          "Lliira - Goddess of joy, I won't let anyone take others happiness away, not even for a second if I can help it."
        );
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Lawful" && alignment[1] === "Neutral") {
        equipment.push("Partially-burnt gauntlet - Symbol");
        alliesAndOrganizations.push(
          "Helm, God of protection, I will uplift the just, and smite the self-righteous and wicked."
        );
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Neutral" && alignment[1] === "Neutral") {
        equipment.push("Fire-glass necklace - Symbol");
        alliesAndOrganizations.push(
          "Sirrion, God of fire and change, he will guide me through the world, and the chaos amongst it."
        );
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Chaotic" && alignment[1] === "Neutral") {
        equipment.push("Father's fingerbones - Symbol");
        alliesAndOrganizations.push(
          "The Traveler - deity of chaos and change, I feel like things only get better with change, and I am a catalyst."
        );
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Lawful" && alignment[1] === "Evil") {
        equipment.push("Black glove - Symbol");
        alliesAndOrganizations.push(
          "Bane - God of Tyranny, my one true master."
        );
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Neutral" && alignment[1] === "Evil") {
        equipment.push("Dragonshard stone (fang-shaped) - Symbol");
        alliesAndOrganizations.push(
          "The Keeper, God of greed and death, I will gain everything in this world, I will devour this planet."
        );
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Chaotic" && alignment[1] === "Evil") {
        equipment.push("Skull of a wicked man - Symbol");
        alliesAndOrganizations.push(
          "Iuz - God of pain and oppression, I will worship this man as a vehicle for the pain and suffering that my wife suffered at the hands of those men."
        );
        alliesAndOrganizations.push(" ");
      }
      if (strength > charisma && strength > constitution) {
        equipment.push("Explorer's pack");
        equipment.push("Espada grande");
        document.getElementById("form79_1").value = "Espada grande"; // 1st weapon 1st section
        stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(strengthModifier, "form76_1", "2d6", "S"); // 1st weapon 3rd section

        equipment.push(Maza);
        document.getElementById("form77_1").value = Maza; // 3rd weapon 1st section
        stat_checker(strengthModifier + 2, "form66_1"); // 3rd weapon 2nd section
        stat_checker_3(strengthModifier, "form75_1", "2d6", "B"); // 3rd weapon 3rd section

        equipment.push("Five javelins");
        document.getElementById("form78_1").value = "Javelin"; // 2nd weapon 1st section
        stat_checker(strengthModifier + 2, "form65_1"); // 2nd weapon 2nd section
        stat_checker_3(strengthModifier, "form74_1", "1d6", "P"); // 2nd weapon 3rd section
      } else {
        equipment.push("Priest's pack");
        if (random > 0.75) {
          equipment.push("Shield");
          equipment.push("Warhammer");
          document.getElementById("form79_1").value = "Warhammer"; // 1st weapon 1st section
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d8", "B"); // 1st weapon 3rd section
        } else if (random > 0.5) {
          equipment.push("Shield");
          equipment.push("Espada larga");
          document.getElementById("form79_1").value = "Espada larga"; // 1st weapon 1st section
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d8", "S"); // 1st weapon 3rd section
        } else if (random > 0.25) {
          equipment.push("Shield");
          equipment.push("Flail");
          document.getElementById("form79_1").value = "Flail"; // 1st weapon 1st section
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d8", "B"); // 1st weapon 3rd section
        } else {
          equipment.push("Shield");
          equipment.push("Morningstar");
          document.getElementById("form79_1").value = "Morningstar"; // 1st weapon 1st section
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d8", "P"); // 1st weapon 3rd section
        }

        if (random > 0.5) {
          equipment.push("Five javelins");
          document.getElementById("form78_1").value = "Javelin"; // 2nd weapon 1st section
          stat_checker(strengthModifier + 2, "form65_1"); // 2nd weapon 2nd section
          stat_checker_3(strengthModifier, "form74_1", "1d6", "P"); // 2nd weapon 3rd section
        } else if (random > 0.25) {
          equipment.push("Greatclub");
          document.getElementById("form78_1").value = "Greatclub"; // 2nd weapon 1st section
          stat_checker(strengthModifier + 2, "form65_1"); // 2nd weapon 2nd section
          stat_checker_3(strengthModifier, "form74_1", "1d8", "B"); // 2nd weapon 3rd section
        } else {
          equipment.push("Spear");
          document.getElementById("form78_1").value = "Spear"; // 2nd weapon 1st section
          stat_checker(strengthModifier + 2, "form65_1"); // 2nd weapon 2nd section
          stat_checker_3(strengthModifier, "form74_1", "1d6", "P"); // 2nd weapon 3rd section
        }
      }
    } else if (classAndLevel === "Ranger 1") {
      equipment.push("Two shortswords");
      document.getElementById("form78_1").value = "Shortsword"; // 2nd weapon 1st section
      stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
      stat_checker_3(dexterityModifier, "form74_1", "1d6", "S"); // 2nd weapon 3rd section
      equipment.push("Arco largo w/ quiver of 20 arrows");
      document.getElementById("form79_1").value = "Arco largo"; // 1st weapon 1st section
      stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
      stat_checker_3(dexterityModifier, "form76_1", "1d8", "P"); // 1st weapon 3rd section
      if (random > 0.5) {
        equipment.push("Scale mail");
        equipment.push("Dungeoneer's pack");
      } else {
        equipment.push("Armadura de cuero");");
        equipment.push("Explorer's pack");
      }
      if (random2 > 0.91) {
        features.push(
          "Favored Enemy: Your favored enemies are dragons, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy."
        );
        language_adder_2(language_adder("Draconic"));
      } else if (random2 > 0.78) {
        features.push(
          "Favored Enemy: Your favored enemies are beasts, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy, if they have one."
        );
      } else if (random2 > 0.65) {
        features.push(
          "Favored Enemy: Your favored enemies are celestials, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy."
        );
        language_adder_2(language_adder("Celestial"));
      } else if (random2 > 0.52) {
        features.push(
          "Favored Enemy: Your favored enemies are fiends, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy."
        );
        language_adder_2(language_adder("Abyssal"));
      } else if (random2 > 0.39) {
        features.push(
          "Favored Enemy: Your favored enemies are elementals, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy."
        );
        language_adder_2(language_adder("Primordial"));
      } else if (random2 > 0.26) {
        features.push(
          "Favored Enemy: Your favored enemies are goblins and orcs, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy."
        );
        language_adder_2(language_adder("Orc"));
      } else if (random2 > 0.13) {
        features.push(
          "Favored Enemy: Your favored enemies are undead, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy."
        );
      } else {
        features.push(
          "Favored Enemy: Your favored enemies are giants, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy."
        );
        language_adder_2(language_adder("Giant"));
      }

      if (random > 0.91) {
        features.push(
          "Natural Explorer: Favored terrain is the Underdark, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
        );
      } else if (random > 0.78) {
        features.push(
          "Natural Explorer: Favored terrain is the Artic, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
        );
      } else if (random > 0.65) {
        features.push(
          "Natural Explorer: Favored terrain is the Coast, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
        );
      } else if (random > 0.52) {
        features.push(
          "Natural Explorer: Favored terrain is the Desert, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
        );
      } else if (random > 0.39) {
        features.push(
          "Natural Explorer: Favored terrain is the Forest, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
        );
      } else if (random > 0.26) {
        features.push(
          "Natural Explorer: Favored terrain is the Grasslands, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
        );
      } else if (random > 0.13) {
        features.push(
          "Natural Explorer: Favored terrain is the Mountains, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
        );
      } else {
        features.push(
          "Natural Explorer: Favored terrain is the Swamp, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
        );
      }
    } else if (classAndLevel === "Rogue 1") {
      tool_adder_2(tool_adder("thieves' tools"));
      equipment.push("Estoque");
      document.getElementById("form79_1").value = "Estoque"; // 1st weapon 1st section
      stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
      stat_checker_3(dexterityModifier, "form76_1", "1d8", "P"); // 1st weapon 3rd section
      equipment.push("Armadura de cuero");");
      equipment.push("Two Dagas");
      document.getElementById("form78_1").value = "Daga"; // 2nd weapon 1st section
      stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
      stat_checker_3(dexterityModifier, "form74_1", "1d4", "P"); // 2nd weapon 3rd section
      equipment.push("Shortbow w/ quiver of 20 arrows");
      document.getElementById("form77_1").value = "Shortbow"; // 3rd weapon 1st section
      stat_checker(dexterityModifier + 2, "form66_1"); // 3rd weapon 2nd section
      stat_checker_3(dexterityModifier, "form75_1", "1d6", "P"); // 3rd weapon 3rd section
      features.push(
        "Sneak Attack: If an enemy is getting flanked or you have advantage on the attack, you can use your sneak attack dice (1d6) on the attack (once a turn). The weapon must be a finesse or ranged weapon."
      );
      spellcastingSection.push(
        "Sneak Attack: 1d6 to first attack roll of the round that has advantage and hits."
      );
      language_adder_2(language_adder("Thieves' Cant"));
      features.push(
        "Thieves' Cant: You know the secret code of thieves and rogues everywhere, and the secret signs and jargon associated with it."
      );
      if (random > 0.5) {
        features.push(
          "Expertise: Your two skills of expertise are Stealth and Perception. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies."
        );
        equipment.push("Thieves' tools");
        stat_checker(dexterityModifier + 4, "form32_1");
        stat_checker(wisdomModifier + 4, "form43_1");
      } else if (document.getElementById("form17_1").checked === true) {
        features.push(
          "Expertise: Your two skills of expertise are Stealth and Deception. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies."
        );
        stat_checker(dexterityModifier + 4, "form32_1");
        stat_checker(charismaModifier + 4, "form36_1");
        equipment.push("Thieves' tools");
      } else if (document.getElementById("form14_1").checked === true) {
        features.push(
          "Expertise: Your two skills of expertise are Stealth and Investigation. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies."
        );
        stat_checker(dexterityModifier + 4, "form32_1");
        stat_checker(intelligenceModifier + 4, "form31_1");
        equipment.push("Thieves' tools");
      } else {
        features.push(
          "Expertise: Your two skills of expertise are Stealth and Thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies."
        );
        stat_checker(dexterityModifier + 4, "form32_1");
        equipment.push("Thieves' tools (+4)");
      } /* Levi N. Blodgett */
    } else if (classAndLevel === "Sorcerer 1") {
      equipment.push("Two Dagas");
      document.getElementById("form79_1").value = "Daga"; // 1st weapon 1st section
      stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
      stat_checker_3(dexterityModifier, "form76_1", "1d4", "P"); // 1st weapon 3rd section
      equipment.push("Light crossbow w/ 20 bolts");
      document.getElementById("form78_1").value = "Light CB"; // 2nd weapon 1st section
      stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
      stat_checker_3(dexterityModifier, "form74_1", "1d8", "P"); // 2nd weapon 3rd section
      equipment.push("Component pouch");
      if (random > 0.5) {
        equipment.push("Explorer's pack");
        if (random2 > 0.9) {
          features.push(
            "Draconic Ancestor: Black, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
          );
          features.push(
            "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
          );
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > 0.8) {
          features.push(
            "Draconic Ancestor: Blue, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
          );
          features.push(
            "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
          );
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > 0.7) {
          features.push(
            "Draconic Ancestor: Brass, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
          );
          features.push(
            "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
          );
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > 0.6) {
          features.push(
            "Draconic Ancestor: Bronze, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
          );
          features.push(
            "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
          );
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > 0.5) {
          features.push(
            "Draconic Ancestor: Copper, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
          );
          features.push(
            "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
          );
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > 0.4) {
          features.push(
            "Draconic Ancestor: Gold, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
          );
          features.push(
            "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
          );
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > 0.3) {
          features.push(
            "Draconic Ancestor: Green, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
          );
          features.push(
            "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
          );
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > 0.2) {
          features.push(
            "Draconic Ancestor: Red, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
          );
          features.push(
            "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
          );
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > 0.1) {
          features.push(
            "Draconic Ancestor: Silver, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
          );
          features.push(
            "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
          );
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > 0.0) {
          features.push(
            "Draconic Ancestor: White, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
          );
          features.push(
            "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
          );
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        }
      } else {
        equipment.push("Dungeoneer's pack");
        features.push(
          "Wild Magic Surge: Immediately after you cast a sorcerer spell of 1st level or higher, the DM can have you roll a d20. If you roll a 1, roll on the Wild Magic Surge table to create a random magical effect."
        );
        features.push(
          "Tides of Chaos (1/lr): You can gain advantage on one attack roll, ability check, or saving throw. Anytime you regain this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature."
        );
        armorClass += 10 + dexterityModifier;
      }
    } else if (classAndLevel === "Warlock 1") {
      equipment.push("Two Dagas");
      equipment.push("Component pouch");
      equipment.push("Armadura de cuero");");
      if (strength > dexterity) {
        document.getElementById("form77_1").value = "Daga"; // 3rd weapon 1st section
        stat_checker(strengthModifier + 2, "form66_1"); // 3rd weapon 2nd section
        stat_checker_3(strengthModifier, "form75_1", "1d4", "P"); // 3rd weapon 3rd section
        equipment.push("Handaxe");
        document.getElementById("form78_1").value = "Handaxe"; // 2nd weapon 1st section
        stat_checker(strengthModifier + 2, "form65_1"); // 2nd weapon 2nd section
        stat_checker_3(strengthModifier, "form74_1", "1d6", "S"); // 2nd weapon 3rd section
        equipment.push("Maza");
        document.getElementById("form79_1").value = "Maza"; // 1st weapon 1st section
        stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(strengthModifier, "form76_1", "1d6", "B"); // 1st weapon 3rd section
        equipment.push("Scholar's pack");
      } else {
        equipment.push("Quarterstaff");
        document.getElementById("form79_1").value = "Quarterstaff"; // 1st weapon 1st section
        stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(strengthModifier, "form76_1", "1d6", "B"); // 1st weapon 3rd section
        equipment.push("Dungeoneer's pack");
        document.getElementById("form77_1").value = "Daga"; // 3rd weapon 1st section
        stat_checker(dexterityModifier + 2, "form66_1"); // 3rd weapon 2nd section
        stat_checker_3(dexterityModifier, "form75_1", "1d4", "P"); // 3rd weapon 3rd section
        equipment.push("Light crossbow w/ 20 bolts");
        document.getElementById("form78_1").value = "Light CB"; // 2nd weapon 1st section
        stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
        stat_checker_3(dexterityModifier, "form74_1", "1d8", "P"); // 2nd weapon 3rd section
      }
      if (random2 > 0.666) {
        features.push("Otherworldly Patron: Archfey.");
        document.getElementById("form193_3").value = "Faerie Fire";
        document.getElementById("form159_3").value = "Sleep";
        features.push(
          "Fey Presence (1/r): As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. If a target fails the saving throw, they are charmed or frightened by you (your choice) until the end of your next turn."
        );
      } else if (random2 > 0.333) {
        features.push("Otherworldly Patron: Fiend.");
        document.getElementById("form193_3").value = "Burning Hands";
        document.getElementById("form159_3").value = "Command";
        features.push(
          "Dark One's Blessing: When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your CHA modifier + your warlock level."
        );
      } else {
        features.push("Otherworldly Patron: Great Old One.");
        document.getElementById("form193_3").value = "Dissonant Whispers";
        document.getElementById("form159_3").value = "Tasha's Hideous Laughter";
        features.push(
          "Awakened Mind: You can communicate telepathically with any creature you can see within 30 feet of you. You don't need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language."
        );
      }
    } else if (classAndLevel === "Wizard 1") {
      armorClass += 10 + dexterityModifier;
      features.push(
        "Arcane Recovery (1/d): When you finish a short rest once a day, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher."
      );
      if (random > 0.5) {
        equipment.push("Scholar's pack");
        equipment.push("Quarterstaff");
        document.getElementById("form79_1").value = "Quarterstaff"; // 1st weapon 1st section
        stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(strengthModifier, "form76_1", "1d6", "B"); // 1st weapon 3rd section
      } else {
        equipment.push("Explorer's pack");
        equipment.push("Daga");
        document.getElementById("form79_1").value = "Daga"; // 1st weapon 1st section
        stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(dexterityModifier, "form76_1", "1d4", "P"); // 1st weapon 3rd section
      }
      if (random2 > 0.8) {
        equipment.push("Crumpled up notes - Spellbook");
        equipment.push("Lightning in a bottle - Focus");
      } else if (random2 > 0.6) {
        equipment.push("Various colorful tattoos - Spellbook");
        equipment.push("Crystal with pink water inside - Focus");
      } else if (random2 > 0.4) {
        equipment.push(
          "Leather-bound tome with suspiciously red ink - Spellbook"
        );
        equipment.push("Metallic rod with amber stone on top - Focus");
      } else if (random2 > 0.2) {
        equipment.push(
          "Thick black leather with platinum reinforced corners, silvery ink, the front embossed with your name, " +
            charName +
            " - Spellbook"
        );
        equipment.push("Specially carved, gnarled, wooden staff - Focus");
      } else {
        equipment.push(
          "Light leather book with gem-encrusted spine - Spellbook"
        );
        equipment.push("Partially petrified willow wand - Focus");
      }
    }
  }

  // Block that adds weapon proficiencies by class
  if (classAndLevel === "Barbarian 1") {
    weapon_adder_2(weapon_adder("simple weapons"));
    weapon_adder_2(weapon_adder("martial weapons"));
    armor_adder_2(armor_adder("light armor"));
    armor_adder_2(armor_adder("medium armor"));
    armor_adder_2(armor_adder("shield"));
    armorClass += 10 + dexterityModifier + constitutionModifier; // armor class
    equipment.push("Four javelins");
    equipment.push("Explorer's pack");
    random_by_length(barbarianBonds, bonds, "form101_1");
  } else if (classAndLevel === "Fighter 1") {
    weapon_adder_2(weapon_adder("simple weapons"));
    weapon_adder_2(weapon_adder("martial weapons"));
    armor_adder_2(armor_adder("light armor"));
    armor_adder_2(armor_adder("medium armor"));
    armor_adder_2(armor_adder("heavy armor"));
    armor_adder_2(armor_adder("shield"));
    random_by_length(fighterBonds, bonds, "form101_1");
  } else if (classAndLevel === "Bard 1") {
    weapon_adder_2(weapon_adder("simple weapons"));
    armor_adder_2(armor_adder("light armor"));
    weapon_adder_2(weapon_adder("hand crossbow"));
    weapon_adder_2(weapon_adder("Espada larga"));
    weapon_adder_2(weapon_adder("Estoque"));
    weapon_adder_2(weapon_adder("shortsword"));
    random_by_length(bardBonds, bonds, "form101_1");
  } else if (classAndLevel === "Cleric 1") {
    weapon_adder_2(weapon_adder("simple weapons"));
    armor_adder_2(armor_adder("light armor"));
    armor_adder_2(armor_adder("medium armor"));
    armor_adder_2(armor_adder("shield"));
    random_by_length(clericBonds, bonds, "form101_1");
  } else if (classAndLevel === "Sorcerer 1") {
    weapon_adder_2(weapon_adder("Daga"));
    weapon_adder_2(weapon_adder("dart"));
    weapon_adder_2(weapon_adder("quarterstaff"));
    weapon_adder_2(weapon_adder("sling"));
    weapon_adder_2(weapon_adder("light crossbow"));
    random_by_length(sorcererBonds, bonds, "form101_1");
  } else if (classAndLevel === "Wizard 1") {
    weapon_adder_2(weapon_adder("Daga"));
    weapon_adder_2(weapon_adder("dart"));
    weapon_adder_2(weapon_adder("quarterstaff"));
    weapon_adder_2(weapon_adder("sling"));
    weapon_adder_2(weapon_adder("light crossbow"));
    random_by_length(wizardBonds, bonds, "form101_1");
  } else if (classAndLevel === "Druid 1") {
    armor_adder_2(armor_adder("light armor"));
    armor_adder_2(armor_adder("medium armor"));
    armor_adder_2(armor_adder("shield"));
    features.push("(All armor and shields must be nonmetal)");
    weapon_adder_2(weapon_adder("club"));
    weapon_adder_2(weapon_adder("Daga"));
    weapon_adder_2(weapon_adder("dart"));
    weapon_adder_2(weapon_adder("javelin"));
    weapon_adder_2(weapon_adder("Maza"));
    weapon_adder_2(weapon_adder("quarterstaff"));
    weapon_adder_2(weapon_adder("scimitar"));
    weapon_adder_2(weapon_adder("sickle"));
    weapon_adder_2(weapon_adder("sling"));
    weapon_adder_2(weapon_adder("spear"));
    random_by_length(druidBonds, bonds, "form101_1");
  } else if (classAndLevel === "Rogue 1") {
    weapon_adder_2(weapon_adder("simple weapons"));
    armor_adder_2(armor_adder("light armor"));
    weapon_adder_2(weapon_adder("hand crossbow"));
    weapon_adder_2(weapon_adder("Espada larga"));
    weapon_adder_2(weapon_adder("Estoque"));
    weapon_adder_2(weapon_adder("shortsword"));
    random_by_length(rogueBonds, bonds, "form101_1");
  } else if (classAndLevel === "Warlock 1") {
    weapon_adder_2(weapon_adder("simple weapons"));
    armor_adder_2(armor_adder("light armor"));
    random_by_length(warlockBonds, bonds, "form101_1");
  } else if (classAndLevel === "Ranger 1") {
    weapon_adder_2(weapon_adder("simple weapons"));
    weapon_adder_2(weapon_adder("martial weapons"));
    armor_adder_2(armor_adder("light armor"));
    armor_adder_2(armor_adder("medium armor"));
    armor_adder_2(armor_adder("shield"));
    random_by_length(rangerBonds, bonds, "form101_1");
  } else if (classAndLevel === "Paladin 1") {
    weapon_adder_2(weapon_adder("simple weapons"));
    weapon_adder_2(weapon_adder("martial weapons"));
    armor_adder_2(armor_adder("light armor"));
    armor_adder_2(armor_adder("medium armor"));
    armor_adder_2(armor_adder("heavy armor"));
    armor_adder_2(armor_adder("shield"));
    random_by_length(paladinBonds, bonds, "form101_1");
  } else if (classAndLevel === "Monk 1") {
    armorClass += 10 + dexterityModifier + wisdomModifier; // armor class
    weapon_adder_2(weapon_adder("simple weapons"));
    weapon_adder_2(weapon_adder("shortsword"));
    random_by_length(monkBonds, bonds, "form101_1");
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
          " Breath Weapon: You can use your action to exhale your Ascendencia Dracónica in a 5 by 30 foot line. When you use your breath weapon, each creature in the area of the exhalation must make a dexterity saving throw. The DC for this saving throw is " +
          (10 + constitutionModifier) +
          ". A creature takes 2d6 " +
          damagetype.toLowerCase() +
          " damage on a failed save, and half as much damage on a successful one."
      );
    } else if (color === "Gold" || color === "Red") {
      additionalFeatures.push(
        damagetype +
          " Breath Weapon: You can use your action to exhale your Ascendencia Dracónica in a 15 foot cone. When you use your breath weapon, each creature in the area of the exhalation must make a dexterity saving throw. The DC for this saving throw is " +
          (10 + constitutionModifier) +
          ". A creature takes 2d6 " +
          damagetype.toLowerCase() +
          " damage on a failed save, and half as much damage on a successful one."
      );
    } else if (color === "Green" || color === "Silver" || color === "White") {
      additionalFeatures.push(
        damagetype +
          " Breath Weapon: You can use your action to exhale your Ascendencia Dracónica in a 15 foot cone. When you use your breath weapon, each creature in the area of the exhalation must make a constitution saving throw. The DC for this saving throw is " +
          (10 + constitutionModifier) +
          ". A creature takes 2d6 " +
          damagetype.toLowerCase() +
          " damage on a failed save, and half as much damage on a successful one."
      );
    }
  }

  // Block to determine physical traits - age, height, skin, hair, weight, and eye color
  if (race === "Black Dragonborn") {
    document.getElementById("form5_2").value = get_random_int(15, 40); // age
    document.getElementById("form1_2").value = get_random_int(72, 80); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer(
      "Ivory Black",
      "Onyx Black",
      "Carbon Black",
      "Pearlescent Black",
      "Black"
    ); // skin
    hair_randomizer("", "", "", ""); // hair
    weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Violet", "Blue", "Red", "Purple"); // eyes

    breath_decider("Black", "Acid");
  } else if (race === "Blue Dragonborn") {
    document.getElementById("form5_2").value = get_random_int(15, 40); // age
    document.getElementById("form1_2").value = get_random_int(72, 80); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer("Blue", "Azure Blue", "Navy", "Pale Blue", "Royal Blue"); // skin
    hair_randomizer("", "", "", ""); // hair
    weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Violet", "Blue", "Red", "Purple"); // eyes

    breath_decider("Blue", "Lightning");
  } else if (race === "Brass Dragonborn") {
    document.getElementById("form5_2").value = get_random_int(15, 40); // age
    document.getElementById("form1_2").value = get_random_int(72, 80); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer(
      "Brass",
      "Rusty Brass",
      "Copper & Brass",
      "Fiery Brass",
      "Brass"
    ); // skin
    hair_randomizer("", "", "", ""); // hair
    weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Yellow", "Green", "Red", "Blue"); // eyes

    breath_decider("Brass", "Fire");
  } else if (race === "Bronze Dragonborn") {
    document.getElementById("form5_2").value = get_random_int(15, 40); // age
    document.getElementById("form1_2").value = get_random_int(72, 80); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer(
      "Bronze",
      "Old Gold",
      "Dark Bronze",
      "Sandy Bronze",
      "Bronze"
    ); // skin
    hair_randomizer("", "", "", ""); // hair
    weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Yellow", "Green", "Red", "Blue"); // eyes

    breath_decider("Bronze", "Lightning");
  } else if (race === "Copper Dragonborn") {
    document.getElementById("form5_2").value = get_random_int(15, 40); // age
    document.getElementById("form1_2").value = get_random_int(72, 80); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer(
      "Copper",
      "Bronze & Copper",
      "Rusty Copper",
      "Fiery Copper",
      "Copper"
    ); // skin
    hair_randomizer("", "", "", ""); // hair
    weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Yellow", "Green", "Red", "Blue"); // eyes

    breath_decider("Copper", "Acid");
  } else if (race === "Gold Dragonborn") {
    document.getElementById("form5_2").value = get_random_int(15, 40); // age
    document.getElementById("form1_2").value = get_random_int(72, 80); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer(
      "Golden Yellow",
      "Gold",
      "Golden Rod",
      "Nugget Gold",
      "Gold"
    ); // skin
    hair_randomizer("", "", "", ""); // hair
    weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Yellow", "Green", "Red", "Blue"); // eyes

    breath_decider("Gold", "Fire");
  } else if (race === "Green Dragonborn") {
    document.getElementById("form5_2").value = get_random_int(15, 40); // age
    document.getElementById("form1_2").value = get_random_int(72, 80); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer("Sea Green", "Forest Green", "Jade", "Emerald", "Green"); // skin
    hair_randomizer("", "", "", ""); // hair
    weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Yellow", "Green", "Red", "Blue"); // eyes

    breath_decider("Green", "Acid");
  } else if (race === "Red Dragonborn") {
    document.getElementById("form5_2").value = get_random_int(15, 40); // age
    document.getElementById("form1_2").value = get_random_int(72, 80); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer(
      "Scarlet",
      "Red & Orange",
      "Blood Red",
      "Cherry Red",
      "Red"
    ); // skin
    hair_randomizer("", "", "", ""); // hair
    weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Yellow", "Green", "Red", "Blue"); // eyes

    breath_decider("Red", "Fire");
  } else if (race === "Silver Dragonborn") {
    document.getElementById("form5_2").value = get_random_int(15, 40); // age
    document.getElementById("form1_2").value = get_random_int(72, 80); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer(
      "Ice Silver",
      "Liquid Silver",
      "Lunar Silver",
      "Silver",
      "Silver"
    ); // skin
    hair_randomizer("", "", "", ""); // hair
    weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Violet", "Blue", "Red", "Purple"); // eyes

    breath_decider("Silver", "Cold");
  } else if (race === "White Dragonborn") {
    document.getElementById("form5_2").value = get_random_int(15, 40); // age
    document.getElementById("form1_2").value = get_random_int(72, 80); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer(
      "Snow",
      "Ghost White",
      "White Smoke",
      "Frost White",
      "White"
    ); // skin
    hair_randomizer("", "", "", ""); // hair
    weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Violet", "Blue", "Red", "Purple"); // eyes

    breath_decider("White", "Cold");
  } else if (race === "Hill Dwarf") {
    document.getElementById("form5_2").value = get_random_int(50, 250); // age
    document.getElementById("form1_2").value = get_random_int(52, 60); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer(
      "Pale Reddish",
      "Light Brown",
      "Deep Brown",
      "Deep Tan",
      "Tan"
    ); // skin
    hair_randomizer("Gray", "Black", "Brown", "Red"); // hair
    weight_randomizer(constitution, strength, 110, 130, 150, 170, 190, 215); // weight
    eye_randomizer("Black", "Brown", "Green", "Blue"); // eyes
    weapon_adder_2(weapon_adder("battleaxe"));
    weapon_adder_2(weapon_adder("battleaxe"));
    weapon_adder_2(weapon_adder("handaxe"));
    weapon_adder_2(weapon_adder("light hammer"));
    weapon_adder_2(weapon_adder("warhammer"));
    hp++;
  } else if (race === "Mountain Dwarf") {
    document.getElementById("form5_2").value = get_random_int(50, 250); // age
    document.getElementById("form1_2").value = get_random_int(55, 63); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer(
      "Pale Reddish",
      "Light Brown",
      "Deep Brown",
      "Deep Tan",
      "Tan"
    ); // skin
    hair_randomizer("Gray", "Black", "Brown", "Red"); // hair
    weight_randomizer(constitution, strength, 110, 130, 150, 170, 190, 215); // weight
    eye_randomizer("Black", "Brown", "Green", "Blue"); // eyes
    weapon_adder_2(weapon_adder("battleaxe"));
    weapon_adder_2(weapon_adder("battleaxe"));
    weapon_adder_2(weapon_adder("handaxe"));
    weapon_adder_2(weapon_adder("light hammer"));
    weapon_adder_2(weapon_adder("warhammer"));
    armor_adder_2(armor_adder("light armor"));
    armor_adder_2(armor_adder("medium armor"));
  } else if (race === "Human (Calishite)") {
    document.getElementById("form5_2").value = get_random_int(19, 55); // age
    document.getElementById("form1_2").value = get_random_int(64, 73); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer(
      "Dusky Brown",
      "Brown",
      "Light Brown",
      "Tan",
      "Light Copper"
    ); // skin
    hair_randomizer("Dusky Brown", "Brown", "Light Brown", "Black", "Auburn"); // hair
    weight_randomizer(constitution, strength, 140, 160, 180, 200, 225, 240); // weight
    eye_randomizer("Light Brown", "Dark Brown", "Black", "Brown"); // eyes
  } else if (race === "Human (Chondathan)") {
    document.getElementById("form5_2").value = get_random_int(19, 55); // age
    document.getElementById("form1_2").value = get_random_int(65, 73); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer("Tawny", "Light Tawny", "Light Tan", "Tan", "Light"); // skin
    hair_randomizer("Blond", "Brown", "Light Brown", "Black", "Dark Brown"); // hair
    weight_randomizer(constitution, strength, 140, 155, 170, 190, 215, 230); // weight
    eye_randomizer("Green", "Hazel", "Dark Brown", "Brown"); // eyes
  } else if (race === "Human (Damaran)") {
    document.getElementById("form5_2").value = get_random_int(19, 55); // age
    document.getElementById("form1_2").value = get_random_int(65, 73); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer("Tawny", "Fair", "Light Tan", "Tan", "Light"); // skin
    hair_randomizer("Brown", "Brown", "Light Brown", "Black", "Dark Brown"); // hair
    weight_randomizer(constitution, strength, 145, 165, 180, 200, 225, 245); // weight
    eye_randomizer("Dark Brown", "Hazel", "Blue", "Light Brown"); // eyes
  } else if (race === "Human (Illuskan)") {
    document.getElementById("form5_2").value = get_random_int(19, 55); // age
    document.getElementById("form1_2").value = get_random_int(67, 76); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer("Pale", "Fair", "Light Tan", "Fair", "Light"); // skin
    hair_randomizer(
      "Raven-black",
      "Red",
      "Light Brown",
      "Blond",
      "Raven-black"
    ); // hair
    weight_randomizer(constitution, strength, 150, 165, 185, 205, 230, 250); // weight
    eye_randomizer("Blue", "Steel", "Gray", "Dark Bluish-Gray"); // eyes
  } else if (race === "Human (Mulan)") {
    document.getElementById("form5_2").value = get_random_int(19, 55); // age
    document.getElementById("form1_2").value = get_random_int(66, 75); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer("Amber", "Dark Tan", "Light Tan", "Amber", "Tan"); // skin
    hair_randomizer("Bald", "Bald", "Dark Brown", "Black", "Bald"); // hair
    weight_randomizer(constitution, strength, 145, 160, 175, 195, 220, 235); // weight
    eye_randomizer("Hazel", "Brown", "Dark Brown", "Dark Hazel"); // eyes
  } else if (race === "Human (Rashemi)") {
    document.getElementById("form5_2").value = get_random_int(19, 55); // age
    document.getElementById("form1_2").value = get_random_int(64, 71); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer("Dusky", "Dark Tan", "Tan", "Brown", "Dark Amber"); // skin
    hair_randomizer("Black", "Brown", "Dark Brown", "Dark Aurburn", "Black"); // hair
    weight_randomizer(constitution, strength, 155, 170, 185, 205, 230, 250); // weight
    eye_randomizer("Dark Brown", "Brown", "Black", "Dark Hazel"); // eyes
  } else if (race === "Human (Shou)") {
    document.getElementById("form5_2").value = get_random_int(19, 55); // age
    document.getElementById("form1_2").value = get_random_int(64, 73); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer(
      "Yellowish",
      "Bronze",
      "Copper",
      "Yellowish-Bronze",
      "Light Copper"
    ); // skin
    hair_randomizer("Black", "Brown", "Black", "Black", "Dark Brown"); // hair
    weight_randomizer(constitution, strength, 140, 160, 180, 200, 225, 245); // weight
    eye_randomizer("Dark Auburn", "Dark Brown", "Black", "Brown"); // eyes
  } else if (race === "Human (Tethyrian)") {
    document.getElementById("form5_2").value = get_random_int(19, 55); // age
    document.getElementById("form1_2").value = get_random_int(64, 74); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer("Dusky", "Fair", "Dark Tan", "Tan", "Dusky"); // skin
    hair_randomizer("Light Brown", "Black", "Blond", "Red", "Dark Brown"); // hair
    weight_randomizer(constitution, strength, 140, 160, 180, 200, 225, 245); // weight
    eye_randomizer("Blue", "Blue", "Green", "Hazel"); // eyes
  } else if (race === "Human (Turami)") {
    document.getElementById("form5_2").value = get_random_int(19, 55); // age
    document.getElementById("form1_2").value = get_random_int(66, 76); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer(
      "Dark Mahogany",
      "Mahogany",
      "Dark Brown",
      "Brown",
      "Dark Amber"
    ); // skin
    hair_randomizer("Black", "Black", "Dark Brown", "Dark Aurburn", "Black"); // hair
    weight_randomizer(constitution, strength, 155, 170, 185, 205, 230, 250); // weight
    eye_randomizer("Dark Brown", "Brown", "Black", "Dark Hazel"); // eyes
  } else if (race === "High Elf") {
    document.getElementById("form5_2").value = get_random_int(100, 600); // age
    document.getElementById("form1_2").value = get_random_int(65, 73); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer(
      "Copper",
      "Bronze",
      "Pale Bluish-White",
      "Bluish-White",
      "Light Copper"
    ); // skin
    hair_randomizer("Green", "Blue", "Turquoise", "Silver-White"); // hair
    weight_randomizer(constitution, strength, 110, 115, 130, 140, 155, 165); // weight
    eye_randomizer("Gold", "Silver", "Black", "Green"); // eyes
  } else if (race === "Wood Elf") {
    document.getElementById("form5_2").value = get_random_int(100, 600); // age
    document.getElementById("form1_2").value = get_random_int(65, 73); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer(
      "Copper",
      "Bronze",
      "Copper-Hazel",
      "Dark Tan",
      "Light Copper"
    ); // skin
    hair_randomizer("Brown", "Black", "Copper", "Blond"); // hair
    weight_randomizer(constitution, strength, 110, 115, 130, 140, 155, 165); // weight
    eye_randomizer("Green", "Brown", "Hazel", "Amber"); // eyes
    weapon_adder_2(weapon_adder("Espada larga"));
    weapon_adder_2(weapon_adder("shortsword"));
    weapon_adder_2(weapon_adder("shortbow"));
    weapon_adder_2(weapon_adder("Arco largo"));
  } else if (race === "Dark Elf (Drow)") {
    document.getElementById("form5_2").value = get_random_int(100, 600); // age
    document.getElementById("form1_2").value = get_random_int(64, 71); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer("Black", "Onyx", "Dark Gray", "Black", "Dark Silver"); // skin
    hair_randomizer("White", "Light Blond", "Pale Yellow", "White & Yellow"); // hair
    weight_randomizer(constitution, strength, 100, 105, 120, 130, 145, 155); // weight
    eye_randomizer("Lilac", "Silver", "Pink", "Blue"); // eyes
    weapon_adder_2(weapon_adder("Estoque"));
    weapon_adder_2(weapon_adder("shortsword"));
    weapon_adder_2(weapon_adder("hand crossbow"));
  } else if (race === "Lightfoot Halfling") {
    document.getElementById("form5_2").value = get_random_int(20, 100); // age
    document.getElementById("form1_2").value = get_random_int(32, 41); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer("Tan", "Light Tan", "Pale & Ruddy", "Light", "Fair"); // skin
    hair_randomizer("Brown", "Sandy Brown", "Dark Blond", "Auburn"); // hair
    weight_randomizer_small(constitution, strength, 35, 39, 42, 44, 47, 50); // weight
    eye_randomizer("Brown", "Hazel", "Green", "Light Brown"); // eyes
    size = "small";
  } else if (race === "Stout Halfling") {
    document.getElementById("form5_2").value = get_random_int(20, 100); // age
    document.getElementById("form1_2").value = get_random_int(34, 43); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer(
      "Pale",
      "Light Tan",
      "Pale & Ruddy",
      "Light",
      "Fair & Ruddy"
    ); // skin
    hair_randomizer("Brown", "Sandy Brown", "Dark Brown", "Auburn"); // hair
    size = "small";
    weight_randomizer_small(constitution, strength, 37, 41, 44, 46, 49, 52); // weight
    eye_randomizer("Brown", "Hazel", "Green", "Light Brown"); // eyes
  } else if (race === "Forest Gnome") {
    document.getElementById("form5_2").value = get_random_int(40, 250); // age
    document.getElementById("form1_2").value = get_random_int(34, 43); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer("Tan", "Light Tan", "Brown", "Dark Tan", "Light Brown"); // skin
    hair_randomizer("Blond", "Sandy Brown", "Dark Blond", "Light Brown"); // hair
    weight_randomizer_small(constitution, strength, 35, 39, 42, 44, 47, 50); // weight
    eye_randomizer("Icy Blue", "Navy", "Pale Blue", "Bright Blue"); // eyes
    size = "small";
  } else if (race === "Rock Gnome") {
    document.getElementById("form5_2").value = get_random_int(40, 250); // age
    document.getElementById("form1_2").value = get_random_int(35, 45); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer("Tan", "Light Tan", "Brown", "Dark Tan", "Light Brown"); // skin
    hair_randomizer("Blond", "Sandy Brown", "Dark Blond", "Light Brown"); // hair
    weight_randomizer_small(constitution, strength, 37, 41, 44, 46, 49, 52); // weight
    eye_randomizer("Icy Blue", "Navy", "Pale Blue", "Bright Blue"); // eyes
    size = "small";
  } else if (race === "Half-Elf") {
    document.getElementById("form5_2").value = get_random_int(20, 120); // age
    document.getElementById("form1_2").value = get_random_int(65, 74); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer("Copper", "Fair", "Pale", "Dark Tan", "Light Copper"); // skin
    hair_randomizer(
      "Brownish Green",
      "Bluish Black",
      "Reddish White",
      "Silvery Blond"
    ); // hair
    weight_randomizer(constitution, strength, 120, 130, 145, 165, 180, 205); // weight
    eye_randomizer("Gold", "Pink", "Lilac", "Green"); // eyes
  } else if (race === "Half-Orc") {
    document.getElementById("form5_2").value = get_random_int(15, 40); // age
    document.getElementById("form1_2").value = get_random_int(72, 85); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer(
      "Grayish",
      "Grayish Green",
      "Gray",
      "Tannish Gray",
      "Grayish"
    ); // skin
    hair_randomizer("Light Brown", "Black", "Auburn", "Dark Brown"); // hair
    weight_randomizer(constitution, strength, 170, 190, 210, 230, 250, 265); // weight
    eye_randomizer("Green", "Blue", "Brown", "Black"); // eyes
  } else if (race === "Tiefling") {
    document.getElementById("form5_2").value = get_random_int(20, 55); // age
    document.getElementById("form1_2").value = get_random_int(65, 74); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skin_randomizer(
      "Brick Red",
      "Reddish Tan",
      "Maroon",
      "Blood Red",
      "Tawny Red"
    ); // skin
    hair_randomizer("Dark Purple", "Black", "Dark Red", "Dark Blue"); // hair
    weight_randomizer(constitution, strength, 140, 160, 180, 200, 225, 245); // weight
    eye_randomizer("White", "Black", "Red", "Silver"); // eyes
  }

  // Function to determine a random con for the charlatan background
  function random_con() {
    random = Math.floor(Math.random() * 4);
    if (random === 0) {
      return "Diez botellas con tapón llenas de líquido coloreado";
    } else if (random === 1) {
      return "Conjunto de dados trucados";
    } else if (random === 2) {
      return "Baraja de cartas marcadas";
    } else if (random === 3) {
      return "Anillo de sello de un duque imaginario";
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
      return "Cartas para jugar";
    } else if (random === 3) {
      return "Tres dragones ante";
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

  // Function to determine a random favor from an admirer for entertainer background
  function random_favor_from_admirer() {
    random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return "Carta de amor de un admirador";
    } else if (random === 1) {
      return "Mechón de cabello de un admirador";
    } else if (random === 2) {
      return random_trinket() + " de un admirador";
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
      return "Herramientas de cartógrafo";
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

  // Function to determine a random gaming set for soldier background
  function random_gaming_set_soldier() {
    random = Math.floor(Math.random() * 2);
    if (random === 0) {
      return "Dados";
    } else if (random === 1) {
      return "Juego de Cartas";
    }
  }

  // Function to determine a random trophy
  function random_trophy() {
    random = Math.floor(Math.random() * 4);
    if (random === 0) {
      return "Daga de un enemigo caído";
    } else if (random === 1) {
      return "Hoja rota de un enemigo caído";
    } else if (random === 2) {
      return "Trozo de estandarte de un enemigo caído";
    } else if (random === 3) {
      return random_trinket() + " de un enemigo caído";
    }
    
  }

  // Function to determine a random flashy weapon for the gladiator background
  function random_gladiator_weapon() {
    random = Math.floor(Math.random() * 4);
    if (random === 0) {
      if (weapon_adder("Tridente") !== undefined) {
        weapon_adder_2(weapon_adder("Tridente"));
        equipment.push("Tridente");
      } else {
        return "Tridente already added";
      }
    } else if (random === 1) {
      if (weapon_adder("net") !== undefined) {
        weapon_adder_2(weapon_adder("net"));
        equipment.push("Net");
      } else {
        return "Net already added";
      }
    } else if (random === 2) {
      if (weapon_adder("sling") !== undefined) {
        weapon_adder_2(weapon_adder("sling"));
        equipment.push("Sling");
      } else {
        return "Sling already added";
      }
    } else if (random === 3) {
      if (weapon_adder("whip") !== undefined) {
        weapon_adder_2(weapon_adder("whip"));
        equipment.push("Whip");
      } else {
        return "Whip already added";
      }
    }
  }

  // Function to check random_gladiator_weapon()
  function random_gladiator_weapon_checker(variable) {
    if (variable === "Tridente already added") {
      equipment.push("Tridente");
    } else if (variable === "Net already added") {
      equipment.push("Net");
    } else if (variable === "Sling already added") {
      equipment.push("Sling");
    } else if (variable === "Whip already added") {
      equipment.push("Whip");
    } else {
    }
  }

  // Function to determine a random animal trophy for the outlander background
  function random_animal_trophy() {
    random = Math.floor(Math.random() * 8);
    if (random === 0) {
      return "Trofeo de colmillo de lobo";
    } else if (random === 1) {
      return "Trofeo de colmillo de jabalí";
    } else if (random === 2) {
      return "Trofeo de garra de oso";
    } else if (random === 3) {
      return "Trofeo de pluma de águila";
    } else if (random === 4) {
      return "Trofeo de diente pequeño de dragón";
    } else if (random === 5) {
      return "Trofeo de capa de piel de oso";
    } else if (random === 6) {
      return "Trofeo de pellejo de lobo";
    } else if (random === 7) {
      return "Trofeo de collar con diente de león";
    }    
  }

  // Block that determines what equipment/languages/proficiencies/features you get for your background, and adds writing prompts to pg. 2
  if (newBackground1 === "Acolyte") {
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
    equipment.push("A holy symbol");
    equipment.push("Prayer Book");
    equipment.push("5 sticks of incense");
    equipment.push("Vestments");
    equipment.push("Set of common clothes");
    equipment.push("Belt Pouch");
    gold += 15;
    features.push(
      "Shelter of the Faithful: Can perform the religious ceremonies of your deity. Your adventuring party can expect to receive free healing and care at an establishment of your faith, though you must provide any material components needed for spells. Those who share your religion will support you at a modest lifestyle. While near your home establishment, you can call upon the priests for assistance, provided it is not hazardous."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat caused you to become an acolyte?\rWhat deity do you serve?\rWhere was your temple/monastery?\rWhy did you learn those languages?\rWhy are you a " +
      className.toLowerCase() +
      "?\r" +
      "How did you go from acolyte to " +
      className.toLowerCase() +
      "?\r" +
      "What does being a " +
      race +
      " mean to you?";
  } else if (newBackground1 === "Charlatan") {
    tool_adder_2(tool_adder("disguise kit"));
    tool_adder_2(tool_adder("forgery kit"));
    add_click(17);
    stat_checker(charismaModifier + 2, "form36_1");
    add_click(4);
    stat_checker(dexterityModifier + 2, "form46_1");
    equipment.push("Disguise kit");
    equipment.push(random_con());
    equipment.push("Set of fine clothes");
    equipment.push("Belt Pouch");
    gold += 15;
    features.push(
      "False Identity: You have a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat caused you to become a charlatan?\rWhat is your choice ploy?\rWhat was your biggest trick at?\rWhy are you a " +
      className.toLowerCase() +
      "?\r" +
      "How did you go from charlatan to " +
      className.toLowerCase() +
      "?\r" +
      "What does being a " +
      race +
      " mean to you?\r" +
      "Are you still duping people, if not, why the change of heart?";
  } else if (newBackground1 === "Criminal") {
    tool_adder_2(tool_adder("thieves' tools"));
    tool_adder_2(tool_adder(random_gaming_set_capitalize().toLowerCase()));
    add_click(17);
    stat_checker(charismaModifier + 2, "form36_1");
    add_click(23);
    stat_checker(dexterityModifier + 2, "form32_1");
    equipment.push("Crowbar");
    equipment.push("Set of dark common clothes with a hood");
    equipment.push("Belt Pouch");
    gold += 15;
    features.push(
      "Criminal Contact: You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat caused you to become a criminal?\rWhat kind of criminal were you?\rDid you do anything terrible?\rWho is your criminal contact?\rWhy are you a " +
      className.toLowerCase() +
      "?\r" +
      "How did you go from criminal to " +
      className.toLowerCase() +
      "?\r" +
      "What does being a " +
      race +
      " mean to you?\r" +
      "Are you still breaking the law, if not, why the change of heart?";
  } else if (newBackground1 === "Entertainer") {
    musicalinstrument = random_musical_instrument();
    tool_adder_2(tool_adder(musicalinstrument.toLowerCase()));
    tool_adder_2(tool_adder("disguise kit"));
    add_click(19);
    stat_checker(dexterityModifier + 2, "form38_1");
    add_click(16);
    stat_checker(charismaModifier + 2, "form34_1");
    equipment.push(musicalinstrument);
    equipment.push("Costume");
    document.getElementById("form14_2").value = random_favor_from_admirer();
    equipment.push("Belt Pouch");
    gold += 15;
    features.push(
      "By Popular Demand: You can always find a place to perform. At that place, you receive free lodging and food of a modest or comfortable standard, as long as you perform each night. Your performance also makes you something of a local figure, when recognized, they typically take a liking to you."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat caused you to become an entertainer?\rHow did you entertain?\rDo you still have any contacts or people you know from performing?\rWhy are you a " +
      className.toLowerCase() +
      "?\r" +
      "How did you go from entertainer to " +
      className.toLowerCase() +
      "?\r" +
      "What does being a " +
      race +
      " mean to you?";
  } else if (newBackground1 === "Folk Hero") {
    artisantool = random_artisan_tool();
    tool_adder_2(tool_adder(artisantool.toLowerCase()));
    tool_adder_2(tool_adder("land vehicles"));
    add_click(8);
    stat_checker(wisdomModifier + 2, "form50_1");
    add_click(12);
    stat_checker(wisdomModifier + 2, "form47_1");
    equipment.push(artisantool);
    equipment.push("Shovel");
    equipment.push("Iron pot");
    equipment.push("Set of common clothes");
    equipment.push("Belt Pouch");
    gold += 10;
    features.push(
      "Rustic Hospitality: Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat made you famous to your people?\rWhy did you leave them?\rWhy are you a " +
      className.toLowerCase() +
      "?\r" +
      "How did you go from folk hero to " +
      className.toLowerCase() +
      "?\r" +
      "What does being a " +
      race +
      " mean to you?";
  } else if (newBackground1 === "Gladiator") {
    gladiatorWeapon = random_gladiator_weapon();
    random_gladiator_weapon_checker(gladiatorWeapon);
    tool_adder_2(tool_adder("disguise kit"));
    add_click(19);
    stat_checker(dexterityModifier + 2, "form38_1");
    add_click(16);
    stat_checker(charismaModifier + 2, "form34_1");
    equipment.push("Costume");
    equipment.push("Belt Pouch");
    gold += 15;
    features.push(
      "By Popular Demand: Can always find a place to perform that is combat-centered. At that place, receive free lodging and food of a modest or comfortable standard, as long as you perform each night. Your performance makes you something of a local figure, when recognized, persons typically take a liking to you."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhy did you become a gladiator?\rWas it slavery?\rWas it money?\rWas it family?\rWhy are you a " +
      className.toLowerCase() +
      "?\r" +
      "How did you go from gladiator to " +
      className.toLowerCase() +
      "?\r" +
      "What does being a " +
      race +
      " mean to you?";
  } else if (newBackground1 === "Guild Artisan") {
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
    equipment.push("Guild introduction letter");
    equipment.push("Set of traveler's clothes");
    equipment.push("Belt Pouch");
    gold += 15;
    features.push(
      "Guild Membership: Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral. If accused of a crime, your guild will support you if innocent or have just cause. 5Gp/month for membership, benefits only if you pay on time."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhy did you become an artisan?\rWhy did you choose your artistry?\rWhat's your guilds name?\rWas it money?\rWas it passion?\rWas it the family business?\rWhy are you a " +
      className.toLowerCase() +
      "?\r" +
      "How did you go from guild artisan to " +
      className.toLowerCase() +
      "?\r" +
      "What does being a " +
      race +
      " mean to you?";
  } else if (newBackground1 === "Guild Merchant") {
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
    equipment.push("Guild introduction letter");
    equipment.push("Set of traveler's clothes");
    equipment.push("Belt Pouch");
    equipment.push("Mule");
    equipment.push("Cart");
    gold += 15;
    features.push(
      "Guild Membership: Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral. If accused of a crime, your guild will support you if innocent or have just cause. 5Gp/month for membership, benefits only if you pay on time."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhy did you become a merchant?\rWhy did you choose your artistry?\rWhat's your guilds name?\rWas it money?\rWas it passion for trade or meeting new people?\rWas it the family business?\rWhy are you a " +
      className.toLowerCase() +
      "?\r" +
      "How did you go from guild merchant to " +
      className.toLowerCase() +
      "?\r" +
      "What does being a " +
      race +
      " mean to you?";
  } else if (newBackground1 === "Hermit") {
    firstLanguage = random_language();
    firstLanguage = right_language();
    profsAndLangs.languages.push(firstLanguage);
    tool_adder_2(tool_adder("herbalism kit"));
    add_click(5);
    stat_checker(wisdomModifier + 2, "form53_1");
    add_click(20);
    stat_checker(intelligenceModifier + 2, "form33_1");
    equipment.push("Scroll case stuffed full of notes from your studies");
    equipment.push("Winter blanket");
    equipment.push("Set of common clothes");
    equipment.push("Herbalism kit");
    gold += 5;
    features.push(
      "Discovery: The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhere were you secluded at?\rDid you travel a lot?\rWhat's your big discovery? Talk it over with your DM as well.\rWhy are you a " +
      className.toLowerCase() +
      "?\r" +
      "How did you go from hermit to " +
      className.toLowerCase() +
      "?\r" +
      "What does being a " +
      race +
      " mean to you?";
  } else if (newBackground1 === "Knight") {
    firstLanguage = random_language();
    firstLanguage = right_language();
    profsAndLangs.languages.push(firstLanguage);
    tool_adder_2(tool_adder(random_gaming_set_capitalize().toLowerCase()));
    add_click(9);
    stat_checker(intelligenceModifier + 2, "form48_1");
    add_click(1);
    stat_checker(charismaModifier + 2, "form45_1");
    bonds.splice(0, 1);
    bonds.push("I have an emblem of chivalry and chastity from a noble lady.");
    equipment.push("Emblem of chivalry");
    equipment.push("Signet ring");
    equipment.push("Scroll of pedigree");
    equipment.push("Set of fine clothes");
    equipment.push("Purse");
    gold += 25;
    features.push(
      "Retainer: You have three retainers loyal to your family. These retainers are a noble-born squire, a groom for your horse, and a servant for mundane tasks. Your retainers are people who can perform tasks for you, but they do not fight for you, will not follow you into dangerous areas, and will leave if they are frequently endangered or abused."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWho is your family?\rAre there any famous persons in it, or is your family famous for something in particular?\rWho is the woman you recieved the emblem of chivalry from?.\rWhy are you a " +
      className.toLowerCase() +
      "?\r" +
      "How did you go from knight to " +
      className.toLowerCase() +
      "?\r" +
      "What does being a " +
      race +
      " mean to you?";
  } else if (newBackground1 === "Noble") {
    firstLanguage = random_language();
    firstLanguage = right_language();
    profsAndLangs.languages.push(firstLanguage);
    tool_adder_2(tool_adder(random_gaming_set_capitalize().toLowerCase()));
    add_click(9);
    stat_checker(intelligenceModifier + 2, "form48_1");
    add_click(1);
    stat_checker(charismaModifier + 2, "form45_1");
    equipment.push("Signet ring");
    equipment.push("Scroll of pedigree");
    equipment.push("Set of fine clothes");
    equipment.push("Purse");
    gold += 25;
    features.push(
      "Position of Privilege: You are welcome in high society, and people assume you have the right to be wherever you are. The common folk and merchants make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWho is your family?\rAre there any famous persons in it, or is your family famous for something in particular?\rWhy are you a " +
      className.toLowerCase() +
      "?\r" +
      "How did you go from noble to " +
      className.toLowerCase() +
      "?\r" +
      "What does being a " +
      race +
      " mean to you?";
  } else if (newBackground1 === "Outlander") {
    musicalinstrument = random_musical_instrument();
    tool_adder_2(tool_adder(musicalinstrument.toLowerCase()));
    add_click(2);
    stat_checker(strengthModifier + 2, "form49_1");
    add_click(12);
    stat_checker(wisdomModifier + 2, "form47_1");
    equipment.push("Staff");
    equipment.push("Hunting Trap");
    equipment.push(random_animal_trophy());
    equipment.push("Set of traveler's clothes");
    equipment.push("Belt Pouch");
    gold += 10;
    features.push(
      "Wanderer: You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhere were you at?\rDid you travel a lot?\rWhat's the story behind your animal trophy?\rWhy are you a " +
      className.toLowerCase() +
      "?\r" +
      "How did you go from outlander to " +
      className.toLowerCase() +
      "?\r" +
      "What does being a " +
      race +
      " mean to you?";
  } else if (newBackground1 === "Pirate") {
    tool_adder_2(tool_adder("navigator's tools"));
    tool_adder_2(tool_adder("water vehicles"));
    add_click(2);
    stat_checker(strengthModifier + 2, "form49_1");
    add_click(7);
    stat_checker(wisdomModifier + 2, "form43_1");
    equipment.push("Club");
    equipment.push("50 feet of silk rope");
    document.getElementById("form14_2").value = random_trinket();
    equipment.push("Set of common clothes");
    equipment.push("Belt Pouch");
    gold += 10;
    features.push(
      "Bad Reputation: No matter where you go, people are afraid of you due to your reputation. When you are in a civilized settlement, you can get away with minor criminal offenses, such as refusing to pay for food at a tavern or breaking down doors at a local shop, since most people will not report your activity to the authorities."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rHow did you become a pirate?\rDid you have a seaport that was your home?\rDo you still keep in contact with your shipmates?\rWhy are you a " +
      className.toLowerCase() +
      "?\r" +
      "How did you go from pirate to " +
      className.toLowerCase() +
      "?\r" +
      "What does being a " +
      race +
      " mean to you?\r" +
      "Why aren't you a pirate still?";
  } else if (newBackground1 === "Sage") {
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
    equipment.push("Bottle of black ink");
    equipment.push("Quill");
    equipment.push("Small knife");
    equipment.push("Letter from dead colleague");
    equipment.push("Set of common clothes");
    equipment.push("Belt pouch");
    gold += 10;
    features.push(
      "Researcher: When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat were you spending all that time studying?\rWhat does the letter from your dead colleague say?\rWhy did you learn those languages?\rWhy are you a " +
      className.toLowerCase() +
      "?\r" +
      "How did you go from sage to " +
      className.toLowerCase() +
      "?\r" +
      "What does being a " +
      race +
      " mean to you?";
  } else if (newBackground1 === "Sailor") {
    tool_adder_2(tool_adder("navigator's tools"));
    tool_adder_2(tool_adder("water vehicles"));
    add_click(2);
    stat_checker(strengthModifier + 2, "form49_1");
    add_click(7);
    stat_checker(wisdomModifier + 2, "form43_1");
    equipment.push("Club");
    equipment.push("50 feet of silk rope");
    document.getElementById("form14_2").value = random_trinket();
    equipment.push("Set of common clothes");
    equipment.push("Belt Pouch");
    gold += 10;
    features.push(
      "Ship's Passage: You can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship you have good relations with. In return for your free passage, you and your companions are expected to assist the crew during the voyage."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rHow did you become a sailor?\rDid you have a seaport that was your home?\rDo you still keep in contact with your shipmates?\rWhy are you a " +
      className.toLowerCase() +
      "?\r" +
      "How did you go from sailor to " +
      className.toLowerCase() +
      "?\r" +
      "What does being a " +
      race +
      " mean to you?\r";
  } else if (newBackground1 === "Soldier") {
    soldierGamingSet = random_gaming_set_soldier();
    tool_adder_2(tool_adder(soldierGamingSet.toLowerCase()));
    tool_adder_2(tool_adder("land vehicles"));
    add_click(2);
    stat_checker(strengthModifier + 2, "form49_1");
    add_click(24);
    stat_checker(charismaModifier + 2, "form44_1");
    equipment.push("Insignia of rank");
    document.getElementById("form14_2").value = random_trophy();
    if (soldierGamingSet === "Dice") {
      equipment.push("Bone " + soldierGamingSet);
    } else {
      equipment.push(soldierGamingSet);
    }
    equipment.push("Set of common clothes");
    equipment.push("Belt Pouch");
    gold += 10;
    features.push(
      "Military Rank: Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. Can gain access to friendly military encampments and fortresses where your rank is recognized."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rHow did you become a soldier?\rWhat rank were you?\rDo you still keep in contact with any of your brothers and sisters in arms?\rWhy are you a " +
      className.toLowerCase() +
      "?\r" +
      "How did you go from soldier to " +
      className.toLowerCase() +
      "?\r" +
      "What does being a " +
      race +
      " mean to you?\r";
  } else if (newBackground1 === "Spy") {
    tool_adder_2(tool_adder("thieves' tools"));
    tool_adder_2(tool_adder(random_gaming_set_capitalize().toLowerCase()));
    add_click(17);
    stat_checker(charismaModifier + 2, "form36_1");
    add_click(23);
    stat_checker(dexterityModifier + 2, "form32_1");
    equipment.push("Crowbar");
    equipment.push("Set of dark common clothes with a hood");
    equipment.push("Belt Pouch");
    gold += 15;
    features.push(
      "Spy Contact: You have a reliable and trustworthy contact who acts as your liaison to a network of other spies or criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat caused you to become a spy?\rDid you do anything terrible?\rWho is your spy contact?\rWhy are you a " +
      className.toLowerCase() +
      "?\r" +
      "How did you go from spy to " +
      className.toLowerCase() +
      "?\r" +
      "What does being a " +
      race +
      " mean to you?\r" +
      "Who did you work for when you were a spy?";
  } else if (newBackground1 === "Urchin") {
    tool_adder_2(tool_adder("disguise kit"));
    tool_adder_2(tool_adder("thieves' tools"));
    add_click(4);
    stat_checker(dexterityModifier + 2, "form46_1");
    add_click(23);
    stat_checker(dexterityModifier + 2, "form32_1");
    equipment.push("Small knife");
    equipment.push("Map of hometown");
    equipment.push("Pet mouse");
    document.getElementById("form14_2").value =
      random_trinket() + " from parents";
    equipment.push("Set of common clothes");
    equipment.push("Belt Pouch");
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

  // Block to give a Half-Elf two random skills based on the most useful
  if (race === "Half-Elf") {
    skill_adder();
    skill_adder();
  }

  // Function to determine what proficiencies a character gets based on their class and their proficiencies they already have
  function class_proficiencies() {
    if (classAndLevel === "Barbarian 1") {
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
    } else if (classAndLevel === "Fighter 1") {
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
    } else if (classAndLevel === "Bard 1") {
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
    } else if (classAndLevel === "Cleric 1") {
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
    } else if (classAndLevel === "Sorcerer 1") {
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
    } else if (classAndLevel === "Wizard 1") {
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
    } else if (classAndLevel === "Druid 1") {
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
    } else if (classAndLevel === "Rogue 1") {
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
    } else if (classAndLevel === "Warlock 1") {
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
    } else if (classAndLevel === "Ranger 1") {
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
    } else if (classAndLevel === "Paladin 1") {
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
    } else if (classAndLevel === "Monk 1") {
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

  // Block that determines what equipment you get based on class
  if (classAndLevel === "Barbarian 1") {
    equipment_chooser(classAndLevel);
  } else if (classAndLevel === "Fighter 1") {
    equipment_chooser(classAndLevel);
  } else if (classAndLevel === "Bard 1") {
    equipment_chooser(classAndLevel);
  } else if (classAndLevel === "Cleric 1") {
    equipment_chooser(classAndLevel);
  } else if (classAndLevel === "Sorcerer 1") {
    equipment_chooser(classAndLevel);
  } else if (classAndLevel === "Wizard 1") {
    equipment_chooser(classAndLevel);
  } else if (classAndLevel === "Druid 1") {
    equipment_chooser(classAndLevel);
  } else if (classAndLevel === "Rogue 1") {
    equipment_chooser(classAndLevel);
  } else if (classAndLevel === "Warlock 1") {
    equipment_chooser(classAndLevel);
  } else if (classAndLevel === "Ranger 1") {
    equipment_chooser(classAndLevel);
  } else if (classAndLevel === "Paladin 1") {
    equipment_chooser(classAndLevel);
  } else if (classAndLevel === "Monk 1") {
    equipment_chooser(classAndLevel);
  }

  // Variable that holds your character name
  charName = nameGenerator.CreateNewName(finalFirstName, finalLastName);

  // Variable that holds the name of the player
  name = "Tu Nombre";

  // Pushes string to alliesAndOrganizations as a writing prompt
  alliesAndOrganizations.push(
    "¿Amigos? ¿Familia? ¿Gremio? ¿Tripulación? ¿Hermanos de armas? ¿Sacerdotes? ¿Huérfanos? ¿Monstruos buenos? ¿Amantes? ¿Deidades? ¿Rivales? ¿Enemigos? ¿Relaciones complicadas? ¿Miembros del grupo?"
  );

  //Block of arrays that makes new arrays with commas between them
  newLangs = profsAndLangs.languages.join(", ");
  newWeaponProfs = profsAndLangs.weaponProficiencies.join(", ");
  newArmorProfs = profsAndLangs.armorProficiencies.join(", ");
  newToolProfs = profsAndLangs.toolProficiencies.join(", ");

  // Function to determine if an array is empty
  function determine_if_empty(array) {
    if (array.length === 0) {
      return "none";
    } else {
      return array;
    }
  }

  //Block of arrays that makes new arrays with the sections at the start
  finalLanguages = "Languages: " + determine_if_empty(newLangs);
  finalweaponProficiencies =
    "Weapon Proficiencies: " + determine_if_empty(newWeaponProfs);
  finalarmorProficiencies =
    "Armor Proficiencies: " + determine_if_empty(newArmorProfs);
  finaltoolProficiencies =
    "Tool Proficiencies: " + determine_if_empty(newToolProfs);

  // Pushes arrays to proficienciesAndLanguages
  proficienciesAndLanguages.push(finalLanguages);
  proficienciesAndLanguages.push(finalweaponProficiencies);
  proficienciesAndLanguages.push(finalarmorProficiencies);
  proficienciesAndLanguages.push(finaltoolProficiencies);

  // Determines spells based on class and stats
  if (classAndLevel === "Bard 1") {
    document.getElementById("form214_3").value = className; // spellcasting class
    document.getElementById("form196_3").value = "CHA"; // spellcasting ability
    document.getElementById("form194_3").value = 10 + charismaModifier; // spell save dc
    stat_checker(charismaModifier + 2, "form195_3"); // spell attack bonus
    document.getElementById("form97_3").value = 2;
    document.getElementById("form193_3").value = "Charm Person";
    document.getElementById("form159_3").value = "Faerie Fire";
    if (strength > 12 && constitution > 12) {
      document.getElementById("form137_3").value = "Thunderwave";
    } else {
      document.getElementById("form137_3").value = "Tasha's Hideous Laughter";
    }
    if (strength > 12 && constitution > 12) {
      document.getElementById("form136_3").value = "Cure Wounds";
    } else {
      document.getElementById("form136_3").value = "Healing Word";
    }
    if (document.getElementById("form198_3").value === "Minor Illusion") {
      document.getElementById("form213_3").value = "Vicious Mockery";
      document.getElementById("form204_3").value = "Prestidigitation";
    } else if (
      document.getElementById("form198_3").value === "Prestidigitation"
    ) {
      document.getElementById("form213_3").value = "Vicious Mockery";
      document.getElementById("form204_3").value = "Prestidigitation";
    } else if (document.getElementById("form198_3").value === "Thaumaturgy") {
      document.getElementById("form213_3").value = "Minor Illusion";
      document.getElementById("form204_3").value = "Vicious Mockery";
    } else {
      document.getElementById("form213_3").value = "Vicious Mockery";
      document.getElementById("form204_3").value = "Prestidigitation";
    }
    document.getElementById("form62_1").value = "d6";
  } else if (classAndLevel === "Sorcerer 1") {
    document.getElementById("form214_3").value = className; // spellcasting class
    document.getElementById("form196_3").value = "CHA"; // spellcasting ability
    document.getElementById("form194_3").value = 10 + charismaModifier; // spell save dc
    stat_checker(charismaModifier + 2, "form195_3"); // spell attack bonus
    document.getElementById("form97_3").value = 2;
    document.getElementById("form213_3").value = "Prestidigitation";
    document.getElementById("form204_3").value = "Friends";
    document.getElementById("form203_3").value = "Message";
    document.getElementById("form202_3").value = "Fire Bolt";
    document.getElementById("form193_3").value = "Charm Person";
    document.getElementById("form159_3").value = "Burning Hands";
  } else if (classAndLevel === "Warlock 1") {
    document.getElementById("form214_3").value = className; // spellcasting class
    document.getElementById("form196_3").value = "CHA"; // spellcasting ability
    document.getElementById("form194_3").value = 10 + charismaModifier; // spell save dc
    stat_checker(charismaModifier + 2, "form195_3"); // spell attack bonus
    document.getElementById("form213_3").value = "Eldritch Blast";
    document.getElementById("form204_3").value = "Poison Spray";
    document.getElementById("form137_3").value = "Hex";
    document.getElementById("form136_3").value = "Witch Bolt";
    document.getElementById("form97_3").value = 1;
  } else if (classAndLevel === "Wizard 1") {
    document.getElementById("form214_3").value = className; // spellcasting class
    document.getElementById("form196_3").value = "INT"; // spellcasting ability
    document.getElementById("form194_3").value = 10 + intelligenceModifier; // spell save dc
    stat_checker(intelligenceModifier + 2, "form195_3"); // spell attack bonus
    document.getElementById("form213_3").value = "Prestidigitation";
    if (document.getElementById("form198_3") === "Minor Illusion") {
      document.getElementById("form204_3").value = "Mage Hand";
    } else {
      document.getElementById("form204_3").value = "Minor Illusion";
    }
    document.getElementById("form203_3").value = "Fire Bolt";
    if (intelligenceModifier === 0) {
      document.getElementById("form193_3").value = "Magic Missile";
    } else if (intelligenceModifier === 1) {
      document.getElementById("form193_3").value = "Magic Missile";
      document.getElementById("form159_3").value = "Mage Armor";
    } else if (intelligenceModifier === 2) {
      document.getElementById("form193_3").value = "Magic Missile";
      document.getElementById("form159_3").value = "Mage Armor";
      document.getElementById("form137_3").value = "Sleep";
    } else if (intelligenceModifier === 3) {
      document.getElementById("form193_3").value = "Magic Missile";
      document.getElementById("form159_3").value = "Mage Armor";
      document.getElementById("form137_3").value = "Sleep";
      document.getElementById("form136_3").value = "Burning Hands";
    } else if (intelligenceModifier === 4) {
      document.getElementById("form193_3").value = "Magic Missile";
      document.getElementById("form159_3").value = "Mage Armor";
      document.getElementById("form137_3").value = "Sleep";
      document.getElementById("form136_3").value = "Burning Hands";
      document.getElementById("form135_3").value = "Tasha's Hideous Laughter";
    } else if (intelligenceModifier === 5) {
      document.getElementById("form193_3").value = "Magic Missile";
      document.getElementById("form159_3").value = "Mage Armor";
      document.getElementById("form137_3").value = "Sleep";
      document.getElementById("form136_3").value = "Burning Hands";
      document.getElementById("form135_3").value = "Tasha's Hideous Laughter";
      document.getElementById("form133_3").value = "Unseen Servant";
    }
    document.getElementById("form97_3").value = 2;
  } else if (classAndLevel === "Cleric 1") {
    document.getElementById("form214_3").value = className; // spellcasting class
    document.getElementById("form196_3").value = "WIS"; // spellcasting ability
    document.getElementById("form194_3").value = 10 + wisdomModifier; // spell save dc
    stat_checker(wisdomModifier + 2, "form195_3"); // spell attack bonus
    document.getElementById("form97_3").value = 2;
  } else if (classAndLevel === "Druid 1") {
    document.getElementById("form214_3").value = className; // spellcasting class
    document.getElementById("form196_3").value = "WIS"; // spellcasting ability
    document.getElementById("form194_3").value = 10 + wisdomModifier; // spell save dc
    stat_checker(wisdomModifier + 2, "form195_3"); // spell attack bonus
    document.getElementById("form97_3").value = 2;
    if (strength > dexterity) {
      document.getElementById("form213_3").value = "Shilelagh";
      document.getElementById("form204_3").value = "Druidcraft";
    } else {
      document.getElementById("form213_3").value = "Produce Flame";
      document.getElementById("form204_3").value = "Druidcraft";
    }
    if (wisdomModifier === 0) {
      document.getElementById("form193_3").value = "Healing Word";
    } else if (wisdomModifier === 1) {
      document.getElementById("form193_3").value = "Healing Word";
      document.getElementById("form159_3").value = "Thunderwave";
    } else if (wisdomModifier === 2) {
      document.getElementById("form193_3").value = "Healing Word";
      document.getElementById("form159_3").value = "Thunderwave";
      document.getElementById("form137_3").value = "Entangle";
    } else if (wisdomModifier === 3) {
      document.getElementById("form193_3").value = "Healing Word";
      document.getElementById("form159_3").value = "Thunderwave";
      document.getElementById("form137_3").value = "Entangle";
      document.getElementById("form136_3").value = "Cure Wounds";
    } else if (wisdomModifier === 4) {
      document.getElementById("form193_3").value = "Healing Word";
      document.getElementById("form159_3").value = "Thunderwave";
      document.getElementById("form137_3").value = "Entangle";
      document.getElementById("form136_3").value = "Cure Wounds";
      document.getElementById("form135_3").value = "Faerie Fire";
    } else if (wisdomModifier === 5) {
      document.getElementById("form193_3").value = "Healing Word";
      document.getElementById("form159_3").value = "Thunderwave";
      document.getElementById("form137_3").value = "Entangle";
      document.getElementById("form136_3").value = "Cure Wounds";
      document.getElementById("form135_3").value = "Faerie Fire";
      document.getElementById("form133_3").value = "Earth Tremor";
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
        "Scale Mail: Disadvantage on stealth rolls from medium armor."
      );
    } else if (equipment[_i22] === armor.heavyArmor.ringmail.armorname) {
      armorClass += 14;
      features.push(
        "Ring Mail: Disadvantage on stealth rolls from heavy armor."
      );
    } else if (equipment[_i22] === armor.heavyArmor.chainmail.armorname) {
      armorClass += 16;
      features.push(
        "Chain Mail: Disadvantage on stealth rolls from heavy armor."
      );
    }
  }

  // For loop that searches your inventory and adds +2 armor class if you have a shield
  for (var _i23 = 0; _i23 < equipment.length; _i23++) {
    if (
      equipment[_i23] === "Shield" ||
      equipment[_i23] === "Shield - Focus" ||
      equipment[_i23] === "Wooden shield"
    ) {
      armorClass += 2;
    } else {
    }
  }
  // Array con las traducciones de las clases
  const classTranslations = {
    "Barbarian": "Bárbaro",
    "Bard": "Bardo",
    "Cleric": "Clérigo",
    "Druid": "Druida",
    "Fighter": "Guerrero",
    "Monk": "Monje",
    "Paladin": "Paladín",
    "Ranger": "Guardabosques",
    "Rogue": "Pícaro",
    "Sorcerer": "Hechicero",
    "Warlock": "Brujo",
    "Wizard": "Mago"
  };
// Función para traducir clases
function translateClass(classAndLevel) {
  // Dividir la clase y el nivel (Ejemplo: "Barbarian 1")
  const [className, level] = classAndLevel.split(" ");

  // Obtener la traducción de la clase
  const translatedClass = classTranslations[className];

  // Si existe la traducción, devolver el nombre traducido con el nivel
  if (translatedClass) {
    return `${translatedClass} ${level}`;
  }

  // Si no se encuentra la traducción, devolver el valor original
  return classAndLevel;
}
// Array con las traducciones de las razas
const raceTranslations = {
  "Human": "Humano",
  "Human (Calishite)": "Humano (Calishita)",
  "Human (Chondathan)": "Humano (Chondatano)",
  "Human (Damaran)": "Humano (Damarano)",
  "Human (Illuskan)": "Humano (Illuskano)",
  "Human (Mulan)": "Humano (Mulano)",
  "Human (Rashemi)": "Humano (Rashemiano)",
  "Human (Shou)": "Humano (Shou)",
  "Human (Tethyrian)": "Humano (Tethyriano)",
  "Human (Turami)": "Humano (Turamiano)",
  "Elf": "Elfo",
  "High Elf": "Alto Elfo",
  "Wood Elf": "Elfo del Bosque",
  "Dark Elf (Drow)": "Elfo Oscuro (Drow)",
  "Dwarf": "Enano",
  "Hill Dwarf": "Enano de la Colina",
  "Mountain Dwarf": "Enano de la Montaña",
  "Halfling": "Mediano",
  "Lightfoot Halfling": "Mediano Piesligeros",
  "Stout Halfling": "Mediano Robusto",
  "Dragonborn": "Dracónido",
  "Black Dragonborn": "Dracónido Negro",
  "Blue Dragonborn": "Dracónido Azul",
  "Brass Dragonborn": "Dracónido de Latón",
  "Bronze Dragonborn": "Dracónido de Bronce",
  "Copper Dragonborn": "Dracónido de Cobre",
  "Gold Dragonborn": "Dracónido Dorado",
  "Green Dragonborn": "Dracónido Verde",
  "Red Dragonborn": "Dracónido Rojo",
  "Silver Dragonborn": "Dracónido Plateado",
  "White Dragonborn": "Dracónido Blanco",
  "Gnome": "Gnomo",
  "Forest Gnome": "Gnomo del Bosque",
  "Rock Gnome": "Gnomo de la Roca",
  "Half-Elf": "Semielfo",
  "Half-Orc": "Semiorco",
  "Tiefling": "Tiefling",
  "Aasimar": "Aasimar",
  "Genasi": "Genasi",
  "Air Genasi": "Genasi del Aire",
  "Earth Genasi": "Genasi de la Tierra",
  "Fire Genasi": "Genasi del Fuego",
  "Water Genasi": "Genasi del Agua",
  "Goliath": "Goliat",
  "Tabaxi": "Tabaxi",
  "Firbolg": "Firbolg",
  "Triton": "Tritón",
  "Kenku": "Kenku",
  "Goblin": "Goblin",
  "Hobgoblin": "Hobgoblin",
  "Bugbear": "Hombre Oso",
  "Kobold": "Kobold",
  "Yuan-ti Pureblood": "Yuan-ti Sangrepura"
};

// Función para traducir razas
function translateRace(raceAndDescriptor) {
  // Dividir la raza y cualquier descriptor adicional (Ejemplo: "Elf 1")
  const [raceName, descriptor] = raceAndDescriptor.split(" ");

  // Obtener la traducción de la raza
  const translatedRace = raceTranslations[raceName];

  // Si existe la traducción, devolver la raza traducida con el descriptor
  if (translatedRace) {
    return descriptor ? `${translatedRace} ${descriptor}` : translatedRace;
  }

  // Si no se encuentra la traducción, devolver el valor original
  return raceAndDescriptor;
}
// Diccionario de traducción de alineamientos
const alignmentTranslations = {
  "Lawful Good": "Legal Bueno",
  "Neutral Good": "Neutral Bueno",
  "Chaotic Good": "Caótico Bueno",
  "Lawful Neutral": "Legal Neutral",
  "True Neutral": "Neutral Verdadero",
  "Chaotic Neutral": "Caótico Neutral",
  "Lawful Evil": "Legal Malvado",
  "Neutral Evil": "Neutral Malvado",
  "Chaotic Evil": "Caótico Malvado"
};

// Función para traducir alineamientos
// Función para traducir alineamiento (array a string)
function translateAlignmentArray(alignmentArray) {
  return alignmentArray
    .map(alignment => alignmentTranslations[alignment] || alignment) // Traducir cada palabra
    .join(" "); // Unir con espacios
}

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
  document.getElementById("form93_1").value = name; // name
  document.getElementById("form90_1").value = newBackground1; // background
  document.getElementById("form96_1").value = charName; // character name
  document.getElementById("form8_2").value = charName; // character name 2nd page
  document.getElementById("form83_1").value = strength; // strength stat
  document.getElementById("form84_1").value = dexterity; // dex stat
  document.getElementById("form82_1").value = constitution; // con stat
  document.getElementById("form86_1").value = intelligence; // int stat
  document.getElementById("form81_1").value = wisdom; // wis stat
  document.getElementById("form85_1").value = charisma; // cha stat
  document.getElementById("form95_1").value = translateRace(race); // race text field
  document.getElementById("form68_1").value = gold; // gold
  document.getElementById("form104_1").value = equipment.join("\r\n"); // equipment section
  document.getElementById("form94_1").value = translateClass(classAndLevel); // class and level text field
  document.getElementById("form105_1").value =
    proficienciesAndLanguages.join("\r"); // proficiencies and languages
  document.getElementById("form106_1").value = features.join("\r\n"); // features & traits
  document.getElementById("form16_2").value = additionalFeatures.join("\r\n"); // additional features, pg. 2
  document.getElementById("form92_1").value = translateAlignmentArray(alignment); // alignment text fielddice
  document.getElementById("form73_1").value = armorClass; // AC
  document.getElementById("form103_1").value = spellcastingSection.join("\r\n"); // adding spell descriptions to the spellcasting section

  // Block to determine passive perception
  if (document.getElementById("form7_1").checked === "checked") {
    document.getElementById("form63_1").value = 12 + wisdomModifier; // passive perception
  } else {
    document.getElementById("form63_1").value = 10 + wisdomModifier; // passive perception
  }

  // Block to replace' Neutral Neutral' with 'True Neutral'
  if (document.getElementById("form92_1").value === "Neutral Neutral") {
    document.getElementById("form92_1").value = "True Neutral";
  }
}
// Call the character generator on page load
generate_initial_character(standard_version);

// Function to make a skill proficient and checked
function add_click(j) {
  var i = j.toString();
  document.getElementById("form" + i + "_1").checked = "checked";
  click_on(i - 1);
}

// Function to remove skill proficiency and checked status
function remove_click(j) {
  document.getElementById("form" + j + "_1").checked = undefined;
  click_off(j);
}

// Function to generate a new character by clearing all forms and checkboxes and then generating a character again
function generate_initial_character(version) {
  clear_All();
 /// version();
 /// generate_character();
}

// Function to generate a new character by clearing all forms and checkboxes and then generating a character again
function generate_new_character(version, clearall=true) {
  if(clearall){
    clear_All();
  }

  if(version()){
    generate_character(!clearall);
  }
 
}
