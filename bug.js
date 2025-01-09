```javascript
function myFunc(a, b) {
  if (a === 0) {
    return b;
  }
  return myFunc(b % a, a);
}

console.log(myFunc(0, 10)); // Throws error: Maximum call stack size exceeded
```