function map(origArray, func){
  let newArray = [];
  for (const item of origArray){
    newArray.push(func(item))
  }
  return newArray
}

function reduce(origArray, func, startAt){ // if no startAt given no error given
  let total; // declares variable
  if (startAt) {  // checks if startAt present
    total = startAt // sets total to startAt
    for (const item of origArray){
      total = func(item, total) // add item to total and assign value to total
    }
    return total // send it back
  } else { // if no startAt
    total = origArray[0] // set to first value => setting startAt default to 0 was erroring out
    for (let i = 1; i < origArray.length; i++) { // start on 2nd item
      total = func(origArray[i], total) // add item to total and assign value to total
    }
    return total
  }
}