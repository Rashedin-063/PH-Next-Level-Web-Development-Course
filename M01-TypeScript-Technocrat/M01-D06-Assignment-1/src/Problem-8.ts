/**
 * Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

// Sample Input:
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));

// Sample Output:
true;
 */

function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
  return keys.every(key => key in obj);
}

const person10 = { name: 'Alice', age: 25, email: 'alice@example.com' };
console.log(validateKeys(person10, ['name', 'age']));