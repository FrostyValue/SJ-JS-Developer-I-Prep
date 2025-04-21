export default function questions2() {
  return [
    {
      id: "q1",
      question:
        "The code below creates a class and extends that class. When it is invoked, an error is generated. \n\nWhat must be done to fix the error?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "The call to 'super' should be the first line in the constructor.",
        B: "The 'Admin' class should not include a constructor since it extends User.",
        C: "The call to 'super' should not include the 'userName' variable.",
        D: "The 'User' class should extend the 'Admin' class.",
      },
      code: "class User {\n\n     constructor(userName) {\n\n          this.userName = userName;\n\n     }\n}\n\ngetUserName() {\n\n     return this.userName;\n\n}\n\nclass Admin extends User {\n\n     constructor(userName, adminLevel) {\n\n          this.adminLevel = adminLevel;\n\n          super(userName);\n\n     }\n};\n\nlet usr = new Admin('admin123', 3);",
      explanation:
        "En JavaScript, cuando una clase hija (subclase) define un constructor, debe llamar a 'super()' antes de poder utilizar 'this'. En este código, la línea 'this.adminLevel = adminLevel;' aparece antes de la llamada a 'super(userName);', lo cual genera un error. Para solucionarlo, se debe mover la llamada a 'super()' como la primera línea dentro del constructor.",
    },
    {
      id: "q2",
      question:
        "A developer wants to implement a decorator function to be used as a logger on class methods. Below is the decorator function that has been developed, but it does not work as intended. \n\nWhich of the below statements are true?",
      type: "multiple choice",
      correct_options: ["A", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "The logger decorator function receives three arguments as it is being used to decorate a class method.",
        B: "Decorator functions cannot be used to extend class methods.",
        C: "The second argument passed to the decorator function is a reference to the class object.",
        D: "The final argument passed to the decorator function is the descriptor of the method being decorated.",
      },
      code: "function logger(fn) {\n\n     const func = fn;\n\n     fn = function ( ... args) {\n\n          console.log(`Arguments are ${JSON.stringify(args)}')\n\n          func( ... args);\n\n     }\n\n     return fn;\n}\n\n// The logger has been implemented in the class as shown below.\n\nclass User {\n\n     @logger\n\n     getUser(id) {\n\n          // Method implementation\n\n     }\n\n     @logger\n\n     saveUser(user) {\n\n          // Method implementation\n\n     }\n}",
      explanation:
        "Cuando un decorador se aplica a un método de clase, recibe tres argumentos: el prototipo de la clase, el nombre del método y el descriptor del método. Por lo tanto, la opción A es correcta. La opción D también es correcta porque el tercer argumento que recibe el decorador es el descriptor del método, el cual se puede usar para modificar el comportamiento del método decorado. La función 'logger' en el código no tiene la estructura adecuada para usarse como decorador de métodos, ya que no toma estos tres argumentos. Las opciones B y C son incorrectas: los decoradores sí pueden extender métodos, y el segundo argumento no es una referencia al objeto de clase, sino el nombre de la propiedad.",
    },    
    {
      id: "q3",
      question:
        "A developer needs to write a function that can be used to return a total of all the numbers passed to that function. The amount of numbers passed to the function is variable and will seldom be the same. \n\nWhich of the following statements about the 'arguments' object provide the correct information needed to solve this problem?",
      type: "multiple choice",
      correct_options: ["A", "C", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "The 'arguments' object of a function contains all the values passed to the function.",
        B: "The 'arguments' object is an array of all the values passed to the function.",
        C: "The 'arguments' object is an array-like collection of values.",
        D: "The 'arguments' object can store up to 10 values that are passed to the function.",
        E: "The 'arguments' object is only available for non-arrow functions.",
      },
      code: "",
      explanation:
        "La opción A es correcta porque 'arguments' contiene todos los valores que se pasan a una función. La opción C también es cierta ya que 'arguments' es un objeto parecido a un array (array-like), lo que significa que tiene una propiedad 'length' y se puede acceder a sus elementos por índice, pero no tiene métodos como 'map' o 'forEach'. La opción E es correcta porque el objeto 'arguments' solo está disponible en funciones normales, no en funciones flecha (arrow functions). La opción B es incorrecta porque 'arguments' no es un array real. La opción D es falsa, ya que no hay un límite fijo de 10 valores; 'arguments' puede contener cualquier cantidad de argumentos.",
    },    
    {
      id: "q4",
      question:
        "Following the principle of least privilege, a developer has defined a function named 'calculateDate' that uses a local variable named 'newDate' which cannot be accessed outside the function. How can the developer create a privileged function named 'getWeekday' that has access to the local variable and can be invoked outside the 'calculateDate' function? \n\nWhat would be the best approach?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "Define an inner function before the statement that returns the 'newDate' variable.",
        B: "Define an outer function that includes the 'calculateDate' function.",
        C: "Define an outer function that declares a local variable named 'newDate'",
        D: "Define an inner function that gets returned by the 'calculateDate' function.",
      },
      code: "function calculateDate(str) {\n\n     let newDate = new Date(str);\n\n     newDate.setDate(newDate.getDate() + 10);\n\n     return newDate;\n\n}",
      explanation:
        "La opción D es la correcta porque una función interna puede acceder a las variables locales de la función externa que la contiene. Si se devuelve esa función interna, se convierte en una función privilegiada que puede ser invocada desde fuera, pero que aún tiene acceso a las variables privadas de su ámbito original. Esto se conoce como 'closure' en JavaScript. Las otras opciones no aseguran acceso externo controlado o no siguen correctamente el principio de menor privilegio.",
    },
    {
      id: "q5",
      question:
        "If the expected output in the browser JavaScript console is 'Hi, my name is Hootie. I hoot!', what would be the missing code indicated by the JavaScript code comments below? \n\nWhat would you include?",
      type: "multiple choice",
      correct_options: ["A", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "Mascot.call(this, name);",
        B: "let greeting = Mascot.getGreeting.call(this);",
        C: "let greeting = Mascot.prototype.getGreeting.call(this);",
        D: "Mascot.name = name;",
      },
      code: "function Mascot(name) {\n\n     this.name = name;\n\n}\n\nMascot.prototype.getGreeting = function () {\n\n     return `Hi, my name is ${this.name}.`;\n\n}\n\nfunction Owl(name, sound) {\n\n     // missing code here\n\n     this.sound = sound;\n\n}\n\nOwl.prototype = Object.create(Mascot.prototype);\n\nOwl.prototype.getGreeting = function () {\n\n     // missing code here\n\n     return `${greeting} I ${this.sound}!`;\n\n}\n\nconst myOwl = new Owl('Hootie', 'hoot');\n\nconst greeting = myOwl.getGreeting();\n\nconsole.log(greeting);",
      explanation:
        "La opción A es correcta porque `Mascot.call(this, name);` permite que la función constructora 'Owl' herede las propiedades de 'Mascot' y asigne correctamente el nombre. La opción C también es correcta porque `Mascot.prototype.getGreeting.call(this);` permite invocar el método heredado desde 'Mascot' con el contexto del objeto actual, accediendo así al nombre correctamente. La opción B es incorrecta porque intenta acceder al método directamente desde el constructor, lo cual no es válido. La opción D también es incorrecta porque `Mascot.name = name;` no tiene ningún efecto sobre la instancia creada.",
    },    
    {
      id: "q6",
      question:
        "A developer is working with the following complex object. When she invokes 'user1.getUserInfo()', she gets an error at the 'compilePermissions' function. \n\nHow can this issue be solved?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "const compilePermissions () => { return `${this.role} - ${this.getPermissionsLevel()}`; }",
        B: "const compilePermissions = function() { return this.role + ' - ' + this.getPermissionsLevel(); }",
        C: "const compilePermissions = () => return `${this.role} - ${this.getPermissionsLevel()}`; }",
        D: "const compilePermissions = () => { return `${this.role} - ${this.getPermissionsLevel()}`; }",
      },
      code: "let user1 = {\n\n     firstName: 'John',\n\n     lastName: 'Smith',\n\n     role: 'admin',\n\n     level: 10,\n\n     getPermissionsLevel() {\n\n          if (this.role === 'admin') return this.level + 5;\n\n          return this.level;\n\n     },\n\n     getUserInfo() {\n\n          let fullName = this.firstName + ' ' + this.lastName;\n\n          function compilePermissions() {\n\n                    return `${this.role} - ${this.getPermissionsLevel()}`;\n\n         }\n\n          let perms = compilePermissions();\n\n          return fullName + ' + ' + perms;\n\n     }\n\n}",
      explanation:
        "La opción D es la correcta. En una función flecha (arrow function), el valor de 'this' se mantiene dentro del contexto léxico de la función, lo que significa que 'this' se refiere al objeto 'user1' y no se pierde al llamar a 'compilePermissions'. En las otras opciones, 'this' dentro de una función tradicional no se comporta de la misma manera, lo que puede causar que no se acceda correctamente al contexto del objeto 'user1' y genere un error.",
    },
    {
      id: "q7",
      question:
        "A module 'tools.js' contains a greeting function that is exported as shown. A second module contains the code shown below. When the code is run, \n\nwhat will be displayed in the console?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "undefined undefined",
        B: "Welcome User",
        C: "Uncaught ReferenceError: greeting is not defined",
        D: "Welcome undefined",
      },
      code: "// greeting function in tools.js\n\nexport function greeting(name) {\n\n     console.log('Welcome ' + name);\n\n}\n\n// Code contained in second module\n\ngreeting('User');\n\nimport {greeting} from './tools.js';",
      explanation:
        "En los módulos ES, las declaraciones `import` son hoisted al inicio del archivo, por lo que el símbolo importado está disponible durante toda la evaluación del módulo. Aunque en el código la llamada a `greeting('User')` aparece antes de la instrucción `import`, el motor de JavaScript ya ha registrado la importación antes de ejecutar cualquier línea de código. Por lo tanto, la función se puede usar correctamente y se muestra 'Welcome User' en la consola.",
    },    
    {
      id: "q8",
      question:
        "Given the JavaScript code below, \n\nwhich command returns the value of 5?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "process()(15,3);",
        B: "process(3)(15);",
        C: "process(3, 5)();",
        D: "process(15)(3, 0);",
      },
      code: "var process = (num1) => {\n\n     return (num2, num3) => {\n\n          if (typeof num3 == 'undefined') {\n               num3 = 0;\n          }\n\n          return Math.floor(num1 / num2 + num3);\n     }\n}",
      explanation:
        "La función `process` es una función de orden superior que devuelve otra función. En la opción D, `process(15)` devuelve una nueva función que luego se invoca con los argumentos `(3, 0)`, resultando en `Math.floor(15 / 3 + 0)`, que da 5. Las otras opciones resultan en errores o valores distintos. Por ejemplo, la opción A lanza un error por falta de argumentos; la B da como resultado `Math.floor(3 / 15)`, que es 0; y la C da `NaN` porque `num2` es undefined.",
    },
    {
      id: "q9",
      question:
        "A developer has chosen to use recursion in order to determine the factorial of a number. She has written the function below and invoked it. However, she receives a range error when the code is run because the recursion doesn't stop. \n\nWhat can she add to correct this and end the execution when the value of 'num' is 1?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "if (num === 1) { return 1; }",
        B: "if (num === 1) { factorial(); }",
        C: "if (num === 1) { return; }",
        D: "if (num === 1) { return factorial(); }",
      },
      code: "function factorial(num) {\n\n     // Add code here\n\n     return num * factorial(num - 1);\n\n}\n\nconst result = factorial(9);",
      explanation:
        "La opción A es la correcta porque en una función recursiva es importante tener una condición de salida para evitar que la función se ejecute infinitamente. Al agregar 'if (num === 1) { return 1; }', la función retorna 1 cuando 'num' es igual a 1, lo que detiene la recursión y calcula correctamente el factorial. Las otras opciones no implementan correctamente una condición de salida para la recursión.",
    },    
    {
      id: "q10",
      question:
        "A developer has defined the following code that checks if the value of 'price' is greater than 999 and displays a message in the console. If the name is 'Marc' and the price is 999, \n\nwhat will be the output in the console when this code is executed?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "Uncaught ReferenceError: isGreater is not defined",
        B: "Congratulations, Marc! You qualify for a free membership card worth $undefined!",
        C: "Congratulations, undefined! You qualify for a free membership card worth $20!",
        D: "Uncaught ReferenceError: name is not defined",
      },
      code: "// Sample data object added for testing.\n\nconst data = {\n\n     customer: {\n\n          name: 'James'\n\n     },\n\n     sale: {\n\n          price: 500\n\n     }\n\n};\n\n// The name and price are obtained by accessing the properties of an object like the sample shown above.\n\nconst name = data.customer.name;\n\nconst price = data.sale.price;\n\nfunction checkPrice () {\n\n     let isGreater = false;\n\n     if (price > 999) {\n\n          isGreater = true;\n\n     }\n\nreturn isGreater;\n\n}\n\ncheckPrice();\n\nconsole.log(`Congratulations, ${name}! You qualify for a free membership card worth $${isGreater ? '50' : '20'}!');",
      explanation:
        "La opción A es la correcta porque la variable 'isGreater' está definida dentro de la función 'checkPrice' y no es accesible fuera de esa función. El error ocurre cuando se intenta acceder a 'isGreater' en la línea 'console.log', donde JavaScript no encuentra la variable definida, causando un 'ReferenceError'. Las otras opciones son incorrectas porque el problema radica en el alcance de la variable 'isGreater', no en los valores de 'name' o 'price'.",
    },
    {
      id: "q11",
      question:
        "During a weekly developer team meeting, a developer has been asked to present 3 different ways of creating a simple object in JavaScript. She has come up with the following three techniques for creating the same object. She tests the code below and discovers some issues. \n\nIdentify the issues with the current code.",
      type: "multiple choice",
      correct_options: ["A", "C", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "In the second technique, the assignment operator (=) should be used instead of a colon to assign each property value.",
        B: "The third parameter passed to the constructor in the third technique should be 'requireSchedule'.",
        C: "In the third technique, the 'new' keyword should be used prior to invoking the function.",
        D: "The 'Object.create' method in the second technique should not use the 'null' value in the parentheses.",
        E: "The object literal in the first technique should use a comma rather than a semicolon after each property.",
      },
      code: "// Technique 1\n\nlet room1 = {\n\n     name: 'Board Room';\n\n     capacity: 20;\n\n     requireSchedule: true\n\n},\n\n// Technique 2\n\nlet room1 = Object.create(null);\n\nroom1.name: 'Board Room';\n\nroom1.capacity: 20;\n\nroom1.requireSchedule: true;\n\n// Technique 3\n\nfunction Room(name, capacity, rSchedule) {\n\n     this.name = name;\n\n     this.capacity = capacity;\n\n     this.requireSchedule = rSchedule;\n\n}\n\nlet room1 = Room('Board Room', 20, true);",
      explanation:
        "Las respuestas correctas son A, C y E:\n\n- En la técnica 2, el operador de asignación (=) debe usarse en lugar de los dos puntos para asignar los valores a las propiedades.\n- En la técnica 3, la palabra clave 'new' debe usarse antes de invocar la función constructora para crear una nueva instancia del objeto.\n- En la técnica 1, se deben usar comas (no puntos y comas) después de cada propiedad en el objeto literal para separarlas correctamente.",
    },    
    {
      id: "q12",
      question:
        "A developer has written the following code to implement a Student class for a JavaScript project. \n\nWhat will be the outcome when this code is executed in the browser?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "'The adult status of the student with age 21 is true' will be displayed in the console.",
        B: "There will be no errors and no output will be displayed.",
        C: "'The adult status of the student with age 21 is false' will be displayed in the console.",
        D: "An error will be displayed in the console.",
      },
      code: 'class Student {\n\n     constructor(ageLimit, name, age) {\n        this.ageLimit = ageLimit;\n        this.name = name;\n        this.age = age;\n     }\n\n     get adultStatus() {\n         return (this.age > this.ageLimit ? "Adult" : "NOT Adult")\n     }\n\n     static isStudentAdult(age) {\n         let state = false;\n         if (age > this.ageLimit)\n             state = true;\n\n         let statusStatement = `The adult status of the student with age ${age} is ${state}`;\n         console.log(statusStatement);\n         return statusStatement;\n     }\n}\n\nlet student = new Student(18, "John", 32);\nStudent.isStudentAdult(21);',
      explanation:
        "La función `isStudentAdult` es un método estático, lo cual significa que no tiene acceso a las propiedades de instancia como `this.ageLimit`. En este contexto, `this.ageLimit` es `undefined`, por lo que la expresión `age > this.ageLimit` se evalúa como `21 > undefined`, lo cual es `false`. Por eso, `state` permanece en `false` y se imprime: 'The adult status of the student with age 21 is false'.",
    },
    {
      id: "q13",
      question:
        "The line of code below is importing functionality from the file module.js. Using the import statement, \n\nwhich of the following export statements is required to make the import statement workable?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "export { setPerimeter, getPerimeter, squareRoot, determineArea }",
        B: "export default./modules/module.js",
        C: "export * from./modules/module.js",
        D: "export { squareRoot, determineArea }",
      },
      code: "import { squareRoot, determineArea, getPerimeter } from './modules/module.js';",
      explanation:
        "Para que los elementos `squareRoot`, `determineArea` y `getPerimeter` estén disponibles para ser importados, deben ser exportados explícitamente desde el archivo `module.js`. La opción A muestra una exportación que incluye todos los elementos necesarios. La opción D es incorrecta porque omite `getPerimeter`. Las opciones B y C son sintácticamente incorrectas o mal aplicadas para este caso. En resumen, para poder importar un símbolo, este debe haber sido previamente exportado de forma explícita.",
    },    
    {
      id: "q14",
      question:
        "A developer is creating a function that can be used to generate random numbers between 1 and some upper limit. She wants the function to produce a set amount of random numbers and be able to retrieve those numbers at any time. This function doesn't meet the requirement. She realizes she needs either an 'iterator' or a 'generator'. \n\nWhich would be best to implement and why?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "An iterator should be used since only an iterator can be used for this type of application.",
        B: "An iterator should be used since iterators are easier to work with than generators.",
        C: "A generator should be used since the randomNum function can be converted quite easily with function* and the 'yield' keyword.",
        D: "A generator should be used since only a generator can be used for this type of application.",
      },
      code: "function randomNum(upperLimit, howMany) {\n\n     let cnt = 1;\n\n     while (cnt <= howMany) {\n\n          let rand = Math.floor(Math.random() * upperLimit) + 1;\n\n          cnt++;\n\n          return rand;\n\n   };\n\n};\n\nrandomNum(100, 6);",
      explanation:
        "La opción correcta es la C. Un generador es la opción más adecuada para esta tarea porque permite la generación de una secuencia de valores mediante la palabra clave 'yield'. En este caso, la función 'randomNum' puede ser fácilmente convertida en un generador con 'function*' y 'yield', lo que permite que el estado de la función se mantenga entre invocaciones y se puedan obtener múltiples valores sin tener que ejecutar la función completamente en un solo paso.",
    },
    {
      id: "q15",
      question:
        "To help manage a scheduling app, a developer is setting up object inheritance for different rooms. She then views the contents of this object in the console and notices a problem. The prototype is set to the default Object and doesn't include the 'availToSchedule' function. \n\nShe needs to add code before creating a 'boardRoom' object to correct this. Which option provides the most optimal solution?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "boardRoom.prototype = Object.create(Rooms.prototype);     Object.defineProperty(boardRoom.prototype, 'constructor', { value: boardRoom, enumerable: false, writable: true });",
        B: "MeetingRooms.prototype = Object.create(Rooms.prototype);",
        C: "MeetingRooms.prototype = Object.create(Rooms.prototype);     Object.defineProperty(MeetingRooms.prototype, 'constructor', { value: MeetingRooms, enumerable: false, writable: true });",
        D: "boardRoom.prototype = Object.create(Rooms.prototype);",
      },
      code: "function Rooms (nameStr, mRoomBool, scheduleBool) {\n\n     this.name = nameStr;\n\n     this.meetingRoom = mRoomBool;\n\n     this.canSchedule = scheduleBool;\n\n};\n\nRooms.prototype.availToSchedule = function() {\n\n     return this.canSchedule;\n\n}\n\nfunction MeetingRooms(nameStr, scheduleBool, capacityNum) {\n\n     Rooms.call(this, nameStr, true, scheduleBool);\n\n     this.capacity = capacityNum;\n\n}\n\n// To test the inheritance, she creates an object for the board room.\n\n// Add code here\n\nlet boardRoom = new MeetingRooms ('Board Room', true, 20);",
      explanation:
        "La opción correcta es la C. Es necesario establecer la cadena de prototipos correctamente para que el objeto 'MeetingRooms' herede de 'Rooms'. La opción C hace esto de manera óptima al crear el prototipo de 'MeetingRooms' basado en 'Rooms.prototype', y luego asegura que el constructor de 'MeetingRooms' esté bien configurado para que no apunte a 'Object'. Esto garantiza que las instancias de 'MeetingRooms' puedan acceder al método 'availToSchedule' de 'Rooms'.",
    },    
    {
      id: "q16",
      question:
        "A developer wants to implement cache functionality on his website to reduce the number of unwanted HTTP requests to the server. \n\nA decorator has been developed to achieve this. Which of the following code snippets implements the created decorator function correctly?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "const findStudentRecord = retrieveStudentRecord(cachedStudentRecordRetrievalDecorator()); findStudentRecord(10).then(record => console.log(record));",
        B: "const findStudentRecord = cachedStudentRecordRetrievalDecorator(retrieveStudentRecord); findStudentRecord(10).then(record => console.log(record));",
        C: "const findStudentRecord = retrieveStudentRecord(cachedStudentRecordRetrievalDecorator); findStudentRecord(10).then(record => console.log(record));",
        D: "const findStudentRecord = cachedStudentRecordRetrievalDecorator(retrieveStudentRecord()); findStudentRecord(10).then(record => console.log(record));",
      },
      explanation:
        "La opción B es correcta porque pasa correctamente la función 'retrieveStudentRecord' al decorador 'cachedStudentRecordRetrievalDecorator', lo que permite que el decorador implemente la lógica de caché y luego se ejecute la función decorada. Las otras opciones tienen errores de sintaxis o invocación incorrecta.",
    },
    {
      id: "q17",
      question:
        "A developer is working on a welcome message for the company website. This message is controlled by two objects. The developer needs to use the substitute greeting. \n\nWhat code can be used to modify the retrieval of the greeting in the 'showGreeting' function?",
      type: "multiple choice",
      correct_options: ["B", "D", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "const greet = greeting.getGreeting.bind(substituteGreeting, theTime);",
        B: "const greet = greeting.getGreeting.bind(substituteGreeting, theTime) ();",
        C: "const greet = greeting.getGreeting.apply(substituteGreeting, theTime);",
        D: "const greet = greeting.getGreeting.apply(substituteGreeting, [theTime]);",
        E: "const greet = greeting.getGreeting.call(substituteGreeting, theTime);",
      },
      code: "let greeting = {\n     morningGreet: \"Welcome, and Good Morning!\",\n     eveningGreet: \"Welcome, and Good Evening!\",\n     getGreeting(gTime) {\n          if (gTime === 'morningGreet' || gTime === 'eveningGreet') {\n               return this[gTime];\n          }\n          return \"Welcome!\";\n     }\n};\n\nlet substituteGreeting = {\n     morningGreet: 'We apologize that our site is down this morning.',\n     eveningGreet: \"We apologize that our site is down this evening.\"\n};\n\nfunction showGreeting(theTime) {\n     const greet = greeting.getGreeting(theTime); // Replace this line of code to use substituteGreeting\n     document.getElementById('greet').innerHTML = greet;\n}",
      explanation:
        "Para usar el objeto `substituteGreeting` como el contexto (`this`) dentro de la función `getGreeting`, se pueden utilizar los métodos `call`, `apply` o `bind`. \n\n- `call` llama directamente a la función con un nuevo `this` y una lista de argumentos.\n- `apply` hace lo mismo pero con un array de argumentos.\n- `bind` devuelve una nueva función con `this` ya vinculado, y se debe invocar manualmente, como se hace en la opción B.\n\nPor eso, las respuestas correctas son B, D y E.",
    },    
    {
      id: "q18",
      question:
        "A developer has completed a function named 'retrieveScores' in the tools module (tools.js). She now needs to export that function and import it into 'main.js'. Both JavaScript files are located in the same directory. \n\nWhich of the following shows the correct way to export the function and then import it into 'main.js'?",
      type: "multiple choice",
      correct_options: ["C", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "EXPORT: export function retrieveScores() {/* Code for retrieving scores */};     IMPORT: import {retrieveScores};",
        B: "EXPORT: export retrieveScores() {/* Code for retrieving scores */};     IMPORT: import retrieveScores from './tools.js';",
        C: "EXPORT: export function retrieveScores() {/* Code for retrieving scores */};     IMPORT: import {retrieveScores} from './tools.js';",
        D: "EXPORT: export default function retrieveScores() {/* Code for retrieving scores */};     IMPORT: import rScores from './tools.js';",
      },
      explanation:
        "Las opciones C y D son correctas porque la opción C utiliza una exportación nombrada, y la opción D utiliza una exportación por defecto. Ambas permiten importar la función correctamente en el archivo 'main.js'. Las otras opciones tienen errores en la sintaxis de exportación o importación.",
    },
    {
      id: "q19",
      question:
        "A developer is gathering data from an API for a project she is working on. The API limits the number of records sent back as a part of the response to 50. However, the response contains a new URL as the value of the '_next' property if additional records are available. \n\nThe developer has set up a function that is successfully retrieving 50 records. She now needs to add code that will loop through and retrieve records until they have all been retrieved. Which code solves this problem?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "if (response._next) { retrieveData(); }",
        B: "if (response._next) { retrieveData(response._next); }",
        C: "while (response._next) { retrieveData(response._next); }",
        D: "if (response._next) { while(response._next){ retrieveData(); } }",
      },
      explanation:
        "La opción B es la correcta. Se debe verificar si existe un valor en 'response._next' y, en ese caso, llamar a 'retrieveData' pasando la nueva URL para seguir recuperando los registros. Las demás opciones contienen errores de lógica o sintaxis.",
    },    
    {
      id: "q20",
      question:
        "A developer is working to debug some code used on the company website. She has identified that the problem is associated with a 'connections' object. \n\nIn order to figure out what is going on, she needs to display the properties and values of the 'connections' object at a particular time in the program. What temporary code could be used to display the properties and values of the object?",
      type: "multiple choice",
      correct_options: ["B", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "for (let i of connections) { console.log('${i} -> ${connections[i]}'); }",
        B: "console.log(Object.entries(connections));",
        C: "console.log(Object.values(connections));",
        D: "for (let i in connections) { console.log(`${i} -> ${connections[i]}`); }",
      },
      explanation:
        "Las opciones B y D son correctas. La opción B utiliza 'Object.entries()' para obtener un array de pares clave-valor, lo que facilita la visualización de las propiedades y valores del objeto. La opción D utiliza un bucle 'for...in' para recorrer las propiedades del objeto y mostrar su clave y valor. La opción A tiene un error de sintaxis y la opción C solo muestra los valores del objeto sin las claves.",
    },
    {
      id: "q21",
      question:
        "Which options can be used to iterate through the properties of the object below? \n\nWhat are the valid methods?",
      type: "multiple choice",
      correct_options: ["A", "D", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "for (let prop of Object.keys(user)) { console.log(user[prop]); }",
        B: "for (let prop of user) { console.log(prop[i]); }",
        C: "user.forEach((prop) => { console.log(user[prop]); });",
        D: "for (let prop of Object.getOwnPropertyNames(user)) { console.log(user[prop]); }",
        E: "for (let prop in user) { console.log(user[prop]); }",
      },
      explanation:
        "Las opciones A, D y E son correctas. La opción A utiliza 'Object.keys()' para obtener las claves del objeto, la opción D usa 'Object.getOwnPropertyNames()' para obtener las propiedades directas del objeto, y la opción E usa el bucle 'for...in' para recorrer las propiedades del objeto. Las opciones B y C tienen errores de sintaxis o de uso de métodos no aplicables.",
    },    
    {
      id: "q22",
      question:
        "Determine the output in the browser JavaScript console when the code below is executed. \n\nWhat will be displayed?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "pet meows! bot meows!",
        B: "pet beeps! bot woofs!",
        C: "pet woofs! bot meows!",
        D: "pet meows! bot beeps!",
      },
      explanation:
        "El método 'speak()' de la clase 'Pet' es sobrescrito por la propiedad de 'Pet.prototype.speak'. Sin embargo, la clase hija 'Bot' sobrescribe 'speak()' nuevamente, lo que da como resultado que 'myPet.speak()' devuelva 'pet meows!' y 'myBot.speak()' devuelva 'bot beeps!'.",
    },
    {
      id: "q23",
      question:
        "A developer is working on an online application. Whenever the user starts the application, certain settings are established by the user and stored in the settings object. \n\nOnce these settings are established, they shouldn't be changed by any outside code. What function can the developer use in order to keep the settings object from changing?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Object.seal(settings);",
        B: "Object.freeze(settings);",
        C: "Object.create(settings);",
        D: "Object.preventExtensions(settings);",
      },
      explanation:
        "El método 'Object.freeze()' hace que un objeto sea inmutable, lo que significa que no se pueden agregar, eliminar ni modificar las propiedades del objeto, lo cual es lo que se necesita en este caso para evitar que los ajustes sean cambiados.",
    },    
    {
      id: "q24",
      question:
        "When the code below is run, \n\nwhich value will output to the console?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "32",
        B: "62",
        C: "30",
        D: "28",
      },
      code: "let array = [1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1];\n\nlet sum = 0;\n\nfor (let i = 0; i < array.length; i++) {\n     let val = array[i] % 2;\n     if (val !== 0) {\n          continue;\n     }\n     sum += array[i];\n     if (sum > 26) {\n          break;\n     }\n}\n\nconsole.log(sum);",
      explanation:
        "El código recorre un arreglo y suma únicamente los valores pares utilizando el operador módulo (`%`). Si un número es impar, la instrucción `continue` salta esa iteración. Si el número es par, se suma a `sum`. Cuando `sum` supera 26, el bucle se detiene con `break`. Los valores pares acumulados antes de que esto suceda suman exactamente 30 (2 + 4 + 6 + 8 + 6 + 4). Por tanto, la consola imprimirá `30`, siendo la respuesta correcta la opción C.",
    },
    {
      id: "q25",
      question:
        "A developer is working on a site that allows users to interact with and manage client data. Occasionally, a user may want to normalize the data. A 'normalize data' button is available at the bottom of the screen with this handler. The 'normalizeTheData' function is contained in the 'utilities/dataUtil.js' module. \n\nThis module has been loaded so that the 'normalizeTheData' function is available. However, this module is quite large and the developer would like to change how it is loaded since the user interacts with this feature only occasionally. What code should be placed inside the handler in order to load this module only when needed?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "import('./utilities/dataUtil.js').then((module) => module.normalizeTheData());",
        B: "import('normalizeTheData', './utilities/dataUtil.js'); normalizeTheData();",
        C: "import {normalizeTheData} from './utilities/dataUtil.js'; normalizeTheData();",
        D: "import('normalizeTheData', './utilities/dataUtil.js').then((module) => normalizeTheData());",
      },
      explanation:
        "La opción A es correcta porque usa la carga dinámica de módulos, lo que asegura que el módulo 'dataUtil.js' solo se cargue cuando se haga clic en el botón. La opción B no es válida por la sintaxis incorrecta, y la opción C carga el módulo inmediatamente, lo que no satisface la necesidad de cargarlo solo cuando sea necesario.",
    },
    {
      id: "q26",
      question:
        "A developer wants to use a decorator to extend the behavior of a User class that has been developed already. The decorator should add a user Type to the User Class using the prototype. \n\nBelow is the newly developed decorator function, but it does not work as expected. Which of the following statements are true?",
      type: "multiple choice",
      correct_options: ["A", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "The decorator function receives only one argument as it is being used as a class decorator.",
        B: "The prototype should be accessed via the second argument of the decorator function.",
        C: "The prototype should be accessed via the first argument of the decorator function.",
        D: "It is only possible to access the class constructor via the class decorator.",
      },
      code: "function addUserType(target, name, descriptor) {\n\n     descriptor.value.prototype.userType = 'INTERNAL';\n\n     return descriptor;\n}\n\n\n//Below is the User Class.\n\n@addUserType\n\nclass User {\n\n     constructor(name, age, gender) {\n\n          this.name = name;\n\n          this.age = age;\n\n          this.gender = gender;\n\n   }\n\n}",
      explanation:
        "Cuando se aplica un decorador a una clase, este solo recibe un argumento: el constructor de la clase (el `target`). En este caso, se está usando la sintaxis de decorador como si fuera para un método, pasando tres parámetros, lo cual es incorrecto para un decorador de clase. Para modificar el prototipo correctamente, se debe acceder al `target.prototype`, donde `target` es el constructor de la clase. Por tanto, las opciones A y C son correctas.",
    },
    {
      id: "q27",
      question:
        "Jane wants to implement error handling in her functions with the help of a decorator. Her application has two functions to get the data from the server and update it. The function declaration of each function is given below. The code in the functions is working perfectly. After implementing the decorator function, the server returns a 400 Bad Request error. \n\nShe realizes that the issue is with her decorator. How can the decorator function be fixed?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "Since the' errorHandlingDecorator' function on line 1 is not async, the keyword await cannot be used on the function fn().",
        B: "Not enough information is available to find and fix the issue.",
        C: "The 'updateNote' function expects two arguments, but only one argument (args) is passed.",
        D: "Use the spread operator ( ... ) to pass the parameters to fn() on line 4.",
      },
      explanation:
        "La opción D es correcta porque en el decorador se recibe un número indefinido de argumentos mediante `...args`, pero al llamar a `fn()` no se pasan esos argumentos. La línea `await fn();` debería ser `await fn(...args);` para pasar correctamente todos los argumentos recibidos a la función decorada.",
    },    
    {
      id: "q28",
      question:
        "The following code contains a function that receives the name of a customer as its input parameter, invokes a helper function to get the current day of the week, and returns a message containing both. \n\nWhich of the following statements are true regarding the execution of the two functions?",
      type: "multiple choice",
      correct_options: ["A", "B"],
      number_of_correct_answers: 2,
      options: {
        A: "Within the createCustomerMessage() function, the 'message' variable is not assigned to a value until all the lines in the getCurrentDay() function have been executed.",
        B: "When the getCurrentDay() function is encountered, it is added to the 'call stack', where it stays until its execution has been completed.",
        C: "The execution of the console.log() statement does not wait for the execution of the createCustomerMessage() function to finish.",
        D: "The JavaScript interpreter completes the execution of the createCustomerMessage () function before executing the getCurrentDay() function.",
      },
      explanation:
        "Las opciones A y B son correctas. En A, se indica correctamente que la variable 'message' no puede asignarse hasta que 'getCurrentDay()' haya devuelto un valor. En B, se describe el comportamiento de la pila de llamadas (call stack), donde se ejecuta completamente la función 'getCurrentDay()' antes de regresar el control a 'createCustomerMessage'. Las opciones C y D son incorrectas porque malinterpretan el flujo de ejecución síncrono de JavaScript.",
    },
    {
      id: "q29",
      question:
        "A development team wants to migrate its legacy JavaScript code to a newer ES6 code. The first step in this migration is to identify and convert code containing prototype-based inheritance into classes. \n\nWilliam has been given the code snippet below for conversion into a class. Which of the following statements regarding the conversion of the given code is false?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "'latitude' and 'longitude' must be class fields.",
        B: "The name of the newly created class should be 'Location'.",
        C: "'startMoving' and 'stopMoving' should be two methods in the newly created class.",
        D: "The constructor of the class should receive 'latitude' and 'longitude' as parameters",
      },
      explanation:
        "La opción A es falsa. Aunque se puede definir 'latitude' y 'longitude' como campos de clase explícitos, no es obligatorio hacerlo en ES6. Se pueden definir simplemente dentro del constructor como propiedades del objeto usando `this.latitude` y `this.longitude`. Las otras opciones son correctas: B mantiene el nombre original, C convierte los métodos del prototipo en métodos de clase, y D conserva los mismos parámetros en el constructor.",
    },
    {
      id: "q30",
      question:
        "A developer is working on a meeting room reservation system. Each meeting room in the company is represented using a JavaScript object. Following a meeting, feedback can be provided on the state of the room. The feedback is attached to the 'feedback' property. \n\nWhen the feedback is resolved, it needs to be removed using the function below. The problem with the function is that the property is not removed from the object. What statement can be used to remove the property?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "obj.feedback = undefined;",
        B: 'obj.feedback =";',
        C: "delete feedback;",
        D: "delete obj.feedback;",
      },
      explanation:
        "La opción D es correcta. La instrucción `delete obj.feedback;` elimina completamente la propiedad 'feedback' del objeto. Las otras opciones no eliminan la propiedad: A la establece como `undefined`, B intenta asignar una cadena vacía con un error de sintaxis, y C intenta eliminar una variable no definida en ese contexto.",
    },
    {
      id: "q31",
      question:
        "A developer working on an online quiz has imported two functions and a variable named 'questionCnt' from a module named 'question.js'. \n\nHowever, she receives an error when incrementing 'questionCnt'. What is causing the error and what code should she use?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "Changing the variable requires the use of a function instead of a statement. A function needs to be created and invoked.",
        B: "In order to update a module variable, it must be imported as a default. This code should be used: import {questionCnt as default, updateQuestionCount, updateQuestions} from './questions.js';",
        C: "A variable cannot be changed outside a module. The imported function named 'updateQuestionCount' should be used to change the value.",
        D: "The increment operator cannot be used on imported variables. This code should be used: questionCnt = questionCnt + 1;",
      },
      explanation:
        "La opción C es correcta porque las variables importadas son de solo lectura, y no se pueden modificar directamente. Para cambiar el valor de 'questionCnt', debe utilizarse una función como 'updateQuestionCount' que realice el cambio en el módulo original.",
    },        
    {
      id: "q32",
      question:
        "A developer is working on a function that will merge user objects from two different systems. The function is a good start, but there are two problems the developer would like to fix. \n\nFirst, when the objects are combined, she would like any properties in the 'newObj' to overwrite the same properties in the 'oldObj' if they exist in both. Also, the combined objects shouldn't be child objects. Moreover, when the code checks for the 'createdDate' property, she wants to make sure that the property is not inherited. Which code changes will meet the objectives of this function?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "FIRST LINE: let combinedObj = oldObj.assign(newObj); SECOND LINE: if (!combinedObj.ownProperty('createdDate')) {",
        B: "FIRST LINE: let combinedObj = Object.assign({}, oldObj, newObj); SECOND LINE: if (!combinedObj.hasOwnProperty('createdDate')) {",
        C: "FIRST LINE: let combinedObj = oldObj.assign(newObj); SECOND LINE: if (!combinedObj.hasOwnProperty('createdDate')) {",
        D: "FIRST LINE: let combinedObj = oldObj + newObj; SECOND LINE: if (!combinedObj.ownProperty('createdDate')) {",
      },
      explanation:
        "La opción B es correcta porque `Object.assign({}, oldObj, newObj)` crea un nuevo objeto con las propiedades de ambos objetos, y en caso de conflicto, las propiedades de `newObj` sobrescriben las de `oldObj`. Además, `hasOwnProperty` asegura que la propiedad 'createdDate' no sea heredada.",
    },
    {
      id: "q33",
      question:
        "A developer employed by an online shopping platform wants to make all of his class methods read-only to avoid any tampering. \n\nA decorator function named 'readonly' has been developed for this purpose. The class methods are given below. Which property descriptor(s) can be used for making the class methods read-only?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "Readonly, Writable",
        B: "Readonly",
        C: "Configurable",
        D: "Writable",
      },
      code: "class Transaction {\n\n     @readonly\n\n     getTransaction(id) {\n\n          //Method implementation\n\n     }\n\n     @readonly\n\n     saveTransaction(transaction) {\n\n          //Method implementation\n\n     }\n\n}",
      explanation:
        "El comportamiento de solo lectura de una propiedad en JavaScript se controla exclusivamente con el descriptor `writable`. Si `writable` se establece en `false`, la propiedad no podrá ser modificada. Este es el enfoque correcto para hacer métodos de clase inmutables. Por tanto, la opción correcta es la D. Ejemplo:\n\n```js\nfunction readonly(target, name, descriptor) {\n  descriptor.writable = false;\n  return descriptor;\n}\n```",
    },
    {
      id: "q34",
      question:
        "Adam has developed two decorator functions to cache data and handle exceptions. They have been used in the Cart class as shown below. \n\nThe 'cacheData' decorator function will help cache the data used in the getCart method while the handleException decorator will help handle exceptions. Adam found out that the 'cacheData' decorator can also throw an exception that needs to be handled by the handleException decorator. Which of the options below are true regarding the desired outcome?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Multiple decorators cannot be used on a class method.",
        B: "Line 2 should have the 'cacheData' decorator and line 3 should have the 'handleException' decorator to get the desired outcome.",
        C: "Only one of the decorator functions will be evaluated, so the desired outcome cannot be achieved.",
        D: "The above implementation of the decorators will result in the desired outcome.",
      },
      explanation:
        "La opción B es correcta. Los decoradores se aplican en el orden en que se colocan, por lo que 'cacheData' debe ir antes que 'handleException'. De lo contrario, las excepciones generadas por el decorador 'cacheData' no serán manejadas correctamente.",
    },
    {
      id: "q35",
      question:
        "A developer is working on an online application that provides equivalent keystrokes for certain functionality. \n\nIn order to implement this, the keystrokes are handled by a named function called 'handleKeyPress'. But she would like to add the option to remove this feature. Which code statement can be used to remove the given event listener?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "document.removeEventListener('keypress', handleKeyPress, true);",
        B: "removeEventListener('keypress', handleKeyPress, true);",
        C: "document.removeEventListener('keypress', handleKeyPress, false);",
        D: "window.removeEventListener('keypress', handleKeyPress, false);",
      },
      explanation:
        "La opción C es correcta. Para eliminar el listener del evento 'keypress', se debe llamar a 'removeEventListener' en el objeto al que se le añadió el evento (en este caso, 'document'), con los mismos parámetros que se usaron al agregarlo. En este caso, el valor 'false' indica que se debe usar la fase de burbujeo del evento.",
    },       
    {
      id: "q36",
      question:
        "A developer has defined multiple functions and a JavaScript object in the 'utilities.js' module. These are needed in the main JavaScript file named 'main.js' in order to complete a project. \n\nThe 'utilities.js' file is contained in a subfolder named 'util' in the current directory. Which import statement can be added to the 'main.js' file to make 'splitUnit', 'createUnit', 'normalizeUnit', and the 'manageObj' object available for use?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "import {splitUnit, createUnit, normalizeUnit, manageObj} from './util/utilities.js';",
        B: "import * from './util/utilities.js';",
        C: "import {splitUnit, createUnit, normalizeUnit, manageObj} from '../util/utilities.js';",
        D: "import all from './util/utilities.js';",
      },
      explanation:
        "La opción A es la correcta, ya que la sintaxis correcta para importar funciones y objetos específicos desde un archivo que se encuentra en una subcarpeta es usar 'import {functionName} from './subfolder/filename.js';'. Las otras opciones contienen errores de sintaxis o rutas incorrectas.",
    },
    {
      id: "q37",
      question:
        "Adam has written the following code for a student portal application. However, it does not work as intended and throws an undefined error. \n\nWhich statement is true regarding the implementation?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "An error occurs as the constructor does not pass an argument to initialize the 'subjectMarks' instance variable.",
        B: "The 'this' property cannot be accessed from within a nested function in a class method.",
        C: "An error occurs since 'subjectMarks' is passed as an argument to the 'addSubjectMarksToReport' method but it is also an instance variable of the class.",
        D: "Arrays can contain only primitive values but the 'addSubjectMarksToReport' method pushes an object into the 'subjectMarks' array.",
      },
      explanation:
        "La opción B es correcta. En JavaScript, cuando se utiliza una función tradicional dentro de un método de clase, el contexto de 'this' se pierde. Para que 'this' apunte correctamente a la instancia de la clase, se debe usar una función de flecha. Las otras opciones no son correctas: A no es el error, C no es un problema y D es incorrecto ya que los arrays pueden contener objetos.",
    },
    {
      id: "q38",
      question:
        "A JavaScript developer has written the following code for an employee application that invokes multiple functions. \n\nWhich of the following represents the correct sequence of messages that will be displayed in the console when this code is executed?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "processing name, generated message, creating string, Welcome to the company, Jon Bond!",
        B: "processing name, undefined, creating string, generated message",
        C: "processing name, creating string, generated message, Welcome to the company, Jon Bond!",
        D: "Welcome to the company, Jon Bond!, processing name, generated message, creating string",
      },
      code: "let name = 'Jon Bond';\n\nlet message;\n\nprocessName(name);\n\nconsole.log(message);\n\nfunction processName(name) {\n\n     console.log('processing name');\n\n     generateMessage(name);\n}\n\nfunction generateMessage(name) {\n\n     message = createString(name);\n\n     console.log('generated message');\n}\n\nfunction createString(name) {\n\n     console.log('creating string');\n\n     return `Welcome to the company, ${name}!';\n}",
      explanation:
        "Cuando el código se ejecuta, el motor de JavaScript crea un contexto de ejecución global y lo agrega a la pila de llamadas. Al encontrar la función `processName()`, el motor crea un contexto de ejecución para ella y lo coloca en la parte superior de la pila de llamadas. A su vez, esta función invoca `generateMessage()`, que invoca a `createString()`. El orden de los mensajes es el siguiente: primero se imprime 'processing name', luego 'creating string' cuando se ejecuta `createString()`, después 'generated message' al finalizar `generateMessage()`, y finalmente se muestra el mensaje completo 'Welcome to the company, Jon Bond!' al concluir el contexto global.",
    },
    {
      id: "q39",
      question:
        "As part of an online course, a questions array is built in order to keep track of all the questions that have been presented to the learner. \n\nBelow is a sample of what the 'questionsArray' might look like. As shown, the array sometimes collects duplicates. In order to process the array, a developer must remove the duplicate values. What line of code can be used to remove the duplicates?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "let newQuizQuestions = new WeakMap(quizQuestions);",
        B: "let newQuizQuestions = new UniqueArray(quizQuestions);",
        C: "let newQuizQuestions = new Map(quizQuestions);",
        D: "let newQuizQuestions = new Set(quizQuestions);",
      },
      explanation:
        "La opción D es la correcta porque un Set en JavaScript automáticamente elimina los elementos duplicados. Al pasar el array a un Set, los valores duplicados se eliminan y se obtiene un nuevo conjunto de valores únicos.",
    },        
    {
      id: "q40",
      question:
        "Un desarrollador necesita definir un proceso automatizado para una aplicación de gestión de empleados. Como parte del proceso, se está utilizando el método setTimeout() para ejecutar dos funciones. \n\nLa segunda función debe ejecutarse sin ningún retraso después de la primera. La variable 'data' ha sido asignada con un valor esperado para fines de prueba. Se ha escrito el siguiente código. ¿Cuáles de las siguientes afirmaciones son verdaderas sobre la salida de este código?",
      type: "multiple choice",
      correct_options: ["C", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "La función updateProfile() se llamará inmediatamente después de la ejecución de la función updateRole().",
        B: "El último mensaje en la consola será 'process complete'.",
        C: "La función updateRole() se llamará después de la ejecución de la declaración 'process complete' en la consola.",
        D: "El segundo mensaje en la consola será 'updated user: Jim Stokes'!",
      },
      code: "const data = {\n\n     user: {\n\n          name: 'Jim Stokes',\n\n          updated: '2020-07-25'\n\n   }\n\n};\n\nconst fetchUser = (data) => {\n\n     const user = data.user ? data.user.name : null;\n\n     return user;\n\n}\n\nconsole.log('starting the process');\n\nsetTimeout(()=> {\n\n     console.log('updating user role');\n\n     updateRole();\n\n}, 1000);\n\nsetTimeout(()=> {\n\n     console.log('updating user profile');\n\n     updateProfile();\n\n}, 0)\n\nconsole.log(`updated user: ${fetchUser(data)}`);\n\nconsole.log('process complete');",
      explanation:
        "Cuando se ejecuta el código, los siguientes pasos ocurren:\n\n1) Se imprime 'starting the process'.\n2) El primer setTimeout con 1000 ms agregará la función 'updateRole()' a la cola de mensajes.\n3) El segundo setTimeout con 0 ms agregará 'updateProfile()' a la cola de mensajes, pero después de que termine todo el código sincrónico.\n4) Se imprime 'updated user: Jim Stokes' después de obtener el nombre del usuario.\n5) Se imprime 'process complete'.\n6) Se imprime 'updating user profile', seguido de 'updating user role'.\n\nPor lo tanto, 'updateRole()' se llama después de 'process complete' y 'updated user: Jim Stokes' aparece como el segundo mensaje.",
    },
    {
      id: "q41",
      question:
        "While working on a new project, a developer encounters a situation that requires the use of a single function from each of three different modules. \n\nThe 'parseData' function is needed from 'dataUtil.js'. The 'compose' function is needed from 'util.js'. And the 'normalizeData' function is needed from 'commonUtils.js'. All three module files are contained in a subfolder of the project named 'utilities'. In order to make these functions easily available throughout the project, the developer decides to create a passthrough module named 'pass.js' in the main project folder. What code must be added to 'pass.js' to make the three functions available to any module that imports 'pass.js'?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "import {parseData, compose, normalizeData} from './utilities/dataUtil.js','./utilities/util.js', './utilities/commonUtils.js';",
        B: "export {parseData} from './utilities/dataUtil.js';     export {compose} from './utilities/util.js';     export {normalizeData} from './utilities/commonUtils.js';",
        C: "import {parseData} from './utilities/dataUtil.js';     import {compose} from './utilities/util.js';     import {normalizeData} from './utilities/commonUtils.js';",
        D: "export {parseData, compose, normalizeData} from './utilities/dataUtil.js' ,' ./utilities/util.js', './utilities/commonUtils.js';",
      },
      explanation:
        "La opción B es correcta porque se utiliza la sintaxis adecuada de exportación para hacer que las funciones de los módulos 'dataUtil.js', 'util.js' y 'commonUtils.js' estén disponibles a través del módulo 'pass.js'. Las otras opciones son incorrectas debido a errores de sintaxis o lógica en la importación/exportación.",
    },
    {
      id: "q42",
      question:
        "A developer wants to implement a User class to ease the process of creating multiple user objects with similar properties. \n\nGiven below is the class implementation. However, the instantiation throws an error. Which of the following is the reason?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "The objects userObj1 and userObj2 were instantiated with the same value of the Id property.",
        B: "The same class cannot be used to instantiate two different objects.",
        C: "A class cannot contain two constructors.",
        D: "The name of an object should start with a capital letter.",
      },
      explanation:
        "La opción C es correcta. En JavaScript, una clase no puede contener más de un constructor. El error se produce porque la clase `User` tiene dos métodos `constructor`, lo que no está permitido. Las otras opciones no son correctas porque no están relacionadas con la causa del error.",
    },
    {
      id: "q43",
      question:
        "A developer is working on a solution that requires producing a function that has access to a variable that is private; it can't be affected by other code. \n\nShe has created a possible solution to test her approach. What will be displayed in the console?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "NaN",
        B: "Uncaught ReferenceError: incrementCnt is not defined",
        C: "Uncaught ReferenceError: setCounter is not defined",
        D: "5",
      },
      explanation:
        "La opción D es correcta. La función `incrementCnt` se invoca, y la variable `count` se incrementa por el valor de `counter` que se establece a 5 dentro de la función `setCounter`. Por lo tanto, `count` se incrementa de 0 a 5, lo que se muestra en la consola.",
    },        
    {
      id: "q44",
      question:
        "What will be the result of the JavaScript code below \n\nwhen executed?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "Date and timestamp will be displayed in the browser console.",
        B: "The displayTime() function will throw an error.",
        C: "Only the date will be displayed in the browser console.",
        D: "The displayDate() function will throw an error.",
      },
      explanation:
        "La opción D es correcta. La función `displayDate` está siendo declarada como una expresión de función (una función anónima asignada a una variable). Debido a esto, `displayDate` no se encuentra definida antes de su asignación, lo que causa un error cuando se invoca antes de su definición.",
    },
    {
      id: "q45",
      question:
        "A developer is creating 100 objects using the following techniques shown below. \n\nAfter examining technique A and technique B, which statement accurately reflects how many versions of the 'fullName' method will be created with each technique?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Technique A produces 1 version and technique B produces 1 version.",
        B: "Technique A produces 100 versions and technique B produces 1 version.",
        C: "Technique A produces 1 version and technique B produces 100 versions.",
        D: "Technique A produces 100 versions and technique B produces 100 versions.",
      },
      explanation:
        "La opción B es correcta. En la Técnica A, se crea un nuevo método `fullName` en cada instancia del objeto, por lo que habrá 100 versiones del método. En la Técnica B, el método `fullName` se agrega al prototipo de la función constructora, lo que significa que solo existe 1 versión compartida por todas las instancias.",
    },
    {
      id: "q46",
      question:
        "The following function has been set up to check an object. \n\nIf the value of results is greater than 80, a property named 'tested' should be added to the object before it is sent to the 'recordResults' function. However, the original object should not be changed in the process. Which of the following statements are correct about this function?",
      type: "multiple choice",
      correct_options: ["B", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "The function will not change the original object as long as it is declared using const.",
        B: "Modifying a property of 'obj' will modify the original object.",
        C: "The function will not change the original object because it is assigned to a new variable.",
        D: "The 'obj' variable refers to the original object because objects are passed by reference.",
      },
      explanation:
        "La opción B es correcta porque modificar una propiedad del objeto original modificará el objeto. La opción D también es correcta, ya que los objetos en JavaScript se pasan por referencia, lo que significa que cualquier cambio realizado en 'obj' afectará al objeto original.",
    },
    {
      id: "q47",
      question:
        "Un desarrollador quiere implementar una clase Buyer que sea una clase hija de User. Las clases desarrolladas se muestran a continuación, pero no funcionan como se espera. \n\n¿Cuáles de las siguientes afirmaciones son verdaderas?",
      type: "multiple choice",
      correct_options: ["C", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "El constructor de la clase User espera 3 parámetros, pero la llamada a super en el constructor de la clase hija pasa 4 argumentos, lo que generaría un error.",
        B: "El método 'addToPurchaseHistory' intenta acceder a la propiedad 'name' pero no existe en la clase Buyer.",
        C: "Se debe usar la palabra clave 'super' para llamar al constructor de la clase padre antes de acceder a la propiedad 'this' en el constructor de la clase hija.",
        D: "La clase hija siempre debe extender de la clase padre.",
      },
      code: "class Buyer {\n\n     constructor(id, name, age) {\n\n          // implementación aquí\n\n     }\n\n}\n\nclass User extends Buyer {\n\n     constructor(id, name, age, purchaseHistory) {\n\n          this.purchaseHistory = purchaseHistory;\n\n          super(id, name, age, 25000);\n\n     }\n\n     addToPurchaseHistory(purchase) {\n\n          console.log(`User ${this.name} purchased ${purchase}`);\n\n          this.purchaseHistory.push(purchase);\n\n   }\n\n}",
      explanation:
        "En el código, se debe usar la palabra clave 'super' para invocar el constructor de la clase padre antes de acceder a 'this' en la clase hija. Además, la clase hija siempre debe extender de la clase padre. Aunque el constructor de la clase 'User' espera 3 parámetros, la clase 'Buyer' pasa 4 parámetros al constructor de la clase padre. Aunque esto no es ideal, JavaScript ignora los parámetros adicionales y las propiedades de la clase padre son heredadas por la clase hija, lo que permite que se acceda a la propiedad 'name' en el método 'addToPurchaseHistory'.",
    }        
  ];
};
