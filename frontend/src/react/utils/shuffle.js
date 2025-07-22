// https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
// Fisher-Yates Shuffle Algorithm
const shuffle = (array) => {
  // create a copy of the array to avoid mutating the original
  const arr = [...array]

  // Fisher-Yates Shuffle Algorithm
  for (let i = arr.length - 1; i > 0; i--) {
    // start from the end of the array
    // generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // swap elements
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }

  return arr
}

export default shuffle
