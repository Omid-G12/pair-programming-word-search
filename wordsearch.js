// paired programming session
// @Omid-G12
// @rstock-co

/*const log = (variable) => {
  const key = Object.keys(variable)[0];
  const value = variable[key];
  console.log(`${key}: ${value}`);
};*/

const search = (word, rows) => {
  for (let row of rows) {
    if (row.includes(word)) {
      return true;
    }
  }
  return false;
};

const wordSearch = (letters, word) => {
  //log({word})
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const reverseJoin = letters.map((ls) => ls.reverse().join(""));
  
  //log({horizontalJoin})
  //log({reverseJoin})
  // search normal
  let normal = search(word, horizontalJoin);
  //log({normal})

  // STRETCH: search in reverse
  let reverse = search(word, reverseJoin)
  //log({reverse})

  // STRETCH: search diag down

  // STRETCH: searcg diag up
  
  return (normal || reverse) // add diganonals once implemented
};

/*const words = [
  ["A", "W", "C", "F", "Q", "U", "A", "L"],
  ["S", "E", "I", "N", "F", "E", "L", "D"],
  ["Y", "F", "C", "F", "Q", "U", "A", "L"],
  ["H", "M", "J", "T", "E", "V", "R", "G"],
  ["W", "H", "C", "S", "Y", "E", "R", "L"],
  ["B", "F", "R", "E", "N", "E", "Y", "B"],
  ["U", "B", "T", "W", "A", "P", "A", "I"],
  ["O", "D", "C", "A", "K", "U", "A", "S"],
  ["E", "Z", "K", "F", "Q", "U", "A", "L"],
];

// LOG OUTPUT

console.log('----------')
console.log("result: ",wordSearch(words, "FRANK"));
console.log('----------')
console.log("result: ",wordSearch(words, "SEINFELD"));
console.log('----------')
console.log("result: ",wordSearch(words, "DLEFNIES"));*/

module.exports = wordSearch;