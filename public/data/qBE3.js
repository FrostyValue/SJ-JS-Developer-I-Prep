export default function questions3() {
  return [
    {
      id: "q1",
      question:
        "A developer is trying to troubleshoot an issue with a website that has already been deployed. She doesn't yet have access to the code files but is trying to identify the problem using Chrome DevTools. She tracks the issue to the JavaScript code and opens the 'Sources' panel. However, the JavaScript code is minified and difficult to read. \n\nWhat must she do in order to make the code easier to read?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "Select 'Format Code' from the options in the page pane.",
        B: "Click the 'Convert Code' icon at the top of the editor pane.",
        C: "Right-click on the code window and select 'Format Code'.",
        D: "Click the 'Pretty-Print' icon at the bottom of the editor pane.",
      },
      explanation:
        "Cuando el código mostrado en el panel 'Sources' está minificado, al hacer clic en el icono 'Pretty-Print' ({ ]) en la parte inferior del panel del editor, este se convierte en un formato más legible para los humanos. No existen opciones llamadas 'Convert Code' o 'Format Code'.",
    },
    {
      id: "q2",
      question:
        "In an upgrade of the company website, the design calls for the creation and dispatch of a custom event named 'initComplete'. This event is used for additional processing and should be sent from the initialize() function shown below. However, the event is not working. \n\nWhat must be added to ensure that the dispatchEvent method works as intended?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "document.dispatchEvent(initComplete, {initComplete: true]);",
        B: "const event = new CustomEvent('initComplete');",
        C: "document.dispatchEvent('initComplete');",
        D: "const initComplete = new CustomEvent('initComplete');",
      },
      code: "function initialize(){\n/* Existing code\n// Missing code */\ndocument.dispatchEvent(initComplete);\n}",
      explanation:
        "La opción correcta es la D: 'const initComplete = new CustomEvent('initComplete');'. Esto se debe a que, para despachar un evento personalizado utilizando 'dispatchEvent', primero es necesario crear el evento con el constructor 'CustomEvent' y asignarlo a una variable, en este caso 'initComplete'. \n\nLas otras opciones no son válidas por las siguientes razones:\n\n- **A. 'document.dispatchEvent(initComplete, {initComplete: true]);'**: El método 'dispatchEvent' no admite un segundo parámetro para datos adicionales de esta manera.\n- **B. 'const event = new CustomEvent('initComplete');'**: Aunque es una creación válida de un evento, no coincide con la variable utilizada en 'dispatchEvent', que es 'initComplete'.\n- **C. 'document.dispatchEvent('initComplete');'**: No se puede despachar directamente una cadena de texto; se requiere una instancia de 'CustomEvent'.",
    },
    {
      id: "q3",
      question:
        "Given the HTML and JavaScript code below. In what order will the messages be printed in the browser console when the button element is clicked?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "green, blue, red",
        B: "green, red, blue",
        C: "blue, red, green",
        D: "blue, green, red",
      },
      code: '<!-- HTML -->\n<div id="blue">\n<div id="red">\n<div id="green">\n<button>Click</button>\n</div>\n</div>\n</div>\n\n/* JavaScript */\ndocument.getElementById("blue").addEventListener("click",function(){console.log("blue");},true);\ndocument.getElementById("red").addEventListener("click",function(){console.log("red");});\ndocument.getElementById("green").addEventListener("click",function(){console.log("green");},false);',
      explanation:
        "La opción correcta es la D: 'blue, green, red'. Esto se debe al comportamiento del modelo de eventos en JavaScript:\n\n- **Captura (true)**: El evento en el elemento 'blue' se ejecuta primero debido a que el listener se ha configurado para capturar.\n- **Burbujeo (false)**: Luego, el evento del elemento 'green' se ejecuta porque es el próximo en la jerarquía, y su listener está configurado para burbujear.\n- **Burbujeo predeterminado**: Finalmente, se ejecuta el evento del elemento 'red', cuyo listener utiliza el modo de burbujeo por defecto.\n\nPor lo tanto, el orden es 'blue, green, red'. Las demás opciones son incorrectas porque no consideran el modelo de captura y burbujeo correctamente.",
    },
    {
      id: "q4",
      question:
        "A developer is developing a game accessible on the web and would like to store two types of data:\n\n1. Score that is stored during the active session of the game\n\n2. Profile data that is more persistent and available even after the browser session is terminated\n\nThe profile data should be stored as a string, instead of individual items, using the username as a key. What would be the correct way to utilize the Web Storage API to store profile data?\n\nChoose 1 answer.",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "localStorage.setItem(data.username, JSON.stringify(data))",
        B: "sessionStorage.setItem(data.username, data)",
        C: "localStorage.setItem(data.username, data)",
        D: "sessionStorage.setItem(data.username, JSON.stringify(data))",
      },
      code: "const data = {username:'tomx2bot',game:'Dungeons and Dragons',score:120,level:3};",
      explanation:
        "La opción correcta es la A: 'localStorage.setItem(data.username, JSON.stringify(data))'. Esto se debe a que:\n\n- **localStorage** proporciona almacenamiento más persistente y estará disponible incluso después de cerrar la sesión del navegador.\n- Como localStorage solo almacena cadenas de texto, es necesario convertir el objeto JavaScript en una cadena utilizando 'JSON.stringify()'.\n\nLas otras opciones son incorrectas:\n\n- **B. 'sessionStorage.setItem(data.username, data)'**: sessionStorage solo almacena datos durante la sesión activa, lo cual no cumple con el requisito de persistencia.\n- **C. 'localStorage.setItem(data.username, data)'**: localStorage solo admite cadenas, por lo que intentar almacenar un objeto directamente dará error.\n- **D. 'sessionStorage.setItem(data.username, JSON.stringify(data)'**: Aunque convierte el objeto en cadena, utiliza sessionStorage en lugar de localStorage, lo cual no cumple con la persistencia requerida.",
    },
    {
      id: "q5",
      question:
        "A developer is trying to solve a problem that she feels has to do with how event handlers are set up to take advantage of event propagation. The problem code is tied to the following HTML. When the developer clicks the check-answer button. \n\nWhich series of messages will be displayed in the console?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "'content', 'questions', and 'check-answer'",
        B: "'check-answer', 'questions', 'finish', and 'content'",
        C: "'check-answer', 'questions', and 'content'",
        D: "'check-answer' and 'questions'",
      },
      code: "<div id=\"content\">\n<div id=\"questions\">\nQuestions content...\n<button id=\"check-answer\">Check Answer</button>\n</div>\n<div id=\"finish\">\n<p id=\"submit\">Once you are ready, click the button to submit your choices.</p>\n<button id=\"submit-choices\">Submit Choices</button>\n</div>\n</div>\n\ndocument.getElementById('submit-choices').onclick=function(e){console.log('submit-choices')};\ndocument.getElementById('check-answer').onclick=function(e){console.log('check-answer')};\ndocument.getElementById('questions').onclick=function(e){console.log('questions')};\ndocument.getElementById('submit').onclick=function(e){console.log('submit')};\ndocument.getElementById('finish').onclick=function(e){console.log('finish')};\ndocument.getElementById('content').onclick=function(e){console.log('content')};",
      explanation:
        "La opción correcta es la C: 'check-answer', 'questions', and 'content'. Esto ocurre debido al modelo de propagación de eventos (event bubbling) en JavaScript, que sigue este orden:\n\n1. **'check-answer'**: El evento es disparado en el elemento objetivo primero.\n2. **'questions'**: Luego, el evento se propaga hacia el padre inmediato del elemento objetivo.\n3. **'content'**: Finalmente, el evento continúa hacia el siguiente nivel jerárquico (el contenedor principal).\n\nLas demás opciones son incorrectas porque no respetan el flujo de propagación de eventos predeterminado (bubbling), que comienza en el elemento objetivo y sube por la jerarquía del DOM.",
    },
    {
      id: "q6",
      question:
        "A developer has created a web page to find the cube of the given number. \n\nWhich of the following options can replace line 5 of the numberInput() function and still produce the intended output?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "outputDiv.title = cube;",
        B: "outputDiv.value = cube;",
        C: "outputDiv.innerHTML = cube;",
        D: "outputDiv.lastChild = cube;",
      },
      code: '<div class="container">\n<h1>Cube Your Number</h1>\n</div>\n<div class="container">\n<div class="input">\n<label for="num">Input: </label>\n<input id="num" type="number" onkeyup="numberInput()" />\n</div>\n<div id="out" class="output">\n<label for="output-num">Output: </label>\n<label id="output-num"></label>\n</div>\n</div>\n\nfunction numberInput(){\nlet outputDiv=document.getElementById("output-num");\nlet numInput=document.getElementById("num").value;\nlet cube=numInput*numInput*numInput;\noutputDiv.innerText=cube+"";\n}',
      explanation:
        "La opción correcta es la C: 'outputDiv.innerHTML = cube;'. Esto se debe a que la propiedad 'innerHTML' reemplaza el contenido HTML de un elemento. En este caso, la variable 'cube' se establece como el contenido HTML del div correspondiente.\n\nLas otras opciones son incorrectas:\n\n- **A. 'outputDiv.title = cube;'**: La propiedad 'title' no muestra la salida en pantalla, solo define el texto de atributo 'title'.\n- **B. 'outputDiv.value = cube;'**: La propiedad 'value' es válida para inputs, no para elementos como divs.\n- **D. 'outputDiv.lastChild = cube;'**: La propiedad 'lastChild' devuelve el último nodo hijo, pero no permite establecer el contenido directamente.",
    },
    {
      id: "q7",
      question:
        "A developer has created a demo application to add elements dynamically to a website. The JavaScript code is given below. \n\nWhich of the following can be used to replace the comment in the clickFn() function in order to insert 'newElementDiv' after 'markerElement'?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "document.body.insertBefore(newElementDiv, markerElement)",
        B: "document.body.insertBefore(newElementDiv, markerElement.nextSibling)",
        C: "document.body.insertAfter(newElementDiv, markerElement)",
        D: "markerElement.appendChild(newElementDiv)",
      },
      code: 'var markerElement;\nwindow.onload=function(){markerElement=document.getElementById("title");}\n\nfunction clickFn(){\nlet newElementDiv=document.createElement("div");\nlet textChild=document.createTextNode("Text to be on list");\nnewElementDiv.appendChild(textChild);\n//Add code here\n}\n\n<html>\n<body>\n<div id="title">\n<h2>Hello</h2>\n</div>\n<button onclick="clickFn()">Add Text</button>\n</body>\n</html>',
      explanation:
        "La opción correcta es la B: 'document.body.insertBefore(newElementDiv, markerElement.nextSibling)'. Esto se debe a que:\n\n- Aunque el método 'insertBefore' inserta elementos antes, al usar 'markerElement.nextSibling' como segundo argumento, el nuevo elemento se inserta después de 'markerElement'.\n\nLas otras opciones son incorrectas:\n\n- **A. 'document.body.insertBefore(newElementDiv, markerElement)'**: Inserta el nuevo elemento antes de 'markerElement', lo cual no cumple con el requisito.\n- **C. 'document.body.insertAfter(newElementDiv, markerElement)'**: El método 'insertAfter' no existe en el DOM.\n- **D. 'markerElement.appendChild(newElementDiv)'**: Agrega el nuevo elemento como hijo de 'markerElement', lo cual no es lo solicitado.",
    },
    {
      id: "q8",
      question:
        "What will be displayed in the browser console once the code below is executed? \n\nChoose 1 answer.",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Numbers Multiplied. Numbers Added. Numbers Equal.",
        B: "Assertion failed: Numbers Added.",
        C: "Nothing will be displayed in the console.",
        D: "Assertion failed: Numbers Equal.",
      },
      code: "const num1=5,num2='5';\nconsole.assert(num1*num2===25,'Numbers Multiplied.');\nconsole.assert(num1+num2==10,'Numbers Added.');\nconsole.assert(num1==num2,'Numbers Equal.');",
      explanation:
        "La opción correcta es la B: 'Assertion failed: Numbers Added.'. Esto sucede porque el método 'console.assert()' genera un mensaje de error en la consola cuando la afirmación pasada como primer parámetro falla.\n\n1. **Primera afirmación (`num1 * num2 === 25`)**: Es verdadera, ya que JavaScript convierte '5' (cadena) en un número para multiplicar, lo que da como resultado 25. Nada ocurre.\n2. **Segunda afirmación (`num1 + num2 == 10`)**: Falla, porque al sumar un número a una cadena, el número se convierte en una cadena, resultando en '55'. Se muestra 'Assertion failed: Numbers Added.' en la consola.\n3. **Tercera afirmación (`num1 == num2`)**: Es verdadera, ya que el operador `==` realiza conversión de tipos, y ambos valores se consideran iguales. Nada ocurre.",
    },
    {
      id: "q9",
      question:
        "A developer has finished creating a course and deployed it on the company's Learning Management System (LMS) for testing. In order to record data in the LMS, she has tried to access the API that is provided by the LMS from the course HTML page. However, the data recording is not working. She discovers that the course is launched in a child frame and not in the window that contains the API. She suspects the problem is caused by that. \n\nWhat change does she need to make in order to retrieve the API correctly?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "const SCORM_API = window.child.API;",
        B: "const SCORM_API = window.frame.API;",
        C: "const SCORM_API = window.document.API;",
        D: "const SCORM_API = window.parent.API;",
      },
      explanation:
        "La opción correcta es la D: 'const SCORM_API = window.parent.API;'. Esto se debe a que:\n\n- El objeto 'window' tiene la propiedad 'parent', que permite acceder a la ventana padre desde un frame hijo. \n- Usar 'window.parent' es necesario en este caso para acceder al API del LMS correctamente.\n\nLas otras opciones son incorrectas:\n\n- **A. 'window.child.API'**: 'child' no es una propiedad válida del objeto 'window'.\n- **B. 'window.frame.API'**: No existe una propiedad llamada 'frame' en el objeto 'window'.\n- **C. 'window.document.API'**: 'document' devuelve el documento de la ventana, no se relaciona con el API del LMS.",
    },
    {
      id: "q10",
      question:
        "A developer is working on the Cosmic Solutions website. As a part of the site, she needs to create a cookie that will store an expiration date that is one month later. She has the code to create the expiration date. Which statement can be used to store the expiration date in a cookie? \n\nChoose 1 answer.",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "cookie.add('cosmic_expiration=' + date);",
        B: "cookie = 'cosmic_expiration=' + date;",
        C: "document.cookie = 'cosmic_expiration=' + date;",
        D: "document.cookie = new Cookie('cosmic_expiration=' + date);",
      },
      code: "let date=new Date();\ndate.setMonth(date.getMonth()+1);\n// Add code here",
      explanation:
        "La opción correcta es la C: 'document.cookie = 'cosmic_expiration=' + date;'. Esto se debe a que:\n\n- La propiedad 'cookie' del objeto 'document' permite leer y escribir cookies. Al asignarle una cadena en formato 'key=value', se agrega una nueva cookie al documento.\n\nLas otras opciones son incorrectas:\n\n- **A. 'cookie.add(...)'**: No existe un método 'add' en la propiedad 'cookie'.\n- **B. 'cookie = ...'**: 'cookie' no es una variable válida, se debe usar 'document.cookie'.\n- **D. 'document.cookie = new Cookie(...)'**: No hay un constructor 'Cookie' en JavaScript.",
    },
    {
      id: "q11",
      question:
        "A JavaScript developer would like to dynamically add styling to a header tag when a condition is fulfilled. Which command can be used to add a class to the element? \n\nChoose 1 answer.",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: 'document.getElementById("result").addClass("success");',
        B: 'document.getElementById("result").addClassName("success");',
        C: 'document.getElementById("result").classList.add("success");',
        D: 'document.getElementById("result").classes.add("success");',
      },
      explanation:
        "La opción correcta es la C: 'document.getElementById(\"result\").classList.add(\"success\");'. Esto se debe a que la propiedad 'classList' del elemento permite gestionar clases de manera dinámica. El método 'add' agrega una clase al elemento.\n\nLas otras opciones son incorrectas:\n\n- **A. 'addClass'**: No existe este método en los elementos del DOM.\n- **B. 'addClassName'**: Tampoco es un método válido.\n- **D. 'classes.add'**: 'classes' no es una propiedad del elemento, se debe usar 'classList'.",
    },
    {
      id: "q12",
      question:
        "A developer has been assigned to work on an HTML page that is being used to test a new UI. The HTML page is set up to record the order in which the elements are clicked. It contains numerous buttons. Every button is a descendent of a div (upper-div). This div has an event handler that gathers an array of elements that are clicked as shown in the code below. When a user is finished, they need to click the 'Done' button in order to complete the results. However, the Done button is also pushed to the 'elements' array, which is unwanted behavior. \n\nWhat can be added to the event handler of the 'Done' button to prevent it from being stored in the array?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "stopPropagation();",
        B: "preventDefault();",
        C: "event.preventDefault();",
        D: "event.stopPropagation();",
      },
      code: '<html>\n<body>\n<div id="upper-div">\n<button id="button-1">Button 1</button>\n<button id="button-2">Button 2</button>\n<button id="button-3">Button 3</button>\n<button id="button-done">Done</button>\n</div>\n</body>\n<script>\nconst elements=[];\ndocument.getElementById(\'upper-div\').addEventListener(\'click\',function(event){\nelements.push(event.target);\n});\ndocument.getElementById(\'button-done\').addEventListener(\'click\',function(event){\n// Code for done button\n});\n</script>\n</html>',
      explanation:
        "La opción correcta es la D: 'event.stopPropagation();'. Esto se debe a que el evento 'click' del botón 'Done' se propaga hacia su elemento padre ('upper-div'), lo cual causa que se agregue al array 'elements'. Para evitar esto, es necesario llamar a 'event.stopPropagation();' dentro del controlador de eventos del botón 'Done', ya que este método detiene la propagación del evento a los elementos superiores.\n\nLas otras opciones son incorrectas:\n\n- **A. 'stopPropagation();'**: No es válida porque 'stopPropagation()' necesita ser invocado en el objeto 'event'.\n- **B. 'preventDefault();' y C. 'event.preventDefault();'**: Estos métodos previenen el comportamiento predeterminado del evento, pero no detienen la propagación del evento en el DOM.",
    },
    {
      id: "q13",
      question:
        "A developer of a pet store website is writing an application that manipulates the history stack of the browser. When the following code is executed, what page would appear in the URL if the FORWARD button is clicked on the browser? \n\nChoose 1 answer.",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "?page=kitty",
        B: "?page=froggy",
        C: "?page=bunny",
        D: "?page=puppy",
      },
      code: "window.onpopstate=function(event){\ndocument.getElementById('location').innerHTML=`You are here: ${document.location}, state: ${JSON.stringify(event.state)}`;\n}\n\nhistory.pushState({page:'kitty'},'', '?page=kitty');\nhistory.pushState({page:'froggy'},'', '?page=froggy');\nhistory.pushState({page:'bunny'},'', '?page=bunny');\nhistory.replaceState({page:'bunny'},'', '?page=puppy');\nhistory.go(-1);",
      explanation:
        "La opción correcta es la D: '?page=puppy'. Esto sucede porque:\n\n1. **'history.pushState'** agrega páginas al historial sin recargarlas. Después de estas llamadas, el historial queda como:\n- page=puppy (top, reemplazado por 'replaceState')\n- page=froggy\n- page=kitty (bottom).\n\n2. **'history.replaceState'** reemplaza la última entrada del historial (page=bunny) con page=puppy.\n3. **'history.go(-1)'** mueve la página actual a la entrada anterior (page=froggy).\n4. **Hacer clic en 'FORWARD'** lleva a la entrada más reciente del historial, que es '?page=puppy'.\n\nLas otras opciones no consideran correctamente la acción de 'replaceState' ni la estructura final del historial.",
    },
    {
      id: "q14",
      question:
        "A developer is working on a survey that will be used to gather customer data. The survey consists of numerous <input> elements of type 'checkbox' inside a div tag. She originally added an event listener to each checkbox in order to record the value when it is clicked. However, she is refactoring the code to make it more performant by reducing the number of event listeners on the page. She has added the following event listener to the parent div tag with id 'survey'. Each time a checkbox is clicked, the value is added to the results array. To finish the code below, she needs to retrieve the value from the checkbox that is clicked. \n\nWhich code statement can be added to select the checkbox that is clicked?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "const checkbox = document.getElementById('checkbox');",
        B: "const checkbox = evt.target;",
        C: "const checkbox = document.currentTarget;",
        D: "const checkbox = evt.currentTarget;",
      },
      code: "const results=[];\nconst survey=document.getElementById('survey');\nsurvey.addEventListener('click',function(evt){\n// Add code here\nif(checkbox.checked){\nresults.push(checkbox.value);\n}\n});",
      explanation:
        "La opción correcta es la B: 'const checkbox = evt.target;'. Esto se debe a que el uso de delegación de eventos permite que un único controlador en el elemento padre ('survey') gestione los eventos de todos sus hijos. La propiedad 'evt.target' se refiere al elemento que originó el evento (es decir, el checkbox que fue clicado).\n\nLas otras opciones son incorrectas:\n\n- **A. 'document.getElementById(\"checkbox\")'**: Esto no seleccionará dinámicamente el checkbox clicado, ya que no existe un elemento con id='checkbox'.\n- **C y D. 'currentTarget'**: Estas propiedades se refieren al elemento al que está asignado el manejador de eventos (el padre 'survey'), no al checkbox que dispara el evento.",
    },
    {
      id: "q15",
      question:
        "A web application needs to fire an event called 'unsubscribe' when a user unsubscribes from a mailing list. The event must contain the name of the mailing list and the name of the page where the request was initiated from. Which of the options below represents code that can be used in the requirement? \n\nChoose 1 answer.",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "let event = new CustomEvent({ name: 'unsubscribe', mail: listName, page: pageName });",
        B: "let event = new CustomEvent('unsubscribe', { detail: { mail: listName, page: pageName } });",
        C: "let event = new Event('unsubscribe', { mail: listName, page: pageName });",
        D: "let event = new Event('unsubscribe', { detail: { mail: listName, page: pageName } });",
      },
      explanation:
        "La opción correcta es la B: 'let event = new CustomEvent('unsubscribe', { detail: { mail: listName, page: pageName } });'. Esto se debe a que el constructor 'CustomEvent()' permite incluir datos personalizados a través del parámetro 'detail', que puede contener cualquier tipo de datos.\n\nLas otras opciones son incorrectas:\n\n- **A**: El constructor de 'CustomEvent' no acepta un objeto como primer parámetro, debe ser el nombre del evento como una cadena.\n- **C y D**: El constructor 'Event()' no admite el uso de datos personalizados en un parámetro 'detail'. Solo 'CustomEvent' admite esta funcionalidad.",
    },
    {
      id: "q16",
      question:
        "When the button is clicked, two messages display in the console. Given the HTML and JavaScript code below.\n\nWhat can be added in place of the comment so that only the message 'button clicked' is displayed?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "e.stopPropagation();",
        B: "Event.removeEventListener();",
        C: "e.preventDefault();",
        D: "Event.stopPropagation();",
      },
      code: "<div id=\"content-main\">\n<h1>JavaScript Problem:</h1>\n<p>content</p>\n<div class=\"center\">\n<button id=\"button\">Button</button>\n</div>\n</div>\n\n<script>\ndocument.getElementById('content-main').addEventListener('click',function(e){\nconsole.log('content-main clicked');\n});\ndocument.getElementById('button').addEventListener('click',function(e){\n// Add Code Here\nconsole.log('button clicked');\n});\n</script>",
      explanation:
        "La opción correcta es la A: 'e.stopPropagation();'. Esto se debe a que el método 'stopPropagation()' previene que el evento continúe propagándose durante las fases de captura o burbujeo. En este caso, se detendrá la propagación del evento 'click' hacia el elemento padre ('content-main'), mostrando únicamente el mensaje 'button clicked'.\n\nLas otras opciones son incorrectas:\n\n- **B. 'Event.removeEventListener();'**: Este método no es válido en este contexto.\n- **C. 'e.preventDefault();'**: Previene el comportamiento predeterminado del evento, pero no detiene la propagación.\n- **D. 'Event.stopPropagation();'**: Necesita ser invocado desde el objeto de evento (e), por lo que no funcionará como está escrito.",
    },
    {
      id: "q17",
      question:
        "A developer is working on a survey for the support department. She needs to select all the checkboxes. \n\nWhich statements will select the input elements of type checkbox?",
      type: "multiple choice",
      correct_options: ["A", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "document.getElementsByClassName('survey-check');",
        B: "document.getElementByTagName('input');",
        C: "document.getElementsByTagName('input');",
        D: "document.getElementsByClassName('input');",
      },
      code: '<div id="survey">\n<input type="checkbox" id="support1" value="support_24" class="survey-check">\n<label for="support">Support responds within 24 hours.</label><br>\n<input type="checkbox" id="support2" value="support_solved" class="survey-check">\n<label for="support2">Support solved the issue with the first response.</label><br>\n<input type="checkbox" id="support3" value="support_followup" class="survey-check">\n<label for="support3">Support followed up with me.</label><br>\n</div>',
      explanation:
        "Las opciones correctas son:\n\n- **A. 'document.getElementsByClassName('survey-check');'**: Este método crea una colección de elementos HTML que tienen la clase especificada ('survey-check').\n- **C. 'document.getElementsByTagName('input');'**: Este método selecciona todos los elementos HTML del tipo especificado ('input'), lo cual incluye todos los checkboxes.\n\nLas otras opciones son incorrectas:\n\n- **B. 'document.getElementByTagName('input');'**: Contiene un error tipográfico ('getElementByTagName' en lugar de 'getElementsByTagName').\n- **D. 'document.getElementsByClassName('input');'**: No selecciona los elementos correctos, ya que la clase 'input' no existe en el HTML proporcionado.",
    },
    {
      id: "q18",
      question:
        "Which of the following would allow a developer to select the h1 tags that are part of the HTML code shown below?",
      type: "multiple choice",
      correct_options: ["A", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "document.querySelectorAll('h1');",
        B: "document.querySelector('h1');",
        C: "document.querySelectorAll(h1);",
        D: "document.querySelectorAll('.main');",
      },
      code: '<div id="content-main">\n<h1 class="main">Heading</h1>\n<h2 id="sub"><em>Second level heading</em></h2>\n<p>content</p>\n<div class="center">\n<h1 class="main">Heading</h1>\n<p>content</p>\n<button id="button">Button</button>\n</div>\n</div>',
      explanation:
        "Las opciones correctas son:\n\n- **A. 'document.querySelectorAll('h1');'**: Selecciona todos los elementos `<h1>` presentes en el DOM y devuelve un NodeList.\n- **D. 'document.querySelectorAll('.main');'**: Selecciona todos los elementos que tengan la clase 'main', devolviendo también un NodeList.\n\nLas otras opciones son incorrectas:\n\n- **B. 'document.querySelector('h1');'**: Selecciona solo el primer `<h1>` encontrado.\n- **C. 'document.querySelectorAll(h1);'**: Sintaxis incorrecta, ya que falta colocar las comillas alrededor de 'h1'.",
    },
    {
      id: "q19",
      question:
        "A developer is working on the company site and needs to select the initial welcome message using JavaScript. \n\nWhich statement can be used to select the h2 element in the given code?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "document.querySelector('.init-welcome');",
        B: "document.querySelector('#init-welcome');",
        C: "document.querySelector('div');",
        D: "document.querySelector('.welcome');",
      },
      code: '<div id="content">\n<h2 id="welcome" class="init-welcome">Welcome!</h2>\n</div>',
      explanation:
        "La opción correcta es la A: 'document.querySelector('.init-welcome');'. Esto selecciona el elemento `<h2>` usando su clase 'init-welcome'.\n\nLas otras opciones son incorrectas:\n\n- **B. 'document.querySelector('#init-welcome');'**: La sintaxis del selector '#init-welcome' es incorrecta porque el id del elemento es 'welcome', no 'init-welcome'.\n- **C. 'document.querySelector('div');'**: Esto selecciona el elemento `<div>`, no el `<h2>`.\n- **D. 'document.querySelector('.welcome');'**: El selector '.welcome' no coincide con ninguna clase en el HTML.",
    },
    {
      id: "q20",
      question:
        "A developer of Cosmic Solutions has been asked to render a logo resembling a circular target on an HTML page. She has written the following code for the page, but it shows a blank page instead of a logo. \n\nWhat could possibly be wrong?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "The 'for' loop is not correctly declared.",
        B: "ctx.strokeStyle() should be called instead of ctx.fillStyle().",
        C: "A required parameter is missing from the getContext() method call.",
        D: "A call to ctx.fill() is missing.",
      },
      code: "<body>\n<canvas id=\"myCanvas\" width=\"300\" height=\"300\"></canvas>\n<script>\nconst circles=[{radius:40,color:'red'},{radius:30,color:'white'},{radius:20,color:'red'}];\nconst canvas=document.getElementById('myCanvas');\nlet ctx=canvas.getContext('2d');\nfor(let circle in circles){\nctx.beginPath();\nctx.fillStyle=circles[circle].color;\nctx.arc(150,150,circles[circle].radius,0,2*Math.PI);\nctx.closePath();\n}\n</script>\n</body>",
      explanation:
        "La opción correcta es la D: 'A call to ctx.fill() is missing.'. Aunque cada círculo se crea correctamente usando 'beginPath()', 'fillStyle()', y 'arc()', falta invocar el método 'fill()' para llenar el círculo antes de cerrar el camino con 'closePath()'. Sin esto, los círculos no se renderizan.\n\nLas otras opciones son incorrectas:\n\n- **A. 'The for loop is not correctly declared.'**: La declaración 'for...in' es válida en este contexto.\n- **B. 'ctx.strokeStyle() should be called instead of ctx.fillStyle().'**: 'fillStyle()' es el método adecuado para llenar los círculos.\n- **C. 'A required parameter is missing from the getContext() method call.'**: 'getContext()' funciona con el parámetro '2d' únicamente.",
    },
    {
      id: "q21",
      question:
        "The code below is being developed to provide multi-lingual support in an application. However, there is an issue that is causing text translations to not be retrieved properly. \n\nWhich pane in browser DevTools shows information about the defined local and global variables and their values?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "Scope pane",
        B: "Variables pane",
        C: "Global pane",
        D: "Breakpoints pane",
      },
      code: "var iso='it';\nvar lang={\ntranslate:function(label,code){\nvar self=this;\n(function(){\n// …\nlet iso=code;\n})();\n(function(){\n// …\ntext=self.db[iso][label];\n})();\nvar text;\nreturn text;\n},\ndb:{\nfr:{hello:'bonjour',bye:'au revoir'},\nit:{hello:'ciao',bye:'addio'},\n// …\n}\n};\n\n// return the French translation for 'hello'\nvar translation=lang.translate('hello','fr');",
      explanation:
        "La opción correcta es la A: 'Scope pane'. Esta sección en DevTools muestra tanto variables locales como globales, incluyendo las de cierres. También permite editar valores directamente al hacer doble clic.\n\nLas otras opciones son incorrectas:\n\n- **B. 'Variables pane'**: Este panel no existe en DevTools.\n- **C. 'Global pane'**: No ofrece información sobre variables locales ni cierres.\n- **D. 'Breakpoints pane'**: Muestra los puntos de interrupción, pero no información de las variables.",
    },
    {
      id: "q22",
      question:
        "If a user loads the page http://www.example.com/page-01.html in their browser, which of the following will cause the URL bar to display http://www.example.com/page-03.html?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "history.pushState({}, 'page 2', 'page-02.html'); history.pushState({}, 'page 3', 'page-03.html'); history.replaceState({}, 'page 4', 'page-04.html'); history.go(-3);",
        B: "history.pushState({}, 'page 2', 'page-02.html'); history.pushState({}, 'page 3', 'page-03.html'); history.pushState({}, 'page 4', 'page-04.html'); history.popState();",
        C: "history.pushState({}, 'page 2', 'page-02.html'); history.pushState({}, 'page 3', 'page-03.html'); history.replaceState({}, 'page 4', 'page-04.html'); history.back();",
        D: "history.pushState({}, 'page 2', 'page-02.html'); history.replaceState({}, 'page 3', 'page-03.html'); history.pushState({}, 'page 4', 'page-04.html'); history.back();",
      },
      explanation:
        "La opción correcta es la D: 'history.pushState({}, 'page 2', 'page-02.html'); history.replaceState({}, 'page 3', 'page-03.html'); history.pushState({}, 'page 4', 'page-04.html'); history.back();'. Esto se debe a que:\n\n1. **'history.pushState'** agrega nuevas entradas al historial del navegador.\n2. **'history.replaceState'** modifica la entrada actual del historial sin agregar una nueva.\n3. **'history.back()'** navega una página hacia atrás en el historial del navegador.\n\nEl flujo de acciones es el siguiente:\n- Se carga 'page-01.html'.\n- 'history.pushState' navega a 'page-02.html'.\n- 'history.replaceState' modifica la URL a 'page-03.html'.\n- 'history.pushState' navega a 'page-04.html'.\n- 'history.back()' regresa a 'page-03.html'.\n\nLas otras opciones son incorrectas porque:\n\n- **A**: 'history.go(-3)' intenta navegar más páginas atrás de las disponibles.\n- **B**: 'history.popState()' no es un método válido.\n- **C**: Regresa a 'page-02.html' en lugar de 'page-03.html'.",
    },
    {
      id: "q23",
      question:
        "A developer is responsible to develop an HTML page for the company website. The following HTML code is the start of this page. \n\nWhich list correctly identifies the most elements on this page that could be used to respond to a click event?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "div, button, document and window",
        B: "div and button",
        C: "div, button, and document",
        D: "button",
      },
      code: '<html lang="en">\n<head>\n<title>Login Page</title>\n</head>\n<body>\n<div id="outer">\n<button id="check-answer">Check Answer</button>\n</div>\n<script src="index.js"></script>\n</body>\n</html>',
      explanation:
        "La opción correcta es la A: 'div, button, document and window'. Esto se debe a que el método 'addEventListener' puede asignar escuchadores de eventos a cualquier elemento HTML, así como a los objetos globales 'document' y 'window'. Los demás elementos listados no incluyen todos los componentes posibles que podrían responder a un evento de clic.\n\nLas otras opciones son incorrectas:\n\n- **B. 'div and button'**: Excluye 'document' y 'window'.\n- **C. 'div, button, and document'**: No incluye 'window'.\n- **D. 'button'**: Se limita únicamente al botón y no considera el resto de los elementos seleccionables.",
    },
    {
      id: "q24",
      question:
        "A frontend developer is building a single page application that displays an analytics report of downloads and usage data for a mobile app. A button was created that allows a user to filter data and rerender a chart. However, the developer noticed that, when the chart rerenders, other DOM elements on the page also change and cause unexpected issues. \n\nWhich of the following options can be used to pause code execution as soon as the chart rerenders?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Use the Watch panel to watch DOM elements as their states change.",
        B: "Create a DOM change breakpoint on the chart DOM element.",
        C: "Access the Console terminal and run the debugger statement.",
        D: "Add a console.error() statement in the function invoked by the button.",
      },
      explanation:
        "La opción correcta es la B: 'Create a DOM change breakpoint on the chart DOM element.'. Esto se debe a que los puntos de interrupción del tipo DOM se pueden agregar en el panel de Elementos de DevTools del navegador. Estos puntos detienen la ejecución del código tan pronto como el elemento DOM cambia, incluyendo modificaciones en atributos, nodos secundarios y eliminaciones.\n\nLas otras opciones son incorrectas:\n\n- **A. 'Use the Watch panel to watch DOM elements...'**: El panel de Watch monitorea expresiones de JavaScript, pero no puede rastrear cambios de elementos DOM.\n- **C. 'Access the Console terminal...'**: El comando 'debugger' detiene la ejecución, pero debe añadirse al código JavaScript, no ejecutarse directamente desde la consola.\n- **D. 'Add a console.error() statement...'**: Solo muestra mensajes de error en la consola, pero no pausa la ejecución del código.",
    },
    {
      id: "q25",
      question:
        "JavaScript is used to generate rows and load data in a table when a web page is loaded. When the row data meets the specified criteria, the row element is automatically modified with custom attributes that control how the row appears in the table and also provides additional functionality. However, a JavaScript function is setting incorrect attributes on the necessary rows when the page is loaded. \n\nWhich of the following options can be performed inside the Sources panel to help debug JavaScript code such as the function used below?",
      type: "multiple choice",
      correct_options: ["A", "B", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "Set line-of-code breakpoints to pause code when a line of code is executed.",
        B: "Add variables in the Watch pane to inspect and monitor their values.",
        C: "Insert function breakpoints to pause code whenever the function is called.",
        D: "Create DOM breakpoints to pause code as soon as element attributes are changed.",
        E: "Use the step commands to execute code one line at a time and inspect the behavior.",
      },
      code: "function setRowAttributes(row){\n// ...\nlet type=getRowType(row);\nlet criteria=getRowCriteria(type);\nlet match=assessRow(row,criteria);\nif(match){\nlet done=setAttributes(row);\n}\n}",
      explanation:
        "Las opciones correctas son:\n\n- **A. 'Set line-of-code breakpoints...'**: Detiene la ejecución del código cuando se alcanza una línea específica.\n- **B. 'Add variables in the Watch pane...'**: Permite inspeccionar y monitorear el valor de variables mientras el código se ejecuta.\n- **E. 'Use the step commands...'**: Permite ejecutar el código línea por línea y observar el comportamiento de cada una.\n\nLas otras opciones son incorrectas:\n\n- **C. 'Insert function breakpoints...'**: Estos puntos de interrupción se configuran usando el comando 'debug()', que se ejecuta en la terminal de la consola, no en el panel de Fuentes.\n- **D. 'Create DOM breakpoints...'**: Los puntos de interrupción DOM se establecen en el panel de Elementos, no en el panel de Fuentes.",
    },
    {
      id: "q26",
      question:
        "A developer is working to complete a website for a local artist. The site is very asset-heavy due to the high number of images that need to be displayed. Before doing a live test on the site, the developer would like to see how the site functions under slower speeds. \n\nUsing Chrome DevTools, what steps would allow her to test this?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Open the 'Network' panel. Enable throttling by clicking the 'Throttling' drop-down and choosing 'Slow 3G.",
        B: "Open the 'Network' panel. Enable throttling by clicking the 'Throttling' drop-down and choosing 'Slow 3G. Then long click the reload button and select 'Empty Cache and Hard Reload'.",
        C: "Open the site on a mobile browser. Long click the reload button and select 'Empty Cache and Hard Reload'.",
        D: "Open the 'Network' panel. Then long click the reload button and select 'Empty Cache and Hard Reload'.",
      },
      explanation:
        "La opción correcta es la B: 'Open the Network panel. Enable throttling by clicking the Throttling drop-down and choosing Slow 3G. Then long click the reload button and select Empty Cache and Hard Reload.'. Esto permite simular una conexión lenta seleccionando 'Slow 3G' y garantiza que los activos se descarguen del servidor en lugar de usar la caché.\n\nLas otras opciones son incorrectas:\n\n- **A**: No incluye el paso necesario de vaciar la caché y recargar forzosamente.\n- **C**: Abrir el sitio en un navegador móvil no necesariamente simula una conexión lenta.\n- **D**: Aunque incluye la recarga forzada, no activa la limitación de velocidad en la red ('Throttling').",
    },
    {
      id: "q27",
      question:
        "A developer of Cosmic Solutions first develops and tests code on a development server before deploying the final code to the production server. Before making the switch, she needs to edit the port number of the URL string for the server from 3000 to 80. \n\nShe uses the URL API to make the change. Which part of the URL object will not be affected by the change?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "hostname",
        B: "host",
        C: "href",
        D: "origin",
      },
      code: "'http://cosmicsolutions.com:3000/project/client?name=Microsoft#JavaScript'",
      explanation:
        "La opción correcta es la A: 'hostname'. El valor de 'hostname' no se ve afectado por el cambio de puerto ya que solo incluye el nombre de dominio (cosmicsolutions.com).\n\nLas otras propiedades cambian así:\n\n- **B. host**: Antes es 'cosmicsolutions.com:3000', después es 'cosmicsolutions.com'.\n- **C. href**: Incluye la URL completa, por lo que refleja los cambios realizados.\n- **D. origin**: Antes es 'http://cosmicsolutions.com:3000', después es 'http://cosmicsolutions.com'.",
    },
    {
      id: "q28",
      question:
        "When a page is loaded in an application, values of a custom attribute named 'device' on image elements are dynamically updated based on the device of the current user. However, the attributes don't seem to be set when loading the page. \n\nHow can the browser DevTools be used to inspect the elements and edit attribute values?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "Enter values in the Attributes pane in the Elements panel after selecting the element.",
        B: "Open the Sources panel and set a breakpoint on the image element to edit attribute values.",
        C: "Access the 'Elements' panel and double-click on the custom attribute to edit its value.",
        D: "Select the element in the Sources panel and right-click to edit attribute values.",
      },
      code: '<div class="container">\n<ul class="image-wrapper">\n<li><img src="image-01.jpg" class="slide" device="" /></li>\n<li><img src="image-02.jpg" class="slide" device="" /></li>\n<li><img src="image-03.jpg" class="slide" device="" /></li>\n</ul>\n</div>',
      explanation:
        "La opción correcta es la C: 'Access the Elements panel and double-click on the custom attribute to edit its value.'. Esto se debe a que en el panel de Elementos de DevTools, los atributos se pueden inspeccionar y modificar directamente haciendo doble clic para cambiar su valor. También se puede hacer clic derecho para agregar o editar atributos.\n\nLas otras opciones son incorrectas:\n\n- **A. 'Enter values in the Attributes pane...'**: No existe un panel llamado 'Attributes' en el panel de Elementos.\n- **B. 'Open the Sources panel...'**: El panel de Fuentes se utiliza para depurar código JavaScript, no para editar atributos.\n- **D. 'Select the element in the Sources panel...'**: Los valores de los atributos no se editan en el panel de Fuentes.",
    },
    {
      id: "q29",
      question:
        "A developer tries to execute the following code to retrieve JSON data from a network server but receives this error in the console: TypeError: response.json is not a function. \n\nWhat could possibly be wrong?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "The keyword 'await' is missing from fetch().",
        B: "The JSON data received is corrupted.",
        C: "The Internet connection is poor.",
        D: "The URL string is invalid.",
      },
      code: "const url='http://dummy.restapiexample.com/api/v1/employee/1';\n\nconst request=async()=>{\ntry{\nconst response=fetch(url,{method:'GET'});\nconst data=response.json();\nconsole.log(data);\n}catch(error){\nconsole.log(error);\n}\n};\n\nrequest();",
      explanation:
        "La opción correcta es la A: 'The keyword await is missing from fetch().'. Esto se debe a que la función 'request()' es asincrónica (marcada con 'async'), pero la palabra clave 'await' falta antes de la llamada a 'fetch()'. Sin 'await', el código no espera que se resuelva la promesa de 'fetch()', y la variable 'response' se vuelve indefinida, causando un error cuando se intenta invocar 'response.json()'.\n\nLas otras opciones son incorrectas:\n\n- **B. 'The JSON data received is corrupted.'**: No es el problema principal, ya que el error ocurre antes de procesar los datos JSON.\n- **C. 'The Internet connection is poor.'**: Una mala conexión generaría un error diferente (por ejemplo, un error de red).\n- **D. 'The URL string is invalid.'**: Si la URL fuera inválida, el error sería diferente, probablemente relacionado con un 404 o conexión rechazada.",
    },
    {
      id: "q30",
      question:
        "The source code of a web page has been given below. \n\nWhich of the following statements are true regarding the Document Object Model (DOM) of the web page?",
      type: "multiple choice",
      correct_options: ["C", "D", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "The title tag represents an Attribute of the DOM.",
        B: "The document.querySelectorAll(.container') method would return a Node.",
        C: "The Document represents the whole web page.",
        D: "Every object located in the DOM is called a Node.",
        E: "Both h1 and img tags are examples of the Element data type.",
      },
      code: '<html>\n<head>\n<title>Fordshire Consultancy</title>\n</head>\n<body>\n<div class="container title">\n<h1>Welcome to Fordshire Consultancy</h1>\n</div>\n<div class="container img">\n<img src="./images/building.jpg" height="200" width="300" />\n</div>\n</body>\n</html>',
      explanation:
        "Las respuestas correctas son:\n\n- **C. 'The Document represents the whole web page.'**: El objeto Document en el DOM representa toda la página web.\n- **D. 'Every object located in the DOM is called a Node.'**: Cada objeto en el DOM es considerado un nodo. Ejemplos incluyen elementos, atributos y texto.\n- **E. 'Both h1 and img tags are examples of the Element data type.'**: Los elementos `<h1>` y `<img>` son instancias del tipo de dato Element.\n\nLas otras opciones son incorrectas:\n\n- **A**: La etiqueta `<title>` es un elemento, no un atributo.\n- **B**: El método 'document.querySelectorAll()' devuelve un NodeList, no un Nodo individual.",
    },
    {
      id: "q31",
      question:
        "A developer is working on an asset-heavy site and she is doing a lot of testing of download speeds. Each time she loads a page on the site, she wants to make sure that the assets are not being retrieved from the browser cache. \n\nWhat methods can she use to ensure that cache is not used?",
      type: "multiple choice",
      correct_options: ["B", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "From the Chrome menu button, select 'Clear cached assets'.",
        B: "Access the Network panel and check the 'Disable cache' checkbox.",
        C: "With DevTools opened, long-press the reload button and select Hard Reload.",
        D: "Access the Performance panel and check the 'Disable cache' checkbox.",
      },
      explanation:
        "Las respuestas correctas son:\n\n- **B. 'Access the Network panel and check the Disable cache checkbox.'**: Esto desactiva el uso de la caché para toda la sesión en el navegador.\n- **C. 'With DevTools opened, long-press the reload button and select Hard Reload.'**: Realiza una recarga forzada, solicitando todos los recursos desde sus fuentes originales.\n\nLas otras opciones son incorrectas:\n\n- **A**: No existe una opción en el menú de Chrome llamada 'Clear cached assets'.\n- **D**: El panel de Rendimiento ('Performance') no incluye una opción para desactivar la caché.",
    },
    {
      id: "q32",
      question:
        "A developer has written the code below to implement a 'dark' mode for specific elements. \n\nWhich of the following should be added to lines 2 and 4 of the function?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "document.querySelector, setAttribute('darkMode','true')",
        B: "document.getElementByld, setAttribute('darkMode')",
        C: "document.querySelector, setAttribute('darkMode')",
        D: "document.querySelectorAll, setAttribute('darkMode','true')",
      },
      code: 'function applyDarkMode(){\nlet containers=________(".container-toggle"); // Add code here\nfor(let i=0;i<containers.length;i++){\ncontainers[i].____________; // Add code here\n}\n}',
      explanation:
        "La opción correcta es la D: 'document.querySelectorAll, setAttribute('darkMode','true')'. Esto se debe a que:\n\n1. **document.querySelectorAll** devuelve una lista de todos los elementos que coinciden con el selector dado, lo que es necesario para iterar sobre ellos en el bucle.\n2. **setAttribute** toma dos parámetros: el nombre del atributo y su valor. Aquí se usa para establecer el atributo 'darkMode' con el valor 'true'.\n\nLas otras opciones son incorrectas porque:\n\n- **A y C**: 'querySelector' solo devuelve el primer elemento que coincide con el selector.\n- **B**: 'getElementById' selecciona un único elemento por id y no funciona con clases como '.container-toggle'.",
    },
    {
      id: "q33",
      question:
        "Given the HTML and JavaScript code below, determine the browser console output after a user clicks the button twice?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "core, core, mantle, mantle",
        B: "crust, mantle, core, crust",
        C: "mantle, mantle, core, core",
        D: "core, mantle, crust, crust",
      },
      code: '<!-- HTML -->\n<div id="crust">\n<div id="mantle">\n<div id="core">\n<button>Click</button>\n</div>\n</div>\n</div>\n\n/* JavaScript */\ndocument.getElementById("crust")\n.addEventListener("click",function(){console.log(\'crust\');},{capture:false});\n\ndocument.getElementById("mantle")\n.addEventListener("click",function(){console.log(\'mantle\');},{once:true});\n\ndocument.getElementById("core")\n.addEventListener("click",function(){console.log(\'core\');},{capture:true,once:true});',
      explanation:
        "La opción correcta es la D: 'core, mantle, crust, crust'. Esto sucede porque:\n\n1. En el **primer clic**:\n   - El evento se captura primero por 'core' debido a 'capture: true' y luego su listener es eliminado por 'once: true'.\n   - Después, en la fase de burbujeo, 'mantle' responde y también su listener se elimina por 'once: true'.\n   - Finalmente, 'crust' responde en la burbujeo normal.\n\n2. En el **segundo clic**:\n   - Solo 'crust' responde porque 'core' y 'mantle' ya no tienen listeners asignados.\n\nLas otras opciones no consideran correctamente las fases de captura y burbujeo ni los efectos del parámetro 'once'.",
    },
    {
      id: "q34",
      question:
        "A developer is working on an application with an interface based on key presses. She would like to review the attributes of individual keypresses so that she is aware of what can be used in the development of this application. \n\nWhat could she quickly enter in the console to monitor the keypress event?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "$0.addEventListener('keypress', e => console.log(e));",
        B: "console.dir(new KeyEvent());",
        C: "window.addEventListener('keypress', e => console.log(e));",
        D: "console.monitor('event', 'keypress');",
      },
      explanation:
        "La opción correcta es la C: 'window.addEventListener('keypress', e => console.log(e));'. Al añadir un listener para el evento 'keypress' en el objeto 'window', se pueden registrar detalles sobre las pulsaciones de teclas en la consola.\n\nLas otras opciones son incorrectas:\n\n- **A**: '$0' solo selecciona el último elemento inspeccionado, pero no se utiliza para eventos globales como 'keypress'.\n- **B**: 'console.dir(new KeyEvent())' no es una forma válida de crear un evento.\n- **D**: 'console.monitor()' no existe como método en las herramientas de desarrollo del navegador.",
    },
    {
      id: "q35",
      question:
        "A developer is tracking the mobile positions of a moving device with start and stop controls. However, stopping the tracking isn't working as desired. \n\nWhat could possibly be wrong with the following code?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "The wrong function is called to stop tracking.",
        B: "watchId is still null when passed to clearWatch().",
        C: "Geolocation is not available when calling stop().",
        D: "Permission is needed from the user before tracking can be stopped.",
      },
      code: 'let watchId=null;\n\nconst start=()=>{\nif(navigator.geolocation){\nnavigator.geolocation.watchPosition(handleSuccess,handleError,options);\n}else{\nlocationElement.innerHTML=("Sorry, browser does not support geolocation!");\n}\n}\n\nconst stop=()=>{\nnavigator.geolocation.clearWatch(watchId);\n}',
      explanation:
        "La opción correcta es la B: 'watchId is still null when passed to clearWatch()'. Esto se debe a que 'watchId' nunca se asigna al valor de retorno de 'watchPosition()' dentro de la función 'start()'. Esto impide que 'stop()' funcione correctamente.\n\nEl código correcto para asignar 'watchId' debería ser:\n\n```javascript\nwatchId = navigator.geolocation.watchPosition(handleSuccess, handleError, options);\n```\n\nLas otras opciones son incorrectas:\n\n- **A**: 'clearWatch()' es la función adecuada para detener el seguimiento.\n- **C**: No hay indicios de que la geolocalización no esté disponible.\n- **D**: La solicitud de permisos es necesaria para iniciar, pero no para detener el seguimiento.",
    },
    {
      id: "q36",
      question:
        "A developer has written the following code in an async function which retrieves a collection of records from the web server, loops through the records for processing, and then sends the records back to the web server to finalize the changes. The developer wants to ensure that the code is working as expected and that the values of record fields are correctly set before submitting the records. \n\nWhat statement can be used to inspect or display values as the script executes without pausing code execution?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "inspect statement",
        B: "debugger statement",
        C: "console.error() statement",
        D: "console.log() statement",
      },
      code: "var records=await getRecords();\n\nfor(let i in records){\nlet record=records[i];\nif(record.category=='enquiry'){\nrecord.status=getEnquiryStatus();\n// display value of record.status here\n}else{\nswitch(record.type){\ncase 'tier1':\nrecord.owner=getTierUser(1);\n// display value of record.owner here\nbreak;\ncase 'tier2':\nrecord.owner=getTierUser(2);\n// display value of record.owner here\nbreak;\ncase 'tier3':\nrecord.owner=getTierUser(3);\n// display value of record.owner here\nbreak;\ndefault:\nrecord.owner=getCurrentUser();\n// display value of record.owner here\n}\n}\n}",
      explanation:
        "La opción correcta es la D: 'console.log() statement'. Esto se debe a que 'console.log()' permite inspeccionar valores y confirmar el comportamiento del código mientras se ejecuta sin pausar su ejecución. Por ejemplo, se puede usar así:\n\n```javascript\nrecord.owner = getTierUser(1);\nconsole.log(record.owner);\n```\n\nLas otras opciones son incorrectas:\n\n- **A. 'inspect statement'**: No existe tal instrucción en JavaScript.\n- **B. 'debugger statement'**: Pausa la ejecución del código, lo cual no es lo requerido aquí.\n- **C. 'console.error() statement'**: Está diseñado para registrar mensajes de error, no para inspeccionar valores.",
    },
    {
      id: "q37",
      question:
        "The data item specified below is saved in the browser's localStorage using the key called 'permissions'. \n\nWhich option can be used to replace /*code*/ in order to access the 'viewReport' property in the next line?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "const perms = localStorage.get('permissions').data('viewReport');",
        B: "const perms = localStorage.getItem('permissions');",
        C: "const perms = JSON.parse(localStorage.getItem('permissions'));",
        D: "const perms = localStorage.getItem('permissions', );",
      },
      code: "// data item stored in localStorage:\n// { viewReport: true, createReport: false, deleteReport: false }\n\n/*code*/\nconsole.log(perms['viewReport']);",
      explanation:
        "La opción correcta es la C: 'const perms = JSON.parse(localStorage.getItem('permissions'));'. Esto se debe a que el objeto almacenado en 'localStorage' se guarda como una cadena utilizando 'JSON.stringify()'. Para acceder a sus propiedades, primero se recupera con 'localStorage.getItem()' y luego se analiza de nuevo en un objeto con 'JSON.parse()'.\n\nLas otras opciones son incorrectas porque:\n\n- **A**: 'localStorage.get' no es un método válido.\n- **B**: Devuelve una cadena en lugar de un objeto, lo que hace que no se pueda acceder directamente a las propiedades.\n- **D**: La sintaxis de 'localStorage.getItem()' no admite un segundo parámetro.",
    },
    {
      id: "q36",
      question:
        "A developer has written the following code in an async function which retrieves a collection of records from the web server, loops through the records for processing, and then sends the records back to the web server to finalize the changes. The developer wants to ensure that the code is working as expected and that the values of record fields are correctly set before submitting the records. \n\nWhat statement can be used to inspect or display values as the script executes without pausing code execution?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "inspect statement",
        B: "debugger statement",
        C: "console.error() statement",
        D: "console.log() statement",
      },
      code: "var records=await getRecords();\n\nfor(let i in records){\nlet record=records[i];\nif(record.category=='enquiry'){\nrecord.status=getEnquiryStatus();\n// display value of record.status here\n}else{\nswitch(record.type){\ncase 'tier1':\nrecord.owner=getTierUser(1);\n// display value of record.owner here\nbreak;\ncase 'tier2':\nrecord.owner=getTierUser(2);\n// display value of record.owner here\nbreak;\ncase 'tier3':\nrecord.owner=getTierUser(3);\n// display value of record.owner here\nbreak;\ndefault:\nrecord.owner=getCurrentUser();\n// display value of record.owner here\n}\n}\n}",
      explanation:
        "La opción correcta es la D: 'console.log() statement'. Esto se debe a que 'console.log()' permite inspeccionar valores y confirmar el comportamiento del código mientras se ejecuta sin pausar su ejecución. Por ejemplo, se puede usar así:\n\n```javascript\nrecord.owner = getTierUser(1);\nconsole.log(record.owner);\n```\n\nLas otras opciones son incorrectas:\n\n- **A. 'inspect statement'**: No existe tal instrucción en JavaScript.\n- **B. 'debugger statement'**: Pausa la ejecución del código, lo cual no es lo requerido aquí.\n- **C. 'console.error() statement'**: Está diseñado para registrar mensajes de error, no para inspeccionar valores.",
    },
    {
      id: "q37",
      question:
        "The data item specified below is saved in the browser's localStorage using the key called 'permissions'. \n\nWhich option can be used to replace /*code*/ in order to access the 'viewReport' property in the next line?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "const perms = localStorage.get('permissions').data('viewReport');",
        B: "const perms = localStorage.getItem('permissions');",
        C: "const perms = JSON.parse(localStorage.getItem('permissions'));",
        D: "const perms = localStorage.getItem('permissions', );",
      },
      code: "// data item stored in localStorage:\n// { viewReport: true, createReport: false, deleteReport: false }\n\n/*code*/\nconsole.log(perms['viewReport']);",
      explanation:
        "La opción correcta es la C: 'const perms = JSON.parse(localStorage.getItem('permissions'));'. Esto se debe a que el objeto almacenado en 'localStorage' se guarda como una cadena utilizando 'JSON.stringify()'. Para acceder a sus propiedades, primero se recupera con 'localStorage.getItem()' y luego se analiza de nuevo en un objeto con 'JSON.parse()'.\n\nLas otras opciones son incorrectas porque:\n\n- **A**: 'localStorage.get' no es un método válido.\n- **B**: Devuelve una cadena en lugar de un objeto, lo que hace que no se pueda acceder directamente a las propiedades.\n- **D**: La sintaxis de 'localStorage.getItem()' no admite un segundo parámetro.",
    },
    {
      id: "q40",
      question:
        "A developer is working on a customer survey that uses a number of checkboxes that are rendered by HTML similar to the example code snippet shown below. The developer has a NodeList of all the checkboxes and is using a for-of loop to iterate through them. She first checks if the box is checked and then she would need to retrieve the value. \n\nWhat can she enter inside the parentheses to retrieve the value?",
      type: "multiple choice",
      correct_options: ["A", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "elem.getAttribute('value')",
        B: "elem.getValue()",
        C: "elem.attribute('value')",
        D: "elem.value",
      },
      code: '<!-- HTML code -->\n<input type="checkbox" id="support" value="support_24">\n<label for="support">Support responds within 24 hours.</label>\n<!-- more checkboxes ... -->\n\n/* JavaScript code */\nfor(let elem of checkboxes){\nif(elem.checked){\nrecordResponse(/* enter code here */);\n}\n}',
      explanation:
        "Las respuestas correctas son:\n\n- **A. 'elem.getAttribute('value')'**: Utiliza el método 'getAttribute()' para obtener el valor del atributo 'value' del elemento HTML.\n- **D. 'elem.value'**: Accede directamente a la propiedad 'value' del elemento HTML.\n\nLas otras opciones son incorrectas porque:\n\n- **B**: 'getValue()' no es un método válido en los elementos HTML.\n- **C**: 'attribute(\"value\")' no es una sintaxis válida.",
    },
    {
      id: "q41",
      question:
        "Cosmic Innovation has created an HTML form for the purpose of tracking hours on a project. \n\nWhat needs to be added to the following code in order to make sure that the form is only submitted when the 'hours' field contains data?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "if (!hours) { event.stopPropagation; }",
        B: "if (!hours) { event.preventDefault(); }",
        C: "event.stopPropagation();",
        D: "event.preventDefault();",
      },
      code: '<form action="/process-hours.php">\n<label for="hours">Project Hours:</label><br>\n<input type="text" id="hours" name="hours">\n<input type="submit" value="Submit" id="submit-hours">\n</form>\n\n// Event handler\n\ndocument.getElementById(\'submit-hours\').addEventListener(\'click\',function(event){\nlet hours=document.getElementById(\'hours\').value;\n});',
      explanation:
        "La opción correcta es la B: 'if (!hours) { event.preventDefault(); }'. Esto se debe a que 'preventDefault()' detiene la acción predeterminada del botón de envío (submit) si el campo 'hours' está vacío. El código adecuado sería:\n\n```javascript\nif (!hours) {\n  event.preventDefault();\n}\n```\n\nLas otras opciones son incorrectas porque:\n\n- **A**: 'event.stopPropagation;' tiene una sintaxis incorrecta y no detiene la acción predeterminada.\n- **C y D**: 'stopPropagation()' solo evita que el evento se propague, pero no evita la acción predeterminada.",
    },
    {
      id: "q42",
      question:
        "A developer has been refactoring a survey that is used to gather customer data. The survey consists of multiple input elements of type 'checkbox' inside a parent div tag. The event handler is attached to the parent div with the id 'survey'. The value of the checkbox is added to the 'results' array when it is clicked. The head of the department conducting the survey wants to record only the very first checkbox that is clicked in order to determine impulse tendencies. \n\nWhich code statement can be used to accomplish this?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "survey.addEventListener('click', recordResults, {capture: true});",
        B: "survey.addEventListener('click', recordResults, {once: true});",
        C: "survey.addEventListener('click', recordResults, {true});",
        D: "survey.addEventListener('click', recordResults, {capture: 'once'});",
      },
      code: "const results=[];\nconst survey=document.getElementById('survey');\n\nfunction recordResults(evt){\nconst checkbox=evt.target;\nif(checkbox.checked){\nresults.push(checkbox.value);\n}\n};\n\nsurvey.addEventListener('click',recordResults);",
      explanation:
        "La opción correcta es la B: 'survey.addEventListener('click', recordResults, {once: true});'. Esto se debe a que la propiedad 'once: true' en el objeto de opciones del método 'addEventListener' asegura que el manejador de eventos se invoque solo la primera vez y luego se elimine automáticamente.\n\nLas otras opciones son incorrectas:\n\n- **A**: 'capture: true' configura el listener para la fase de captura, pero no limita el evento a una sola invocación.\n- **C**: '{true}' no es una sintaxis válida para un objeto de opciones.\n- **D**: 'capture: \"once\"' tiene una sintaxis incorrecta y mezcla valores que no son compatibles.",
    }
  ];
}
