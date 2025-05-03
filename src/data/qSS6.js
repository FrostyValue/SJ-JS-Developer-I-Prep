export default function questions6() {
  return [
    {
      id: "q1",
      question:
        "While developing a server application using node, a developer realizes that she needs to be able to read from and write to a file.\n\nWhich core module should she load in order to accomplish this?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "path",
        B: "http",
        C: "dns",
        D: "fs",
      },
      explanation:
        "La opción correcta es la D: 'fs'. El módulo del sistema de archivos (file system, fs) permite interactuar con el sistema de archivos, como leer de un archivo o escribir en uno.\n\nEl módulo HTTP es necesario para configurar y ejecutar un servidor.\n\nEl módulo path proporciona utilidades para trabajar con rutas de archivos y directorios.\n\nEl módulo DNS habilita la resolución de nombres.",
    },
    {
      id: "q2",
      question:
        "A developer is working on the implementation of a Node.js web server for a student portal. She has written the code below to handle incoming HTTP requests to the '/students' path.\n\nWhich code statement can be used to send the response body containing the student data in JSON format?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "response.writeBody(JSON.stringify(students));",
        B: "response.body(JSON.stringify(students));",
        C: "response.write(JSON.stringify(students));",
        D: "response.create(JSON.stringify(students));",
      },
      code: "const http = require('http');\n// code that connects to the database\nconst server = http.createServer(function(request, response) {\n  if (request.url == '/students') {\n    let students = { };\n    // code that retrieves the student data from the database using the students variable\n    response.writeHead(200, { 'Content-Type': 'application/json' });\n    // missing code\n    response.end();\n  }\n}).listen(8000);",
      explanation:
        "La opción correcta es la C: 'response.write(JSON.stringify(students));'. Al usar Node.js, un servidor puede crearse utilizando el módulo 'http' o 'https'.\n\nEl método createServer() acepta una función de callback como su parámetro, que puede utilizarse para gestionar cualquier solicitud entrante. El 'request' y el 'response' se reciben como parámetros en la función de callback. Información acerca de la solicitud, como la URL, puede obtenerse desde 'request'.\n\nPara enviar una respuesta, se pueden llamar métodos de la clase http.ServerResponse, incluidos writeHead(), write() y end(), en 'response'.\n\nEl método writeHead() se utiliza para enviar los encabezados de la respuesta.\n\nEl método write() se utiliza para enviar un fragmento del cuerpo de la respuesta.\n\nEl método end() se utiliza para señalar al servidor que todos los encabezados y el cuerpo de la respuesta se han enviado. Este método debe llamarse en cada respuesta.\n\nNo existen los métodos create(), body() ni writeBody() para enviar el cuerpo de la respuesta.",
    },
    {
      id: "q3",
      question:
        "A developer of Cosmic Supermarket is working on a Node.js application that will be used for certain server-side operations related to customer management. The main JavaScript file in the application package is 'main.js'. However, one of the routes defined in the application is not working as expected. She would like to debug the application using Chrome DevTools. When starting the application. \n\nWhich command can be used to attach Chrome DevTools to the Node.js process and use the V8 Inspector in the browser for debugging?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "node --inspect main.js",
        B: "node --inspector main.js",
        C: "node --debug main.js",
        D: "node --debugger main.js",
      },
      explanation:
        "La opción correcta es la A: 'node --inspect main.js'. Al iniciar una aplicación Node.js, se puede usar la bandera '-inspect' para habilitar el V8 Inspector para depuración. Esto permite que la instancia de Node.js escuche a un cliente de depuración en el host y puerto 127.0.0.1:9229 por defecto. También se le asigna un UUID único.\n\nCuando se utiliza este comando, se devuelve la URL completa que contiene estos tres componentes. Una persona puede navegar a la URL, iniciar el Inspector y hacer clic en un ícono para abrir 'DevTools for Node.js' y depurar la aplicación.\n\nLos otros comandos contienen banderas inválidas (-inspector, -debug y -debugger) y no pueden ser usados para depurar una aplicación Node.js.",
    },
    {
      id: "q4",
      question:
        "A developer has created a Node.js web server and is trying to replace the query portion of a given web address with 'year=2019'. The following code has been written: \n\nWhich code statement can be added for this use case?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "url.search = 'year=2019';",
        B: "url.queryParams = 'year=2019';",
        C: "url.searchParams = 'year=2019';",
        D: "url.query = 'year=2019';",
      },
      code: "// Value of webAddress: 'https://www.cosmicsolutionswebportal.com:8080/users?year=2020'\nconst url = new URL(webAddress);\n\n// Add code here",
      explanation:
        "La opción correcta es la A: 'url.search = 'year=2019';'. Al usar Node.js, el módulo 'url' proporciona dos APIs para trabajar con URLs: la API legacy URL y una API más reciente que implementa el WHATWG URL Standard. El código en este escenario usa la última.\n\nLas propiedades de un objeto URL pueden ser usadas para obtener y/o establecer las diferentes partes de una URL dada. La propiedad 'search' puede ser usada para obtener y establecer la porción de consulta serializada de la URL.\n\nLa propiedad 'searchParams' puede ser usada para obtener el objeto 'URLSearchParams' que representa los parámetros de consulta de la URL, pero es una propiedad de solo lectura.\n\nAunque el objeto URLSearchParams puede ser usado para mutar la instancia de URL, se recomienda usar la propiedad 'search' para reemplazar la totalidad de los parámetros de consulta. La API WHATWG URL no tiene propiedades llamadas 'query' y 'queryParams'. La API legacy URL permite usar la propiedad 'query' del urlObject.",
    },
    {
      id: "q5",
      question:
        "A team of front-end web developers is tasked to build a feature-rich web application that will be accessed by a large number of concurrent users and allow them to perform different types of requests such as asynchronous operations, messaging services, and more. \n\nWhy would a Node.js implementation be a recommended solution in this scenario?",
      type: "multiple choice",
      correct_options: ["A", "B", "D"],
      number_of_correct_answers: 3,
      options: {
        A: "The development team does not need to learn a new programming language.",
        B: "The developers can take advantage of the available packages in the npm registry.",
        C: "Node.js is much simpler than JavaScript, which would help speed up development.",
        D: "Node.js is capable of handling multiple concurrent requests efficiently.",
        E: "Node.js is exclusively used for building web apps and dominates this sector.",
      },
      explanation:
        "Las opciones correctas son A: 'The development team does not need to learn a new programming language.', B: 'The developers can take advantage of the available packages in the npm registry.', y D: 'Node.js is capable of handling multiple concurrent requests efficiently.'.\n\nJavaScript es el lenguaje de la web y es comúnmente usado en el desarrollo web front-end o lógica de aplicaciones del lado del cliente. Node.js no es un lenguaje de programación. Node.js es un motor de tiempo de ejecución de JavaScript de código abierto impulsado por V8, que se utiliza en Google Chrome y otros navegadores.\n\nEl motor de tiempo de ejecución V8 viene acompañado de bibliotecas para realizar operaciones de I/O y redes de manera eficiente, lo que permite usar JavaScript no solo para el desarrollo de aplicaciones web, sino también para implementar lógica del lado del servidor o construir software de escritorio como Visual Studio Code. Además, Node.js utiliza npm, una base de datos en línea de más de 1 millón de paquetes, que los desarrolladores pueden aprovechar para construir aplicaciones.",
    },
    {
      id: "q6",
      question:
        'A developer wants to evaluate a block of JavaScript code that has been written to test the explicit Boolean coercion of certain values. The minified code is given below. \n\nIf "script" denotes the given code, which Node.js command can be used to evaluate it?',
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: 'node-e “script"',
        B: 'npm -c "script"',
        C: 'npm-r "script"',
        D: 'node-c “script"',
      },
      code: "let arr = new Array(null, undefined, 0, '', 'sample', NaN, 23, -12);\narr.forEach(a => { console.log(a + '=' + Boolean(a)); });",
      explanation:
        "La opción correcta es la A: 'node-e “script\"'. La bandera node -e se usa para evaluar el argumento pasado como JavaScript.\n\nLa bandera node -c verifica la sintaxis del código sin ejecutarlo. Los otros dos comandos de npm no existen.",
    },
    {
      id: "q7",
      question:
        "A developer is building a Node.js app locally. The main JavaScript file of the application package is 'main.js'. A testing framework called 'jest' has been installed as a development dependency in order to execute tests. The package.json file of the app contains the 'scripts' object given below. \n\nWhich two npm commands can be used to run the app and test it?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "npm run, npm run test",
        B: "npm start, npm run test",
        C: "npm run main.js, npm test",
        D: "npm run, npm test",
      },
      code: '"scripts": {\n  "start": "node main.js",\n  "test": "jest"\n}',
      explanation:
        "La opción correcta es la B: 'npm start, npm run test'. El comando 'npm start' se usa para ejecutar un comando especificado en la propiedad 'start' del objeto 'scripts' en el archivo package.json.\n\nEn este caso, el comando 'node main.js' se ha especificado como el valor de la propiedad 'start', y ejecuta el archivo main.js de la aplicación.\n\nEl comando 'npm run <command>' se usa para ejecutar el comando especificado que se ha agregado como propiedad en el objeto 'scripts'. En este caso, se puede usar el comando 'npm run test' en la terminal para ejecutar el comando 'jest' que se ha agregado como valor de la propiedad 'test' en el objeto 'scripts'.\n\nCuando el comando 'npm run' se usa solo sin especificar el comando, lista todos los comandos disponibles. También es posible omitir 'run' del comando y simplemente ingresar 'npm start' o 'npm test'.",
    },
    {
      id: "q8",
      question:
        "A developer has written the code below in a Node.js app. It retrieves data from an external database and stores it in a constant named 'dbContent'. She would like to read a file named 'user.json' and replace the content of another file named 'employee.json' in the application directory based on the data received from the database and the content of 'user.json'. These two operations should be performed synchronously. \n\nWhich two code statements can be added for this use case?",
      type: "multiple choice",
      correct_options: ["B", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "fs.replaceFileSync(file2Path, JSON.stringify(dbContent));",
        B: "const fileContent = fs.readFileSync(file1Path, 'utf-8');",
        C: "fs.writeFileSync(file2Path, JSON.stringify(dbContent));",
        D: "const fileContent = fs.readFile(file1Path, 'utf-8');",
      },
      code: "const fs = require('fs');\nconst helper = require('./helper.js');\nconst file1Path = './user.json';\nconst file2Path = './employee.json';\n\nconst readAndWrite = async () => {\n  const dbContent = await helper.getContent();\n  try {\n    // Add code to read the file named 'user.json'\n    const fileContentObj = JSON.parse(fileContent);\n    dbContent.location = fileContentObj.location;\n    dbContent.salary = fileContentObj.salary;\n\n    // Add code to replace the content of the file named 'employee.json'\n  } catch (error) {\n    console.error(error);\n  }\n};\n\nreadAndWrite();",
      explanation:
        "Las opciones correctas son B: 'const fileContent = fs.readFileSync(file1Path, 'utf-8');' y C: 'fs.writeFileSync(file2Path, JSON.stringify(dbContent));'.\n\nEl método fs.readFileSync() es un método bloqueante en Node.js que permite leer un archivo de forma síncrona. Requiere especificar la ruta del archivo como parámetro. Opcionalmente, se puede especificar la codificación. Si se especifica la codificación, devuelve el contenido del archivo como una cadena.\n\nEl método fs.readFile() es un método no bloqueante que permite leer un archivo de forma asincrónica. Sin embargo, en este caso, el archivo debe ser leído de forma síncrona.\n\nDe manera similar, el método fs.writeFileSync() se usa para escribir datos en el archivo especificado de manera síncrona. Requiere especificar el archivo y los datos que deben escribirse. Reemplaza el contenido existente del archivo. No existe un método llamado fs.replaceFileSync().",
    },
    {
      id: "q11",
      question:
        "A developer wishes to debug the index.js file of an app as shown below. \n\nWhich command can be used with a debugger statement to debug the index.js file in the latest version of Node.js?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "node -i index.js",
        B: "node -d index.js",
        C: "node inspect index.js",
        D: "node -- debug index.js",
      },
      code: "// ------ index.js\nvar http = require('http'),\nexpress = require('express'),\nbodyParser = require('body-parser'),\ncors = require('cors'),\nfs = require('fs');\n\nvar app = express();\nvar pagingNum = 0;\nvar returnArray;\n\napp.use(bodyParser.urlencoded({\n  extended: true\n}),\ncors({\n  origin: true\n}),\nbodyParser.json()\n);\n\nvar server = http.createServer(app);\nserver.listen(process.env.PORT || 5000, function (err) {\n  console.info('listening on http://localhost:5000 | ' + process.env.PORT);\n});",
      explanation:
        "La opción correcta es la C: 'node inspect index.js'. El comando 'node -debug index.js' solo se puede usar en versiones más antiguas de Node. La última versión acepta el comando 'node inspect index.js'. Los otros comandos no existen en la CLI de Node.",
    },
    {
      id: "q12",
      question:
        "A developer would like to use the 'path' module in Node.js to retrieve the directory of a .txt file that exists in the local file system. The code below has been written. \n\nWhich of the following are valid ways of retrieving only the directory of the given file?",
      type: "multiple choice",
      correct_options: ["C", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "path.normalize(file).dir;",
        B: "path.dir(file);",
        C: "path.dirname(file);",
        D: "path.parse(file).dir;",
      },
      code: "const path = require('path');\nconst file = '/users/employees/james.txt';",
      explanation:
        "Las opciones correctas son C: 'path.dirname(file);' y D: 'path.parse(file).dir;'.\n\nEl método path.parse() puede usarse para obtener un objeto cuyas propiedades son dir, root, base, name y ext. La propiedad 'dir' puede accederse para obtener el nombre del directorio, que es '/users/employees'.\n\nEl método path.dirname() también puede usarse para obtener el nombre del directorio de la ruta especificada. El método path.normalize() se usa para calcular la ruta real cuando contiene especificadores relativos (como ., .. , o //). No existe un método llamado path.dir().",
    },
    {
      id: "q13",
      question:
        "A web developer is building a Node.js app and would like to use the built-in debugger to debug the code in the main JavaScript file. She has used the 'node inspect main.js' command to use the debugging client. \n\nWhich commands can be used in the terminal to set a breakpoint on line 3, watch the variable named 'user', and step to the next line of code?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "setBreakpoint(3), watch(user), and step",
        B: "breakpoint(3), watch('user'), and next",
        C: "setBreakpoint(3), watch('user'), and next",
        D: "breakpoint(3), watch(user), and cont",
      },
      explanation:
        "La opción correcta es la C: 'setBreakpoint(3), watch('user'), and next'. Al usar la utilidad de depuración integrada en Node.js, el comando setBreakpoint(line) o sb(line) puede usarse para establecer un punto de interrupción en una línea específica del código. El comando watch('variable') puede usarse para observar la variable especificada.\n\nEl comando next se usa para avanzar a la siguiente línea de código. Por otro lado, el comando cont se utiliza para continuar la ejecución del código, y el comando step se utiliza para ingresar a una llamada de función.",
    },
    {
      id: "q14",
      question:
        "A developer has installed a JavaScript library in a Node.js application. She would like to ensure that the application accepts a version of the library that is greater than or equal to 3.1.0 but less than 4.0.0. For example, versions such as 3.1.1, 3.2.0, and 3.3.1 should be accepted but 4.0.0 and 4.1.0 should not be accepted. \n\nWhich of the following represents the correct ways of using the semantic versioning syntax in the package.json file for this use case?",
      type: "multiple choice",
      correct_options: ["C", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "3.1.x",
        B: "~3.1.0",
        C: "^3.1.0",
        D: ">=3.1.0<4.0.0",
      },
      explanation:
        "Las opciones correctas son C: '^3.1.0' y D: '>=3.1.0<4.0.0'. En el archivo package.json, el símbolo de intercalación (^) puede usarse antes de un número de versión para permitir una actualización con ese número de versión o una versión mayor pero dentro del mismo rango principal. Por ejemplo, ^3.1.0 puede usarse para permitir 3.1.0, 3.1.1, 3.2.0 y 3.3.1, pero no 4.0.0 ya que tiene un rango principal diferente.\n\nLos operadores de comparación (>, <, =, >=, <= o -) también pueden usarse para especificar un rango inclusivo, como mayor o igual a 3.1.0 (>=3.1.0) y menor que 4.0.0 (<4.0.0).\n\nEl símbolo de tilde (~) se utiliza para incluir todo lo que sea mayor o igual a la versión especificada pero en el mismo rango menor. Usar ~3.1.0 permitiría que la aplicación acepte 3.1.0 y 3.1.1, pero no 3.2.0 y 3.3.1 porque no están en el mismo rango menor.\n\nUsar 3.1.x permitiría que la aplicación acepte solo una versión que comience con 3.1, lo que significa que 3.2.0 y 3.3.1 no serían aceptadas.",
    },
    {
      id: "q15",
      question:
        "A developer who is working on a Node.js app is looking for a library available via npm that makes it easier to iterate arrays and test the values of objects used in the code. For example, as shown below, she needs to perform a deep comparison between two objects to determine if they are equivalent. \n\nWhich library should be installed for this use case?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "Axios",
        B: "Express",
        C: "React",
        D: "Lodash",
      },
      code: "const populateData = async (id) => {\n  let response = await getData(id);\n  let data = await response.json();\n  let obj = { role: 'NA Sales Rep', department: 'Sales' };\n\n  // check if the value of 'obj' is equal to the value of 'data.employee'\n  // call other functions\n}",
      explanation:
        "La opción correcta es la D: 'Lodash'. Lodash es una biblioteca que puede instalarse para este caso de uso. Proporciona métodos modulares que facilitan la iteración de arrays, objetos y cadenas, manipular y probar valores, y crear funciones compuestas.\n\nPara este caso de uso en particular, puede realizarse una comparación profunda entre dos objetos utilizando el método _.isEqual() de la biblioteca.\n\n```javascript\nconst isEqual = _.isEqual(obj, data.employee.position);\n```\n\nReact es una biblioteca que se utiliza para construir interfaces de usuario. Axios es un cliente HTTP basado en promesas para el navegador y Node.js. Express es un framework de back-end para Node.js que se utiliza típicamente para manejar solicitudes HTTP entrantes.",
    },
    {
      id: "q16",
      question:
        "A developer is working on a Node.js application. This particular application will use custom events to respond to different states of the application. The code below was written for a custom event. \n\nWhich statement will correctly respond to this custom event?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "events.on(Event, 'started', function(data) {// implementation});",
        B: "appEvents.on('started', function(data) {// implementation};",
        C: "appEvents.on(Event, 'started', function(data) {// implementation});",
        D: "events.on('started', function(data) {// implementation}",
      },
      code: "const events = require('events');\nconst appEvents = new events.EventEmitter();\n\n// Implementation of application\n\n// Send custom event.\nappEvents.emit('started', 'App has started.');",
      explanation:
        "La opción correcta es la B: 'appEvents.on('started', function(data) {// implementation};'. El módulo de eventos de Node.js permite la creación y manejo de eventos personalizados. Una vez que el módulo es requerido, la clase EventEmitter se utiliza para crear y manejar eventos.\n\nEl método 'on' se usa para responder a eventos pasando el string del evento y una función de callback.\n\nEn el código de ejemplo, EventEmitter es instanciado en appEvents. Por lo tanto, appEvents se usa para responder al evento utilizando el método 'on', que recibe el string del evento ('started') y una función de callback.",
    },
    {
      id: "q17",
      question:
        "Which of the following is a core Node.js module that provides methods for debugging and viewing code results?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "stream",
        B: "debug",
        C: "console",
        D: "util",
      },
      explanation:
        "La opción correcta es la C: 'console'. El módulo 'console' es un módulo principal de Node.js que proporciona una consola de depuración similar a la funcionalidad de consola de JavaScript que ofrecen los navegadores web como Google Chrome. Su clase Console proporciona métodos como console.log(), console.error() y console.warn() que pueden usarse para escribir en cualquier stream de Node.js con fines de depuración.\n\nAunque tanto 'stream' como 'util' son módulos principales de Node.js, se utilizan para propósitos diferentes. El módulo 'stream' proporciona una API para implementar la interfaz de stream. El módulo 'util' proporciona varias utilidades que se usan para apoyar las APIs internas de Node.js. No existe un módulo principal llamado 'debug'.",
    },
    {
      id: "q18",
      question:
        "A developer who is working on a Node.js app would like to ensure that using the 'npm install' command does not install any development dependencies in the production mode. She would like to use an environment variable to set the mode to 'production' when the app is ready for production. If it's set to 'production', then the 'npm install' command shouldn't install any development dependencies without the '--dev' flag. \n\nWhich environment variable should be utilized for this use case?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "NODE_E",
        B: "NODE_ENV",
        C: "NODE_ENVIRONMENT",
        D: "NODE_PROD",
      },
      explanation:
        "La opción correcta es la B: 'NODE_ENV'. La variable de entorno llamada NODE_ENV se usa para establecer el modo de la aplicación que determina qué funciones deben habilitarse o deshabilitarse. Si se establece en 'production', usar el comando 'npm install' no instala dependencias de desarrollo sin la bandera '--dev'.\n\nEn Linux o Mac OS, se puede usar el siguiente comando para establecer el valor de la variable en 'production':\n\n```bash\nexport NODE_ENV=production\n```\n\nEn Windows OS, se puede usar el siguiente comando:\n\n```powershell\n$env:NODE_ENV = 'production'\n```\n\nEn el código de Node.js, se puede acceder al valor de la variable utilizando 'process.env.NODE_ENV'.",
    },
    {
      id: "q19",
      question:
        "A JavaScript developer needs to send JSON data to a third-party server using Node.js. The third-party server will access the file at the provided URL, upload it, and then send a response containing the link to the uploaded resource. The following code has been written.\n\nThe new URL received from the server needs to be processed using a function. \n\nWhich code statement is missing in the callback function used by the POST request?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "response.data(urlData => {",
        B: "response.data('body', urlData => {",
        C: "response.on('data', urlData => {",
        D: "response.on(urlData => {",
      },
      code: "const https = require('https');\n\nconst data = JSON.stringify({\n  url: // URL of a file that needs to be uploaded\n});\n\nconst options = {\n  hostname: 'uploadifyservice.com',\n  port: 443,\n  path: '/api/v3',\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json'\n  }\n};\n\nconst request = https.request(options, response => {\n  // missing code\n  processUrl(urlData);\n});\n\nrequest.on('error', error => {\n  console.error(error);\n});\n\nrequest.write(data);\nrequest.end();",
      explanation:
        "La opción correcta es la C: 'response.on('data', urlData => {'. Una solicitud puede enviarse a un servidor usando el método https.request(). Este método acepta una función de callback como parámetro. La función de callback recibe el objeto 'response' como parámetro, que puede accederse para obtener los datos enviados en la respuesta del servidor.\n\nPara acceder a los datos cuando se reciben, se puede usar 'response.on('data', callback)'.",
    },
    {
      id: "q20",
      question:
        "A developer is building an app using Node.js for user management. The 'main.js' file needs to utilize a function in a local module named 'helper.js' and a class named 'User' in 'user.js'. She would like to use the named export syntax to export the function in 'helper.js' and the default export syntax to export the class in 'user.js'. As shown below, the require() function has been used in 'main.js' to use the exported class and function. \n\nWhich code statements should be used to export them using the CommonJS specification?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "helper.js: export getUsername; user.js: module.exports = User;",
        B: "helper.js: export getUsername; user.js: export default User;",
        C: "helper.js: module.exports.getUsername = getUsername; user.js: module.exports = User;",
        D: "helper.js: module.exports.getUsername = getUsername; user.js: export default User;",
      },
      code: "const helper = require('./helper');\nconst User = require('./user.js');\n\nconst userObj = new User('Mark Parker', 'IT Analyst', 70000);\nconst username = helper.getUsername(userObj.name);\n\n// additional code",
      explanation:
        "La opción correcta es la C: 'helper.js: module.exports.getUsername = getUsername; user.js: module.exports = User;'. Aunque Node.js admite módulos ECMAScript, el formato original de módulos de Node.js es CommonJS. El estándar CommonJS para la gestión de módulos requiere el uso del objeto especial 'exports' para exportar funciones, objetos o clases.\n\nPara exportar una función, puede agregarse como una propiedad adicional al objeto 'exports'. Por ejemplo, module.exports.getUsername = getUsername; o exports.getUsername = getUsername; pueden usarse para la exportación nombrada de una función llamada getUsername() en helper.js.\n\nCuando se utiliza la sintaxis de exportación predeterminada, se debe asignar un nuevo valor al objeto 'exports'. Por ejemplo, module.exports = User; puede usarse para la exportación predeterminada de la clase User en user.js.\n\nLos keywords 'export' y 'export default' se usan para exportar características cuando se utiliza el estándar ECMAScript. También requiere el uso de la declaración 'import' en lugar de la función require() para utilizar las características exportadas.",
    },
    {
      id: "q21",
      question:
        "A junior developer of Cosmic Innovation has started working on an application that will be used by the HR users of the company for employee management. Node.js needs to be used for handling server-side operations of the application. She recently created a package.json file in the project directory. She then installed the 'express' framework by using the 'npm i express' command. \n\nWhich of the following are important considerations related to using the package.json file?",
      type: "multiple choice",
      correct_options: ["A", "B", "C"],
      number_of_correct_answers: 3,
      options: {
        A: "The file contains 'express' and its version because the application depends on it.",
        B: "Other developers will be able to install 'express' by using the 'npm install' command.",
        C: "The file must always contain the name and version of the application.",
        D: "The email must be specified when the name of the author is included in the file.",
        E: "Packages that are needed for local development and testing should be listed as 'devPackages'.",
      },
      code: '{\n  "name": "employee-app",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [],\n  "author": "Jane Smith",\n  "license": "ISC",\n  "dependencies": {\n    "express": "^4.17.1"\n  }\n}',
      explanation:
        "Las opciones correctas son A: 'The file contains 'express' and its version because the application depends on it.', B: 'Other developers will be able to install 'express' by using the 'npm install' command.' y C: 'The file must always contain the name and version of the application.'.\n\nEl archivo package.json se agrega a una aplicación para facilitar que otros administren e instalen la aplicación. Siempre debe contener el nombre y la versión de la aplicación. La dirección de correo electrónico no es obligatoria cuando se especifica el autor en el archivo.\n\nEl archivo lista cada paquete del que depende la aplicación bajo 'dependencies'. También incluye la versión de cada paquete. Cualquier paquete que se instale para desarrollo local y pruebas utilizando '-save-dev' se lista como 'devDependencies'. Si otro desarrollador desea instalar la aplicación en su sistema, puede usar el comando 'npm install', que instala automáticamente los paquetes de los que depende la aplicación.",
    },
    {
      id: "q22",
      question:
        "The development team of Cosmic Gemina is building an app that will be used for organizing the inbound and outbound transportation of goods that are used by the company. It has the following development requirements:\n\n1) Create reusable UI components that can be utilized in a dynamic single-page application (SPA).\n2) Easily parse and format dates, such as shipment dates, to display them in the user interface.\n3) Bundle JavaScript modules, images, fonts, and stylesheets for usage in the browser.\n\nWhich Node.js package management solutions can be installed to meet these requirements?",
      type: "multiple choice",
      correct_options: ["A", "D", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "Moment",
        B: "Chalk",
        C: "Express",
        D: "Webpack",
        E: "React",
      },
      explanation:
        "Las opciones correctas son A: 'Moment', D: 'Webpack', y E: 'React'.\n\nReact es una biblioteca que puede instalarse para construir componentes reutilizables de UI que pueden utilizarse para crear una aplicación de una sola página dinámica. Webpack se utiliza para empaquetar archivos JavaScript para su uso en el navegador, pero también puede transformar, empaquetar y empaquetar imágenes, fuentes y hojas de estilo. La biblioteca moment.js puede usarse para analizar, validar, manipular y formatear fechas.\n\nChalk es una biblioteca que se utiliza para el estilo de cadenas en la terminal. Por ejemplo, puede usarse para mostrar mensajes informativos en color en la consola para facilitar la depuración. Express es un framework de back-end para Node.js que se utiliza típicamente para manejar solicitudes HTTP entrantes, como GET y POST.",
    },
    {
      id: "q23",
      question:
        "A developer of Cosmic Forex is creating an API using Node.js which should accept GET requests from users. It should send the current exchange rate associated with the currency pair that is specified by the user in the request endpoint. The 'express' framework is being utilized for this use case. If the endpoint should be '/rates/currencyPair', where 'currencyPair' refers to the currency pair specified by the user (for example, 'usd-eur'). \n\nWhich code statement should be used to set up a route for it?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "app.get('/rates/currencyPair', (req, res) =>",
        B: "app.get('/rates/:currencyPair', (req, res) =>",
        C: "app.get('/rates/:currencyPair', async (req, res) =>",
        D: "app.get('/rates/currencyPair', async (req, res) =>",
      },
      code: "const express = require('express');\n\nconst app = express();\n\n/* Add code here */ {\n  const pair = req.params.currencyPair;\n  try {\n    const rate = await getRate(pair); // Function that gets the rate\n    if (!rate) {\n      return res.status(404).send();\n    }\n  } catch (error) {\n    console.error(error);\n  }\n}\n\napp.listen(8080, () => {\n  console.log('App listening at 8080.');\n});",
      explanation:
        "La opción correcta es la C: 'app.get('/rates/:currencyPair', async (req, res) =>'. El framework 'express' puede instalarse para configurar rutas en Node.js para solicitudes HTTP entrantes. Las rutas se definen usando métodos del objeto 'app'. Por ejemplo, app.get() se utiliza para manejar solicitudes GET entrantes.\n\nSi una ruta incluye uno o más parámetros especificados por el usuario, como 'currencyPair' en '/rates/currencyPair', entonces debe definirse en la ruta utilizando dos puntos (:). Los parámetros capturados de la ruta se pueblan en el objeto 'req.params'. En este caso, la ruta debería ser '/rates/:currencyPair', y el parámetro 'currencyPair' puede ser accedido usando 'req.params.currencyPair'. Dado que la función de callback que recupera el tipo de cambio actual contiene una llamada de función que utiliza la palabra clave 'await', debe definirse como una función 'async'.",
    },
    {
      id: "q24",
      question:
        "A developer has written the following code in a Node.js app to repeatedly execute a function that sends data to an external system after the specified time delay in milliseconds. Two constants named 'time' and 'limit' have been declared and initialized. They should be accessible by any file in the application. However, the code is not working as expected. The console.log() statement does not display any output in the terminal. \n\nHow can the code be modified to make it functional while meeting the requirement?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Use 'limit' instead of 'global.limit' and 'time' instead of 'global.time' to access the variables.",
        B: "Use the 'global' object to declare and initialize 'time' and 'limit'.",
        C: "Use the 'window' object to declare and initialize 'time' and 'limit'.",
        D: "Use the global.get() method to retrieve the value of 'time' and 'limit'.",
      },
      code: "let counter = 0;\n\nconst time = 5000;\nconst limit = 5;\n\nsetInterval(async () => {\n  counter++;\n  if (counter <= global.limit) {\n    const data = await sendLatestData();\n    console.log(data);\n  }\n}, global.time);",
      explanation:
        "La opción correcta es la B: 'Use the 'global' object to declare and initialize 'time' and 'limit'.'. Para declarar una variable global en una aplicación Node.js, la variable puede definirse como una propiedad en el objeto 'global'. Por ejemplo, global.time = 5000 puede usarse para declarar e inicializar una variable global llamada 'time'.\n\nEn Node.js no existe el objeto window. El objeto global almacena métodos y propiedades globales. Cuando se usa el keyword 'let', 'const' o 'var' para declarar una variable, esta se limita al módulo y no se declara como una variable global. En este caso, dado que 'time' y 'limit' deben ser accesibles por cualquier archivo en la aplicación, primero deben declararse como variables globales.\n\nUna variable global puede ser accedida sin usar el keyword 'global'. Por ejemplo, 'time' puede ser usado en lugar de 'global.time', pero este enfoque no puede usarse para acceder a las variables en otros archivos sin declararlas como globales. Además, no existe un método llamado global.get() que pueda usarse para obtener el valor de una variable global.",
    },
    {
      id: "q25",
      question:
        "A developer who is building a Node.js application would like to read data from a file named 'customers.json' and send this data to a remote server. She has written the code below to emit an event when the file has been read. \n\nWhich two approaches can be used to handle the emitted event and invoke a function named 'sendData' that sends the data in the file to the remote server?",
      type: "multiple choice",
      correct_options: ["A", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "eventEmitter.addListener('fileRead', async (data) => {await sendData(data);});",
        B: "eventEmitter.addEventListener('fileRead', async (data) => {await sendData(data);});",
        C: "eventEmitter.on('fileRead', async (data) => {await sendData(data);});",
        D: "eventEmitter.on('fileRead', async (err, data) => {await sendData(data);});",
      },
      code: "const fs = require('fs');\nconst EventEmitter = require('events');\nconst filePath = './customers.json';\nconst eventEmitter = new EventEmitter();\n\n// Add code here\n\nfs.readFile(filePath, 'utf-8', (err, data) => {\n  if (err) {\n    console.error(err);\n    return;\n  }\n  eventEmitter.emit('fileRead', data);\n});",
      explanation:
        "Las opciones correctas son A: 'eventEmitter.addListener('fileRead', async (data) => {await sendData(data);});' y C: 'eventEmitter.on('fileRead', async (data) => {await sendData(data);});'. El método eventEmitter.emit() se usa para emitir un evento. Acepta el nombre del evento y cualquier parámetro adicional como argumentos. En este caso, 'data' se pasa como un argumento cuando el evento 'fileRead' es emitido.\n\nEl método eventEmitter.on() puede usarse para adjuntar un controlador de eventos para manejar el evento especificado. Acepta el nombre del evento y una función de callback como argumentos. La función de callback recibe los argumentos que son pasados al evento. Dado que 'data' es pasado cuando el evento es emitido, la función de callback lo recibe como el único argumento.\n\nOtro método que puede usarse para adjuntar un controlador de eventos es eventEmitter.addListener(). Es un alias para el método eventEmitter.on(). Node.js no tiene un método llamado eventEmitter.addEventListener().",
    },
    {
      id: "q26",
      question:
        "Which of the following commands can be used to install just the necessary Node.js packages to run the code snippet below?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "npm up lodash",
        B: "npm up fs lodash",
        C: "npm i fs lodash",
        D: "npm i lodash",
      },
      code: "const fs = require('fs');\nconst _ = require('lodash');",
      explanation:
        "La opción correcta es la D: 'npm i lodash'. El módulo fs no necesita ser instalado ya que viene incluido en el núcleo de Node.js. El comando 'npm i' instala el paquete especificado. El comando 'npm up' actualiza los paquetes existentes.",
    },
    {
      id: "q27",
      question:
        "A developer has written a simple JavaScript file to be used in node (app.js). However, there seems to be an issue and the developer wants to identify the problem. \n\nWhat two commands can the developer use to enter the debugger and advance to line 2 in the code execution?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "node app.js, debug next",
        B: "node debug app.js, n",
        C: "node app.js, debug",
        D: "node inspect app.js, next",
      },
      explanation:
        "La opción correcta es la D: 'node inspect app.js, next'. Node.js incluye un depurador de línea de comandos. Para acceder al depurador, se debe usar el argumento 'inspect' con el comando 'node', seguido de la ruta al archivo.\n\nUna vez dentro del depurador, hay numerosos comandos disponibles para trabajar con el código. El comando 'next' o 'n' se utiliza para avanzar a la siguiente línea de ejecución del código.",
    },
    {
      id: "q28",
      question: "Which statement parses successfully?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "JSON.parse('foo');",
        B: "JSON.parse(\"foo\");",
        C: "JSON.parse(\"'foo'\");",
        D: "JSON.parse('\"foo\"');"
      },
      explanation: "La opción correcta es la D: 'JSON.parse('\"foo\"');'.\n\n**Explicación detallada:**\n\n1. **Formato JSON válido:** Para que una cadena sea procesada correctamente por `JSON.parse()`, debe estar en un formato JSON válido. Esto significa que las claves y los valores deben estar encerrados entre comillas dobles (`\"`).\n\n2. **Opción D:** En esta opción, la cadena pasada a `JSON.parse()` cumple con el requisito de estar en formato JSON válido, ya que está encerrada dentro de comillas dobles.\n\n3. **Otras opciones:**\n   - A: 'JSON.parse('foo');' utiliza comillas simples y no representa un formato JSON válido.\n   - B: 'JSON.parse(\"foo\");' utiliza comillas dobles pero no contiene un formato JSON válido.\n   - C: 'JSON.parse(\"'foo'\");' incluye comillas simples dentro de comillas dobles, lo que tampoco es un formato JSON válido."
    },
    {
      id: "q29",
      question: "bar.awesome is a popular JavaScript module. The versions published to npm are: 1.2, 1.3.1, 1.3.5, and 1.4.0. Teams at Universal Containers use this module in a number of projects. A particular project has the `package.json` definition below:\n\n{\n  \"name\": \"UC Project Extra\",\n  \"version\": \"0.0.5\",\n  \"dependencies\": {\n    \"bar.awesome\": \"~1.3.0\"\n  }\n}\n\nA developer runs the command `npm install`. Which version of `bar.awesome` is installed?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "1.3.1",
        B: "1.3.5",
        C: "The command fails, because version 1.3.0 is not found",
        D: "1.4.0"
      },
      code: `{
      "name": "UC Project Extra",
      "version": "0.0.5",
      "dependencies": {
        "bar.awesome": "~1.3.0"
      }
    }`,
      explanation: "La opción correcta es la B: '1.3.5'.\n\n**Explicación detallada:**\n\n1. **Interpretación del símbolo `~` en `package.json`:**\n   - El símbolo `~` en una definición de dependencias significa que se permite actualizar el último dígito (minor version) del número de versión.\n   - Por ejemplo, `~1.3.0` incluye todas las versiones que comienzan con `1.3.`, pero no versiones como `1.4.0`.\n\n2. **Versiones disponibles:**\n   - Las versiones publicadas de `bar.awesome` son: 1.2, 1.3.1, 1.3.5, y 1.4.0.\n   - Con la especificación `~1.3.0`, las versiones compatibles son 1.3.1 y 1.3.5.\n\n3. **Resolución de NPM:**\n   - Al ejecutar `npm install`, NPM selecciona automáticamente la última versión compatible dentro del rango permitido.\n   - En este caso, la versión más reciente dentro del rango `~1.3.0` es `1.3.5`.\n\n4. **Opciones incorrectas:**\n   - A: '1.3.1' es incorrecta porque, aunque está en el rango permitido, NPM instalará la última versión (1.3.5).\n   - C: 'The command fails, because version 1.3.0 is not found' es incorrecta porque el símbolo `~` no exige que la versión exacta `1.3.0` esté disponible.\n   - D: '1.4.0' es incorrecta porque `1.4.0` está fuera del rango permitido por `~1.3.0`."
    },
    {
      id: "q30",
      question: "A developer has a web server running with Node.js. The command to start the web server is `node server.js`. The web server started having latency issues. Instead of a one-second turnaround for web requests, the developer now sees a five-second turnaround. \n\nWhich command can the developer run to see what the module is doing during the latency period?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "DEBUG = http, https node server.js",
        B: "NODE_DEBUG = http, https node server.js",
        C: "DEBUG = true node server.js",
        D: "NODE_DEBUG = true node server.js"
      },
      explanation: "La opción correcta es C: 'DEBUG =true node server.js'.\n\n**Explicación detallada:**\n\n1. **Uso de la variable de entorno `DEBUG`:**\n   - En aplicaciones de Node.js, establecer la variable `DEBUG` permite habilitar el registro detallado de depuración en los módulos que admiten esta funcionalidad.\n   - Usar `DEBUG =true` garantiza que el módulo proporcione información más detallada sobre lo que ocurre durante el tiempo de latencia.\n\n2. **Opciones incorrectas:**\n   - A: 'DEBUG = http, https node server.js' es incorrecta porque usar 'http, https' con `DEBUG` no activa automáticamente la depuración en los módulos correspondientes.\n   - B: 'NODE_DEBUG =http, https node server.js' es incorrecta porque, aunque `NODE_DEBUG` permite activar la depuración en determinados módulos, no es compatible con el valor 'http, https' directamente en este contexto.\n   - D: 'NODE_DEBUG =true node server.js' es incorrecta porque `NODE_DEBUG` no funciona con un valor booleano como `true`. Requiere un listado explícito de módulos que admiten esta variable."
    },
    {
      id: "q31",
      question: "Why would a developer specify a `package.json` as a development dependency instead of a dependency?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "It is required by the application in production.",
        B: "It is only needed for local development and testing.",
        C: "Other required packages depend on it for development.",
        D: "It should be bundled when the package is published."
      },
      explanation: "La opción correcta es la B: 'It is only needed for local development and testing.'\n\n**Explicación detallada:**\n\n1. **Dependencias de desarrollo:**\n   - En un proyecto Node.js, una dependencia puede ser especificada como una **dependencia de desarrollo** (development dependency) si solo se utiliza durante el desarrollo y las pruebas locales.\n   - Estas dependencias no son necesarias en el entorno de producción.\n\n2. **Ejemplos típicos de dependencias de desarrollo:**\n   - Herramientas como `eslint` (para análisis de código), `jest` (para pruebas) o `webpack` (para empaquetar código) suelen agregarse como dependencias de desarrollo.\n   - Ejemplo en `package.json`:\n     ```json\n     \"devDependencies\": {\n       \"eslint\": \"^7.0.0\",\n       \"jest\": \"^26.0.0\"\n     }\n     ```\n\n3. **Opciones incorrectas:**\n   - A: 'It is required by the application in production.' es incorrecta porque, si la dependencia es necesaria en producción, debería estar en `dependencies`, no en `devDependencies`.\n   - C: 'Other required packages depend on it for development.' es incorrecta porque las dependencias de desarrollo no suelen ser utilizadas como base para otras dependencias.\n   - D: 'It should be bundled when the package is published.' es incorrecta porque las dependencias de desarrollo generalmente no se incluyen al empaquetar o publicar un paquete para producción."
    },
    {
      id: "q32",
      question: "In the browser, the `window` object is often used to assign variables that require the broadest scope in an application. A Node.js application does not have access to the `window` object by default. \n\nWhich two methods are used to address this?",
      type: "multiple choice",
      correct_options: ["B", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "Use the document object instead of the window object.",
        B: "Assign variables to the global object.",
        C: "Create a new window object in the root file.",
        D: "Assign variables to module.exports and require them as needed."
      },
      explanation: "Las opciones correctas son B: 'Assign variables to the global object.' y D: 'Assign variables to module.exports and require them as needed.'\n\n**Explicación detallada:**\n\n1. **Opción B - Assign variables to the global object:**\n   - En Node.js, el objeto `global` es equivalente al objeto `window` en navegadores. Las variables asignadas al objeto `global` tienen el alcance más amplio en el entorno de Node.js.\n   - Ejemplo:\n     ```javascript\n     global.myVar = 'This is global';\n     console.log(myVar); // Output: 'This is global'\n     ```\n\n2. **Opción D - Assign variables to module.exports and require them as needed:**\n   - Node.js organiza el código en módulos. Exportar variables a través de `module.exports` y luego importarlas con `require` es una forma efectiva de compartir datos y funciones entre diferentes archivos y contextos.\n   - Ejemplo:\n     ```javascript\n     // En file1.js\n     module.exports.myVar = 'Exported variable';\n\n     // En file2.js\n     const { myVar } = require('./file1');\n     console.log(myVar); // Output: 'Exported variable'\n     ```\n\n3. **Opciones incorrectas:**\n   - A: 'Use the document object instead of the window object.' es incorrecta porque el objeto `document` tampoco está disponible en Node.js por defecto; pertenece al DOM en navegadores.\n   - C: 'Create a new window object in the root file.' es incorrecta porque Node.js no proporciona soporte para el objeto `window` ni permite crearlo directamente."
    },
    {
      id: "q33",
      question: "A developer has a web server running with Node.js. The command to start the web server is `node server.js`. The web server started having latency issues. Instead of a one second turnaround for web requests, the developer now sees a five-second turnaround. \n\nWhich command can the web developer run to see what the module is doing during the latency period?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "NODE_DEBUG=true node server.js",
        B: "DEBUG=http, https node server.js",
        C: "NODE_DEBUG=http,https node server.js",
        D: "DEBUG=true node server.js"
      },
      explanation: "La opción correcta es la D: `DEBUG=true node server.js`.\n\n**Explicación detallada:**\n\n1. **Uso del comando `DEBUG`:**\n   - El comando `DEBUG=true` se usa para habilitar el registro de depuración (debugging logs) para ciertos módulos que tienen la capacidad de generar información de depuración basada en este flag.\n\n2. **Opciones incorrectas:**\n   - A: `NODE_DEBUG=true node server.js` no es correcta porque `NODE_DEBUG` generalmente requiere el nombre de un módulo específico (por ejemplo, `NODE_DEBUG=http`), y no se usa con valores booleanos como `true`.\n   - B: `DEBUG=http, https node server.js` es incorrecta porque, aunque `DEBUG` habilita logs detallados, este formato no se aplica aquí correctamente debido al espacio entre los valores y a que no hay garantía de que `http` o `https` estén definidos para el registro.\n   - C: `NODE_DEBUG=http,https node server.js` es incorrecta porque `NODE_DEBUG` es una variable específica que habilita la depuración para módulos específicos del núcleo de Node.js, pero este comando está mal construido.\n\n3. **Conclusión:**\n   - La opción más probable para activar la depuración general y entender lo que está ocurriendo durante los problemas de latencia es `DEBUG=true`."
    },
    {
      id: "q34",
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
      explanation: "La opción correcta es A: `Path`.\n\n**Explicación detallada:**\n\n1. **Path:**\n   - `Path` es un módulo nativo de Node.js que proporciona utilidades para trabajar con rutas de archivos y directorios.\n   - Es uno de los módulos principales incluidos en la instalación base de Node.js y no requiere instalación adicional.\n\n2. **Opciones incorrectas:**\n   - B: `Ios` no es un módulo de Node.js, es más bien un sistema operativo de Apple.\n   - C: `Memory` no es un módulo nativo de Node.js.\n   - D: `Locate` tampoco es un módulo de Node.js."
    },
    {
      id: "q35",
      question: "A developer wants to use a module named universalContainersLib and them call functions from it. How should a developer import every function from the module named `universalContainersLib` and then call the functions `foo` and `bar`?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "import * as lib from '/path/universalContainersLib.js';\nlib.foo();\nlib.bar();",
        B: "import {foo, bar} from '/path/universalContainersLib.js';\nfoo();\nbar();",
        C: "import all from '/path/universalContainersLib.js';\nuniversalContainersLib.foo();\nuniversalContainersLib.bar();",
        D: "import * from '/path/universalContainersLib.js';\nuniversalContainersLib.foo();\nuniversalContainersLib.bar();"
      },
      explanation: "La opción correcta es A: `import * as lib from '/path/universalContainersLib.js'; lib.foo(); lib.bar();`.\n\n**Explicación detallada:**\n\n1. **Importación de todas las funciones:**\n   - La sintaxis `import * as lib` importa todas las exportaciones de un módulo y las agrupa bajo el alias `lib`, lo que permite acceder a las funciones del módulo como `lib.foo()` y `lib.bar()`.\n\n2. **Opciones incorrectas:**\n   - B: La sintaxis `import {foo, bar}` es válida para importar funciones específicas, pero no coincide con la solicitud de importar **todas** las funciones del módulo.\n   - C: `import all` no es una sintaxis válida para importar módulos en JavaScript.\n   - D: `import *` tampoco es una sintaxis válida; el uso correcto es `import * as lib`."
    },
    {
      id: "q36",
      question: "Why would a developer specify a `package.json` as a `devDependency` instead of a `dependency`?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "It is required by the application in production.",
        B: "It is only needed for local development and testing.",
        C: "Other required packages depend on it for development.",
        D: "It should be bundled when the package is published."
      },
      explanation: "La opción correcta es B: `It is only needed for local development and testing`.\n\n**Explicación detallada:**\n\n1. **Diferencia entre `dependency` y `devDependency`:**\n   - `dependencies` son paquetes necesarios para que la aplicación funcione en producción.\n   - `devDependencies` son paquetes que solo se necesitan para el desarrollo local, pruebas, o tareas como generación de código y compilación.\n\n2. **Razón para usar `devDependency`:**\n   - Si un paquete solo es relevante para el entorno de desarrollo y no es necesario para que la aplicación funcione en producción, debe colocarse en la sección `devDependencies` de `package.json`.\n\n3. **Opciones incorrectas:**\n   - A: Este caso sería para `dependencies`, no para `devDependencies`.\n   - C: Aunque los paquetes de desarrollo pueden depender de otros, esto no es exclusivo de `devDependencies`.\n   - D: Los paquetes en `devDependencies` no se incluyen automáticamente en el bundle para producción."
    },
    {
      id: "q37",
      question: "A developer is trying to convince management that their team will benefit from using Node.js for a backend server that they are going to create. The server will be a web server that handles API requests from a website that the team has already built using HTML, CSS, and JavaScript.\n\nWhich three benefits of Node.js can the developer use to persuade their manager?",
      type: "multiple choice",
      correct_options: ["A", "E", "D"],
      number_of_correct_answers: 3,
      options: {
        A: "Installs with its own package manager to install and manage third-party libraries.",
        B: "Ensures stability with one major release every few years.",
        C: "Performs a static analysis on code before execution to look for runtime errors.",
        D: "Executes server-side JavaScript code to avoid learning a new language.",
        E: "Uses non-blocking functionality for performant request handling."
      },
      explanation: "Las respuestas correctas son A, E y D.\n\n**Explicación detallada:**\n\n1. **A:**\n   - Node.js incluye `npm` (Node Package Manager), que permite instalar, actualizar y gestionar fácilmente bibliotecas de terceros, optimizando el flujo de trabajo del desarrollo.\n\n2. **E:**\n   - Node.js utiliza un modelo de E/S no bloqueante basado en eventos, lo que lo hace altamente eficiente y adecuado para manejar múltiples solicitudes simultáneas.\n\n3. **D:**\n   - Con Node.js, los desarrolladores pueden ejecutar código JavaScript en el servidor, evitando la necesidad de aprender un lenguaje adicional para el desarrollo backend.\n\n4. **Opciones incorrectas:**\n   - B: Aunque Node.js recibe actualizaciones periódicas, la frecuencia de las principales versiones no es una ventaja clave.\n   - C: Node.js no realiza análisis estático de código; este comportamiento corresponde a otras herramientas como linters."
    },
    {
      id: "q38",
      question: "In the browser, the `window` object is often used to assign variables that require the broadest scope in an application. Node.js applications do not have access to the `window` object by default.\n\nWhich two methods are used to address this?",
      type: "multiple choice",
      correct_options: ["B", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "Use the document object instead of the window object.",
        B: "Assign variables to the global object.",
        C: "Create a new window object in the root file.",
        D: "Assign variables to module.exports and require them as needed."
      },
      explanation: "Las respuestas correctas son B y D.\n\n**Explicación detallada:**\n\n1. **Uso del objeto global (B):**\n   - En Node.js, el objeto `global` se utiliza para definir variables que estarán disponibles en todo el entorno de ejecución.\n   - Por ejemplo:\n     ```javascript\n     global.someVar = 'value';\n     console.log(global.someVar); // 'value'\n     ```\n\n2. **Uso de `module.exports` (D):**\n   - `module.exports` permite exportar variables, funciones o configuraciones que pueden ser requeridas en otros archivos.\n   - Esto facilita la organización modular del código.\n   - Ejemplo:\n     ```javascript\n     // archivo1.js\n     module.exports = { someVar: 'value' };\n\n     // archivo2.js\n     const { someVar } = require('./archivo1');\n     console.log(someVar); // 'value'\n     ```\n\n3. **Opciones incorrectas:**\n   - A: `document` es un objeto específico del navegador y no está disponible en Node.js.\n   - C: Crear un objeto `window` no es una práctica estándar ni recomendada en Node.js."
    },
    {
      id: "q39",
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
      explanation: "La opción correcta es A: `Path`.\n\n**Explicación detallada:**\n\n1. **Path:**\n   - `Path` es un módulo central de Node.js que proporciona utilidades para trabajar con rutas de archivos y directorios.\n   - Es incluido por defecto en todas las instalaciones de Node.js, lo que lo convierte en parte del núcleo del entorno de ejecución.\n\n2. **Opciones incorrectas:**\n   - B: `Ios` no es un módulo de Node.js, es un sistema operativo de Apple.\n   - C: `Memory` no es un módulo reconocido de Node.js.\n   - D: `Locate` tampoco es un módulo de Node.js."
    },
    {
      id: "q40",
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
      explanation: "La opción correcta es A: `Path`.\n\n**Explicación detallada:**\n\n1. **Path:**\n   - `Path` es un módulo nativo de Node.js que proporciona utilidades para trabajar con rutas de archivos y directorios.\n   - Este módulo es fundamental para muchas tareas relacionadas con la manipulación de rutas en el sistema de archivos y es incluido por defecto en Node.js.\n\n2. **Opciones incorrectas:**\n   - B: `Ios` no es un módulo de Node.js; es más bien un sistema operativo de Apple.\n   - C: `Memory` no está relacionado con los módulos de Node.js.\n   - D: `Locate` tampoco es un módulo de Node.js."
    },
    {
      id: "q41",
      question: "Works in both the browser and Node.js. Which option meets the requirements?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "assert(number % 2 === 0);",
        B: "console.error(number % 2 === 0);",
        C: "console.debug(number % 2 === 0);",
        D: "console.assert(number % 2 === 0);"
      },
      explanation: "La opción correcta es B: `console.error(number % 2 === 0);`.\n\n**Explicación detallada:**\n\n1. **Uso de `console.error`:**\n   - `console.error` funciona en ambos entornos (navegadores y Node.js) y se utiliza para registrar mensajes de error en la consola.\n   - Este método cumple el requisito de ser compatible tanto con el navegador como con Node.js.\n\n2. **Opciones incorrectas:**\n   - A: `assert()` no es un método directamente disponible en el navegador y requiere módulos adicionales en Node.js.\n   - C: Aunque `console.debug` funciona en ambos entornos, está más orientado a mensajes de depuración y no cumple con el propósito de manejar errores específicamente.\n   - D: `console.assert` es válido, pero se utiliza para condicionales que evalúan expresiones verdaderas o falsas, no necesariamente para manejar errores."
    },
    {
      id: "q42",
      question: "A developer is setting up a new Node.js server with a client library that is built using events and callbacks. The library will establish a web socket connection and handle the receipt of messages to the server. The developer also wants to add error logging if a connection fails. Given this info, which code segment shows the correct way to set up a client with two events that listen at execution time?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "ws.connect(() => {\n  console.log('Connected to client');\n}).catch((error) => {\n  console.log('ERROR', error);\n});",
        B: "ws.on('connect', () => {\n  console.log('Connected to client');\n\n  ws.on('error', (error) => {\n    console.log('ERROR', error);\n  });\n});",
        C: "ws.on('connect', () => {\n  console.log('Connected to client');\n});\n\nws.on('error', (error) => {\n  console.log('ERROR', error);\n});",
        D: "try {\n  ws.connect(() => {\n    console.log('Connected to client');\n  });\n} catch(error) {\n  console.log('ERROR', error);\n}"
      },
      explanation: "La opción correcta es C: `ws.on('connect', () => { console.log('Connected to client'); }); ws.on('error', (error) => { console.log('ERROR', error); });`\n\n**Explicación detallada:**\n\n1. **Uso de eventos:**\n   - El método `.on()` se utiliza para registrar eventos en Node.js. En este caso, los eventos `connect` y `error` están siendo registrados correctamente.\n\n2. **Lógica de eventos:**\n   - El evento `connect` muestra un mensaje de éxito cuando se establece la conexión.\n   - El evento `error` muestra un mensaje en caso de que falle la conexión.\n\n3. **Opciones incorrectas:**\n   - A y D: Usan `.connect()` que no es el método adecuado para manejar eventos en esta implementación.\n   - B: Contiene un error de anidamiento incorrecto al registrar los eventos dentro del mismo bloque."
    },
    {
      id: "q43",
      question: "A developer wants to use a module named `universalContainersLib` and then call functions from it. How should a developer import every function from the module and then call the functions `foo` and `bar`?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "import * from '/path/universalContainersLib.js'; universalContainersLi",
        B: "foo(); universalContainersLib.bar();",
        C: "import {foo, bar} from '/path/universalContainersLib.js'; foo(); bar();",
        D: "import all from '/path/universalContainersLib.js'; universalContainersLib.foo(); universalContainersLib.bar();",
        E: "import * as lib from '/path/universalContainersLib.js'; lib.foo(); lib.bar();"
      },
      explanation: "La opción correcta es D: `import all from '/path/universalContainersLib.js'; universalContainersLib.foo(); universalContainersLib.bar();`\n\n**Explicación detallada:**\n\n1. **Importación de módulos:**\n   - La sintaxis correcta para importar todas las funciones de un módulo y llamarlas es como se describe en la opción D.\n\n2. **Opciones incorrectas:**\n   - A: La sintaxis de `import *` requiere un alias como en la opción E.\n   - B y C: Estas opciones no cumplen el requisito de importar todas las funciones del módulo.\n   - E: Aunque `import * as lib` es válido, no es la opción seleccionada en este caso."
    },
    {
      id: "q44",
      question: "A developer wants to use a module named `universalContainersLib` and then call functions from it. How should a developer import every function from the module and then call the functions `foo` and `bar`?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "import * from '/path/universalContainersLib.js'; universalContainersLi",
        B: "foo(); universalContainersLib.bar();",
        C: "import {foo, bar} from '/path/universalContainersLib.js'; foo(); bar();",
        D: "import all from '/path/universalContainersLib.js'; universalContainersLib.foo(); universalContainersLib.bar();",
        E: "import * as lib from '/path/universalContainersLib.js'; lib.foo(); lib.bar();"
      },
      explanation: "La opción correcta es D: `import all from '/path/universalContainersLib.js'; universalContainersLib.foo(); universalContainersLib.bar();`\n\n**Explicación detallada:**\n\n1. **Importación de módulos:**\n   - La sintaxis correcta para importar todas las funciones de un módulo y llamarlas es como se describe en la opción D.\n\n2. **Opciones incorrectas:**\n   - A: La sintaxis de `import *` requiere un alias como en la opción E.\n   - B y C: Estas opciones no cumplen el requisito de importar todas las funciones del módulo.\n   - E: Aunque `import * as lib` es válido, no es la opción seleccionada en este caso."
    },
    {
      id: "q45",
      question: "A developer has an `ErrorHandler` module that contains multiple functions. What kind of export should be leveraged so that multiple functions can be used?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "Named",
        B: "All",
        C: "Multi",
        D: "Default"
      },
      explanation: "La opción correcta es A: `Named`.\n\n**Explicación detallada:**\n\n1. **Uso de `Named exports`:**\n   - Permiten exportar múltiples funciones o variables de un módulo. Los consumidores del módulo pueden importar solo las partes que necesiten.\n   - Ejemplo:\n     ```javascript\n     export function handleError() {\n       // lógica de manejo de errores\n     }\n\n     export function logError() {\n       // lógica para registrar errores\n     }\n     ```\n\n2. **Errores en opciones:**\n   - B y C: `All` y `Multi` no son términos válidos para exportaciones en JavaScript.\n   - D: `Default` solo permite exportar una única función o variable principal de un módulo."
    },
    {
      id: "q46",
      question: "A developer is debugging a web server that uses Node.js. The server hits a runtime error every third request to an important endpoint on the web server. Which command can be run to access DevTools and make sure the breakdown is hit?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "node -i index.js",
        B: "node --inspect-brk index.js",
        C: "node inspect index.js",
        D: "node --inspect index.js"
      },
      explanation: "La opción correcta es D: `node --inspect index.js`.\n\n**Explicación detallada:**\n\n1. **Uso de `--inspect`:**\n   - Este comando habilita la depuración remota en Node.js utilizando Chrome DevTools. Al ejecutarlo, se proporciona una URL que permite conectar el navegador al servidor para depuración.\n\n2. **Opciones incorrectas:**\n   - A: `node -i` ejecuta Node.js en modo interactivo, pero no permite depuración remota.\n   - B: `node --inspect-brk` detendría la ejecución en el primer archivo del programa, pero no garantiza que el error específico sea alcanzado.\n   - C: `node inspect` activa un depurador interno en línea de comandos, pero no utiliza Chrome DevTools."
    },
    {
      id: "q47",
      question: "A developer has a web server running with Node.js. The command to start the web server is `node server.js`. The web server started having latency issues. \n\nWhich command can the web developer run to see what the module is doing during the latency period?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "NODE_DEBUG=true node server.js",
        B: "DEBUG=http, https node server.js",
        C: "NODE_DEBUG=http, https node server.js",
        D: "DEBUG=true node server.js"
      },
      explanation: "La opción correcta es D: `DEBUG=true node server.js`.\n\n**Explicación detallada:**\n\n1. **Uso de `DEBUG`:**\n   - Configurar la variable de entorno `DEBUG=true` permite habilitar la depuración general en el servidor Node.js y muestra información adicional durante la ejecución.\n\n2. **Opciones incorrectas:**\n   - A, B y C: Estas combinaciones de comandos son inválidas o no habilitan la depuración adecuada para resolver problemas de latencia."
    },
    {
      id: "q48",
      question: "A developer publishes a new version of a package with new features that do not break backward compatibility. The previous version number was `1.1.3`. Following semantic versioning format. \n\nWhat should the new package version number be?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "2.0.0",
        B: "1.2.3",
        C: "1.1.4",
        D: "1.2.0"
      },
      explanation: "La opción correcta es D: `1.2.0`.\n\n**Explicación detallada:**\n\n1. **Formato de versionado semántico:**\n   - **Mayor**: Incrementa si hay cambios que rompen la compatibilidad con versiones anteriores.\n   - **Menor**: Incrementa si se agregan nuevas características pero no se rompen las versiones anteriores.\n   - **Patch**: Incrementa si se corrigen errores o mejoras menores.\n\n2. **Opciones:**\n   - A: `2.0.0` es incorrecto, porque no hay cambios importantes.\n   - B y C: `1.2.3` y `1.1.4` no reflejan correctamente una actualización de características."
    },
    {
      id: "q49",
      question: "A developer wants to log any issues that the server has while booting up. Which code logs an error at boot using an event?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "server.catch((server) => { console.log('ERROR', error); });",
        B: "server.error((server) => { console.log('ERROR', error); });",
        C: "server.on('error', (error) => { console.log('ERROR', error); });",
        D: "try { server.start(); } catch (error) { console.log('ERROR', error); }"
      },
      explanation: "La opción correcta es C: `server.on('error', (error) => { console.log('ERROR', error); });`.\n\n**Explicación detallada:**\n\n1. **Uso de `on`:**\n   - La mayoría de las bibliotecas basadas en eventos usan `on` para asociar controladores de eventos. Aquí, se escucha el evento `'error'` y se registra cualquier problema.\n\n2. **Opciones incorrectas:**\n   - A y B: Estas sintaxis son inválidas.\n   - D: Aunque captura excepciones, no es una implementación basada en eventos."
    },
    {
      id: "q50",
      question: "Which code statement below correctly persists an object in local Storage?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "const setLocalStorage = (storageKey, jsObject) => { window.localStorage.setItem(storageKey, JSON.stringify(jsObject)); };",
        B: "const setLocalStorage = (jsObject) => { window.localStorage.connectObject(jsObject); };",
        C: "const setLocalStorage = (jsObject) => { window.localStorage.setItem(jsObject); };",
        D: "const setLocalStorage = (storageKey, jsObject) => { window.localStorage.persist(storageKey, jsObject); };"
      },
      code: "window.localStorage.setItem(storageKey, JSON.stringify(jsObject));",
      explanation: "La opción correcta es A:\n\n**Explicación detallada:**\n\n1. **Uso correcto de localStorage:**\n   - `localStorage.setItem` almacena datos bajo una clave específica como un string.\n   - `JSON.stringify` convierte el objeto JavaScript en una cadena para que pueda ser almacenado correctamente.\n\n2. **Errores en otras opciones:**\n   - Opción B: `connectObject` no es un método válido.\n   - Opción C: Falta la clave de almacenamiento.\n   - Opción D: `persist` no es un método válido en `localStorage`."
    },
    {
      id: "q51",
      question: "Without using any third-party libraries, what should the developer add to index.js to create a secure web server?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "const https = require('https');",
        B: "const server = require('secure-server');",
        C: "const tls = require('tls');",
        D: "const http = require('http');"
      },
      code: "const https = require('https');",
      explanation: "La opción correcta es A:\n\n**Explicación detallada:**\n\n1. **Uso de 'https':**\n   - El módulo `https` es parte de Node.js y permite crear servidores web seguros mediante SSL/TLS.\n\n2. **Errores en otras opciones:**\n   - Opción B: `secure-server` no es un módulo nativo de Node.js.\n   - Opción C: Aunque `tls` maneja conexiones seguras, no crea servidores web.\n   - Opción D: `http` crea un servidor web no seguro."
    },
    {
      id: "q52",
      question: "A developer wants to use a module named universalContainersLib and then call functions from it. \n\nHow should a developer import every function from the module and then call the functions foo and bar?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "import * as lib from '/path/universalContainersLib.js'; lib.foo(); lib.bar();",
        B: "import (foo, bar) from '/path/universalContainersLib.js'; foo(); bar();",
        C: "import all from '/path/universalContainersLib.js'; universalContainersLib.foo(); universalContainersLib.bar();",
        D: "import * from '/path/universalContainersLib.js'; universalContainersLib.foo(); universalContainersLib.bar();"
      },
      explanation: "La opción correcta es A:\n\n**Explicación detallada:**\n\n1. **Uso de `import * as lib`:**\n   - Esto importa todos los métodos y los agrupa bajo el alias `lib`, permitiendo acceder a ellos como `lib.foo()` y `lib.bar()`.\n\n2. **Errores en otras opciones:**\n   - Opción B: Sintaxis incorrecta, no se usa `()` para importar funciones específicas.\n   - Opción C: La palabra clave `all` no es válida para importaciones.\n   - Opción D: `import *` necesita un alias después de la palabra clave `as`."
    },
    {
      id: "q53",
      question: "A team that works on a big project uses npm to deal with project dependencies. A developer added a dependency, but it does not get downloaded when they execute `npm install`. \n\nWhich two reasons could be possible explanations for this?",
      type: "multiple choice",
      correct_options: ["B", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "The developer missed the option --add when adding the dependency.",
        B: "The developer added the dependency as a dev dependency, and NODE_ENV is set to production.",
        C: "The developer missed the option --save when adding the dependency.",
        D: "The developer added the dependency as a dev dependency, and NODE_ENV is set to production."
      },
      explanation: "Las opciones correctas son B y D:\n\n**Explicación detallada:**\n\n1. **Opción B:**\n   - Si el entorno de ejecución (`NODE_ENV`) está configurado en `production`, las dependencias agregadas como dev dependencies no se instalan.\n\n2. **Opción D:**\n   - La misma razón aplica cuando las dependencias dev no se instalan en un entorno de producción.\n\n3. **Errores en otras opciones:**\n   - Opción A: `--add` no es una opción válida para agregar dependencias en npm.\n   - Opción C: Aunque `--save` era obligatorio en versiones anteriores de npm, ahora las dependencias se guardan automáticamente en el archivo `package.json`."
    },
    {
      id: "q54",
      question: "The developer wants to log any issues that the server has while booting up. Which code logs an error at boot with an event?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "Server.catch((server) => {\n  console.log('ERROR', error);\n});",
        B: "Server.error((server) => {\n  console.log('ERROR', error);\n});",
        C: "Server.on('error', (error) => {\n  console.log('ERROR', error);\n});",
        D: "try {\n  server.start();\n} catch(error) {\n  console.log('ERROR', error);\n}"
      },
      code: "server.on('error', (error) => {\n  console.log('ERROR', error);\n});",
      explanation: "La opción correcta es C: **server.on('error', (error) => { console.log('ERROR', error); });**\n\n**Explicación detallada:**\n\n1. **Uso de eventos:**\n   - `on('error')` es el método apropiado para escuchar y manejar eventos de error en Node.js.\n\n2. **Errores en otras opciones:**\n   - Opción A: `catch` no es válido como método de eventos en Node.js.\n   - Opción B: `error` no es un método válido para escuchar eventos.\n   - Opción D: Aunque maneja errores con un bloque `try-catch`, no cumple con la funcionalidad requerida para eventos emitidos por el servidor."
    },
    {
      id: "q55",
      question: "In the browser, the `window` object is often used to assign variables that require the broadest scope in an application. Node.js applications do not have access to the `window` object by default. Which two methods are used to address this?",
      type: "multiple choice",
      correct_options: ["B", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "Use the document object instead of the window object.",
        B: "Assign variables to the global object.",
        C: "Create a new window object in the root file.",
        D: "Assign variables to module.exports and require them as needed."
      },
      explanation: "Las opciones correctas son B y D:\n\n**Explicación detallada:**\n\n1. **Opción B:**\n   - En Node.js, el objeto `global` actúa como un equivalente al `window` en el navegador, permitiendo que las variables asignadas a `global` tengan alcance amplio en la aplicación.\n\n2. **Opción D:**\n   - `module.exports` permite exportar variables y funciones que pueden ser requeridas en diferentes módulos, proporcionando una solución controlada y estructurada.\n\n3. **Errores en otras opciones:**\n   - Opción A: El objeto `document` tampoco está disponible en Node.js.\n   - Opción C: Crear un nuevo objeto `window` no tiene sentido y no es práctico en Node.js."
    },                                                                                          
  ];
};