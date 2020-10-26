// Exercise 1 ————————————————————

let friends = [
  'Moe',
  'Larry',
  'Curly',
  'Jane',
  'Emma',
  'Elizabeth',
  'Elinor',
  'Mary',
  'Darcy',
  'Grey',
  'Lydia',
  'Harriet'
];

let answer1 = friends[friends.length - 1];

// Exercise 2 ————————————————————

let answer2 = friends.sort();

// Exercise 3 ————————————————————

let friends2 = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';

let friends2Array = friends2.split(',');
let answer3 = friends2Array.sort();

// Exercise 4 ————————————————————

let answer4 = friends.sort((a, b) => {
  return -1;
});

// Exercise 5 ————————————————————

let myFriends = [
  'Rickon',
  'Meera',
  'Hodor',
  'Jojen',
  'Osha',
  'Rickard',
  'Maester',
  'Rodrik',
  'Jory',
  'Septa',
  'Jon'
];

let yourFriends = [
  'Bilbo',
  'Boromir',
  'Elrond',
  'Faramir',
  'Frodo',
  'Gandalf',
  'Legolas',
  'Pippin'
];

let combinedArray = myFriends.concat(yourFriends);
let answer5 = combinedArray.sort();

// Exercise 6 ————————————————————

let foods = [
  'Popcorn',
  'Potato chips',
  'Shrimp',
  'Chicken rice',
  'Poutine',
  'Tacos',
  'Toast',
  'French Toast',
  'Crab',
  'Pho',
  'Lasagna',
  'Brownie',
  'Lobster',
  'Donuts',
  'Ice cream',
  'Hamburger',
  'Sushi',
  'Chocolate',
  'Pizza'
];

let answer6 = foods.indexOf('Pho') + 1;

// Exercise 7 ————————————————————

let donutsIndex = foods.indexOf('Donuts');
let answer7 = foods.splice(donutsIndex, 1);

// Exercise 8 ————————————————————

let answer8 = foods.slice((5 - 1), (10));

// Exercise 9 ————————————————————

let word = "Space";
let answer9 = word.replace('a', 'i');

// Exercise 10 ————————————————————

let ages = [83, 53, 37, 29, 60, 30, 66, 19, 59, 41, 9, 64, 19, 80, 24, 53, 70, 1, 53, 40, 92, 4, 71, 65, 8, 2, 51, 80, 94, 37, 80, 64, 19, 6, 14];

let findMedian = array => {
 if (array.length % 2 === 0) {
   let index = (array.length / 2) - 1;
   return (array[index] + array[index + 1]) / 2;
 } else {
   let index = Math.floor(array.length / 2) + 1;
   return array[index - 1];
 }
}
let answer10 = findMedian(ages);