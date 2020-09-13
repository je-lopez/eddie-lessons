// re-create the built-in Array function .every
// NOTE: assumes input is accurate
function myEvery(array, callBackFunction) {
  for (let i = 0; i < array.length; i++) {
    if (!callBackFunction(array[i])) {
      return false;
    }
  }

  return true;
}

// **************************************************************************************
// **************************************************************************************
// **************************************************************************************

function isAStringCallBackFunction(string) {
  return typeof num === 'string';
};

// fake function that does anything
function myFunction(arr) {
  // normally, you would use arr.every() like so:
  //
  // arr.every(callBackFunction);
  //
  //  BUT, up until now, you've been passing in anonymous functions
  //  so the following is what you're used to:
  //
  // arr.every(function(parm1) {
  //    ... code ...
  // });
  //
  // keep in mind, that the anonymous function inside .every can be extracted and created into its own function
  // then, you pass it in, like the first example above --REMINDER: arr.every(callBackFunction);
  //
  // Since we're re-creating .every, our function MUST have two parameters because of the array we need
  //

  const itemsAreStrings = arr.every(function(arrItem) {
    return typeof arrItem !== 'string'
  });

  const itemsAreStrings2 = arr.every(isAStringCallBackFunction);

}

const allStrings = ['i', 'am', 'a', 'string'];
const oneNum = ['i', 'am', 'not', 10];

console.log(myFunction(allStrings));
console.log(myFunction(oneNum));