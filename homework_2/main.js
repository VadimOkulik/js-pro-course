//Метод Find
function find(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }}};
const result1 = find([1, 2, 3, 4], (elem) => { return elem === 2 })
console.log(result1);
//Метод Map
function map(arr, callback) {
    newArray = [];
    for (let i = 0; i < arr.length; i++) {
      newArray.push(callback(arr[i], i, arr));
    }
    return newArray;
  };
const result2 = map([1, 2, 3, 4, 5, 6, 7], (elem) => { return elem}) ;
console.log(result2);
//Метод Filter
function filter(arr, callback) {
    arrayFilter = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        arrayFilter.push(arr[i]);
      }
    }
    return arrayFilter;
  };
const result3 = filter([1, 22, 3, 4, 15, 6, 7, 11], (elem) => { return  elem > 9}) ;
console.log(result3);
//Метод Every
function every(arr, callback) {
   for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};
const result4 = every([5,6,5,6,5,6], (num) => {return num > 5});
console.log(result4);
//Метод Some
function some(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
   if (callback(arr[i], i, arr)) {
     return true;
   }
 }
 return false;
};
const result5 = some([5,6,5,6,5,6], (num) => {return num > 5});
console.log(result5);
