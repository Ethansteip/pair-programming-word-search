/*
* wordsearch - searches a 2d array for a word horizontally and vertically.
* Returns true if the word is found, and return false if the word is not found
*
* By Ethan Steip and Sam Giorgevski - Pair Progamming - Nov 23rd, 2022
*/


/*
*
* Function wordSearch - searches a 2d array for a word horizontally and vertically.
* Returns true if the word is found, and return false if the word is not found
*
* @param {array} letters - holds a 2d array of letters
* @param {string} word - information it holds
*
*/


const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  
  const verticalJoin = [];
  
  // loop through the first set of arrays
  for (let i = 0; i < letters.length; i++) {
    // loop through each element of each array
    for (let j = 0; j < letters[i].length; j++) {
  
      if (!verticalJoin[j]) {
        verticalJoin[j] = [];
      }
      verticalJoin[j][i] = letters[i][j];
    }
  }
  
  // join letters in each f the vertical join arrays and push to new array.
  const verticalJoin2 = verticalJoin.map(arrs => arrs.join(''));
  console.log(verticalJoin2);
  
  // check for word in new vertical array.
  for (let x of verticalJoin2) {
    if (x.includes(word)) return true;
  }
  
  return false;
};
  
  
module.exports = wordSearch;