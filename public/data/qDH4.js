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
    }
  ];
};
