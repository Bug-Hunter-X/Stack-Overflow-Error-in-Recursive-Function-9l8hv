```javascript
function myFunc(a, b) {
  if (b === 0) {
    return a;
  }
  return myFunc(b, a % b);
}

console.log(myFunc(10, 0)); // Returns 10
console.log(myFunc(10, 5)); // Returns 5
console.log(myFunc(21, 14)); //Returns 7
```