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
      code: "node --inspect main.js",
      explanation:
        "La opción correcta es la A: 'node --inspect main.js'. Al iniciar una aplicación Node.js, se puede usar la bandera '-inspect' para habilitar el V8 Inspector para depuración. Esto permite que la instancia de Node.js escuche a un cliente de depuración en el host y puerto 127.0.0.1:9229 por defecto. También se le asigna un UUID único.\n\nCuando se utiliza este comando, se devuelve la URL completa que contiene estos tres componentes. Una persona puede navegar a la URL, iniciar el Inspector y hacer clic en un ícono para abrir 'DevTools for Node.js' y depurar la aplicación.\n\nLos otros comandos contienen banderas inválidas (-inspector, -debug y -debugger) y no pueden ser usados para depurar una aplicación Node.js.",
    },
    
  ];
}
