export default function questions4() {
  return [
    {
      id: "q1",
      question:
        "The following code is used to send unique coupons to members in an e-commerce application. The generated coupon is sent using an AJAX request. \n\nWhich of the breakpoint types can be used to pause the code execution when getCoupon() is called and when the URL used in the AJAX request contains a certain string?",
      type: "multiple choice",
      correct_options: ["B", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "Event Listener",
        B: "Function",
        C: "XHR/Fetch",
        D: "DOM Change",
      },
      code: "function initialize(){\nvar userId=getUserId();\nvar token=getToken();\n//…\nfunction getCoupon(){\nlet coupon=generateCoupon(userId,token);\n//..\nreturn coupon;\n}\n//..\nlet code=getCoupon();\nsendCoupon(code); // AJAX request\n}",
      explanation:
        "Las respuestas correctas son:\n\n- **B. 'Function'**: Un breakpoint de función se usa para pausar el código cuando se llama a una función específica. Para usarlo, se llama a la función 'debug(functionName)', por ejemplo, 'debug(getCoupon)', y luego se ejecuta el código de nuevo, como inicializando 'initialize()'.\n- **C. 'XHR/Fetch'**: Este breakpoint detiene la ejecución del código cuando la URL de una solicitud AJAX contiene una cadena específica. Se configura en la pestaña de Fuentes ('Sources') del navegador.\n\nLas otras opciones son incorrectas:\n\n- **A. 'Event Listener'**: Se usa para eventos en el DOM, como clics de botones.\n- **D. 'DOM Change'**: Este breakpoint detiene el código cuando un nodo del DOM o sus hijos cambian, pero no aplica en este caso.",
    },
    {
      id: "q2",
      question:
        "A developer is working on an online course. She is using a library that facilitates the recording of course information for learners. She has added the code for that purpose. However, since there are exceptions at times because the API is not available or communication has been lost, she would like to handle them properly. \n\nWhat more does she need to add in order to capture the error and display it in the console?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "console.error('Communication with LMS failed.', e);",
        B: "catch() { console.error('Communication with LMS failed.'); }",
        C: "catch(e) { console.error('Communication with LMS failed.', e); }",
        D: "catch() { console.error('Communication with LMS failed.', e); }",
      },
      code: "try {\nconst objAPI = SCORM2004_GrabAPI();\nobjAPI.SetValue('cmi.completion_status', 'completed');\nobjAPI.SetValue('cmi.success_status', 'passed');\n} // Add code to handle errors",
      explanation:
        "La opción correcta es la C: 'catch(e) { console.error('Communication with LMS failed.', e); }'. Esto se debe a que un bloque 'try...catch' captura excepciones generadas durante la ejecución del código. El bloque 'catch(e)' permite acceder al error generado y utilizar 'console.error()' para mostrarlo en la consola junto con un mensaje descriptivo.\n\nLas otras opciones son incorrectas porque:\n\n- **A y D**: Tienen errores en el manejo de los parámetros del método 'console.error()'.\n- **B**: Falta el parámetro 'e' en el bloque 'catch', lo que limita la capacidad de capturar y mostrar el mensaje de la excepción.",
    },
    {
      id: "q3",
      question:
        "A JavaScript function is being created in an application for a tour agency to determine a tour guide based on a given activity. While testing the function, an issue is encountered where at times a wrong tour guide is being returned for a given activity. \n\nGiven the code below, what statement can be added before the function is called to pause code execution, and what step type can be used to examine the function block one line at a time for debugging?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: 'Add the debugger statement, and use the "step over" command.',
        B: 'Add the debugger statement, and use the "step into" command.',
        C: 'Add the breakpoint statement, and use the "step into" command.',
        D: 'Add the breakpoint statement, and use the "step over" command.',
      },
      code: 'var tourGuide = \'\';\n\nvar guides = [\n{ name: "ben", activities: ["trekking", "climbing", "camping", "rafting"] },\n{ name: "sam", activities: ["kayaking", "diving", "surfing", "sailing"] },\n{ name: "tim", activities: ["cycling", "sightseeing", "museum", "gallery"] }\n];\n\nfunction getGuide(activity) {\nfor (let i = 0; i < guides.length; i++) {\nif (guides[i].activities.includes(activity)) {\ntourGuide = guides[i].name;\n}\n}\nreturn tourGuide;\n}\n\n// Add statement here\ngetGuide(\'sightseeing\');',
      explanation:
        'La opción correcta es la C: \'Add the breakpoint statement, and use the "step into" command.\'. Esto se debe a que:\n\n1. La declaración del breakpoint detiene la ejecución del código en una línea específica.\n2. El comando "step into" en las DevTools del navegador permite analizar cada línea de la función en detalle para identificar el problema.\n\nLas otras opciones son incorrectas porque:\n\n- **A y B**: Un breakpoint no es una declaración válida; se debe configurar directamente en las DevTools.\n- **D**: El comando "step over" ejecuta toda la función sin examinar cada línea dentro de ella.',
    },
    {
      id: "q4",
      question:
        "The following JavaScript object is being created to manage how a page in an application loads and initializes third-party plugins. When the browser loads the page, the page.init() function is called which also contains logic that supposedly sets the 'loaded' property of the object to true. \n\nHowever, the property value does not get updated. Which pane in the browser developer tools can be used to allow a user to monitor the property value while stepping through code?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "Scope",
        B: "Call Stack",
        C: "Watch",
        D: "Breakpoints",
      },
      code: "var page = {\nloaded: false, // 'loaded' property\nplugins: [\n{ id: 'library', status: false },\n{ id: 'analytics', status: false },\n// …\n],\nload: function () {\nfor (i in this.plugins) {\nplugin.init(this.plugins[i].id); // initialize plugin\nthis.plugins[i].status = true; // update plugin status\n}\n(function () {\n// ...\nthis.loaded = true; // update 'loaded' property\n})();\n},\ninit: function () {\nthis.load();\n},\n//…\n};\n\npage.init(); // load the page",
      explanation:
        "La opción correcta es la C: 'Watch'. El panel Watch se usa para inspeccionar valores de expresiones o variables de JavaScript, como propiedades de objetos. Los valores se actualizan automáticamente mientras se recorre el código paso a paso.\n\nEl problema es que la propiedad 'loaded' no se actualiza porque la lógica está restringida al alcance local dentro de la función anónima. Los otros paneles tienen funciones diferentes:\n\n- **A. Scope**: Permite ver y editar variables en el ámbito local, global y de cierres, pero no es específico para monitorear propiedades continuamente.\n- **B. Call Stack**: Muestra las funciones llamadas hasta la línea actual en la ejecución pausada.\n- **D. Breakpoints**: Muestra los puntos de interrupción establecidos, pero no se utiliza para monitorear valores.",
    },
    {
      id: "q5",
      question:
        "A developer of Cosmic Electronics is building a web page that should allow a sales user to get information about the specified customer from a third-party system. A function named 'getCRMData' has been defined to get the data as an object when the current sales user clicks a button on the page. However, when the button is clicked, the expected data is not returned. \n\nThe developer would like to log the time taken by the request and view the returned data in tabular format. Which methods of the console object can be utilized for this use case?",
      type: "multiple choice",
      correct_options: ["A", "B", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "console.time()",
        B: "console.group()",
        C: "console.timeLog()",
        D: "console.timer()",
        E: "console.table()",
      },
      code: "document.getElementById('get-button').addEventListener('click', async () => {\nconst data = await getCRMData();\n});",
      explanation:
        "Las respuestas correctas son:\n\n- **A. 'console.time()'**: Se utiliza para iniciar un temporizador y medir cuánto tiempo tarda una operación en completarse.\n- **B. 'console.group()'**: Crea un grupo en la consola para organizar mejor los mensajes relacionados.\n- **E. 'console.table()'**: Muestra datos de un objeto o array en formato tabular en la consola.\n\nLas otras opciones son incorrectas:\n\n- **C**: Aunque 'console.timeLog()' registra el valor actual del temporizador, la pregunta no menciona específicamente esta necesidad.\n- **D**: 'console.timer()' no es un método válido en la API de consola.",
    },
    {
      id: "q6",
      question:
        "A developer has created a function that normalizes scores for an online quiz. \n\nWhat needs to be added to the 'normalizeScore' function in order to create an exception that can then be displayed using the 'console.info' statement in the 'try ... catch' block?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "if (isNaN(raw) || isNaN(possible)) { return error('Scores must be numbers!'); }",
        B: "if (isNaN(raw) || isNaN(possible)) { error('Scores must be numbers!'); }",
        C: "if (isNaN(raw) || isNaN(possible)) { new Error('Scores must be numbers!'); }",
        D: "if (isNaN(raw) || isNaN(possible)) { throw 'Scores must be numbers!'; }",
      },
      code: "function normalizeScore(raw, possible) {\n// Add code here to create an exception if numbers are not passed in.\nreturn (raw/possible);\n}\n\ntry {\nconst score = normalizeScore(rawScore, possScore);\n} catch(e) {\nconsole.info(e);\n}",
      explanation:
        "La opción correcta es la D: 'if (isNaN(raw) || isNaN(possible)) { throw 'Scores must be numbers!'; }'. La declaración 'throw' se utiliza para generar una excepción con un mensaje específico. Si los valores proporcionados no son números válidos, la ejecución del código se detendrá y se pasará el control al bloque 'catch', donde el mensaje de la excepción se puede mostrar con 'console.info()'.\n\nLas otras opciones son incorrectas porque:\n\n- **A y B**: El uso de 'error' en lugar de 'throw' genera un error, ya que 'error' no es un método o palabra clave en JavaScript.\n- **C**: 'new Error()' crea un objeto de error pero no lo lanza; falta la palabra clave 'throw'.",
    },
    {
      id: "q7",
      question:
        "The following 'try ... catch' block has been set up to display a simple message about the exception to the console. \n\nWhat are valid ways to display the exception information using the 'error' object?",
      type: "multiple choice",
      correct_options: ["A", "B", "C"],
      number_of_correct_answers: 3,
      options: {
        A: "console.info(e.name +' -> ' + e.message);",
        B: "console.info(e.name, e.message);",
        C: "console.info({name: e.name, message: e.message});",
        D: "console.info(e.error.name +'->' + e.error.message);",
        E: "console.info(e.error.name, e.error.message);",
      },
      code: "try {\nconst score = normalizeScore('A', 12);\n} catch(e) {\nconsole.info(e);\n}",
      explanation:
        "Las respuestas correctas son:\n\n- **A. 'console.info(e.name + ' -> ' + e.message);'**: Usa concatenación de cadenas para mostrar el nombre y el mensaje del error.\n- **B. 'console.info(e.name, e.message);'**: Muestra los valores directamente como parámetros separados en el método 'console.info()'.\n- **C. 'console.info({name: e.name, message: e.message});'**: Representa el error como un objeto con propiedades 'name' y 'message'.\n\nLas otras opciones son incorrectas porque:\n\n- **D y E**: 'e.error' no es una propiedad válida del objeto de error estándar.",
    },
    {
      id: "q8",
      question:
        "A web developer has built a questionnaire that consists of a series of forms. When a form is submitted, the page is reloaded and the next form is generated based on answers that were selected in the previous form. However, issues were encountered in the form generation. The developer then used console.log() statements to inspect values and debug code, but the log messages are cleared out once a form is submitted. \n\nWhat should be done to prevent this behavior?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Use the persist.log() method instead of console.log().",
        B: "Enable the 'Preserve Log' setting in the browser.",
        C: "Set the second parameter of the console.log() method to true.",
        D: "Submit the form asynchronously to avoid reloads.",
      },
      explanation:
        "La opción correcta es la B: 'Enable the Preserve Log setting in the browser.'. Esto se debe a que los navegadores como Chrome y Safari ofrecen esta configuración para mantener los mensajes registrados en la consola entre las actualizaciones o recargas de página. En Firefox, esta configuración se llama 'Persist Logs'.\n\nLas otras opciones son incorrectas porque:\n\n- **A**: 'persist.log()' no es un método válido en JavaScript.\n- **C**: Los parámetros adicionales en 'console.log()' solo se muestran como mensajes adicionales, pero no tienen relación con la persistencia de los logs.\n- **D**: Aunque el envío asincrónico evita recargas, no aborda directamente la preservación de los logs en la consola.",
    },
    {
      id: "q9",
      question:
        "A developer is working on a site that is intended to capture and track user interactions. Before storing the data, she needs to have the data normalized and then formatted in JSON format. She uses the 'processData' function for this. At times there are exceptions in the 'normalize' function. When that occurs, a message is logged in the console and a different function is called for normalizing the data. The developer wants to make sure that the 'formatData' function is always called. \n\nWhat can be done to facilitate that?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "No additional code is required; the 'formatData' function will always run because it is outside the 'try ... catch' block.",
        B: "The 'formatData' function should be placed inside the 'catch' block in order to ensure that it always runs.",
        C: "The 'formatData' function should be placed inside a 'throw' block so that it runs no matter what happens in the 'try ... catch' block.",
        D: "The 'formatData' function should be placed inside a 'finally' block so that it runs no matter what happens in the 'try ... catch' block.",
      },
      code: "function processData(theData) {\nlet normalizedData = theData;\ntry {\nnormalizedData = normalizeData(theData);\n} catch(err) {\nconsole.info('normalizeData did not work. Using normalizeSoft.', err);\nnormalizedData = normalizeSoftData(theData);\n}\nformatData(normalizedData);\n}",
      explanation:
        "La opción correcta es la D: 'The formatData function should be placed inside a finally block so that it runs no matter what happens in the try ... catch block.'. Esto se debe a que el bloque 'finally' asegura que el código dentro de él siempre se ejecutará, independientemente de si ocurre o no una excepción.\n\nLas otras opciones son incorrectas porque:\n\n- **A**: El código fuera del bloque 'try ... catch' no se ejecutará si ocurre otra excepción dentro del bloque 'catch'.\n- **B**: Colocar la función en el bloque 'catch' no asegura que se ejecute si no hay excepciones.\n- **C**: 'throw' genera excepciones; no garantiza que el código sea ejecutado consistentemente.",
    },
    {
      id: "q10",
      question: "Refer to the code below:\n\nThe developer needs to insert a code statement in the location shown. The code statement has these requirements:\n1. Does require an import\n2. Logs an error when the boolean statement evaluates to false\n3. Works in both the browser and Node.js\n\nWhich meets the requirements?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "assert(number % 2 === 0);",
        B: "console.error(number % 2 === 0);",
        C: "console.debug(number % 2 === 0);",
        D: "console.assert(number % 2 === 0);"
      },
      code: "for(let number = 2; number <= 5; number += 1) {\n  // insert code statement here\n}",
      explanation: "La opción correcta es la D: 'console.assert(number % 2 === 0);'.\n\n**Explicación detallada:**\n\n1. **console.assert():** Este método evalúa una expresión booleana y genera un mensaje de error en la consola si la expresión se evalúa como `false`. Aunque es parte de la API estándar de JavaScript, no requiere ninguna importación adicional y funciona tanto en el navegador como en Node.js.\n\n2. **Otras opciones:**\n   - A: 'assert(number % 2 === 0);' no es válida porque `assert` requiere la importación del módulo `assert` en Node.js.\n   - B: 'console.error(number % 2 === 0);' simplemente registra un mensaje de error en la consola, pero no depende de la evaluación booleana.\n   - C: 'console.debug(number % 2 === 0);' genera un mensaje de depuración, pero no cumple con el requisito de registrar un error cuando la expresión es `false`."
    },
    {
      id: "q11",
      question: "Which three actions can be performed using the JavaScript browser console?",
      type: "multiple choice",
      correct_options: ["A", "C", "D"],
      number_of_correct_answers: 3,
      options: {
        A: "View and change DOM of the page.",
        B: "Display a report showing the performance of a page.",
        C: "Run code that is not related to the page.",
        D: "View, change, and debug the JavaScript code of the page.",
        E: "View and change security cookies."
      },
      explanation: "Las respuestas correctas son A: 'View and change DOM of the page.', C: 'Run code that is not related to the page.', y D: 'View, change, and debug the JavaScript code of the page.'\n\n**Explicación detallada:**\n\n1. **A: View and change DOM of the page:** El navegador permite inspeccionar y modificar elementos HTML de la página directamente desde la consola.\n\n2. **C: Run code that is not related to the page:** La consola permite ejecutar código JavaScript independiente del contexto de la página actual. Esto es útil para pruebas rápidas o cálculos.\n\n3. **D: View, change, and debug JavaScript code of the page:** Se puede usar la consola para depurar errores, inspeccionar variables y modificar el comportamiento del código en tiempo real.\n\n4. **Opciones incorrectas:**\n   - B: Aunque las herramientas de desarrollo del navegador incluyen informes de rendimiento, esta funcionalidad no está directamente accesible desde la consola.\n   - E: No es posible cambiar las cookies de seguridad directamente desde la consola sin utilizar APIs específicas."
    },
    {
      id: "q12",
      question: "Universal Containers (UC) just launched a new landing page, but users complain that the website is slow. A developer found some functions that might cause the problem. To verify this, the developer decides to execute everything and log the time each of these three suspicious functions consumes. \n\nWhich function can the developer use to obtain the time spent by every one of the three functions?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "console.time('Performance'); ... console.timeEnd('Performance');",
        B: "timeLog()",
        C: "console.timeStamp()",
        D: "console.trace()",
        E: "console.getTime()"
      },
      code: "console.time('Performance');\nmaybeAHeavyFunction();\nthisCouldTakeTooLong();\norMaybeThisOne();\nconsole.timeEnd('Performance');",
      explanation: "La opción correcta es la A: 'console.time('Performance'); ... console.timeEnd('Performance');'.\n\n**Explicación detallada:**\n\n1. **Métodos `console.time` y `console.timeEnd`:**\n   - `console.time(label)` inicia un temporizador con la etiqueta proporcionada (en este caso, 'Performance').\n   - `console.timeEnd(label)` detiene el temporizador con la misma etiqueta y registra el tiempo transcurrido en la consola.\n\n2. **Cómo funciona el código:**\n   - El desarrollador utiliza `console.time('Performance');` para iniciar la medición del tiempo antes de ejecutar las funciones sospechosas (`maybeAHeavyFunction`, `thisCouldTakeTooLong`, y `orMaybeThisOne`).\n   - Después de ejecutar estas funciones, `console.timeEnd('Performance');` registra el tiempo total transcurrido.\n\n3. **Opciones incorrectas:**\n   - B: `timeLog()` se usa para registrar el tiempo transcurrido de un temporizador activo, pero no detiene el temporizador ni registra el tiempo total automáticamente.\n   - C: `console.timeStamp()` inserta una marca de tiempo en la línea de tiempo del navegador pero no mide tiempos entre bloques de código.\n   - D: `console.trace()` imprime la pila de llamadas (stack trace) y no mide el tiempo transcurrido.\n   - E: `console.getTime()` no es un método válido de `console`."
    },
    {
      id: "q13",
      question: "A developer is asked to fix some bugs reported by users. To do that, the developer adds a breakpoint for debugging. When the code execution stops at the breakpoint on line 06. \n\nWhich two types of information are available in the browser console?",
      type: "multiple choice",
      correct_options: ["C", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "The values of the carSpeed and fourWheels variables",
        B: "A variable displaying the number of instances created for the Car Object.",
        C: "The style, event listeners and other attributes applied to the carSpeed DOM element.",
        D: "The information stored in the window.localStorage property."
      },
      code: "function Car(maxSpeed, color) {\n  this.maxspeed = maxSpeed;\n  this.color = color;\n  let carSpeed = document.getElementById('CarSpeed');\n  debugger;\n}\nlet fourWheels = new Car(carSpeed.value, 'red');",
      explanation: "Las respuestas correctas son C: 'The style, event listeners and other attributes applied to the carSpeed DOM element.' y D: 'The information stored in the window.localStorage property.'\n\n**Explicación detallada:**\n\n1. **C: The style, event listeners and other attributes applied to the carSpeed DOM element:**\n   - Durante la depuración, el desarrollador puede inspeccionar todos los atributos y eventos relacionados con el elemento DOM `carSpeed` desde las herramientas de desarrollo del navegador.\n\n2. **D: The information stored in the window.localStorage property:**\n   - Las herramientas de desarrollo del navegador permiten acceder al almacenamiento local (`localStorage`), que es útil para depurar datos persistentes relacionados con la página.\n\n3. **Opciones incorrectas:**\n   - A: Si bien las herramientas de depuración permiten inspeccionar algunas variables, `fourWheels` y `carSpeed` no son accesibles directamente en este contexto porque `carSpeed` es una variable local y `fourWheels` aún no se ha creado al llegar al `debugger`.\n   - B: El número de instancias creadas no es información automáticamente proporcionada por las herramientas de depuración del navegador, a menos que se haya configurado explícitamente."
    },
    {
      id: "q14",
      question: "Which option is a core Node.js module?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "Path",
        B: "Ios",
        C: "Memory",
        D: "Locate"
      },
      explanation: "La opción correcta es la A: 'Path'.\n\n**Explicación detallada:**\n\n1. **Path como módulo núcleo:** El módulo `Path` es una parte central de Node.js. Proporciona herramientas para trabajar con rutas de archivos y directorios. Al ser un módulo nativo, está disponible de forma inmediata sin necesidad de instalar paquetes adicionales.\n\n2. **Opciones incorrectas:**\n   - B: 'Ios' no existe como módulo en Node.js y parece hacer referencia al sistema operativo iOS de Apple.\n   - C: 'Memory' no es un módulo integrado en Node.js.\n   - D: 'Locate' tampoco forma parte de los módulos centrales de Node.js."
    },
    {
      id: "q15",
      question: "A developer has code that calculates a restaurant bill but generates incorrect answers. Which option allows the developer to step into each function execution within `calculateBill`?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "Using the debugger command on line 05.",
        B: "Using the debugger command on line 03.",
        C: "Calling the console.trace(total) method on line 03.",
        D: "Wrapping findSubtotal in a console.log() method."
      },
      code: "function calculateBill(items) {\n  let total = 0;\n  total += findSubTotal(items);\n  total += addTax(total);\n  total += addTip(total);\n  return total;\n}",
      explanation: "La opción correcta es la A: 'Using the debugger command on line 05.'\n\n**Explicación detallada:**\n\n1. **Uso del comando `debugger`:**\n   - El comando `debugger` permite que el código se detenga en un punto específico cuando se ejecuta en herramientas de desarrollo como DevTools de un navegador o un depurador de Node.js.\n   - Al colocarlo en línea 05 (justo antes del `return total`), permite al desarrollador inspeccionar cómo se ejecutaron las funciones `findSubTotal`, `addTax` y `addTip`, y verificar los valores en cada paso.\n\n2. **Opciones incorrectas:**\n   - B: 'Using the debugger command on line 03.' solo permitirá depurar la ejecución en ese punto y no facilitará el análisis de las otras funciones dentro de `calculateBill`.\n   - C: 'Calling the console.trace(total) method on line 03.' únicamente generará un rastreo de pila y no permitirá el paso a paso dentro de las funciones.\n   - D: 'Wrapping findSubtotal in a console.log() method.' solo imprimirá el resultado de esa función, sin proporcionar información sobre las otras funciones o el flujo completo."
    },
    {
      id: "q16",
      question: "Refer to the code below.Line 05 causes an error. What are the values of `greeting` and `salutation` once the code completes?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "Greeting is Hello and salutation is Hello, Hello.",
        B: "Greeting is Goodbye and salutation is Hello, Hello.",
        C: "Greeting is Goodbye and salutation is I say Hello.",
        D: "Greeting is Hello and salutation is I say hello."
      },
      code: "let greeting = 'Goodbye';\nlet salutation = 'Hello, hello, hello';\ntry {\n  greeting = 'Hello';\n  decodeURI('%%%'); // throws error\n  salutation = 'Goodbye';\n} catch (err) {\n  salutation = 'I say hello';\n} finally {\n  salutation = 'Hello, Hello';\n}",
      explanation: "La opción correcta es la A: 'Greeting is Hello and salutation is Hello, Hello.'\n\n**Explicación detallada:**\n\n1. **Inicialización de variables:**\n   - `greeting` se inicializa como `'Goodbye'`.\n   - `salutation` se inicializa como `'Hello, hello, hello'`.\n\n2. **Bloque `try`:**\n   - `greeting` se cambia a `'Hello'`.\n   - La función `decodeURI('%%%')` lanza un error debido al formato inválido de URI.\n   - Dado que ocurre un error, la línea `salutation = 'Goodbye';` no se ejecuta.\n\n3. **Bloque `catch`:**\n   - El bloque `catch` captura el error y establece el valor de `salutation` a `'I say hello'`.\n\n4. **Bloque `finally`:**\n   - El bloque `finally` siempre se ejecuta, independientemente de si hubo un error o no.\n   - Aquí, `salutation` se actualiza nuevamente a `'Hello, Hello'`.\n\n5. **Resultados finales:**\n   - `greeting` permanece como `'Hello'` después de la ejecución exitosa en el bloque `try`.\n   - `salutation` termina como `'Hello, Hello'` debido al bloque `finally`, que sobrescribe cualquier valor asignado en el bloque `catch`.\n\n6. **Opciones incorrectas:**\n   - B: 'Greeting is Goodbye and salutation is Hello, Hello.' es incorrecta porque `greeting` se cambia a `'Hello'`.\n   - C: 'Greeting is Goodbye and salutation is I say Hello.' es incorrecta porque el bloque `finally` sobrescribe el valor de `salutation` asignado en el bloque `catch`.\n   - D: 'Greeting is Hello and salutation is I say hello.' es incorrecta por la misma razón; el bloque `finally` sobrescribe el valor anterior de `salutation`."
    },
    {
      id: "q17",
      question: "Which two console logs output `NaN`?",
      type: "multiple choice",
      correct_options: ["B", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "console.log(10 / Number('5'));",
        B: "console.log(parseInt('two'));",
        C: "console.log(10 / 'five');",
        D: "console.log(10 / 0);"
      },
      explanation: "Las opciones correctas son B: `console.log(parseInt('two'));` y C: `console.log(10 / 'five');`.\n\n**Explicación detallada:**\n\n1. **Opción A - `console.log(10 / Number('5'));`:**\n   - Aquí, `'5'` es convertido a un número usando `Number('5')`, lo cual resulta en el valor `5`.\n   - La operación `10 / 5` produce el resultado `2`, no `NaN`.\n\n2. **Opción B - `console.log(parseInt('two'));`:**\n   - `parseInt('two')` intenta convertir la cadena `'two'` en un número, pero como no es un valor numérico válido, devuelve `NaN`.\n   - `console.log(NaN)` se ejecuta, generando `NaN` como salida.\n\n3. **Opción C - `console.log(10 / 'five');`:**\n   - Intentar dividir un número (`10`) por una cadena no numérica (`'five'`) genera automáticamente `NaN` porque JavaScript no puede realizar la operación matemática con tipos incompatibles.\n\n4. **Opción D - `console.log(10 / 0);`:**\n   - Aunque dividir por cero puede parecer una operación inválida, en JavaScript, el resultado es `Infinity`, no `NaN`.\n   - Por lo tanto, esta opción no genera `NaN`.\n\n**Resultados finales:** Las pruebas más precisas que generan `NaN` son las de las opciones B y C."
    },
    {
      id: "q18",
      question: "After running the code below, which result is displayed on the console?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "> true > false",
        B: "> 5 > undefined",
        C: "> 5 > -1",
        D: "> 5 > 0"
      },
      code: "let result1 = searchText.search(/sales/i);\nlet result21 = searchText.search(/sales/i);\n\nconsole.log(result1);\nconsole.log(result2);\n\n// Error console message\n// Uncaught ReferenceError: result2 is not defined",
      explanation: "La opción correcta es B: `> 5 > undefined`.\n\n**Explicación detallada:**\n\n1. **Búsqueda con `String.prototype.search`:**\n   - `searchText.search(/sales/i)` busca la primera coincidencia del patrón `/sales/i` en `searchText`.\n   - El valor retornado, `5`, indica que el patrón comienza en el índice 5 de la cadena (si asumimos que `searchText` es `'some salesforce text'`).\n\n2. **Error `ReferenceError`:**\n   - La variable `result2` no está definida en el código proporcionado. Por lo tanto, cuando se intenta registrar `result2` en la consola, se lanza un error `Uncaught ReferenceError: result2 is not defined`.\n\n3. **Opciones incorrectas:**\n   - A: `> true > false` no tiene sentido, ya que `search` devuelve un índice y no valores booleanos.\n   - C: `> 5 > -1` es incorrecto porque el error ocurre antes de que se registre `-1` u otro valor.\n   - D: `> 5 > 0` es incorrecto por la misma razón que la opción C."
    },
    {
      id: "q19",
      question: "Which statement parses successfully?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "JSON.parse('foo');",
        B: "JSON.parse(‘foo’);",
        C: "JSON.parse(\"foo\");",
        D: "JSON.parse('\"foo\"');"
      },
      explanation: "La opción correcta es A: `JSON.parse('foo');`.\n\n**Explicación detallada:**\n\n1. **Uso de `JSON.parse`:**\n   - El método `JSON.parse` analiza una cadena JSON y la convierte en un objeto de JavaScript válido. La cadena debe tener un formato JSON válido, como objetos o arrays.\n\n2. **Opciones incorrectas:**\n   - B, C: Estas opciones no están correctamente formateadas como JSON válido, por lo que lanzarán un error.\n   - D: Aunque parece válida, hay un error en cómo se estructuran las comillas dobles dentro de la cadena, lo que provoca un fallo en la interpretación."
    },                      
  ];
};
