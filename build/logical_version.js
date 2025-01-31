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
          "Mindardois",
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

  // Array that contains list of armas marciales
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
        equipment.push("Hacha de mano");
        document.getElementById("form78_1").value = "Hacha de mano"; // 2da arma 1ra sección
        stat_checker(strengthModifier + 2, "form65_1"); // 2nd weapon 2nd section
        stat_checker_3(strengthModifier, "form74_1", "1d6", "S"); // 2nd weapon 3rd section
        if (random > 0.66) {
          equipment.push("Maza");
            document.getElementById("form79_1").value = "Maza"; // 1ra arma 1ra sección
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d6", "B"); // 1st weapon 3rd section
            features.push("Dominio del Clérigo: Vida.");
            if (wisdomModifier === 0) {
            document.getElementById("form137_3").value = "Palabra Curativa";
            } else if (wisdomModifier === 1) {
            document.getElementById("form137_3").value = "Palabra Curativa";
            document.getElementById("form136_3").value = "Guía Divina";
            } else if (wisdomModifier === 2) {
            document.getElementById("form137_3").value = "Palabra Curativa";
            document.getElementById("form136_3").value = "Guía Divina";
            document.getElementById("form135_3").value = "Bendición";
            } else if (wisdomModifier === 3) {
            document.getElementById("form137_3").value = "Palabra Curativa";
            document.getElementById("form136_3").value = "Guía Divina";
            document.getElementById("form135_3").value = "Bendición";
            document.getElementById("form133_3").value = "Escudo de Fe";
            } else if (wisdomModifier === 4) {
            document.getElementById("form137_3").value = "Palabra Curativa";
            document.getElementById("form136_3").value = "Guía Divina";
            document.getElementById("form135_3").value = "Bendición";
            document.getElementById("form133_3").value = "Escudo de Fe";
            document.getElementById("form131_3").value =
              "Purificar Comida y Bebida";
            } else if (wisdomModifier === 5) {
            document.getElementById("form137_3").value = "Palabra Curativa";
            document.getElementById("form136_3").value = "Guía Divina";
            document.getElementById("form135_3").value = "Bendición";
            document.getElementById("form133_3").value = "Escudo de Fe";
            document.getElementById("form131_3").value =
              "Purificar Comida y Bebida";
            document.getElementById("form129_3").value = "Detectar el Bien y el Mal";
            }
            document.getElementById("form213_3").value = "Guía";
            document.getElementById("form204_3").value = "Llama Sagrada";
            document.getElementById("form203_3").value = "Revivir a los Muertos";
            armor_adder_2(armor_adder("armadura pesada"));
            equipment.push("Cota de mallas");
            features.push(
            "Discípulo de la Vida: Siempre que uses un hechizo de nivel 1 o superior para restaurar puntos de golpe, el objetivo recupera puntos de golpe adicionales iguales a 2 + el nivel del hechizo."
            );
            document.getElementById("form193_3").value = "Bendecir";
            document.getElementById("form159_3").value = "Curar Heridas";
        } else if (random > 0.33) {
            features.push("Dominio del Clérigo: Guerra.");
            armor_adder_2(armor_adder("armadura pesada"));
            equipment.push("Cota de mallas");
            weapon_adder_2(weapon_adder("armas marciales"));
            equipment.push("Martillo de guerra");
            document.getElementById("form213_3").value = "Guía";
            document.getElementById("form204_3").value = "Llama Sagrada";
            document.getElementById("form203_3").value = "Taumaturgia";
            if (wisdomModifier === 0) {
            document.getElementById("form137_3").value = "Bendición";
            } else if (wisdomModifier === 1) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            } else if (wisdomModifier === 2) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            } else if (wisdomModifier === 3) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Maldición";
            } else if (wisdomModifier === 4) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Maldición";
            document.getElementById("form131_3").value = "Curar Heridas";
            } else if (wisdomModifier === 5) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Maldición";
            document.getElementById("form131_3").value = "Curar Heridas";
            document.getElementById("form129_3").value = "Mandato";
            }
            document.getElementById("form79_1").value = "Martillo de guerra"; // 1ra arma 1ra sección
            stat_checker(strengthModifier + 2, "form64_1"); // 1ra arma 2da sección
            stat_checker_3(strengthModifier, "form76_1", "1d8", "B"); // 1ra arma 3ra sección
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
              "/lr): Cuando usas la acción de Ataque, puedes hacer un ataque con arma como acción adicional. Puede usarse = al modificador de SAB (mínimo una vez) por descanso largo."
            );
          } else {
            features.push("Dominio del Clérigo: Naturaleza.");
            armor_adder_2(armor_adder("armadura pesada"));
          equipment.push("Maza");
          document.getElementById("form79_1").value = "Maza"; // 1st weapon 1st section
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d6", "B"); // 1st weapon 3rd section
            document.getElementById("form213_3").value = "Guía";
            document.getElementById("form204_3").value = "Llama Sagrada";
            document.getElementById("form203_3").value = "Reparar";
            document.getElementById("form202_3").value = "Garrote";
            equipment.push("Cota de mallas");
          if (wisdomModifier === 0) {
            document.getElementById("form137_3").value = "Bendición";
          } else if (wisdomModifier === 1) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
          } else if (wisdomModifier === 2) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
          } else if (wisdomModifier === 3) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Maldición";
          } else if (wisdomModifier === 4) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Maldición";
            document.getElementById("form131_3").value = "Curar Heridas";
          } else if (wisdomModifier === 5) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Maldición";
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
            stat_checker(wisdomModifier + 2, "form50_1"); // animal handling
          } else if (
            random === 10 &&
            document.getElementById("form11_1").checked === undefined
          ) {
            add_click(11);
            stat_checker(intelligenceModifier + 2, "form37_1"); // nature
          } else if (
            random === 16 &&
            document.getElementById("form12_1").checked === undefined
          ) {
            add_click(12);
            stat_checker(wisdomModifier + 2, "form47_1"); // survival
          } else {
            add_click(11);
            stat_checker(intelligenceModifier + 2, "form37_1"); // nature
          }
        }
      } else if (clericBuild === "DEX") {
        equipment.push("Ballesta ligera con 20 virotes");
        document.getElementById("form78_1").value = "Ballesta ligera"; // 2nd weapon 1st section
        stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
        stat_checker_3(dexterityModifier, "form74_1", "1d8", "P"); // 2nd weapon 3rd section
        if (random > 0.66) {
            features.push("Dominio del Clérigo: Travesura.");
            document.getElementById("form213_3").value = "Guía";
            document.getElementById("form204_3").value = "Reparar";
            document.getElementById("form203_3").value = "Luz";
          if (wisdomModifier === 0) {
            document.getElementById("form137_3").value = "Bendición";
          } else if (wisdomModifier === 1) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
          } else if (wisdomModifier === 2) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
          } else if (wisdomModifier === 3) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Maldición";
          } else if (wisdomModifier === 4) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Maldición";
            document.getElementById("form131_3").value = "Curar Heridas";
          } else if (wisdomModifier === 5) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Maldición";
            document.getElementById("form131_3").value = "Curar Heridas";
            document.getElementById("form129_3").value = "Detectar Magia";
          }
          document.getElementById("form193_3").value = "Encantar Persona";
          document.getElementById("form159_3").value = "Disguise Self";
          equipment.push("Armadura de cuero");
          features.push(
            "Bendicióning of the Trickster: You can use your action to touch a willing creature other than yourself to give it advantage on Stealth checks. This Bendicióning lasts for 1 hour or until you use this feature again."
          );
          equipment.push("Maza");
          document.getElementById("form79_1").value = "Maza"; // 1st weapon 1st section
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d6", "B"); // 1st weapon 3rd section
        } else if (random > 0.33) {
          features.push("Cleric Domain: Tempest.");
          armor_adder_2(armor_adder("armadura pesada"));
          equipment.push("Cota de mallas");
          weapon_adder_2(weapon_adder("armas marciales"));
          equipment.push("Martillo de guerra");
          document.getElementById("form213_3").value = "Guía";
          document.getElementById("form204_3").value = "Llama Sagrada";
          document.getElementById("form203_3").value = "Taumaturgia";
          if (wisdomModifier === 0) {
            document.getElementById("form137_3").value = "Bendición";
          } else if (wisdomModifier === 1) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
          } else if (wisdomModifier === 2) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
          } else if (wisdomModifier === 3) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Maldición";
          } else if (wisdomModifier === 4) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Maldición";
            document.getElementById("form131_3").value = "Curar Heridas";
          } else if (wisdomModifier === 5) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Maldición";
            document.getElementById("form131_3").value = "Curar Heridas";
            document.getElementById("form129_3").value = "Detectar Magia";
          }
            document.getElementById("form79_1").value = "Martillo de guerra"; // 1ra arma 1ra sección
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d8", "B"); // 1st weapon 3rd section
            document.getElementById("form193_3").value = "Nube de Niebla";
            document.getElementById("form159_3").value = "Ola atronadora";
          if (wisdomModifier <= 0) {
            lightGo = 1;
          } else {
            lightGo = wisdomModifier;
          }
            features.push(
            "Ira de la Tormenta (" +
              lightGo +
              "/lr): Cuando una criatura a 5 pies de ti que puedas ver te golpea con un ataque, puedes usar tu reacción para hacer que la criatura haga una tirada de salvación de DEX. La criatura recibe 2d8 de daño por rayo o trueno (a tu elección) si falla la tirada de salvación, y la mitad de daño si tiene éxito. Puede usarse = al modificador de SAB (mínimo una vez) por descanso largo."
            );
        } else {
            features.push("Dominio del Clérigo: Muerte.");
            weapon_adder_2(weapon_adder("armas marciales"));
            equipment.push("Martillo de guerra");
            document.getElementById("form213_3").value = "Guía";
          document.getElementById("form204_3").value = "Llama Sagrada";
            document.getElementById("form203_3").value = "Revivir a los Muertos";
          document.getElementById("form79_1").value = "Martillo de guerra"; // 1st weapon 1st section
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d8", "B"); // 1st weapon 3rd section
            document.getElementById("form202_3").value = "Toque Helado";
            equipment.push("Cota de escamas");
          if (wisdomModifier === 0) {
            document.getElementById("form137_3").value = "Maldición";
          } else if (wisdomModifier === 1) {
            document.getElementById("form137_3").value = "Maldición";
            document.getElementById("form136_3").value = "Palabra Curativa";
          } else if (wisdomModifier === 2) {
            document.getElementById("form137_3").value = "Maldición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Inflict Wounds";
          } else if (wisdomModifier === 3) {
            document.getElementById("form137_3").value = "Maldición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Inflict Wounds";
            document.getElementById("form133_3").value = "Bendición";
          } else if (wisdomModifier === 4) {
            document.getElementById("form137_3").value = "Maldición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Inflict Wounds";
            document.getElementById("form133_3").value = "Bendición";
            document.getElementById("form131_3").value = "Guiar Rayo";
          } else if (wisdomModifier === 5) {
            document.getElementById("form137_3").value = "Maldición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Inflict Wounds";
            document.getElementById("form133_3").value = "Bendición";
            document.getElementById("form131_3").value = "Guiar Rayo";
            document.getElementById("form129_3").value = "Curar Heridas";
          }
            document.getElementById("form193_3").value = "Vida Falsa";
            document.getElementById("form159_3").value = "Rayo de Enfermedad";
            features.push(
            "Segador: Aprendes un cantrip de nigromancia, y cuando lanzas un cantrip de nigromancia que normalmente solo tiene un objetivo, el hechizo en su lugar tiene como objetivo dos criaturas dentro del alcance y a 5 pies una de la otra."
            );
        }
      } else if (clericBuild === "WIS") {
        equipment.push("Maza");
        document.getElementById("form79_1").value = "Maza"; // 1st weapon 1st section
        stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(strengthModifier, "form76_1", "1d6", "B"); // 1st weapon 3rd section
        equipment.push("Ballesta ligera con 20 virotes");
        document.getElementById("form78_1").value = "Ballesta ligera"; // 2nd weapon 1st section
        stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
        stat_checker_3(dexterityModifier, "form74_1", "1d8", "P"); // 2nd weapon 3rd section
        if (random > 0.66) {
          features.push("Dominio del Clérigo: Conocimiento.");
          document.getElementById("form213_3").value = "Guía";
          document.getElementById("form204_3").value = "Llama Sagrada";
            document.getElementById("form203_3").value = "Taumaturgia";
          if (wisdomModifier === 0) {
            document.getElementById("form137_3").value = "Bendición";
          } else if (wisdomModifier === 1) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
          } else if (wisdomModifier === 2) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
          } else if (wisdomModifier === 3) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Maldición";
          } else if (wisdomModifier === 4) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Maldición";
            document.getElementById("form131_3").value = "Curar Heridas";
          } else if (wisdomModifier === 5) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Maldición";
            document.getElementById("form131_3").value = "Curar Heridas";
            document.getElementById("form129_3").value = "Detectar Magia";
          }
          equipment.push("Cota de escamas");
          knowledgeLanguage = random_language();
          knowledgeLanguage = right_language2(knowledgeLanguage);
          profsAndLangs.languages.push(knowledgeLanguage);
          knowledgeLanguage2 = random_language();
          knowledgeLanguage2 = right_language2(knowledgeLanguage2);
          profsAndLangs.languages.push(knowledgeLanguage2);
            document.getElementById("form193_3").value = "Mandato";
            document.getElementById("form159_3").value = "Identificar";
          for (var _i10 = 0; _i10 < 2; _i10++) {
            if (document.getElementById("form20_1").checked === undefined) {
              add_click(20);
              stat_checker(intelligenceModifier + 4, "form33_1"); // religion
                features.push("Conocimiento Doble Competencia: Religión.");
            } else if (
              document.getElementById("form9_1").checked === undefined
            ) {
              add_click(9);
              stat_checker(intelligenceModifier + 4, "form48_1"); // history
                features.push("Conocimiento Doble Competencia: Historia.");
            } else if (
              document.getElementById("form21_1").checked === undefined
            ) {
              add_click(21);
              stat_checker(intelligenceModifier + 4, "form40_1"); // arcana
                features.push("Conocimiento Doble Competencia: Arcana.");
            } else if (
              document.getElementById("form11_1").checked === undefined
            ) {
              add_click(11);
              stat_checker(intelligenceModifier + 4, "form37_1"); // nature
                features.push("Conocimiento Doble Competencia: Naturaleza.");
            }
          }
        } else if (random > 0.33) {
            features.push("Dominio del Clérigo: Luz.");
          document.getElementById("form213_3").value = "Guía";
          document.getElementById("form204_3").value = "Llama Sagrada";
          document.getElementById("form203_3").value = "Taumaturgia";
            document.getElementById("form202_3").value = "Luz";
          equipment.push("Cota de escamas");
          if (wisdomModifier === 0) {
            document.getElementById("form137_3").value = "Bendición";
          } else if (wisdomModifier === 1) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
          } else if (wisdomModifier === 2) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
          } else if (wisdomModifier === 3) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Maldición";
          } else if (wisdomModifier === 4) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Maldición";
            document.getElementById("form131_3").value = "Curar Heridas";
          } else if (wisdomModifier === 5) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Maldición";
            document.getElementById("form131_3").value = "Curar Heridas";
            document.getElementById("form129_3").value = "Mandato";
          }
            document.getElementById("form193_3").value = "Manos Ardientes";
            document.getElementById("form159_3").value = "Fuego Feérico";
          if (wisdomModifier <= 0) {
            lightGo = 1;
          } else {
            lightGo = wisdomModifier;
          }
            features.push(
            "Destello Protector (" +
              lightGo +
              "/lr): Cuando eres atacado por una criatura a 30 pies de ti que puedas ver, puedes usar tu reacción para imponer desventaja en la tirada de ataque, causando que la luz destelle ante el atacante antes de que golpee o falle. Un atacante que no puede ser cegado es inmune a esta característica. Puedes usar esto un número de veces igual a tu modificador de SAB (mínimo una vez) por descanso largo."
            );
        } else {
            features.push("Dominio del Clérigo: Arcano.");
          document.getElementById("form213_3").value = "Guía";
          document.getElementById("form204_3").value = "Llama Sagrada";
          document.getElementById("form203_3").value = "Taumaturgia";
            document.getElementById("form202_3").value = "Salpicadura Ácida";
            document.getElementById("form201_3").value = "Mordedura de Escarcha";
          if (wisdomModifier === 0) {
            document.getElementById("form137_3").value = "Bendición";
          } else if (wisdomModifier === 1) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
          } else if (wisdomModifier === 2) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
          } else if (wisdomModifier === 3) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Maldición";
          } else if (wisdomModifier === 4) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Maldición";
            document.getElementById("form131_3").value = "Curar Heridas";
          } else if (wisdomModifier === 5) {
            document.getElementById("form137_3").value = "Bendición";
            document.getElementById("form136_3").value = "Palabra Curativa";
            document.getElementById("form135_3").value = "Guiar Rayo";
            document.getElementById("form133_3").value = "Maldición";
            document.getElementById("form131_3").value = "Curar Heridas";
            document.getElementById("form129_3").value = "Santuario";
          }
          equipment.push("Cota de escamas");
          document.getElementById("form193_3").value = "Detectar Magia";
            document.getElementById("form159_3").value = "Misil Mágico";
          add_click(21);
          stat_checker(intelligenceModifier + 4, "form40_1"); // arcana
        }
      }
    } else if (classAndLevel === "Druid 1") {
      tool_adder_2(tool_adder("kit de herboristería"));
      profsAndLangs.languages.push("Druídico");
      features.push(
        "Druídico: Conoces el idioma Druídico, puedes ver mensajes ocultos de los druidas y hablar el idioma. Aquellos que no conocen el Druídico pueden ver el mensaje con una prueba exitosa de Sabiduría DC 15, pero no pueden descifrarlo."
      );
      equipment.push("Armadura de cuero");
      equipment.push("Paquete de explorador");
      if (random2 > 0.5) {
        equipment.push("Escudo de madera");
      } else {
        equipment.push("Arco corto");
        document.getElementById("form78_1").value = "Arco corto"; // 2nd weapon 1st section
        stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
        stat_checker_3(dexterityModifier, "form74_1", "1d6", "P"); // 2nd weapon 3rd section
      }
      if (strength > dexterity) {
        equipment.push("Bastón");
        document.getElementById("form79_1").value = "Bastón"; // 1st weapon 1st section
        stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(strengthModifier, "form76_1", "1d6/10", "B"); // 1st weapon 3rd section
        equipment.push("Corazón de oso petrificado - Enfoque");
      } else if (random > 0.8) {
        equipment.push("Cimitarra");
        document.getElementById("form79_1").value = "Cimitarra"; // 1st weapon 1st section
        if (dexterity > strength) {
          stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(dexterityModifier, "form76_1", "1d6", "S"); // 1st weapon 3rd section
        } else {
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d6", "S"); // 1st weapon 3rd section
        }
        equipment.push("Rama de tejo - Enfoque");
      } else if (random > 0.6) {
        equipment.push("Lanza");
        document.getElementById("form79_1").value = "Lanza"; // 1st weapon 1st section
        stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(dexterityModifier, "form76_1", "1d6", "P"); // 1st weapon 3rd section
        equipment.push("Opalized oak wand - Focus");
      } else if (random > 0.2) {
        equipment.push("Cimitarra");
        document.getElementById("form79_1").value = "Cimitarra"; // 1st weapon 1st section
        if (dexterity > strength) {
          stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(dexterityModifier, "form76_1", "1d6", "S"); // 1st weapon 3rd section
        } else {
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d6", "S"); // 1st weapon 3rd section
        }
        equipment.push("Atrapasueños de sauce - Enfoque");
      } else if (random <= 0.2) {
        equipment.push("Lanza");
        document.getElementById("form79_1").value = "Lanza"; // 1st weapon 1st section
        stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(dexterityModifier, "form76_1", "1d6", "P"); // 1st weapon 3rd section
        equipment.push("Animal totem staff - Focus");
      }
    } else if (classAndLevel === "Fighter 1") {
      features.push(
        "Segundo Aliento (1/r): En tu turno, puedes usar una acción adicional para recuperar puntos de golpe iguales a 1d10 + tu nivel de luchador."
      );
      spellcastingSection.push(
        "Segundo Aliento (1/r): Usa una acción adicional para ganar 1d10 + 1 pg."
      );
      spellcastingSection.push(" ");
      if (strength > dexterity) {
        equipment.push("Cota de mallas");
        equipment.push("Hacha de mano x2");
        document.getElementById("form78_1").value = "Hacha de mano"; // 2nd weapon 1st section
        stat_checker(strengthModifier + 2, "form65_1"); // 2nd weapon 2nd section
        stat_checker_3(strengthModifier, "form74_1", "1d6", "S"); // 2nd weapon 3rd section
        if (strength > constitution) {
            equipment.push("Paquete de explorador");
            features.push(
            "Estilo de Combate: Gran Lucha con Armas, cuando saques un 1 o 2 en un dado de daño para un ataque que hagas con un arma cuerpo a cuerpo que estés empuñando con dos manos, puedes volver a tirar el dado y debes usar la nueva tirada, incluso si la nueva tirada es un 1 o un 2. El arma debe ser un arma de dos manos o tener la propiedad versátil para obtener este beneficio."
            );
            spellcastingSection.push(
            "Gran Lucha con Armas: Vuelve a tirar las tiradas de daño que sean un 1 o un 2, una vez por tirada."
            );

          equipment.push("Espada grande");
          document.getElementById("form79_1").value = "Espada grande"; // 1st weapon 1st section
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "2d6", "S"); // 1st weapon 3rd section

          equipment.push("Maza");
          document.getElementById("form77_1").value = "Maza"; // 3rd weapon 1st section
          stat_checker(strengthModifier + 2, "form66_1"); // 3rd weapon 2nd section
          stat_checker_3(strengthModifier, "form75_1", "2d6", "B"); // 3rd weapon 3rd section
        } else {
          equipment.push("Paquete de explorador");
          if (random2 > 0.5) {
            features.push(
              "Estilo de Combate: Duelo, cuando estás empuñando un arma cuerpo a cuerpo en una mano y no tienes otras armas, obtienes un bono de +2 a las tiradas de daño con esa arma."
            );
            spellcastingSection.push("Duelo: +2 bono a las tiradas de daño");
          } else {
            features.push(
              "Estilo de Combate: Protección, cuando una criatura que puedes ver ataca a un objetivo que no seas tú y que esté a 5 pies de ti, puedes usar tu reacción para imponer desventaja en la tirada de ataque. Debes estar empuñando un escudo."
            );
            spellcastingSection.push(
              "Protección: Puedes usar tu reacción para imponer desventaja en la tirada de ataque de un enemigo."
            );
          }
          if (random > 0.75) {
            equipment.push("Escudo");
            equipment.push("Martillo de guerra");
            document.getElementById("form79_1").value = "Martillo de guerra"; // 1st weapon 1st section
            stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
            stat_checker_3(strengthModifier, "form76_1", "1d8", "B"); // 1st weapon 3rd section
          } else if (random > 0.5) {
            equipment.push("Escudo");
            equipment.push("Espada larga");
            document.getElementById("form79_1").value = "Espada larga"; // 1st weapon 1st section
            stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
            stat_checker_3(strengthModifier, "form76_1", "1d8", "S"); // 1st weapon 3rd section
          } else if (random > 0.25) {
            equipment.push("Escudo");
            equipment.push("Mangual");
            document.getElementById("form79_1").value = "Mangual"; // 1st weapon 1st section
            stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
            stat_checker_3(strengthModifier, "form76_1", "1d8", "B"); // 1st weapon 3rd section
          } else {
            equipment.push("Escudo");
            equipment.push("Estrella del alba");
            document.getElementById("form79_1").value = "Estrella del alba"; // 1st weapon 1st section
            stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
            stat_checker_3(strengthModifier, "form76_1", "1d8", "P"); // 1st weapon 3rd section
          }
        }
      } else {
        equipment.push("Armadura de cuero");
        equipment.push("Arco largo w/ 20 flechas");
        if (random > 0.5) {
          document.getElementById("form78_1").value = "Arco largo"; // 2nd weapon 1st section
          stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
          stat_checker_3(dexterityModifier, "form74_1", "1d8", "P"); // 2nd weapon 3rd section
            features.push(
            "Estilo de Combate: Lucha con dos armas, puedes añadir tu modificador de habilidad al daño del segundo ataque."
            );
            spellcastingSection.push(
            "Lucha con dos armas: +" +
              dexterityModifier +
              " a los ataques con la mano secundaria."
            );
          equipment.push("2 Cimitarras");
          document.getElementById("form79_1").value = "Cimitarra (I/D)"; // 1st weapon 1st section
          stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(dexterityModifier, "form76_1", "1d6", "P"); // 1st weapon 3rd section
            equipment.push("Ballesta ligera con 20 virotes");
          document.getElementById("form77_1").value = "Ballesta ligera"; // 1st weapon 1st section
          stat_checker(dexterityModifier + 2, "form66_1"); // 1st weapon 2nd section
          stat_checker_3(dexterityModifier, "form75_1", "1d8", "P"); // 1st weapon 3rd section
          equipment.push("Paquete de explorador");
        } else {
            features.push(
            "Estilo de Combate: Tiro con arco, obtienes un bono de +2 a las tiradas de ataque que hagas con armas a distancia."
            );
            spellcastingSection.push("Tiro con arco: +2 bono de ataque a distancia");
          spellcastingSection.push(" ");
            spellcastingSection.push(
            "Espada corta  " +
              stat_checker_no_id(dexterityModifier + 2) +
              "  1d8" +
              stat_checker_no_id(dexterityModifier) +
              " P"
            );
            equipment.push("Ballesta de mano");
          document.getElementById("form79_1").value = "Ballesta de mano"; // 1st weapon 1st section
          stat_checker(dexterityModifier + 4, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(dexterityModifier, "form76_1", "1d6", "P"); // 1st weapon 3rd section
          equipment.push("Ballesta ligera con 20 virotes");
          document.getElementById("form77_1").value = "Ballesta ligera"; // 3rd weapon 1st section
          stat_checker(dexterityModifier + 4, "form66_1"); // 3rd weapon 2nd section
          stat_checker_3(dexterityModifier, "form75_1", "1d8", "P"); // 3rd weapon 3rd section
          equipment.push("Espada corta");
          equipment.push("Paquete de explorador");
          document.getElementById("form78_1").value = "Arco largo"; // 2nd weapon 1st section
          stat_checker(dexterityModifier + 4, "form65_1"); // 2nd weapon 2nd section
          stat_checker_3(dexterityModifier, "form74_1", "1d8", "P"); // 2nd weapon 3rd section
        }
      }
    } else if (classAndLevel === "Monk 1") {
      features.push(
        "Defensa sin armadura: Mientras no lleves armadura ni escudos, tu clase de armadura es igual a 10 + tu modificador de destreza + tu modificador de sabiduría."
      );
      features.push(
        "Artes Marciales: Obtienes los siguientes beneficios cuando estás desarmado o empuñando solo armas de monje y no llevas armadura ni escudo:\rPuedes usar DEX en lugar de STR para las tiradas de ataque y daño de tus golpes desarmados o armas de monje.\rPuedes tirar un d4 en lugar del daño normal de tu golpe desarmado o arma de monje.\rSiempre que uses la acción de Ataque con un golpe desarmado o arma de monje, puedes usar tu acción adicional para hacer un golpe desarmado también."
      );
      spellcastingSection.push(
        "Artes Marciales: Cuando atacas con las armas mencionadas, puedes usar tu acción adicional para hacer un golpe desarmado."
      );
      musicalinstrument = random_musical_instrument();
      tool_adder_2(tool_adder(musicalinstrument));
      randomAritsanTool = random_artisan_tool();
      tool_adder_2(tool_adder(randomAritsanTool));
      document.getElementById("form78_1").value = "Desarmado"; // 2da arma 1ra sección
      stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
      stat_checker_3(dexterityModifier, "form74_1", "1d4", "B"); // 2nd weapon 3rd section
      if (random2 > 0.5) {
        equipment.push("Paquete de explorador");
      } else {
        equipment.push("Paquete de explorador");
      }
      equipment.push("Ten dardos");
      document.getElementById("form77_1").value = "dardo"; // 3rd weapon 1st section
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
        equipment.push("Bastón");
        document.getElementById("form79_1").value = "Bastón"; // 1st weapon 1st section
        stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(dexterityModifier, "form76_1", "1d6", "B"); // 1st weapon 3rd section
      }
    } else if (classAndLevel === "Paladin 1") {
      equipment.push("Cota de mallas");
      features.push(
        "Sentido Divino (" +
          (charismaModifier + 1) +
          "/lr: Como acción, hasta el final de tu próximo turno, conoces la ubicación de cualquier celestial, demonio o no-muerto dentro de 60 pies de ti que no esté detrás de una cobertura total. Conoces el tipo de cualquier ser cuya presencia sientas, pero no su identidad. Dentro del mismo radio, también detectas la presencia de cualquier lugar u objeto que haya sido consagrado o profanado."
      );
      features.push(
        "Imposición de Manos (5 hp/lr): Puedes restaurar un número total de puntos de golpe igual a tu nivel de paladín x 5. Como acción, puedes usar tu reserva para curar a un objetivo. Alternativamente, puedes gastar 5 puntos de golpe de tu reserva para curar al objetivo de una enfermedad o neutralizar un veneno que lo afecte. No tiene efecto en no-muertos y constructos."
      );
      spellcastingSection.push(
        "Imposición de Manos (5 hp/lr): Como acción, puedes curar a otra criatura o curarla de una enfermedad o veneno."
      );
      if (alignment[0] === "Lawful" && alignment[1] === "Good") {
        equipment.push("Brazalete de plata - Símbolo");
        alliesAndOrganizations.push(
          "Pholtus - Dios de la luz y la ley, protegeré a los buenos y llevaré luz a tiempos oscuros como los presentes. Este es mi momento, esta es su voluntad."
        );
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Neutral" && alignment[1] === "Good") {
        equipment.push("Tatuaje de sol en la palma derecha - Símbolo");
        alliesAndOrganizations.push(
          "Pelor, Dios del sol y la curación, el sol ha estado golpeando mi espalda toda mi vida, y apenas he comenzado a apreciar las maravillas que me ha presentado."
        );
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Chaotic" && alignment[1] === "Good") {
        equipment.push("Anillo de estrella triangular - Símbolo");
        alliesAndOrganizations.push(
          "Lliira - Diosa de la alegría, no dejaré que nadie quite la felicidad de los demás, ni siquiera por un segundo si puedo evitarlo."
        );
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Lawful" && alignment[1] === "Neutral") {
        equipment.push("Guantelete parcialmente quemado - Símbolo");
        alliesAndOrganizations.push(
          "Helm, Dios de la protección, elevaré a los justos y castigaré a los hipócritas y malvados."
        );
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Neutral" && alignment[1] === "Neutral") {
        equipment.push("Collar de vidrio de fuego - Símbolo");
        alliesAndOrganizations.push(
          "Sirrion, Dios del fuego y el cambio, él me guiará a través del mundo y el caos que lo rodea."
        );
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Chaotic" && alignment[1] === "Neutral") {
        equipment.push("Huesos de los dedos del padre - Símbolo");
        alliesAndOrganizations.push(
          "El Viajero - deidad del caos y el cambio, siento que las cosas solo mejoran con el cambio, y soy un catalizador."
        );
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Lawful" && alignment[1] === "Evil") {
        equipment.push("Guante negro - Símbolo");
        alliesAndOrganizations.push(
          "Maldición - Dios de la Tiranía, mi único y verdadero maestro."
        );
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Neutral" && alignment[1] === "Evil") {
        equipment.push("Piedra de dragonshard (en forma de colmillo) - Símbolo");
        alliesAndOrganizations.push(
          "El Guardián, Dios de la codicia y la muerte, ganaré todo en este mundo, devoraré este planeta."
        );
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Chaotic" && alignment[1] === "Evil") {
        equipment.push("Calavera de un hombre malvado - Símbolo");
        alliesAndOrganizations.push(
          "Iuz - Dios del dolor y la opresión, adoraré a este hombre como un vehículo para el dolor y sufrimiento que mi esposa sufrió a manos de esos hombres."
        );
        alliesAndOrganizations.push(" ");
      }
      if (strength > charisma && strength > constitution) {
        equipment.push("Paquete de explorador");
        equipment.push("Espada grande");
        document.getElementById("form79_1").value = "Espada grande"; // 1st weapon 1st section
        stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(strengthModifier, "form76_1", "2d6", "S"); // 1st weapon 3rd section

        equipment.push("Maza");
        document.getElementById("form77_1").value = "Maza"; // 3rd weapon 1st section
        stat_checker(strengthModifier + 2, "form66_1"); // 3rd weapon 2nd section
        stat_checker_3(strengthModifier, "form75_1", "2d6", "B"); // 3rd weapon 3rd section

        equipment.push("Cinco jabalinas");
        document.getElementById("form78_1").value = "Jabalina"; // 2da arma 1ra sección
        stat_checker(strengthModifier + 2, "form65_1"); // 2nd weapon 2nd section
        stat_checker_3(strengthModifier, "form74_1", "1d6", "P"); // 2nd weapon 3rd section
      } else {
        equipment.push("Priest's pack");
        if (random > 0.75) {
          equipment.push("Escudo");
          equipment.push("Martillo de guerra");
          document.getElementById("form79_1").value = "Martillo de guerra"; // 1st weapon 1st section
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d8", "B"); // 1st weapon 3rd section
        } else if (random > 0.5) {
          equipment.push("Escudo");
          equipment.push("Espada larga");
          document.getElementById("form79_1").value = "Espada larga"; // 1st weapon 1st section
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d8", "S"); // 1st weapon 3rd section
        } else if (random > 0.25) {
          equipment.push("Escudo");
          equipment.push("Mangual");
          document.getElementById("form79_1").value = "Mangual"; // 1st weapon 1st section
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d8", "B"); // 1st weapon 3rd section
        } else {
          equipment.push("Escudo");
          equipment.push("Estrella del alba");
          document.getElementById("form79_1").value = "Estrella del alba"; // 1st weapon 1st section
          stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
          stat_checker_3(strengthModifier, "form76_1", "1d8", "P"); // 1st weapon 3rd section
        }

        if (random > 0.5) {
            equipment.push("Cinco Jabalinas");
          document.getElementById("form78_1").value = "Jabalina"; // 2nd weapon 1st section
          stat_checker(strengthModifier + 2, "form65_1"); // 2nd weapon 2nd section
          stat_checker_3(strengthModifier, "form74_1", "1d6", "P"); // 2nd weapon 3rd section
        } else if (random > 0.25) {
          equipment.push("Gran garrote");
            document.getElementById("form78_1").value = "Gran garrote"; // 2da arma 1ra sección
          stat_checker(strengthModifier + 2, "form65_1"); // 2nd weapon 2nd section
          stat_checker_3(strengthModifier, "form74_1", "1d8", "B"); // 2nd weapon 3rd section
        } else {
          equipment.push("Lanza");
          document.getElementById("form78_1").value = "Lanza"; // 2nd weapon 1st section
          stat_checker(strengthModifier + 2, "form65_1"); // 2nd weapon 2nd section
          stat_checker_3(strengthModifier, "form74_1", "1d6", "P"); // 2nd weapon 3rd section
        }
      }
    } else if (classAndLevel === "Ranger 1") {
      equipment.push("2 Espada cortas");
      document.getElementById("form78_1").value = "Espada corta"; // 2nd weapon 1st section
      stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
      stat_checker_3(dexterityModifier, "form74_1", "1d6", "S"); // 2nd weapon 3rd section
      equipment.push("Arco largo w/ quiver of 20 flechas");
      document.getElementById("form79_1").value = "Arco largo"; // 1st weapon 1st section
      stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
      stat_checker_3(dexterityModifier, "form76_1", "1d8", "P"); // 1st weapon 3rd section
      if (random > 0.5) {
        equipment.push("Cota de escamas");
        equipment.push("Paquete de explorador");
      } else {
        equipment.push("Armadura de cuero");
        equipment.push("Paquete de explorador");
      }
      if (random2 > 0.91) {
        features.push(
          "Enemigo Favorito: Tus enemigos favoritos son los dragones, tienes ventaja en los chequeos de Supervivencia para rastrearlos, así como en los chequeos de INT para recordar información sobre ellos. También aprendes el idioma de tu enemigo favorito."
        );
        language_adder_2(language_adder("Dracónico"));
            } else if (random2 > 0.78) {
        features.push(
          "Enemigo Favorito: Tus enemigos favoritos son las bestias, tienes ventaja en los chequeos de Supervivencia para rastrearlos, así como en los chequeos de INT para recordar información sobre ellos. También aprendes el idioma de tu enemigo favorito, si tienen uno."
        );
      } else if (random2 > 0.65) {
        features.push(
          "Enemigo Favorito: Tus enemigos favoritos son los celestiales, tienes ventaja en los chequeos de Supervivencia para rastrearlos, así como en los chequeos de INT para recordar información sobre ellos. También aprendes el idioma de tu enemigo favorito."
        );
        language_adder_2(language_adder("Celestial"));
            } else if (random2 > 0.52) {
        features.push(
          "Enemigo Favorito: Tus enemigos favoritos son los demonios, tienes ventaja en los chequeos de Supervivencia para rastrearlos, así como en los chequeos de INT para recordar información sobre ellos. También aprendes el idioma de tu enemigo favorito."
        );
        language_adder_2(language_adder("Abyssal"));
            } else if (random2 > 0.39) {
        features.push(
          "Enemigo Favorito: Tus enemigos favoritos son los elementales, tienes ventaja en los chequeos de Supervivencia para rastrearlos, así como en los chequeos de INT para recordar información sobre ellos. También aprendes el idioma de tu enemigo favorito."
        );
        language_adder_2(language_adder("Primordial"));
            } else if (random2 > 0.26) {
        features.push(
          "Enemigo Favorito: Tus enemigos favoritos son los goblins y orcos, tienes ventaja en los chequeos de Supervivencia para rastrearlos, así como en los chequeos de INT para recordar información sobre ellos. También aprendes el idioma de tu enemigo favorito."
        );
        language_adder_2(language_adder("Orco"));
            } else if (random2 > 0.13) {
        features.push(
          "Enemigo Favorito: Tus enemigos favoritos son los no-muertos, tienes ventaja en los chequeos de Supervivencia para rastrearlos, así como en los chequeos de INT para recordar información sobre ellos. También aprendes el idioma de tu enemigo favorito."
        );
            } else {
        features.push(
          "Enemigo Favorito: Tus enemigos favoritos son los gigantes, tienes ventaja en los chequeos de Supervivencia para rastrearlos, así como en los chequeos de INT para recordar información sobre ellos. También aprendes el idioma de tu enemigo favorito."
        );
        language_adder_2(language_adder("Giante"));
            }

            if (random > 0.91) {
        features.push(
          "Explorador Natural: Terreno favorito es el Subterráneo, cuando haces un chequeo de INT o SAB relacionado con tu terreno favorito, tu competencia x2 si estás usando una habilidad en la que eres competente. Mientras viajas una hora o más en tu terreno favorito, obtienes beneficios: El terreno difícil no ralentiza el viaje de tu grupo. Tu grupo no puede perderse excepto por medios mágicos. Cuando te dedicas a otra actividad mientras viajas, permaneces alerta al peligro. Si estás solo, puedes moverte sigilosamente a un ritmo normal. Cuando buscas comida, encuentras el doble de alimento. Mientras rastreas otras criaturas, aprendes su número, tamaños y cuánto tiempo ha pasado."
        );
            } else if (random > 0.78) {
        features.push(
          "Explorador Natural: Terreno favorito es el Ártico, cuando haces un chequeo de INT o SAB relacionado con tu terreno favorito, tu competencia x2 si estás usando una habilidad en la que eres competente. Mientras viajas una hora o más en tu terreno favorito, obtienes beneficios: El terreno difícil no ralentiza el viaje de tu grupo. Tu grupo no puede perderse excepto por medios mágicos. Cuando te dedicas a otra actividad mientras viajas, permaneces alerta al peligro. Si estás solo, puedes moverte sigilosamente a un ritmo normal. Cuando buscas comida, encuentras el doble de alimento. Mientras rastreas otras criaturas, aprendes su número, tamaños y cuánto tiempo ha pasado."
        );
            } else if (random > 0.65) {
        features.push(
          "Explorador Natural: Terreno favorito es la Costa, cuando haces un chequeo de INT o SAB relacionado con tu terreno favorito, tu competencia x2 si estás usando una habilidad en la que eres competente. Mientras viajas una hora o más en tu terreno favorito, obtienes beneficios: El terreno difícil no ralentiza el viaje de tu grupo. Tu grupo no puede perderse excepto por medios mágicos. Cuando te dedicas a otra actividad mientras viajas, permaneces alerta al peligro. Si estás solo, puedes moverte sigilosamente a un ritmo normal. Cuando buscas comida, encuentras el doble de alimento. Mientras rastreas otras criaturas, aprendes su número, tamaños y cuánto tiempo ha pasado."
        );
            } else if (random > 0.52) {
        features.push(
          "Explorador Natural: Terreno favorito es el Desierto, cuando haces un chequeo de INT o SAB relacionado con tu terreno favorito, tu competencia x2 si estás usando una habilidad en la que eres competente. Mientras viajas una hora o más en tu terreno favorito, obtienes beneficios: El terreno difícil no ralentiza el viaje de tu grupo. Tu grupo no puede perderse excepto por medios mágicos. Cuando te dedicas a otra actividad mientras viajas, permaneces alerta al peligro. Si estás solo, puedes moverte sigilosamente a un ritmo normal. Cuando buscas comida, encuentras el doble de alimento. Mientras rastreas otras criaturas, aprendes su número, tamaños y cuánto tiempo ha pasado."
        );
            } else if (random > 0.39) {
        features.push(
          "Explorador Natural: Terreno favorito es el Bosque, cuando haces un chequeo de INT o SAB relacionado con tu terreno favorito, tu competencia x2 si estás usando una habilidad en la que eres competente. Mientras viajas una hora o más en tu terreno favorito, obtienes beneficios: El terreno difícil no ralentiza el viaje de tu grupo. Tu grupo no puede perderse excepto por medios mágicos. Cuando te dedicas a otra actividad mientras viajas, permaneces alerta al peligro. Si estás solo, puedes moverte sigilosamente a un ritmo normal. Cuando buscas comida, encuentras el doble de alimento. Mientras rastreas otras criaturas, aprendes su número, tamaños y cuánto tiempo ha pasado."
        );
            } else if (random > 0.26) {
        features.push(
          "Explorador Natural: Terreno favorito es las Praderas, cuando haces un chequeo de INT o SAB relacionado con tu terreno favorito, tu competencia x2 si estás usando una habilidad en la que eres competente. Mientras viajas una hora o más en tu terreno favorito, obtienes beneficios: El terreno difícil no ralentiza el viaje de tu grupo. Tu grupo no puede perderse excepto por medios mágicos. Cuando te dedicas a otra actividad mientras viajas, permaneces alerta al peligro. Si estás solo, puedes moverte sigilosamente a un ritmo normal. Cuando buscas comida, encuentras el doble de alimento. Mientras rastreas otras criaturas, aprendes su número, tamaños y cuánto tiempo ha pasado."
        );
            } else if (random > 0.13) {
        features.push(
          "Explorador Natural: Terreno favorito es las Montañas, cuando haces un chequeo de INT o SAB relacionado con tu terreno favorito, tu competencia x2 si estás usando una habilidad en la que eres competente. Mientras viajas una hora o más en tu terreno favorito, obtienes beneficios: El terreno difícil no ralentiza el viaje de tu grupo. Tu grupo no puede perderse excepto por medios mágicos. Cuando te dedicas a otra actividad mientras viajas, permaneces alerta al peligro. Si estás solo, puedes moverte sigilosamente a un ritmo normal. Cuando buscas comida, encuentras el doble de alimento. Mientras rastreas otras criaturas, aprendes su número, tamaños y cuánto tiempo ha pasado."
        );
            } else {
        features.push(
          "Explorador Natural: Terreno favorito es el Pantano, cuando haces un chequeo de INT o SAB relacionado con tu terreno favorito, tu competencia x2 si estás usando una habilidad en la que eres competente. Mientras viajas una hora o más en tu terreno favorito, obtienes beneficios: El terreno difícil no ralentiza el viaje de tu grupo. Tu grupo no puede perderse excepto por medios mágicos. Cuando te dedicas a otra actividad mientras viajas, permaneces alerta al peligro. Si estás solo, puedes moverte sigilosamente a un ritmo normal. Cuando buscas comida, encuentras el doble de alimento. Mientras rastreas otras criaturas, aprendes su número, tamaños y cuánto tiempo ha pasado."
        );
            }
    } else if (classAndLevel === "Rogue 1") {
      tool_adder_2(tool_adder("herramientas de ladrón"));
      equipment.push("Estoque");
      document.getElementById("form79_1").value = "Estoque"; // 1st weapon 1st section
      stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
      stat_checker_3(dexterityModifier, "form76_1", "1d8", "P"); // 1st weapon 3rd section
      equipment.push("Armadura de cuero");
      equipment.push("2 Dagas");
      document.getElementById("form78_1").value = "Daga"; // 2nd weapon 1st section
      stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
      stat_checker_3(dexterityModifier, "form74_1", "1d4", "P"); // 2nd weapon 3rd section
      equipment.push("Arco corto w/ quiver of 20 flechas");
      document.getElementById("form77_1").value = "Arco corto"; // 3rd weapon 1st section
      stat_checker(dexterityModifier + 2, "form66_1"); // 3rd weapon 2nd section
      stat_checker_3(dexterityModifier, "form75_1", "1d6", "P"); // 3rd weapon 3rd section
      features.push(
        "Ataque Furtivo: Si un enemigo está flanqueado o tienes ventaja en el ataque, puedes usar tus dados de ataque furtivo (1d6) en el ataque (una vez por turno). El arma debe ser un arma de destreza o a distancia."
      );
      spellcastingSection.push(
        "Ataque Furtivo: 1d6 al primer ataque de la ronda que tenga ventaja y acierte."
      );
      language_adder_2(language_adder("Jerga de Ladrones"));
      features.push(
        "Jerga de Ladrones: Conoces el código secreto de los ladrones y pícaros en todas partes, y los signos y jerga asociados con él."
      );
      if (random > 0.5) {
        features.push(
          "Pericia: Tus dos habilidades de pericia son Sigilo y Percepción. Tu bonificación de competencia se duplica para cualquier chequeo de habilidad que uses cualquiera de esas competencias."
        );
        equipment.push("herramientas de ladrón");
        stat_checker(dexterityModifier + 4, "form32_1");
        stat_checker(wisdomModifier + 4, "form43_1");
      } else if (document.getElementById("form17_1").checked === true) {
        features.push(
          "Pericia: Tus dos habilidades de pericia son Sigilo y Engaño. Tu bonificación de competencia se duplica para cualquier chequeo de habilidad que uses cualquiera de esas competencias."
        );
        stat_checker(dexterityModifier + 4, "form32_1");
        stat_checker(charismaModifier + 4, "form36_1");
        equipment.push("herramientas de ladrón");
      } else if (document.getElementById("form14_1").checked === true) {
        features.push(
          "Pericia: Tus dos habilidades de pericia son Sigilo e Investigación. Tu bonificación de competencia se duplica para cualquier chequeo de habilidad que uses cualquiera de esas competencias."
        );
        stat_checker(dexterityModifier + 4, "form32_1");
        stat_checker(intelligenceModifier + 4, "form31_1");
        equipment.push("herramientas de ladrón");
      } else {
        features.push(
          "Pericia: Tus dos habilidades de pericia son Sigilo y herramientas de ladrón. Tu bonificación de competencia se duplica para cualquier chequeo de habilidad que uses cualquiera de esas competencias."
        );
        stat_checker(dexterityModifier + 4, "form32_1");
        equipment.push("herramientas de ladrón (+4)");
      } /* Levi N. Blodgett */
    } else if (classAndLevel === "Sorcerer 1") {
      equipment.push("2 Dagas");
      document.getElementById("form79_1").value = "Daga"; // 1st weapon 1st section
      stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
      stat_checker_3(dexterityModifier, "form76_1", "1d4", "P"); // 1st weapon 3rd section
      equipment.push("Ballesta ligera con 20 virotes");
      document.getElementById("form78_1").value = "Ballesta ligera"; // 2nd weapon 1st section
      stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
      stat_checker_3(dexterityModifier, "form74_1", "1d8", "P"); // 2nd weapon 3rd section
      equipment.push("Bolsa de componentes");
      if (random > 0.5) {
        equipment.push("Paquete de explorador");
        if (random2 > 0.9) {
            features.push(
            "Ancestro Dracónico: Negro, y conoces el idioma 'Dracónico', también obtienes el doble de tu bonificación de competencia al hacer una prueba de CAR interactuando con dragones."
            );
            features.push(
            "Resiliencia Dracónica: En el nivel 1, tu máximo de puntos de golpe aumenta en 1 y aumenta en 1 nuevamente cada vez que subes de nivel en esta clase. Además, cuando no llevas armadura, tu CA es igual a 13 + tu modificador de destreza."
            );
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > 0.8) {
            features.push(
            "Ancestro Dracónico: Azul, y conoces el idioma 'Dracónico', también obtienes el doble de tu bonificación de competencia al hacer una prueba de CAR interactuando con dragones."
            );
            features.push(
            "Resiliencia Dracónica: En el nivel 1, tu máximo de puntos de golpe aumenta en 1 y aumenta en 1 nuevamente cada vez que subes de nivel en esta clase. Además, cuando no llevas armadura, tu CA es igual a 13 + tu modificador de destreza."
            );
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > 0.7) {
            features.push(
            "Ancestro Dracónico: Latón, y conoces el idioma 'Dracónico', también obtienes el doble de tu bonificación de competencia al hacer una prueba de CAR interactuando con dragones."
            );
            features.push(
            "Resiliencia Dracónica: En el nivel 1, tu máximo de puntos de golpe aumenta en 1 y aumenta en 1 nuevamente cada vez que subes de nivel en esta clase. Además, cuando no llevas armadura, tu CA es igual a 13 + tu modificador de destreza."
            );
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > 0.6) {
            features.push(
            "Ancestro Dracónico: Bronce, y conoces el idioma 'Dracónico', también obtienes el doble de tu bonificación de competencia al hacer una prueba de CAR interactuando con dragones."
            );
            features.push(
            "Resiliencia Dracónica: En el nivel 1, tu máximo de puntos de golpe aumenta en 1 y aumenta en 1 nuevamente cada vez que subes de nivel en esta clase. Además, cuando no llevas armadura, tu CA es igual a 13 + tu modificador de destreza."
            );
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > 0.5) {
            features.push(
            "Ancestro Dracónico: Cobre, y conoces el idioma 'Dracónico', también obtienes el doble de tu bonificación de competencia al hacer una prueba de CAR interactuando con dragones."
            );
            features.push(
            "Resiliencia Dracónica: En el nivel 1, tu máximo de puntos de golpe aumenta en 1 y aumenta en 1 nuevamente cada vez que subes de nivel en esta clase. Además, cuando no llevas armadura, tu CA es igual a 13 + tu modificador de destreza."
            );
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > 0.4) {
            features.push(
            "Ancestro Dracónico: Oro, y conoces el idioma 'Dracónico', también obtienes el doble de tu bonificación de competencia al hacer una prueba de CAR interactuando con dragones."
            );
            features.push(
            "Resiliencia Dracónica: En el nivel 1, tu máximo de puntos de golpe aumenta en 1 y aumenta en 1 nuevamente cada vez que subes de nivel en esta clase. Además, cuando no llevas armadura, tu CA es igual a 13 + tu modificador de destreza."
            );
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > 0.3) {
            features.push(
            "Ancestro Dracónico: Verde, y conoces el idioma 'Dracónico', también obtienes el doble de tu bonificación de competencia al hacer una prueba de CAR interactuando con dragones."
            );
            features.push(
            "Resiliencia Dracónica: En el nivel 1, tu máximo de puntos de golpe aumenta en 1 y aumenta en 1 nuevamente cada vez que subes de nivel en esta clase. Además, cuando no llevas armadura, tu CA es igual a 13 + tu modificador de destreza."
            );
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > 0.2) {
            features.push(
            "Ancestro Dracónico: Rojo, y conoces el idioma 'Dracónico', también obtienes el doble de tu bonificación de competencia al hacer una prueba de CAR interactuando con dragones."
            );
            features.push(
            "Resiliencia Dracónica: En el nivel 1, tu máximo de puntos de golpe aumenta en 1 y aumenta en 1 nuevamente cada vez que subes de nivel en esta clase. Además, cuando no llevas armadura, tu CA es igual a 13 + tu modificador de destreza."
            );
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > 0.1) {
            features.push(
            "Ancestro Dracónico: Plata, y conoces el idioma 'Dracónico', también obtienes el doble de tu bonificación de competencia al hacer una prueba de CAR interactuando con dragones."
            );
            features.push(
            "Resiliencia Dracónica: En el nivel 1, tu máximo de puntos de golpe aumenta en 1 y aumenta en 1 nuevamente cada vez que subes de nivel en esta clase. Además, cuando no llevas armadura, tu CA es igual a 13 + tu modificador de destreza."
            );
            armorClass += 13 + dexterityModifier; // armor class
            hp++;
          } else if (random2 > 0.0) {
            features.push(
            "Ancestro Dracónico: Blanco, y conoces el idioma 'Dracónico', también obtienes el doble de tu bonificación de competencia al hacer una prueba de CAR interactuando con dragones."
            );
            features.push(
            "Resiliencia Dracónica: En el nivel 1, tu máximo de puntos de golpe aumenta en 1 y aumenta en 1 nuevamente cada vez que subes de nivel en esta clase. Además, cuando no llevas armadura, tu CA es igual a 13 + tu modificador de destreza."
            );
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        }
      } else {
        equipment.push("Paquete de explorador");
        features.push(
          "Oleada de Magia Salvaje: Inmediatamente después de lanzar un conjuro de hechicero de nivel 1 o superior, el DM puede hacer que tires un d20. Si sacas un 1, tira en la tabla de Oleada de Magia Salvaje para crear un efecto mágico aleatorio."
        );
        features.push(
          "Mareas del Caos (1/lr): Puedes ganar ventaja en una tirada de ataque, chequeo de habilidad o tirada de salvación. Cada vez que recuperes esta característica, el DM puede hacer que tires en la tabla de Oleada de Magia Salvaje inmediatamente después de lanzar un conjuro de hechicero de nivel 1 o superior. Luego recuperas el uso de esta característica."
        );
        armorClass += 10 + dexterityModifier;
      }
    } else if (classAndLevel === "Warlock 1") {
      equipment.push("2 Dagas");
      equipment.push("Bolsa de componentes");
      equipment.push("Armadura de cuero");
      if (strength > dexterity) {
        document.getElementById("form77_1").value = "Daga"; // 3rd weapon 1st section
        stat_checker(strengthModifier + 2, "form66_1"); // 3rd weapon 2nd section
        stat_checker_3(strengthModifier, "form75_1", "1d4", "P"); // 3rd weapon 3rd section
        equipment.push("Hacha de mano");
        document.getElementById("form78_1").value = "Hacha de mano"; // 2nd weapon 1st section
        stat_checker(strengthModifier + 2, "form65_1"); // 2nd weapon 2nd section
        stat_checker_3(strengthModifier, "form74_1", "1d6", "S"); // 2nd weapon 3rd section
        equipment.push("Maza");
        document.getElementById("form79_1").value = "Maza"; // 1st weapon 1st section
        stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(strengthModifier, "form76_1", "1d6", "B"); // 1st weapon 3rd section
        equipment.push("Paquete de erudito");
      } else {
        equipment.push("Bastón");
        document.getElementById("form79_1").value = "Bastón"; // 1st weapon 1st section
        stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(strengthModifier, "form76_1", "1d6", "B"); // 1st weapon 3rd section
        equipment.push("Paquete de explorador");
        document.getElementById("form77_1").value = "Daga"; // 3rd weapon 1st section
        stat_checker(dexterityModifier + 2, "form66_1"); // 3rd weapon 2nd section
        stat_checker_3(dexterityModifier, "form75_1", "1d4", "P"); // 3rd weapon 3rd section
        equipment.push("Ballesta ligera con 20 virotes");
        document.getElementById("form78_1").value = "Ballesta ligera"; // 2nd weapon 1st section
        stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
        stat_checker_3(dexterityModifier, "form74_1", "1d8", "P"); // 2nd weapon 3rd section
      }
      if (random2 > 0.666) {
        features.push("Patrón de otro mundo: Archifey.");
        document.getElementById("form193_3").value = "Fuego Feérico";
        document.getElementById("form159_3").value = "Sueño";
        features.push(
          "Presencia Feérica (1/r): Como acción, puedes hacer que cada criatura en un cubo de 10 pies que se origine desde ti haga una tirada de salvación de Sabiduría contra tu DC de salvación de hechizo de brujo. Si un objetivo falla la tirada de salvación, queda encantado o asustado por ti (a tu elección) hasta el final de tu próximo turno."
        );
      } else if (random2 > 0.333) {
        features.push("Patrón de otro mundo: Demonio.");
        document.getElementById("form193_3").value = "Manos Ardientes";
        document.getElementById("form159_3").value = "Mandato";
        features.push(
          "Bendición del Oscuro: Cuando reduces a una criatura hostil a 0 puntos de golpe, obtienes puntos de golpe temporales iguales a tu modificador de CAR + tu nivel de brujo."
        );
      } else {
        features.push("Patrón de otro mundo: Gran Anciano.");
        document.getElementById("form193_3").value = "Susurros disonantes";
        document.getElementById("form159_3").value = "Risa Horrenda de Tasha";
        features.push(
          "Mente Despierta: Puedes comuniCarroe telepáticamente con cualquier criatura que puedas ver dentro de 30 pies de ti. No necesitas compartir un idioma con la criatura para que entienda tus expresiones telepáticas, pero la criatura debe ser capaz de entender al menos un idioma."
        );
      }
    } else if (classAndLevel === "Wizard 1") {
      armorClass += 10 + dexterityModifier;
      features.push(
        "Recuperación Arcana (1/d): Cuando terminas un descanso corto una vez al día, puedes elegir ranuras de hechizos gastadas para recuperar. Las ranuras de hechizos pueden tener un nivel combinado que sea igual o menor a la mitad de tu nivel de mago (redondeado hacia arriba), y ninguna de las ranuras puede ser de nivel 6 o superior."
      );
      if (random > 0.5) {
        equipment.push("Paquete de erudito");
        equipment.push("Bastón");
        document.getElementById("form79_1").value = "Bastón"; // 1st weapon 1st section
        stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(strengthModifier, "form76_1", "1d6", "B"); // 1st weapon 3rd section
      } else {
        equipment.push("Paquete de explorador");
        equipment.push("Daga");
        document.getElementById("form79_1").value = "Daga"; // 1st weapon 1st section
        stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(dexterityModifier, "form76_1", "1d4", "P"); // 1st weapon 3rd section
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

  // Block that adds weapon proficiencies by class
  if (classAndLevel === "Barbarian 1") {
    weapon_adder_2(weapon_adder("armas simples"));
    weapon_adder_2(weapon_adder("armas marciales"));
    armor_adder_2(armor_adder("armadura ligera"));
    armor_adder_2(armor_adder("armadura media"));
    armor_adder_2(armor_adder("Escudo"));
    armorClass += 10 + dexterityModifier + constitutionModifier; // armor class
    equipment.push("4 Jabalinas");
    equipment.push("Paquete de explorador");
    random_by_length(barbarianBonds, bonds, "form101_1");
  } else if (classAndLevel === "Fighter 1") {
    weapon_adder_2(weapon_adder("armas simples"));
    weapon_adder_2(weapon_adder("armas marciales"));
    armor_adder_2(armor_adder("armadura ligera"));
    armor_adder_2(armor_adder("armadura media"));
    armor_adder_2(armor_adder("armadura pesada"));
    armor_adder_2(armor_adder("Escudo"));
    random_by_length(fighterBonds, bonds, "form101_1");
  } else if (classAndLevel === "Bard 1") {
    weapon_adder_2(weapon_adder("armas simples"));
    armor_adder_2(armor_adder("armadura ligera"));
    weapon_adder_2(weapon_adder("Ballesta de mano"));
    weapon_adder_2(weapon_adder("Espada larga"));
    weapon_adder_2(weapon_adder("Estoque"));
    weapon_adder_2(weapon_adder("Espada corta"));
    random_by_length(bardBonds, bonds, "form101_1");
  } else if (classAndLevel === "Cleric 1") {
    weapon_adder_2(weapon_adder("armas simples"));
    armor_adder_2(armor_adder("armadura ligera"));
    armor_adder_2(armor_adder("armadura media"));
    armor_adder_2(armor_adder("Escudo"));
    random_by_length(clericBonds, bonds, "form101_1");
  } else if (classAndLevel === "Sorcerer 1") {
    weapon_adder_2(weapon_adder("Daga"));
    weapon_adder_2(weapon_adder("dardo"));
    weapon_adder_2(weapon_adder("Bastón"));
    weapon_adder_2(weapon_adder("honda"));
    weapon_adder_2(weapon_adder("ballesta ligera"));
    random_by_length(sorcererBonds, bonds, "form101_1");
  } else if (classAndLevel === "Wizard 1") {
    weapon_adder_2(weapon_adder("Daga"));
    weapon_adder_2(weapon_adder("dardo"));
    weapon_adder_2(weapon_adder("Bastón"));
    weapon_adder_2(weapon_adder("honda"));
    weapon_adder_2(weapon_adder("ballesta ligera"));
    random_by_length(wizardBonds, bonds, "form101_1");
  } else if (classAndLevel === "Druid 1") {
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
  } else if (classAndLevel === "Rogue 1") {
    weapon_adder_2(weapon_adder("armas simples"));
    armor_adder_2(armor_adder("armadura ligera"));
    weapon_adder_2(weapon_adder("Ballesta de mano"));
    weapon_adder_2(weapon_adder("Espada larga"));
    weapon_adder_2(weapon_adder("Estoque"));
    weapon_adder_2(weapon_adder("Espada corta"));
    random_by_length(rogueBonds, bonds, "form101_1");
  } else if (classAndLevel === "Warlock 1") {
    weapon_adder_2(weapon_adder("armas simples"));
    armor_adder_2(armor_adder("armadura ligera"));
    random_by_length(warlockBonds, bonds, "form101_1");
  } else if (classAndLevel === "Ranger 1") {
    weapon_adder_2(weapon_adder("armas simples"));
    weapon_adder_2(weapon_adder("armas marciales"));
    armor_adder_2(armor_adder("armadura ligera"));
    armor_adder_2(armor_adder("armadura media"));
    armor_adder_2(armor_adder("Escudo"));
    random_by_length(rangerBonds, bonds, "form101_1");
  } else if (classAndLevel === "Paladin 1") {
    weapon_adder_2(weapon_adder("armas simples"));
    weapon_adder_2(weapon_adder("armas marciales"));
    armor_adder_2(armor_adder("armadura ligera"));
    armor_adder_2(armor_adder("armadura media"));
    armor_adder_2(armor_adder("armadura pesada"));
    armor_adder_2(armor_adder("Escudo"));
    random_by_length(paladinBonds, bonds, "form101_1");
  } else if (classAndLevel === "Monk 1") {
    armorClass += 10 + dexterityModifier + wisdomModifier; // armor class
    weapon_adder_2(weapon_adder("armas simples"));
    weapon_adder_2(weapon_adder("Espada corta"));
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
    weapon_adder_2(weapon_adder("hacha de batalla"));
    weapon_adder_2(weapon_adder("hacha de batalla"));
    weapon_adder_2(weapon_adder("Hacha de mano"));
    weapon_adder_2(weapon_adder("martillo ligero"));
    weapon_adder_2(weapon_adder("Martillo de guerra"));
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
    weapon_adder_2(weapon_adder("hacha de batalla"));
    weapon_adder_2(weapon_adder("hacha de batalla"));
    weapon_adder_2(weapon_adder("Hacha de mano"));
    weapon_adder_2(weapon_adder("hacha de batalla"));
    weapon_adder_2(weapon_adder("Martillo de guerra"));
    armor_adder_2(armor_adder("armadura ligera"));
    armor_adder_2(armor_adder("armadura media"));
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
    weapon_adder_2(weapon_adder("Espada corta"));
    weapon_adder_2(weapon_adder("Arco corto"));
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
    weapon_adder_2(weapon_adder("Espada corta"));
    weapon_adder_2(weapon_adder("Ballesta de mano"));
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
      return "Baraja de Carroas marcadas";
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
      return "Carroas para jugar";
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
      return "Carroa de amor de un admirador";
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

  // Function to determine a random gaming set for soldier background
  function random_gaming_set_soldier() {
    random = Math.floor(Math.random() * 2);
    if (random === 0) {
      return "Dados";
    } else if (random === 1) {
      return "Juego de Carroas";
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
      return "Trozo de estandardoe de un enemigo caído";
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
      if (weapon_adder("honda") !== undefined) {
        weapon_adder_2(weapon_adder("honda"));
        equipment.push("honda");
      } else {
        return "honda already added";
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
    } else if (variable === "honda already added") {
      equipment.push("honda");
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
  } else if (newBackground1 === "Charlatan") {
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
  } else if (newBackground1 === "Criminal") {
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
  } else if (newBackground1 === "Entertainer") {
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
  } else if (newBackground1 === "Folk Hero") {
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
  } else if (newBackground1 === "Gladiator") {
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
  } else if (newBackground1 === "Hermit") {
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
  } else if (newBackground1 === "Noble") {
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
  } else if (newBackground1 === "Outlander") {
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
  } else if (newBackground1 === "Pirate") {
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
  } else if (newBackground1 === "Sailor") {
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
  } else if (newBackground1 === "Soldier") {
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
  } else if (newBackground1 === "Spy") {
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
  } else if (newBackground1 === "Urchin") {
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

  // Block to give a Half-Elf 2 random skills based on the most useful
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

  // Determines spells based on class and stats
  if (classAndLevel === "Bard 1") {
    document.getElementById("form214_3").value = className; // spellcasting class
    document.getElementById("form196_3").value = "CHA"; // spellcasting ability
    document.getElementById("form194_3").value = 10 + charismaModifier; // spell save dc
    stat_checker(charismaModifier + 2, "form195_3"); // spell attack bonus
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
  } else if (classAndLevel === "Sorcerer 1") {
    document.getElementById("form214_3").value = className; // spellcasting class
    document.getElementById("form196_3").value = "CHA"; // spellcasting ability
    document.getElementById("form194_3").value = 10 + charismaModifier; // spell save dc
    stat_checker(charismaModifier + 2, "form195_3"); // spell attack bonus
    document.getElementById("form97_3").value = 2;
    document.getElementById("form213_3").value = "Prestidigitación";
    document.getElementById("form204_3").value = "Amistades";
    document.getElementById("form203_3").value = "Mensaje";
    document.getElementById("form202_3").value = "Rayo de Fuego";
    document.getElementById("form193_3").value = "Encantar Persona";
    document.getElementById("form159_3").value = "Manos Ardientes";
  } else if (classAndLevel === "Warlock 1") {
    document.getElementById("form214_3").value = className; // spellcasting class
    document.getElementById("form196_3").value = "CHA"; // spellcasting ability
    document.getElementById("form194_3").value = 10 + charismaModifier; // spell save dc
    stat_checker(charismaModifier + 2, "form195_3"); // spell attack bonus
    document.getElementById("form213_3").value = "Rayo Sobrenatural";
    document.getElementById("form204_3").value = "Rociada Venenosa";
    document.getElementById("form137_3").value = "Maldición";
    document.getElementById("form136_3").value = "Rayo de Bruja";
    document.getElementById("form97_3").value = 1;
  } else if (classAndLevel === "Wizard 1") {
    document.getElementById("form214_3").value = className; // spellcasting class
    document.getElementById("form196_3").value = "INT"; // spellcasting ability
    document.getElementById("form194_3").value = 10 + intelligenceModifier; // spell save dc
    stat_checker(intelligenceModifier + 2, "form195_3"); // spell attack bonus
    document.getElementById("form213_3").value = "Prestidigitación";
    if (document.getElementById("form198_3") === "Ilusión Menor") {
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
      document.getElementById("fogrm137_3").value = "Enredar";
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
  "Elf": "Elfo",
  "Dwarf": "Enano",
  "Halfling": "Mediano",
  "Gnome": "Gnomo",
  "Dragonborn": "Dracónido",
  "Half-Elf": "Semielfo",
  "Half-Orc": "Semiorco",
  "Tiefling": "Tiefling",
  "Aasimar": "Aasimar",
  "Genasi": "Genasi",
  "Goliath": "Goliat",
  "Tabaxi": "Tabaxi",
  "Firbolg": "Firbolg",
  "Triton": "Tritón",
  "Kenku": "Kenku",
  "Goblin": "Goblin",
  "Hobgoblin": "Hobgoblin",
  "Bugbear": "Hombre Oso",
  "Kobold": "Kobold",
  "Yuan-ti Pureblood": "Yuan-ti Sangrepura",
  
  // Variantes específicas:
  "Human (Calishite)": "Humano (Calishita)",
  "Human (Chondathan)": "Humano (Chondatano)",
  "Human (Damaran)": "Humano (Damarano)",
  "Human (Illuskan)": "Humano (Illuskano)",
  "Human (Mulan)": "Humano (Mulano)",
  "Human (Rashemi)": "Humano (Rashemiano)",
  "Human (Shou)": "Humano (Shou)",
  "Human (Tethyrian)": "Humano (Tethyriano)",
  "Human (Turami)": "Humano (Turamiano)",
  "High Elf": "Alto Elfo",
  "Wood Elf": "Elfo del Bosque",
  "Dark Elf (Drow)": "Elfo Oscuro (Drow)",
  "Hill Dwarf": "Enano de la Colina",
  "Mountain Dwarf": "Enano de la Montaña",
  "Lightfoot Halfling": "Mediano Piesligeros",
  "Stout Halfling": "Mediano Robusto",
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
  "Forest Gnome": "Gnomo del Bosque",
  "Rock Gnome": "Gnomo de la Roca",
  "Air Genasi": "Genasi del Aire",
  "Earth Genasi": "Genasi de la Tierra",
  "Fire Genasi": "Genasi del Fuego",
  "Water Genasi": "Genasi del Agua"
};

// Función para traducir razas
function translateRace(raceAndDescriptor) {
  // Dividir la raza y cualquier descriptor adicional (Ejemplo: "Elf 1")
  const [raceName, descriptor] = raceAndDescriptor.split(" ");

  // Obtener la traducción de la raza
  var translatedRace = raceTranslations[raceName];
  if(translatedRace == undefined){
    translatedRace = raceTranslations[raceAndDescriptor];
      // Si no se encuentra la traducción, devolver el valor original
    return translatedRace;
  }else{
    // Si existe la traducción, devolver la raza traducida con el descriptor
    if (translatedRace) {
      return descriptor ? `${translatedRace} ${descriptor}` : translatedRace;
    }
        // Si no se encuentra la traducción, devolver el valor original
    return raceAndDescriptor;
  }
}
// Diccionario de traducción de alineamientos
const alignmentTranslations = {
  Lawful: "Legal",
  Neutral: "Neutral",
  Chaotic: "Caótico",
  Good: "Bueno",
  Evil: "Malvado",
  True: "Verdadero"
};
// Función para traducir alineamientos
// Función para traducir alineamiento (array a string)
function translateAlignmentArray(alignmentArray) {
  const translatedArray = []; // Array para almacenar las palabras traducidas

  for (let i = 0; i < alignmentArray.length; i++) {
    const alignment = alignmentArray[i]; // Obtenemos la palabra actual
    const translatedWord = alignmentTranslations[alignment]; // Buscamos su traducción

    if (translatedWord) {
      translatedArray.push(translatedWord); // Si hay traducción, la agregamos al nuevo array
    } else {
      translatedArray.push(alignment); // Si no hay traducción, usamos la palabra original
    }
  }
  var traduccion = translatedArray.join(" ");
  return traduccion+" "; // Unimos las palabras traducidas en una cadena con espacios
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
  document.getElementById("form93_1").value =  name; // name
  document.getElementById("form90_1").value = newBackground1; // background
  document.getElementById("form96_1").value = (isManual)?document.getElementById("form96_1").value : charName; // character name
  document.getElementById("form8_2").value = (isManual)?document.getElementById("form96_1").value : charName;; // character name 2nd page
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
  document.getElementById("form105_1").value = proficienciesAndLanguages.join("\r"); // proficiencies and languages
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
}//fin de caracter generador

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
function generate_new_character(version, clearall=true) {
  if(clearall){
    clear_All();
  }

  if(version()){
    generate_character(!clearall);
  }
 
}
