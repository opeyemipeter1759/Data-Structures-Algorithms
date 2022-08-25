let isUnique = (arr) => {
  let result = true;

  for (let i = 0; i < arr.length; i++) {
    console.log(`outer loop--- i === ${i}`);
    for (let j = 0; j < arr.length; j++) {
        console.log( `inner loop--- i === ${ j }` );
        if (i !== j && arr[i] === arr[j] ) {
            result = false
        }
    }
  }
  return result;
};

console.log(isUnique([1, 2, 3]) === true);
console.log(isUnique([1, 2, 3]) === false);


isUnique = ( arr ) =>
{
    const breadCrumbs = {}
    let result = true

    for (let i  = 0; i  < array.length; i ++) {
       console.log(`loop i === ${i}`);
       if (breadCrumbs[arr[1]]) {
        
       } 
    }
}