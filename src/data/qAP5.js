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
      code: "let timer = 3000;\n\nlet alertTimer = (time) => {\n\tconsole.log(`Your ${time / 1000} seconds is over');\n\t//implement alert\n}\n\nsetTimeout(alertTimer, timer, timer);",
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
      ccode: "async function fetchData(url) {\n\tlet results = await fetch(url);\n\tlet data = await results.json();\n\treturn 'done';\n};\n\nlet promise1 = fetchData('https://jsonplaceholder.typicode.com/todos/1')\n\t.then(data => console.log(data));",
      explanation:
        "La opción correcta es 'done'. Esto se debe a que:\n\n1. Una función 'async' devuelve una promesa que se resuelve con el valor especificado en la declaración 'return'.\n2. En este código, se devuelve la cadena 'done', y esa es la salida de la función 'fetchData'.\n3. La llamada a 'then()' está configurada para manejar el resultado de la promesa, mostrando 'done' en la consola.\n\nLas otras opciones son incorrectas porque:\n\n- **A**: No se devuelve el contenido de los datos, solo la cadena 'done'.\n- **C**: El código no tiene errores de sintaxis.\n- **D**: La promesa devuelve un valor ('done'), por lo que no es 'undefined'.",
    },
    {
      id: "q10",
      question:
        "The function below has been created for illustrating how the event loop works. If the function is invoked using 'showEventLoop(5)'. What number will be displayed in the console?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "80",
        B: "50",
        C: "60",
        D: "70",
      },
      code: "function showEventLoop(num) {\n\tnum++;\n\tsetTimeout(function() {\n\t\tnum = num * 10;\n\t\tconsole.log(num);\n\t}, 0);\n\tnum++;\n};",
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
      code: "async function getUserData(userId) {\n\tconst data = await axios.get(`users/${userId}`\n);\nconsole.log('sample data: ', data);\nif (data.id) {\n\treturn data;\n} else throw \"Something went wrong\";\n}",
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
      code: "let getUser = function (id) {\treturn new Promise((resolve, reject) => {\t\tlet user = getUserFromStorage(id);\t\tif (user) {\t\t\tresolve(user);\t\t} else {\t\t\treject('User not found');\t\t}\t});",
      explanation: "Las respuestas correctas son:\n\n- **B. 'The async and await keywords can be used with a try ... catch statement to receive a response when the Promise is fulfilled and catch errors when it is rejected.'**: Usar 'async' y 'await' dentro de un bloque 'try ... catch' permite manejar tanto las respuestas como los errores.\n- **C. 'The catch method should be called on the Promise object to catch the error when the Promise is rejected.'**: La forma más común de manejar errores en promesas es encadenar 'catch()' después de 'then()'.\n- **D. 'The then method should be called on the Promise object to receive a response when the Promise is fulfilled.'**: 'then()' captura la respuesta cuando la promesa es resuelta.\n\nLas otras opciones son incorrectas porque:\n\n- **A**: 'resolve' se utiliza para completar una promesa, no para recibir un valor o error.\n- **E**: Aunque 'console.log()' puede mostrar el valor devuelto, no aborda el problema fundamental del manejo de errores y respuestas.",
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
      code: "function initialize(userId) {\n\tlet dataFromServer = getDataFromServer(userId);\n\tconsole.log(dataFromServer);\n}",
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
      code: "function timer(time) {\n\treturn new Promise((resolve, reject) => {\n\t\tsetTimeout(() => {\n\t\t\tresolve(time);\n\t\t}, time);\n\t});\n}\n\nasync function getNum() {\n\treturn 50;\n}\n\nasync function compute(num) {\n\tlet num1 = num2 = num3 = 0;\n\n\tnum1 = await timer(500);\n\tnum2 = await getNum();\n\n\ttimer(500).then(val => {\n\t\tnum3 = val;\n\t});\n\n\tconsole.log(num + num1 + num2 + num3);\n}\n\ncompute(100);",
      explanation:
        "La opción correcta es la B: '650'. Esto se debe a que:\n\n1. 'num1' se resuelve usando 'await timer(500)', lo que devuelve 500.\n2. 'num2' se resuelve usando 'await getNum()', lo que devuelve 50.\n3. 'num3' se establece dentro de un 'then()' y, aunque la promesa se resuelve, la asignación ocurre asíncronamente, después de que se ejecuta el 'console.log'. Por lo tanto, 'num3' permanece en su valor inicial de 0.\n4. La suma de 'num', 'num1', 'num2' y 'num3' produce 650 (100 + 500 + 50 + 0).\n\nLas otras opciones son incorrectas porque no consideran correctamente cómo se manejan las promesas y las funciones asíncronas.",
    },
    {
      id: "q23",
      question: "Refer to the code below:\n\nWhich two statements correctly execute the `runParallel()` function?",
      type: "multiple choice",
      correct_options: ["B", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "Async runParallel().then(data);",
        B: "runParallel().done(function(data) { return data; });",
        C: "runParallel().then(data);",
        D: "runParallel().then(function(data) { return data; });"
      },
      code: "const exec = (item, delay) => {\n  new Promise(resolve => setTimeout(() => resolve(item), delay));\n};\n\nasync function runParallel() {\n  const (result1, result2, result3) = await Promise.all([\n    exec('x', 100), exec('y', 500), exec('z', 100)\n  ]);\n  return `parallel is done: ${result1} ${result2} ${result3}`;\n}",
      explanation: "Las respuestas correctas son B: 'runParallel().done(function(data) { return data; });' y D: 'runParallel().then(function(data) { return data; });'.\n\n**Explicación detallada:**\n\n1. **Uso de métodos en Promesas:** La función `runParallel()` devuelve una Promesa, que puede ser manejada con métodos específicos. Aunque `.done()` no es un método estándar de Promesas en JavaScript, en ciertos entornos se utiliza para manejar la finalización de Promesas (como jQuery).\n\n2. **Respuestas A y C:** Estas opciones son incorrectas porque:\n   - A: 'Async runParallel().then(data);' contiene un error de sintaxis, ya que `async` no puede prefijar directamente una llamada a función.\n   - C: Aunque `runParallel().then(data);` es válido, no utiliza una función explícita para manejar el resultado devuelto.\n\n3. **Respuestas B y D:**\n   - B: Utiliza `.done()` para manejar la Promesa con una función que retorna datos (entorno específico).\n   - D: Utiliza correctamente `.then()` con una función explícita para manejar el resultado."
    },
    {
      id: "q24",
      question: "Refer to the code below. What is the value of `result` when `Promise.race` executes?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "Car3 completed the race.",
        B: "Car1 crashed in the race.",
        C: "Car2 completed the race.",
        D: "Race is cancelled."
      },
      code: "let car1 = new Promise((_, reject) =>\n  setTimeout(reject, 2000, \"Car 1 crashed in\")\n);\n\nlet car2 = new Promise(resolve =>\n  setTimeout(resolve, 1500, \"Car 2 completed\")\n);\n\nlet car3 = new Promise(resolve =>\n  setTimeout(resolve, 3000, \"Car 3 completed\")\n);\n\nPromise.race([car1, car2, car3])\n  .then(value => {\n    let result = `${value} the race.`;\n  })\n  .catch(err => {\n    console.log(\"Race is cancelled.\", err);\n  });",
      explanation: "La opción correcta es: 'Car2 completed the race.'.\n\n**Explicación detallada:**\n\n1. **Uso de Promise.race():** Este método devuelve una Promesa que se resuelve o rechaza tan pronto como una de las Promesas en el array de entrada lo haga.\n\n2. **Resolución de las promesas:**\n   - `car1` se rechaza después de 2000 ms con el mensaje 'Car 1 crashed in'.\n   - `car2` se resuelve después de 1500 ms con el mensaje 'Car 2 completed'.\n   - `car3` se resuelve después de 3000 ms con el mensaje 'Car 3 completed'.\n\n3. **Primera promesa completada:** Como `car2` se resuelve antes que las otras promesas (1500 ms), el valor de `result` será 'Car 2 completed the race.'.\n\n4. **Descartar errores:** La sección `catch` no se ejecutará porque la primera Promesa resuelta con éxito es `car2`."
    },
    {
      id: "q25",
      question: "Which function should a developer use to repeatedly execute code at a fixed interval?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "setInterval",
        B: "setTimeout",
        C: "setPeriod",
        D: "setInteria"
      },
      explanation: "La opción correcta es la A: 'setInterval'.\n\n**Explicación detallada:**\n\n1. **setInterval():** Este método permite ejecutar una función repetidamente en un intervalo fijo especificado en milisegundos. Por ejemplo, `setInterval(myFunction, 1000)` ejecutará `myFunction` cada segundo.\n\n2. **Otras opciones:**\n   - B: 'setTimeout' solo ejecuta una función después de un retraso especificado, pero no de manera repetitiva.\n   - C: 'setPeriod' no es un método válido en JavaScript.\n   - D: 'setInteria' tampoco existe en JavaScript.\n\n3. **Conclusión:** Usar `setInterval` es la forma adecuada de ejecutar código en intervalos regulares."
    },
    {
      id: "q27",
      question: "Refer to the code below. Which two statements correctly execute the `runParallel()` function?",
      type: "multiple choice",
      correct_options: ["B", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "Async runParallel().then(data);",
        B: "runParallel().done(function(data) { return data; });",
        C: "runParallel().then(data);",
        D: "runParallel().then(function(data) { return data; });"
      },
      code: "const exec = (item, delay) =>\n  new Promise(resolve => setTimeout(() => resolve(item), delay));\n\nasync function runParallel() {\n  const [result1, result2, result3] = await Promise.all([\n    exec('x', '100'), exec('y', '500'), exec('z', '100')\n  ]);\n  return `parallel is done: ${result1}${result2}${result3}`;\n}",
      explanation: "Las respuestas correctas son B: 'runParallel().done(function(data) { return data; });' y D: 'runParallel().then(function(data) { return data; });'.\n\n**Explicación detallada:**\n\n1. **Uso de métodos en Promesas:** La función `runParallel()` devuelve una Promesa que puede ser manejada con métodos específicos como `.then()` y `.done()`.\n\n2. **Respuestas B y D:**\n   - B: Utiliza `.done()` correctamente para manejar el resultado de la Promesa y retornar los datos en la función proporcionada. Aunque `.done()` es menos común en JavaScript moderno, puede usarse en ciertos entornos específicos.\n   - D: Utiliza `.then()` correctamente con una función explícita para manejar el resultado devuelto por la Promesa.\n\n3. **Respuestas incorrectas:**\n   - A: 'Async runParallel().then(data);' contiene un error de sintaxis, ya que `async` no puede prefijar directamente una llamada a función.\n   - C: Aunque la opción usa `.then()` correctamente, no proporciona una función explícita para manejar los datos."
    },
    {
      id: "q28",
      question: "A developer creates a new web server using Node.js, and imports a server library that uses events and callbacks for handling server functionality. \n\nGiven the code and information. Which code logs an error at boot with an event?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "Server.catch((server) => { console.log('ERROR', error); });",
        B: "Server.error((server) => { console.log('ERROR', error); });",
        C: "Server.on('error', (error) => { console.log('ERROR', error); });",
        D: "try { server.start(); } catch (error) { console.log('ERROR', error); }"
      },
      explanation: "La opción correcta es la C: 'Server.on('error', (error) => { console.log('ERROR', error); });'.\n\n**Explicación detallada:**\n\n1. **Eventos en Node.js:** Node.js utiliza un modelo basado en eventos para manejar errores y otros estados. En este caso, el evento `error` puede ser capturado usando el método `on` del servidor.\n\n2. **Por qué C es correcta:**\n   - `Server.on('error', (error) => { ... });` escucha el evento `error` emitido por el servidor y ejecuta la función proporcionada para manejar ese error.\n   - Esto permite registrar mensajes de error cuando ocurren problemas durante el inicio del servidor.\n\n3. **Opciones incorrectas:**\n   - A: `Server.catch` no es un método válido en Node.js para manejar eventos o errores.\n   - B: `Server.error` no es válido ya que `error` no es un método en Node.js.\n   - D: La construcción `try...catch` maneja errores síncronos durante la ejecución de `server.start()` pero no captura eventos emitidos por el servidor."
    },
    {
      id: "q29",
      question: "Refer to the code below. In which sequence will the numbers be logged?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "01234",
        B: "02431",
        C: "02413",
        D: "13024"
      },
      code: "console.log(0);\nsetTimeout(() => {\n  console.log(1);\n});\nconsole.log(2);\nsetTimeout(() => {\n  console.log(3);\n}, 0);\nconsole.log(4);",
      explanation: "La opción correcta es la C: '02413'.\n\n**Explicación detallada:**\n\n1. **Ejecución síncrona:** El código ejecuta primero las operaciones síncronas en el orden en que aparecen:\n   - `console.log(0);` imprime `0`.\n   - `console.log(2);` imprime `2`.\n   - `console.log(4);` imprime `4`.\n\n2. **Ejecución asíncrona con `setTimeout`:** Las funciones pasadas a `setTimeout` se colocan en la cola de tareas y se ejecutan después de que el hilo principal haya completado la ejecución del código síncrono.\n   - La primera llamada a `setTimeout(() => { console.log(1); });` coloca `console.log(1)` en la cola de tareas.\n   - La segunda llamada a `setTimeout(() => { console.log(3); }, 0);` coloca `console.log(3)` en la cola de tareas.\n\n3. **Orden de ejecución en la cola de tareas:** Ambas llamadas a `setTimeout` tienen un retraso mínimo, pero son procesadas en el orden en que se encuentran en la cola:\n   - Primero se ejecuta `console.log(1)`.\n   - Luego se ejecuta `console.log(3)`.\n\n4. **Secuencia de salida:** La secuencia completa de salida es `0`, `2`, `4`, `1`, `3`."
    },
    {
      id: "q30",
      question: "Refer to the code below. Which code should be inserted at line 03 to set up an event and start the web server?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Server.start();",
        B: "server.on('connect', (port) => { console.log('Listening on', port); });",
        C: "server()",
        D: "serve((port) => (",
        E: "console.log('Listening on', port);"
      },
      code: "const server = require('server');\n/* Insert code here */",
      explanation: "La opción correcta es la B: 'server.on('connect', (port) => { console.log('Listening on', port); });'.\n\n**Explicación detallada:**\n\n1. **Uso de eventos en Node.js:** Las bibliotecas que manejan servidores en Node.js usualmente emiten eventos como 'connect', 'error', etc. Estos eventos se capturan con el método `on`.\n\n2. **Configuración del evento:**\n   - La línea `server.on('connect', (port) => { console.log('Listening on', port); });` configura un listener para el evento 'connect'.\n   - Cuando el servidor se conecta y emite este evento, la función de callback proporcionada registra un mensaje en la consola con el puerto.\n\n3. **Opciones incorrectas:**\n   - A: 'Server.start();' no es válido porque `server` es un objeto, y este método no está definido en este contexto.\n   - C: 'server()' sugiere que `server` es una función, lo cual no es correcto según el contexto proporcionado.\n   - D: 'serve((port) => (' no es una construcción válida de JavaScript.\n   - E: 'console.log('Listening on', port);' imprime algo en la consola, pero no configura el evento necesario para el servidor."
    },
    {
      id: "q31",
      question: "Refer to the code below. What is the result of running line 05?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "aPromise and bPromise run sequentially.",
        B: "Neither aPromise or bPromise runs.",
        C: "aPromise and bPromise run in parallel.",
        D: "Only aPromise runs."
      },
      code: "const resolveAfterMilliseconds = (ms) => Promise.resolve(setTimeout(() => console.log(ms), ms));\nconst aPromise = await resolveAfterMilliseconds(500);\nconst bPromise = await resolveAfterMilliseconds(500);\nawait aPromise, await bPromise;",
      explanation: "La opción correcta es la B: 'Neither aPromise or bPromise runs.'\n\n**Explicación detallada:**\n\n1. **Uso incorrecto de `Promise.resolve`:** En este código, la función `resolveAfterMilliseconds` utiliza `Promise.resolve`, pero envuelve la llamada a `setTimeout`. Esto es problemático porque `setTimeout` no devuelve una promesa; simplemente programa una función para ejecutarse más tarde. Como resultado, el valor de retorno no está vinculado a ninguna acción asincrónica.\n\n2. **Impacto en `await`:** Las llamadas a `await resolveAfterMilliseconds(500)` no esperan nada útil porque `resolveAfterMilliseconds` devuelve una promesa ya resuelta inmediatamente, sin ningún retraso real. Además, `setTimeout` ejecuta su callback separadamente del flujo de promesas.\n\n3. **Resultado:**\n   - Aunque el código registra '500' en la consola debido a `setTimeout`, `aPromise` y `bPromise` no cumplen con el comportamiento esperado de manejar promesas de forma efectiva.\n   - Como resultado, ninguna de las promesas se ejecuta de manera útil en línea 05.\n\n4. **Opciones incorrectas:**\n   - A: 'aPromise and bPromise run sequentially.' es incorrecta porque `resolveAfterMilliseconds` no introduce comportamiento secuencial entre las promesas.\n   - C: 'aPromise and bPromise run in parallel.' es incorrecta porque el código no ejecuta realmente promesas de forma paralela.\n   - D: 'Only aPromise runs.' también es incorrecta porque `aPromise` no tiene ningún efecto útil asociado."
    },
    {
      id: "q32",
      question: "Given the code below, what is logged by the first four log statements?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "0 0 1 2",
        B: "0 1 2 3",
        C: "0 1 1 2",
        D: "0 1 2 2"
      },
      code: "counter = 0;\nconst logCounter = () => { console.log(counter); };\nlogCounter();\nsetTimeout(logCounter, 1100);\nsetInterval(() => {\n  counter++;\n  logCounter();\n}, 1000);",
      explanation: "La opción correcta es la C: '0 1 1 2'.\n\n**Explicación detallada:**\n\n1. **Primera ejecución de `logCounter`:**\n   - La función `logCounter` se llama inmediatamente después de su declaración, y como el valor inicial de `counter` es `0`, el primer mensaje registrado en la consola será `0`.\n\n2. **`setInterval` ejecuta después de 1000 ms:**\n   - Después de 1000 ms, `counter++` incrementa el valor de `counter` de `0` a `1`, y `logCounter` imprime `1`.\n\n3. **`setTimeout` ejecuta después de 1100 ms:**\n   - `logCounter` es llamado por `setTimeout` después de 1100 ms. El valor de `counter` sigue siendo `1` en este punto (ya que el incremento ocurre cada 1000 ms y solo ha ocurrido una vez). Por lo tanto, imprime `1` nuevamente.\n\n4. **Segunda ejecución de `setInterval`:**\n   - El intervalo de 1000 ms transcurre nuevamente, y `counter` es incrementado de `1` a `2`. Luego, `logCounter` imprime `2`.\n\n**Secuencia de salida en consola:**\n- `0` (primera llamada inmediata a `logCounter`).\n- `1` (primera ejecución del intervalo).\n- `1` (ejecución del `setTimeout`).\n- `2` (segunda ejecución del intervalo)."
    },
    {
      id: "q33",
      question: "Universal Containers (UC) notices that its application, which allows users to search for accounts, makes a network request each time a key is pressed. This results in too many requests for the server to handle. Addressing this issue, UC decides to implement a debounce function on the string change handler. What are three key steps to implement this debounce function?",
      type: "multiple choice",
      correct_options: ["B", "D", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "If there is an existing setTimeout and the search string changes, allow the existing setTimeout to finish, and do not enqueue a new setTimeout.",
        B: "When the search string changes, enqueue the request within a setTimeout.",
        C: "Ensure that the network request has the property debounce set to true.",
        D: "If there is an existing setTimeout and the search string changes, cancel the existing setTimeout using the persisted timerId and replace it with a new setTimeout.",
        E: "Store the timerId of the setTimeout last enqueued by the search string change handler."
      },
      explanation: "Las opciones correctas son B: 'When the search string changes, enqueue the request within a setTimeout.', D: 'If there is an existing setTimeout and the search string changes, cancel the existing setTimeout using the persisted timerId and replace it with a new setTimeout.', y E: 'Store the timerId of the setTimeout last enqueued by the search string change handler.'\n\n**Explicación detallada:**\n\n1. **Opción B:**\n   - Cuando cambia el texto de búsqueda, se debe programar el envío de la solicitud dentro de un `setTimeout` para esperar un intervalo definido antes de realizar la solicitud.\n\n2. **Opción D:**\n   - Si hay un `setTimeout` existente y el texto de búsqueda cambia, el `setTimeout` anterior debe ser cancelado utilizando el `timerId` persistente. Esto asegura que solo se envíe la solicitud más relevante y se evite hacer solicitudes redundantes.\n\n3. **Opción E:**\n   - Es necesario almacenar el `timerId` del último `setTimeout` programado para poder cancelarlo cuando se detecta un cambio adicional en el texto de búsqueda.\n\n**Opciones incorrectas:**\n   - A: 'If there is an existing setTimeout and the search string changes, allow the existing setTimeout to finish...' va en contra del propósito de debounce, ya que debe evitar solicitudes obsoletas cancelando el temporizador existente.\n   - C: 'Ensure that the network request has the property debounce set to true.' no es una opción válida, ya que no existe una propiedad de red llamada 'debounce'."
    },
    {
      id: "q34",
      question: "Which two promises are rejected when determining whether to use `Promise.then` or `Promise.catch`, especially when a Promise throws an error?",
      type: "multiple choice",
      correct_options: ["B", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "Promise.reject('cool error here').then(error => console.error(error));",
        B: "Promise.reject('cool error here').catch(error => console.error(error));",
        C: "new Promise((resolve, reject) => { throw 'cool error here'; }).catch(error => console.error(error));",
        D: "new Promise(() => { throw 'cool error here'; }).then(null, error => console.error(error));"
      },
      explanation: "Las opciones correctas son B: 'Promise.reject('cool error here').catch(error => console.error(error));' y C: 'new Promise((resolve, reject) => { throw 'cool error here'; }).catch(error => console.error(error));'.\n\n**Explicación detallada:**\n\n1. **Opción B:**\n   - `Promise.reject('cool error here')` crea una promesa rechazada inmediatamente con el error `'cool error here'`.\n   - La llamada a `.catch()` maneja este error, por lo que el `console.error(error)` se ejecuta y muestra `'cool error here'` en la consola.\n\n2. **Opción C:**\n   - El constructor `new Promise((resolve, reject) => { throw 'cool error here'; })` lanza un error directamente dentro del ejecutor de la promesa.\n   - Este error se captura en el bloque `.catch(error => console.error(error))`, lo que también muestra `'cool error here'` en la consola.\n\n3. **Opciones incorrectas:**\n   - A: `Promise.reject` genera una promesa rechazada, pero al usar `.then()`, no se proporciona un manejador de rechazo. Por lo tanto, no maneja el error y no imprime nada.\n   - D: Aunque `throw 'cool error here';` ocurre, se usa `.then(null, error => console.error(error));`. Esto puede manejar el error, pero no es una solución estándar en comparación con `.catch()`. Además, es una práctica menos común para el manejo de errores."
    },
    {
      id: "q35",
      question: "A developer is trying to convince management that their team will benefit from using Node.js for a backend server that they are going to create. The server will be a web server that handles API requests from a website that the team has already built using HTML, CSS, and JavaScript. \n\nWhich three benefits of Node.js can the developer use to persuade their manager?",
      type: "multiple choice",
      correct_options: ["A", "D", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "Installs with its own package manager to install and manage third-party libraries.",
        B: "Ensures stability with one major release every few years.",
        C: "Performs a static analysis on code before execution to look for runtime errors.",
        D: "Executes server-side JavaScript code to avoid learning a new language.",
        E: "Uses non-blocking functionality for performant request handling."
      },
      explanation: "Las opciones correctas son A: 'Installs with its own package manager to install and manage third-party libraries.', D: 'Executes server-side JavaScript code to avoid learning a new language.', y E: 'Uses non-blocking functionality for performant request handling.'\n\n**Explicación detallada:**\n\n1. **Opción A:**\n   - Node.js incluye el Administrador de Paquetes de Node (NPM), que permite instalar y gestionar bibliotecas de terceros de manera fácil y eficiente. Esto agiliza el desarrollo al proporcionar acceso a una amplia gama de herramientas y frameworks.\n\n2. **Opción D:**\n   - Node.js permite ejecutar código JavaScript en el servidor, lo que evita la necesidad de aprender un nuevo lenguaje para el backend, especialmente cuando el frontend ya está construido en JavaScript. Esto aumenta la productividad del equipo.\n\n3. **Opción E:**\n   - Node.js utiliza un modelo de E/S no bloqueante, basado en eventos, que es ideal para manejar múltiples solicitudes simultáneamente sin afectar el rendimiento. Esto lo hace excelente para aplicaciones de alto rendimiento como servidores web y APIs.\n\n**Opciones incorrectas:**\n   - B: 'Ensures stability with one major release every few years.' no es precisa, ya que Node.js sigue un ciclo de versiones más frecuente (semver).\n   - C: 'Performs a static analysis on code before execution to look for runtime errors.' no es una funcionalidad nativa de Node.js; esta tarea generalmente requiere herramientas adicionales como linters o TypeScript."
    },
    {
      id: "q36",
      question: "Refer to the code below. What is the output after the code executes successfully?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "EndStartSuccess",
        B: "StartSuccessEnd",
        C: "StartEndSuccess",
        D: "SuccessStartEnd"
      },
      code: "console.log('Start');\nPromise.resolve('Success').then(function(value) {\n  console.log('Success');\n});\nconsole.log('End');",
      explanation: "La opción correcta es la C: 'StartEndSuccess'.\n\n**Explicación detallada:**\n\n1. **Orden de ejecución en JavaScript:**\n   - Las promesas son manejadas de forma asincrónica en JavaScript y se colocan en la cola de tareas para ser ejecutadas después de que el código síncrono haya terminado.\n\n2. **Flujo del código:**\n   - `console.log('Start');` se ejecuta primero y muestra `'Start'` en la consola.\n   - A continuación, la promesa `Promise.resolve('Success')` es creada y su `.then()` registra el manejador que imprimirá `'Success'`. Sin embargo, la ejecución de este manejador se pospone hasta que el código síncrono haya finalizado.\n   - Después, `console.log('End');` se ejecuta inmediatamente, mostrando `'End'` en la consola.\n   - Finalmente, el manejador de la promesa en `.then()` se ejecuta, mostrando `'Success'`.\n\n3. **Secuencia de salida:**\n   - El orden en que los mensajes aparecen en la consola es `'Start'`, `'End'`, y luego `'Success'`, que corresponde a la opción C.\n\n4. **Opciones incorrectas:**\n   - A: 'EndStartSuccess' es incorrecta porque el orden de ejecución pone `'Start'` antes de `'End'`.\n   - B: 'StartSuccessEnd' es incorrecta porque `'Success'` no se imprime antes de `'End'` debido a la naturaleza asincrónica de las promesas.\n   - D: 'SuccessStartEnd' es incorrecta porque `'Success'` se imprime después del código síncrono."
    },
    {
      id: "q37",
      question: "Which three statements are true about promises?",
      type: "multiple choice",
      correct_options: ["B", "C", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "The executor of a new Promise runs automatically.",
        B: "A Promise has a .then() method.",
        C: "A fulfilled or rejected promise will not change states.",
        D: "A settled promise can become resolved.",
        E: "A pending promise can become fulfilled, settled, or rejected."
      },
      explanation: "Las opciones correctas son B: 'A Promise has a .then() method.', C: 'A fulfilled or rejected promise will not change states.', y E: 'A pending promise can become fulfilled, settled, or rejected.'\n\n**Explicación detallada:**\n\n1. **Opción B:**\n   - Promesas en JavaScript tienen un método `.then()` que se utiliza para registrar funciones que manejarán la resolución exitosa de la promesa.\n\n2. **Opción C:**\n   - Una vez que una promesa es cumplida (fulfilled) o rechazada (rejected), su estado no puede cambiar. Esto significa que las promesas son inmutables después de ser resueltas o rechazadas.\n\n3. **Opción E:**\n   - Una promesa pendiente (pending) puede llegar a ser cumplida (fulfilled) o rechazada (rejected), y en ese punto, se convierte en una promesa resuelta (settled).\n\n**Opciones incorrectas:**\n   - A: 'The executor of a new Promise runs automatically.' es falso porque el ejecutor de una nueva promesa no siempre se ejecuta automáticamente; depende de cómo se cree la promesa.\n   - D: 'A settled promise can become resolved.' es incorrecto porque una promesa ya resuelta no puede cambiar de estado nuevamente."
    },
    {
      id: "q38",
      question: "Given the code below. What is logged to the console?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "2 1 4 3 5",
        B: "2 5 1 3 4",
        C: "1 2 4 3 5",
        D: "1 2 5 3 4"
      },
      code: "setTimeout(() => {\n  console.log(1);\n}, 0);\n\nconsole.log(2);\n\nnew Promise((resolve, reject) => {\n  setTimeout(() => {\n    reject(console.log(3));\n  }, 1000);\n}).catch(() => {\n  console.log(4);\n});\n\nconsole.log(5);",
      explanation: "La opción correcta es la B: '2 5 1 3 4'.\n\n**Explicación detallada:**\n\n1. **Flujo de ejecución:**\n   - El código ejecuta las acciones de forma síncrona y asíncrona. Es importante entender el orden en que se ejecutan las tareas en la pila de llamadas (`call stack`) y la cola de tareas (`event queue`).\n\n2. **Síncrono:**\n   - `console.log(2)` es ejecutado inmediatamente, imprimiendo `2`.\n   - `console.log(5)` se ejecuta después de `console.log(2)` porque también es una operación síncrona, imprimiendo `5`.\n\n3. **Asíncrono (setTimeout):**\n   - La función pasada a `setTimeout(() => { console.log(1); }, 0);` se coloca en la cola de tareas y se ejecuta después de que el código síncrono haya terminado, imprimiendo `1`.\n\n4. **Asíncrono (Promesa):**\n   - El `setTimeout(() => { reject(console.log(3)); }, 1000);` coloca su tarea en la cola de tareas. Después de 1 segundo, imprime `3` primero (debido a `console.log(3)` dentro del `reject`) y luego maneja el rechazo con el bloque `catch`, que imprime `4`.\n\n5. **Orden final:**\n   - Síncrono: `2`, `5`.\n   - Asíncrono: `1`, `3`, `4`.\n   - Resultado: `2 5 1 3 4`.\n\n6. **Opciones incorrectas:**\n   - A: '2 1 4 3 5' es incorrecta porque `5` se imprime antes de cualquier tarea asíncrona.\n   - C: '1 2 4 3 5' y D: '1 2 5 3 4' son incorrectas porque colocan las tareas asíncronas en posiciones equivocadas."
    },
    {
      id: "q39",
      question: "Universal Containers (UC) notices that its application that allows users to search for accounts makes a network request each time a key is pressed. This results in too many requests for the server to handle.UC decides to implement a debounce function on the string change handler.\n\nWhat are three key steps to implement this debounce function?",
      type: "multiple choice",
      correct_options: ["A", "B", "D"],
      number_of_correct_answers: 3,
      options: {
        A: "If there is an existing setTimeout and the search string change, allow the existing setTimeout to finish, and do not enqueue a new setTimeout.",
        B: "When the search string changes, enqueue the request within a setTimeout.",
        C: "Ensure that the network request has the property debounce set to true.",
        D: "If there is an existing setTimeout and the search string changes, cancel the existing setTimeout using the persisted timerId and replace it with a new setTimeout.",
        E: "Store the timerId of the setTimeout last enqueued by the search string change handler."
      },
      code: "function debounce(func, delay) {\n  let timerId;\n  return function(...args) {\n    if (timerId) {\n      clearTimeout(timerId);\n    }\n    timerId = setTimeout(() => func.apply(this, args), delay);\n  };\n}",
      explanation: "Las respuestas correctas son A, B y D.\n\n**Explicación detallada:**\n\n1. **Monitorear el cambio de la cadena de búsqueda:**\n   - La función debounce asegura que las solicitudes de red solo se ejecuten después de un retraso y no inmediatamente después de cada pulsación de tecla.\n\n2. **Cancelar el setTimeout existente:**\n   - Si un `setTimeout` existente ya está en cola y la cadena de búsqueda cambia, este `setTimeout` debe ser cancelado usando `clearTimeout(timerId)` antes de crear uno nuevo.\n\n3. **Encolar una nueva solicitud:**\n   - Cuando la cadena de búsqueda cambia, una nueva solicitud se encola dentro de un `setTimeout` para que la función se ejecute después de un retraso específico.\n\n4. **Opciones incorrectas:**\n   - C: `Ensure that the network request has the property debounce set to true` es incorrecta porque la implementación de debounce no depende de esta propiedad.\n   - E: Aunque es útil guardar el `timerId`, no es un paso clave para implementar la funcionalidad debounce."
    },
    {
      id: "q40",
      question: "A developer is wondering whether to use `Promise.then` or `Promise.catch`, especially when a Promise throws an error. Which two promises are rejected?",
      type: "multiple choice",
      correct_options: ["B", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "Promise.reject('cool error here').then(error => console.error(error));",
        B: "Promise.reject('cool error here').catch(error => console.error(error));",
        C: "new Promise((resolve, reject) => {throw 'cool error here';}).catch(error => console.error(error));",
        D: "new Promise(() => {throw 'cool error here';}).then(null, error => console.error(error));"
      },
      explanation: "Las respuestas correctas son B y C.\n\n**Explicación detallada:**\n\n1. **Opción B:**\n   - `Promise.reject('cool error here')` crea una Promesa rechazada inmediatamente.\n   - Al usar `.catch()`, se maneja el rechazo correctamente, mostrando el error en la consola con `console.error(error)`.\n\n2. **Opción C:**\n   - `new Promise((resolve, reject) => {throw 'cool error here';})` lanza un error dentro de la función del constructor de la Promesa.\n   - Este error es capturado por `.catch()`, lo cual lo hace una implementación válida para manejar errores.\n\n3. **Opciones incorrectas:**\n   - A: Aunque `Promise.reject('cool error here')` crea una Promesa rechazada, el uso de `.then(error => console.error(error))` no maneja el error, ya que `.then()` solo maneja resoluciones exitosas por defecto.\n   - D: `new Promise(() => {throw 'cool error here';})` lanza un error, pero al usar `.then(null, error => console.error(error))`, el manejo es poco convencional y no recomendado como práctica estándar."
    },
    {
      id: "q41",
      question: "Which three statements are true about promises?",
      type: "multiple choice",
      correct_options: ["B", "C", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "The executor of a new Promise runs automatically.",
        B: "A Promise has a .then() method.",
        C: "A fulfilled or rejected promise will not change states.",
        D: "A settled promise can become resolved.",
        E: "A pending promise can become fulfilled, settled, or rejected."
      },
      explanation: "Las respuestas correctas son B, C y E.\n\n**Explicación detallada:**\n\n1. **Opción B:**\n   - Las promesas tienen un método `.then()` que se utiliza para manejar el resultado cuando la promesa se resuelve (fulfilled).\n\n2. **Opción C:**\n   - Una vez que una promesa cambia a estado `fulfilled` o `rejected`, no puede cambiar a otro estado. Esto asegura que su resultado sea inmutable.\n\n3. **Opción E:**\n   - Una promesa en estado `pending` (pendiente) puede cambiar a `fulfilled` (resuelta) o a `rejected` (rechazada). Una vez que alcanza cualquiera de estos estados, se considera `settled` (finalizada).\n\n4. **Opciones incorrectas:**\n   - A: Aunque el ejecutor de una promesa (la función que se pasa al constructor) se ejecuta inmediatamente, esto no es clave para las propiedades fundamentales de las promesas.\n   - D: Una promesa que está `settled` no puede cambiar de nuevo a `resolved` porque su estado ya está definido."
    },
    {
      id: "q42",
      question: "Which statement accurately describes the behavior of the `async/await` keywords?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "The associated class contains some asynchronous functions.",
        B: "The associated function will always return a promise.",
        C: "The associated function can only be called via asynchronous methods.",
        D: "The associated function sometimes returns a promise."
      },
      explanation: "La opción correcta es B: `The associated function will always return a promise`.\n\n**Explicación detallada:**\n\n1. **Características de `async`:**\n   - Al definir una función con la palabra clave `async`, esa función siempre devuelve una promesa, independientemente de si contiene lógica asincrónica o no.\n   - Ejemplo:\n     ```javascript\n     async function example() {\n       return 'Hello';\n     }\n     example().then((result) => console.log(result)); // 'Hello'\n     ```\n\n2. **Uso de `await`:**\n   - La palabra clave `await` solo puede ser utilizada dentro de funciones `async`.\n   - Permite pausar la ejecución hasta que una promesa sea resuelta o rechazada, simplificando el manejo de código asincrónico.\n\n3. **Opciones incorrectas:**\n   - A: `async` se aplica a funciones, no directamente a clases.\n   - C: Las funciones `async` pueden ser llamadas por cualquier método, no exclusivamente asincrónicos.\n   - D: Una función `async` siempre devuelve una promesa, nunca en ocasiones."
    },
    {
      id: "q44",
      question: "Refer to the code below. In which sequence will the numbers be logged?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "01234",
        B: "02431",
        C: "02413",
        D: "13024"
      },
      code: "console.log(0);\nsetTimeout(() => {\n  console.log(1);\n});\nconsole.log(2);\nsetTimeout(() => {\n  console.log(3);\n}, 0);\nconsole.log(4);",
      explanation: "La opción correcta es C: `02413`.\n\n**Explicación detallada:**\n\n1. **Ejecución síncrona:**\n   - `console.log(0)` se ejecuta primero porque es una operación síncrona.\n   - Luego, `console.log(2)` y `console.log(4)` se ejecutan de forma secuencial, ya que también son operaciones síncronas.\n\n2. **Ejecución asincrónica:**\n   - Las llamadas a `setTimeout` son asincrónicas y se colocan en la cola de tareas.\n   - El mensaje `1` está dentro de un `setTimeout` sin tiempo explícito, lo que lo hace ejecutar después de las operaciones síncronas y antes de otras tareas programadas con `setTimeout`.\n   - El mensaje `3` está programado con un tiempo explícito de `0ms`, lo que lo sitúa en la cola detrás del mensaje `1`.\n\n3. **Secuencia:**\n   - Primero se ejecutan `0`, `2`, y `4`. Luego, `1` y, finalmente, `3`."
    },
    {
      id: "q45",
      question: "Refer to the code below. When does `Promise.finally` on the last line get called?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "When rejected",
        B: "When resolved and settled",
        C: "When resolved",
        D: "When resolved or rejected"
      },
      code: "new Promise((resolve, reject) => {\n  const fraction = Math.random();\n  if (fraction > 0.5) reject('fraction > 0.5, ' + fraction);\n  resolve(fraction);\n})\n.then(() => console.log('resolved'))\n.catch((error) => console.error(error))\n.finally(() => console.log('when am I called?'));",
      explanation: "La opción correcta es D: `When resolved or rejected`.\n\n**Explicación detallada:**\n\n1. **Comportamiento de `finally`:**\n   - El método `finally` en una promesa se ejecuta independientemente de si la promesa es resuelta (`resolved`) o rechazada (`rejected`).\n\n2. **Secuencia de ejecución:**\n   - Cuando la promesa se resuelve, se ejecuta el bloque `then`.\n   - Cuando la promesa se rechaza, se ejecuta el bloque `catch`.\n   - En ambos casos, el bloque `finally` se ejecuta al final de la cadena de la promesa.\n\n3. **Opciones incorrectas:**\n   - A, B y C no incluyen ambas posibilidades (resuelta y rechazada)."
    },
    {
      id: "q46",
      question: "Given the following code. What is logged by the first four log statements?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "0 0 1 2",
        B: "0 1 2 3",
        C: "0 1 1 2",
        D: "0 1 2 2"
      },
      code: "let counter = 0;\nconst logCounter = () => {\n  console.log(counter);\n};\nlogCounter();\nsetTimeout(logCounter, 1100);\nsetInterval(() => {\n  counter++;\n  logCounter();\n}, 1000);",
      explanation: "La opción correcta es C: `0 1 1 2`.\n\n**Explicación detallada:**\n\n1. **Primera llamada a `logCounter`:**\n   - Imprime `0`, ya que el contador no ha sido incrementado todavía.\n\n2. **Segundo `setTimeout`:**\n   - Se ejecuta después de 1100 ms. El incremento del contador (`counter++`) ocurre a los 1000 ms debido a `setInterval`, lo que hace que el contador sea `1` en ese momento.\n\n3. **Primer ciclo de `setInterval`:**\n   - Incrementa `counter` a `1` y registra `1`. Esto ocurre justo antes de que `setTimeout` registre también `1`.\n\n4. **Segundo ciclo de `setInterval`:**\n   - Incrementa `counter` a `2` y registra `2`."
    },
    {
      id: "q47",
      question: "Which three statements are true about promises?",
      type: "multiple choice",
      correct_options: ["B", "C", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "The executor of a new Promise runs automatically.",
        B: "A Promise has a .then() method.",
        C: "A fulfilled or rejected promise will not change states.",
        D: "A settled promise can become resolved.",
        E: "A pending promise can become fulfilled, settled, or rejected."
      },
      explanation: "Las respuestas correctas son B, C y E.\n\n**Explicación detallada:**\n\n1. **Opción B:**\n   - Todas las promesas tienen un método `.then()` que se ejecuta cuando la promesa se resuelve correctamente.\n\n2. **Opción C:**\n   - Una vez que una promesa se cumple o se rechaza, su estado no puede cambiar.\n\n3. **Opción E:**\n   - Una promesa pendiente puede pasar a los estados de 'cumplida', 'rechazada' o 'resuelta'.\n\n4. **Opciones incorrectas:**\n   - A: Aunque el ejecutor de una promesa se ejecuta automáticamente al crearla, esta opción no está seleccionada.\n   - D: Una promesa establecida no puede volver a ser resuelta."
    },
    {
      id: "q49",
      question: "Refer to code below. In which sequence will the numbers be logged?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "01234",
        B: "02431",
        C: "02413",
        D: "13024"
      },
      code: "console.log(0);\nsetTimeout(() => (\nconsole.log(1);\n});\nconsole.log(2);\nsetTimeout(() => {\nconsole.log(3);\n), 0);\nconsole.log(4);",
      explanation: "La opción correcta es C: **02413**.\n\n**Explicación detallada:**\n\n1. **Ejecución síncrona:**\n   - `console.log(0)` se ejecuta primero.\n   - `console.log(2)` y `console.log(4)` también son síncronos y se ejecutan antes de cualquier código asincrónico.\n\n2. **Ejecución de tareas asincrónicas:**\n   - Los callbacks de `setTimeout` se encolan en la cola de tareas y se ejecutan después de que el ciclo de eventos haya procesado el código síncrono.\n   - `console.log(3)` se ejecuta antes que `console.log(1)` porque el tiempo del segundo callback es `0`, mientras que el primero tiene una demora implícita."
    },
    {
      id: "q50",
      question: "A developer has a formatName function that takes two arguments, firstName and lastName, and returns a string. They want to schedule the function to run once after five seconds. \n\nWhat is the correct syntax to schedule this function?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "setTimeout (formatName(), 5000, 'John', 'BDoe');",
        B: "setTimeout (formatName('John', 'Doe'), 5000);",
        C: "setTimout(() => { formatName('John', 'Doe') }, 5000);",
        D: "setTimeout (formatName, 5000, 'John', 'Doe');"
      },
      code: "function formatName(firstName, lastName) {\n  return `${firstName} ${lastName}`;\n}\n\n// Programar la ejecución de formatName después de 5 segundos\nsetTimeout(formatName, 5000, 'John', 'Doe');",
      explanation: "La opción correcta es D: setTimeout (formatName, 5000, 'John', 'Doe');.\n\n**Explicación detallada:**\n\n1. **Uso correcto de setTimeout:**\n   - Se pasa una referencia a la función y los argumentos de la función se incluyen como parámetros adicionales para que se ejecuten después del retraso.\n\n2. **Errores en otras opciones:**\n   - Opción A: Invoca la función inmediatamente en lugar de programarla.\n   - Opción B: Invoca la función inmediatamente.\n   - Opción C: Tiene un error de sintaxis en la definición del callback."
    },    
    {
      id: "q51",
      question: "Given the following code. What is logged by the first four log statements?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "0 0 1 2",
        B: "0 1 2 3",
        C: "0 1 1 2",
        D: "0 1 2 2"
      },
      code: "counter = 0;\nconst logCounter = () => {\n  console.log(counter);\n};\nlogCounter();\nsetTimeout(logCounter, 1100);\nsetInterval(() => {\n  counter++;\n  logCounter();\n}, 1000);",
      explanation: "La opción correcta es C: **0 1 1 2**.\n\n**Explicación detallada:**\n\n1. **Primera llamada:**\n   - `logCounter()` se ejecuta inmediatamente y muestra `0`.\n\n2. **Segundo registro:**\n   - A los 1000 ms, el `counter` incrementa a `1` y se registra con `logCounter()`.\n\n3. **Tercer registro:**\n   - El `setTimeout(logCounter, 1100)` espera 1100 ms y registra el valor actual (`1`).\n\n4. **Cuarto registro:**\n   - A los 2000 ms, el `counter` incrementa a `2` y se registra con `logCounter()`.\n\n**Errores en otras opciones:**\n   - Opción A: No considera correctamente el tiempo del primer incremento.\n   - Opción B: Incrementa el valor demasiado rápido.\n   - Opción D: No coordina el registro del intervalo correctamente."
    },
    {
      id: "q52",
      question: "Which three statements are true about promises?",
      type: "multiple choice",
      correct_options: ["B", "C", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "The executor of a new Promise runs automatically.",
        B: "A Promise has a .then() method.",
        C: "A fulfilled or rejected promise will not change states.",
        D: "A settled promise can become resolved.",
        E: "A pending promise can become fulfilled, settled, or rejected."
      },
      explanation: "Las opciones correctas son B, C y E:\n\n**Explicación detallada:**\n\n1. **Opción B:**\n   - Las promesas tienen el método `.then()` para manejar los valores cumplidos.\n\n2. **Opción C:**\n   - Una promesa cumplida o rechazada no puede cambiar de estado.\n\n3. **Opción E:**\n   - Una promesa pendiente puede evolucionar hacia otros estados.\n\n4. **Errores en otras opciones:**\n   - Opción A: Aunque el ejecutor corre automáticamente, no está entre las respuestas correctas.\n   - Opción D: Las promesas cumplidas o rechazadas ya se consideran 'settled', por lo que no pueden cambiar a 'resolved'."
    },
    {
      id: "q53",
      question: "Which statement accurately describes the behaviour of the async/await keywords?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "The associated class contains some asynchronous functions.",
        B: "The associated function will always return a promise.",
        C: "The associated function can only be called via asynchronous methods.",
        D: "The associated function sometimes returns a promise."
      },
      explanation: "La opción correcta es B: **The associated function will always return a promise.**\n\n**Explicación detallada:**\n\n1. **Comportamiento de `async/await`:**\n   - Las funciones marcadas como `async` siempre devuelven una promesa.\n\n2. **Errores en otras opciones:**\n   - Opción A: Las palabras clave `async/await` no están asociadas directamente a clases.\n   - Opción C: Las funciones `async` pueden ser llamadas en cualquier contexto que permita manejar una promesa.\n   - Opción D: Una función `async` siempre devuelve una promesa, por lo que no 'a veces' lo hace."
    },
    {
      id: "q54",
      question: "Which function should a developer use to repeatedly execute code at a fixed interval?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "setInterval",
        B: "setTimeout",
        C: "setPeriod",
        D: "setInteria"
      },
      explanation: "La opción correcta es A: **setInterval.**\n\n**Explicación detallada:**\n\n1. **Uso de `setInterval`:**\n   - `setInterval` ejecuta un bloque de código o función repetidamente después de un intervalo de tiempo fijo, medido en milisegundos.\n\n2. **Errores en otras opciones:**\n   - Opción B: `setTimeout` ejecuta el código solo una vez después de un retraso especificado.\n   - Opción C y D: `setPeriod` y `setInteria` no son funciones válidas en JavaScript."
    },
    {
      id: "q55",
      question: "What's the output of the following JavaScript code?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "0 1 2 and 0 1 2",
        B: "0 1 2 and 3 3 3",
        C: "3 3 3 and 0 1 2"
      },
      code: "for (var i = 0; i < 3; i++) {\n    setTimeout(() => console.log(i), 1);\n}\n\nfor (let i = 0; i < 3; i++) {\n    setTimeout(() => console.log(i), 1);\n}",
      explanation: "La respuesta correcta es '3 3 3 and 0 1 2'.\n\n**Explicación:**\n\n1. **Primero con `var`:**\n   - La variable `i` está declarada con `var`, por lo que es compartida entre todas las iteraciones del ciclo. El `setTimeout` ejecuta la función después de que el ciclo termine, por lo que `i` ya habrá alcanzado el valor 3 en el momento de ejecutar las funciones dentro de `setTimeout`, imprimiendo `3` tres veces.\n\n2. **Luego con `let`:**\n   - La variable `i` está declarada con `let`, lo que crea un nuevo ámbito de bloque para cada iteración del ciclo. Esto significa que cada función `setTimeout` captura su propio valor de `i`, imprimiendo `0`, `1`, y `2` respectivamente, en el orden esperado."
    },                                                                                   
  ];
};
