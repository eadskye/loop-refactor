'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  // sum: (arr, base) => {
  //   arr.reduce(sum(arr, base) => {
  //     return arr + base;
  //   }, 0);


    // for (var i = 0; i < arr.length; i++){
    //   sum += arr[i];
    // }
    // return sum;


  sum: (arr, base) => {
    return arr.reduce((arr, base)=> {
      return arr + base;
    }, base);

},

  someObjsContainProp: (arr, prop) => {
    return arr.some((array)=>{
    if(array.hasOwnProperty(prop))
    return true;
  });
  },


  convertNameArrayToObject: (arr) => {


    return arr.map(obj => {
        let nameObj= {};
       nameObj.first = obj[0];
       nameObj.last = obj[1];
       return nameObj;
    });
  },






  objContainsProp: (arr, prop) => {

    return arr.every((array)=>{
    if(array.hasOwnProperty(prop))
    return true;
    });
  },

  stringMatch: (arr, str) => {
  
return arr.filter(i => {
  return (i.match(str));
});
}
};
