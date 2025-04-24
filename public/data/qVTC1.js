export default function questions2() {
  return [
    {
      id: "q1",
      question:
        "A developer of Cosmic Learning Solutions needs to access ISBN and pricing information about a series of books from a JSON response. The response is received via a GET request from a web server. The information should be displayed in the format below. The parsed JSON response is saved in a JavaScript variable named 'jsObject', which contains an array of objects with 'isbn' and 'price' properties. \n\nWhat should be added in place of the underlined blanks in the given code to access the values for 'isbn' and 'price'?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "jsObject[index][isbn], jsObject[index][price]",
        B: "jsObject.isbn, jsObject.price",
        C: "jsObject[index].isbn, jsObject[index].price",
        D: "jsObject[isbn], jsObject[price]",
      },
      code: "/*\n  Expected Output:\n  Index: 0, ISBN: 0-5153-0346-1, Price: 24.95\n  Index: 1, ISBN: 0-8522-3763-4, Price: 6.99\n  Index: 2, ISBN: 0-4567-5678-2, Price: 15.99\n  \u2026\n  */\n  for (let index=0; index < jsObject.length; index++) {\n  console.log('Index: ', index, ', ISBN: ', /* ??? */, ', Price: ', /* ??? */);\n  }",
      explanation:
        "La opción correcta es la C: `jsObject[index].isbn, jsObject[index].price`. Esto se debe a que `jsObject` es un arreglo de objetos, y cada objeto contiene las propiedades 'isbn' y 'price'. Para acceder a cada elemento del arreglo se usa `jsObject[index]`, y luego para acceder a las propiedades del objeto se usa la notación punto: `.isbn` y `.price`.\n\nLas otras opciones son incorrectas por lo siguiente:\n- A: `jsObject[index][isbn]` intenta acceder a la propiedad con una variable llamada `isbn`, pero `isbn` no está definida como variable, por lo tanto lanzará un error.\n- B: `jsObject.isbn` accede a una propiedad `isbn` directamente en el arreglo `jsObject`, lo cual no tiene sentido porque `jsObject` es un arreglo, no un objeto con esas propiedades.\n- D: `jsObject[isbn]` accede a un índice del arreglo usando una variable `isbn` no definida, lo cual también es incorrecto.",
    },
    {
      id: "q2",
      question:
        "A developer needs to send the employee data below in JSON format to a remote server for the creation of a new employee record. name = Jon Smith title = IT Manager salary = 100000 email = jsmith@cosmicinnovation.com \n\nWhich of the following represents a properly formatted JSON string that can be used as the body of the POST request?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: 'const data = { "name": Jon Smith, "title": IT Manager, salary: 100000, "email": jsmith@cosmicinnovation.com };',
        B: 'const data = \'{"name": "Jon Smith", "title": "IT Manager", "salary": 100000, "email": "jsmith@cosmicinnovation.com"}\';',
        C: "const data = '{'name': 'Jon Smith', 'title': 'IT Manager', 'salary': 100000, 'email': 'jsmith@cosmicinnovation.com' ]';",
        D: "const data =\"{ 'name': 'Jon Smith', 'title': 'IT Manager', 'salary': 100000, 'email': 'jsmith@cosmicinnovation.com']\";",
      },
      code: "",
      explanation:
        "La opción correcta es la B, ya que representa una cadena JSON válida que puede ser enviada en el cuerpo de una petición POST. Esta cadena está correctamente formada: las claves y los valores tipo string están entre comillas dobles, y toda la estructura está encerrada en una cadena con comillas simples para evitar conflicto con las comillas dobles internas.\n\nLas otras opciones son incorrectas por lo siguiente:\n- A: No pone comillas alrededor de los valores tipo string ('Jon Smith', 'IT Manager' y el email), lo que rompe el formato JSON válido.\n- C: Usa comillas simples para claves y valores, lo cual no es válido en JSON, y además cierra con un corchete cuadrado `]` en vez de una llave `}`.\n- D: Tiene el mismo problema que la C, con comillas simples en vez de dobles, y termina con un `]` incorrectamente, además de que está entrecomillado con comillas dobles exteriores, lo que causa conflicto con las internas.",
    },
    {
      id: "q3",
      question:
        "A developer is working on a calendar application for a multinational company. An instance of the Date object is used to track each meeting schedule. A decision has been made to display the date and time information using the Coordinated Universal Time. \n\nWhich method of the object can the developer use to display a time in the Coordinated Universal Time zone?",
      type: "multiple choice",
      correct_options: ["C", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "toDateString()",
        B: "toString()",
        C: "toUTCString()",
        D: "toISOString()",
      },
      code: "",
      explanation:
        "Las respuestas correctas son C y D porque ambos métodos devuelven la fecha y hora en formato UTC (Coordinated Universal Time). \n\n- toUTCString() convierte el objeto Date en una cadena en formato UTC legible por humanos, por ejemplo: 'Mon, 20 Apr 2025 12:00:00 GMT'.\n- toISOString() devuelve la fecha en formato ISO 8601 también en UTC, por ejemplo: '2025-04-20T12:00:00.000Z'.\n\nLas otras opciones no son correctas:\n- A: toDateString() devuelve solo la parte de la fecha (sin hora) en el formato local del sistema, no en UTC.\n- B: toString() devuelve la fecha y hora como una cadena en la zona horaria local del sistema, no en UTC.",
    },
    {
      id: "q4",
      question:
        "Determine the contents of the 'peak' array after the operation below.",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "[10, 8, 6, 4]",
        B: "[9, 8, 4, 5]",
        C: "[4, 6, 8, 10]",
        D: "[10, 9, 5, 6]",
      },
      code: "  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];\n  let peak = [];\n  for (let month of months) {\n  if (month > 3) {\n  peak.push(month);\n  }\n  if (month > 5) {\n  peak.pop();\n  }\n  if (month > 7) {\n  peak.unshift(month);\n  }\n  if (month > 9) {\n  peak.shift();\n  }\n  }",
      explanation:
        "El array 'months' contiene los valores de 1 a 12. El array 'peak' comienza vacío. A continuación, se describe el proceso paso a paso:\n\n1. Si el mes es mayor a 3, se agrega al final del array 'peak' mediante el método 'push'.\n2. Si el mes es mayor a 5, se elimina el último elemento del array 'peak' mediante el método 'pop'.\n3. Si el mes es mayor a 7, se agrega al principio del array 'peak' mediante el método 'unshift'.\n4. Si el mes es mayor a 9, se elimina el primer elemento del array 'peak' mediante el método 'shift'.\n\nTras ejecutar todo el código, el array 'peak' contiene los valores [9, 8, 4, 5], lo que corresponde a la opción B.",
    },
    {
      id: "q5",
      question:
        "A developer is working on a site for the accounting department. A function is used to help format numbers so that they can be displayed in the tables on the page. The function works fine, but there is a need to format the number to display two decimal places. \n\nHow can the line of code in the function be modified to include two decimal places even if the original number does not have anything after the decimal?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "return '$${num.toString().toFixed(2)];",
        B: "return `$${num.toString(2)];",
        C: "return `$${Number(num).toFixed(2)};",
        D: "return `$${Number(num).toDecimal(2)];",
      },
      code: "  function formatNumber(num) {\n  return `$${Number(num).toString()}`; // Modify this line\n  }",
      explanation:
        "La opción C es correcta porque utiliza el método 'toFixed(2)', que convierte el número a una cadena con exactamente dos decimales, incluso si el número original no tiene decimales. El método 'Number(num)' convierte 'num' a un valor numérico antes de aplicar 'toFixed(2)'.\n\nLa opción A es incorrecta porque el uso de 'toString()' antes de 'toFixed(2)' no tiene sentido y el cierre del string está mal colocado ('$$' debería estar entre comillas) y la sintaxis también es incorrecta.\n\nLa opción B es incorrecta porque 'toString(2)' convierte el número en su representación binaria, no lo formatea a dos decimales.\n\nLa opción D es incorrecta porque 'toDecimal()' no es un método válido en JavaScript.",
    },
    {
      id: "q6",
      question:
        "A developer comes across the following function in an application. What will be the value of user. \n\ntype when the argument type gets the values '' and 'STUDENT' respectively?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "When type = '', user.type = '', and when type = 'STUDENT', user.type = 'STUDENT'",
        B: "When type = '', user.type = 'DEFAULT', and when type = 'STUDENT', user.type = 'DEFAULT'",
        C: "When type = '', user.type = '', and when type = 'STUDENT', user.type = 'DEFAULT'",
        D: "When type = '', user.type = 'DEFAULT', and when type = 'STUDENT', user.type = 'STUDENT'",
      },
      code: "  function checkUserType(user, type) {\n  user.type = type || 'DEFAULT';\n  return user;\n  }",
      explanation:
        "La función usa el operador lógico OR para asignar un valor predeterminado a 'user.type'. Si 'type' es un valor falsy (incluyendo una cadena vacía ''), 'user.type' se asignará a 'DEFAULT'. Si 'type' tiene un valor truthy (como 'STUDENT'), 'user.type' tomará ese valor. \n\nLa opción A es incorrecta porque cuando 'type' es una cadena vacía '', 'user.type' no será igual a '', sino que se asignará el valor 'DEFAULT' debido al operador '||'.\nLa opción B es incorrecta porque cuando 'type' es 'STUDENT', 'user.type' será 'STUDENT', no 'DEFAULT'.\nLa opción C es incorrecta porque cuando 'type' es 'STUDENT', 'user.type' será 'STUDENT', no 'DEFAULT'.\nLa opción D es correcta porque refleja correctamente el comportamiento del operador '||': cuando 'type' es '', 'user.type' será 'DEFAULT', y cuando 'type' es 'STUDENT', 'user.type' será 'STUDENT'.",
    },
    {
      id: "q7",
      question:
        "A developer working in the IT department of a university needs to enumerate the content of a particular course. The 'course' variable represents the parsed JSON data that has been received via a GET request from a database server. It contains all the required course information, including code, name, department, and instructor, as key-value data items. \n\nWhat should be added in place of the blank space to access the value of each key in the 'course'?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "course['key']",
        B: "course['key']",
        C: "course.key",
        D: "course[key]",
      },
      code: "  for (let key in course) {\n  console.log(key, ' => ', ____);\n  }",
      explanation:
        "En JavaScript, cuando se itera sobre un objeto utilizando un bucle 'for...in', las claves del objeto se almacenan en la variable 'key'. Para acceder al valor correspondiente de cada clave, debes utilizar la variable 'key' como índice. \n\nLa opción A y la opción B son incorrectas porque 'key' se trata como una cadena literal, no como la variable que contiene el nombre de la clave real. 'course['key']' y 'course['key']' buscarían una propiedad llamada literalmente 'key'.\nLa opción C es incorrecta porque 'course.key' buscaría una propiedad llamada literalmente 'key' en el objeto, en lugar de usar la variable 'key' para acceder a la propiedad correspondiente.\nLa opción D es correcta porque 'course[key]' usa la variable 'key' para acceder dinámicamente a la propiedad correspondiente del objeto 'course'. Esta es la forma correcta de acceder a las propiedades de un objeto cuando se está iterando sobre él.",
    },
    {
      id: "q8",
      question:
        "A JavaScript developer of Cosmic Innovation is creating a web page that will allow users to search for a customer in a database and determine which customer data exists. If any piece of information, such as email, phone, or age, is null, undefined, or \"\" (empty string), then the web page should simply show the Boolean value false in place of the original value. If the information exists, then the Boolean value true should be displayed. Customer data is stored in a JavaScript object named 'customer'. The developer has started writing the code to iterate over the data and add each value and its Boolean association (true or false) to the 'values' array. The array will be used to display the required data on the web page. \n\nWhich of the following statements can be used to complete the given code for this requirement?",
      type: "multiple choice",
      correct_options: ["B", "C", "D"],
      number_of_correct_answers: 3,
      options: {
        A: "obj[key] = new Boolean(customer[key]);",
        B: "obj[key] = !! customer[key];",
        C: "obj[key] = Boolean(customer[key]);",
        D: "obj[key] = customer[key] ? true : false;",
        E: "obj[key] = !customer[key];",
      },
      code: "  const values = [];\n  for (const key in customer) {\n  const obj = ({});\n  // missing code\n  values.push(obj);\n  }",
      explanation:
        "La tarea requiere comprobar si los valores del objeto 'customer' son válidos (no nulos, no indefinidos, ni cadenas vacías) y asociar un valor booleano en consecuencia. Las opciones correctas realizan esta comprobación correctamente. \n\n- La opción A es incorrecta porque 'new Boolean()' crea un objeto Boolean, no un valor primitivo booleano. Esto podría generar problemas al intentar comparar valores booleanos.\n- La opción B es correcta porque el operador '!!' convierte cualquier valor en un valor booleano, retornando 'true' si el valor es truthy y 'false' si el valor es falsy.\n- La opción C es correcta porque 'Boolean()' convierte cualquier valor en un valor booleano de manera sencilla y directa, haciendo que los valores falsy (null, undefined, '') se conviertan en 'false' y los demás en 'true'.\n- La opción D es correcta porque el operador ternario 'customer[key] ? true : false' verifica si el valor existe (truthy) o no (falsy), asignando 'true' o 'false' en consecuencia.\n- La opción E es incorrecta porque '!customer[key]' devolvería el valor booleano opuesto al esperado, es decir, 'true' para valores falsy y 'false' para valores truthy.",
    },
    {
      id: "q9",
      question:
        "Using the multi-dimensional array below, which command can be used to generate the array ['jan', 'feb', 'mar', 'week1', 'week2', 'week3', 'fri', 'sat', 'sun']?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "matrix.flat(Infinity);",
        B: "matrix.flat(false);",
        C: "matrix.flat();",
        D: "matrix.flat(true);",
      },
      code: "  const matrix = [\n  'jan', 'feb', 'mar', [\n  'week1', 'week2', 'week3', [\n  'fri', 'sat', 'sun'\n  ]\n  ]\n  ];",
      explanation:
        "El método 'flat()' de JavaScript se utiliza para aplanar un array multidimensional. Al usar 'flat()' sin ningún argumento, se aplanará el array solo una vez (es decir, un nivel de profundidad). Sin embargo, el array 'matrix' tiene múltiples niveles de anidación, por lo que necesitamos aplanarlo completamente. \n\nLa opción A es correcta porque al pasar 'Infinity' como argumento, se aplanarán todos los niveles de anidación sin importar cuántos sean, obteniendo así el array completamente plano: ['jan', 'feb', 'mar', 'week1', 'week2', 'week3', 'fri', 'sat', 'sun']. \n\nLas opciones B, C y D son incorrectas: \n- La opción B es incorrecta porque 'false' no es un argumento válido para el método 'flat'. \n- La opción C es incorrecta porque al usar 'flat()' sin ningún argumento, solo se aplanará el array un nivel. \n- La opción D es incorrecta porque 'true' tampoco es un argumento válido para el método 'flat'.",
    },
    {
      id: "q10",
      question:
        "A developer of Cosmic Innovation has received the following JSON data about a product from a web server through a GET request. This data needs to be converted into a JavaScript object for further processing. \n\nWhich method of the JSON object should be used?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "JSON.deserialize();",
        B: "JSON.parse();",
        C: "JSON.toString();",
        D: "JSON.stringify();",
      },
      code: '  {\n  "product": "E-1000 Laptop",\n  "code": "E1000IQT",\n  "price": "2000 USD",\n  "regions": ["Americas", "EMEA", "APAC"]\n  }',
      explanation:
        "Cuando se recibe un dato en formato JSON, este debe ser convertido a un objeto de JavaScript para poder manipularlo. El método adecuado para realizar esta conversión es 'JSON.parse()', que toma una cadena JSON y la convierte en un objeto JavaScript. \n\nLa opción B es correcta porque 'JSON.parse()' convierte una cadena JSON en un objeto JavaScript. \n\nLas opciones A, C y D son incorrectas:\n- La opción A es incorrecta porque 'JSON.deserialize()' no es un método válido en JavaScript.\n- La opción C es incorrecta porque 'JSON.toString()' no existe. Para convertir un objeto JavaScript en una cadena JSON, se utiliza 'JSON.stringify()'.\n- La opción D es incorrecta porque 'JSON.stringify()' convierte un objeto JavaScript en una cadena JSON, no al revés.",
    },
    {
      id: "q11",
      question: "Determine the output at the end of the operation below.",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "[1, 2, 3, 6]",
        B: "[1, 2, 3, 4, 5, 6, 7]",
        C: "[3, 6]",
        D: "[1, 7]",
      },
      code: "  let days = [1, 2, 3, 4, 5, 6, 7];\n  for (let num of days) {\n  if (num == 3) {\n  days.splice(1, 2);\n  } else if (num == 6) {\n  days.splice(1, 3);\n  }\n  }\n  console.log(days);",
      explanation:
        "El código utiliza un bucle 'for...of' para iterar sobre el array 'days'. En cada iteración, se evalúan dos condiciones usando 'splice()', lo que altera el array original. \n\n1. Cuando 'num' es 3, se ejecuta 'days.splice(1, 2)', eliminando los elementos en las posiciones 1 y 2 (es decir, '2' y '3'). Después de esta operación, el array 'days' se convierte en [1, 4, 5, 6, 7].\n2. Cuando 'num' es 6, se ejecuta 'days.splice(1, 3)', eliminando los elementos en las posiciones 1, 2 y 3 (es decir, '4', '5' y '6'). Después de esta operación, el array 'days' se convierte en [1, 7].\n\nPor lo tanto, el resultado final del array es '[1, 7]'.\n\nLa opción A es incorrecta porque '2' y '3' fueron eliminados en la primera iteración, y '4', '5' y '6' fueron eliminados en la segunda iteración.\nLa opción B es incorrecta porque los elementos '4', '5' y '6' fueron eliminados, por lo que el array es más pequeño.\nLa opción C es incorrecta porque solo se mantiene el '1' y '7' después de las operaciones de 'splice'.",
    },
    {
      id: "q12",
      question:
        "A developer has obtained an array of sales users via an HTTP request to a server. The array is the value of the 'users' property of the 'data' object. Another array named 'employees' stores a list of four employees. \n\nWhat should be the value of the 'employees' array to ensure that the list of employees includes the sales users at the end?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "['Hariett Parks', 'Aurelia Haney','Joanne Browning', 'Nicole Novak', data.users ... ]",
        B: "['Hariett Parks', 'Aurelia Haney','Joanne Browning', 'Nicole Novak', data.users]",
        C: "['Hariett Parks', 'Aurelia Haney','Joanne Browning', 'Nicole Novak', ... data.users]",
        D: "['Hariett Parks', 'Aurelia Haney', 'Joanne Browning', 'Nicole Novak', data.users[ ... ]]",
      },
      code: "  users: ['Jon Smith', 'Linwood Franco', 'Dave Hines']\n  const employees = ['Hariett Parks', 'Aurelia Haney', 'Joanne Browning', 'Nicole Novak'];",
      explanation:
        "La opción correcta es **C**, que utiliza el operador de expansión (`...`) para añadir todos los elementos del array `data.users` al final del array `employees`. El operador `...` es utilizado para 'desempaquetar' los elementos de un array y agregarlos en el lugar correcto dentro de otro array. En este caso, se agrega cada uno de los elementos de `data.users` al final del array `employees`.\n\nLa opción **A** es incorrecta porque la sintaxis `data.users ...` no es válida. El operador `...` debe usarse dentro de un array o función, pero no de esa forma.\nLa opción **B** es incorrecta porque `data.users` es un array, y en esta forma se agregaría todo el array `data.users` como un único elemento dentro del array `employees`, lo que no es el comportamiento esperado.\nLa opción **D** es incorrecta porque `data.users[ ... ]` no es una forma válida de acceder a los elementos de un array. El operador de expansión debe ir fuera de los corchetes, no dentro.",
    },
    {
      id: "q13",
      question:
        "A developer has written the code below to perform user input filtering so that only positive or negative numbers can be entered, and not 0. \n\nWhich of the following CANNOT be used in place of the comment in line 3 in order to implement the correct functionality?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Number(inputNumber);",
        B: "String(inputNumber);",
        C: "Boolean(inputNumber);",
        D: "inputNumber;",
      },
      code: '  function filterUserInput(input) {\n  let inputNumber = Number(input);\n  let isInputNumber = // code option here\n  if (isInputNumber) {\n  console.log("Input valid: " + inputNumber);\n  return inputNumber;\n  } else {\n  console.log("Input invalid: " + inputNumber);\n  return isInputNumber;\n  }\n  }',
      explanation:
        "La opción correcta es **B**, ya que convertir el `inputNumber` a una cadena con `String(inputNumber)` no es adecuado para filtrar números. La intención del código es verificar si el valor de entrada es un número válido, por lo que la conversión a cadena no serviría para esa finalidad.\n\nLas demás opciones son correctas: \n- **Opción A** (`Number(inputNumber)`) convierte el valor de `inputNumber` a un número, lo que permite hacer la comprobación si es un número válido.\n- **Opción C** (`Boolean(inputNumber)`) convierte el valor a un valor booleano, lo cual permite verificar si el número es distinto de cero (ya que cualquier número distinto de cero será `true` en un contexto booleano, y el cero será `false`).\n- **Opción D** simplemente mantiene el valor de `inputNumber`, lo cual puede ser útil si se quiere hacer una comprobación directa sin conversión.",
    },
    {
      id: "q14",
      question:
        "A developer employed by a restaurant is trying to display the following codes and courses from the restaurant menu in the console after getting a JSON response from a remote server using XMLHttpRequest. However, there is an error in the code, due to which it is not displaying the desired output. \n\nHow should it be modified?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Replace 'const data = xhr.responseText' with 'const data = JSON.parse(xhr)':",
        B: "Replace 'const data = xhr.responseText' with 'const data = JSON.parse(xhr.responseText).' ",
        C: "Replace 'const courses = data.courses' with 'const courses = JSON.parse(data)'.",
        D: "Replace 'const courses = data.courses' with 'const courses = JSON.parse(data.courses)'.",
      },
      code: "/*\n  CK-CM => Chicken Marsala\n  CK-KFC => Kentucky Fried Chicken\n  CK-KPC => Kung Pao Chicken\n  */\n  if (xhr.readyState === XMLHttpRequest.DONE) {\n  const data = xhr.responseText;\n  const courses = data.courses;\n  let string = '';\n  for (let item=0; item < courses.length; item++) {\n  string += courses[item].code + ' => ' + courses[item].name + '<br/>';\n  }\n  console.log(string);\n  }",
      explanation:
        "La opción correcta es **B**, ya que la propiedad `xhr.responseText` devuelve una cadena de texto JSON, y se debe convertir a un objeto JavaScript utilizando `JSON.parse(xhr.responseText)`. Esto permite que la variable `data` contenga el objeto con las propiedades correspondientes (como `courses`). Si no se realiza esta conversión, `data` permanecería como una cadena, y acceder a `data.courses` no funcionaría correctamente.\n\nLas otras opciones son incorrectas por las siguientes razones:\n- **Opción A** es incorrecta porque `JSON.parse(xhr)` no es válido. Debemos parsear `xhr.responseText`, que es la cadena JSON, no el objeto `xhr` entero.\n- **Opción C** es incorrecta porque `data` ya es un objeto parseado, y no necesita ser parseado nuevamente. Se debe acceder directamente a `data.courses` sin realizar otro `JSON.parse`.\n- **Opción D** es incorrecta porque `data.courses` ya es un array (suponiendo que el JSON se haya parseado correctamente), y no es necesario volver a parsearlo.",
    },
    {
      id: "q15",
      question:
        "A developer is working on an online quiz to be used for employee training. In order to total all the scores without knowing how many scores there are, she has created the function below using the arguments property. When she tests the function, she receives an error that arguments. reduce is not a function. She uses Array. isArray() on arguments and realizes arguments is not an array even though it looks like an array. \n\nWhich of the following code changes in the function will correct the problem?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "let scores = new Array(arguments); return scores.reduce((total, score) => total + score);",
        B: "let scores = convert(arguments); return scores.reduce((total, score) => total + score);",
        C: "let scores = Array.of(arguments); return scores.reduce((total, score) => total + score);",
        D: "let scores = Array.from(arguments); return scores.reduce((total, score) => total + score);",
      },
      code: "  function totalScores() {\n  return arguments.reduce((total, score) => total + score);\n  };",
      explanation:
        "La opción correcta es **D**, ya que el objeto `arguments` en JavaScript no es un array verdadero, sino un objeto similar a un array (un 'array-like object'). Para poder usar el método `reduce` y otros métodos de array, es necesario convertir `arguments` en un verdadero array, y esto se puede hacer con `Array.from(arguments)`, lo que creará un array a partir de los valores en `arguments`.\n\nLas demás opciones son incorrectas por las siguientes razones:\n- **Opción A** es incorrecta porque `new Array(arguments)` crea un array con un solo elemento, que es el objeto `arguments` entero, lo que no resolvería el problema.\n- **Opción B** es incorrecta porque `convert(arguments)` no es una función estándar de JavaScript, por lo que no realizaría la conversión necesaria.\n- **Opción C** es incorrecta porque `Array.of(arguments)` crea un array con un solo elemento, que es el objeto `arguments`, en lugar de convertir los elementos del objeto `arguments` en un verdadero array.",
    },
    {
      id: "q16",
      question:
        "A developer is refactoring some JavaScript code that is used for an online quiz. She would like to use the destructuring assignment syntax with the 'computeAve' function. This function receives an object and divides the value of the 'totalScores' property by the value of the 'numQuizes' property. \n\nWhich code block shows the correct use of the destructuring assignment syntax with this function?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "function computeAve(totalScores, numQuizes) { return totalScores / numQuizes; }",
        B: "function computeAve(obj.totalScores, obj.numQuizes) { return totalScores / numQuizes; }",
        C: "function computeAve([totalScores, numQuizes]) { return totalScores / numQuizes; }",
        D: "function computeAve({totalScores, numQuizes}) { return totalScores / numQuizes; }",
      },
      code: "  function computeAve(obj) {\n  return obj.totalScores / obj.numQuizes;\n  };",
      explanation:
        "La opción correcta es **D**, porque esta es la forma correcta de utilizar la sintaxis de asignación por desestructuración en una función que recibe un objeto. Al escribir `function computeAve({totalScores, numQuizes})`, estamos extrayendo las propiedades `totalScores` y `numQuizes` del objeto recibido como parámetro, lo que permite utilizarlas directamente dentro de la función sin necesidad de acceder a `obj.totalScores` o `obj.numQuizes`.\n\nLas demás opciones son incorrectas por las siguientes razones:\n- **Opción A** es incorrecta porque esta opción no utiliza desestructuración, simplemente recibe dos parámetros independientes.\n- **Opción B** es incorrecta porque intenta utilizar desestructuración en el nombre de los parámetros dentro de la firma de la función, lo que no es válido en JavaScript. La desestructuración debe aplicarse directamente a los parámetros del objeto.\n- **Opción C** es incorrecta porque está utilizando la desestructuración en un arreglo (`[totalScores, numQuizes]`), cuando lo que se busca es desestructurar las propiedades de un objeto, no un arreglo.",
    },
    {
      id: "q17",
      question:
        "The code below was developed to integrate caching with an application. The getUsernameFromCache() function initially converts the 'id' into a number and retrieves the username from the cache. If no relevant username is present for the 'id', null is returned. When the 'id' argument is not a valid number, NaN is returned. During the third invocation of the getUsername() function, an error was thrown in the try-catch block of the getUsername() function. \n\nWhich of the following represents the correct output of the three lines of code that are executed?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: '"Username is NaN" "Username is null" "Username is undefined"',
        B: '"Username is NaN" "Username is undefined" "Username is janedoe"',
        C: '"Username is NaN" "Username is null" "Username is null"',
        D: '"Username is NaN" "Username is null" "Username is janedoe"',
      },
      code: "  function getUsername(id) {\n  let error = false;\n  let user;\n  try {\n  // an error occurs here during the 3rd invocation\n  // sample code to throw an error for demo purposes\n  if (id == 1) throw new Error('Ooops!');\n  } catch (err) {\n  error = true;\n  }\n  if (!error) {\n  user = getUsernameFromCache(id);\n  }\n  let status = 'Username is ' + user;\n  console.log(status);\n  return status;\n  }\n  // The cached data is given below in key-value form.\n  {\n  1:\"janedoe\",\n  2:\"mineiris\"\n  }\n  // The code below is used to invoke the function three times.\n  getUsername('1QR');\n  getUsername('3');\n  getUsername('1');",
      explanation:
        "La opción correcta es **A**, porque representa correctamente la secuencia de eventos y valores devueltos por la función en los tres casos de prueba:\n\n1. **getUsername('1QR')**: El 'id' es una cadena no numérica, por lo que al intentar convertirlo en un número, el valor es `NaN`. Esto provoca que el valor de `user` sea `NaN`.\n\n2. **getUsername('3')**: Al convertir el 'id' en número, se obtiene 3, que no se encuentra en el caché, por lo que `getUsernameFromCache(id)` retorna `null`. El valor de `user` es `null`.\n\n3. **getUsername('1')**: Se lanza un error en el bloque `try` debido a la condición `if (id == 1)`. Este error es capturado en el bloque `catch`, lo que hace que `error` se vuelva `true` y no se ejecute el bloque que obtiene el usuario del caché. Debido a que `user` nunca se define en el bloque `catch`, el valor de `user` es `undefined` en este caso.\n\nLas demás opciones son incorrectas porque no reflejan correctamente los valores de `user` en cada invocación.",
    },
    {
      id: "q18",
      question:
        "A developer is working on a requirement to store dates for an online course. Two different dates need to be converted into milliseconds before they can be stored. The first is the date entered by the learner in the correct format. The second is the current date when a learner logs in. Two functions are needed for converting these dates. \n\nWhich two statements are required to make these functions work as intended?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "FIRST FUNCTION: return Date.parse(date); SECOND FUNCTION: return Date.now();",
        B: "FIRST FUNCTION: return parse(date); SECOND FUNCTION: return now(new Date());",
        C: "FIRST FUNCTION: return Date.parse(new Date(date)); SECOND FUNCTION: return Date.now(new Date());",
        D: "FIRST FUNCTION: return date.parse(); SECOND FUNCTION: return new Date().now();",
      },
      code: "  function convertLearnerDate(date) {\n  // Add code to convert the passed date string into milliseconds.\n  }\n  function getCurrentDate() {\n  // Add code to get the current date in milliseconds.\n  }",
      explanation:
        "La opción correcta es la **A**.\n\n- En la **primera función**, `Date.parse(date)` convierte una cadena de fecha (por ejemplo, '2025-04-21') en un número que representa los milisegundos desde el 1 de enero de 1970 (Epoch time), lo que permite almacenar esa fecha.\n\n- En la **segunda función**, `Date.now()` devuelve la fecha y hora actuales en milisegundos, lo cual es ideal para registrar el momento en que el usuario inicia sesión.\n\nLas otras opciones son incorrectas:\n- **B**: `parse()` y `now()` no son funciones globales válidas por sí solas.\n- **C**: `Date.parse(new Date(date))` es redundante, ya que `new Date(date)` crea un objeto de fecha y `Date.parse()` espera una cadena. Además, `Date.now()` no acepta argumentos.\n- **D**: `date.parse()` y `new Date().now()` no son métodos válidos en JavaScript.",
    },
    {
      id: "q19",
      question:
        "A developer of Cosmic Electronics is working with an array of objects named 'products' in JavaScript. Each object in the array represents a product and contains the product name and code. For example, the code below represents a product named '100 kW Generator'. The developer needs to build an array that stores each product as a string containing the product code and name separated by '-'. In the new array, the '100 kW Generator' should be stored as 'G100 - 100 kW Generator'. Furthermore, if the array contains a generator that has 500 kW output power, then that generator should be excluded from the resulting array. \n\nWhich statement can be used to meet this requirement?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "products.filter(product => !product.name.includes('500 kW')).map(product => `${product.code} - ${product.name}`);",
        B: "products.filter(product => product.name.includes('500 kW')).map(product => `${product.code} - ${product.name}`);",
        C: "products.map(product => `${product.code} - ${product.name}`).filter(product => !product.name.includes('500 kW'));",
        D: "products.map(product => `${product.code} - ${product.name}`).filter(product => product.name.includes('500 kW'));",
      },
      code: "  let products = [\n  { name: '100 kW Generator', code: 'G100' },\n  { name: '500 kW Generator', code: 'G500' }\n  ];",
      explanation:
        "La opción **A** es la correcta.\n\n- Primero se utiliza `.filter()` para excluir los productos cuyo nombre incluye '500 kW'.\n- Luego, `.map()` transforma los productos restantes en una cadena con el formato 'código - nombre'.\n\nPor ejemplo, '100 kW Generator' con código 'G100' se convierte en 'G100 - 100 kW Generator'.\n\nLas demás opciones son incorrectas:\n- **B** filtra solo los productos que *sí* incluyen '500 kW', lo contrario a lo que se desea.\n- **C** transforma todos los objetos a strings y luego intenta filtrar usando `.name`, pero ya no se tiene acceso a la propiedad `name`, ya que el elemento es una cadena.\n- **D** tiene el mismo problema que la opción C: está trabajando con strings al filtrar, por lo que `product.name` no existe.",
    },
    {
      id: "q20",
      question:
        "A developer working for Cosmic University is building a web page that will display student information such as enrollment number, name, major, duration, and degree. The value of the degree should depend on the duration. For example, if the duration is 4, then the degree should always be 'Bachelor'. If the duration is an empty string (\"\"), then the value of degree should be 'N/A'. The JavaScript code below has been written to check the duration returned from the server. However, the code does not work as intended if a student has enrolled in a certificate program that lasts for six months or less, in which case the duration returned by the server is 0. When this occurs, the degree is set to 'N/A', which is incorrect. \n\nWhich of the following should be used in place of the existing condition on line (3) to resolve this issue using the best solution?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: 'duration == " || duration != 0',
        B: 'duration === " && duration !== 0',
        C: 'duration === ""',
        D: "duration !== 0",
      },
      code: "  if (duration === 4) {\n  degree = 'bachelor';\n  } else if (duration == '') {\n  degree = 'N/A';\n  } else {\n  degree = 'others';\n  }",
      explanation:
        "La condición actual `duration == ''` trata incorrectamente el valor `0` como 'falsy', por lo que se interpreta como cadena vacía. Esto lleva a asignar 'N/A' cuando el valor es 0, lo cual no es correcto.\n\nLa opción **C** (`duration === \"\"`) es la más precisa y segura porque compara explícitamente contra una cadena vacía, sin afectar valores numéricos como `0`.\n\nLas demás opciones:\n- **A** y **B** están mal formateadas y no son válidas sintácticamente.\n- **D** no es útil porque `duration !== 0` es verdadera para casi todos los casos excepto para el problema en cuestión, y no identifica correctamente una cadena vacía.",
    },
    {
      id: "q21",
      question:
        "A JavaScript developer has defined an array named 'customers' that contains a list of four customers (see below the question). The customers should be displayed on a web page like below. 1. Allison Smith 2. Ashley James 3. Jon Bond 4. Olivia Williams A function named 'displayCustomer' has been defined to display a customer on the web page by manipulating the DOM. It accepts two parameters, namely, 'number' and 'name'. \n\nWhat code should be used to iterate over the 'customers' array and display all the customers on the web page?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "customers.forEach((item, index) => displayCustomer(index+1, item));",
        B: "customers.forEach((item) => displayCustomer(customers.indexOf(item), item));",
        C: "customers.forEach((index) => displayCustomer(index+1, customers[index]));",
        D: "customers.forEach((index, item) => displayCustomer(index+1, item));",
      },
      code: "  const customers = ['Allison Smith', 'Ashley James', 'Jon Bond', 'Olivia Williams'];",
      explanation:
        "La opción **A** es la correcta porque usa el método `forEach()` pasando dos argumentos: el valor del elemento (`item`) y su índice (`index`). Luego, llama a `displayCustomer(index + 1, item)` para numerar del 1 al 4 correctamente junto al nombre del cliente.\n\n- **B** parece correcta, pero `customers.indexOf(item)` puede devolver un índice incorrecto si hay elementos duplicados.\n- **C** usa `index` como si fuera un índice, pero en realidad está recibiendo el valor del elemento, no el índice.\n- **D** invierte el orden de los parámetros de `forEach`, donde el primero debe ser el valor, y el segundo el índice, por lo tanto también es incorrecta.",
    },
    {
      id: "q22",
      question:
        "A developer created the function below to log messages on the server. It was decided that the Symbol primitive type would be used as the User ID since the value of a symbol would always be unique. But soon after the update, a TypeError was being thrown by the function. \n\nWhich of the following explain the reason?",
      type: "multiple choice",
      correct_options: ["A", "D", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "The function tries to implicitly coerce the id argument to a string.",
        B: "The symbol type cannot be explicitly coerced to string.",
        C: "The symbol type can only be implicitly coerced to a number.",
        D: "The symbol type cannot be implicitly coerced to a string.",
        E: "The symbol type can only be explicitly coerced to a string.",
      },
      code: '  function manageLogStatement(id) {\n  let statement = "User ID:" + id;\n  log(statement);\n  }',
      explanation:
        "La opción **A** es correcta porque el símbolo en JavaScript no se puede convertir implícitamente a una cadena, lo que provoca un error al intentar concatenarlo con un string. El operador `+` intenta convertir el valor de `id` a una cadena, lo que genera el error.\n\nLa opción **D** también es correcta porque los símbolos no se pueden convertir implícitamente a una cadena en JavaScript. Necesitan ser tratados de manera explícita para ser usados como cadenas.\n\nLa opción **E** es correcta porque los símbolos solo pueden ser convertidos explícitamente a una cadena utilizando el método `String(id)` o llamando directamente a su `toString()`.\n\nLas otras opciones son incorrectas porque los símbolos no pueden ser convertidos automáticamente ni implícitamente a números ni cadenas sin usar una conversión explícita.",
    },
    {
      id: "q23",
      question:
        "A developer of Cosmic Software Solutions has received the array of customers via an HTTP request (see below the question). She has noticed these two issues with this data: 1) 'Justin Sampson' should not be present in the array. 2) The customers should be arranged in ascending order. After fixing these issues, she needs to display the customers in a div element on a web page like below. \n\n'Alyson Macdonald | Ana Salas | Carrol Fox | Jan Ward | Natalia Wyatt' Which code statements can be used to get the given string for the requirement?",
      type: "multiple choice",
      correct_options: ["A", "D", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "customers.sort();",
        B: "customers.sort(0);",
        C: "customers.slice(3, 1);",
        D: "customers.splice(3, 1);",
        E: "customers.join(' | ');",
      },
      code: "  let customers = ['Jan Ward', 'Carrol Fox', 'Natalia Wyatt', 'Justin Sampson', 'Alyson Macdonald', 'Ana Salas' ];",
      explanation:
        "La opción A 'customers.sort();' ordena el array alfabéticamente en orden ascendente. La opción D 'customers.splice(3, 1);' elimina 'Justin Sampson' del array en la posición 3. Finalmente, la opción E 'customers.join(' | ');' combina los elementos del array en una cadena separada por ' | '. Estas tres acciones juntas resuelven el problema.",
    },
    {
      id: "q24",
      question:
        "A developer of Cosmic Software Solutions is building a web page that uses JavaScript code to retrieve the first name, last name, joining date, and salary of the selected employee from an external database and display it on the web page. However, the database does not always contain all the information about each employee. For instance, the last name of several employees is missing. If a value is missing or unexpected, the developer needs to show 'Not Available' in its place. She has written the following code to check the values returned by the database and display the required text accordingly. \n\nWhich of the following values would result in displaying 'Not Available' on the web page?",
      type: "multiple choice",
      correct_options: ["B", "C", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "'O'",
        B: "undefined",
        C: "null",
        D: '""',
        E: "{}",
      },
      code: "  function displayNotAvailable(str) {\n  console.log(`${str} not available. );\n  };\n  if (!lastName) {\n  displayNotAvailable('lastName');\n  }\n  if (!joiningDate) {\n  displayNotAvailable('joiningDate');\n  }\n  if (!salary) {\n  displayNotAvailable('salary');\n  }",
      explanation:
        "La función utiliza el operador '!' para comprobar si las variables no tienen un valor definido. Esto significa que 'undefined', 'null' y '{}' se consideran valores falsos, lo que hará que se ejecute la función 'displayNotAvailable' y se muestre el mensaje. La opción (cadena vacía) no es considerada falsy en este contexto.",
    },
    {
      id: "q25",
      question:
        "A developer is working on a web page for managing volunteers for a fundraising event organized by a non-profit company. An object named 'volunteer' has been defined to store information about a particular volunteer. When a volunteer works for a new company, then their email address also changes. \n\nWhat is the most suitable approach for updating the value of the 'email' property in the object?",
      type: "multiple choice",
      correct_options: ["D"],
      options: {
        A: "The object should be converted to an array since array elements can be reassigned values",
        B: "The variable should be declared using the Object constructor instead of the Object literal method.",
        C: "The variable should be declared using the let keyword to allow the changing of property values.",
        D: "The email property can be updated directly by executing: volunteer.email = 'joe@salesforce.com';",
      },
      code: "  const volunteer = {\n  name: \"Joe\",\n  email: 'joe@acme.org',\n  phone: '111-333-666',\n  active: true\n  };",
      explanation:
        "La opción D es la correcta porque se puede actualizar la propiedad 'email' directamente en un objeto, incluso si se usa 'const'. 'const' solo impide que se reasigne el objeto, pero sus propiedades pueden cambiarse. Las otras opciones no son apropiadas para actualizar la propiedad.",
    },
    {
      id: "q26",
      question:
        "A developer is working on an online course. Whenever a learner starts the course, a welcome message is displayed using the greeting function. During testing, it was discovered that some names cause this welcome message to be larger than the 75 characters that are available for the message. \n\nWhat code could be added to the function in order to return a welcome message without the name in those rare situations when the name is too large?",
      type: "multiple choice",
      correct_options: ["C"],
      options: {
        A: "if (greet.length > 75) return greet.replace(name);",
        B: "if (greet.length > 75) return greet.trim();",
        C: "if (greet.length > 75) return 'Welcome to the course!';",
        D: "if (greet > 75) return 'Welcome to the course!';",
      },
      code: "  function greeting(name) {\n  let greet = `Welcome to the course, ${name}!';\n  // Add code here\n  return greet;\n  }",
      explanation:
        "La opción C es correcta porque permite reemplazar el mensaje completo por 'Welcome to the course!' cuando el mensaje excede los 75 caracteres. Las otras opciones no solucionan el problema de manera adecuada.",
    },
    {
      id: "q27",
      question:
        "Which two code blocks meet the requirements for the 'checkNumber' function?",
      type: "multiple choice",
      correct_options: ["A", "C"],
      options: {
        A: "let num = parseFloat(fieldNum); return Number.isInteger(num);",
        B: "let num = fieldNum.parseFloat();return isInteger(num);",
        C: "let num = Number.parseFloat(fieldNum); return Number.isInteger(num);",
        D: "let num = parseFloat(fieldNum); return num.isInteger();",
      },
      code: "checkNumber(fieldNum) { // Add code here to meet the requirements } ",
      explanation:
        "Las opciones A y C son correctas, ya que ambas utilizan 'parseFloat' para convertir 'fieldNum' a un número flotante y luego verifican si es un número entero usando 'Number.isInteger()'. Las otras opciones contienen errores en la sintaxis o lógica.",
    },
    {
      id: "q28",
      question:
        "A developer of Cosmic Lights is working on a web page for a portal that shows compensation information of the employee or contractor who is currently logged in. The information is retrieved from a cloud-based datastore. If the user does not receive any benefits, then the datastore returns null, false, or 0 as the value of the 'benefits' property. A unique section should be displayed on the web page for such users. If the user receives benefits, then a non-empty object is returned as the value of the property. \n\nWhich of the following conditions can be used alone in the 'if statement' below to check if the current user does not receive benefits?",
      type: "multiple choice",
      correct_options: ["C", "D"],
      options: {
        A: "benefits == false",
        B: "benefits == null",
        C: "benefits == false || benefits == null",
        D: "benefits == 0 || benefits == null",
      },
      explanation:
        "Las opciones C y D son correctas porque verifican adecuadamente si el usuario no recibe beneficios, ya que 'false', 'null' y '0' son considerados valores falsos en JavaScript. Las otras opciones no cubren todos los posibles valores falsos que puede devolver la propiedad 'benefits'.",
    },
    {
      id: "q29",
      question: "Using the arrays in the code box. \n\nWhich statements would produce the array in the second box?",
      type: "multiple choice",
      correct_options: ["B", "D", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "concat(array1, array2)",
        B: "[array1, array2].flat()",
        C: "[array1, array2]",
        D: "array1.concat(array2)",
        E: "[ ...array1, ...array2]"
      },
      code: "const array1 = ['a', 'b', 'c', 'd'];\nconst array2 = [1, 2, 3, 4, 5];\n\n['a', 'b', 'c', 'd', 1, 2, 3, 4, 5]",
      explanation: "Las opciones correctas son B: '[array1, array2].flat()', D: 'array1.concat(array2)', y E: '[ ...array1, ...array2]'. Estas tres declaraciones utilizan el método 'flat()' de los arrays, el método 'concat()' de los arrays, y el operador de propagación para lograr los resultados deseados.\n\n**Método flat()**: Crea un nuevo array con todos los elementos de subarrays concatenados en ese array.\n\n**Método concat()**: Combina dos o más arrays. Este método es parte del prototipo del array, por lo que debe usarse como un método de uno de los arrays que se juntarán.\n\n**Operador de propagación**: Separa los elementos individuales de un array. Esos elementos pueden distribuirse y luego incluirse como parte de un nuevo array utilizando corchetes alrededor de la declaración.\n\nCombinar dos arrays dentro de los corchetes de un array simplemente creará un array de arrays, no un único array plano como en este caso.",
    },    
    {
      id: "q30",
      question:
        "For an online quiz application, whenever a text response is provided by a learner, exactly 50 characters of the response should be recorded. If the string is too short, characters should be added at the end; if the string is too long, it should be truncated. A developer has set up the following function for this purpose. \n\nWhich code statement could be added in place of the comment in order to meet this requirement?",
      type: "multiple choice",
      correct_options: ["A"],
      options: {
        A: "return newStr.padEnd(50, '.').substring(0, 50);",
        B: "return newStr.padEnd(50, '.');",
        C: "return newStr.substring(0, 50);",
        D: "return newStr.padStart(50, '.').substring(0, 50);",
      },
      explanation:
        "La opción A es la solución correcta porque agrega el carácter '.' al final de la cadena hasta que tenga 50 caracteres y luego la recorta a exactamente 50 caracteres. Las otras opciones no manejan correctamente el recorte o utilizan métodos de relleno incorrectos.",
    },
    {
      id: "q31",
      question:
        " \n\nWhat will be the outcome of the JavaScript code below when it is executed?",
      type: "multiple choice",
      correct_options: ["B"],
      options: {
        A: "page.changeColor('black') will throw an error message.",
        B: "The 'color' property will be updated to 'black'.",
        C: "The 'color' property will become read-only.",
        D: "page.changeColor('black') will return the method body.",
      },
      explanation:
        "La respuesta correcta es B, ya que al llamar al método 'changeColor' con el argumento 'black', se actualizará la propiedad 'color' de la página. Las otras opciones son interpretaciones incorrectas de lo que sucede cuando se ejecuta el método.",
    },
    {
      id: "q32",
      question:
        "An online course requires a function for evaluating text input for questions. The function receives a string named 'str' that represents user input and another string named 'phrase' that represents the correct response. If 'str' contains 'phrase', then the user input is correct and should be prepared and sent to the 'recordQuestion' function. The current function doesn't meet the requirements.",
      type: "multiple choice",
      correct_options: ["C"],
      options: {
        A: "if (str.toLowerCase().includes(phrase)) { recordQuestion().replace(/ /g, '_').substring(50); }",
        B: "if (str.includes(phrase).toLowerCase()) { recordQuestion(str.replace(' ', '_').substring(50)); }",
        C: "if (str.toLowerCase().includes(phrase)) { recordQuestion(str.replace(/ /g, '_').substring(0, 50)); }",
        D: "if (str.toLowerCase().includes(phrase)) { recordQuestion().replace(' ', '_').substring(0, 50)); }",
      },
      explanation:
        "La opción C es la correcta porque convierte la cadena a minúsculas antes de verificar si contiene la frase, reemplaza los espacios con guiones bajos y recorta la cadena a 50 caracteres. Las otras opciones tienen errores en la lógica de la comparación o el procesamiento de la cadena.",
    },
    {
      id: "q33",
      question:
        "If the JSON.parse() method is applied to each of the following strings.\n\nWhich will parse without an error?",
      type: "multiple choice",
      correct_options: ["D"],
      options: {
        A: "'string'",
        B: '"string"',
        C: "'string'",
        D: "\"'string'\"",
      },
      explanation:
        "La opción D es la correcta porque es una cadena válida que se puede analizar correctamente con JSON.parse(). Las opciones A y C contienen comillas simples dentro de la cadena, lo cual no es válido para JSON. La opción B es una cadena válida en JavaScript, pero no para JSON.",
    },
    {
      id: "q34",
      question:
        "The variables below have been declared and the associated values assigned. \n\nWhich statements will produce a Boolean value of true?",
      type: "multiple choice",
      correct_options: ["A", "B", "E"],
      options: {
        A: "val1 == val2;",
        B: "val1 === Number(val2);",
        C: "val1 && val2;",
        D: "val1 || val2;",
        E: "!! val2;",
      },
      explanation:
        "Las opciones A, B y E son correctas. La opción A realiza una comparación de igualdad, la opción B verifica si el valor es estrictamente igual, y la opción E convierte el valor de 'val2' a un valor booleano. Las otras opciones no generan un valor booleano de 'true' según los valores de 'val1' y 'val2'.",
    },
    {
      id: "q35",
      question:
        "A client-side application uses a JavaScript function to send reminder emails to a small group of sales representatives using the code below. The declaration of the 'emails' variable that was supposedly located after the sendReminders() function call is now missing. \n\nWhat should a developer add to properly declare the variable?",
      type: "multiple choice",
      options: {
        A: "var emails;",
        B: "let emails;",
        C: "const emails;",
        D: "global emails;",
      },
      correct_options: ["A"],
      explanation:
        "La opción A es la correcta, ya que 'var' declara una variable en el ámbito global o de función, lo cual es adecuado si 'emails' se utiliza en todo el script. 'let' y 'const' también podrían usarse, pero 'var' es más apropiado aquí si no se pretende usar 'emails' como una constante.",
    },
    {
      id: "q36",
      question: "A senior developer has instructed her team to use strict mode when writing code. \n\nHow would the enabled feature have an effect on the following code?",
      type: "multiple choice",
      options: {
        A: "An error will be thrown since accountName is assigned to a value but has not been declared.",
        B: "Strict mode prevents variable hoisting with default initialization, so accountType needs to be declared at the top.",
        C: "Strict mode forces variables to be declared using let or const keywords to avoid hoisting.",
        D: "An error will be thrown since accountType is declared outside the function where it is used."
      },
      correct_options: ["A"],
      explanation: "En modo estricto, JavaScript lanzará un error si se asigna un valor a una variable que no ha sido previamente declarada. En este caso, 'accountName' no está declarada antes de su asignación, lo que provoca un error."
    },
    {
      id: "q37",
      question: "A developer is building a shopping cart page that will allow a customer to see the price and quantity of each item added to the cart as well as total price of the items. An array named 'items' has been defined to store the name, price, and quantity of each item. The following value has been assigned to the array for the purpose of testing. \n\nWhat code should be used to calculate the total price of the items?",
      type: "multiple choice",
      options: {
        A: "const total = items.reduce((accumulator, currentValue) => { return (accumulator + currentValue.price * currentValue.quantity) }, 0);",
        B: "const total = items.reduce((accumulator, currentValue, 0) => { return (accumulator + currentValue.price * currentValue.quantity) });",
        C: "const total = items.reduce((previousValue, currentValue) => { return (previousValue.price * previousValue.quantity + currentValue.price * currentValue.quantity) }, 0);",
        D: "const total = items.reduce((previousValue, currentValue, 0) => { return (previousValue.price * previousValue.quantity + currentValue.price * currentValue.quantity) });"
      },
      correct_options: ["A"],
      explanation: "La opción A es correcta porque utiliza el método 'reduce' para acumular el precio total de los artículos. La clave está en multiplicar 'price' por 'quantity' y luego acumular el resultado en el acumulador."
    },
    {
      id: "q38",
      question: "A junior software developer who is working on a task management app has written the JavaScript code below for the purpose of testing a functionality. \n\nWhat will be displayed in the console when this code is executed?",
      type: "multiple choice",
      options: {
        A: "undefined true true",
        B: "0 undefined true",
        C: "0 true true",
        D: "undefined undefined true"
      },
      correct_options: ["A"],
      explanation: "El primer 'console.log' imprimirá 'undefined' porque la variable 'task' no está definida. El segundo imprimirá 'true' porque la condición 'task !== null' es verdadera. El tercer 'console.log' imprimirá también 'true' porque la condición 'task === undefined' es verdadera."
    },
    {
      id: "q39",
      question: " \n\nOnce the code below has completed, what values and order would the array contain?",
      code: "let array = ['one', 1, 'two', 2, 3, 4];\nfor (let val of array) {\n  if (val === 3) {\n    array.push('three');\n  }\n}\narray.splice(1, 1);\narray.splice(2, 3, 'four');",
      type: "multiple choice",
      options: {
        A: "['one', 'two', 'three', 'four']",
        B: "['one', 1, 4, 'three', 'four']",
        C: "['one', 'two', 'four', 'three']",
        D: "['one', 1, 'two', 'four', 'three']"
      },
      correct_options: ["C"],
      explanation: "El bucle 'for' recorre el array y cuando llega al valor 3, se agrega 'three'. Luego, 'splice' elimina el valor en la posición 1 (el número 1) y reemplaza los elementos desde la posición 2 por 'four'. El resultado es el array ['one', 'two', 'four', 'three']."
    },
    {
      id: "q40",
      question: "A developer needs to define a JavaScript variable named 'totalCost', which will be used to store the total cost of product items that are contained in a shopping cart. \n\nHow should this variable be declared and initialized?",
      type: "multiple choice",
      options: {
        A: "var totalCost = On;",
        B: "totalCost = new float(0.0);",
        C: "let totalCost = 0;",
        D: "float totalCost = 0.0;"
      },
      correct_options: ["C"],
      explanation: "La opción C es la correcta porque 'let' es la forma adecuada de declarar una variable en JavaScript. 'totalCost' debe inicializarse en 0 ya que se usará para almacenar el costo total de los productos."
    },    
    {
      id: "q41",
      question: "A program contains two objects named userObj1 and userObj2, as shown below. What will be the output of the console. \n\nlog statements at the end of the loop?",
      type: "multiple choice",
      options: {
        A: "[index=0][User id:1][User name:Carlos] [index=1]2",
        B: "[index=0][User id:1][User name: Carlos] [index=1][User id:2][User name: Luis]",
        C: "[index=0]1 [index=1][User id:2][User name: Luis]",
        D: "[index=0]1 [index=1]2"
      },
      correct_options: ["A"],
      explanation: "En este caso, el primer 'console.log' muestra los datos del primer objeto (userObj1), y el segundo muestra solo el valor de 2, que corresponde al segundo objeto. Esto es debido a que no se están accediendo correctamente a los valores del segundo objeto."
    },
    {
      id: "q42",
      question: "Which of the following operations would result in NaN being placed in variable 'num'?",
      type: "multiple choice",
      options: {
        A: "const num = 1/ Number('1000');",
        B: "const num = 1/ new Number(true);",
        C: "const num = 1/false;",
        D: "const num = 1/ Number('true');"
      },
      correct_options: ["D"],
      explanation: "La opción D es correcta porque el intento de dividir 1 entre 'Number('true')' no dará un número válido, lo que resulta en NaN. 'true' no se puede convertir a un número válido, lo que da como resultado NaN."
    },
    {
      id: "q43",
      question: "There is a requirement to add functionality in a web application that would allow a member to update their basic personal information. A frontend developer has written the following JavaScript code to check if a variable is properly assigned to a value. \n\nWhat will be the result when the printJobTitle() function is called?",
      type: "multiple choice",
      options: {
        A: "Error will be thrown since the 'jobTitle' variable is declared twice.",
        B: "'I am an Engineer' will be logged in the debugging console.",
        C: "The printJobTitle() function will not be able to access the 'jobTitle' variable.",
        D: "'I am an Architect' will be logged in the debugging console."
      },
      correct_options: ["B"],
      explanation: "En este caso, la variable 'jobTitle' es declarada y asignada correctamente, y la función 'printJobTitle()' muestra 'I am an Engineer'. No hay ningún error de declaración, y el acceso a la variable es correcto."
    },
    {
      id: "q44",
      question: "A developer needs to convert customer data stored in a JavaScript object into JSON format and send it to a remote endpoint. \n\nWhich method of the JSON object should be used for the conversion?",
      type: "multiple choice",
      options: {
        A: "JSON.stringify()",
        B: "JSON.parse()",
        C: "JSON.serialize()",
        D: "JSON.send()"
      },
      correct_options: ["A"],
      explanation: "La opción A es correcta. 'JSON.stringify()' convierte un objeto JavaScript en una cadena JSON que puede enviarse a un servidor. 'JSON.parse()' hace lo contrario, es decir, convierte una cadena JSON en un objeto JavaScript."
    }    
  ];
}
