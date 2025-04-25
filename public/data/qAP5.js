export default function questions5() {
  return [
    {
      id: "q1",
      question:
        "An implementation of the setTimeout method has been given below. \n\nWhich of the following statements is true?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "The setTimeout method submits a function to be run at regular intervals.",
        B: "The setTimeout method submits a function to be run after a specified time period.",
        C: "The setTimeout method pauses a running function and continues execution after a specified time period.",
        D: "The setTimeout method pauses the thread for the specified time period.",
      },
      code: "let timer = 3000;\n\nlet alertTimer = (time) => {\nconsole.log(`Your ${time / 1000} seconds is over');\n//implement alert\n}\n\nsetTimeout(alertTimer, timer, timer);",
      explanation:
        "La opción correcta es la B: 'The setTimeout method submits a function to be run after a specified time period.'. Esto se debe a que 'setTimeout()' se utiliza para ejecutar un bloque de código una vez después de un período de tiempo especificado. No pausa una función ni un hilo, ni ejecuta la función a intervalos regulares.\n\nLas otras opciones son incorrectas porque:\n\n- **A**: Se describe el comportamiento de 'setInterval()', no 'setTimeout()'.\n- **C y D**: 'setTimeout()' no pausa la ejecución ni un hilo, sino que programa una función para que se ejecute después del tiempo especificado.",
    },
    {
      id: "q2",
      question:
        "A developer has written the code given below to implement promise chaining. \n\nWhich of the following statements are true?",
      type: "multiple choice",
      correct_options: ["A", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "Errors can be handled in the code by passing a function to handle errors as the second argument of the 'then' method.",
        B: "Promise chaining cannot be replaced with 'async' and 'await'.",
        C: "The 'catch' method can be chained to the last 'then' method to handle errors.",
        D: "The position of the 'catch' statement does not influence the way the errors are handled.",
      },
      code: "getLatestComplaint()\n.then(complaint => getUser(complaint.userId))\n.then(user => {\nconsole.log(user);\nreturn notifyUser(user.uuid);\n})\n.then(status => console.log(status));",
      explanation:
        "Las respuestas correctas son:\n\n- **A. 'Errors can be handled in the code by passing a function to handle errors as the second argument of the then method.'**: El método 'then()' acepta un segundo argumento opcional que puede ser usado para manejar errores.\n- **C. 'The catch method can be chained to the last then method to handle errors.'**: Es común usar 'catch()' después de la última llamada a 'then()' para manejar errores.\n\nLas otras opciones son incorrectas porque:\n\n- **B**: Las cadenas de promesas pueden ser reemplazadas por 'async' y 'await'.\n- **D**: La posición de 'catch()' afecta cómo se manejan los errores dentro de las promesas encadenadas.",
    },
    {
      id: "q3",
      question:
        "A developer is working on a complex user interface for a company application. She is using the event object in response to certain mouse events. \n\nWhat method can she use in the console to view the event object for mouse events when the mouse is clicked or moved?",
      type: "multiple choice",
      correct_options: ["A", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "monitorEvents(window, 'mouse');",
        B: "monitorEvents(window, 'click', 'mouseup', 'mousedown', 'mousemove');",
        C: "monitorEvents('mouse');",
        D: "monitorEvents(window, ['click', 'mouseup', 'mousedown', 'mousemove']);",
      },
      explanation:
        "Las respuestas correctas son:\n\n- **A. 'monitorEvents(window, 'mouse');'**: Monitorea eventos de la categoría 'mouse' en el objeto 'window'.\n- **D. 'monitorEvents(window, ['click', 'mouseup', 'mousedown', 'mousemove']);'**: Monitorea varios eventos específicos como 'click', 'mouseup', 'mousedown', y 'mousemove'.\n\nLas otras opciones son incorrectas porque:\n\n- **B**: La sintaxis no permite múltiples eventos pasados como argumentos separados.\n- **C**: La función requiere un objeto para monitorear, como 'window'.",
    },
    {
      id: "q4",
      question:
        "Which of the following options represents valid JavaScript code to run an asynchronous operation, execute a callback once the operation is done, perform error handling if there is an error, and then always perform a callback regardless of whether the method failed or succeeded?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "asyncMethod().then((result) => { // handle result }).catch((error) => { // handle error }).finally(() => { // code that always runs });",
        B: "asyncMethod().done((result) => { // handle result }).catch((error) => { // handle error }).always(() => { // code that always runs });",
        C: "asyncMethod().then((result) => { // handle result }).error((error) => { // handle error }).finally(() => { // code that always runs });",
        D: "asyncMethod().done((result) => { // handle result }).fail((error) => { // handle error }).always(() => { // code that always runs });",
      },
      explanation:
        "La opción correcta es la A: 'asyncMethod().then((result) => { // handle result }).catch((error) => { // handle error }).finally(() => { // code that always runs });'. Esto se debe a que:\n\n1. **then()** maneja los resultados de una operación asíncrona.\n2. **catch()** maneja los errores.\n3. **finally()** ejecuta una función independientemente de si la promesa fue cumplida o rechazada.\n\nLas otras opciones son incorrectas porque utilizan métodos no válidos como 'done()', 'fail()', 'always()', y 'error()'.",
    },
    {
      id: "q5",
      question:
        "A developer is building an 'async' function for retrieving data from an API. The 'processData' function processes the response synchronously. The 'showCount' function displays the number of records that were returned. However, it is displaying 0. \n\nWhich of the following are valid ways of fixing this?",
      type: "multiple choice",
      correct_options: ["A", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "Place the 'showCount' function call after the 'processData' call in the async function.",
        B: "Prepend the 'await' keyword to 'processData()'.",
        C: "Add a 'setTimeout' method, and place the 'showCount' function call inside it.",
        D: "Place the 'showCount' function call inside the 'processData' function.",
      },
      code: "var finalResults = [];\n\nfunction showCount() {\nconsole.log(`There were ${finalResults.length} results found.`);\n}\n\nfunction processData() {\nconsole.log('Processing results ...');\n}\n\nasync function retrieveData(url) {\nlet resp = await fetch(url);\nlet response = await resp.json();\nfinalResults = response;\nprocessData();\n};\n\nretrieveData('https://jsonplaceholder.typicode.com/posts');\n\nshowCount();",
      explanation:
        "Las respuestas correctas son:\n\n- **A. 'Place the showCount function call after the processData call in the async function.'**: Esto asegura que los datos se procesen y estén disponibles antes de invocar 'showCount'.\n- **D. 'Place the showCount function call inside the processData function.'**: Esto garantiza que 'showCount' se llame después de que los datos hayan sido procesados.\n\nLas otras opciones son incorrectas porque:\n\n- **B**: 'processData' es sincrónico y no requiere 'await'.\n- **C**: Usar 'setTimeout' no garantiza que los datos estén disponibles antes de llamar a 'showCount'.",
    },
    {
      id: "q6",
      question:
        "Consider the code below that makes use of Promise.reject. \n\nWhich option shows the correct output for this code?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Reporting from B:",
        B: "Reporting from B: failure",
        C: "Reporting from A: failure",
        D: "Reporting from A:",
      },
      code: "function reportResultsA(results) {\nconsole.log('Reporting from A: ' + results);\n}\n\nfunction reportResultsB(results) {\nconsole.log('Reporting from B: ' + results);\n}\n\nPromise.reject('failure')\n.then(reportResultsA, reportResultsB);",
      explanation:
        "La opción correcta es la B: 'Reporting from B: failure'. Esto se debe a que:\n\n1. **Promise.reject()** devuelve un objeto de promesa que contiene el valor proporcionado ('failure' en este caso).\n2. En la cadena de promesas, el segundo argumento de 'then()' se invoca cuando la promesa es rechazada.\n3. Por lo tanto, 'reportResultsB' se llama y muestra 'Reporting from B: failure'.\n\nLas otras opciones son incorrectas porque no consideran correctamente cómo funciona el rechazo de promesas y la forma en que los argumentos de 'then()' se manejan en estos casos.",
    },
    {
      id: "q7",
      question:
        "The code given below was developed to test the execution order of asynchronous functions. \n\nWhich of the following are correct regarding its execution?",
      type: "multiple choice",
      correct_options: ["A", "B", "C"],
      number_of_correct_answers: 3,
      options: {
        A: "The await keyword blocks the code execution in the async function until the promise has settled.",
        B: "The setTimeout method runs the function passed as an argument after the specified time period.",
        C: "The setInterval method runs the function passed as an argument in regular intervals and does not block the code execution.",
        D: "The setTimeout and setInterval methods allow executing code synchronously.",
        E: "The setTimeout method blocks the code execution until the timeout completes.",
      },
      code: "function logger(str) {\nconsole.log(\"Logger\\n\" + str);\n}\n\nasync function getData() {\nawait connectToServer();\nsetInterval(logger, 1000, 'interval');\nsetTimeout(logger, 1500, 'timeout');\n}",
      explanation:
        "Las respuestas correctas son:\n\n- **A. 'The await keyword blocks the code execution in the async function until the promise has settled.'**: 'await' detiene la ejecución del código hasta que la promesa se resuelve o se rechaza.\n- **B. 'The setTimeout method runs the function passed as an argument after the specified time period.'**: 'setTimeout' ejecuta la función proporcionada después del tiempo especificado.\n- **C. 'The setInterval method runs the function passed as an argument in regular intervals and does not block the code execution.'**: 'setInterval' ejecuta una función repetidamente en intervalos regulares sin bloquear la ejecución del código.\n\nLas otras opciones son incorrectas porque:\n\n- **D**: 'setTimeout' y 'setInterval' ejecutan el código de forma asíncrona, no síncrona.\n- **E**: 'setTimeout' no bloquea la ejecución; simplemente programa la función para que se ejecute más tarde.",
    },
    {
      id: "q8",
      question:
        "Consider the code below that makes use of setInterval and setTimeout. \n\nFor the final console.log statement, what is the correct output?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "2",
        B: "1",
        C: "0",
        D: "6",
      },
      code: "let value = 0;\n\nvalue++;\n\nconst interval = setInterval(function() {\nvalue++;\nif (value === 5) {\nclearInterval(interval);\n}\n}, 2000);\n\nsetTimeout(function() {\nvalue++;\n}, 0);\n\nconsole.log(value);",
      explanation:
        "La opción correcta es la B: '1'. Esto se debe a que:\n\n1. Tanto 'setTimeout' como 'setInterval' son asíncronos y no bloquean la ejecución del código.\n2. El valor inicial de 'value' es incrementado inmediatamente a 1 antes de que las llamadas asíncronas comiencen.\n3. 'console.log(value)' se ejecuta antes de que 'setTimeout' o 'setInterval' tengan oportunidad de modificar 'value'.\n\nLas otras opciones son incorrectas porque no toman en cuenta el comportamiento asíncrono de las funciones 'setTimeout' y 'setInterval'.",
    },
    {
      id: "q9",
      question:
        "What will be displayed in the browser console when the code below is executed?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Todo number 1 from the jsonplaceholder site.",
        B: "done",
        C: "syntax error",
        D: "undefined",
      },
      code: "async function fetchData(url) {\nlet results = await fetch(url);\nlet data = await results.json();\nreturn 'done';\n};\n\nlet promise1 = fetchData('https://jsonplaceholder.typicode.com/todos/1')\n.then(data => console.log(data));",
      explanation:
        "La opción correcta es la B: 'done'. Esto se debe a que:\n\n1. Una función 'async' devuelve una promesa que se resuelve con el valor especificado en la declaración 'return'.\n2. En este código, se devuelve la cadena 'done', y esa es la salida de la función 'fetchData'.\n3. La llamada a 'then()' está configurada para manejar el resultado de la promesa, mostrando 'done' en la consola.\n\nLas otras opciones son incorrectas porque:\n\n- **A**: No se devuelve el contenido de los datos, solo la cadena 'done'.\n- **C**: El código no tiene errores de sintaxis.\n- **D**: La promesa devuelve un valor ('done'), por lo que no es 'undefined'.",
    },
    {
      id: "q10",
      question:
        "The function below has been created for illustrating how the event loop works. If the function is invoked using 'showEventLoop(5)', what number will be displayed in the console?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "80",
        B: "50",
        C: "60",
        D: "70",
      },
      code: "function showEventLoop(num) {\nnum++;\nsetTimeout(function() {\nnum = num * 10;\nconsole.log(num);\n}, 0);\nnum++;\n};",
      explanation:
        "La opción correcta es la D: '70'. Esto se debe a que:\n\n1. Inicialmente, 'num' se incrementa a 6.\n2. El comando 'setTimeout' se ejecuta de manera asíncrona, y la función dentro de él se coloca en la cola de mensajes.\n3. Mientras tanto, 'num' se incrementa nuevamente, pasando a 7.\n4. Cuando la cola de mensajes procesa la función de 'setTimeout', multiplica 'num' por 10, mostrando '70' en la consola.\n\nLas otras opciones son incorrectas porque no consideran cómo el 'setTimeout' asíncrono afecta el orden de ejecución del código.",
    },
    {
      id: "q11",
      question:
        "The code below uses promise chaining to handle multiple fetch API requests. But it does not work as intended. It has been confirmed that both the request URLs are correct and the responses are in JSON format. \n\nWhich information would be useful for resolving this issue?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "The HTTP method must be specified when using the fetch API to retrieve a resource.",
        B: "The then statements should return a value to implement promise chaining.",
        C: "The fetch() method does not return a Promise.",
        D: "Multiple then statements cannot be chained.",
      },
      code: "function getUserByPostId(postId) {\nfetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)\n.then(response => {\nresponse.json()\n})\n.then(post => {\nfetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)\n})\n.then(response => {\nresponse.json()\n})\n.then(user => {\nconsole.log(user)\n});\n}",
      explanation:
        "La opción correcta es la B: 'The then statements should return a value to implement promise chaining.'. Esto se debe a que:\n\n1. Las declaraciones 'then' actuales no devuelven ningún valor, lo que interrumpe la cadena de promesas.\n2. Para crear un encadenamiento correcto, cada 'then' debe devolver un valor, como en la implementación corregida:\n\n```javascript\nfunction getUserByPostId(postId) {\nfetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)\n.then(response => response.json())\n.then(post => fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`))\n.then(response => response.json())\n.then(user => {\nconsole.log(user);\n});\n}\n```\n\nLas otras opciones son incorrectas porque:\n\n- **A**: No es necesario especificar el método HTTP para una solicitud GET.\n- **C**: 'fetch()' sí devuelve una promesa.\n- **D**: Las declaraciones 'then' se pueden encadenar correctamente.",
    },
    {
      id: "q12",
      question:
        "A developer has written the code below to implement an event handler for a <button> element on a web page. \n\nWhich of the following can be assigned to the 'callback' variable in line 2 to get the intended output?",
      type: "multiple choice",
      correct_options: ["A", "B", "C"],
      number_of_correct_answers: 3,
      options: {
        A: "function() { startConnection(); }",
        B: "function callbackFn() { startConnection(); }",
        C: "() => { startConnection(); }",
        D: "function() { startConnection(); }()",
        E: "() => { startConnection(); }()",
      },
      code: "1. let connectionBtn = document.getElementById('btn-connection');\n2. let callback = /* Add code here */;\n3. connectionBtn.addEventListener('click', callback);\n4. function startConnection() {\n5. //Implementation here\n6. }",
      explanation:
        "Las respuestas correctas son:\n\n- **A. 'function() { startConnection(); }'**: Define una función anónima que llama a 'startConnection()' cuando se ejecuta.\n- **B. 'function callbackFn() { startConnection(); }'**: Define una función nombrada que ejecuta 'startConnection()'.\n- **C. '() => { startConnection(); }'**: Usa una función de flecha que ejecuta 'startConnection()'.\n\nLas otras opciones son incorrectas porque:\n\n- **D y E**: Ambas invocan las funciones inmediatamente al definirlas, lo cual no es el comportamiento esperado en este contexto.",
    },
    {
      id: "q13",
      question:
        "The code below uses a promise-based HTTP client called Axios to make an HTTP request. \n\nWhich of the following are true regarding its execution?",
      type: "multiple choice",
      correct_options: ["A", "C", "D"],
      number_of_correct_answers: 3,
      options: {
        A: "The code should be used with a try ... catch statement for exception handling.",
        B: "The 'then' method must be used with the 'await' keyword to retrieve the response.",
        C: "Using the 'await' keyword pauses code execution in the 'async' function until the promise has settled.",
        D: "The 'await' keyword cannot handle errors.",
        E: "The 'throw' keyword cannot be used inside the 'async' function.",
      },
      code: "async function getUserData(userId) {\nconst data = await axios.get(`users/${userId}`);\nconsole.log('sample data: ', data);\nif (data.id) {\nreturn data;\n} else throw \"Something went wrong\";\n}",
      explanation:
        "Las respuestas correctas son:\n\n- **A. 'The code should be used with a try ... catch statement for exception handling.'**: Las excepciones deben manejarse con un bloque 'try...catch'.\n- **C. 'Using the await keyword pauses code execution in the async function until the promise has settled.'**: 'await' detiene la ejecución hasta que la promesa sea resuelta o rechazada.\n- **D. 'The await keyword cannot handle errors.'**: 'await' no maneja errores; esto debe hacerse con 'try...catch'.\n\nLas otras opciones son incorrectas porque:\n\n- **B**: 'await' no necesita el uso del método 'then'.\n- **E**: 'throw' puede ser utilizado dentro de una función 'async' para lanzar excepciones.",
    },
    {
      id: "q14",
      question:
        "The code below was used to test the given function named 'getUser'. There is a record in the database with the id 12. But there is no record with the id 400. \n\nWhich of the following can be done to resolve the issue?",
      type: "multiple choice",
      correct_options: ["B", "C", "D"],
      number_of_correct_answers: 3,
      options: {
        A: "The 'resolve' method can be used to receive a value or error based on whether the Promise is fulfilled or rejected.",
        B: "The 'asyncʼ and 'await' keywords can be used with a 'try ... catch' statement to receive a response when the Promise is fulfilled and catch errors when it is rejected.",
        C: "The 'catch' method should be called on the Promise object to catch the error when the Promise is rejected.",
        D: "The 'then' method should be called on the Promise object to receive a response when the Promise is fulfilled.",
        E: "The 'getUser' method must be wrapped within a console.log statement to display the returned value.",
      },
      code: "let getUser = function (id) {\nreturn new Promise((resolve, reject) => {\nlet user = getUserFromStorage(id);\nif (user) {\nresolve(user);\n} else {\nreject('User not found');\n}\n});\n}",
      explanation:
        "Las respuestas correctas son:\n\n- **B. 'The async and await keywords can be used with a try ... catch statement to receive a response when the Promise is fulfilled and catch errors when it is rejected.'**: Usar 'async' y 'await' dentro de un bloque 'try ... catch' permite manejar tanto las respuestas como los errores.\n- **C. 'The catch method should be called on the Promise object to catch the error when the Promise is rejected.'**: La forma más común de manejar errores en promesas es encadenar 'catch()' después de 'then()'.\n- **D. 'The then method should be called on the Promise object to receive a response when the Promise is fulfilled.'**: 'then()' captura la respuesta cuando la promesa es resuelta.\n\nLas otras opciones son incorrectas porque:\n\n- **A**: 'resolve' se utiliza para completar una promesa, no para recibir un valor o error.\n- **E**: Aunque 'console.log()' puede mostrar el valor devuelto, no aborda el problema fundamental del manejo de errores y respuestas.",
    },
    {
      id: "q15",
      question:
        "In order to process quiz data received from employees during online training, the code below is used. However, the nesting of function callbacks, referred to as 'callback hell', is difficult to follow. To correct this, the developer would like to rewrite the functions using promises. \n\nWhich code sequence is correct for processing the data in the same manner?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "testData(data).then(tData => storeData(tData)).then(fData => mapData(fData)).then(mData => filterData(mData)).catch(err => console.log(err));",
        B: "testData(data).then(tData => filterData(tData)).then(fData => storeData(fData)).then(mData => mapData(mData));",
        C: "testData(data).then(tData => filterData(tData)).then(fData => mapData(fData)).then(mData => storeData(mData)).catch(err => console.log(err));",
        D: "filterData(tData).then(fData => mapData(fData)).then(mData => storeData(mData)).catch(err => console.log(err));",
      },
      code: "testData(data, function(theData) {\nif (theData.length > 0) {\nfilterData(theData, function(d) {\nif (d.length > 0) {\nmapData(d, function(finalD) {\nstoreData(finalD);\n});\n}\n});\n}\n});",
      explanation:
        "La opción correcta es la C: 'testData(data).then(tData => filterData(tData)).then(fData => mapData(fData)).then(mData => storeData(mData)).catch(err => console.log(err));'. Esto se debe a que:\n\n1. Encadena las promesas en el orden correcto: primero filtra los datos, luego los mapea y finalmente los almacena.\n2. 'catch()' maneja todos los errores en una sola llamada.\n\nLas otras opciones son incorrectas porque:\n\n- **A**: El orden de los métodos encadenados no corresponde al flujo lógico.\n- **B**: No maneja errores con 'catch()'.\n- **D**: Falta la llamada inicial a 'testData', que es esencial para iniciar el proceso.",
    },
    {
      id: "q16",
      question:
        "The code snippet given below uses a function named 'getDataFromServer' that returns a Promise object. \n\nWhich of the following are valid values of the 'state' of the Promise?",
      type: "multiple choice",
      correct_options: ["A", "B", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "fulfilled",
        B: "rejected",
        C: "failure",
        D: "success",
        E: "pending",
      },
      code: "function initialize(userId) {\nlet dataFromServer = getDataFromServer(userId);\nconsole.log(dataFromServer);\n}",
      explanation:
        "Las respuestas correctas son:\n\n- **A. 'fulfilled'**: Representa una promesa que se ha completado exitosamente.\n- **B. 'rejected'**: Representa una promesa que ha fallado.\n- **E. 'pending'**: Representa una promesa que aún no ha sido resuelta ni rechazada.\n\nLas otras opciones son incorrectas porque:\n\n- **C**: 'failure' no es un estado válido para una promesa.\n- **D**: 'success' tampoco es un estado válido para una promesa.",
    },
    {
      id: "q17",
      question:
        "The lead developer of Cosmic Innovation has written the code given below for an interview. The purpose is to check the understanding of the event loop. \n\nWhat sequence of numbers will be displayed in the console?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "1, 1, 2, 3, 4, 5, 6, 6",
        B: "1, 6, 1",
        C: "1, 2, 3, 4, 5, 6, 6",
        D: "1, 1, 6",
      },
      code: "var cnt = 1;\n\nconsole.log(cnt);\n\nvar id = setInterval(function() {\ncnt++\nif (cnt > 5) {\nclearInterval(id);\n}\nconsole.log(cnt);\n}, 0);\n\nconsole.log(cnt);\n\nwhile (cnt < 5) {\ncnt++;\n}",
      explanation:
        "La opción correcta es la D: '1, 1, 6'. Esto se debe a que:\n\n1. La variable 'cnt' comienza en 1 y se registra en la consola, mostrando el primer '1'.\n2. El método 'setInterval' programa una función que será manejada por el navegador y colocada en la cola de mensajes.\n3. Antes de que la función programada en 'setInterval' pueda ejecutarse, el código restante, incluida la segunda consola y el bucle 'while', se ejecuta. Esto muestra el segundo '1'.\n4. El bucle 'while' incrementa 'cnt' hasta 5. Una vez que la cola de mensajes procesa la función de 'setInterval', incrementa 'cnt' a 6.\n\nLas otras opciones son incorrectas porque no consideran correctamente cómo el bucle 'while' y 'setInterval' interactúan con la cola de mensajes y la pila de llamadas.",
    },
    {
      id: "q18",
      question:
        "When the code below is executed, what will be displayed in the console?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Error message",
        B: "promise 3",
        C: "['promise 3', 'promise 1', 'promise 2']",
        D: "promise 2",
      },
      code: "let promise1 = new Promise((resolve, reject) => {\nsetTimeout(() => resolve('promise 1'),1500);\n});\n\nlet promise2 = new Promise((resolve, reject) => {\nsetTimeout(() => reject('promise 2'), 2000);\n});\n\nlet promise3 = new Promise((resolve, reject) => {\nsetTimeout(resolve, 1000, 'promise 3');\n});\n\nPromise.race([promise1, promise2, promise3])\n.then(val => console.log(val))\n.catch(val => console.log(val));",
      explanation:
        "La opción correcta es la B: 'promise 3'. Esto se debe a que:\n\n1. **Promise.race()** devuelve una promesa tan pronto como una de las promesas del array proporcionado se cumple o rechaza.\n2. En este caso, 'promise 3' se resuelve primero porque su tiempo de espera es de 1000 milisegundos.\n3. Solo el valor de 'promise 3' se muestra en la consola.\n\nLas otras opciones son incorrectas porque:\n\n- **A**: No hay un error en la ejecución del código.\n- **C**: 'Promise.race()' no combina los resultados de todas las promesas.\n- **D**: 'promise 2' no es la primera promesa en resolverse o rechazarse.",
    },
    {
      id: "q19",
      question:
        "Which statements best describe how the call stack and callback queue are used when the function below is invoked?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Function 'test1' is invoked and placed on the call stack and code execution begins. The 'setTimeout' is invoked and the timing is handled by the browser. When the timer is done, function 'test3' is placed on the call stack for code execution. Function 'test2' is then invoked and placed on the call stack. Function 'test2' finishes and is removed. Function 'test3' finishes and is removed. Function 'test1' finishes and is removed.",
        B: "Function 'test1' is invoked and placed on the call stack and code execution begins. The 'setTimeout' is invoked and the timing is handled by the browser. Function 'test2' is invoked and placed on the call stack. Function 'test2' finishes and is removed. Function 'test1' finishes and is removed. When the timer is done, function 'test3' is placed on the callback queue and awaits the event loop to be placed on the call stack.",
        C: "Function 'test1' is invoked and placed on the call stack and code execution begins. The 'setTimeout' is invoked and the timing is handled by the browser. Function 'test2' is invoked and placed on the call stack. Function 'test2' finishes and is removed. Function 'test1' finishes and is removed. When the timer is done, function 'test3' is placed immediately on the call stack since the call stack is empty.",
        D: "Function 'test1' is invoked and placed on the call stack and code execution begins. Functions 'test2' and 'test3' are placed on the call stack as soon as they are invoked. The callback queue is not used in this scenario because the call stack has space available.",
      },
      code: "function test1() {\nconsole.log('test1');\nfunction test2() {\nconsole.log('test2');\n};\nfunction test3() {\nconsole.log('test3');\n}\nsetTimeout(test3, 1000);\ntest2();\n};\n\ntest1();",
      explanation:
        "La opción correcta es la B: 'Function 'test1' is invoked and placed on the call stack and code execution begins. The 'setTimeout' is invoked and the timing is handled by the browser. Function 'test2' is invoked and placed on the call stack. Function 'test2' finishes and is removed. Function 'test1' finishes and is removed. When the timer is done, function 'test3' is placed on the callback queue and awaits the event loop to be placed on the call stack.'. Esto refleja con precisión cómo el 'setTimeout', la cola de devolución de llamada y el bucle de eventos interactúan en este caso.\n\nLas otras opciones son incorrectas porque no consideran correctamente cómo funciona la interacción entre la pila de llamadas y la cola de devolución de llamada en este escenario.",
    },
    {
      id: "q20",
      question:
        "In order to effectively use asynchronous code in JavaScript, it is important that each developer understands the purpose of the event loop, call stack, and callback queue. \n\nWhich of the following statements are correct?",
      type: "multiple choice",
      correct_options: ["A", "C", "D"],
      number_of_correct_answers: 3,
      options: {
        A: "The call stack maintains the order of code processing. When a function is finished, it is removed from the stack.",
        B: "The call stack keeps track of the functions that have been called and executes each function as soon as it is added.",
        C: "The callback queue maintains a list of functions that need to be called when the stack is empty.",
        D: "The event loop constantly checks the stack. When the call stack is empty, the event loop takes another function from the queue and places it in the stack.",
        E: "The call stack keeps track of the functions that have been called and completely executes each function before moving on to another.",
      },
      explanation:
        "Las respuestas correctas son:\n\n- **A. 'The call stack maintains the order of code processing. When a function is finished, it is removed from the stack.'**: Esto describe cómo el call stack organiza y ejecuta funciones.\n- **C. 'The callback queue maintains a list of functions that need to be called when the stack is empty.'**: La cola de devoluciones mantiene los eventos pendientes para ejecutar cuando el stack está vacío.\n- **D. 'The event loop constantly checks the stack. When the call stack is empty, the event loop takes another function from the queue and places it in the stack.'**: El bucle de eventos asegura que las funciones en la cola sean manejadas correctamente.\n\nLas otras opciones son incorrectas porque:\n\n- **B**: La ejecución no ocurre inmediatamente después de ser añadida al stack.\n- **E**: El call stack trabaja en un formato de primero en entrar, último en salir (FILO), pero no describe completamente cómo se gestionan las funciones.",
    },
    {
      id: "q21",
      question:
        "The sample code below includes 7 console.log statements, an async function, and promises. When the code is invoked. \n\nWhat would be the order of the console messages that would be displayed?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "message one, message three, message four, message five, message two, message six, message seven",
        B: "message one, message three, message four, message five, message six, message two, message seven",
        C: "message one, message three, message five, message seven, message four, message two, message six",
        D: "message one, message three, message five, message two, message seven, message four, message six",
      },
      code: "console.log('message one');\nasync function testAsync() {\nconsole.log('message two');\nreturn 'success';\n};\n\nconsole.log('message three');\nPromise.resolve('success').then((val) => console.log('message four'));\nconsole.log('message five');\ntestAsync().then((val) => console.log('message six'));\nconsole.log('message seven');",
      explanation:
        "La opción correcta es la D: 'message one, message three, message five, message two, message seven, message four, message six'. Esto sucede porque:\n\n1. 'message one', 'message three' y 'message five' se imprimen directamente porque no hay restricciones.\n2. 'testAsync()' se ejecuta como una función normal (sin usar 'await') y muestra 'message two'.\n3. Luego se ejecuta 'message seven'.\n4. Las promesas se resuelven y las declaraciones 'then()' procesan los resultados en orden, mostrando 'message four' seguido por 'message six'.\n\nLas otras opciones son incorrectas porque no reflejan correctamente cómo las funciones asíncronas y las promesas manejan la ejecución.",
    },
    {
      id: "q22",
      question:
        "The code below makes use of multiple async functions. The output of this code needs to be determined and knowledge of how async/await works should help. \n\nTherefore, what number would be displayed to the console?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Syntax Error",
        B: "650",
        C: "1150",
        D: "100",
      },
      code: "function timer(time) {\nreturn new Promise((resolve, reject) => {\nsetTimeout(() => {\nresolve(time);\n}, time);\n});\n}\n\nasync function getNum() {\nreturn 50;\n}\n\nasync function compute(num) {\nlet num1 = num2 = num3 = 0;\nnum1 = await timer(500);\nnum2 = await getNum();\ntimer(500)\n.then(val => num3 = val);\nconsole.log(num + num1 + num2 + num3);\n}\n\ncompute(100);",
      explanation:
        "La opción correcta es la B: '650'. Esto se debe a que:\n\n1. 'num1' se resuelve usando 'await timer(500)', lo que devuelve 500.\n2. 'num2' se resuelve usando 'await getNum()', lo que devuelve 50.\n3. 'num3' se establece dentro de un 'then()' y, aunque la promesa se resuelve, la asignación ocurre asíncronamente, después de que se ejecuta el 'console.log'. Por lo tanto, 'num3' permanece en su valor inicial de 0.\n4. La suma de 'num', 'num1', 'num2' y 'num3' produce 650 (100 + 500 + 50 + 0).\n\nLas otras opciones son incorrectas porque no consideran correctamente cómo se manejan las promesas y las funciones asíncronas.",
    },
  ];
};
