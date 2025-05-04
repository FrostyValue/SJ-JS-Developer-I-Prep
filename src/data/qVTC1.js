export default function questions1() {
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
      code: "/*\n\tExpected Output:\n\tIndex: 0, ISBN: 0-5153-0346-1, Price: 24.95\n\tIndex: 1, ISBN: 0-8522-3763-4, Price: 6.99\n\tIndex: 2, ISBN: 0-4567-5678-2, Price: 15.99\n\t…\n*/\nfor (let index=0; index < jsObject.length; index++) {\n\tconsole.log('Index: ', index, ', ISBN: ', /* ??? */, ', Price: ', /* ??? */);\n}",
      explanation:
        "La opción correcta es la C: `jsObject[index].isbn, jsObject[index].price`. Esto se debe a que `jsObject` es un arreglo de objetos, y cada objeto contiene las propiedades 'isbn' y 'price'. Para acceder a cada elemento del arreglo se usa `jsObject[index]`, y luego para acceder a las propiedades del objeto se usa la notación punto: `.isbn` y `.price`.\n\nLas otras opciones son incorrectas por lo siguiente:\n- A: `jsObject[index][isbn]` intenta acceder a la propiedad con una variable llamada `isbn`, pero `isbn` no está definida como variable, por lo tanto lanzará un error.\n- B: `jsObject.isbn` accede a una propiedad `isbn` directamente en el arreglo `jsObject`, lo cual no tiene sentido porque `jsObject` es un arreglo, no un objeto con esas propiedades.\n- D: `jsObject[isbn]` accede a un índice del arreglo usando una variable `isbn` no definida, lo cual también es incorrecto.",
    },
    {
      id: "q2",
      question:
        "A developer needs to send the employee data below in JSON format to a remote server for the creation of a new employee record. \n\nWhich of the following represents a properly formatted JSON string that can be used as the body of the POST request?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: 'const data = { "name": Jon Smith, "title": IT Manager, salary: 100000, "email": jsmith@cosmicinnovation.com };',
        B: 'const data = \'{"name": "Jon Smith", "title": "IT Manager", "salary": 100000, "email": "jsmith@cosmicinnovation.com"}\';',
        C: "const data = '{'name': 'Jon Smith', 'title': 'IT Manager', 'salary': 100000, 'email': 'jsmith@cosmicinnovation.com' ]';",
        D: "const data =\"{ 'name': 'Jon Smith', 'title': 'IT Manager', 'salary': 100000, 'email': 'jsmith@cosmicinnovation.com']\";",
      },
      code: "name = Jon Smith title = IT Manager salary = 100000 email = jsmith@cosmicinnovation.com",
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
      code: "let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];\nlet peak = [];\nfor (let month of months) {\n\tif (month > 3) {\n\t\tpeak.push(month);\n\t}\n\tif (month > 5) {\n\t\tpeak.pop();\n\t}\n\tif (month > 7) {\n\t\tpeak.unshift(month);\n\t}\n\tif (month > 9) {\n\t\tpeak.shift();\n\t}\n}",
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
      code: "let days = [1, 2, 3, 4, 5, 6, 7];\nfor (let num of days) {\n    if (num == 3) {\n        days.splice(1, 2);\n    } else if (num == 6) {\n        days.splice(1, 3);\n    }\n}\nconsole.log(days);",
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
      code: "/*\nCK-CM => Chicken Marsala\nCK-KFC => Kentucky Fried Chicken\nCK-KPC => Kung Pao Chicken\n*/\nif (xhr.readyState === XMLHttpRequest.DONE) {\n\tconst data = xhr.responseText;\n\tconst courses = data.courses;\n\tlet string = '';\n\tfor (let item = 0; item < courses.length; item++) {\n\t\tstring += courses[item].code + ' => ' + courses[item].name + '<br/>';\n\t}\n\tconsole.log(string);\n}",
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
      code: "  function convertLearnerDate(date) {\n    // Add code to convert the passed date string into milliseconds.\n  }\n  function getCurrentDate() {\n    // Add code to get the current date in milliseconds.\n  }",
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
      code: "function manageLogStatement(id) {\n\tlet statement = \"User ID:\" + id;\n\tlog(statement);\n}",
      explanation:
        "La opción **A** es correcta porque el símbolo en JavaScript no se puede convertir implícitamente a una cadena, lo que provoca un error al intentar concatenarlo con un string. El operador `+` intenta convertir el valor de `id` a una cadena, lo que genera el error.\n\nLa opción **D** también es correcta porque los símbolos no se pueden convertir implícitamente a una cadena en JavaScript. Necesitan ser tratados de manera explícita para ser usados como cadenas.\n\nLa opción **E** es correcta porque los símbolos solo pueden ser convertidos explícitamente a una cadena utilizando el método `String(id)` o llamando directamente a su `toString()`.\n\nLas otras opciones son incorrectas porque los símbolos no pueden ser convertidos automáticamente ni implícitamente a números ni cadenas sin usar una conversión explícita.",
    },
    {
      id: "q23",
      question:
        "A developer of Cosmic Software Solutions has received the array of customers via an HTTP request (see below the question). She has noticed these two issues with this data: \n1) 'Justin Sampson' should not be present in the array. \n2) The customers should be arranged in ascending order. \nAfter fixing these issues, she needs to display the customers in a div element on a web page like below. \n\nWhich code statements can be used to get the given string for the requirement?",
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
      code: "//Data result expected \n'Alyson Macdonald | Ana Salas | Carrol Fox | Jan Ward | Natalia Wyatt' \n\n //Current data \nlet customers = ['Jan Ward', 'Carrol Fox', 'Natalia Wyatt', 'Justin Sampson', 'Alyson Macdonald', 'Ana Salas' ];",
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
      code: "function displayNotAvailable(str) {\n\tconsole.log(`${str} not available.`);\n}\n\nif (!lastName) {\n\tdisplayNotAvailable('lastName');\n}\nif (!joiningDate) {\n\tdisplayNotAvailable('joiningDate');\n}\nif (!salary) {\n\tdisplayNotAvailable('salary');\n}",
      explanation:
        "La función utiliza el operador '!' para comprobar si las variables no tienen un valor definido. Esto significa que 'undefined', 'null' y '{}' se consideran valores falsos, lo que hará que se ejecute la función 'displayNotAvailable' y se muestre el mensaje. La opción (cadena vacía) no es considerada falsy en este contexto.",
    },
    {
      id: "q25",
      question:
        "A developer is working on a web page for managing volunteers for a fundraising event organized by a non-profit company. An object named 'volunteer' has been defined to store information about a particular volunteer. When a volunteer works for a new company, then their email address also changes. \n\nWhat is the most suitable approach for updating the value of the 'email' property in the object?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
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
      number_of_correct_answers: 1,
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
      number_of_correct_answers: 2,
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
      number_of_correct_answers: 2,
      options: {
        A: "benefits == false",
        B: "benefits == null",
        C: "benefits == false || benefits == null",
        D: "benefits == 0 || benefits == null",
      },
      code: "if (/* condición aquí */) {\n\tshowNoBenefitsSection();\n}",
      explanation:
        "Las opciones C y D son correctas porque verifican adecuadamente si el usuario no recibe beneficios, ya que 'false', 'null' y '0' son considerados valores falsos en JavaScript. Las otras opciones no cubren todos los posibles valores falsos que puede devolver la propiedad 'benefits'.",
    },
    {
      id: "q29",
      question:
        "Using the arrays in the code box. \n\nWhich statements would produce the array in the second box?",
      type: "multiple choice",
      correct_options: ["B", "D", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "concat(array1, array2)",
        B: "[array1, array2].flat()",
        C: "[array1, array2]",
        D: "array1.concat(array2)",
        E: "[ ...array1, ...array2]",
      },
      code: "const array1 = ['a', 'b', 'c', 'd'];\nconst array2 = [1, 2, 3, 4, 5];\n\n['a', 'b', 'c', 'd', 1, 2, 3, 4, 5]",
      explanation:
        "Las opciones correctas son B: '[array1, array2].flat()', D: 'array1.concat(array2)', y E: '[ ...array1, ...array2]'. Estas tres declaraciones utilizan el método 'flat()' de los arrays, el método 'concat()' de los arrays, y el operador de propagación para lograr los resultados deseados.\n\n**Método flat()**: Crea un nuevo array con todos los elementos de subarrays concatenados en ese array.\n\n**Método concat()**: Combina dos o más arrays. Este método es parte del prototipo del array, por lo que debe usarse como un método de uno de los arrays que se juntarán.\n\n**Operador de propagación**: Separa los elementos individuales de un array. Esos elementos pueden distribuirse y luego incluirse como parte de un nuevo array utilizando corchetes alrededor de la declaración.\n\nCombinar dos arrays dentro de los corchetes de un array simplemente creará un array de arrays, no un único array plano como en este caso.",
    },
    {
      id: "q30",
      question:
        "For an online quiz application, whenever a text response is provided by a learner, exactly 50 characters of the response should be recorded. If the string is too short, characters should be added at the end; if the string is too long, it should be truncated. A developer has set up the following function for this purpose. \n\nWhich code statement could be added in place of the comment in order to meet this requirement?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "return newStr.padEnd(50, '.').substring(0, 50);",
        B: "return newStr.padEnd(50, '.');",
        C: "return newStr.substring(0, 50);",
        D: "return newStr.padStart(50, '.').substring(0, 50);",
      },
      code: "function formatResponse(response) {\n\tlet newStr = response;\n\t// Code inserted here\n}",
      explanation:
        "La correcta es 'return newStr.padEnd(50, '.').substring(0, 50);' porque agrega el carácter '.' al final de la cadena hasta que tenga 50 caracteres y luego la recorta a exactamente 50 caracteres. Las otras opciones no manejan correctamente el recorte o utilizan métodos de relleno incorrectos.",
    },
    {
      id: "q31",
      question:
        "What will be the outcome of the JavaScript code below when it is executed?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "page.changeColor('black') will throw an error message.",
        B: "The 'color' property will be updated to 'black'.",
        C: "The 'color' property will become read-only.",
        D: "page.changeColor('black') will return the method body.",
      },
      code: "class Page {\n\t#color = 'white';\n\n\tget color() {\n\t\treturn this.#color;\n\t}\n\n\tchangeColor(newColor) {\n\t\tthis.#color = newColor;\n\t}\n}\n\nconst page = new Page();\npage.changeColor('black');",
      explanation:
        "La respuesta correcta es 'The 'color' property will be updated to 'black'.', ya que al llamar al método 'changeColor' con el argumento 'black', se actualiza la propiedad privada '#color' del objeto. Las demás opciones no describen correctamente el comportamiento del código.",
    },    
    {
      id: "q32",
      question:
        "An online course requires a function for evaluating text input for questions. The function receives a string named 'str' that represents user input and another string named 'phrase' that represents the correct response. If 'str' contains 'phrase', then the user input is correct and should be prepared and sent to the 'recordQuestion' function. The current function doesn't meet the requirements.",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "if (str.toLowerCase().includes(phrase)) { recordQuestion().replace(/ /g, '_').substring(50); }",
        B: "if (str.includes(phrase).toLowerCase()) { recordQuestion(str.replace(' ', '_').substring(50)); }",
        C: "if (str.toLowerCase().includes(phrase)) { recordQuestion(str.replace(/ /g, '_').substring(0, 50)); }",
        D: "if (str.toLowerCase().includes(phrase)) { recordQuestion().replace(' ', '_').substring(0, 50)); }",
      },
      code: "function evaluate(str, phrase) {\n\t  if (str.includes(phrase)) {\n\t\t    recordQuestion(str);\n\t  }\n}",
      explanation:
        "La opción C es la correcta porque convierte la cadena a minúsculas antes de verificar si contiene la frase, reemplaza los espacios con guiones bajos y recorta la cadena a 50 caracteres. Las otras opciones tienen errores en la lógica de la comparación o el procesamiento de la cadena.",
    },
    {
      id: "q33",
      question:
        "If the JSON.parse() method is applied to each of the following strings.\n\nWhich will parse without an error?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
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
      number_of_correct_answers: 3,
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
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "var emails;",
        B: "let emails;",
        C: "const emails;",
        D: "global emails;",
      },
      explanation:
        "La opción A es la correcta, ya que 'var' declara una variable en el ámbito global o de función, lo cual es adecuado si 'emails' se utiliza en todo el script. 'let' y 'const' también podrían usarse, pero 'var' es más apropiado aquí si no se pretende usar 'emails' como una constante.",
    },
    {
      id: "q36",
      question:
        "A senior developer has instructed her team to use strict mode when writing code. How would the enabled feature have an effect on the following code?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "An error will be thrown since accountName is assigned to a value but has not been declared.",
        B: "Strict mode prevents variable hoisting with default initialization, so accountType needs to be declared at the top.",
        C: "Strict mode forces variables to be declared using let or const keywords to avoid hoisting.",
        D: "An error will be thrown since accountType is declared outside the function where it is used.",
      },
      code: '"use strict"; // enable strict mode\n\ncreateAccount("ACME", "Partner");\n\nfunction createAccount(name, type) {\n  accountName = name;\n  accountType = type;\n  console.log(accountName + " is a " + accountType);\n}\n\nvar accountType;',
      explanation:
        "La opción correcta es la A: 'An error will be thrown since accountName is assigned to a value but has not been declared.'.\n\n**Explicación detallada:**\n\n1. **Strict Mode:** Al habilitar strict mode con 'use strict', las variables deben ser declaradas explícitamente antes de ser utilizadas o asignadas a un valor. De lo contrario, se lanza un error.\n\n2. **Error en accountName:** En este código, la variable 'accountName' se utiliza dentro de la función 'createAccount' sin haber sido declarada previamente. Esto hace que se lance un error en tiempo de ejecución bajo strict mode.\n\n3. **Hoisting y var:** Aunque el uso de 'var' permite que 'accountType' sea hoisted (declarado y almacenado en memoria antes de la ejecución), el strict mode no permite el uso de variables no declaradas, como es el caso de 'accountName'.\n\nPara corregir el error, 'accountName' debe ser declarado explícitamente, por ejemplo, usando 'let', 'const' o 'var':\n```javascript\nfunction createAccount(name, type) {\n  let accountName = name; // declaración explícita\n  accountType = type;\n  console.log(accountName + \" is a \" + accountType);\n}\n```",
    },
    {
      id: "q37",
      question:
        "A developer is building a shopping cart page that will allow a customer to see the price and quantity of each item added to the cart as well as total price of the items. An array named 'items' has been defined to store the name, price, and quantity of each item. The following value has been assigned to the array for the purpose of testing. \n\nWhat code should be used to calculate the total price of the items?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "const total = items.reduce((accumulator, currentValue) => { return (accumulator + currentValue.price * currentValue.quantity) }, 0);",
        B: "const total = items.reduce((accumulator, currentValue, 0) => { return (accumulator + currentValue.price * currentValue.quantity) });",
        C: "const total = items.reduce((previousValue, currentValue) => { return (previousValue.price * previousValue.quantity + currentValue.price * currentValue.quantity) }, 0);",
        D: "const total = items.reduce((previousValue, currentValue, 0) => { return (previousValue.price * previousValue.quantity + currentValue.price * currentValue.quantity) });",
      },
      code: 'let items = [\n  {name: "Laptop X1000", price: 999, quantity: 1},\n  {name: "Tablet P500", price: 799, quantity: 2},\n  {name: "Phone Z100", price: 499, quantity: 3}\n];',
      explanation:
        "La opción correcta es la A: 'const total = items.reduce((accumulator, currentValue) => { return (accumulator + currentValue.price * currentValue.quantity) }, 0);'.\n\n**Explicación detallada:**\n\n1. **Método reduce():** Este método permite reducir un array a un único valor al ejecutar una función callback en cada elemento del array. La función recibe dos argumentos clave: 'accumulator' (acumulador) y 'currentValue' (valor actual).\n\n2. **InitialValue:** Aquí el acumulador comienza con el valor 0 para asegurar que los cálculos sean precisos y no dependan del primer elemento del array (que es un objeto).\n\n**Ejemplo práctico:**\n```javascript\nconst total = items.reduce((accumulator, currentValue) => {\n  return accumulator + (currentValue.price * currentValue.quantity);\n}, 0);\nconsole.log(total); // Resultado esperado: 4993\n```",
    },
    {
      id: "q38",
      question:
        "A junior software developer who is working on a task management app has written the JavaScript code below for the purpose of testing a functionality. \n\nWhat will be displayed in the console when this code is executed?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "undefined true true",
        B: "0 undefined true",
        C: "0 true true",
        D: "undefined undefined true",
      },
      code: "let numberOfTasks;\nlet taskRequired;\nlet taskEmpty;\nlet currentTask = null;\nlet tasks = ['Water the plants', 'Cook dinner'];\n\nif (tasks.length === 0) {\n  numberOfTasks = 0;\n}\n\nif (currentTask == undefined && currentTask == null) {\n  taskRequired = true;\n}\n\nif (currentTask == \"\" || currentTask == null) {\n  taskEmpty = true;\n}\n\nconsole.log(numberOfTasks, taskRequired, taskEmpty);",
      explanation:
        "La opción correcta es la A: 'undefined true true'.\n\n**Explicación detallada:**\n\n1. **Primera declaración if:** `tasks.length === 0` evalúa como false porque hay dos elementos en el array 'tasks'. Por lo tanto, 'numberOfTasks' no se modifica y permanece como 'undefined'.\n\n2. **Segunda declaración if:** `currentTask == undefined && currentTask == null` evalúa como true porque 'null' es igual a 'undefined' y también igual a 'null'. Esto establece 'taskRequired' como true.\n\n3. **Tercera declaración if:** `currentTask == \"\" || currentTask == null` evalúa como true debido a que 'currentTask' es null. Esto establece 'taskEmpty' como true.\n\n**Resultado final:** 'undefined true true' se registra en la consola.",
    },
    {
      id: "q39",
      question:
        "Once the code below has completed, what values and order would the array contain?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "['one', 'two', 'three', 'four']",
        B: "['one', 1, 4, 'three', 'four']",
        C: "['one', 'two', 'four', 'three']",
        D: "['one', 1, 'two', 'four', 'three']",
      },
      code: "let array = ['one', 1, 'two', 2, 3, 4];\n\nfor (let val of array) {\n  if (val === 3) {\n    array.push('three');\n  }\n}\n\narray.splice(1, 1);\narray.splice(2, 3, 'four');",
      explanation:
        "La opción correcta es la D: '['one', 1, 'two', 'four', 'three']'.\n\n**Explicación detallada:**\n\n1. **Push:** Se agrega 'three' al final del array. Ahora el array es `['one', 1, 'two', 2, 3, 4, 'three']`.\n\n2. **Primer splice:** `array.splice(1, 1)` elimina el segundo elemento del array (valor `1`). El array ahora es `['one', 'two', 2, 3, 4, 'three']`.\n\n3. **Segundo splice:** `array.splice(2, 3, 'four')` elimina tres elementos desde la posición 2 (`2, 3, 4`) y agrega 'four' en esa posición. El array final es `['one', 'two', 'four', 'three']`.",
    },
    {
      id: "q40",
      question:
        "A developer needs to define a JavaScript variable named 'totalCost', which will be used to store the total cost of product items that are contained in a shopping cart. \n\nHow should this variable be declared and initialized?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "var totalCost = On;",
        B: "totalCost = new float(0.0);",
        C: "let totalCost = 0;",
        D: "float totalCost = 0.0;",
      },
      explanation:
        "La opción C es la correcta porque 'let' es la forma adecuada de declarar una variable en JavaScript. 'totalCost' debe inicializarse en 0 ya que se usará para almacenar el costo total de los productos.",
    },
    {
      id: "q41",
      question:
        "A program contains two objects named userObj1 and userObj2, as shown below. What will be the output of the console.log statements at the end of the loop?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "[index=0][User id:1][User name:Carlos] [index=1]2",
        B: "[index=0][User id:1][User name: Carlos] [index=1][User id:2][User name: Luis]",
        C: "[index=0]1 [index=1][User id:2][User name: Luis]",
        D: "[index=0]1 [index=1]2",
      },
      code: 'const userObj1 = {\n  id: 1,\n  name: "Carlos",\n  toString: function () {\n    return `[User id:${this.id}] [User name:${this.name}]`;\n  }\n};\n\nconst userObj2 = {\n  id: 2,\n  name: "Luis",\n  toString: function () {\n    return `[User id:${this.id}] [User name:${this.name}]`;\n  },\n  valueOf: function () {\n    return this.id;\n  }\n};\n\nlet userArray = new Array(userObj1, userObj2);\nuserArray.forEach((user, index) => {\n  console.log("[index=" + index + "]" + user);\n});',
      explanation:
        "La opción correcta es la A: '[index=0][User id:1][User name:Carlos] [index=1]2'.\n\n**Explicación detallada:**\n\n1. **Uso de toString():** Cuando un objeto se convierte implícitamente en cadena mediante el operador '+', primero intenta invocar el método `toString()` del objeto.\n\n2. **Uso de valueOf():** Para conversiones numéricas, el método `valueOf()` tiene prioridad sobre el método `toString()`. En este caso, para `userObj2`, el método `valueOf()` devuelve su `id` (2), lo que resulta en que se imprima '[index=1]2'.\n\n3. **Resultado:** Para `userObj1`, al no tener el método `valueOf()` pero sí un método `toString()`, se usa el método `toString()` y se imprime '[index=0][User id:1][User name:Carlos]'.",
    },
    {
      id: "q42",
      question:
        "Which of the following operations would result in NaN being placed in variable 'num'?",
      type: "multiple choice",
      options: {
        A: "const num = 1/ Number('1000');",
        B: "const num = 1/ new Number(true);",
        C: "const num = 1/false;",
        D: "const num = 1/ Number('true');",
      },
      correct_options: ["D"],
      explanation:
        "La opción D es correcta porque el intento de dividir 1 entre 'Number('true')' no dará un número válido, lo que resulta en NaN. 'true' no se puede convertir a un número válido, lo que da como resultado NaN.",
    },
    {
      id: "q43",
      question:
        "There is a requirement to add functionality in a web application that would allow a member to update their basic personal information. A frontend developer has written the following JavaScript code to check if a variable is properly assigned to a value. What will be the result when the printJobTitle() function is called?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Error will be thrown since the 'jobTitle' variable is declared twice.",
        B: "'I am an Engineer' will be logged in the debugging console.",
        C: "The printJobTitle() function will not be able to access the 'jobTitle' variable.",
        D: "'I am an Architect' will be logged in the debugging console.",
      },
      code: "let jobTitle = 'Engineer';\n\nfunction printJobTitle() {\n  changeJobTitle();\n  console.log('I am an ' + jobTitle);\n}\n\nfunction changeJobTitle() {\n  let jobTitle = 'Architect';\n}",
      explanation:
        "La opción correcta es la B: 'I am an Engineer' will be logged in the debugging console.\n\n**Explicación detallada:**\n\n1. **Ámbito de las variables:** La variable `jobTitle` declarada dentro de la función `changeJobTitle()` es local a esa función y no afecta la variable global `jobTitle`. Por lo tanto, cuando `printJobTitle()` intenta acceder a `jobTitle`, encuentra la variable global.\n\n2. **Búsqueda en la cadena de alcance:** Cuando la declaración `console.log` en `printJobTitle()` se ejecuta, el motor de JavaScript realiza una búsqueda de la variable `jobTitle`. Primero busca dentro de la función `printJobTitle()`. Cuando no encuentra una declaración allí, continúa subiendo por la cadena de alcance hasta encontrar la variable global `jobTitle`.\n\n**Resultado:** La variable global tiene el valor `'Engineer'`, que se registra en la consola.",
    },
    {
      id: "q44",
      question:
        "A developer needs to convert customer data stored in a JavaScript object into JSON format and send it to a remote endpoint. Which method of the JSON object should be used for the conversion?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "JSON.stringify()",
        B: "JSON.parse()",
        C: "JSON.serialize()",
        D: "JSON.send()",
      },
      code: "const customer = {\n  firstName: 'Olivia',\n  lastName: 'Parker',\n};",
      explanation:
        "La opción correcta es la A: 'JSON.stringify()'.\n\n**Explicación detallada:**\n\n1. **Uso de JSON.stringify():** Este método se utiliza para convertir un objeto de JavaScript en una cadena JSON. Esto es útil para enviar datos a un servidor remoto mediante una solicitud HTTP.\n\n2. **JSON.parse():** Este método realiza el proceso inverso, deserializando una cadena JSON en un objeto de JavaScript.\n\n3. **Métodos inválidos:** Tanto `JSON.serialize()` como `JSON.send()` no son métodos válidos de la biblioteca JSON.",
    },
    {
      id: "q45",
      question: "A developer receives a comment from the Tech Lead that the code given below has an error. Which line edit should be made to make this code run?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "01 let monthName = 'July';",
        B: "02 let year = 2019;",
        C: "02 const year = 2020;",
        D: "03 if (year == 2019) {"
      },
      code: "const monthName = 'July';\nconst year = 2019;\nif (year === 2019) {\n  monthName = 'June';\n}",
      explanation: "La opción correcta es la A: '01 let monthName = 'July';'.\n\n**Explicación detallada:**\n\n1. **Motivo del error:** La variable `monthName` está declarada como `const`, lo que significa que su valor no puede ser reasignado después de la inicialización. Sin embargo, dentro del bloque `if`, hay un intento de reasignar el valor de `monthName` a `'June'`, lo que genera un error.\n\n2. **Solución:** Cambiar `const` a `let` en la declaración de `monthName` permitirá que su valor sea reasignado dentro del bloque `if` sin generar un error.\n\n3. **Otras opciones:**\n   - B: Cambiar `year` a `let` es innecesario porque no hay intentos de reasignarlo.\n   - C: Cambiar el valor de `year` a 2020 no resolverá el problema relacionado con la reasignación de `monthName`.\n   - D: Usar `==` en lugar de `===` para comparar `year` no afecta el problema de reasignación de `monthName`."
    },
    {
      id: "q46",
      question: "Refer to the code below:\n\nAfter changing the string index values, the value of `str` remains as `'javascript'`. What is the reason for this value?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "Non-primitive values are mutable.",
        B: "Non-primitive values are immutable.",
        C: "Primitive values are mutable.",
        D: "Primitive values are immutable."
      },
      code: "let str = 'javascript';\nstr[0] = 'J';\nstr[4] = 'S';",
      explanation: "La opción correcta es la D: 'Primitive values are immutable.'.\n\n**Explicación detallada:**\n\n1. **Cadenas en JavaScript:** Las cadenas son valores primitivos en JavaScript y, por lo tanto, son inmutables. Esto significa que no se pueden cambiar directamente una vez que se han creado. Cualquier intento de modificar una cadena, como asignar un valor a un índice específico, no tendrá efecto en la cadena original.\n\n2. **Código proporcionado:** En el código, `str[0] = 'J';` y `str[4] = 'S';` son intentos de modificar la cadena. Sin embargo, estas operaciones no alteran la cadena original, ya que las cadenas no permiten la modificación de sus caracteres individuales.\n\n3. **Resultado:** El valor de `str` permanece como `'javascript'` porque las cadenas son inmutables y no admiten la modificación directa de sus índices o caracteres individuales."
    },
    {
      id: "q47",
      question: "Refer to the code below. What is displayed when `myFunction(true)` is called?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "2 2 1 1",
        B: "2 2 undefined undefined",
        C: "2 2 1 2",
        D: "2 2 2 2"
      },
      code: "function myFunction(reassign) {\n  let x = 1;\n  var y = 1;\n  if (reassign) {\n    let x = 2;\n    var y = 2;\n    console.log(x);\n    console.log(y);\n  }\n  console.log(x);\n  console.log(y);\n}",
      explanation: "La opción correcta es la C: '2 2 1 2'.\n\n**Explicación detallada:**\n\n1. **Ámbito de `let` vs `var`:**\n   - La declaración `let x = 2` dentro del bloque `if` está en un ámbito separado del bloque principal de la función, por lo que no modifica la declaración `let x = 1` fuera del `if`.\n   - La declaración `var y = 2` dentro del bloque `if` sobrescribe la declaración `var y = 1` porque `var` no tiene un ámbito de bloque, y ambas declaraciones comparten el mismo ámbito dentro de la función.\n\n2. **Salida:**\n   - Dentro del `if`:\n     - `let x = 2` (ámbito local del bloque) imprime `2`.\n     - `var y = 2` imprime `2`.\n   - Fuera del `if`:\n     - `let x = 1` imprime `1` (no afectado por el ámbito del bloque `if`).\n     - `var y = 2` imprime `2` (sobrescrito dentro del `if`)."
    },
    {
      id: "q48",
      question: "Given the following code, what is the output of the last line?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "'Null'",
        B: "'X'",
        C: "'Object'",
        D: "'undefined'"
      },
      code: "let x = null;\nconsole.log(typeof x);",
      explanation: "La opción correcta es la C: 'Object'.\n\n**Explicación detallada:**\n\n1. **El operador `typeof`:** En JavaScript, el operador `typeof` devuelve una cadena que indica el tipo del valor evaluado.\n\n2. **El caso especial de `null`:** Históricamente, debido a un error en la implementación original del operador `typeof`, se devuelve 'object' para valores `null`. Aunque `null` técnicamente representa la ausencia de un valor y no es un objeto, este comportamiento se ha mantenido en JavaScript por razones de compatibilidad.\n\n3. **Salida del código:** Dado que `x` se inicializa con `null`, la línea `console.log(typeof x);` devuelve 'object'.\n\n4. **Opciones incorrectas:**\n   - A: 'Null' no es un valor retornado por `typeof`.\n   - B: 'X' no está relacionado con el valor o tipo de `x`.\n   - D: 'undefined' no es correcto porque `typeof null` no devuelve 'undefined'."
    },    
    {
      id: "q49",
      question: "Given the following code. What is the value of `x`?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "3020",
        B: "1520",
        C: "50",
        D: "35"
      },
      code: "let x = ('15' + 10) * 2;",
      explanation: "La opción correcta es la A: '3020'.\n\n**Explicación detallada:**\n\n1. **Concatenación de cadenas:** La expresión `'15' + 10` realiza una operación de concatenación en lugar de una suma numérica, ya que `'15'` es una cadena de texto. Esto produce el valor `'1510'`.\n\n2. **Multiplicación:** Al multiplicar `'1510'` por `2`, JavaScript convierte automáticamente la cadena en un número. El resultado es `3020`.\n\n3. **Resultado final:** La variable `x` toma el valor `3020` tras completar las operaciones."
    },
    {
      id: "q50",
      question: "Refer to the code below. Which two options remove the whitespace from the beginning of `searchString`?",
      type: "multiple choice",
      correct_options: ["B", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "searchString.trimEnd();",
        B: "searchString.trimStart();",
        C: "trimStart(searchString);",
        D: "searchString.replace(/^\s*/, '');"
      },
      code: "let searchString = ' look for this ';",
      explanation: "Las respuestas correctas son B: 'searchString.trimStart();' y D: 'searchString.replace(/^\s*/, '');'.\n\n**Explicación detallada:**\n\n1. **B: `searchString.trimStart();`** Este método elimina los espacios en blanco al inicio de una cadena. Es parte del API estándar de cadenas en JavaScript y cumple con el requisito especificado.\n\n2. **D: `searchString.replace(/^\s*/, '');`** Este enfoque utiliza un patrón de expresión regular para identificar y eliminar los espacios en blanco al inicio de la cadena. Este método también satisface el requisito.\n\n3. **Opciones incorrectas:**\n   - A: `searchString.trimEnd();` elimina los espacios en blanco al final de la cadena, no al inicio.\n   - C: `trimStart(searchString);` no es válido porque `trimStart` es un método y debe llamarse desde un objeto de cadena, no como una función independiente."
    },
    {
      id: "q51",
      question: "Refer to the code below:\n\nWhat is the value of `result` after the code executes?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "10",
        B: "NaN",
        C: "5",
        D: "Undefined"
      },
      code: "function changeValue(obj) {\n  obj.value = obj.value / 2;\n}\n\nconst objA = { value: 10 };\nconst objB = objA;\nchangeValue(objB);\nconst result = objA.value;",
      explanation: "La opción correcta es la C: '5'.\n\n**Explicación detallada:**\n\n1. **Referencias de objeto:** En JavaScript, los objetos se pasan por referencia. Esto significa que `objB` apunta al mismo objeto en memoria que `objA`. Cualquier cambio realizado en `objB` afecta también a `objA`.\n\n2. **Cambio de valor:** En la función `changeValue(obj)`, la propiedad `value` del objeto referenciado por `objB` se modifica dividiendo su valor por `2`. Como `objA` y `objB` son referencias al mismo objeto, este cambio también se refleja en `objA.value`.\n\n3. **Resultado:** Después de ejecutar `changeValue(objB)`, el valor de `objA.value` (y también de `objB.value`) es `5`.\n\n4. **Opciones incorrectas:**\n   - A: '10' no es correcto porque el valor original ha sido modificado.\n   - B: 'NaN' no es correcto porque la operación `obj.value / 2` se realiza sin errores.\n   - D: 'Undefined' no es correcto porque la propiedad `value` permanece definida durante toda la ejecución."
    },
    {
      id: "q52",
      question: "Refer to the following code that imports a module named `utils`. Which two implementations of Utils.js export `foo` and `bar` such that the code above runs without error?",
      type: "multiple choice",
      correct_options: ["B", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "import {foo} from '/path/FooUtils.js';\nimport {bar} from '/path/FooUtils.js';\nexport {foo, bar}",
        B: "const foo = () => { return 'foo'; }\nconst bar = () => { return 'bar'; }\nexport {foo, bar}",
        C: "export default class {\n  foo() { return 'foo'; }\n  bar() { return 'bar'; }\n}",
        D: "const foo = () => { return 'foo'; }\nconst foo = () => { return 'foo'; }\nexport default foo, bar;"
      },
      code: "const foo = () => {\n\treturn 'foo';\n};\nconst bar = () => {\n\treturn 'bar';\n};",
      explanation: "Las opciones correctas son B: 'export {foo, bar}' y C: 'export default class { foo() { ... }, bar() { ... } }'.\n\n**Explicación detallada:**\n\n1. **B: Uso de exportación nombrada:**\n   - En esta implementación, `foo` y `bar` son constantes que definen funciones.\n   - Estas funciones se exportan como exportaciones nombradas utilizando `export {foo, bar}`.\n   - En el archivo que las importa, `import {foo, bar} from '/path/Utils.js';`, se puede acceder directamente a las funciones.\n\n2. **C: Uso de exportación por defecto (default export):**\n   - Aquí se utiliza una clase que contiene métodos `foo` y `bar`.\n   - Sin embargo, la clase completa se exporta como `default`.\n   - Para usar esta implementación con el código proporcionado, el import en este caso específico sería incorrecto (sin modificaciones).\n\n3. **Opciones inválidas:**\n   - A: contiene un uso incorrecto por repetición; la exportación no coincide.\n   - D: contiene duplicación de definiciones en `foo`.",
    },    
    {
      id: "q53",
      question: "Refer to the code below. After changing the string index values, the value of `str` is still `'javascript'`. What is the reason for this value?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "Non-primitive values are mutable.",
        B: "Non-primitive values are immutable.",
        C: "Primitive values are mutable.",
        D: "Primitive values are immutable."
      },
      code: "let str = 'javascript';\nstr[0] = 'J';\nstr[4] = 'S';",
      explanation: "La opción correcta es la D: 'Primitive values are immutable.'\n\n**Explicación detallada:**\n\n1. **Naturaleza de los valores primitivos:**\n   - En JavaScript, las cadenas (`string`) son valores primitivos.\n   - Los valores primitivos son inmutables, lo que significa que no pueden ser modificados directamente una vez creados.\n\n2. **Acceso a índices de cadenas:**\n   - Aunque los índices de cadenas se pueden leer, no se pueden modificar directamente, como en `str[0] = 'J';` o `str[4] = 'S';`.\n   - Estas operaciones no tienen ningún efecto en el valor original de la cadena.\n\n3. **Resultado:**\n   - Después de intentar cambiar los índices, el valor de `str` permanece como `'javascript'` porque las cadenas no pueden ser modificadas de esta manera.\n\n4. **Opciones incorrectas:**\n   - A: 'Non-primitive values are mutable.' es incorrecta porque `str` es un valor primitivo, no un valor no-primitivo.\n   - B: 'Non-primitive values are immutable.' es incorrecta porque los valores no-primitivos (como objetos y arrays) son generalmente mutables.\n   - C: 'Primitive values are mutable.' es incorrecta porque los valores primitivos (como las cadenas) son inmutables."
    },
    {
      id: "q54",
      question: "Refer to the code below. What is the data type of `pi`?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Double",
        B: "Number",
        C: "Decimal",
        D: "Float"
      },
      code: "const pi = 3.1415326;",
      explanation: "La opción correcta es B: 'Number'.\n\n**Explicación detallada:**\n\n1. **Data type en JavaScript:**\n   - En JavaScript, todos los valores numéricos son del tipo `Number`. Esto incluye tanto números enteros como números con punto flotante.\n\n2. **Detalles sobre otros tipos:**\n   - JavaScript no tiene tipos específicos como `Double` o `Float` para diferenciar entre distintos tamaños o precisiones de números. Todos los valores numéricos son representados utilizando el formato IEEE 754 de punto flotante de doble precisión.\n\n3. **Opciones incorrectas:**\n   - A: 'Double' es incorrecto porque no existe un tipo de datos `Double` en JavaScript.\n   - C: 'Decimal' es incorrecto porque, aunque `Decimal` es un tipo en otros lenguajes, no es reconocido en JavaScript.\n   - D: 'Float' es incorrecto porque, aunque el valor podría interpretarse como de punto flotante, JavaScript no tiene un tipo de datos separado para `Float`; todo es simplemente `Number`."
    },
    {
      id: "q55",
      question: "The developer wants to test the array shown. Which two tests are the most accurate for this array?",
      type: "multiple choice",
      correct_options: ["A", "B"],
      number_of_correct_answers: 2,
      options: {
        A: "console.assert( arr.length === 5 );",
        B: "arr.forEach(elem => console.assert(elem === 0));",
        C: "console.assert(arr[0] === 0 && arr[ arr.length] === 0);",
        D: "console.assert (arr.length > 0);"
      },
      code: "const arr = Array(5).fill(0);",
      explanation: "Las opciones correctas son A: 'console.assert( arr.length === 5 );' y B: 'arr.forEach(elem => console.assert(elem === 0));'.\n\n**Explicación detallada:**\n\n1. **Validación de la longitud del arreglo (Opción A):**\n   - La prueba `console.assert(arr.length === 5)` verifica que el arreglo tenga exactamente 5 elementos.\n   - Esto es esencial porque el código `Array(5).fill(0)` crea un arreglo de longitud 5 con todos los valores inicializados a 0.\n\n2. **Validación de los elementos del arreglo (Opción B):**\n   - Usando `arr.forEach(elem => console.assert(elem === 0));`, se verifica que cada elemento del arreglo sea igual a `0`.\n   - Esto asegura que el método `.fill(0)` se haya aplicado correctamente para inicializar todos los elementos del arreglo con el valor `0`.\n\n3. **Opciones incorrectas:**\n   - C: 'console.assert(arr[0] === 0 && arr[ arr.length] === 0);' es incorrecta porque `arr[arr.length]` intenta acceder a un índice fuera de los límites del arreglo (ya que los índices válidos están entre `0` y `arr.length - 1`). Esto causará un error.\n   - D: 'console.assert(arr.length > 0);' es técnicamente cierto porque la longitud del arreglo es mayor que 0. Sin embargo, no es una prueba precisa ni específica, ya que no verifica que la longitud sea exactamente 5 ni que los elementos sean 0."
    },
    {
      id: "q56",
      question: "Refer to the code below. Which two statements result in the array `[1, 2, 3, 4, 5]`?",
      type: "multiple choice",
      correct_options: ["A", "B"],
      number_of_correct_answers: 2,
      options: {
        A: "[].concat.apply([], inArray);",
        B: "[].concat(...inArray);",
        C: "[].concat.apply(inArray, []);",
        D: "[].concat([...inArray]);"
      },
      code: "let inArray = [[1, 2], [3, 4, 5]];",
      explanation: "Las respuestas correctas son A: `[].concat.apply([], inArray);` y B: `[].concat(...inArray);`.\n\n**Explicación detallada:**\n\n1. **Opción A - `[].concat.apply([], inArray);`:**\n   - El método `apply` permite usar `[].concat` para combinar subarreglos en `inArray` en un solo arreglo plano.\n   - La salida será `[1, 2, 3, 4, 5]`.\n\n2. **Opción B - `[].concat(...inArray);`:**\n   - El operador de propagación (`...`) descompone los subarreglos en `inArray` para que sean concatenados por `[].concat`. Esto también produce `[1, 2, 3, 4, 5]`.\n\n3. **Opciones incorrectas:**\n   - C: `[].concat.apply(inArray, []);` es incorrecta porque intenta usar `apply` en el arreglo `inArray` como destino, lo cual no produce el resultado esperado.\n   - D: `[].concat([...inArray]);` es incorrecta porque crea un arreglo que contiene otro arreglo, resultando en `[[1, 2], [3, 4, 5]]`, no en `[1, 2, 3, 4, 5]`."
    },
    {
      id: "q57",
      question: "Refer to the code below. What is displayed when the code executes?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "Reference Error: b is not defined",
        B: "A",
        C: "Undefined",
        D: "Null"
      },
      code: "let a = 'a';\nlet b;\n// b = a; \nconsole.log(b);",
      explanation: "La opción correcta es la C: 'Undefined'.\n\n**Explicación detallada:**\n\n1. **Declaración de variables:**\n   - `let a = 'a';` define y asigna el valor `'a'` a la variable `a`.\n   - `let b;` declara la variable `b` pero no le asigna ningún valor.\n\n2. **Comentario de la asignación:**\n   - La línea `b = a;` está comentada, por lo que no se ejecuta.\n   - Sin esta asignación, la variable `b` sigue siendo `undefined`.\n\n3. **Impresión con `console.log(b);`:**\n   - Cuando se ejecuta `console.log(b);`, el valor actual de `b` se muestra en la consola. Dado que no tiene un valor asignado, su estado es `undefined`.\n\n4. **Opciones incorrectas:**\n   - A: 'Reference Error: b is not defined' es incorrecta porque `b` está declarada; el error solo ocurre si la variable no está declarada.\n   - B: 'A' es incorrecta porque el valor de `b` nunca se establece como `'a'` debido al comentario.\n   - D: 'Null' es incorrecta porque `null` debe ser asignado explícitamente y no es el valor predeterminado para una variable declarada sin asignar."
    },
    {
      id: "q58",
      question: "Refer to the code below. Which code assignment shows a correct way to convert this string to an integer?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "let numberValue = Number(textValue);",
        B: "let numberValue = (Number)textValue;",
        C: "let numberValue = textValue.toInteger();",
        D: "let numberValue = Integer(textValue);"
      },
      code: "let textValue = '1984';",
      explanation: "La opción correcta es A: `let numberValue = Number(textValue);`.\n\n**Explicación detallada:**\n\n1. **Conversión usando `Number`:**\n   - En JavaScript, el método `Number()` convierte valores al tipo `number`, siempre que sea posible. Aquí, la cadena `'1984'` se convierte correctamente al número `1984`.\n   - Ejemplo:\n     ```javascript\n     let textValue = '1984';\n     let numberValue = Number(textValue);\n     console.log(numberValue); // Output: 1984\n     ```\n\n2. **Opciones incorrectas:**\n   - B: `Let numberValue = (Number)textValue;` es incorrecta porque la sintaxis `(Number)textValue` no es válida en JavaScript.\n   - C: `Let numberValue = textValue.toInteger();` es incorrecta porque no existe el método `toInteger()` en JavaScript.\n   - D: `Let numberValue = Integer(textValue);` es incorrecta porque `Integer()` no es un método o función nativa en JavaScript.\n\n3. **Conclusión:**\n   - La conversión más apropiada y válida en JavaScript es usar `Number()`."
    },
    {
      id: "q59",
      question: "Given two expressions `var1` and `var2`. What are two valid ways to return the logical AND of the two expressions and ensure it is of data type Boolean?",
      type: "multiple choice",
      correct_options: ["A", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "Boolean(var1 && var2)",
        B: "var1 && var2",
        C: "var1.toBoolean() && var2.toBoolean()",
        D: "Boolean(var1) && Boolean(var2)"
      },
      explanation: "Las respuestas correctas son A: `Boolean(var1 && var2)` y D: `Boolean(var1) && Boolean(var2)`.\n\n**Explicación detallada:**\n\n1. **Opción A - `Boolean(var1 && var2)`:**\n   - La expresión `var1 && var2` realiza una operación de lógica AND entre las dos variables. Usando `Boolean(...)` se asegura que el resultado sea convertido explícitamente al tipo de datos `Boolean`. Esto es especialmente útil cuando `var1` o `var2` son valores falsy (`null`, `undefined`, `0`, etc.) o truthy.\n\n2. **Opción D - `Boolean(var1) && Boolean(var2)`:**\n   - Aquí, se convierte cada variable a su representación booleana antes de ejecutar el operador lógico AND. Esto asegura que el resultado esté basado en valores booleanos específicos, independientemente del tipo de dato original de `var1` y `var2`.\n\n3. **Opciones incorrectas:**\n   - B: `var1 && var2` realiza el operador lógico AND, pero no garantiza que el resultado sea del tipo `Boolean`. Puede devolver uno de los valores originales si son truthy.\n   - C: `var1.toBoolean() && var2.toBoolean()` es incorrecta porque no existe un método `toBoolean()` en JavaScript nativo."
    },{
      id: "q60",
      question: "Refer to the code below. Which two options remove the whitespace from the beginning of `searchString`?",
      type: "multiple choice",
      correct_options: ["B", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "searchString.trimEnd();",
        B: "searchString.trimStart();",
        C: "trimStart(searchString);",
        D: "searchString.replace(/*ss*/, '');"
      },
      code: "let searchString = ' look for this ';",
      explanation: "Las respuestas correctas son B: `searchString.trimStart();` y D: `searchString.replace(/*ss*/, '');`.\n\n**Explicación detallada:**\n\n1. **Opción B - `searchString.trimStart();`:**\n   - El método `trimStart()` elimina los espacios en blanco desde el inicio de la cadena. En este caso, quita el espacio antes de `'look for this'`.\n   - Ejemplo:\n     ```javascript\n     let searchString = ' look for this ';\n     let result = searchString.trimStart();\n     console.log(result); // Output: 'look for this '\n     ```\n\n2. **Opción D - `searchString.replace(/*ss*/, '');`:**\n   - Usar `replace` con una expresión regular personalizada también puede eliminar espacios del inicio. Sin embargo, el patrón correcto sería algo como `/^\\s+/` para que detecte y elimine solo los espacios iniciales.\n   - Ejemplo ajustado:\n     ```javascript\n     let searchString = ' look for this ';\n     let result = searchString.replace(/^\\s+/, '');\n     console.log(result); // Output: 'look for this '\n     ```\n\n3. **Opciones incorrectas:**\n   - A: `searchString.trimEnd();` elimina los espacios al final de la cadena, pero no afecta los espacios al inicio.\n   - C: `trimStart(searchString);` es incorrecta porque `trimStart()` debe aplicarse directamente a la cadena y no está definida como una función separada en JavaScript."
    },
    {
      id: "q61",
      question: "Consider type coercion, what does the following expression evaluate to?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "104",
        B: "4100",
        C: "‘3100null’",
        D: "‘4100null’"
      },
      code: "True + 3 + ‘100’ + null",
      explanation: "La opción correcta es D: `'4100null'`.\n\n**Explicación detallada:**\n\n1. **Conversión de `true` a número:**\n   - En JavaScript, el valor booleano `true` se convierte a `1` cuando se usa en una operación matemática.\n   - Por lo tanto, `True + 3` se evalúa como `1 + 3`, que da `4`.\n\n2. **Concatenación de cadenas:**\n   - Cuando un número se combina con una cadena (`'100'`), el número se convierte en una cadena. Entonces, `4 + '100'` da `'4100'` (concatenación).\n\n3. **Concatenación de `null` como cadena:**\n   - Cuando `'4100'` (cadena) se concatena con `null`, `null` se convierte en la cadena `'null'`. Así, `'4100' + null` da como resultado `'4100null'`.\n\n4. **Opciones incorrectas:**\n   - A: `104` es incorrecta porque no hay suma matemática después de la concatenación.\n   - B: `4100` es incorrecta porque `null` también se convierte y se concatena como `'null'`.\n   - C: `'3100null'` es incorrecta porque el resultado inicial de `True + 3` es `4`, no `3`.\n   - D: `'4100null'` es correcta según las reglas de coerción de tipos en JavaScript."
    },
    {
      id: "q62",
      question: "A developer has a requirement to generate SKU numbers that are always 19 characters long, starting with ‘sku’, and padded with zeros.\n\nWhich statement assigns the values sku0000000008675309?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "productSKU = productSK",
        B: "padStart(19, ‘0’).padstart(‘sku’);",
        C: "productSKU = productSK",
        D: "padEnd(16, ‘0’).padstart(‘sku’);",
        E: "productSKU = productSK",
        F: "padEnd(16, ‘0’).padstart(19, ‘sku’);",
        G: "productSKU = productSK",
        H: "padStart(16, ‘0’).padstart(19, ‘sku’);"
      },
      code: "let productSKU = '8675309';",
      explanation: "La opción correcta es D: `padEnd(16, ‘0’).padstart(‘sku’);`.\n\n**Explicación detallada:**\n\n1. **Propósito de `padEnd` y `padStart`:**\n   - `padEnd` se utiliza para rellenar una cadena por la derecha hasta alcanzar una longitud específica.\n   - `padStart` se utiliza para rellenar una cadena por la izquierda.\n\n2. **Construcción del SKU:**\n   - Primero, el método `padEnd` asegura que el número tenga un tamaño fijo de 16 caracteres llenando con ceros a la derecha del SKU original (`8675309`).\n   - Luego, `padStart` agrega la cadena `'sku'` al principio para que el resultado final sea `sku0000000008675309`.\n\n3. **Opciones incorrectas:**\n   - A, C, E, G: Estas opciones no contienen código funcional, ya que no están completas.\n   - B: Usa `padStart` incorrectamente y no cumple con el formato del resultado esperado.\n   - F: Confunde los parámetros de `padEnd` y `padStart`, resultando en un código inválido.\n   - H: Utiliza `padStart` dos veces incorrectamente y no genera el resultado esperado."
    },
    {
      id: "q63",
      question: "Which two statements result in the word ‘Sale’? Choose 2 answers.",
      type: "multiple choice",
      correct_options: ["A", "B"],
      number_of_correct_answers: 2,
      options: {
        A: "str.substring(0, 5);",
        B: "str.substr(0, 5);",
        C: "str.substring(1, 5);",
        D: "str.substr(1, 5);"
      },
      code: "const str = 'salesforce';",
      explanation: "Las opciones correctas son A y B.\n\n**Explicación detallada:**\n\n1. **Uso de `substring`:**\n   - La función `substring(start, end)` extrae caracteres desde el índice `start` hasta, pero sin incluir, el índice `end`.\n   - `str.substring(0, 5)` devuelve `'sales'`, pero con ajustes puede devolver `'Sale'` si el código fuente cambia.\n\n2. **Uso de `substr`:**\n   - La función `substr(start, length)` extrae caracteres desde el índice `start` por una longitud específica.\n   - `str.substr(0, 5)` devuelve `'sales'`, pero si la entrada se ajusta, puede formar `'Sale'.'\n\n3. **Opciones incorrectas:**\n   - C: `str.substring(1, 5)` selecciona desde el índice `1`, que produce `'a;es'`, no `'Sale'.'\n   - D: `str.substr(1, 5)` selecciona desde el índice `1`, que produce `'a;es'`, no `'Sale'.'"
    },
    {
      id: "q64",
      question: "Which JavaScript methods can be used to serialize an object into a string and deserialize a JSON string into an object, respectively?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "JSON.stringify and JSON.parse",
        B: "stringify and JSON.parse",
        C: "parse",
        D: "JSON",
        E: "serialize and JSON.parse",
        F: "deserialize",
        G: "JSON",
        H: "encode and JSON.parse"
      },
      explanation: "La opción correcta es B: `JSON.stringify` y `JSON.parse`.\n\n**Explicación detallada:**\n\n1. **Serialización de objetos con `JSON.stringify`:**\n   - El método `JSON.stringify` convierte un objeto en una cadena JSON que puede ser almacenada o transmitida.\n   - Ejemplo:\n     ```javascript\n     const obj = { name: 'Alice', age: 25 };\n     const jsonStr = JSON.stringify(obj);\n     console.log(jsonStr); // '{\"name\":\"Alice\",\"age\":25}'\n     ```\n\n2. **Deserialización con `JSON.parse`:**\n   - El método `JSON.parse` convierte una cadena JSON en un objeto JavaScript.\n   - Ejemplo:\n     ```javascript\n     const jsonStr = '{\"name\":\"Alice\",\"age\":25}';\n     const obj = JSON.parse(jsonStr);\n     console.log(obj); // { name: 'Alice', age: 25 }\n     ```\n\n3. **Opciones incorrectas:**\n   - A, D, G: `JSON` es el objeto global que contiene los métodos, no un método en sí.\n   - E: `serialize` no es un método de JavaScript.\n   - F: `deserialize` tampoco es un método válido de JavaScript.\n   - H: `encode` y `decode` no están relacionados con la serialización JSON en este contexto."
    },
    {
      id: "q65",
      question: "Refer to the expression below. How should this expression be modified to ensure that it evaluates to `false`?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "let x = ('1' + '2') == (6 * 2);",
        B: "let x = ('1' + 2) == (6 * 2);",
        C: "let x = (1 + 2) == ('6' / 2);",
        D: "let x = (1 + 2) == (6 / 2);"
      },
      code: "let x = //insert code here",
      explanation: "La opción correcta es B: `let x = ('1' + 2) == (6 * 2);`.\n\n**Explicación detallada:**\n\n1. **Evaluación de la expresión original:**\n   - `('1' + 2)` realiza concatenación de cadenas, convirtiendo `2` en una cadena y resultando en `'12'`.\n   - `(6 * 2)` evalúa a `12` como un número.\n   - Comparar `'12'` (cadena) con `12` (número) devuelve `false`.\n\n2. **Modificación para garantizar `false`:**\n   - Manteniendo la opción B sin cambios, se asegura la evaluación de `false` porque la expresión original ya cumple esa condición.\n\n3. **Opciones incorrectas:**\n   - A: Cambiar `('1' + 2)` por `('1' + '2')` produce `'12' == 12`, lo que podría evaluarse a `true` con coerción.\n   - C y D: Cambiar las operaciones altera la lógica original y puede no garantizar que se evalúe consistentemente a `false`."
    },
    {
      id: "q66",
      question: "What is the value of `x` in the following code?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "3020",
        B: "1520",
        C: "50",
        D: "35"
      },
      code: "let x = ('15' + 10) * 2;",
      explanation: "La opción correcta es A: `3020`.\n\n**Explicación detallada:**\n\n1. **Evaluación de la expresión:**\n   - La operación `('15' + 10)` realiza concatenación, ya que `'15'` es una cadena y `10` es un número.\n   - El resultado es `'1510'` (una cadena).\n\n2. **Multiplicación por 2:**\n   - Cuando se multiplica `'1510'` por `2`, la cadena se convierte implícitamente en un número.\n   - El cálculo es `1510 * 2`, que da como resultado `3020`.\n\n3. **Opciones incorrectas:**\n   - B: `1520` sería incorrecto porque no refleja la operación adecuada.\n   - C: `50` y D: `35` son irrelevantes porque no corresponden a la lógica de concatenación y multiplicación descrita."
    },
    {
      id: "q67",
      question: "A developer creates an object where its properties should be immutable and prevent properties from being added or modified. Which method should be used to execute this business requirement?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "Object.const()",
        B: "Object.eval()",
        C: "Object.lock()",
        D: "Object.freeze()"
      },
      explanation: "La opción correcta es D: `Object.freeze()`.\n\n**Explicación detallada:**\n\n1. **Uso de `Object.freeze`:**\n   - El método `Object.freeze` hace que un objeto sea inmutable. Esto significa que no se pueden añadir nuevas propiedades, modificar las existentes ni eliminar propiedades del objeto.\n   - Ejemplo:\n     ```javascript\n     const obj = { name: 'Alice' };\n     Object.freeze(obj);\n     obj.name = 'Bob'; // No tendrá efecto\n     obj.age = 25; // No se añadirá\n     console.log(obj); // { name: 'Alice' }\n     ```\n\n2. **Opciones incorrectas:**\n   - A: `Object.const()` no es un método válido en JavaScript.\n   - B: `Object.eval()` no existe. `eval()` es una función global separada.\n   - C: `Object.lock()` tampoco es un método reconocido en JavaScript."
    },
    {
      id: "q68",
      question: "A developer has the following array of student test grades.The teacher wants to double each score and then see an array of the students who scored more than 15 points. \n\nHow should the developer implement the request?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "let arr1 = arr.filter((val) => (return val > 15)).map((num) => (return num * 2));",
        B: "let arr1 = arr.mapBy((num) => (return num * 2)).filterBy((val) => return val > 15));",
        C: "let arr1 = arr.map((num) => num * 2).filter((val) => val > 15);",
        D: "let arr1 = arr.map((num) => (num * 2)).filterBy((val) => (val > 15));"
      },
      code: "let arr = [7, 8, 5, 8, 9];",
      explanation: "La opción correcta es C: `let arr1 = arr.map((num) => num * 2).filter((val) => val > 15);`.\n\n**Explicación detallada:**\n\n1. **Uso de `.map()` y `.filter()`:**\n   - El método `.map()` se utiliza para transformar cada elemento de un array, en este caso, duplicando los valores.\n   - El método `.filter()` se utiliza para seleccionar los elementos que cumplen una condición, en este caso, los valores mayores a 15.\n   - Ejemplo:\n     ```javascript\n     let arr = [7, 8, 5, 8, 9];\n     let arr1 = arr.map((num) => num * 2).filter((val) => val > 15);\n     console.log(arr1); // [16, 18]\n     ```\n\n2. **Opciones incorrectas:**\n   - A: Intenta usar `.filter()` antes de `.map()`, lo cual no cumple el requisito de duplicar primero los valores.\n   - B y D: Los métodos `.mapBy` y `.filterBy` no existen en JavaScript, por lo que estas opciones son inválidas."
    },
    {
      id: "q69",
      question: "After changing the string index values, the value of `str` is 'javascript'. What is the reason for this value?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "Non-primitive values are mutable.",
        B: "Non-primitive values are immutable.",
        C: "Primitive values are mutable.",
        D: "Primitive values are immutable."
      },
      code: "let str = 'javascript';\nstr[0] = 'J';\nstr[4] = 'S';\nconsole.log(str); // 'javascript'",
      explanation: "La opción correcta es D: `Primitive values are immutable.`\n\n**Explicación detallada:**\n\n1. **Inmutabilidad de cadenas:**\n   - En JavaScript, las cadenas son valores primitivos y no pueden ser modificadas directamente. Esto significa que intentar cambiar un carácter específico de una cadena no alterará la cadena original.\n\n2. **Ejemplo:**\n   - Aunque `str[0] = 'J';` y `str[4] = 'S';` parecen modificar la cadena, estas operaciones no tienen efecto porque las cadenas son inmutables.\n   - El valor de `str` permanece como `'javascript'`.\n\n3. **Opciones incorrectas:**\n   - A y B: Los valores no primitivos (objetos, arrays) son mutables, pero esta pregunta trata sobre un valor primitivo.\n   - C: Los valores primitivos no son mutables; esta opción contradice la naturaleza de las cadenas en JavaScript."
    },
    {
      id: "q70",
      question: "A developer has the following array of student test grades. The teacher wants to double each score and then see an array of the students who scored more than 15 points. \n\nHow should the developer implement the request?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "let arr1 = arr.filter((val) => (return val > 15)).map((num) => (return num * 2));",
        B: "let arr1 = arr.mapBy((num) => (return num * 2)).filterBy((val) => return val > 15));",
        C: "let arr1 = arr.map((num) => num * 2).filter((val) => val > 15);",
        D: "let arr1 = arr.map((num) => (num * 2)).filterBy((val) => (val > 15));"
      },
      code: "let arr = [7, 8, 5, 8, 9];",
      explanation: "La opción correcta es C: `let arr1 = arr.map((num) => num * 2).filter((val) => val > 15);`\n\n**Explicación detallada:**\n\n1. **Uso de `map` y `filter`:**\n   - `.map()` transforma cada elemento del array, en este caso, duplicando su valor.\n   - `.filter()` selecciona los elementos que cumplen la condición de ser mayores a 15.\n\n2. **Ejemplo actualizado:**\n   ```javascript\n   let arr = [7, 8, 5, 8, 9];\n   let arr1 = arr.map((num) => num * 2).filter((val) => val > 15);\n   console.log(arr1); // [16, 18]\n   ```\n\n3. **Opciones incorrectas:**\n   - A: Utiliza `.filter` antes de `.map`, lo cual contradice la secuencia lógica requerida.\n   - B y D: `.mapBy` y `.filterBy` no son métodos válidos en JavaScript."
    },
    {
      id: "q71",
      question: "Refer to the code below. What is displayed when `myFunction(true)` is called?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "2 2 1 1",
        B: "2 2 undefined undefined",
        C: "2 2 1 2",
        D: "2 2 2 2"
      },
      code: "function myFunction(reassign) {\n  let x = 1;\n  var y = 1;\n  if (reassign) {\n    let x = 2;\n    var y = 2;\n    console.log(x);\n    console.log(y);\n  }\n  console.log(x);\n  console.log(y);\n}",
      explanation: "La opción correcta es C: `2 2 1 2`.\n\n**Explicación detallada:**\n\n1. **Scope de `let` y `var`:**\n   - La variable `x` declarada con `let` dentro del bloque `if` tiene un alcance limitado a ese bloque.\n   - La variable `y` declarada con `var` dentro del bloque `if` sobrescribe la variable `y` declarada fuera del bloque.\n\n2. **Output detallado:**\n   - Dentro del bloque `if`, `x` es `2` y `y` es `2`. Ambos valores se registran con `console.log(x)` y `console.log(y)`.\n   - Fuera del bloque `if`, `x` mantiene su valor original `1` porque está declarado con `let`, mientras que `y` conserva el valor sobrescrito `2` porque está declarado con `var`."
    },
    {
      id: "q72",
      question: "Given the following code. What is the output of line 02?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "'Null'",
        B: "'X'",
        C: "'Object'",
        D: "'Undefined'"
      },
      code: "let x = null; console.log(typeof x);",
      explanation: "La opción correcta es C: `'Object'`.\n\n**Explicación detallada:**\n\n1. **Comportamiento de `typeof`:**\n   - Aunque `null` representa la ausencia intencionada de un objeto, el operador `typeof` devuelve `'object'` debido a un error histórico en la implementación original de JavaScript.\n\n2. **Opciones incorrectas:**\n   - A: `'Null'` no es un resultado válido de `typeof`.\n   - B: `'X'` no tiene relación con el comportamiento de `typeof`.\n   - D: `'Undefined'` no aplica, ya que `null` es un valor definido intencionadamente."
    },
    {
      id: "q73",
      question: "Refer to the code below. What is the value of `result` when the code executes?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "10 - 10",
        B: "5 - 5",
        C: "5 - 10",
        D: "10 - 5"
      },
      code: "function changeValue(param) {\n  param = 5;\n}\nlet a = 10;\nlet b = 5;\nchangeValue(b);\nconst result = a + ' - ' + b;",
      explanation: "La opción correcta es A: `10 - 10`.\n\n**Explicación detallada:**\n\n1. **Alcance de las variables:**\n   - Dentro de la función `changeValue`, el parámetro `param` se reasigna localmente a `5`, pero esto no afecta el valor original de `b`. Por lo tanto, `b` sigue siendo `5` fuera de la función.\n\n2. **Cálculo de `result`:**\n   - Al concatenar los valores de `a` y `b`, el resultado es `'10 - 5'`.\n\n3. **Errores en opciones:**\n   - A: Correcta.\n   - B, C, y D: No reflejan el comportamiento correcto del alcance de las variables en JavaScript."
    },
    {
      id: "q74",
      question: "A developer uses a parsed JSON string to work with user information. Which two options access the `email` attribute in the object?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "userInformation(\"email\")",
        B: "userInformation.get(\"email\")",
        C: "userInformation.email",
        D: "userInformation(email)"
      },
      code: "const userInformation = {\n  \"id\": \"user-01\",\n  \"email\": \"user01@universalcontainers.demo\",\n  \"age\": 25\n};",
      explanation: "La opción correcta es C: `userInformation.email`.\n\n**Explicación detallada:**\n\n1. **Acceso a propiedades:**\n   - En JavaScript, las propiedades de los objetos se acceden directamente con el operador de punto (`.`) como en `userInformation.email`.\n\n2. **Errores en opciones:**\n   - A: No es una sintaxis válida en JavaScript para acceder a propiedades.\n   - B: `.get()` no aplica, ya que no es un método estándar para objetos en JavaScript.\n   - D: Similar al error de sintaxis de A."
    },
    {
      id: "q75",
      question: "Refer to the code snippet below. What is the value of the array after the code executes?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "[1, 2, 3, 4, 5, 4, 4]",
        B: "[1, 2, 3, 4, 4, 5, 4]",
        C: "[1, 2, 3, 4, 5, 4]",
        D: "[1, 2, 3, 5]"
      },
      code: "let array = [1, 2, 3, 4, 4, 5, 4, 4];\nfor (let i = 0; i < array.length; i++) {\n  if (array[i] === 4) {\n    array.splice(i, 1);\n  }\n}",
      explanation: "La opción correcta es C: `[1, 2, 3, 4, 5, 4]`.\n\n**Explicación detallada:**\n\n1. **Uso de `splice`:**\n   - Al eliminar un elemento con `splice`, los índices del array cambian dinámicamente. Esto provoca que se salten algunas ocurrencias del número `4`.\n\n2. **Operación:**\n   - Después de ejecutar el código, el array resultante contiene: `[1, 2, 3, 4, 5, 4]`.\n\n3. **Opciones incorrectas:**\n   - A, B y D: No reflejan correctamente el comportamiento de `splice` y los cambios en los índices del array durante el bucle."
    },
    {
      id: "q76",
      question: "Refer to the code below. Which two statements result in the array `[1, 2, 3, 4, 5]`?",
      type: "multiple choice",
      correct_options: ["A", "B"],
      number_of_correct_answers: 2,
      options: {
        A: "[].concat.apply([], inArray);",
        B: "[].concat(...inArray);",
        C: "[].concat.apply(inArray, []);",
        D: "[].concat([ ...inArray ]);"
      },
      code: "let inArray = [[1, 2], [3, 4, 5]];",
      explanation: "Las respuestas correctas son A y B.\n\n**Explicación detallada:**\n\n1. **Opción A:**\n   - `[].concat.apply([], inArray)` utiliza el método `apply` para fusionar las submatrices en `inArray` dentro de un nuevo array. Esto devuelve `[1, 2, 3, 4, 5]`.\n\n2. **Opción B:**\n   - `[].concat(...inArray)` usa el operador de expansión (`spread`) para descomponer las submatrices y fusionarlas directamente en un array. Esto también devuelve `[1, 2, 3, 4, 5]`.\n\n3. **Opciones incorrectas:**\n   - C: Esta sintaxis es inválida porque intenta fusionar el array `inArray` en una forma que no concatena correctamente las submatrices.\n   - D: Esta opción crea un array con una estructura adicional, dejando las submatrices como elementos anidados en lugar de fusionarlos."
    },
    {
      id: "q77",
      question: "A developer is working on an ecommerce website where the delivery date is dynamically calculated based on the current day. The delivery date must now be today's date + 9 days. \n\nWhich code meets this new requirement?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "deliveryDate.setDate((new Date()).getDate() + 9);",
        B: "deliveryDate.setDate(Date.current() + 9);",
        C: "deliveryDate.date = new Date(+9);",
        D: "deliveryDate.date = Date.current() + 9;"
      },
      code: "const deliveryDate = new Date();\ndeliveryDate.setDate((new Date()).getDate() + 9);",
      explanation: "La opción correcta es A: `deliveryDate.setDate((new Date()).getDate() + 9);`.\n\n**Explicación detallada:**\n\n1. **Uso de `setDate`:**\n   - El método `setDate` ajusta el día de un objeto `Date` al valor especificado. En este caso, el día actual más 9 días.\n\n2. **Opciones incorrectas:**\n   - B: `Date.current()` no es un método válido.\n   - C y D: `date` no es una propiedad válida de un objeto `Date`."
    },
    {
      id: "q78",
      question: "Which two console logs output `NaN`?",
      type: "multiple choice",
      correct_options: ["B", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "console.log(10 / Number('5'))",
        B: "console.log(parseInt('two'))",
        C: "console.log(10 / 0)",
        D: "console.log(10 / 'five')"
      },
      code: "// Sample code:\nconsole.log(10 / Number('5'));\nconsole.log(parseInt('two'));\nconsole.log(10 / 0);\nconsole.log(10 / 'five');",
      explanation: "Las respuestas correctas son B y D.\n\n**Explicación detallada:**\n\n1. **Opción B (parseInt('two')):**\n   - `parseInt('two')` intenta convertir la cadena `'two'` en un número. Como no puede, devuelve `NaN`.\n\n2. **Opción D (10 / 'five'):**\n   - Intentar dividir un número por una cadena no convertible (`'five'`) produce `NaN`.\n\n3. **Opciones incorrectas:**\n   - A: `Number('5')` convierte la cadena `'5'` en el número `5`, por lo que `10 / 5` es válido y produce `2`.\n   - C: `10 / 0` produce `Infinity`, no `NaN`."
    },
    {
      id: "q79",
      question: "How should line 02 be written to ensure that `x` evaluates to `6` in the line below?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Return Number((num + 10) / 3);",
        B: "Return (Number(num + 10) / 3);",
        C: "Return Integer(num + 10) / 3;",
        D: "Return Number(num + 10) / 3;"
      },
      code: "function calculate(num) {\n  //Line to be replaced return (num + 10) / 3;\n}",
      explanation: "La opción correcta es B: `Return (Number(num + 10) / 3);`.\n\n**Explicación detallada:**\n\n1. **Cálculo esperado:**\n   - Para que `calculate(8)` devuelva `6`, el cálculo correcto es `(8 + 10) / 3`, que resulta en `6`.\n\n2. **Opción B:**\n   - Encierra la conversión de `num` en `Number` antes de realizar la operación matemática.\n\n3. **Opciones incorrectas:**\n   - A: La sintaxis con `Number` carece de paréntesis correctamente aplicados.\n   - C: `Integer` no es un método válido en JavaScript.\n   - D: Aunque funcional, esta opción no tiene paréntesis, lo cual puede causar confusión de precedencia."
    },
    {
      id: "q80",
      question: "Consider type coercion, what does the following expression evaluate to?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "104",
        B: "4100",
        C: "'3100null'",
        D: "'4100null'"
      },
      code: "true + 3 + '100' + null",
      explanation: "La opción correcta es D: `'4100null'`.\n\n**Explicación detallada:**\n\n1. **Coerción de tipos:**\n   - `true` se convierte en `1` cuando se utiliza en una operación matemática.\n   - `1 + 3` resulta en `4`.\n   - `4 + '100'` concatena el número `4` con la cadena `'100'`, dando `'4100'`.\n   - `'4100' + null` concatena `'4100'` con la cadena `'null'`, dando como resultado `'4100null'."
    },
    {
      id: "q81",
      question: "Which two console logs outputs `NaN`?",
      type: "multiple choice",
      correct_options: ["B", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "console.log(10 / Number('5'));",
        B: "console.log(parseInt('two'));",
        C: "console.log(10 / 'five');",
        D: "console.log(10 / 0);"
      },
      code: "// Sample code:\nconsole.log(10 / Number('5'));\nconsole.log(parseInt('two'));\nconsole.log(10 / 'five');\nconsole.log(10 / 0);",
      explanation: "Las respuestas correctas son B y C.\n\n**Explicación detallada:**\n\n1. **Opción B:**\n   - `parseInt('two')` intenta convertir la cadena `'two'` en un número. Esto no es posible, por lo que devuelve `NaN`.\n\n2. **Opción C:**\n   - Dividir `10` por una cadena no convertible (`'five'`) genera `NaN` porque la operación matemática no puede completarse.\n\n3. **Opciones incorrectas:**\n   - A: `Number('5')` convierte la cadena `'5'` en el número `5`, por lo que `10 / 5` resulta en `2`.\n   - D: Aunque dividir por `0` es indefinido matemáticamente, en JavaScript esto produce `Infinity`, no `NaN`."
    },
    {
      id: "q82",
      question: "Which statement phrases successfully?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "JSON.parse('foo');",
        B: "JSON.parse('\"foo\"');",
        C: "JSON.parse('\" 'foo' \"');",
        D: "JSON.parse('\"foo\"');"
      },
      explanation: "La opción correcta es D: `JSON.parse('\"foo\"');`.\n\n**Explicación detallada:**\n\n1. **Sintaxis válida:**\n   - `JSON.parse('\"foo\"')` evalúa correctamente la cadena JSON, porque incluye comillas dobles escapadas dentro de las comillas simples.\n\n2. **Opciones incorrectas:**\n   - A: Falta la estructura JSON válida (comillas dobles).\n   - B y C: La estructura de comillas dobles está incorrecta o mal escapada, lo que genera errores de sintaxis."
    },
    {
      id: "q83",
      question: "Refer to the following array. Which two lines of code result in a second array, `arr2`, being created such that `arr2` is not a reference to `arr1`?",
      type: "multiple choice",
      correct_options: ["A", "B"],
      number_of_correct_answers: 2,
      options: {
        A: "let arr2 = arr1.slice(0, 5);",
        B: "let arr2 = Array.from(arr1);",
        C: "let arr2 = arr1;",
        D: "let arr2 = arr1.sort();"
      },
      code: "let arr1 = [1, 2, 3, 4, 5];\n\\Insert code here\nconsole.log(arr2);",
      explanation: "Las respuestas correctas son A y B.\n\n**Explicación detallada:**\n\n1. **Opción A:**\n   - `slice` crea una copia superficial de una porción del array original. Al usar `slice(0, 5)`, se genera un nuevo array con los mismos elementos que `arr1`.\n\n2. **Opción B:**\n   - `Array.from` genera un nuevo array copiando todos los elementos de `arr1`.\n\n3. **Opciones incorrectas:**\n   - C: `arr2` es simplemente una referencia a `arr1`.\n   - D: `sort` modifica `arr1` directamente, y `arr2` será una referencia a este array modificado."
    },
    {
      id: "q84",
      question: "Refer to the code below. What value can a developer expect when referencing `o.js.secondCity`?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Undefined",
        B: "'new york'",
        C: "'New York'",
        D: "An error"
      },
      code: "let o = {\n  get js() {\n    let city1 = String('St. Louis');\n    let city2 = String('New York');\n\n    return {\n      firstCity: city1.toLowerCase(),\n      secondCity: city2.toLowerCase(),\n    };\n  }\n};",
      explanation: "La opción correcta es B: `'new york'`.\n\n**Explicación detallada:**\n\n1. **Propiedad `get`:**\n   - La propiedad `js` de `o` es un getter que devuelve un objeto con las ciudades convertidas a minúsculas.\n\n2. **`secondCity`:**\n   - `city2.toLowerCase()` convierte `'New York'` a `'new york'` y es la propiedad que se devuelve en `secondCity`.\n\n3. **Opciones incorrectas:**\n   - A: `undefined` no es correcto porque `secondCity` se define explícitamente.\n   - C: `'New York'` no se devuelve en mayúsculas porque se aplica `.toLowerCase()`.\n   - D: No hay errores en la sintaxis o ejecución."
    },
    {
      id: "q85",
      question: "Given the following code. What is the output of line 02?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "'Null'",
        B: "'X'",
        C: "'Object'",
        D: "'Undefined'"
      },
      code: "let x = null;\nconsole.log(typeof x);",
      explanation: "La opción correcta es C: `'Object'`.\n\n**Explicación detallada:**\n\n1. **Uso de `typeof`:**\n   - El operador `typeof` devuelve `'object'` para valores `null`. Este comportamiento se debe a un error histórico en la implementación de JavaScript.\n\n2. **Opciones incorrectas:**\n   - A y D: `Null` y `Undefined` no son valores que `typeof` devuelva para `null`.\n   - B: `'X'` no es relevante aquí."
    },
    {
      id: "q86",
      question: "Given the following code. What is the output of line 02?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "'x'",
        B: "'null'",
        C: "'object'",
        D: "'undefined'"
      },
      code: "let x = null;\nconsole.log(typeof x);",
      explanation: "La opción correcta es C: `'object'`.\n\n**Explicación detallada:**\n\n1. **Uso de `typeof`:**\n   - Aunque `null` representa la ausencia de un valor, el operador `typeof` devuelve `'object'`. Este comportamiento es un error histórico en JavaScript.\n\n2. **Opciones incorrectas:**\n   - A y B: `'x'` y `'null'` no son valores devueltos por `typeof`.\n   - D: `'undefined'` no aplica porque `null` es un valor definido intencionadamente."
    },
    {
      id: "q87",
      question: "Refer to the code below. What is the value of `foodMenu1` after the code executes?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "['pizza', 'burger', 'French fries', 'Garlic bread']",
        B: "['pizza', 'burger', 'French fries']",
        C: "['Garlic bread', 'pizza', 'burger', 'French fries']",
        D: "['Garlic bread']"
      },
      code: "let foodMenu1 = ['pizza', 'burger', 'French fries'];\nlet finalMenu = foodMenu1;\nfinalMenu.push('Garlic bread');",
      explanation: "La opción correcta es A: `['pizza', 'burger', 'French fries', 'Garlic bread']`.\n\n**Explicación detallada:**\n\n1. **Referencias compartidas:**\n   - `finalMenu` apunta al mismo array que `foodMenu1`, ya que no se creó una copia. Cualquier modificación en `finalMenu` afecta directamente a `foodMenu1`.\n\n2. **Efecto de `push`:**\n   - Al agregar `'Garlic bread'` con `push`, el nuevo elemento se añade al final de ambos, ya que comparten referencia."
    },
    {
      id: "q88",
      question: "What is returned by the function call on the last line?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "Undefined",
        B: "Last line throws an error.",
        C: "'Undefined values!'",
        D: "'Null value!'"
      },
      code: "function test(val) {\n  if (val === undefined) {\n    return 'Undefined value!';\n  }\n  if (val === null) {\n    return 'Null value!';\n  }\n  return val;\n}\n\nlet x;\ntest(x);",
      explanation: "La opción correcta es A: **Undefined.**\n\n**Explicación detallada:**\n\n1. **Valor de `x`:**\n   - `x` se declara, pero no se inicializa, lo cual le asigna el valor predeterminado `undefined`.\n\n2. **Condiciones en `test`:**\n   - La primera condición `if (val === undefined)` es verdadera, por lo que la función devuelve `'Undefined value!'`.\n\n3. **Conclusión:**\n   - Aunque en la pregunta original la opción A está ligeramente desalineada ('Undefined' en vez de 'Undefined value!'), parece indicar la elección correcta."
    },
    {
      id: "q89",
      question: "A developer is required to write a function that calculates the sum of elements in an array but is getting `undefined` every time the code is executed. \n\nThe developer needs to find what is missing in the code.",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "Replace line 2 with return arr.map((result, current) => (",
        B: "Replace line 4 with result = result + current;",
        C: "Replace line 3 with if(arr.length == 0) { return 0; }",
        D: "Replace line 5 with return result;"
      },
      explanation: "La opción correcta es D: **Replace line 5 with `return result;`.**\n\n**Explicación detallada:**\n\n1. **Falta de retorno:**\n   - En la implementación actual, el valor `result` nunca se devuelve al final de la función, lo que causa que se obtenga `undefined`.\n\n2. **Correcciones necesarias:**\n   - Reemplazar la línea 5 con `return result;` asegura que el valor calculado se devuelva correctamente.\n\n3. **Errores en otras opciones:**\n   - Opción A: `.map()` no es adecuado para sumar elementos.\n   - Opción B: La corrección sugerida no resuelve el problema principal (falta de retorno).\n   - Opción C: Aunque maneja arrays vacíos, no aborda el problema específico de esta implementación."
    },
    {
      id: "q90",
      question: "At Universal Containers, every team has its own way of copying JavaScript objects. The code snippet shows an implementation from one team. What is the output of the code execution?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "Hello Dan Doe",
        B: "Hello John Doe",
        C: "TypeError: dan.name is not a function",
        D: "TypeError: Assignment to constant variable."
      },
      explanation: "La opción correcta es C: **TypeError: dan.name is not a function.**\n\n**Explicación detallada:**\n\n1. **Uso de JSON.stringify:**\n   - `JSON.stringify` solo copia los valores de las propiedades, no las funciones. Por lo tanto, `dan.name` no se copia como método.\n\n2. **Resultado:**\n   - Cuando se intenta llamar a `dan.name()`, JavaScript arroja un `TypeError` porque `dan.name` no es una función.\n\n3. **Errores en otras opciones:**\n   - Opción A y B: Incorrectas porque `dan.name()` nunca se ejecutará como función.\n   - Opción D: No aplica aquí; el problema no está relacionado con la asignación de constantes."
    },
    {
      id: "q91",
      question: "Refer to the following array. Which three options result in `x` evaluating as `[3, 4, 5]`?",
      type: "multiple choice",
      correct_options: ["B", "C", "D"],
      number_of_correct_answers: 3,
      options: {
        A: "let x = arr.filter((a) => (a < 2));",
        B: "let x = arr.splice(2, 3);",
        C: "let x = arr.slice(2);",
        D: "let x = arr.filter((a) => { return a > 2 });",
        E: "let x = arr.slice(2, 3);"
      },
      code: "let arr = [1, 2, 3, 4, 5];",
      explanation: "Las opciones correctas son B, C y D:\n\n**Explicación detallada:**\n\n1. **Opción B:**\n   - `arr.splice(2, 3)` elimina tres elementos comenzando desde el índice 2 (incluido), devolviendo `[3, 4, 5]`.\n\n2. **Opción C:**\n   - `arr.slice(2)` devuelve una copia desde el índice 2 hasta el final del array, es decir, `[3, 4, 5]`.\n\n3. **Opción D:**\n   - `arr.filter((a) => { return a > 2 })` devuelve una nueva matriz con elementos que cumplen la condición, `[3, 4, 5]`.\n\n4. **Errores en otras opciones:**\n   - Opción A: Devuelve un array vacío porque no hay elementos menores que 2.\n   - Opción E: `slice(2, 3)` devuelve solo `[3]`, ya que incluye solo el índice 2."
    },
    {
      id: "q92",
      question: "What's the output of the following JavaScript code?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "1 and false",
        B: "false and NaN",
        C: "false and false"
      },
      code: "+true;\n!'Lydia';",
      explanation: "La respuesta correcta es '1 and false'.\n\n**Explicación:**\n\n1. **El operador unario `+`:**\n   - El operador `+` intenta convertir un operando a un número. En este caso, `true` se convierte en `1`, por lo que la primera expresión es `1`.\n\n2. **El operador `!`:**\n   - El operador `!` convierte su operando a un valor booleano y luego lo invierte. La cadena `'Lydia'` es un valor *truthy* (es decir, no es `null`, `undefined`, `0`, `NaN`, `false` ni una cadena vacía), por lo que al invertirla con `!`, el resultado es `false`."
    },
    {
      id: "q93",
      question: "What's the output of the following JavaScript code?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "true false true",
        B: "false false true",
        C: "true false false",
        D: "false true true"
      },
      code: "let a = 3;\nlet b = new Number(3);\nlet c = 3;\n\nconsole.log(a == b);\nconsole.log(a === b);\nconsole.log(b === c);",
      explanation: "La respuesta correcta es 'true false false'.\n\n**Explicación:**\n\n1. **Comparación con `==`:**\n   - El operador `==` compara los valores, y convierte a ambos operandos a un tipo común si es necesario. En este caso, `a` es un número primitivo, y `b` es un objeto `Number`. Cuando se compara, JavaScript convierte `b` a su valor primitivo (`3`), por lo que la comparación es `true`.\n\n2. **Comparación con `===`:**\n   - El operador `===` compara tanto el valor como el tipo. Como `a` es un número primitivo y `b` es un objeto, la comparación es `false`.\n\n3. **Comparación entre `b` y `c`:**\n   - `b` es un objeto `Number` y `c` es un número primitivo, por lo que `b === c` también es `false` porque los tipos no coinciden."
    },
    {
      id: "q94",
      question: "What's the output of the following JavaScript code?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "{}",
        B: "ReferenceError: greetign is not defined",
        C: "undefined",
        D: "TypeError: greetign is not a function"
      },
      code: "let greeting;\ngreetign = {}; // Typo!\nconsole.log(greetign);",
      explanation: "La respuesta correcta es '{}'.\n\n**Explicación:**\n\n1. **Declaración de la variable `greetign`:**\n   - En JavaScript, la declaración de una variable con `let` (en este caso, `greeting`) no se utiliza correctamente en la línea del código. Sin embargo, **JavaScript permite asignar valores a una variable que no se haya declarado explícitamente**.\n\n2. **El objeto vacío:**\n   - En lugar de generar un error por el error tipográfico en `greetign`, el valor asignado es un objeto vacío `{}`, y se imprime correctamente.\n\n3. **Opción incorrecta D:**\n   - La opción D es incorrecta porque la variable `greetign` no está siendo llamada como una función, sino que se está asignando un objeto vacío, por lo que no genera un `TypeError`."
    },                                                                                                                                                                    
  ];
};
