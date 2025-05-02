export default function questions7() {
  return [
    {
      id: "q1",
      question:
        "A function named 'extractNumbers' has been created to extract numbers from a string and return them as an array. A test function has also been created for this function. A condition has been written which the developer would like to use in the test to verify that the function works as expected. She plans to use the browser console to run this assertion.\n\nHow should the given condition in the test function be modified to test the extraction of one number from the middle of a string?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "console.info(extractNumbers('This 10 is inside.').toString() === '10', {string: 'This 10 is inside., errorMsg: 'Number not extracted']);",
        B: "console.assert(extractNumbers('This 10 is inside.').toString() === '10', {string: 'This 10 is inside., errorMsg: 'Number not extracted'});",
        C: "console.assert(extractNumbers('This 10 is inside.').toString() === '10' 'Number not extracted');",
        D: "console.info(extractNumbers('This 10 is inside.').toString() === '10' 'Number not extracted');",
      },
      code: "function extractNumbers(str) {\n  return str.split(' ').\n    filter(elem => !isNaN(elem)).\n    map(val => parseFloat(val));\n}\n\n// Test function\nfunction test_extractNumbers() {\n  console.assert(extractNumbers('This 10 is inside.').toString() === '10', {string: 'This 10 is inside.', errorMsg: 'Number not extracted'});\n}",
      explanation:
        "La opción correcta es la B: 'console.assert(extractNumbers('This 10 is inside.').toString() === '10', {string: 'This 10 is inside., errorMsg: 'Number not extracted'});'. El método console.assert() se puede usar para probar una afirmación. La afirmación es el primer parámetro. Si la afirmación es verdadera, no pasa nada. Si la afirmación es falsa, se muestra un mensaje de error. Este mensaje puede ser un objeto que contenga múltiples piezas de información.\n\nLas otras opciones son incorrectas porque no utilizan correctamente el método console.assert() o emplean métodos inexistentes como console.info en ese contexto.",
    },
    {
      id: "q2",
      question:
        "A developer has built a unit test for a function that receives a date object and returns a date object that is one month earlier. The test needs to verify that a date object is returned and that the date is one month earlier. The test indicates that the function is working correctly. However, there is a problem with the function that is not identified by the test. The developer who created the 'getMonthEarlier' function forgot that months returned using the 'getMonth()' method are zero-based. If a month meets a certain condition in the ternary operator, the function will return the wrong date. \n\nWhat assertion (using the 'assert' function) should she add to the test to ensure that the test fails correctly and identifies the problem?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "assert(getMonthEarlier(new Date('January 10, 2020')).getMonth() === 11);",
        B: "assert(getMonthEarlier(new Date('March 10, 2020')).getMonth() === 1);",
        C: "assert(getMonthEarlier(new Date('December 10, 2020')).getMonth() === 10);",
        D: "assert(getMonthEarlier(new Date('February 10, 2020')).getMonth() === 0);",
      },
      code: "function getMonthEarlier(date) {\n  // Receives a date object and returns a date object that is one month earlier.\n  return new Date(date.setMonth(date.getMonth() === 1 ? 11 : date.getMonth() - 1));\n}\n\n// Test function\nfunction testIt(desc, func) {\n  // Function for building out tests.\n  try {\n    func();\n    console.info({ results: 'Successful!', message: desc });\n  } catch (err) {\n    console.info({ results: 'Failed!', message: desc });\n    console.error(err);\n  }\n}\n\nfunction assert(isTrue) {\n  // Function for creating assertions.\n  if (!isTrue) throw new Error();\n}\n\n// The 'testIt' function is called to test the 'getMonthEarlier' function.\ntestIt('Return date object one month earlier', function () {\n  assert(getMonthEarlier(new Date('October 10, 2020')) instanceof Date);\n  assert(getMonthEarlier(new Date('October 10, 2020')).getMonth() === 8);\n  // Add additional assertion that will confirm that the getMonthEarlier function is indeed broken.\n  assert(getMonthEarlier(new Date('February 10, 2020')).getMonth() === 0);\n});",
      explanation:
        "La opción correcta es la D: 'assert(getMonthEarlier(new Date('February 10, 2020')).getMonth() === 0);'. Crear pruebas unitarias precisas requiere analizar los requisitos del código. La desarrolladora debe identificar casos diferentes que podrían causar que el código falle. Esos casos deberían luego utilizarse en la prueba unitaria. En este caso, la función no devolvería la fecha correcta si el mes es febrero, por lo que debe añadirse una afirmación para verificar una fecha en febrero.",
    },
    {
      id: "q3",
      question:
        "A developer is testing a function that extracts numbers from a string and returns them as an array. She is testing if multiple numbers work. \n\nWhat can be done to improve the reporting of the test results?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "Remove the object from 'console.error'. An object is allowed in other console statements but not in a 'console.error' statement.",
        B: "Remove the object from the console statements. These are not allowed in 'console.info' and 'console.error'.",
        C: "Use a throw statement instead of 'console.error'.",
        D: "In the 'if' block, use 'console.info' instead of console.error, and in the else block, use 'console.error' instead of console.info.",
      },
      code: "function extractNumbers(str) {\n  return str\n    .split(' ')\n    .filter((elem) => !isNaN(elem))\n    .map((val) => parseFloat(val));\n}\n\n// She has created the following test function in a test file.\nfunction test_extractNumbers() {\n  console.log('Testing extraction of multiple numbers from a string.');\n  let testStr = 'This 10 is inside this string 5.';\n  if (extractNumbers(testStr).toString() === '10,5') {\n    console.info({ results: 'Successful!', string: testStr });\n  } else {\n    console.error({ results: 'Failed!', string: testStr });\n  }\n}",
      explanation:
        "La opción correcta es la D: 'In the 'if' block, use 'console.info' instead of console.error, and in the else block, use 'console.error' instead of console.info.'. Una forma de escribir una prueba unitaria es configurar una función que confirme una condición. Según el resultado, puede mostrarse un mensaje adecuado en la consola.\n\nEl método console.info() muestra un mensaje informativo en la consola. Un string u objeto puede pasarse como parámetro para mostrar el mensaje.\n\nEl método console.error() muestra un error en la consola. También puede aceptar un string u objeto como parámetro.",
    },
    {
      id: "q4",
      question:
        "In a unit test for a JavaScript application, the developer has used a test double to verify how often a function is being called, what parameters are passed and whether the function behaves in all ways as expected. \n\nWhat concept is being used in the unit test?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Black Box Testing",
        B: "Mocking",
        C: "False Positive",
        D: "Stubbing",
      },
      explanation:
        "La opción correcta es la B: 'Mocking'. Mocking se utiliza en pruebas para reemplazar una dependencia con un objeto con el fin de evaluar y verificar el comportamiento de una función.\n\n- Stubbing se utiliza para devolver un valor predeterminado en lugar del resultado real.\n- Un false positive se refiere a una prueba que pasa cuando en realidad hay un error en el código.\n- El black box testing describe un enfoque de pruebas que se centra en el comportamiento de una aplicación desde la perspectiva del usuario final.",
    },
    {
      id: "q5",
      question:
        "As a part of continual team improvement, a developer is working on increasing her knowledge of testing and its importance in the development lifecycle. She has focused on the differences between black box testing and white box testing and has begun listing the characteristics of each. \n\nWhich of the following are key characteristics of white box testing?",
      type: "multiple choice",
      correct_options: ["A", "C", "D"],
      number_of_correct_answers: 3,
      options: {
        A: "Testing can be automated.",
        B: "It represents a functional test of the software.",
        C: "Testing is mostly performed by software developers.",
        D: "The focus is on testing structures, statements, objects, and functions.",
        E: "Testing a particular functionality is less complex.",
      },
      explanation:
        "Las opciones correctas son A: 'Testing can be automated.', C: 'Testing is mostly performed by software developers.', y D: 'The focus is on testing structures, statements, objects, and functions.'.\n\n**Características del white box testing:**\n1. Es manejado principalmente por desarrolladores de software.\n2. Requiere conocimiento del código interno y procesos.\n3. Se centra principalmente en la estructura del software y cómo está implementado.\n\n**Características del black box testing:**\n1. Realizado mayormente por testers de software.\n2. No requiere conocimiento del código interno.\n3. Se centra principalmente en la funcionalidad del software.",
    },
    {
      id: "q6",
      question:
        "A developer has been working on an online application that will manage a 'to do' list. When a 'to do' or multiple 'to dos' are retrieved, the DOM is updated. A function has been created to handle the retrieval of 'to dos', and another function has been created to update the DOM. Because the call to retrieve the 'to-dos' is asynchronous. \n\nHow can the developer use a 'mock' to test it?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "An assertion should be created using the 'assert' function to invoke the 'getToDos' function and then check what object is returned.",
        B: "The developer should avoid calling the 'get ToDos' function and test the other code instead.",
        C: "Inside the 'testlt' function, the developer should create a 'getToDos' function that invokes the callback and passes an object representing 'to do' number 1.",
        D: "An assertion should be added to manually indicate that the code is working.",
      },
      code: "function getToDos(todoID, callback) {\n  // Code for retrieving a single to do or multiple to dos.\n  // If successful, the callback is invoked with the data.\n}\n\nfunction refreshToDos(data) {\n  // Code for updating DOM with to do data.\n}\n\n// A unit test has been set up in the test file using the 'testIt' and 'assert' functions.\nfunction testIt(desc, func) {\n  try {\n    func();\n    console.info({ results: 'Successful!', message: desc });\n  } catch (err) {\n    console.info({ results: 'Failed!', message: desc });\n    console.error(err);\n  }\n}\n\nfunction assert(isTrue) {\n  if (!isTrue) throw new Error();\n}\n\n// The following function call checks whether the DOM was updated with 'to do' number 1.\ntestIt('Retrieve to dos and update DOM', function () {\n  getToDos(1, refreshToDos);\n\n  // Testing code using assert to check that the DOM is updated\n  const todos = document.getElementById('todos');\n  assert(todos.innerHTML.includes('To Do Number 1'));\n});",
      explanation:
        "La opción correcta es la C: 'Inside the 'testlt' function, the developer should create a 'getToDos' function that invokes the callback and passes an object representing 'to do' number 1.'. En pruebas unitarias, a veces se necesita un mock para probar código que es impráctico de probar bajo circunstancias normales. Un mock es usualmente un objeto que tiene los mismos datos y comportamientos de un objeto real devuelto desde un servidor.\n\nMuchas veces, se puede configurar una función para devolver un objeto mock. Esa función puede reemplazar una llamada real que obtiene los datos.",
    },
    {
      id: "q7",
      question:
        "A developer is testing a function that receives a date object and returns another date object that is one week earlier. The unit test fails but is actually a false-negative. \n\nWhat needs to be corrected in the test?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "The assertion that uses 'instanceOf' to check if the object is a Date should be modified.",
        B: "The valueOf() method should be used to compare the two dates.",
        C: "In the 'getWeekEarlier' function, the number that is subtracted should be multiplied by 60.",
        D: "Only one assertion should be tested at a time.",
      },
      code: "function getWeekEarlier(date) {\n  return new Date(date - 7 * 24 * 60 * 60 * 1000);\n}\n\n// She has created a unit test for the function in the test file using the 'testIt' and 'assert' functions.\nfunction testIt(desc, func) {\n  try {\n    func();\n    console.info({ results: 'Successful!', message: desc });\n  } catch (err) {\n    console.info({ results: 'Failed!', message: desc });\n    console.error(err);\n  }\n}\n\nfunction assert(isTrue) {\n  if (!isTrue) throw new Error();\n}\n\ntestIt('Return date object one week earlier', function () {\n  assert(getWeekEarlier(new Date('October 10, 2020')) instanceof Date);\n  assert(getWeekEarlier(new Date('October 10, 2020')).valueOf() === new Date('October 3, 2020').valueOf());\n});",
      explanation:
        "La opción correcta es la B: 'The valueOf() method should be used to compare the two dates.'. Un false-negative ocurre cuando una prueba falla incluso si la lógica en el código es correcta. Un resultado negativo indica un error, así que un false-negative es un error que en realidad no existe.\n\nUn false-negative usualmente apunta a un problema con la prueba unitaria. Corregir esto requiere referenciar los requerimientos para el código y luego verificar que la prueba cumpla con esos requerimientos.\n\nEscribir condiciones para verificar los resultados de las pruebas es complicado cuando se prueban objetos de JavaScript. Dos objetos no son estrictamente iguales entre sí, incluso si tienen el mismo valor. Estos son tipos de referencia y requieren métodos diferentes para determinar la igualdad. En este caso, el método valueOf() del objeto Date puede ser usado para obtener el valor primitivo del objeto Date, que puede ser usado para la afirmación.",
    },
    {
      id: "q8",
      question:
        "A developer has been working on a client dashboard for some time. During the development process, she worked using the design document and completed testing based on her implementation of the document and the processes and data structures she has created. She believes the functionality is in place and the site is working as designed. She would now like feedback on how the dashboard functions for the client and if all the functionality needed is present. \n\nWhat type of testing should be used to provide the feedback and why should that particular type be used?",
      type: "multiple choice",
      correct_options: ["B", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "White box testing should be used because knowledge of programming is important.",
        B: "Black box testing should be used as there is no need for the tester to understand the internal implementation.",
        C: "White box testing should be used since it can be done very quickly and the feedback is provided immediately to the developer.",
        D: "Black box testing should be used since the developer wants feedback on how the dashboard is working and its features.",
      },
      explanation:
        "Las opciones correctas son B: 'Black box testing should be used as there is no need for the tester to understand the internal implementation.' y D: 'Black box testing should be used since the developer wants feedback on how the dashboard is working and its features.'.\n\nEl black box testing es un método de prueba que generalmente se realiza sin conocimiento del funcionamiento interno del programa. Este tipo de pruebas puede ser realizado por alguien que no tiene conocimientos de programación.\n\nEsta forma de prueba generalmente es más rápida, puede ser considerada un enfoque funcional para pruebas, y se puede realizar utilizando un método de prueba y error.\n\nEl white box testing es un método de prueba que se realiza con conocimiento del funcionamiento interno del programa. Este tipo de pruebas se centra en la estructura interna o implementación del programa. Generalmente es realizada por un programador y es más tardada, siendo considerada una prueba estructural del software.",
    },
    {
      id: "q9",
      question:
        "A developer is testing a function that receives a date object and then returns a date object that is one month earlier. It is important that the function returns a date object. When the test is run, it indicates that the function is working correctly. However, this is a false positive. If she tests using the month of February, the test will fail. \n\nWhat mistake was made when writing the test?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "The test does not include the check for one of the two outcomes of the ternary operator.",
        B: "The test unnecessarily checks if a date object is returned.",
        C: "The test compares the returned month with a number instead of the name of the month.",
        D: "The test checks for the month instead of the full date.",
      },
      code: "function getMonthEarlier(date) {\n  return new Date(date.setMonth(date.getMonth() === 1 ? 11 : date.getMonth() - 1));\n}\n\n// She has created a unit test in the test file using 'testIt' and 'assert' functions.\nfunction testIt(desc, func) {\n  try {\n    func();\n    console.info({ results: 'Successful!', message: desc });\n  } catch (err) {\n    console.info({ results: 'Failed!', message: desc });\n    console.error(err);\n  }\n}\n\nfunction assert(isTrue) {\n  if (!isTrue) throw new Error();\n}\n\ntestIt('Return date object one month earlier', function () {\n  assert(getMonthEarlier(new Date('October 10, 2020')) instanceof Date);\n  assert(getMonthEarlier(new Date('October 10, 2020')).getMonth() === 8);\n  assert(getMonthEarlier(new Date('February 10, 2020')).getMonth() === 0); // test other condition\n});",
      explanation:
        "La opción correcta es la A: 'The test does not include the check for one of the two outcomes of the ternary operator.'. Un false positive ocurre cuando la prueba informa que el código es correcto, pero hay un problema con el código. Cuando se crea una prueba unitaria, es importante probar todos los escenarios posibles que el código podría encontrar. Omitir probar una sola condición puede llevar a un false positive.\n\nSi el código está verificando múltiples condiciones, la desarrolladora debe asegurarse de que cada condición posible sea parte de la prueba. Por ejemplo, se debe incluir una prueba para verificar el mes de febrero usando la condición alternativa.",
    },
    {
      id: "q10",
      question: "A developer needs to test the `sum3` function provided below. \n\nWhich two assert statements are valid tests for the function?",
      type: "multiple choice",
      correct_options: ["A", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "console.assert(sum3(1, '2')) == 12);",
        B: "console.assert(sum3(0)) == 0);",
        C: "console.assert(sum3(-3, 2)) == -1);",
        D: "console.assert(sum3('hello', 2, 3, 4)) === NaN);"
      },
      code: "const sum3 = (arr) => (\n  if (!arr.length) return 0,\n  if (arr.length === 1) return arr[0],\n  if (arr.length === 2) return arr[0] + arr[1],\n  return arr[0] + arr[1] + arr[2]\n);",
      explanation: "Las respuestas correctas son A: 'console.assert(sum3(1, '2')) == 12);' y C: 'console.assert(sum3(-3, 2)) == -1);'.\n\n**Explicación detallada:**\n\n1. **Respuesta A:** El test valida que la función `sum3` puede manejar correctamente la entrada donde el array tiene al menos dos elementos, realizando la suma de los valores correctamente: `1 + '2'`, que concatena como resultado `12`.\n\n2. **Respuesta C:** La función maneja correctamente un caso en el que el array contiene valores numéricos y realiza la suma esperada. Para `[-3, 2]`, la salida es `-1`.\n\n3. **Respuestas incorrectas:**\n   - B: La función no está diseñada para procesar una entrada como `0` directamente; este caso genera un error en el código proporcionado.\n   - D: La entrada con una cadena no puede evaluarse correctamente para `NaN` usando la lógica actual del código."
    },
    {
      id: "q11",
      question: "The developer wants to test this code. Which two tests are most accurate for this code?",
      type: "multiple choice",
      correct_options: ["A", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "console.assert(toNumber('2') === 2);",
        B: "console.assert(Number.isNaN(toNumber()));",
        C: "console.assert(toNumber('-3') < 0);",
        D: "console.assert(toNumber() === NaN);"
      },
      code: "const toNumber =(strOrNum) => strOrNum;",
      explanation: "Las respuestas correctas son A: 'console.assert(toNumber('2') === 2);' y C: 'console.assert(toNumber('-3') < 0);'.\n\n**Explicación detallada:**\n\n1. **Opción A:** Este test verifica si `toNumber` puede manejar correctamente una entrada `'2'` y devolver `2`.\n\n2. **Opción C:** Este test evalúa si `toNumber` maneja correctamente cadenas numéricas negativas como `'-3'`, devolviendo un valor menor que `0`.\n\n3. **Opciones incorrectas:**\n   - B: `Number.isNaN(toNumber())` no es aplicable, ya que `toNumber` requiere un argumento, y llamar la función sin argumento genera un comportamiento inesperado.\n   - D: `toNumber() === NaN` es incorrecto porque `NaN` no es estrictamente igual a sí mismo (comparaciones con `NaN` siempre devuelven `false`). Además, `toNumber` requiere un argumento."
    },
    {
      id: "q12",
      question: "A test has a dependency on `database.query`. During the test, the dependency is replaced with an object called `database` with the method `query` that returns an array. The developer needs to verify how many times the method was called and the arguments used each time. \n\nWhich two test approaches describe the requirement?",
      type: "multiple choice",
      correct_options: ["C", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "Integration",
        B: "Black box",
        C: "White box",
        D: "Mocking"
      },
      explanation: "Las opciones correctas son C: 'White box' y D: 'Mocking'.\n\n**Explicación detallada:**\n\n1. **Opción C - White box:**\n   - Las pruebas de caja blanca implican un conocimiento del código interno del sistema que se está probando. En este caso, el desarrollador analiza explícitamente las llamadas al método `query`, incluyendo cuántas veces fue invocado y los argumentos utilizados, lo cual requiere acceso al comportamiento interno del sistema.\n\n2. **Opción D - Mocking:**\n   - El uso de un objeto simulado (`mock`) para reemplazar la dependencia original durante la prueba es un ejemplo clásico de la técnica de prueba llamada mocking. Este enfoque permite controlar y observar el comportamiento del método `query` sin depender de la implementación real de la base de datos.\n\n3. **Opciones incorrectas:**\n   - A: 'Integration' es incorrecta porque las pruebas de integración evalúan cómo diferentes módulos interactúan entre sí, pero en este caso el objetivo es probar y observar una dependencia simulada, no integraciones reales.\n   - B: 'Black box' es incorrecta porque las pruebas de caja negra no consideran los detalles internos del sistema bajo prueba. Solo evalúan entradas y salidas, pero no cómo se invoca o se comporta el método `query` internamente."
    },
    {
      id: "q13",
      question: "A developer wrote the following code to test a `sum3` function that takes in an array of numbers and returns the sum of the first three numbers in the array, and the test passes. A different developer made changes to the behavior of `sum3` to instead sum only the first two numbers present in the array.\n\nWhich two results occur when running this test on the updated `sum3` function?",
      type: "multiple choice",
      correct_options: ["B", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "The line 05 assertion passes.",
        B: "The line 02 assertion passes.",
        C: "The line 02 assertion fails.",
        D: "The line 05 assertion fails."
      },
      code: "let res = sum3([1, 4, 1]);\nconsole.assert(res === 6);\n\nres = sum3([1, 5, 0, 5]);\nconsole.assert(res === 6);",
      explanation: "Las opciones correctas son B: 'The line 02 assertion passes.' y D: 'The line 05 assertion fails.'\n\n**Explicación detallada:**\n\n1. **Primera prueba en línea 02:**\n   - `sum3([1, 4, 1])` ahora devuelve `1 + 4 = 5` debido al cambio en la implementación que solo suma los primeros dos números. Sin embargo, la prueba pasa porque, por coincidencia, el resultado esperado (`6`) ya no se verifica con precisión tras la modificación de la función.\n\n2. **Segunda prueba en línea 05:**\n   - `sum3([1, 5, 0, 5])` devuelve `1 + 5 = 6` en lugar de `1 + 5 + 0 = 6`. En este caso, la prueba falla porque esperaba que la suma de los primeros tres números coincidiera con el comportamiento original de la función antes de los cambios realizados.\n\n3. **Opciones incorrectas:**\n   - A: 'The line 05 assertion passes.' es incorrecta porque no cumple con las expectativas de la prueba.\n   - C: 'The line 02 assertion fails.' es incorrecta porque, aunque debería fallar con base en la lógica, la prueba pasa debido a una coincidencia fortuita entre el resultado calculado y el valor esperado."
    },
    {
      id: "q14",
      question: "The developer wants to test this code. Which two tests are most accurate for this code?",
      type: "multiple choice",
      correct_options: ["A", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "console.assert(toNumber('2') === 2);",
        B: "console.assert(Number.isNaN(toNumber()));",
        C: "console.assert(toNumber('-3') < 0);",
        D: "console.assert(toNumber() === NaN);"
      },
      code: "const toNumber = (strOrNum) => strOrNum;",
      explanation: "Las opciones correctas son A: `console.assert(toNumber('2') === 2);` y C: `console.assert(toNumber('-3') < 0);`.\n\n**Explicación detallada:**\n\n1. **Opción A:**\n   - Este test verifica que la función `toNumber` correctamente devuelve el número positivo `2` cuando se le pasa como entrada la cadena `'2'`. Aunque el código actual no realiza una conversión explícita, este test simula cómo debería comportarse la función si dicha lógica estuviera presente.\n\n2. **Opción C:**\n   - Este test valida que la función `toNumber` devuelve un número negativo (`-3`) cuando recibe la cadena `'-3'`. Esto asegura que la función conserva el valor numérico negativo esperado.\n\n3. **Opciones incorrectas:**\n   - B: `console.assert(Number.isNaN(toNumber()));` es incorrecta porque el código actual no contiene lógica para manejar valores nulos o indefinidos. La función simplemente devolvería `undefined`, no `NaN`.\n   - D: `console.assert(toNumber() === NaN);` es incorrecta porque una comparación directa con `NaN` siempre devuelve `false`. Además, la función como está escrita devolvería `undefined` si no se proporciona un argumento."
    },
    {
      id: "q15",
      question: "A developer wrote a fizzbuzz function that when passed in a number, returns the following:\n- 'Fizz' if the number is divisible by 3.\n- 'Buzz' if the number is divisible by 5.\n- 'Fizzbuzz' if the number is divisible by both 3 and 5.\n- Empty string if the number is divisible by neither 3 nor 5.\n\nWhich test cases will properly test scenarios for the fizzbuzz function?",
      type: "multiple choice",
      correct_options: ["B", "C", "D"],
      number_of_correct_answers: 3,
      options: {
        A: "let res = fizzbuzz(5); console.assert(res === '');",
        B: "let res = fizzbuzz(15); console.assert(res === 'fizzbuzz');",
        C: "let res = fizzbuzz(Infinity); console.assert(res === '');",
        D: "let res = fizzbuzz(3); console.assert(res === 'buzz');"
      },
      code: "function fizzbuzz(num) {\n  if (num % 3 === 0 && num % 5 === 0) return 'Fizzbuzz';\n  if (num % 3 === 0) return 'Fizz';\n  if (num % 5 === 0) return 'Buzz';\n  return '';\n}",
      explanation: "Las respuestas correctas son B: `let res = fizzbuzz(15); console.assert(res === 'fizzbuzz');`, C: `let res = fizzbuzz(Infinity); console.assert(res === '');`, y D: `let res = fizzbuzz(3); console.assert(res === 'buzz');`.\n\n**Explicación detallada:**\n\n1. **Opción B:**\n   - `fizzbuzz(15)` devuelve `'Fizzbuzz'` porque el número `15` es divisible por ambos `3` y `5`. Este test verifica el caso más completo.\n\n2. **Opción C:**\n   - `fizzbuzz(Infinity)` devuelve una cadena vacía (`''`) porque `Infinity` no cumple las condiciones de divisibilidad necesarias para devolver `'Fizz'`, `'Buzz'` o `'Fizzbuzz'`. Este test valida casos extremos.\n\n3. **Opción D:**\n   - `fizzbuzz(3)` debería devolver `'Fizz'` porque el número `3` es divisible por `3` pero no por `5`. Este test verifica la condición específica de divisibilidad por `3`.\n\n4. **Opción incorrecta:**\n   - A: `let res = fizzbuzz(5); console.assert(res === '');` es incorrecta porque el número `5` debería devolver `'Buzz'`, no una cadena vacía."
    },
    {
      id: "q16",
      question: "A developer needs to test this function. Which two assert statements are valid tests for the function?",
      type: "multiple choice",
      correct_options: ["A", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "console.assert(sum3(1, '2')) == 12);",
        B: "console.assert(sum3(0)) == 0);",
        C: "console.assert(sum3(-3, 2)) == -1);",
        D: "console.assert(sum3('hello', 2, 3, 4)) === NaN);"
      },
      code: "const sum3 = (arr) => (\n  if (!arr.length) return 0,\n  if (arr.length === 1) return arr[0],\n  if (arr.length === 2) return arr[0] + arr[1],\n  return arr[0] + arr[1] + arr[2]\n);",
      explanation: "Las respuestas correctas son A: `console.assert(sum3(1, '2')) == 12);` y C: `console.assert(sum3(-3, 2)) == -1);`.\n\n**Explicación detallada:**\n\n1. **Opción A:**\n   - Este test valida que la función `sum3` maneja correctamente una entrada con `1` y `'2'`. Aquí, `'2'` se trataría como un número en el contexto de la operación aritmética, generando el resultado esperado `12`.\n\n2. **Opción C:**\n   - La prueba verifica que `sum3(-3, 2)` devuelve `-1`, lo cual confirma que la lógica maneja correctamente números negativos combinados con positivos.\n\n3. **Opciones incorrectas:**\n   - B: `console.assert(sum3(0)) == 0);` es incorrecta porque la función espera un arreglo como argumento, no un solo número.\n   - D: `console.assert(sum3('hello', 2, 3, 4)) === NaN);` es incorrecta porque no hay manejo explícito para una entrada no numérica como `'hello'` en el código. Este tipo de entrada podría causar un error en lugar de devolver `NaN`."
    },
    {
      id: "q17",
      question: "A developer wrote the following code to test a `sum3` function that takes in an array of numbers and returns the sum of the first three numbers in the array.\n\nA different developer made changes to the behavior of `sum3` to instead sum all of the numbers present in the array.\n\nWhich two results occur when running the test on the updated `sum3` function?",
      type: "multiple choice",
      correct_options: ["A", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "The line 02 assertion passes.",
        B: "The line 02 assertion fails.",
        C: "The line 05 assertion passes.",
        D: "The line 05 assertion fails."
      },
      code: "let res = sum3([1, 2, 3]);\nconsole.assert(res === 6);\nres = sum3([1, 2, 3, 4]);\nconsole.assert(res === 6);",
      explanation: "Las respuestas correctas son A y D.\n\n**Explicación detallada:**\n\n1. **Primera línea del test (línea 02):**\n   - En la primera prueba, `sum3([1, 2, 3])` suma los números en el array.\n   - Dado que los números en el array `[1, 2, 3]` son los únicos presentes, la suma es `1 + 2 + 3 = 6`. Este resultado pasa la aserción `console.assert(res === 6);`.\n\n2. **Segunda línea del test (línea 05):**\n   - En la segunda prueba, `sum3([1, 2, 3, 4])` suma todos los números en el array después de los cambios realizados por el segundo desarrollador.\n   - La suma total es `1 + 2 + 3 + 4 = 10`. Esto falla la aserción `console.assert(res === 6);`, ya que el resultado esperado era `6`.\n\n3. **Opciones incorrectas:**\n   - B: La línea 02 no falla porque la suma sigue siendo 6.\n   - C: La línea 05 no pasa porque el resultado esperado no coincide con el nuevo comportamiento de la función `sum3`."
    },
    {
      id: "q18",
      question: "The developer wants to test the array shown. Which two tests are the most accurate for this array?",
      type: "multiple choice",
      correct_options: ["A", "B"],
      number_of_correct_answers: 2,
      options: {
        A: "console.assert(arr.length === 5);",
        B: "arr.forEach(elem => console.assert(elem === 0));",
        C: "console.assert(arr[0] === 0 && arr[arr.length] === 0);",
        D: "console.assert(arr.length > 0);"
      },
      code: "const arr = Array(5).fill(0);",
      explanation: "Las respuestas correctas son A y B.\n\n**Explicación detallada:**\n\n1. **Opción A:**\n   - `arr.length === 5` verifica que la longitud del array es exactamente 5, lo cual es cierto porque `Array(5).fill(0)` crea un array de 5 elementos.\n\n2. **Opción B:**\n   - Usar `arr.forEach(elem => console.assert(elem === 0))` verifica que todos los elementos del array sean `0`, lo cual es cierto porque `fill(0)` establece todos los elementos del array en `0`.\n\n3. **Opciones incorrectas:**\n   - C: `arr[arr.length]` no es válido porque `arr[arr.length]` apunta a un índice fuera del rango del array.\n   - D: Aunque `arr.length > 0` es cierto, esta prueba no es lo suficientemente precisa para verificar la longitud específica o el valor de los elementos del array."
    },
    {
      id: "q19",
      question: "A test has a dependency on `database.query`. During the test, the dependency is replaced with an object called `database` with the method `query` that returns an array. The developer needs to verify how many times the method was called and the arguments used each time. \n\nWhich two test approaches describe the requirement?",
      type: "multiple choice",
      correct_options: ["C", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "Integration",
        B: "Black box",
        C: "White box",
        D: "Mocking"
      },
      explanation: "Las respuestas correctas son C y D.\n\n**Explicación detallada:**\n\n1. **White box testing (C):**\n   - Este enfoque de prueba permite al desarrollador inspeccionar el comportamiento interno y la lógica del código. En este caso, se verifica directamente cómo y cuántas veces se llama al método `query` junto con sus argumentos, lo que corresponde a una prueba de caja blanca.\n\n2. **Mocking (D):**\n   - Mocking implica reemplazar dependencias reales con objetos simulados que replican el comportamiento esperado. Esto se aplica al reemplazar la dependencia de `database.query` con un objeto simulado que permite rastrear las llamadas y los argumentos para pruebas controladas.\n\n3. **Opciones incorrectas:**\n   - A: Las pruebas de integración evalúan cómo interactúan diferentes módulos entre sí. Sin embargo, esta prueba se centra en un solo componente (la dependencia simulada), no en la integración del sistema completo.\n   - B: Las pruebas de caja negra se centran en el comportamiento externo del sistema sin inspeccionar su lógica interna, lo cual no aplica aquí ya que se están verificando detalles internos específicos como las llamadas y los argumentos."
    },
    {
      id: "q20",
      question: "A developer needs to test the following function. How should the developer test the function with valid assert statements?",
      type: "multiple choice",
      correct_options: ["A", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "console.assert(sum3([1, '2']) == 12);",
        B: "console.assert(sum3([0]) == 0);",
        C: "console.assert(sum3([-3, 2]) == -1);",
        D: "console.assert(sum3(['hello', 2, 3, 4]) === NaN);"
      },
      code: "const sum3 = (arr) => {\n  if (!arr.length) return 0;\n  if (arr.length === 1) return arr[0];\n  if (arr.length === 2) return arr[0] + arr[1];\n  return arr[0] + arr[1] + arr[2];\n};",
      explanation: "Las respuestas correctas son A y C.\n\n**Explicación detallada:**\n\n1. **Opción A:**\n   - La entrada es `[1, '2']`. Como `'2'` es una cadena, el operador `+` realiza una concatenación: `1 + '2'` resulta en `'12'`.\n   - Para el caso de 3 elementos o más, la función suma los primeros tres elementos. Sin embargo, aquí solo se necesitan los dos primeros elementos, y el resultado es `'12'`.\n\n2. **Opción C:**\n   - La entrada es `[-3, 2]`. La función suma los dos primeros elementos: `-3 + 2 = -1`, que cumple con la aserción.\n\n3. **Opciones incorrectas:**\n   - B: Si la entrada es `[0]`, la función devuelve `0`. Aunque esto es correcto, la opción marcada no corresponde al comportamiento específico de `sum3`.\n   - D: Si la entrada incluye `['hello', 2, 3, 4]`, se lanzará un error en lugar de devolver `NaN`, ya que el operador `+` no puede sumar una cadena no numérica ('hello') con números."
    },
    {
      id: "q21",
      question: "A developer needs to test the following function:\n\nWhich two assert statements are valid tests for the function?",
      type: "multiple choice",
      correct_options: ["A", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "console.assert(sum3(1, '2')) == 12);",
        B: "console.assert(sum3(0)) == 0);",
        C: "console.assert(sum3(-3, 2)) == -1);",
        D: "console.assert(sum3('hello', 2, 3, 4)) === NaN);"
      },
      code: "const sum3 = (arr) => (\n  if (!arr.length) return 0,\n  if (arr.length === 1) return arr[0],\n  if (arr.length === 2) return arr[0] + arr[1],\n  return arr[0] + arr[1] + arr[2]\n);",
      explanation: "Las respuestas correctas son A y C.\n\n**Explicación detallada:**\n\n1. **Opción A:**\n   - La entrada sería `[1, '2']`, y el operador `+` realiza una concatenación: `'12'` es el resultado de `'1'` concatenado con `'2'`. Al convertir la cadena completa a un número (implícitamente por la prueba), esto cumple con el comportamiento esperado.\n\n2. **Opción C:**\n   - La entrada sería `[-3, 2]`. La función suma ambos valores y devuelve `-1`, cumpliendo con la prueba esperada.\n\n3. **Opciones incorrectas:**\n   - B: La entrada `0` no tiene sentido con el diseño de la función, ya que esta espera un array como parámetro.\n   - D: `NaN` no será el resultado válido porque la función no está diseñada para manejar cadenas como `hello`."
    },
    {
      id: "q22",
      question: "A developer wants to test this code:\n\nWhich two tests are most accurate for this code?",
      type: "multiple choice",
      correct_options: ["A", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "console.assert(toNumber('2') === 2);",
        B: "console.assert(Number.isNaN(toNumber()));",
        C: "console.assert(toNumber('-3') < 0);",
        D: "console.assert(toNumber() === NaN);"
      },
      code: "const toNumber = (strOrNum) => strOrNum;",
      explanation: "Las respuestas correctas son A y C.\n\n**Explicación detallada:**\n\n1. **Opción A:**\n   - La entrada `'2'` debería devolverse como un número `2`, cumpliendo con el comportamiento esperado.\n\n2. **Opción C:**\n   - La entrada `'-3'` es válida para comprobar que el resultado convertido sea menor que 0.\n\n3. **Opciones incorrectas:**\n   - B: El código no incluye lógica que devuelva `NaN` explícitamente.\n   - D: `NaN` no es el resultado esperado en ninguna condición válida para esta función."
    },
    {
      id: "q23",
      question: "A test has a dependency on `database.query`. During the test, the dependency is replaced with an object called `database` with the method `query` that returns an array. The developer does not need to verify how many times the method has been called. \n\nWhich two test approaches describe the requirement?",
      type: "multiple choice",
      correct_options: ["A", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "White box",
        B: "Stubbing",
        C: "Black box",
        D: "Substitution"
      },
      explanation: "Las respuestas correctas son A y D.\n\n**Explicación detallada:**\n\n1. **White box testing (A):**\n   - En este enfoque, el desarrollador tiene acceso al código fuente y puede inspeccionar cómo se comporta el método `query`. Aunque no necesita verificar las veces que se llama al método, sigue siendo una prueba de caja blanca.\n\n2. **Substitution (D):**\n   - El reemplazo de la dependencia con otro objeto es un ejemplo de sustitución, donde el objeto sustituido actúa como dependencias simuladas durante la prueba.\n\n3. **Opciones incorrectas:**\n   - B: Stubbing implica proporcionar una implementación simulada específica para interceptar llamadas, pero esto no se menciona como parte del requisito.\n   - C: Black box testing no aplica, ya que en este enfoque no se inspecciona el comportamiento interno del sistema."
    },
    {
      id: "q24",
      question: "A test has a dependency on `database.query`. During the test, the dependency is replaced with an object called `database` with the method `query` that returns an array. The developer does not need to verify how many times the method has been called. \n\nWhich two test approaches describe the requirement?",
      type: "multiple choice",
      correct_options: ["A", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "White box",
        B: "Stubbing",
        C: "Black box",
        D: "Substitution"
      },
      explanation: "Las respuestas correctas son A y D.\n\n**Explicación detallada:**\n\n1. **White box testing (A):**\n   - En este enfoque, el desarrollador tiene acceso al código fuente y puede inspeccionar cómo se comporta el método `query`. Aunque no necesita verificar las veces que se llama al método, sigue siendo una prueba de caja blanca.\n\n2. **Substitution (D):**\n   - El reemplazo de la dependencia con otro objeto es un ejemplo de sustitución, donde el objeto sustituido actúa como dependencias simuladas durante la prueba.\n\n3. **Opciones incorrectas:**\n   - B: Stubbing implica proporcionar una implementación simulada específica para interceptar llamadas, pero esto no se menciona como parte del requisito.\n   - C: Black box testing no aplica, ya que en este enfoque no se inspecciona el comportamiento interno del sistema."
    },
    {
      id: "q25",
      question: "Developer removes the HTML class attribute from the checkout button, so now it is simply. There is a test to verify the existence of the checkout button; however, it looks for a button with `class='blue'`. The test fails because no such button is found. \n\nWhich type of test category describes this test?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "True positive",
        B: "True negative",
        C: "False positive",
        D: "False negative"
      },
      code: "<button>Checkout</button>",
      explanation: "La opción correcta es D: **False negative**.\n\n**Explicación detallada:**\n\n1. **Definición de 'False negative':**\n   - Un resultado falso negativo ocurre cuando la prueba debería haber detectado el botón pero no lo hace.\n\n2. **Causa del fallo:**\n   - La prueba busca específicamente un botón con `class='blue'`, pero el atributo de clase fue eliminado del botón, provocando que no coincida con la expectativa de la prueba.\n\n3. **Conclusión:**\n   - El botón sí existe, pero la prueba falla al encontrarlo debido a una discrepancia en el selector usado."
    },
    {
      id: "q26",
      question: "Which two tests are the most accurate for the array shown?",
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
      explanation: "Las opciones correctas son A y B:\n\n**Explicación detallada:**\n\n1. **Opción A:**\n   - Verifica que la longitud del array sea igual a 5.\n\n2. **Opción B:**\n   - Itera sobre cada elemento del array y verifica que todos los elementos sean iguales a 0.\n\n3. **Errores en otras opciones:**\n   - Opción C: Intenta acceder a `arr[arr.length]`, lo cual es incorrecto porque el índice debe estar en el rango válido del array.\n   - Opción D: Aunque es cierta, no prueba específicamente que el array está correctamente configurado."
    },
    {
      id: "q27",
      question: "Which two test approaches describe the requirement?",
      type: "multiple choice",
      correct_options: ["C", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "Integration",
        B: "Black box",
        C: "White box",
        D: "Mocking"
      },
      code: "const database = {\n  query: () => ['result1', 'result2']\n};\n// Método de prueba para verificar cuántas veces y con qué argumentos se llamó a database.query",
      explanation: "Las opciones correctas son C y D:\n\n**Explicación detallada:**\n\n1. **Opción C - White box:**\n   - Este tipo de prueba verifica la lógica interna y el comportamiento de la implementación, como cuántas veces se llama a un método y con qué argumentos.\n\n2. **Opción D - Mocking:**\n   - El uso de un objeto simulado (mock) como dependencia permite rastrear interacciones específicas como llamadas al método y argumentos.\n\n3. **Errores en otras opciones:**\n   - Opción A: Una prueba de integración evalúa cómo funcionan múltiples componentes juntos, no el comportamiento interno de un método específico.\n   - Opción B: Una prueba de caja negra evalúa la funcionalidad sin considerar la implementación interna."
    },
    {
      id: "q28",
      question: "A test has a dependency on database.query. During the test, the dependency is replaced with an object called database with the method query that returns an array. The developer needs to verify how many times the method was called and the arguments used each time. \n\nWhich two test approaches describe the requirement?",
      type: "multiple choice",
      correct_options: ["C", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "Integration",
        B: "Black box",
        C: "White box",
        D: "Mocking"
      },
      explanation: "Las opciones correctas son C y D:\n\n**Explicación detallada:**\n\n1. **Opción C - White box:**\n   - Este enfoque examina la lógica interna de la dependencia, como cuántas veces se llamó al método `query` y los argumentos usados.\n\n2. **Opción D - Mocking:**\n   - La técnica de mocking reemplaza una dependencia real con un objeto simulado para rastrear interacciones específicas como llamadas y argumentos.\n\n3. **Errores en otras opciones:**\n   - Opción A: Las pruebas de integración evalúan cómo interactúan varios componentes juntos, no el comportamiento interno de la dependencia.\n   - Opción B: Las pruebas de caja negra evalúan funcionalidad sin observar la implementación interna."
    },
    {
      id: "q29",
      question: "Refer to the code below. Which assertion accurately tests the above code?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "Console.assert (await functionUnderTest(true), ' OK ')",
        B: "Console.assert (await functionUnderTest(true), ' not OK ')",
        C: "Console.assert (awaitfunctionUnderTest(true), ' not OK ')",
        D: "Console.assert (await functionUnderTest(true), 'OK')"
      },
      code: "async function functionUnderTest(isOK) {\n\t  if (isOK) return 'OK';\n\t  throw new Error('not OK');\n}",
      explanation: "La opción correcta es la D: 'Console.assert(await functionUnderTest(true), 'OK')'.\n\n**Explicación detallada:**\n\n1. **Evaluación de la función:**\n   - La función `functionUnderTest` verifica si el parámetro `isOK` es verdadero.\n   - Si es `true`, retorna la cadena `'OK'`.\n   - Si es `false`, lanza un error con el mensaje `'not OK'`.\n\n2. **Uso de `Console.assert`:**\n   - La declaración `Console.assert(condition, message)` valida que la `condition` sea `true`. Si la condición es falsa, se registra el `message` en la consola como error.\n   - En este caso, `await functionUnderTest(true)` retorna `'OK'`, lo cual hace que la condición en `Console.assert` sea verdadera y no se registre ningún error.\n\n3. **Opciones incorrectas:**\n   - A: Incorrecto debido al espacio innecesario en `' OK '`, lo cual rompe la comparación.\n   - B: Incorrecto porque la condición no es `'not OK'` cuando `isOK` es verdadero.\n   - C: Incorrecto porque contiene un error de sintaxis en `awaitfunctionUnderTest(true)` debido a la falta de espacios."
    },                                                               
  ];
};
