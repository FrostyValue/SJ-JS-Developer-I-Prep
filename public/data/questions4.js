export default function questions4() {
  return [
    {
      id: "q1",
      question:
        "El siguiente código se utiliza para enviar cupones únicos a los miembros en una aplicación de comercio electrónico. El cupón generado se envía mediante una solicitud AJAX. ¿Qué tipos de puntos de interrupción se pueden utilizar para pausar la ejecución del código cuando se llama a getCoupon() y cuando la URL utilizada en la solicitud AJAX contiene una cadena específica?\n\nElija 2 respuestas.",
      type: "multiple choice",
      correct_options: ["C", "B"],
      number_of_correct_answers: 2,
      options: {
        A: "Event Listener",
        B: "Function",
        C: "XHR/Fetch",
        D: "DOM Change",
      },
      code: "function initialize() {\n\n     var userId = getUserId();\n\n     var token = getToken();\n\n     //…\n\n     function getCoupon() {\n\n          let coupon = generateCoupon(userId, token);\n\n          //..\n\n          return coupon;\n\n     }\n\n     //..\n\n     let code = getCoupon();\n\n     sendCoupon(code); // AJAX request\n\n}",
      explanation:
        "Para pausar la ejecución del código cuando se llama a 'getCoupon()' y cuando la URL utilizada en la solicitud AJAX contiene una cadena específica, puedes usar el tipo de punto de interrupción 'XHR/Fetch' para la solicitud AJAX y el tipo de punto de interrupción 'Function' para cuando se ejecuta 'getCoupon()'.",
    },
    {
      id: "q2",
      question:
        "A developer is working on an online course. She is using a library that facilitates the recording of course information for learners. She has added the code for that purpose. However, since there are exceptions at times because the API is not available or communication has been lost, she would like to handle them properly. What more does she need to add in order to capture the error and display it in the console?\n\nChoose 1 answer.",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "console.error('Communication with LMS failed.', e);",
        B: "catch() { console.error ('Communication with LMS failed.'); }",
        C: "catch(e) { console.error('Communication with LMS failed.', e); }",
        D: "catch() { console.error('Communication with LMS failed.', e); }",
      },
      code: "try {\n\n     const objAPI = SCORM2004_GrabAPI();\n\n     objAPI.SetValue('cmi.completion_status', 'completed');\n\n     objAPI.SetValue('cmi.success_status', 'passed');\n\n} // Add code to handle errors",
      explanation:
        "Para manejar los errores correctamente, es necesario agregar un bloque 'catch' que capture la excepción y la muestre en la consola. La opción correcta es 'catch(e) { console.error('Communication with LMS failed.', e); }'. Esto asegura que cualquier error que ocurra en el bloque 'try' sea capturado y se imprima en la consola con el mensaje adecuado.",
    },
    {
      id: "q3",
      question:
        "A JavaScript function is being created in an application for a tour agency to determine a tour guide based on a given activity. While testing the function, an issue is encountered where at times a wrong tour guide is being returned for a given activity. Given the code below, what statement can be added before the function is called to pause code execution, and what step type can be used to examine the function block one line at a time for debugging?\n\nChoose 1 answer.",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "Add the debugger statement, and use the 'step over' command.",
        B: "Add the debugger statement, and use the 'step into' command.",
        C: "Add the breakpoint statement, and use the 'step into' command.",
        D: "Add the breakpoint statement, and use the 'step over' command.",
      },
      code: "var tourGuide = '';\n\nvar guides = [\n\n     { name: 'ben', activities: ['trekking', 'climbing', 'camping', 'rafting'] },\n\n     [ name: 'sam', activities: ['kayaking', 'diving', 'surfing', 'sailing'] ],\n\n     { name: 'tim', activities: ['cycling', 'sightseeing', 'museum', 'gallery'] }\n\n];\n\nfunction getGuide(activity) {\n\n     for (let i = 0; i < guides.length; i++) {\n\n          if (guides[i].activities.includes(activity)) {\n\n               tourGuide = guides[i].name;\n\n         }\n\n     }\n\n     return tourGuide;\n\n}\n\n// Add statement here\n\ngetGuide('sightseeing');",
      explanation:
        "Se puede usar la declaración 'debugger' para pausar la ejecución del código. Luego, el comando 'step into' proporcionado por las herramientas de desarrollo del navegador puede usarse para recorrer el código dentro del bloque de la función línea por línea durante la depuración. La función devolverá un guía turístico incorrecto si la actividad dada no existe en la lista actual de actividades. Un punto de interrupción ('breakpoint') se puede establecer en el panel 'Sources' del navegador para pausar la ejecución. El comando 'step over' solo ejecutará la función y la saltará, mientras que el comando 'step out' saltará la ejecución del código hasta la última línea de la función.",
    },
    {
      id: "q4",
      question:
        "The following JavaScript object is being created to manage how a page in an application loads and initializes third-party plugins. When the browser loads the page, the page.init() function is called which also contains logic that supposedly sets the 'loaded' property of the object to true.\n\nHowever, the property value does not get updated. Which pane in the browser developer tools can be used to allow a user to monitor the property value while stepping through code?\n\nChoose 1 answer.",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "Scope",
        B: "Call Stack",
        C: "Watch",
        D: "Breakpoints",
      },
      code: "var page = {\n\n     loaded: false, // 'loaded' property\n\n     plugins: [\n\n          { id: 'library', status: false },\n\n          { id: 'analytics', status: false },\n\n          // …\n\n     ],\n\n     load: function () {\n\n          for (i in this.plugins) {\n\n               plugin.init(this.plugins[i].id); // initialize plugin\n\n               this.plugins[i].status = true; // update plugin status\n\n          }\n\n          (function () {\n\n               // ...\n\n               this.loaded = true; // update 'loaded' property\n\n          })();\n\n   },\n\n     init: function () {\n\n          this.load();\n\n      },\n\n   //…\n\n};\n\npage.init(); // load the page",
      explanation:
        "Para monitorear el valor de la propiedad 'loaded' mientras se depura el código, la herramienta 'Watch' en las herramientas de desarrollo del navegador es la opción más adecuada. Esta herramienta permite a los usuarios agregar expresiones que se evalúan mientras se ejecuta el código, lo que facilita el seguimiento de valores específicos sin tener que agregar puntos de interrupción manualmente.",
    },
    {
      id: "q5",
      question:
        "A developer of Cosmic Electronics is building a web page that should allow a sales user to get information about the specified customer from a third-party system. A function named 'getCRMData' has been defined to get the data as an object when the current sales user clicks a button on the page. However, when the button is clicked, the expected data is not returned. The developer would like to log the time taken by the request and view the returned data in tabular format. Which methods of the console object can be utilized for this use case?\n\nChoose 3 answers.",
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
      code: "document.getElementById('get-button' ).addEventListener('click', async () => {\n\n     const data = await getCRMData();\n\n});",
      explanation:
        "El método console.time() puede ser utilizado para iniciar un temporizador que rastree cuánto tiempo toma una operación, como una llamada asíncrona. El método console.timeLog() se utiliza para registrar el valor actual de un temporizador iniciado con console.time(). No existe el método console.timer(). El método console.table() permite mostrar los datos de un arreglo u objeto en formato tabular. El método console.group() crea un grupo en línea en la consola, pero no se utiliza para mostrar los datos de la manera requerida. Sin embargo, puede ayudar a organizar los mensajes de la consola.",
    },
    {
      id: "q6",
      question:
        "A developer has created a function that normalizes scores for an online quiz. What needs to be added to the 'normalizeScore' function in order to create an exception that can then be displayed using the 'console.info' statement in the 'try ... catch' block?\n\nChoose 1 answer.",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "if (isNaN(raw) | | isNaN(possible)) { return error('Scores must be numbers!'); }",
        B: "if (isNaN(raw) | | isNaN(possible)) { error('Scores must be numbers!'); }",
        C: "if (isNaN(raw) | | isNaN(possible)) { new Error('Scores must be numbers!'); }",
        D: "if (isNaN(raw) | | isNaN(possible)) { throw 'Scores must be numbers!'; }",
      },
      code: "function normalizeScore(raw, possible) {\n\n     // Add code here to create an exception if numbers are not passed in.\n\n     return (raw/possible);\n\n}\n\n// She wants to call this function using 'try ... catch' in case numbers are not passed for the score.\n\ntry {\n\n     const score = normalizeScore(rawScore, possScore);\n\n} catch(e) {\n\n     console.info(e);\n\n}",
      explanation:
        "La forma correcta de generar una excepción en JavaScript es utilizando el comando 'throw'. En este caso, si las variables 'raw' o 'possible' no son números, se debe lanzar una excepción con 'throw'. La opción correcta es la D, que utiliza 'throw' para crear un error y lanzar el mensaje correspondiente. Las otras opciones no son correctas ya que no lanzan una excepción correctamente.",
    },
    {
      id: "q7",
      question:
        "The following 'try ... catch' block has been set up to display a simple message about the exception to the console. What are valid ways to display the exception information using the 'error' object?\n\nChoose 3 answers.",
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
      code: "try {\n\n     const score = normalizeScore('A', 12);\n\n} catch(e) {\n\n     console.info(e);\n\n}",
      explanation:
        "Para mostrar información sobre la excepción usando el objeto 'error' en JavaScript, se puede acceder a las propiedades 'name' y 'message' del error. Las opciones A, B y C son correctas porque hacen uso adecuado de estas propiedades para mostrar el nombre y el mensaje del error. Las opciones D y E son incorrectas porque intentan acceder a 'e.error', lo cual no es una propiedad estándar del objeto de error.",
    },
    {
      id: "q8",
      question:
        "A web developer has built a questionnaire that consists of a series of forms. When a form is submitted, the page is reloaded and the next form is generated based on answers that were selected in the previous form. However, issues were encountered in the form generation. The developer then used console.log() statements to inspect values and debug code, but the log messages are cleared out once a form is submitted. What should be done to prevent this behavior?\n\nChoose 1 answer.",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Use the persist.log() method instead of console.log().",
        B: "Enable the 'Preserve Log' setting in the browser.",
        C: "Set the second parameter of the console.log() method to true.",
        D: "Submit the form asynchronously to avoid reloads.",
      },
      code: "N/A",
      explanation:
        "Cuando se recarga la página, los mensajes de consola generalmente se borran. Para evitar que esto suceda, se debe habilitar la opción 'Preserve Log' en la configuración del navegador, lo que hará que los mensajes de consola se mantengan incluso después de una recarga de la página. La opción A no existe, la opción C no tiene impacto en la preservación de los mensajes después de un recargo, y la opción D es una solución relacionada pero no necesariamente resolverá el problema de los mensajes de consola.",
    },
    {
      id: "q9",
      question:
        "A developer is working on a site that is intended to capture and track user interactions. Before storing the data, she needs to have the data normalized and then formatted in JSON format. She uses the 'processData' function for this. At times there are exceptions in the 'normalize' function. When that occurs, a message is logged in the console and a different function is called for normalizing the data. The developer wants to make sure that the 'formatData' function is always called. What can be done to facilitate that?\n\nChoose 1 answer.",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "No additional code is required; the 'formatData' function will always run because it is outside the 'try ... catch' block.",
        B: "The 'formatData' function should be placed inside the 'catch' block in order to ensure that it always runs.",
        C: "The 'formatData' function should be placed inside a 'throw' block so that it runs no matter what happens in the 'try ... catch' block.",
        D: "The 'formatData' function should be placed inside a 'finally' block so that it runs no matter what happens in the 'try ... catch' block.",
      },
      code: "function processData(theData) {\n\n     let normalizedData = theData;\n\n     try {\n\n          normalizedData = normalizeData(theData);\n\n     } catch(err) {\n\n          console.info('normalizeData did not work. Using normalizeSoft.', err);\n\n          normalizedData = normalizeSoftData(theData);\n\n     }\n\nformatData(normalizedData);\n\n}",
      explanation:
        "El bloque 'finally' se ejecuta independientemente de si se lanza una excepción o no, por lo tanto, si se coloca la llamada a 'formatData' en el bloque 'finally', siempre se ejecutará después de intentar normalizar los datos, sin importar si ocurrió un error o no.",
    },
  ];
};
