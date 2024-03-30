(() => {

  /* APLICA DRY */
  
  //EX - 1
  
  /*function calculateOperation1(a: number, b: number, c: number): number {
    let sumResult = a + b;
    let multiplicationResult = sumResult * c;
    return multiplicationResult;
  }

  function calculateOperation2(x: number, y: number, z: number): number {
    let sumResult = x + y;
    let multiplicationResult = sumResult * z;
    return multiplicationResult;
  }*/

  /*Ya que las dos funciones realizan lo mismo podemos tener una funcion unica*/

  function calculateOperation(var1: number, var2: number, var3: number): number {
    let sumResult = var1 + var2;
    let multiplicationResult = sumResult * var3;
    return multiplicationResult;
  }

  console.log(calculateOperation(3, 2, 4));

  // EX - 2
  /*function calculateRectangleArea(length: number, width: number): number {
    return length * width;
  }

  function calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
  }*/

  /*En este caso también podriamos generar una funcion la cual pueda realizar ambas operaciones
  utilizando operadores ternarios*/

  function calculateArea(shape: string, ...params: number[]): number {
    return shape === 'rectangle' ? params[0] * params[1] :
           shape === 'circle' ? Math.PI * params[0] * params[0] :
           (() => { throw new Error('Invalid Shape'); })();
  }

  console.log(calculateArea('rectangle', 3, 2));
  

  // EX - 3
  //No es necesario aumentar codigo en este ejercicio
  /*function validateEmail(email: string): boolean {
    //...some code for validate here
    return false;
  }

  function validateUsername(username: string): boolean {
    //...some code for validate here
    return false;
  }*/

const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.com+$/;
const USERNAME_REGEXP = /^[a-zA-Z0-9]+$/;

function validateInput(input: string, validationRegex: RegExp): boolean {
  return validationRegex.test(input);
}

function validateEmail(email: string): boolean {
  return validateInput(email, EMAIL_REGEXP);
}

function validateUsername(username: string): boolean {
  return validateInput(username, USERNAME_REGEXP);
}

console.log(validateEmail('camila.23@gmail.com'));

})();