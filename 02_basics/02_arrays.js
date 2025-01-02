const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);// ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]

// console.log(marvel_heros[3][1]);


//CONCAT DOES NOT CHANGE ORIGINAL ARRAY, IT RETURNS NEW ARRAY.
// const allHeros = marvel_heros.concat(dc_heros) //It can only concat two arrays
// console.log(allHeros); 

const all_new_heros = [...marvel_heros, ...dc_heros] //Spread method: concat many arrays

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //flat(no. of depth) //Infinite is not advisable to use.
console.log(real_another_array);



console.log(Array.isArray("Jay")) //false, it is string
console.log(Array.from("Jay")) //['J','a','y']
console.log(Array.from({name: "Jay"})) // interesting //op = [] //emty array //Tell to make array of only keys or make array of only values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //[100,200,300]