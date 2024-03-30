(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  //lista de emails de usuarios de Meta-X
  let metaXUsersEmails: Array<string> = [
    "email1@gmail.com", 
    "email2@gmail.com", 
    "email3@gmail.com"
  ];

  console.log(metaXUsersEmails);

  //Lista de compras de un carrito
  let shoppingCart: Array<Object> = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];

  console.log(shoppingCart);
  

  //funcion para sumar mas 3 a un numero y retornarlo
  let addition = (num: number): number => {
    return num + 3;
  }

  console.log(addition(2));
  
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  let capitalizeWord = (word: string): string => {
    return word.charAt(0).toUpperCase().concat(word.substring(1, word.length).toLowerCase());
  };

  console.log(capitalizeWord("capricorn"));
  
  //variable que alerta en caso de que algun evento suceda
  const isActiveEvent: boolean = false;

  if(isActiveEvent) console.log('event');

  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  const canUserAccess: boolean = true;

  if(canUserAccess) console.log('welcome');
  

  //variable para hallar el promedio de 3 numeros
  const averageOfNumbers: number = (1 + 2 + 3) / 3;

  console.log(averageOfNumbers);
  
  //variable que almacena el valor de PI
  const PI_NUMBER: number = 3.141592654;

  console.log(PI_NUMBER);
  

  //variabel que controla si un archivo es modificable 
  const isThisFileEditable: boolean = false;

  if(isThisFileEditable) console.log('edit this file?');
  
  //variable para almacenar el valor de e
  const E_VALUE: number = 2.718281828; 

  console.log(E_VALUE);

})();

  /*Si en el futuro se añade código que cambie el valor de alguna de las variables booleanas de false a 
  true, entonces sería apropiado cambiarlas de const a let. 
  Por ahora, dado que sus valores no cambian, mantenerlas como const me parece una elección adecuada.*/