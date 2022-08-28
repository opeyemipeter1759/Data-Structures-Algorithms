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

let isUnique = (arr) => {
  const breadCrumbs = {};
  let result = true;

  for (let i = 0; i < arr.length; i++) {
    console.log(`loop i === ${i}`);
    if (breadCrumbs[arr[i]]) {
      result = false;
      console.log(`if - ${breadCrumbs[arr[i]]}`);
    } else {
      breadCrumbs[arr[i]] = true;
      console.log(` else - ${breadCrumbs[arr[i]]}`);
    }
  }
  return result;
};

// console.log(isUnique([1, 2, 3]) === true);
// console.log(isUnique([1, 2, 3]) === false);

const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 },
];

items.sort((a, b) => a.value - b.value);

let newsArr = [1, 70, 49, 54, 5, 6];
newsArr.sort();
function compareNumbers(a, b) {
  return a - b;
}

// console.log( newsArr );
let newest = newsArr.sort((a, b) => a - b);
//    console.log(`newest -- ${newest}`);
// console.log( newsArr.sort( compareNumbers ) )

const uniqSort = function (arr) {
  const breadCrumb = {};

  return [...new Set(arr.sort((a, b) => a - b))];
};
const uniqSort2 = function (arr) {
  const breadCrumbsSort = {};
  const resultSort = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    // element 0 can never be a duplicate
    if (!breadCrumbsSort[arr[i]]) {
      resultSort.push(arr[i]);
      breadCrumbsSort[arr[i]] = true;
      console.log(breadCrumbsSort[arr[i]]);
}
  }
  return resultSort.sort((a, b) => a - b);
};

// console.log(uniqSort([4, 2, 2, 3, 2, 2, 2]));


console.log(`sort 2 ---${uniqSort2([4, 2, 2, 3, 2, 2, 2])}`);