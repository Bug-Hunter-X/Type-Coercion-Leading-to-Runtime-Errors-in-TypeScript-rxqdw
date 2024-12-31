# Type Coercion Bug in TypeScript

This repository demonstrates a common issue in TypeScript where type coercion can lead to unexpected runtime behavior. The `add` function is defined to accept two numbers, but due to TypeScript's type coercion, it allows a string and a number, leading to string concatenation instead of numeric addition.  This highlights the importance of robust type checking and error handling in TypeScript.

## How to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `tsc bug.ts` to compile the code.
4. Run `node bug.js` to execute the code. You'll observe that the output is "hello5" instead of the expected numeric sum.

## Solution

The `bugSolution.ts` file contains the corrected code which uses a type guard to ensure the inputs are numbers, thus preventing unexpected behavior.