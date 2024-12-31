function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return a + b;
}

try {
  let result = add(10, 5); // Correct usage
  console.log(result); // Output: 15
  let result2 = add("hello", 5); // This will throw an error
  console.log(result2);
} catch (error) {
  console.error(error.message); //Output: Both parameters must be numbers
}
