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
      return array.property(prop);
    });
  },


  convertNameArrayToObject: (arr) => {
    // let nameObj = [];
    // for(var i = 0; i < arr.length; i++){
    //   let obj = {};
    //   obj.first = arr[i][0];
    //   obj.last = arr[i][1];
    //   nameObj.push(obj);
    // }
    // return nameObj;

    return arr.map(nameObj => {
      return nameObj.first[0], nameObj.last[1]
    });

  },

  objContainsProp: (arr, prop) => {
    // for (var i = 0; i < arr.length; i++){
    //   if(!arr[i].hasOwnProperty(prop)){
    //     return false;
    //   }
    // }
    // return true;
    return arr.every(i => {
      return i.property(prop);
    });
  },

  stringMatch: (arr, str) => {
  //   let matches = [];
  //   for(var i = 0; i < arr.length; i++){
  //     if (arr[i].includes(str)){
  //       matches.push(arr[i]);
  //     }
  //   }
  //   return matches;
  // },
return arr.filter(i => {
  return (i.match(str));
});
}
};
