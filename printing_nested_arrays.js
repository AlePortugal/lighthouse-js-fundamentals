// const printItems = function(array) {
//   for (let item of array) {
//     console.log(item);
//   }
// }                            // it will print all the itens of array (and the arrays)

// const array = ["😎", ["💩", "🤗"], "😼", "😂"];
// printItems(array);

/*

const printItems = function(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      printItems(item);
    } else {
      console.log(item);
    }
  });
}


//const array = ["😎", ["💩", "🤗"], "😼", "😂"];
const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
printItems(array);
*/


//##Using Iteration Instead##

const printItems = function(array) {
  while (array.length > 0) {
    const element = array.shift();

    if (Array.isArray(element)) {
      element.reverse().forEach((newElement)=> {
        array.unshift(newElement);
      });
    } else {
      console.log(element);
    }
  }
}

const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
printItems(array);