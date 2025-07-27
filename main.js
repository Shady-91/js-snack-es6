//*Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

//Snack2
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Snack 1
const bikes = [
      { name: 'Bianchi', weight: 7.5 },
      { name: 'Cannondale', weight: 6.8 },
      { name: 'Trek', weight: 7.2 },
]

const lightestBike = bikes.reduce((lightest, bike) => {
      return bike.weight < lightest.weight ? bike : lightest;
}, bikes[0]);

console.log(`La bici più leggera è ${lightestBike.name} con un peso di ${lightestBike.weight} kg.`);

// Snack 2
const teams = [
      { name: 'Juventus', points: 0, makeThemSuffer: 0, },
      { name: 'Inter', points: 0, makeThemSuffer: 0, },
      { name: 'Milan', points: 0, makeThemSuffer: 0, },
      { name: 'Napoli', points: 0, makeThemSuffer: 0, },
]

// Funzione per generare un numero intero casuale tra min e max inclusi
function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Assegna numeri random a points e makeThemSuffer
teams.forEach(team => {
      team.points = getRandomInt(0, 100);
      team.makeThemSuffer = getRandomInt(0, 50);
});

// Crea nuovo array con solo nome e falli subiti
const teamsFouls = teams.map(team => ({
      name: team.name,
      makeThemSuffer: team.makeThemSuffer
}));

console.log(teams);
console.log(teamsFouls);



