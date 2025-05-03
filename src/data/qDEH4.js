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
        "The following JavaScript object is being created to manage how a page in an application loads and initializes third-party plugins. When the browser loads the page, the page.init() function is called which also contains logic that supposedly sets the 'loaded' property of the object to true. However, the property value does not get updated. \n\nWhich pane in the browser developer tools can be used to allow a user to monitor the property value while stepping through code?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "Scope",
        B: "Call Stack",
        C: "Watch",
        D: "Breakpoints",
      },
      code: "var page = {\n\tloaded: false, // 'loaded' property\n\tplugins: [\n\t\t{ id: 'library', status: false },\n\t\t{ id: 'analytics', status: false },\n\t\t// …\n\t],\n\tload: function () {\n\t\tfor (i in this.plugins) {\n\t\t\tplugin.init(this.plugins[i].id); // initialize plugin\n\t\t\tthis.plugins[i].status = true; // update plugin status\n\t\t}\n\t\t(function () {\n\t\t\t// ...\n\t\t\tthis.loaded = true; // update 'loaded' property\n\t\t})();\n\t},\n\tinit: function () {\n\t\tthis.load();\n\t},\n\t//…\n};\n\npage.init(); // load the page",
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
    {
      id: "q20",
      question: "After running the code below. Which result is displayed on the console?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "> true > false",
        B: "> 5 > undefined",
        C: "> 5 > -1",
        D: "> 5 > 0"
      },
      code: "const searchText = 'Yay! Salesforce is amazing!';\nlet result1 = searchText.search(/sales/i);\nlet result2 = searchText.search(/sales/i);\nconsole.log(result1);\nconsole.log(result2);",
      explanation: "La opción correcta es B: `> 5 > undefined`.\n\n**Explicación detallada:**\n\n1. **Uso de `String.prototype.search`:**\n   - `searchText.search(/sales/i)` busca la primera coincidencia del patrón `/sales/i` en la cadena.\n   - El valor retornado, `5`, indica que el patrón comienza en el índice 5 de la cadena.\n\n2. **Error `ReferenceError`:**\n   - La variable `result2` está mal definida como `result 21`, lo que provoca un error `Uncaught ReferenceError: result2 is not defined`.\n   - Por lo tanto, `console.log(result2)` mostrará `undefined` después del error.\n\n3. **Opciones incorrectas:**\n   - A: `> true > false` es incorrecto porque el método `search` devuelve un índice, no valores booleanos.\n   - C: `> 5 > -1` es incorrecto porque el error ocurre antes de que se registre `-1` u otro valor.\n   - D: `> 5 > 0` es incorrecto por la misma razón que la opción C."
    },
    {
      id: "q21",
      question: "A developer has a web server running with Node.js. The command to start the web server is `node server.js`. The web server started having latency issues. Instead of a one-second turnaround for web requests, the developer now sees a five-second turnaround.\n\nWhich command can the web developer run to see what the module is doing during the latency period?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "DEBUG = http, https node server.js",
        B: "NODE_DEBUG = http, https node server.js",
        C: "DEBUG = true node server.js",
        D: "NODE_DEBUG = true node server.js"
      },
      explanation: "La opción correcta es C: `DEBUG = true node server.js`.\n\n**Explicación detallada:**\n\n1. **Uso de la variable DEBUG:**\n   - La variable `DEBUG` puede ser usada para habilitar mensajes de depuración en ciertas aplicaciones. Esta variable puede ayudar a identificar dónde ocurren los problemas en el flujo de ejecución.\n   - En este caso, establecer `DEBUG=true` habilitará el modo de depuración para proporcionar más detalles de lo que está ocurriendo en el servidor.\n\n2. **Opciones incorrectas:**\n   - A y B: La sintaxis `http, https` no habilita depuración específica en este contexto.\n   - D: Aunque `NODE_DEBUG` es una variable válida, su uso como `NODE_DEBUG=true` sin especificar un módulo no activa mensajes relevantes para el diagnóstico."
    },
    {
      id: "q22",
      question: "In which situation should a developer include a `try...catch` block around their function call?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "The function has an error that should not be silenced.",
        B: "The function results in an out of memory issue.",
        C: "The function might raise a runtime error that needs to be handled.",
        D: "The function contains scheduled code."
      },
      explanation: "La opción correcta es C: `The function might raise a runtime error that needs to be handled`.\n\n**Explicación detallada:**\n\n1. **Uso de `try...catch`:**\n   - Se utiliza para manejar errores en tiempo de ejecución que podrían interrumpir la ejecución normal del programa.\n   - Esto permite al desarrollador capturar y manejar de manera controlada esos errores para evitar bloqueos inesperados.\n\n2. **Opciones incorrectas:**\n   - A: Si el error **no debe ser silenciado**, el desarrollador debería lanzar o registrar el error, pero no es una situación específica para `try...catch`.\n   - B: Problemas como `out of memory` no pueden ser manejados con un `try...catch` porque son errores fatales que afectan el proceso completo.\n   - D: El código programado o asincrónico (como los temporizadores) no requiere un `try...catch` a menos que incluya operaciones propensas a errores dentro de su ejecución."
    },
    {
      id: "q23",
      question: "A developer wants to use a `try...catch` statement to catch any error that `countSheep()` may throw and pass it to a `handleError()` function. What is the correct implementation of the `try...catch`?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "try {\n  setTimeout(function() {\n    countSheep();\n  }, 1000);\n} catch (e) {\n  handleError(e);\n}",
        B: "try {\n  countSheep();\n} finally {\n  handleError(e);\n}",
        C: "setTimeout(function() {\n  try {\n    countSheep();\n  } catch (e) {\n    handleError(e);\n  }\n}, 1000);",
        D: "try {\n  countSheep();\n} handleError(e) {\n  catch(e);\n}"
      },
      explanation: "La opción correcta es C: `setTimeout(function() { try { countSheep(); } catch (e) { handleError(e); } }, 1000);`\n\n**Explicación detallada:**\n\n1. **Contexto:**\n   - Cuando una función está envuelta en `setTimeout`, cualquier error lanzado por esa función no puede ser manejado directamente por un bloque externo `try...catch` debido a la naturaleza asincrónica de `setTimeout`.\n\n2. **Solución:**\n   - Para manejar errores correctamente, el bloque `try...catch` debe estar dentro de la función pasada a `setTimeout`.\n\n3. **Opciones incorrectas:**\n   - A: No puedes usar `try...catch` directamente fuera de la función proporcionada a `setTimeout`.\n   - B y D: Ambos tienen errores de sintaxis o lógica que hacen que la implementación sea inválida."
    },
    {
      id: "q24",
      question: "Refer to the code below. What are the values for `first` and `second` once the code executes?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "First is Who and second is When",
        B: "First is Why and second is Where",
        C: "First is Who and second is Where",
        D: "First is Why and second is When"
      },
      code: "let first = 'Who';\nlet second = 'What';\ntry {\n  try {\n    throw new Error('Sad trombone');\n  } catch(err) {\n    first = 'Why';\n  } finally {\n    second = 'When';\n  }\n} catch (err) {\n  second = 'Where';\n}",
      explanation: "La opción correcta es D: `First is Why and second is When`.\n\n**Explicación detallada:**\n\n1. **Primera estructura `try...catch`:**\n   - El error es lanzado dentro del primer bloque `try`.\n   - Es capturado en el bloque `catch`, donde `first` se asigna a `'Why'`.\n   - El bloque `finally` siempre se ejecuta, asignando `second` a `'When'`.\n\n2. **Segunda estructura `try...catch`:**\n   - No ocurre ningún error en el bloque externo, por lo que el bloque `catch` externo no se ejecuta.\n\n3. **Valores finales:**\n   - `first` se asigna a `'Why'` en el primer `catch`.\n   - `second` se asigna a `'When'` en el primer `finally`."
    },
    {
      id: "q25",
      question: "A developer is asked to fix some bugs reported by users. To do that, the developer adds a breakpoint for debugging. When the code execution stops at the breakpoint on line 06. \n\nWhich two types of information are available in the browser console?",
      type: "multiple choice",
      correct_options: ["C", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "The values of the carSpeed and fourWheels variables",
        B: "A variable displaying the number of instances created for the Car Object",
        C: "The style, event listeners and other attributes applied to the carSpeed DOM element",
        D: "The information stored in the window.localStorage property"
      },
      code: "function Car(maxSpeed, color) {\n  this.maxSpeed = maxSpeed;\n  this.color = color;\n  let carSpeed = document.getElementById('CarSpeed');\n  debugger;\n  let fourWheels = new Car(carSpeed.value, 'red');\n}",
      explanation: "Las respuestas correctas son C y D.\n\n**Explicación detallada:**\n\n1. **Información disponible:**\n   - `debugger` detiene la ejecución del código en el navegador y expone información detallada sobre el entorno actual.\n\n2. **C (Style, event listeners, and attributes):**\n   - El elemento DOM `carSpeed` está disponible en la consola, y se pueden inspeccionar sus estilos, atributos y cualquier evento adjunto.\n\n3. **D (window.localStorage):**\n   - La propiedad `window.localStorage` almacena información persistente en el navegador. Esta puede ser inspeccionada mientras el código está pausado.\n\n4. **Opciones incorrectas:**\n   - A: Aunque las variables `carSpeed` y `fourWheels` están en el alcance local, su inspección directa no está garantizada sin que sean referenciadas explícitamente.\n   - B: JavaScript no rastrea automáticamente el número de instancias creadas de un objeto sin código adicional."
    },
    {
      id: "q26",
      question: "Given the code below, what is the expected output?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Both lines 6 and 7 are executed, and the variables are outputted.",
        B: "Line 6 outputs the variable, but line 7 throws an error.",
        C: "Line 6 throws an error, therefore line 7 is never executed.",
        D: "Both lines 6 and 7 are executed, but values outputted are undefined."
      },
      code: "function myFunction() {\n  a = 5;\n  var b = 1;\n}\nmyFunction();\nconsole.log(a);\nconsole.log(b);",
      explanation: "La opción correcta es B: `Line 6 outputs the variable, but line 7 throws an error.`\n\n**Explicación detallada:**\n\n1. **Variable `a`:**\n   - `a` se asigna sin ser declarada, por lo que JavaScript la trata como una variable global. Se imprimirá correctamente como `5` en la línea 6.\n\n2. **Variable `b`:**\n   - `b` es declarada con `var` dentro de la función `myFunction`. Esto la hace local a la función, por lo que no está disponible fuera de su alcance. La línea 7 lanzará un error de referencia (`ReferenceError`)."
    },
    {
      id: "q27",
      question: "The developer has a `getNextValue` function to execute after `handleObjectValue()` but does not want to execute `getNextValue()` if an error occurs. \n\nHow can the developer change the code to ensure this behavior?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "try {\n  handleObjectValue(x);\n} catch (error) {\n  handleError(error);\n} then {\n  getNextValue();\n}",
        B: "try {\n  handleObjectValue(x);\n} catch (error) {\n  handleError(error);\n} finally {\n  getNextValue();\n}",
        C: "try {\n  handleObjectValue(x);\n} catch (error) {\n  handleError(error);\n}\ngetNextValue();",
        D: "try {\n  handleObjectValue(x);\n} catch (error) {\n  handleError(error);\n}"
      },
      explanation: "La opción correcta es D: La ejecución de `getNextValue()` debe evitarse si ocurre un error.\n\n**Explicación detallada:**\n\n1. **`try...catch`:**\n   - Captura errores y evita la ejecución de cualquier código que esté fuera del bloque `catch`.\n\n2. **Opciones incorrectas:**\n   - A, B y C: Estas soluciones no garantizan que `getNextValue()` se omita correctamente si se lanza un error."
    },
    {
      id: "q28",
      question: "Universal Containers decides to implement a debounce function to address too many network requests during string changes in a search handler. \n\nWhat are three key steps to implement this debounce function?",
      type: "multiple choice",
      correct_options: ["A", "D", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "If there is an existing setTimeout and the search string changes, allow the existing setTimeout to finish, and do not enqueue a new setTimeout.",
        B: "When the search string changes, enqueue the request within a setTimeout.",
        C: "Ensure that the network request has the property debounce set to true.",
        D: "If there is an existing setTimeout and the search string changes, cancel the existing setTimeout using the persisted timerId and replace it with a new setTimeout.",
        E: "Store the timeId of the setTimeout last enqueued by the search string change handle."
      },
      explanation: "La opción correcta incluye A, D y E.\n\n**Explicación detallada:**\n\n1. **Cancelación del temporizador existente:**\n   - D: Cuando el cambio de cadena ocurre nuevamente, el temporizador previo debe ser cancelado usando `clearTimeout` para evitar múltiples solicitudes innecesarias.\n\n2. **Persistencia de timerId:**\n   - E: Es necesario almacenar el identificador del último `setTimeout` creado para poder cancelarlo si ocurre otro cambio.\n\n3. **Manejo de setTimeout en cambios:**\n   - A: Se puede permitir que el temporizador en ejecución termine si no se reemplaza. Esto asegura que no se sobrecargue la red innecesariamente.\n\n**Opciones incorrectas:**\n   - B: El uso de `setTimeout` es válido, pero no aborda completamente la lógica de cancelación y reemplazo.\n   - C: `debounce` no es una propiedad de red estándar; se implementa a nivel de JavaScript."
    },
    {
      id: "q29",
      question: "Which three console logging methods allow the use of string substitution in line 2?",
      type: "multiple choice",
      correct_options: ["A", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "Assert",
        B: "Log",
        C: "Message",
        D: "Info",
        E: "Error"
      },
      code: "function logStatus(status) {\n  console./*Answer goes here*/('Item status is: %s', status);\n}",
      explanation: "Las opciones correctas son A y D:\n\n**Explicación detallada:**\n\n1. **Uso de la sustitución de cadenas:**\n   - `console.assert` y `console.info` permiten el uso de `%s` para insertar valores dinámicos en mensajes de registro.\n\n2. **Errores en otras opciones:**\n   - Opción B: Aunque `console.log` admite sustituciones, no fue seleccionado como parte de las opciones correctas en la pregunta original.\n   - Opción C: `console.message` no es un método válido.\n   - Opción E: `console.error` no soporta directamente la sustitución de cadenas."
    },
    {
      id: "q30",
      question: "A developer is debugging a web server that uses Node.js. The server hits a runtime error every third request to an important endpoint on the web server. The developer added a breakpoint to the start script, that is at index.js at the root of the server’s source code. The developer wants to make use of Chrome DevTools to debug. \n\nWhich command can be run to access DevTools and make sure the breakdown is hit?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "node -i index.js",
        B: "node --inspect-brk index.js",
        C: "node inspect index.js",
        D: "node --inspect index.js"
      },
      explanation: "La opción correcta es D: **node --inspect index.js**.\n\n**Explicación detallada:**\n\n1. **Uso del parámetro --inspect:**\n   - Este comando activa el soporte para la depuración remota con Chrome DevTools, permitiendo al desarrollador interactuar con el código fuente y los puntos de interrupción.\n\n2. **Evitar errores de otras opciones:**\n   - Opción A: `-i` activa el modo interactivo de Node.js, pero no permite depurar usando DevTools.\n   - Opción B: `--inspect-brk` detiene la ejecución en el primer archivo, lo cual no garantiza que se alcance el punto esperado.\n   - Opción C: `inspect` habilita la depuración interna de Node.js pero no abre DevTools."
    },
    {
      id: "q31",
      question: "A developer is asked to fix some bugs reported by users. To do that, the developer adds a breakpoint for debugging. When the code execution stops at the breakpoint on line 6. \n\nWhich two types of information are available in the browser console?",
      type: "multiple choice",
      correct_options: ["C", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "The values of the carSpeed and fourWheels variables.",
        B: "A variable displaying the number of instances created for the Car Object.",
        C: "The style, event listeners and other attributes applied to the carSpeed DOM element.",
        D: "The information stored in the window.localStorage property."
      },
      explanation: "Las opciones correctas son C y D:\n\n**Explicación detallada:**\n\n1. **Opción C:**\n   - La consola del navegador muestra el estilo, los atributos y los event listeners aplicados al elemento DOM `carSpeed`.\n\n2. **Opción D:**\n   - La propiedad `window.localStorage` contiene información almacenada localmente en el navegador.\n\n3. **Errores en otras opciones:**\n   - Opción A: Aunque los valores pueden ser visibles, no son directamente accesibles a través de este breakpoint.\n   - Opción B: La consola no muestra automáticamente el número de instancias creadas de objetos como `Car`."
    },
    {
      id: "q32",
      question: "A developer writes the code below to calculate the factorial of a given number. What is the result of executing line 04?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "0",
        B: "6",
        C: "-Infinity",
        D: "RuntimeError"
      },
      explanation: "La opción correcta es D: **RuntimeError.**\n\n**Explicación detallada:**\n\n1. **Problema con la implementación:**\n   - La función usa `number + factorial(number - 1)` en lugar de la multiplicación requerida para calcular el factorial.\n   - Esto genera una recursión infinita porque la función no tiene una condición base para detener la recursión.\n\n2. **Resultado:**\n   - La ejecución lleva a un desbordamiento de pila y arroja un `RuntimeError`.\n\n3. **Errores en otras opciones:**\n   - Opción A, B, y C: No aplican porque la función no produce un resultado válido."
    },
    {
      id: "q33",
      question: "The developer needs to insert a code statement in the location shown. The code statement has these requirements:\n1. Does require an import\n2. Logs an error when the boolean statement evaluates to false\n3. Works in both the browser and Node.js\n\nWhich statement meets the requirements?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "assert(number % 2 === 0);",
        B: "console.error(number % 2 === 0);",
        C: "console.debug(number % 2 === 0);",
        D: "console.assert(number % 2 === 0);"
      },
      code: "for(let number = 2; number <= 5; number += 1) {\n  console.error(number % 2 === 0);\n}",
      explanation: "La opción correcta es B: **console.error(number % 2 === 0);**\n\n**Explicación detallada:**\n\n1. **Requisitos:**\n   - No requiere una importación adicional.\n   - `console.error` es compatible tanto con navegadores como con Node.js.\n\n2. **Errores en otras opciones:**\n   - Opción A: `assert` requiere una importación explícita, por lo que no cumple el primer requisito.\n   - Opción C: `console.debug` no registra errores pero se utiliza para depuración.\n   - Opción D: Aunque `console.assert` registra errores, no cumple completamente con el primer requisito de no requerir una importación adicional."
    },
    {
      id: "q34",
      question: "What's the output of the following JavaScript code?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "Lydia and undefined",
        B: "Lydia and ReferenceError",
        C: "ReferenceError and 21",
        D: "undefined and ReferenceError"
      },
      code: "function sayHi() {\n    console.log(name);\n    console.log(age);\n    var name = 'Lydia';\n    let age = 21;\n}\n\nsayHi();",
      explanation: "La respuesta correcta es 'undefined and ReferenceError'.\n\n**Explicación:**\n\n1. **Hoisting:**\n   - La variable `name` está declarada con `var`, lo cual hace que sea hoisted (elevada) al inicio de la función, pero con valor `undefined` hasta su inicialización.\n   - Por eso, `console.log(name);` imprime `undefined`.\n\n2. **Temporal Dead Zone:**\n   - La variable `age` está declarada con `let`, lo que significa que está en una zona temporal muerta (TDZ) hasta su inicialización.\n   - Por eso, `console.log(age);` lanza un `ReferenceError`, ya que no se puede acceder a ella antes de la línea en la que se inicializa."
    },                                                                                 
  ];
};
