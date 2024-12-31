function add(a: number, b: number): number {
  return a + b;
}

let result = add("hello", 5); // This will compile without error but will result in an incorrect value at runtime
console.log(result); // Output: "hello5"