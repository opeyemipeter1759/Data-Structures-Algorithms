// let isUnique = (arr) => {
//   let result = true;

//   for (let i = 0; i < arr.length; i++) {
//     console.log(`outer loop--- i === ${i}`);
//     for (let j = 0; j < arr.length; j++) {
//       console.log(`inner loop--- i === ${j}`);
//       if (i !== j && arr[i] === arr[j]) {
//         result = false;
//       }
//     }
//   }
//   return result;
// };

// console.log(isUnique([1, 2, 3]) === true);
// console.log(isUnique([1, 2, 3]) === false);

// the breadcrumb method

let isUnique= (arr) => {
  const breadCrumbs = {};
  let result = true;

  for (let i = 0; i < arr.length; i++) {
    console.log(`loop i === ${i}`);
    if (breadCrumbs[arr[i]]) {
          result = false;
          console.log(`if - ${breadCrumbs[arr[i]]}`);
    } else {
      breadCrumbs[arr[i]] = true;
      console.log( ` else - ${breadCrumbs[arr[i]]}`);
    }
  }
      return result;
};

console.log(isUnique([1, 2, 3]) === true);
// console.log(isUnique([1, 2, 3]) === false);