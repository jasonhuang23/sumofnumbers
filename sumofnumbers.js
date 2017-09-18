/**
 * Solving Experience E26.
 * Created by jasonhuang on 9/17/17
 */

const testNums = [9,8,7,6,5,4,3,2,1];

function sumFor(list) {
  let sum = 0;
  for(let i = 0; i <= list.length; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumFor(testNums));

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while(i < list.length) {
    i++;
    sum += i;
  }
  return sum;
}

console.log(sumWhile(testNums));

function sumRecursion(list) {
  if(list.length === 0) {
    return 0;
  }
  else {
    return list[0] + sumRecursion(list.slice(1, list.length));
  }
}

console.log(sumRecursion(testNums));


function sumTheSimpleWay(list) {
  let sum = _.reduce(list, function(memo, num){ return memo + num; }, 0);
  return sum;
}

console.log(sumTheSimpleWay(testNums));





