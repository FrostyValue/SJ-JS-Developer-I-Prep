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
      code: "class User {\n  constructor(userName) {\n    this.userName = userName;\n  }\n}\n\ngetUserName() {\n  return this.userName;\n}\n\nclass Admin extends User {\n  constructor(userName, adminLevel) {\n    this.adminLevel = adminLevel;\n    super(userName);\n  }\n}\n\nlet usr = new Admin('admin123', 3);",
      explanation:
        "La opción correcta es la A: 'The call to 'super' should be the first line in the constructor.'. La palabra clave 'extends' se utiliza para crear una clase hija o subclase de otra clase. La clase hija puede incluir un constructor. Sin embargo, si se utiliza un constructor en la clase hija, debe llamar a 'super' antes de usar la palabra clave 'this' dentro del constructor.\n\nEs posible pasar valores al constructor de la clase padre incluyendo esos valores como parte de la llamada a 'super'. El error que se muestra en el código de ejemplo es el resultado de usar la palabra clave 'this' antes de llamar a 'super'.",
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
      code: "function logger(fn) {\n  const func = fn;\n  fn = function (...args) {\n    console.log(`Arguments are ${JSON.stringify(args)}`);\n    func(...args);\n  };\n  return fn;\n}\n\n// The logger has been implemented in the class as shown below.\nclass User {\n  @logger\n  getUser(id) {\n    // Method implementation\n  }\n\n  @logger\n  saveUser(user) {\n    // Method implementation\n  }\n}",
      explanation:
        "Las opciones correctas son A: 'The logger decorator function receives three arguments as it is being used to decorate a class method.' y D: 'The final argument passed to the decorator function is the descriptor of the method being decorated.'.\n\n**Explicación detallada:**\n\nTres parámetros se pasan a una función decoradora que se utiliza para decorar un método de clase.\n\n1. **Primer parámetro:** Es el objetivo (target), que hace referencia al objeto de la clase que necesita ser decorado.\n2. **Segundo parámetro:** Es el nombre de la propiedad que necesita ser decorada. Cuando se utiliza como decorador de método de clase, este es el nombre del método que se está decorando.\n3. **Tercer parámetro:** Es el descriptor, que es un objeto que da acceso al método decorado a través de su propiedad 'value'.\n\nA continuación está la implementación correcta de la función decoradora:\n\n```javascript\nfunction logger(target, key, descriptor) {\n  const originalMethod = descriptor.value;\n  descriptor.value = function (...args) {\n    console.log(`Arguments are ${JSON.stringify(args)}`);\n    return originalMethod.apply(this, args);\n  };\n  return descriptor;\n}\n```",
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
      explanation:
        "Las opciones correctas son A: 'The 'arguments' object of a function contains all the values passed to the function.', C: 'The 'arguments' object is an array-like collection of values.', y E: 'The 'arguments' object is only available for non-arrow functions.'.\n\n**Explicación detallada:**\n\nEl objeto 'arguments' está disponible para todas las funciones que no sean funciones flecha (arrow functions). Es un objeto similar a un array que puede ser accedido dentro de una función. Contiene todos los valores que se pasan a la función. La palabra clave 'arguments' se utiliza para acceder al objeto de argumentos. Por ejemplo, arguments[0] puede usarse para acceder al primer argumento que se pasa a la función.\n\nEs importante tener en cuenta que aunque es similar a un array, no es un array real, por lo que no tiene acceso a todos los métodos que se aplican a los arrays.",
    },
    {
      id: "q4",
      question:
        "Following the principle of least privilege, a developer has defined a function named 'calculateDate' that uses a local variable named 'newDate' which cannot be accessed outside the function. \n\nHow can the developer create a privileged function named 'getWeekday' that has access to the local variable and can be invoked outside the 'calculateDate' function?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "Define an inner function before the statement that returns the 'newDate' variable.",
        B: "Define an outer function that includes the 'calculateDate' function.",
        C: "Define an outer function that declares a local variable named 'newDate'.",
        D: "Define an inner function that gets returned by the 'calculateDate' function.",
      },
      code: "function calculateDate(str) {\n  let newDate = new Date(str);\n  newDate.setDate(newDate.getDate() + 10);\n  return newDate;\n}",
      explanation:
        "La opción correcta es la D: 'Define an inner function that gets returned by the 'calculateDate' function.'. Para definir una función privilegiada, el desarrollador puede usar un closure. La función 'calculateDate' puede contener una función interna llamada 'getWeekday' que tiene acceso a la variable local de la función 'calculateDate'. Esta función interna puede ser devuelta para que sea posible invocarla fuera de la función externa.\n\n**Ejemplo de implementación:**\n\n```javascript\nfunction calculateDate(str) {\n  let newDate = new Date(str);\n  newDate.setDate(newDate.getDate() + 10);\n\n  return {\n    getWeekday: function () {\n      return newDate.toLocaleDateString(undefined, { weekday: 'long' });\n    },\n    newDate,\n  };\n}\n```\n\nEsta función devuelve un objeto que contiene la variable 'newDate' y una función llamada 'getWeekday'. La función 'getWeekday' puede ser invocada desde fuera para obtener el día de la semana como sigue:\n\n```javascript\ncalculateDate('January 1, 2020').getWeekday();\n```\n\nSi una función interna se define antes de la declaración de retorno, solo puede ser accesible dentro de la función 'calculateDate'. Definir una función externa no le dará acceso automáticamente a la variable 'newDate' ya que su alcance está limitado.",
    },
    {
      id: "q5",
      question:
        "If the expected output in the browser JavaScript console is 'Hi, my name is Hootie. I hoot!', what would be the missing code indicated by the JavaScript code comments below?",
      type: "multiple choice",
      correct_options: ["A", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "Mascot.call(this, name);",
        B: "let greeting = Mascot.getGreeting.call(this);",
        C: "let greeting = Mascot.prototype.getGreeting.call(this);",
        D: "Mascot.name = name;",
      },
      code: "function Mascot(name) {\n  this.name = name;\n}\n\nMascot.prototype.getGreeting = function () {\n  return `Hi, my name is ${this.name}.`;\n};\n\nfunction Owl(name, sound) {\n  // missing code here\n  this.sound = sound;\n}\n\nOwl.prototype = Object.create(Mascot.prototype);\nOwl.prototype.getGreeting = function () {\n  // missing code here\n  return `${greeting} I ${this.sound}!`;\n};\n\nconst myOwl = new Owl('Hootie', 'hoot');\nconst greeting = myOwl.getGreeting();\n\nconsole.log(greeting);",
      explanation:
        "Las opciones correctas son A: 'Mascot.call(this, name);' y C: 'let greeting = Mascot.prototype.getGreeting.call(this);'.\n\n**Explicación detallada:**\n\n1. **Mascot.call(this, name):** Los hijos o extensiones de un objeto pueden inicializar propiedades heredadas invocando el constructor del padre usando el método 'call', que establece el contexto de 'this' mientras pasa los parámetros necesarios. En este escenario, Mascot.call(this, name) puede ejecutarse dentro de la función constructora Owl para establecer el valor de la propiedad heredada 'name'.\n\n2. **Mascot.prototype.getGreeting.call(this):** En la definición de la función 'getGreeting' del objeto Owl, Mascot.prototype.getGreeting.call(this) puede ejecutarse para invocar el método sobrescrito del objeto padre y usar el valor devuelto en la cadena concatenada que se utiliza en la llamada console.log().",
    },
    {
      id: "q6",
      question:
        "A developer is working with the following complex object. When she invokes 'user1.getUserInfo()', she gets an error at the 'compilePermissions' function. \n\nWhich function can be used to solve the problem?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "const compilePermissions () => { return `${this.role} - ${this.getPermissionsLevel()}`; }",
        B: "const compilePermissions = function() { return this.role + ' - ' + this.getPermissionsLevel(); }",
        C: "const compilePermissions = () => return `${this.role} - ${this.getPermissionsLevel()}`;",
        D: "const compilePermissions = () => { return `${this.role} - ${this.getPermissionsLevel()}`; }",
      },
      code: "let user1 = {\n  firstName: 'John',\n  lastName: 'Smith',\n  role: 'admin',\n  level: 10,\n  getPermissionsLevel() {\n    if (this.role === 'admin') return this.level + 5;\n    return this.level;\n  },\n  getUserInfo() {\n    let fullName = this.firstName + ' ' + this.lastName;\n    function compilePermissions() {\n      return `${this.role} - ${this.getPermissionsLevel()}`;\n    }\n    let perms = compilePermissions();\n    return fullName + ' + ' + perms;\n  }\n};",
      explanation:
        "La opción correcta es la D: 'const compilePermissions = () => { return `${this.role} - ${this.getPermissionsLevel()}`; }'.\n\n**Explicación detallada:**\n\nUna función flecha es una expresión de función que utiliza una sintaxis más concisa. Una función flecha maneja la vinculación de la palabra clave 'this' de manera diferente a otros tipos de funciones. La palabra clave 'this' está vinculada al objeto en su alcance léxico y no depende de cómo se invocó la función.\n\nLa función flecha funciona en este caso porque la palabra clave 'this' está vinculada al objeto 'user1' y no al objeto que llama a la función. Una función regular no funcionaría porque 'this' no está vinculado correctamente. Las otras dos opciones que incluyen funciones flecha tienen sintaxis incorrecta que generaría un error de sintaxis.",
    },
    {
      id: "q7",
      question:
        "A module 'tools.js' contains a greeting function that is exported as shown. A second module contains the code shown below. When the code is run, what will be displayed in the console?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "undefined undefined",
        B: "Welcome User",
        C: "Uncaught ReferenceError: greeting is not defined",
        D: "Welcome undefined",
      },
      code: "// greeting function in tools.js\n\nexport function greeting(name) {\n  console.log('Welcome ' + name);\n}\n\n// Code contained in second module\ngreeting('User');\n\nimport {greeting} from './tools.js';",
      explanation:
        "La opción correcta es la B: 'Welcome User'. Los imports son elevados (hoisted) al principio del código. Esto significa que incluso si una función es importada al final del archivo, está disponible para su uso en todo el archivo.\n\nEn este caso, la función greeting funciona normalmente debido a la elevación, por lo que no genera ningún error y produce la salida esperada.",
    },
    {
      id: "q8",
      question:
        "Given the JavaScript code below, which command returns the value of 5?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "process()(15,3));",
        B: "process(3)(15);",
        C: "process(3, 5)();",
        D: "process(15)(3, 0);",
      },
      code: "var process = (num1) => {\n  return (num2, num3) => {\n    if (typeof num3 == 'undefined') {\n      num3 = 0;\n    }\n    return Math.floor(num1 / num2 + num3);\n  };\n};",
      explanation:
        "La opción correcta es la D: 'process(15)(3, 0);'. Este código de JavaScript ilustra un ejemplo de una función de orden superior, que es una función que devuelve otra función.\n\n**Desglose del cálculo:**\n\n```javascript\nlet func1 = process(15); // num1 = 15\nlet result1 = func1(3, 0); // num2 = 3 y num3 = 0\n// Resultado = Math.floor(15/3+0) = 5\n```\n\nEjecutar process(3, 5)(); generará NaN porque num2 está indefinido. De manera similar, process()(15, 3)); también generará NaN porque num1 está indefinido. El código process(3)(15); producirá un número decimal menor a 1, que será redondeado hacia abajo a 0 debido a la función Math.floor().",
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
      code: "function factorial(num) {\n  // Add code here\n  return num * factorial(num - 1);\n}\n\nconst result = factorial(9);",
      explanation:
        "La opción correcta es la A: 'if (num === 1) { return 1; }'. Una función recursiva necesita manejar dos casos: un caso base que termina la recursión y un caso recursivo que la continúa (llama nuevamente a la función).\n\nEl código del ejemplo no incluía una manera para que la recursión terminara. Cuando el número 1 se pasa a la función, debería devolverse (sin invocar nuevamente la función) para que la pila de llamadas pueda comenzar a resolver todas las llamadas a la función y devolver los resultados.\n\nAgregar esta condición evita la ejecución infinita y asegura que la recursión tenga un punto de terminación claro.",
    },
    {
      id: "q10",
      question:
        "A developer has defined the following code that checks if the value of 'price' is greater than 999 and displays a message in the console. If the name is 'Marc' and the price is 999, what will be the output in the console when this code is executed?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "Uncaught ReferenceError: isGreater is not defined",
        B: "Congratulations, Marc! You qualify for a free membership card worth $undefined!",
        C: "Congratulations, undefined! You qualify for a free membership card worth $20!",
        D: "Uncaught ReferenceError: name is not defined",
      },
      code: "// Sample data object added for testing.\nconst data = {\n  customer: {\n    name: 'James'\n  },\n  sale: {\n    price: 500\n  }\n};\n\n// The name and price are obtained by accessing the properties of an object like the sample shown above.\nconst name = data.customer.name;\nconst price = data.sale.price;\n\nfunction checkPrice() {\n  let isGreater = false;\n  if (price > 999) {\n    isGreater = true;\n  }\n  return isGreater;\n}\n\ncheckPrice();\nconsole.log(`Congratulations, ${name}! You qualify for a free membership card worth $${isGreater ? '50' : '20'}!`);",
      explanation:
        "La opción correcta es la A: 'Uncaught ReferenceError: isGreater is not defined'. Cuando se ejecuta el código, se muestra un mensaje de error en lugar del mensaje esperado.\n\nEl mensaje usado como parámetro en el método console.log() tiene acceso a la variable 'name' debido a su alcance global, pero no tiene acceso a la variable 'isGreater' porque tiene un alcance de función o local. La variable 'name' puede ser accedida en todo el archivo de JavaScript después de su inicialización, ya que está disponible globalmente.\n\nPor otro lado, la variable 'isGreater' solo está disponible para su uso dentro de la función 'checkPrice' porque fue declarada dentro de esa función. Para mostrar el mensaje requerido en la consola, el desarrollador debería haber llamado a la función 'checkPrice' dentro del literal de plantilla como sigue: `${checkPrice() ? '50' : '20'}`.",
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
      code: "// Technique 1\nlet room1 = {\n  name: 'Board Room';\n  capacity: 20;\n  requireSchedule: true\n},\n\n// Technique 2\nlet room1 = Object.create(null);\nroom1.name: 'Board Room';\nroom1.capacity: 20;\nroom1.requireSchedule: true;\n\n// Technique 3\nfunction Room(name, capacity, rSchedule) {\n  this.name = name;\n  this.capacity = capacity;\n  this.requireSchedule = rSchedule;\n}\n\nlet room1 = Room('Board Room', 20, true);",
      explanation:
        "Las opciones correctas son A: 'In the second technique, the assignment operator (=) should be used instead of a colon to assign each property value.', C: 'In the third technique, the 'new' keyword should be used prior to invoking the function.', y E: 'The object literal in the first technique should use a comma rather than a semicolon after each property.'.\n\n**Explicación detallada:**\n\n1. **Error en la técnica 1:** Los objetos literales se crean rápidamente usando llaves. Dentro de las llaves, las propiedades y valores se separan con un colon (:). Cada par clave-valor debe estar separado por una coma (,). El uso incorrecto de un punto y coma en la técnica 1 causa un error.\n\n2. **Error en la técnica 2:** Aunque 'Object.create(null)' es válido para crear un objeto sin prototipo, las propiedades deben asignarse usando el operador '=' en lugar de ':'.\n\n3. **Error en la técnica 3:** Para invocar un constructor, siempre se debe usar la palabra clave 'new'. Esto asegura que la función cree un nuevo objeto. El código correcto sería: `let room1 = new Room('Board Room', 20, true);`.",
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
      code: 'class Student {\n  constructor(ageLimit, name, age) {\n    this.ageLimit = ageLimit;\n    this.name = name;\n    this.age = age;\n  }\n\n  get adultStatus() {\n    return (this.age > this.ageLimit ? "Adult" : "NOT Adult");\n  }\n\n  static isStudentAdult(age) {\n    let state = false;\n    if (age > this.ageLimit)\n      state = true;\n    let statusStatement = `The adult status of the student with age ${age} is ${state}`;\n    console.log(statusStatement);\n    return statusStatement;\n  }\n}\n\nlet student = new Student(18, "John", 32);\nStudent.isStudentAdult(21);',
      explanation:
        "La opción correcta es la C: 'The adult status of the student with age 21 is false'. El método 'isStudentAdult' es un método estático de clase. Cuando la variable de instancia 'ageLimit' es accedida usando la palabra clave 'this' dentro del método estático, su valor es undefined.\n\nEsto ocurre porque los métodos estáticos son llamados sin instanciar su clase y no pueden ser llamados a través de una instancia de clase. Como '21 > undefined' es falso, el valor de la variable 'state' permanece falso y 'The adult status of the student with age 21 is false' se muestra en la consola.",
    },
    {
      id: "q13",
      question:
        "The line of code below is importing functionality from the file module.js. Using the import statement, which of the following export statements is required to make the import statement workable?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "export { setPerimeter, getPerimeter, squareRoot, determineArea }",
        B: "export default ./modules/module.js",
        C: "export * from ./modules/module.js",
        D: "export { squareRoot, determineArea }",
      },
      code: "import { squareRoot, determineArea, getPerimeter } from './modules/module.js';",
      explanation:
        "La opción correcta es la A: 'export { setPerimeter, getPerimeter, squareRoot, determineArea }'.\n\nPara acceder a las características de un módulo (funciones, variables, clases), primero deben ser exportadas. El comando export puede colocarse al inicio de la declaración o se puede exportar una lista de todos los elementos usando la declaración export e incluir cada elemento entre llaves. Esa es la técnica utilizada en esta pregunta.\n\nPara importar un elemento, primero debe ser exportado. Se pueden exportar elementos adicionales sin importarlos, como se hace en este ejemplo. Una exportación por defecto debe incluir el nombre del elemento. Un comodín (*) puede ser usado durante la importación pero no en la exportación.",
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
      code: "function randomNum(upperLimit, howMany) {\n  let cnt = 1;\n  while (cnt <= howMany) {\n    let rand = Math.floor(Math.random() * upperLimit) + 1;\n    cnt++;\n    return rand;\n  };\n};\n\nrandomNum(100, 6);",
      explanation:
        "La opción correcta es la C: 'A generator should be used since the randomNum function can be converted quite easily with function* and the 'yield' keyword.'.\n\n**Iteradores y generadores:**\n\n1. **Generadores:** Una función generadora devuelve un generador que luego puede usarse con 'next()' para acceder a cada elemento uno por uno. Los generadores suelen ser más fáciles de crear y adaptar.\n\n2. **Iteradores:** Un iterador es un objeto que implementa una secuencia uno por uno para una colección de elementos. Implementa el método 'next()' para proporcionar acceso secuencial. Una función puede configurarse para devolver un iterador.\n\nTanto los iteradores como los generadores pueden usarse indistintamente, pero en la mayoría de los casos, los generadores son más fáciles de implementar. La función 'randomNum' es bastante simple de convertir a una función generadora usando 'function*' y la palabra clave 'yield'.",
    },
    {
      id: "q15",
      question:
        "To help manage a scheduling app, a developer is setting up object inheritance for different rooms. She then views the contents of this object in the console and notices a problem. The prototype is set to the default Object and doesn't include the 'availToSchedule' function. She needs to add a code before creating a 'boardRoom' object to correct this. \n\nWhich option provides the most optimal solution?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "boardRoom.prototype = Object.create(Rooms.prototype); Object.defineProperty(boardRoom.prototype, 'constructor', { value: boardRoom, enumerable: false, writable: true });",
        B: "MeetingRooms.prototype = Object.create(Rooms.prototype);",
        C: "MeetingRooms.prototype = Object.create(Rooms.prototype); Object.defineProperty(MeetingRooms.prototype, 'constructor', { value: MeetingRooms, enumerable: false, writable: true });",
        D: "boardRoom.prototype = Object.create(Rooms.prototype);",
      },
      code: "function Rooms(nameStr, mRoomBool, scheduleBool) {\n  this.name = nameStr;\n  this.meetingRoom = mRoomBool;\n  this.canSchedule = scheduleBool;\n};\n\nRooms.prototype.availToSchedule = function () {\n  return this.canSchedule;\n};\n\nfunction MeetingRooms(nameStr, scheduleBool, capacityNum) {\n  Rooms.call(this, nameStr, true, scheduleBool);\n  this.capacity = capacityNum;\n}\n\n// To test the inheritance, she creates an object for the board room.\n// Add code here\n\nlet boardRoom = new MeetingRooms('Board Room', true, 20);",
      explanation:
        "La opción correcta es la C: 'MeetingRooms.prototype = Object.create(Rooms.prototype); Object.defineProperty(MeetingRooms.prototype, 'constructor', { value: MeetingRooms, enumerable: false, writable: true });'.\n\n**Explicación detallada:**\n\nLa herencia se configura para que los atributos necesarios para todos los objetos se encuentren en el constructor padre. Los métodos se colocan en el prototipo. Los hijos heredan propiedades e invocan el constructor del padre usando el método 'call' mientras pasan valores.\n\nEn este caso, el prototipo se pierde durante la instanciación del objeto. Para corregir esto, es necesario configurar el prototipo manualmente en el constructor hijo. 'Object.create()' se puede usar para crear un nuevo objeto que tenga el prototipo del padre y luego el nuevo objeto se asigna como el prototipo del constructor hijo para que se cree una cadena de herencia.\n\nAsignar este prototipo manualmente provoca que el constructor se pierda. Esto se corrige utilizando 'Object.defineProperty' para agregar una nueva propiedad de constructor.",
    },
    {
      id: "q16",
      question:
        "A developer wants to implement cache functionality on his website to reduce the number of unwanted HTTP requests to the server. A decorator has been developed to achieve this. \n\nWhich of the following code snippets implements the created decorator function correctly?",
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
        "La opción correcta es la B: 'const findStudentRecord = cachedStudentRecordRetrievalDecorator(retrieveStudentRecord); findStudentRecord(10).then(record => console.log(record));'.\n\n**Decoradores:**\n\nUn decorador es una función envolvente que envuelve una función existente y extiende su comportamiento. En este escenario, cachedStudentRecordRetrievalDecorator es la función envolvente que envuelve la función retrieveStudentRecord y extiende su comportamiento almacenando en caché los registros de estudiantes.\n\nPara que funcione correctamente, solo se pasa la referencia de la función retrieveStudentRecord al decorador, que luego gestiona la lógica de almacenamiento en caché antes de invocar la función original.",
    },
    {
      id: "q17",
      question:
        "A developer is working on a welcome message for the company website. This message is controlled by two objects. The developer needs to use the substitute greeting. What code can be used to modify the retrieval of the greeting in the 'showGreeting' function?",
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
      code: "let greeting = {\n  morningGreet: \"Welcome, and Good Morning!\",\n  eveningGreet: \"Welcome, and Good Evening!\",\n  getGreeting(gTime) {\n    if (gTime === 'morningGreet' || gTime === 'eveningGreet') {\n      return this[gTime];\n    }\n    return \"Welcome!\";\n  }\n};\n\nlet substituteGreeting = {\n  morningGreet: 'We apologize that our site is down this morning.',\n  eveningGreet: \"We apologize that our site is down this evening.\"\n};\n\n// The showGreeting function is used to show the greeting.\nfunction showGreeting(theTime) {\n  const greet = greeting.getGreeting(theTime); // Replace this line of code to use substituteGreeting\n  document.getElementById('greet').innerHTML = greet;\n}",
      explanation:
        "Las opciones correctas son B: 'const greet = greeting.getGreeting.bind(substituteGreeting, theTime) ();', D: 'const greet = greeting.getGreeting.apply(substituteGreeting, [theTime]);', y E: 'const greet = greeting.getGreeting.call(substituteGreeting, theTime);'.\n\n**Explicación detallada:**\n\n1. **Método call():** Invoca indirectamente una función y permite establecer el objeto al que hace referencia 'this' pasando un objeto como el primer parámetro. Los argumentos son pasados en una lista separada por comas.\n\n2. **Método apply():** Similar a call(), pero los argumentos son pasados en forma de un array.\n\n3. **Método bind():** Devuelve una nueva función con un valor vinculado al keyword 'this'. Ese valor viene del primer parámetro. Puede enlazar argumentos adicionales a la nueva función con los parámetros que sigan al valor de 'this'. Se requiere invocar explícitamente la función resultante con '()' para ejecutarla.",
    },
    {
      id: "q18",
      question:
        "A developer has completed a function named 'retrieveScores' in the tools module (tools.js). She now needs to export that function and import it into 'main.js'. Both JavaScript files are located in the same directory. \n\nWhich of the following shows the correct way to export the function and then import it into 'main.js'?",
      type: "multiple choice",
      correct_options: ["C", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "EXPORT: export function retrieveScores() {/* Code for retrieving scores */}; IMPORT: import {retrieveScores};",
        B: "EXPORT: export retrieveScores() {/* Code for retrieving scores */}; IMPORT: import retrieveScores from './tools.js';",
        C: "EXPORT: export function retrieveScores() {/* Code for retrieving scores */}; IMPORT: import {retrieveScores} from './tools.js';",
        D: "EXPORT: export default function retrieveScores() {/* Code for retrieving scores */}; IMPORT: import rScores from './tools.js';",
      },
      code: "function retrieveScores() {/* Code for retrieving scores */};",
      explanation:
        "Las opciones correctas son C: 'EXPORT: export function retrieveScores() {/* Code for retrieving scores */}; IMPORT: import {retrieveScores} from './tools.js';' y D: 'EXPORT: export default function retrieveScores() {/* Code for retrieving scores */}; IMPORT: import rScores from './tools.js';'.\n\n**Explicación detallada:**\n\n1. **Exportación nombrada:**\n   - La función o variable debe identificarse por su nombre en la declaración de importación.\n   - Ejemplo: `export function retrieveScores() {...};` en tools.js.\n   - Importación: `import {retrieveScores} from './tools.js';`\n\n2. **Exportación por defecto:**\n   - Permite asignar cualquier nombre al importar la función o variable.\n   - Ejemplo: `export default function retrieveScores() {...};` en tools.js.\n   - Importación: `import rScores from './tools.js';`\n\nEs importante incluir la palabra clave 'function' durante la exportación al declarar la función.",
    },
    {
      id: "q19",
      question:
        "A developer is gathering data from an API for a project she is working on. The API limits the number of records sent back as a part of the response to 50. However, the response contains a new URL as the value of the '_next' property if additional records are available. The developer has set up a function that is successfully retrieving 50 records. She now needs to add code that will loop through and retrieve records until they have all been retrieved. \n\nWhich code solves this problem?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "if (response._next) { retrieveData(); }",
        B: "if (response._next) { retrieveData(response._next); }",
        C: "while (response._next) { retrieveData(response._next); }",
        D: "if (response._next) { while(response._next) { retrieveData(); }}",
      },
      code: "const finalResults = [];\n\nfunction retrieveData(url) {\n  fetch(url)\n    .then((resp) => resp.json())\n    .then(function (response) {\n      if (response.results) {\n        finalResults.push(response.results);\n      }\n\n      // Add code here to retrieve remaining records\n\n    })\n    .catch((issue) => console.log(`Couldn't retrieve records: ${issue}`));\n};",
      explanation:
        "La opción correcta es la B: 'if (response._next) { retrieveData(response._next); }'. La recursión es una técnica para resolver problemas haciendo que una función se llame a sí misma. La función 'retrieveData' tiene todo lo necesario para recuperar registros. Simplemente necesita ser llamada de manera recursiva hasta que no haya más registros disponibles.\n\nEn este caso, la propiedad '_next' indica que hay más datos disponibles. Si existe esta propiedad en la respuesta, la función se llama nuevamente utilizando el nuevo URL como parámetro para seguir recuperando los registros restantes. Esto garantiza que todos los registros sean recuperados.",
    },
    {
      id: "q20",
      question:
        "A developer is working to debug some code used on the company website. She has identified that the problem is associated with a 'connections' object. In order to figure out what is going on, she needs to display the properties and values of the 'connections' object at a particular time in the program. \n\nWhat temporary code could be used to display the properties and values of the object?",
      type: "multiple choice",
      correct_options: ["B", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "for (let i of connections) { console.log('${i} -> ${connections[i]}'); }",
        B: "console.log(Object.entries(connections));",
        C: "console.log(Object.values(connections));",
        D: "for (let i in connections) { console.log(`${i} -> ${connections[i]} ); }",
      },
      explanation:
        "Las opciones correctas son B: 'console.log(Object.entries(connections));' y D: 'for (let i in connections) { console.log(`${i} -> ${connections[i]} ); }'.\n\n**Explicación detallada:**\n\n1. **Método Object.entries():** Devuelve un array que consiste en los pares clave-valor disponibles en un objeto. Este método solo incluye propiedades propias del objeto.\n\n2. **Ciclo for-in:** Itera sobre todas las propiedades enumerables de un objeto. La variable declarada en el ciclo contiene el nombre de cada propiedad a medida que pasa por las propiedades. Esa misma variable puede usarse para acceder al valor de la propiedad utilizando corchetes (connections[i]).\n\nAmbos enfoques permiten inspeccionar las propiedades y valores del objeto 'connections' en un momento específico del programa para depuración.",
    },
    {
      id: "q21",
      question:
        "Which options can be used to iterate through the properties of the object below?",
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
      code: "let user = {\n  name: 'Jane',\n  age: 25,\n  admin: true,\n  created: new Date()\n};",
      explanation:
        "Las opciones correctas son A: 'for (let prop of Object.keys(user)) { console.log(user[prop]); }', D: 'for (let prop of Object.getOwnPropertyNames(user)) { console.log(user[prop]); }', y E: 'for (let prop in user) { console.log(user[prop]); }'.\n\n**Explicación detallada:**\n\n1. **for...in:** El bucle 'for...in' se usa para iterar sobre todas las propiedades enumerables de un objeto. La variable declarada en el bucle contiene el nombre de cada propiedad.\n\n2. **Object.keys() con for...of:** El método 'Object.keys()' devuelve un array con los nombres de las propiedades enumerables del objeto. Luego, se puede usar 'for...of' para iterar sobre cada elemento del array.\n\n3. **Object.getOwnPropertyNames() con for...of:** Este método devuelve un array con todas las propiedades (enumerables y no enumerables) del objeto. Igual que con 'Object.keys()', se puede usar 'for...of' para iterar sobre los elementos.",
    },
    {
      id: "q22",
      question:
        "Determine the output in the browser JavaScript console when the code below is executed.",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "pet meows! bot meows!",
        B: "pet beeps! bot woofs!",
        C: "pet woofs! bot meows!",
        D: "pet meows! bot beeps!",
      },
      code: "class Pet {\n  constructor(name) {\n    this.name = name;\n  }\n\n  speak() {\n    return `${this.name} woofs!`;\n  }\n};\n\nPet.prototype.speak = function () {\n  return `${this.name} meows!`;\n};\n\nclass Bot extends Pet {\n  constructor(name) {\n    super(name);\n  }\n\n  speak() {\n    return `${this.name} beeps!`;\n  }\n};\n\nconst myPet = new Pet('pet');\nconst myBot = new Bot('bot');\n\nconsole.log(myPet.speak(), myBot.speak());",
      explanation:
        "La opción correcta es la D: 'pet meows! bot beeps!'.\n\n**Explicación detallada:**\n\n1. **Palabra clave extends:** Se utiliza en declaraciones o expresiones de clase para crear una clase hija de otra clase. Esto permite que la clase hija sobrescriba métodos de la clase padre.\n\n2. **Sobrescritura con prototype:** En JavaScript, los métodos de objetos pueden sobrescribirse usando la propiedad 'prototype'. En este caso, la función 'speak' de la clase 'Pet' es sobrescrita por 'Pet.prototype.speak'. Por lo tanto, 'myPet.speak()' devuelve 'pet meows!'.\n\n3. **Sobrescritura en la clase hija:** La clase 'Bot' sobrescribe el método 'speak' de la clase 'Pet'. Por esta razón, 'myBot.speak()' devuelve 'bot beeps!'.",
    },
    {
      id: "q23",
      question:
        "A developer is working on an online application. Whenever the user starts the application, certain settings are established by the user and stored in the settings object. Once these settings are established, they shouldn't be changed by any outside code. \n\nWhat function can the developer use in order to keep the settings object from changing?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Object.seal(settings);",
        B: "Object.freeze(settings);",
        C: "Object.create(settings);",
        D: "Object.preventExtensions(settings);",
      },
      code: "const settings = {};",
      explanation:
        "La opción correcta es la B: 'Object.freeze(settings);'. El método 'Object.freeze()' coloca un objeto en un estado donde no puede ser modificado. Esto evita agregar nuevas propiedades al objeto, modificar o eliminar las propiedades existentes, cambiar los atributos de las propiedades del objeto, y cambiar el prototipo del objeto.\n\n**Otras opciones:**\n1. **Object.seal():** Permite modificar las propiedades existentes siempre que sean configurables, pero no permite agregar nuevas propiedades.\n2. **Object.preventExtensions():** Solo previene agregar nuevas propiedades al objeto.\n3. **Object.create():** Crea un nuevo objeto usando un objeto argumento como prototipo para el nuevo objeto.",
    },
    {
      id: "q24",
      question:
        "When the code below is run, which value will output to the console?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "32",
        B: "62",
        C: "30",
        D: "28",
      },
      code: "let array = [1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1];\n\nlet sum = 0;\n\nfor (let i = 0; i < array.length; i++) {\n  let val = array[i] % 2;\n  if (val !== 0) {\n    continue;\n  }\n  sum += array[i];\n  if (sum > 26) {\n    break;\n  }\n}\n\nconsole.log(sum);",
      explanation:
        "La opción correcta es la C: '30'.\n\n**Explicación detallada:**\n\n1. **Operador % (módulo):** Verifica si un número es par o impar. En este caso, los valores pares son retenidos y los valores impares son saltados gracias a 'continue'.\n\n2. **Declaración continue:** Termina la ejecución de la iteración actual en un bucle y continúa con la siguiente.\n\n3. **Declaración break:** Termina inmediatamente la ejecución y sale del bucle.\n\n**Cálculo del resultado:**\n- Los valores pares del array son 2, 4, 6, 8, 6, 4, 2 (sumando estos en orden hasta que la suma supere 26).\n- Sumatoria: 2 + 4 + 6 + 8 + 6 + 4 = 30.\n- La condición 'if (sum > 26)' detiene el bucle cuando la suma alcanza 30, y ese valor se registra en la consola.",
    },
    {
      id: "q25",
      question:
        "A developer is working on a site that allows users to interact with and manage client data. Occasionally, a user may want to normalize the data. A 'normalize data' button is available at the bottom of the screen with this handler. The 'normalizeTheData' function is contained in the 'utilities/dataUtil.js' module. This module has been loaded so that the 'normalizeTheData' function is available. However, this module is quite large and the developer would like to change how it is loaded since the user interacts with this feature only occasionally. \n\nWhat code should be placed inside the handler in order to load this module only when needed?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "import('./utilities/dataUtil.js').then((module) => module.normalizeTheData());",
        B: "import('normalizeTheData', './utilities/dataUtil.js'); normalizeTheData();",
        C: "import {normalizeTheData} from './utilities/dataUtil.js'; normalizeTheData();",
        D: "import('normalizeTheData', './utilities/dataUtil.js').then((module) => normalizeTheData());",
      },
      code: "document.getElementById('normalizeBtn').addEventListener('click', function() {\n  normalizeTheData(); // Replace this line with the new code\n});",
      explanation:
        "La opción correcta es la A: 'import('./utilities/dataUtil.js').then((module) => module.normalizeTheData());'.\n\n**Explicación detallada:**\n\nCuando se necesita cargar un módulo bajo demanda, se puede utilizar la carga dinámica. Para importar un módulo dinámicamente, la palabra clave 'import' se llama como una función. Esta llamada devuelve una promesa.\n\n1. **Método then():** Se puede usar el método 'then()' para responder a la promesa y recuperar el módulo. \n2. **Acceso a valores exportados:** Los valores exportados del módulo pueden ser accesibles usando la notación de punto.\n\nEsto permite optimizar el rendimiento cargando el módulo solo cuando se necesita.",
    },
    {
      id: "q26",
      question:
        "A developer wants to use a decorator to extend the behavior of a User class that has been developed already. The decorator should add a user Type to the User Class using the prototype. Below is the newly developed decorator function, but it does not work as expected. \n\nWhich of the following statements are true?",
      type: "multiple choice",
      correct_options: ["A", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "The decorator function receives only one argument as it is being used as a class decorator.",
        B: "The prototype should be accessed via the second argument of the decorator function.",
        C: "The prototype should be accessed via the first argument of the decorator function.",
        D: "It is only possible to access the class constructor via the class decorator.",
      },
      code: "function addUserType(target, name, descriptor) {\n  descriptor.value.prototype.userType = 'INTERNAL';\n  return descriptor;\n}\n\n// Below is the User Class.\n@addUserType\nclass User {\n  constructor(name, age, gender) {\n    this.name = name;\n    this.age = age;\n    this.gender = gender;\n  }\n}",
      explanation:
        "Las opciones correctas son A: 'The decorator function receives only one argument as it is being used as a class decorator.' y C: 'The prototype should be accessed via the first argument of the decorator function.'.\n\n**Explicación detallada:**\n\n1. **Número de parámetros:** Solo un parámetro se pasa a una función decoradora cuando se utiliza para decorar una clase. Este parámetro es el objeto objetivo, que es la clase que está siendo decorada.\n\n2. **Acceso al prototipo:** La propiedad 'prototype' puede ser accesible junto con el constructor de la clase a través del decorador de clase.\n\n**Implementación correcta del decorador:**\n\n```javascript\nfunction addUserType(target) {\n  target.prototype.userType = 'INTERNAL';\n}\n```\n\nEsta implementación asegura que el prototipo de la clase decorada reciba la propiedad 'userType'.",
    },
    {
      id: "q27",
      question:
        "Jane wants to implement error handling in her functions with the help of a decorator. Her application has two functions to get the data from the server and update it. The function declaration of each function is given below. The code in the functions is working perfectly. After implementing the decorator function, the server returns a 400 Bad Request error. She realizes that the issue is with her decorator. \n\nHow can the decorator function be fixed?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "Since the 'errorHandlingDecorator' function on line 1 is not async, the keyword await cannot be used on the function fn().",
        B: "Not enough information is available to find and fix the issue.",
        C: "The 'updateNote' function expects two arguments, but only one argument (args) is passed.",
        D: "Use the spread operator (...) to pass the parameters to fn() on line 4.",
      },
      code: "async function getNote(id){\n  // Function implementation\n}\n\nasync function updateNote(id, updateValue){\n  // Function implementation\n}\n\n// Below is the decorator function that has been developed.\nfunction errorHandlingDecorator(fn) {\n  return async function (...args) {\n    try {\n      const val = await fn();\n      return val;\n    } catch (err) {\n      console.error(err);\n    }\n  }\n}",
      explanation:
        "La opción correcta es la D: 'Use the spread operator (...) to pass the parameters to fn() on line 4.'.\n\n**Explicación detallada:**\n\nLa razón del error 400 (Bad Request) es que los datos requeridos para la solicitud HTTP faltan. En el código original, los argumentos que se pasan a la función no se están pasando a la función decorada fn() en la línea 4. \n\n- El operador de propagación (spread operator) se utiliza para recibir los argumentos, combinándolos en un array si hay más de uno. \n- Para pasar los valores como argumentos separados (en lugar de un array), se debe usar nuevamente el operador de propagación al pasarlos a fn().\n\nLa función decoradora 'errorHandlingDecorator' no necesita ser 'async' para permitir el uso de la palabra clave 'await'. Solo la función envolvente inmediata debe ser 'async', y este ya es el caso aquí.",
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
        D: "The JavaScript interpreter completes the execution of the createCustomerMessage() function before executing the getCurrentDay() function.",
      },
      code: "const createCustomerMessage = (name) => {\n  const day = getCurrentDay();\n  const message = `Happy ${day}, ${name}!`;\n  return message;\n}\n\nconst getCurrentDay = () => {\n  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n  return weekdays[new Date().getDay()];\n}\n\nlet message = createCustomerMessage('Marcus');\nconsole.log(message);",
      explanation:
        "Las opciones correctas son A: 'Within the createCustomerMessage() function, the 'message' variable is not assigned to a value until all the lines in the getCurrentDay() function have been executed.' y B: 'When the getCurrentDay() function is encountered, it is added to the 'call stack', where it stays until its execution has been completed.'.\n\n**Explicación detallada:**\n\n1. **Pila de llamadas (Call Stack):** Cuando se ejecuta el código, la función 'createCustomerMessage()' se agrega a la pila de llamadas y el navegador comienza su ejecución. Al encontrar 'getCurrentDay()', esta función también se agrega a la pila de llamadas.\n\n2. **Secuencia de ejecución:** Hasta que se ejecuten todas las líneas dentro de 'getCurrentDay()', la variable 'message' no se asigna al literal de plantilla. Solo después de que 'getCurrentDay()' termina, las líneas restantes de 'createCustomerMessage()' se ejecutan.\n\n3. **Orden de ejecución:** Finalmente, se asigna el valor retornado por 'createCustomerMessage()' a la variable global 'message' y el método 'console.log()' muestra el mensaje en la consola.",
    },
    {
      id: "q29",
      question:
        "A development team wants to migrate its legacy JavaScript code to a newer ES6 code. The first step in this migration is to identify and convert code containing prototype-based inheritance into classes. William has been given the code snippet below for conversion into a class. \n\nWhich of the following statements regarding the conversion of the given code is false?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "'latitude' and 'longitude' must be class fields.",
        B: "The name of the newly created class should be 'Location'.",
        C: "'startMoving' and 'stopMoving' should be two methods in the newly created class.",
        D: "The constructor of the class should receive 'latitude' and 'longitude' as parameters.",
      },
      code: 'function Location(latitude, longitude) {\n  this.latitude = latitude;\n  this.longitude = longitude;\n}\n\nLocation.prototype.startMoving = function () {\n  // implementation here\n  console.log("Start moving");\n};\n\nLocation.prototype.stopMoving = function () {\n  // implementation here\n  console.log("Stop moving");\n};',
      explanation:
        "La opción correcta es A: 'latitude' and 'longitude' must be class fields.'. Aunque se recomienda declarar las variables 'latitude' y 'longitude' como campos de clase o como propiedades del constructor, no es obligatorio que sean específicamente campos de clase. Estas variables pueden ser simplemente propiedades de instancia inicializadas dentro del constructor de la clase.\n\n**Conversión a una clase en ES6:**\n```javascript\nclass Location {\n  constructor(latitude, longitude) {\n    this.latitude = latitude;\n    this.longitude = longitude;\n  }\n\n  startMoving() {\n    console.log(\"Start moving\");\n  }\n\n  stopMoving() {\n    console.log(\"Stop moving\");\n  }\n}\n```",
    },
    {
      id: "q30",
      question:
        "A developer is working on a meeting room reservation system. Each meeting room in the company is represented using a JavaScript object. Following a meeting, feedback can be provided on the state of the room. The feedback is attached to the 'feedback' property. When the feedback is resolved, it needs to be removed using the function below. The problem with the function is that the property is not removed from the object. \n\nWhat statement can be used to remove the property?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "obj.feedback = undefined;",
        B: "obj.feedback = '';",
        C: "delete feedback;",
        D: "delete obj.feedback;",
      },
      code: "function removeFeedback(obj) {\n  if (obj.feedback) {\n    obj.feedback = null; // replace this line\n  }\n};",
      explanation:
        "La opción correcta es la D: 'delete obj.feedback;'.\n\n**Explicación detallada:**\n\n- El operador 'delete' eliminará completamente una propiedad de un objeto en JavaScript.\n- Si se elimina la propiedad, el operador 'delete' devolverá 'true'.\n\n**Errores comunes:**\n- Establecer la propiedad en 'null', 'undefined' o una cadena vacía ('') no eliminará realmente la propiedad; simplemente establecerá su valor. La propiedad seguirá siendo parte del objeto.",
    },
    {
      id: "q31",
      question:
        "A developer working on an online quiz has imported two functions and a variable named 'questionCnt' from a module named 'question.js'. However, she receives an error when incrementing 'questionCnt'. \n\nWhat is causing the error and what code should she use?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "Changing the variable requires the use of a function instead of a statement. A function needs to be created and invoked.",
        B: "In order to update a module variable, it must be imported as a default. This code should be used: import {questionCnt as default, update QuestionCount, updateQuestions} from './questions.js';",
        C: "A variable cannot be changed outside a module. The imported function named 'updateQuestionCount' should be used to change the value.",
        D: "The increment operator cannot be used on imported variables. This code should be used: questionCnt = questionCnt + 1;",
      },
      code: "import {questionCnt, updateQuestionCount, updateQuestions} from './question.js';\n\n// As she includes additional questions, she increments the question count using this code:\nquestionCnt++;",
      explanation:
        "La opción correcta es la C: 'A variable cannot be changed outside a module. The imported function named 'updateQuestionCount' should be used to change the value.'.\n\n**Explicación detallada:**\n\nCuando se importa una variable desde un módulo, actúa como si estuviera definida usando 'const'. Por lo tanto, no se permite cambiar su valor fuera del módulo.\n\nPara solucionar este problema, el módulo puede proporcionar una función dedicada para actualizar la variable. En este caso, se puede utilizar la función 'updateQuestionCount' para modificar el valor de 'questionCnt' sin violar las restricciones del módulo.",
    },
    {
      id: "q32",
      question:
        "A developer is working on a function that will merge user objects from two different systems. The function is a good start, but there are two problems the developer would like to fix. First, when the objects are combined, she would like any properties in the 'newObj' to overwrite the same properties in the 'oldObj' if they exist in both. Also, the combined objects shouldn't be child objects. Moreover, when the code checks for the 'createdDate' property, she wants to make sure that the property is not inherited. \n\nWhich code changes will meet the objectives of this function?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "FIRST LINE: let combinedObj = oldObj.assign(newObj); SECOND LINE: if (!combinedObj.ownProperty('createdDate')) {",
        B: "FIRST LINE: let combinedObj = Object.assign({}, oldObj, newObj); SECOND LINE: if (!combinedObj.hasOwnProperty('createdDate')) {",
        C: "FIRST LINE: let combinedObj = oldObj.assign(newObj); SECOND LINE: if (!combinedObj.hasOwnProperty('createdDate')) {",
        D: "FIRST LINE: let combinedObj = oldObj + newObj; SECOND LINE: if (!combinedObj.ownProperty('createdDate')) {",
      },
      code: "function mergeObjects(oldObj, newObj) {\n  let combinedObj = {oldObj, newObj}; // Modify this line of code\n  if (!combinedObj.createdDate) { // Modify this line of code\n    combinedObj.createdDate = new Date();\n  }\n  return combinedObj;\n}",
      explanation:
        "La opción correcta es la B: 'FIRST LINE: let combinedObj = Object.assign({}, oldObj, newObj); SECOND LINE: if (!combinedObj.hasOwnProperty('createdDate')) {'.\n\n**Explicación detallada:**\n\n1. **Object.assign():** Este método permite fusionar múltiples objetos copiando todas las propiedades enumerables propias de uno o más objetos fuente a un objeto destino. Esto asegura que las propiedades de 'newObj' sobrescriban las de 'oldObj' si existen en ambos.\n\n2. **hasOwnProperty():** Este método verifica si un objeto posee una propiedad específica y si es propia del objeto (es decir, no se hereda). Esto asegura que la verificación de 'createdDate' sea precisa y no incluya propiedades heredadas.\n\n**Código modificado:**\n```javascript\nlet combinedObj = Object.assign({}, oldObj, newObj);\nif (!combinedObj.hasOwnProperty('createdDate')) {\n  combinedObj.createdDate = new Date();\n}\n```",
    },
    {
      id: "q33",
      question:
        "A developer employed by an online shopping platform wants to make all of his class methods read-only to avoid any tampering. A decorator function named 'readonly' has been developed for this purpose. \n\nThe class methods are given below. Which property descriptor(s) can be used for making the class methods read-only?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "Readonly, Writable",
        B: "Readonly",
        C: "Configurable",
        D: "Writable",
      },
      code: "class Transaction {\n  @readonly\n  getTransaction(id) {\n    // Method implementation\n  }\n\n  @readonly\n  saveTransaction(transaction) {\n    // Method implementation\n  }\n}",
      explanation:
        "La opción correcta es la D: 'Writable'.\n\n**Explicación detallada:**\n\nEl comportamiento de solo lectura de una propiedad depende únicamente del descriptor de propiedad 'writable'. Este comportamiento es independiente de otros descriptores de propiedad como 'configurable'.\n\n**Implementación:**\nEl decorador puede configurarse de la siguiente manera para asegurar que los métodos sean de solo lectura:\n\n```javascript\nfunction readonly(target, name, descriptor) {\n  descriptor.writable = false;\n  return descriptor;\n}\n```",
    },
    {
      id: "q34",
      question:
        "Adam has developed two decorator functions to cache data and handle exceptions. They have been used in the Cart class as shown below. The 'cacheData' decorator function will help cache the data used in the getCart method while the handleException decorator will help handle exceptions. Adam found out that the 'cacheData' decorator can also throw an exception that needs to be handled by the handleException decorator. \n\nWhich of the options below are true regarding the desired outcome?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Multiple decorators cannot be used on a class method.",
        B: "Line 2 should have the 'cacheData' decorator and line 3 should have the 'handleException' decorator to get the desired outcome.",
        C: "Only one of the decorator functions will be evaluated, so the desired outcome cannot be achieved.",
        D: "The above implementation of the decorators will result in the desired outcome.",
      },
      code: "class Cart {\n  @handleException\n  @cacheData\n  getCart() {\n    // Method implementation\n  }\n}",
      explanation:
        "La opción correcta es la B: 'Line 2 should have the 'cacheData' decorator and line 3 should have the 'handleException' decorator to get the desired outcome.'.\n\n**Explicación detallada:**\n\n1. **Uso de múltiples decoradores:** Es posible usar múltiples decoradores en clases y propiedades de clase. Los decoradores se evalúan de arriba hacia abajo y luego los resultados se ejecutan como funciones de abajo hacia arriba.\n\n2. **Orden correcto para el resultado deseado:** Para manejar correctamente las excepciones generadas por 'cacheData', el decorador 'handleException' debe ser llamado después de que se ejecute el decorador 'cacheData'. Esto asegura que cualquier error lanzado por 'cacheData' sea manejado adecuadamente.\n\n**Implementación ajustada:**\n```javascript\nclass Cart {\n  @cacheData\n  @handleException\n  getCart() {\n    // Method implementation\n  }\n}\n```",
    },
    {
      id: "q35",
      question:
        "A developer is working on an online application that provides equivalent keystrokes for certain functionality. In order to implement this, the keystrokes are handled by a named function called 'handleKeyPress'. But she would like to add the option to remove this feature. \n\nWhich code statement can be used to remove the given event listener?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "document.removeEventListener('keypress', handleKeyPress, true);",
        B: "removeEventListener('keypress', handleKeyPress, true);",
        C: "document.removeEventListener('keypress', handleKeyPress, false);",
        D: "window.removeEventListener('keypress', handleKeyPress, false);",
      },
      code: "document.addEventListener('keypress', handleKeyPress, false);",
      explanation:
        "La opción correcta es la C: 'document.removeEventListener('keypress', handleKeyPress, false);'.\n\n**Explicación detallada:**\n\nEl método 'removeEventListener' elimina un listener de eventos que ha sido registrado previamente usando el método 'addEventListener'.\n\n**Requisitos para eliminar el listener correctamente:**\n1. El objetivo del evento (en este caso, 'document') debe coincidir.\n2. El nombre de la función que maneja el evento ('handleKeyPress') debe coincidir.\n3. El valor del parámetro 'useCapture' (en este caso, 'false') debe coincidir con el utilizado al agregar el listener de eventos. Si alguno de estos valores no coincide, el listener no será eliminado.",
    },
    {
      id: "q36",
      question:
        "A developer has defined multiple functions and a JavaScript object in the 'utilities.js' module. These are needed in the main JavaScript file named 'main.js' in order to complete a project. The following export statement is at the bottom of the 'utilities.js' file. The 'utilities.js' file is contained in a subfolder named 'util' in the current directory. \n\nWhich import statement can be added to the 'main.js' file to make 'splitUnit', 'createUnit', 'normalizeUnit', and the 'manageObj' object available for use?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "import {splitUnit, createUnit, normalizeUnit, manageObj} from './util/utilities.js';",
        B: "import * from './util/utilities.js';",
        C: "import {splitUnit, createUnit, normalizeUnit, manageObj} from '../util/utilities.js';",
        D: "import all from './util/utilities.js';",
      },
      code: "export { splitUnit, compile, createUnit, normalizeUnit, manageObj };",
      explanation:
        "La opción correcta es la A: 'import {splitUnit, createUnit, normalizeUnit, manageObj} from './util/utilities.js';'.\n\n**Explicación detallada:**\n\n1. **Importación de múltiples elementos exportados con nombre:** Para importar múltiples elementos exportados desde un módulo que utiliza exportaciones con nombre, los nombres de cada elemento deben enumerarse entre llaves.\n\n2. **Ruta de acceso correcta:** Dado que 'utilities.js' está en una subcarpeta llamada 'util' en el mismo directorio, la ruta en la declaración 'import' debe ser './util/utilities.js'. Usar '../util/utilities.js' sería incorrecto, ya que apunta a una carpeta 'util' en el directorio padre.\n\n3. **Importar todo con '*':** Si se utiliza '*' para importar todos los elementos exportados, se debe usar la sintaxis 'import * as util', donde 'util' es el nombre del objeto módulo que se usa como espacio de nombres para referirse a las exportaciones. Por ejemplo, cada elemento exportado podría ser accedido como 'util.splitUnit()'.",
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
        C: "An error occurs since 'subjectMarks' is passed as an argument to the 'addSubjectMarks ToReport' method but it is also an instance variable of the class.",
        D: "Arrays can contain only primitive values but the 'addSubjectMarksToReport' method pushes an object into the 'subjectMarks' array.",
      },
      code: 'class StudentReport {\n  constructor(passMark, studentId) {\n    this.passMark = passMark;\n    this.studentId = studentId;\n    this.subjectMarks = [];\n  }\n\n  isSubjectPassed(subjectMark) {\n    return subjectMark >= this.passMark;\n  }\n\n  addSubjectMarksToReport(subjectMarks) {\n    subjectMarks.forEach(function (obj) {\n      let result = { ...obj, isPassed: this.isSubjectPassed(obj.mark) };\n      this.subjectMarks.push(result);\n    });\n    return subjectMarks;\n  }\n}\n\nlet studentReport = new StudentReport(40, 1234);\nlet marks = [{ name: "Science", mark: 70 }, { name: "History", mark: 39 }];\nstudentReport.addSubjectMarksToReport(marks);',
      explanation:
        "La opción correcta es la B: 'The 'this' property cannot be accessed from within a nested function in a class method.'.\n\n**Explicación detallada:**\n\n1. **Problema con 'this':** Cuando se llama a una función en JavaScript, la palabra clave 'this' hace referencia al objeto global. Sin embargo, cuando esa misma función se llama dentro de 'strict mode' (modo estricto), el valor de 'this' es undefined.\n\n2. **Clases y 'this':** Dentro de un método de clase, 'this' hace referencia al objeto de la clase. Pero si se accede a 'this' desde una función anidada dentro de un método de clase, el valor de 'this' será undefined, ya que las clases siempre se ejecutan en modo estricto.\n\n**Corrección:** Se puede usar una función flecha dentro del método 'forEach'. Las funciones flecha no tienen su propio 'this'; en su lugar, heredan el valor de 'this' del entorno donde se definen.\n\n**Código corregido:**\n```javascript\naddSubjectMarksToReport(subjectMarks) {\n  subjectMarks.forEach((obj) => {\n    let result = { ...obj, isPassed: this.isSubjectPassed(obj.mark) };\n    this.subjectMarks.push(result);\n  });\n  return subjectMarks;\n}\n```",
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
      code: "let name = 'Jon Bond';\nlet message;\n\nprocessName(name);\nconsole.log(message);\n\nfunction processName(name) {\n  console.log('processing name');\n  generateMessage(name);\n}\n\nfunction generateMessage(name) {\n  message = createString(name);\n  console.log('generated message');\n}\n\nfunction createString(name) {\n  console.log('creating string');\n  return `Welcome to the company, ${name}!`;\n}",
      explanation:
        "La opción correcta es la C: 'processing name, creating string, generated message, Welcome to the company, Jon Bond!'.\n\n**Explicación detallada:**\n\n1. **Ejecución de funciones y pila de llamadas (call stack):**\n   - Cuando se ejecuta el código, la función `processName()` se agrega a la pila de llamadas y comienza su ejecución.\n   - `processName()` llama a `generateMessage()`, que a su vez llama a `createString()`. Esto provoca que las tres funciones se acumulen en la pila de llamadas en el orden:\n     1. `createString()`\n     2. `generateMessage()`\n     3. `processName()`\n\n2. **Secuencia de mensajes:**\n   - Al invocar `processName()`, se imprime 'processing name'.\n   - `generateMessage()` llama a `createString()`, que imprime 'creating string' y devuelve el mensaje.\n   - Después, `generateMessage()` imprime 'generated message'.\n   - Finalmente, el mensaje global 'Welcome to the company, Jon Bond!' se imprime en la consola.",
    },
    {
      id: "q39",
      question:
        "As part of an online course, a questions array is built in order to keep track of all the questions that have been presented to the learner. Below is a sample of what the 'questionsArray' might look like. As shown, the array sometimes collects duplicates. \n\nIn order to process the array, a developer must remove the duplicate values. What line of code can be used to remove the duplicates?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "let newQuizQuestions = new WeakMap(quizQuestions);",
        B: "let newQuizQuestions = new UniqueArray(quizQuestions);",
        C: "let new QuizQuestions = new Map(quizQuestions);",
        D: "let newQuizQuestions = new Set(quizQuestions);",
      },
      code: "['q1', 'q5', 'q13', 'q4', 'q1', 'q2', 'q10', 'q11', 'q12', 'q13']",
      explanation:
        "La opción correcta es la D: 'let newQuizQuestions = new Set(quizQuestions);'.\n\n**Explicación detallada:**\n\n1. **Uso de Set:** El tipo de colección 'Set' permite crear una colección que almacena valores únicos. Se puede crear un 'Set' pasando un iterable, como un array, al constructor de 'Set'. Esto asegura que no haya valores duplicados en el conjunto.\n\n2. **Ejemplo práctico:**\n```javascript\nlet questionsArray = ['q1', 'q5', 'q13', 'q4', 'q1', 'q2', 'q10', 'q11', 'q12', 'q13'];\nlet uniqueQuestions = [...new Set(questionsArray)];\nconsole.log(uniqueQuestions); // ['q1', 'q5', 'q13', 'q4', 'q2', 'q10', 'q11', 'q12']\n```",
    },
    {
      id: "q40",
      question:
        "A developer needs to define an automated process for an employee management application. As part of the process, the setTimeout() method is being used to execute two functions. The second function should be executed without any delay after the first function. The 'data' variable has been assigned to an expected value for the purpose of testing. The following code has been written. \n\nWhich of the following statements are true about the output of this code?",
      type: "multiple choice",
      correct_options: ["C", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "The updateProfile() function will be called immediately after the execution of the updateRole() function.",
        B: "The last message in the console will be 'process complete'.",
        C: "The updateRole() function will be called after the execution of the 'process complete' console.log() statement.",
        D: "The second message in the console will be 'updated user: Jim Stokes'!",
      },
      code: "const data = {\n  user: {\n    name: 'Jim Stokes',\n    updated: '2020-07-25'\n  }\n};\n\nconst fetchUser = (data) => {\n  const user = data.user ? data.user.name : null;\n  return user;\n};\n\nconsole.log('starting the process');\nsetTimeout(() => {\n  console.log('updating user role');\n  updateRole();\n}, 1000);\n\nsetTimeout(() => {\n  console.log('updating user profile');\n  updateProfile();\n}, 0);\n\nconsole.log(`updated user: ${fetchUser(data)}`);\nconsole.log('process complete');",
      explanation:
        "Las opciones correctas son C: 'The updateRole() function will be called after the execution of the 'process complete' console.log() statement.' y D: 'The second message in the console will be 'updated user: Jim Stokes'!'.\n\n**Explicación detallada:**\n\n1. **Manejo de la pila de llamadas (call stack):** Todas las llamadas de función son procesadas en la pila de llamadas primero. Cuando se encuentra un 'setTimeout', el código dentro de él se agrega a la 'message queue', donde espera a ser ejecutado.\n\n2. **Uso de la cola de mensajes (message queue):** Los mensajes en la cola solo se procesan después de que la pila de llamadas esté vacía. Esto significa que 'setTimeout()' con un retraso de 0 ms no se ejecuta inmediatamente. En este caso, el código de la cola ejecutará 'updateProfile()' antes de 'updateRole()', ya que tiene un retraso menor.\n\n**Secuencia de ejecución:**\n- El primer mensaje es 'starting the process'.\n- El segundo mensaje es 'updated user: Jim Stokes'.\n- El tercer mensaje es 'process complete'.\n- El cuarto mensaje, 'updating user profile', ocurre justo después.\n- El quinto mensaje, 'updating user role', aparece al final.",
    },
    {
      id: "q41",
      question:
        "While working on a new project, a developer encounters a situation that requires the use of a single function from each of three different modules. The 'parseData' function is needed from 'dataUtil.js'. The 'compose' function is needed from 'util.js'. And the 'normalizeData' function is needed from 'commonUtils.js'. All three module files are contained in a subfolder of the project named 'utilities'. In order to make these functions easily available throughout the project, the developer decides to create a passthrough module named 'pass.js' in the main project folder. \n\nWhat code must be added to 'pass.js' to make the three functions available to any module that imports 'pass.js'?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "import {parseData, compose, normalizeData} from './utilities/dataUtil.js','./utilities/util.js', './utilities/commonUtils.js';",
        B: "export {parseData} from './utilities/dataUtil.js'; export {compose} from './utilities/util.js'; export {normalizeData} from './utilities/commonUtils.js';",
        C: "import {parseData} from './utilities/dataUtil.js'; import {compose} from './utilities/util.js'; import {normalizeData} from './utilities/commonUtils.js';",
        D: "export {parseData, compose, normalizeData} from './utilities/dataUtil.js' ,' ./utilities/util.js', './utilities/commonUtils.js';",
      },
      explanation:
        "La opción correcta es la B: 'export {parseData} from './utilities/dataUtil.js'; export {compose} from './utilities/util.js'; export {normalizeData} from './utilities/commonUtils.js;'.\n\n**Explicación detallada:**\n\nUn módulo de pasarela ('passthrough module') se puede crear importando elementos de otros módulos y exportándolos para hacerlos disponibles a cualquier otro módulo que los requiera. Esto se puede lograr utilizando la sintaxis 'export from', que permite importar y exportar un elemento en una sola línea.\n\n**Ejemplo práctico:**\n```javascript\nexport {parseData} from './utilities/dataUtil.js';\nexport {compose} from './utilities/util.js';\nexport {normalizeData} from './utilities/commonUtils.js';\n```\n\nUna vez creado el módulo de pasarela, cualquier módulo puede importar las funciones necesarias desde este módulo usando declaraciones de importación estándar.",
    },
    {
      id: "q42",
      question:
        "A developer wants to implement a User class to ease the process of creating multiple user objects with similar properties. Given below is the class implementation. However, the instantiation throws an error. \n\nWhich of the following is the reason?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "The objects userObj1 and userObj2 were instantiated with the same value of the Id property.",
        B: "The same class cannot be used to instantiate two different objects.",
        C: "A class cannot contain two constructors.",
        D: "The name of an object should start with a capital letter.",
      },
      code: 'class User {\n  constructor(id, name, age, salary) {\n    this.id = id;\n    this.name = name;\n    this.age = age;\n    this.salary = salary;\n  }\n\n  constructor(id, name, age) {\n    this.id = id;\n    this.name = name;\n    this.age = age;\n  }\n}\n\n// The User class was instantiated using the following code:\nconst userObj1 = new User(1, "Alice", 30, 43000);\nconst userObj2 = new User(1, "John", 45);',
      explanation:
        'La opción correcta es la C: \'A class cannot contain two constructors.\'.\n\n**Explicación detallada:**\n\n1. **Un constructor por clase:** En JavaScript, una clase solo puede tener un único constructor. Si se intenta definir más de un constructor en la misma clase, el código generará un error de sintaxis.\n\n2. **Corrección:** Para manejar múltiples configuraciones de inicialización, el constructor puede aceptar parámetros opcionales y ajustar la lógica según los valores recibidos.\n\n**Ejemplo corregido:**\n```javascript\nclass User {\n  constructor(id, name, age, salary = null) {\n    this.id = id;\n    this.name = name;\n    this.age = age;\n    this.salary = salary;\n  }\n}\n\nconst userObj1 = new User(1, "Alice", 30, 43000);\nconst userObj2 = new User(1, "John", 45);\n```',
    },
    {
      id: "q43",
      question:
        "A developer is working on a solution that requires producing a function that has access to a variable that is private; it can't be affected by other code. She has created a possible solution to test her approach. \n\nWhat will be displayed in the console?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "NaN",
        B: "Uncaught ReferenceError: incrementCnt is not defined",
        C: "Uncaught ReferenceError: setCounter is not defined",
        D: "5",
      },
      code: "function initialize() {\n  let count = 0;\n  let counter = 1;\n  setCounter(5);\n  function setCounter(val) {\n    if (val > 0) counter = val;\n  };\n  return function(num) {\n    setCounter(num);\n    count += counter;\n    console.log(count);\n  };\n};\n\nconst incrementCnt = initialize();\n\n// Once she has run this code, she opens the console and invokes the 'incrementCnt' function.\nincrementCnt();",
      explanation:
        "La opción correcta es la D: '5'.\n\n**Explicación detallada:**\n\n1. **Hoisting de funciones:** Las declaraciones de funciones en JavaScript son 'hoisted', lo que significa que se colocan en memoria antes de que se ejecute el código. Esto permite que una función sea llamada incluso antes de ser definida lexicamente en el código.\n\n2. **Uso de closures:** El closure permite que las variables y funciones dentro de una función se retengan en memoria y sean accesibles incluso después de que la función que las contiene haya terminado. En este caso, la función 'incrementCnt' que es devuelta por 'initialize()' todavía tiene acceso a 'setCounter', 'count' y 'counter' a través del closure.\n\n**Secuencia de ejecución:**\n- Cuando se llama a 'incrementCnt()', el valor inicial de 'counter' se establece en 5.\n- La función incrementa 'count' por el valor de 'counter', produciendo el valor '5' en la consola.",
    },
    {
      id: "q44",
      question:
        "What will be the result of the JavaScript code below when executed?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "Date and timestamp will be displayed in the browser console.",
        B: "The displayTime() function will throw an error.",
        C: "Only the date will be displayed in the browser console.",
        D: "The displayDate() function will throw an error.",
      },
      code: "displayTime(0);\n\ndisplayDate();\n\nfunction displayTime(secondsDelay) {\n  function delay(seconds) {\n    setTimeout(() => { console.log(`time: ${new Date().getTime()}`) }, seconds * 1000);\n  }\n  delay(secondsDelay);\n}\n\nvar displayDate = function () {\n  console.log(`date: ${new Date()}`);\n};",
      explanation:
        "La opción correcta es la D: 'The displayDate() function will throw an error.'.\n\n**Explicación detallada:**\n\n1. **Funciones creadas mediante expresión:** Las funciones creadas usando la sintaxis de expresión, como 'displayDate', necesitan estar definidas antes de ser usadas. En este caso, 'displayDate()' se llama antes de que la función sea definida, lo que genera un error.\n\n2. **Hoisting y uso de 'var':** Aunque el uso de 'var' provoca que la variable 'displayDate' sea hoisted, solo la declaración de la variable se eleva, no su valor asignado. Por lo tanto, cuando 'displayDate()' se invoca antes de la definición, el valor de 'displayDate' será 'undefined', lo que genera un error.",
    },
    {
      id: "q45",
      question:
        "A developer is creating 100 objects using the following techniques shown below. After examining technique A and technique B, which statement accurately reflects how many versions of the 'fullName' method will be created with each technique?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Technique A produces 1 version and technique B produces 1 version.",
        B: "Technique A produces 100 versions and technique B produces 1 version.",
        C: "Technique A produces 1 version and technique B produces 100 versions.",
        D: "Technique A produces 100 versions and technique B produces 100 versions.",
      },
      code: "// Technique A\nfunction NewUser(fName, lName) {\n  this.firstName = fName;\n  this.lastName = lName;\n  this.fullName = function() {\n    return `${this.firstName} ${this.lastName}`;\n  };\n};\n\n// Following technique repeated 100 times with different names and variables\nconst usr1 = new NewUser('Stan', 'Jones');\n\n// Technique B\nfunction NewUser(fName, lName) {\n  this.firstName = fName;\n  this.lastName = lName;\n};\n\nNewUser.prototype.fullName = function() {\n  return `${this.firstName} ${this.lastName}`;\n};\n\n// Following technique repeated 100 times with different names and variables\nconst usr1 = new NewUser('Stan', 'Jones');",
      explanation:
        "La opción correcta es la B: 'Technique A produces 100 versions and technique B produces 1 version.'.\n\n**Explicación detallada:**\n\n1. **Technique A:** El método 'fullName' se define dentro del constructor. Por lo tanto, cada vez que se crea un nuevo objeto usando el constructor, se crea una nueva copia del método 'fullName'. Esto genera 100 versiones del método.\n\n2. **Technique B:** El método 'fullName' se define en el prototipo de la función del constructor. Los objetos creados con esta técnica no contienen copias del método. Cuando el método se llama desde un objeto, se obtiene del prototipo compartido. Esto significa que solo se crea una versión del método.",
    },
    {
      id: "q46",
      question:
        "The following function has been set up to check an object. If the value of results is greater than 80, a property named 'tested' should be added to the object before it is sent to the 'recordResults' function. However, the original object should not be changed in the process. \n\nWhich of the following statements are correct about this function?",
      type: "multiple choice",
      correct_options: ["B", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "The function will not change the original object as long as it is declared using const.",
        B: "Modifying a property of 'obj' will modify the original object.",
        C: "The function will not change the original object because it is assigned to a new variable.",
        D: "The 'obj' variable refers to the original object because objects are passed by reference.",
      },
      code: "function adjustObj(obj) {\n  if (obj.results > 80) {\n    obj.tested = true;\n  }\n  recordResults(obj);\n};",
      explanation:
        "Las opciones correctas son B: 'Modifying a property of 'obj' will modify the original object.' y D: 'The 'obj' variable refers to the original object because objects are passed by reference.'.\n\n**Explicación detallada:**\n\n1. **Objetos pasados por referencia:** Cuando se pasa un objeto a una función, se pasa una referencia al objeto en memoria, no una copia del objeto. Por lo tanto, cualquier modificación a la referencia también afecta al objeto original.\n\n2. **Modificación de propiedades:** Cambiar una propiedad del objeto (como 'tested') dentro de la función también modifica el objeto original porque ambas variables (el objeto original y 'obj') apuntan al mismo objeto en memoria.",
    },
    {
      id: "q47",
      question:
        "A developer wants to implement a Buyer class that is a child class of User. The developed classes are given below, but they do not work as intended. \n\nWhich of the following statements are true?",
      type: "multiple choice",
      correct_options: ["C", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "The User class constructor expects 3 parameters but the super call in the child class constructor passes 4 arguments, which would throw an error.",
        B: "The 'addToPurchaseHistory' method tries to access the 'name' property but it does not exist in the Buyer class.",
        C: "The 'super' keyword should be used to call the parent class constructor before accessing the 'this' property in the child constructor.",
        D: "The child class should always extend the parent class.",
      },
      code: "class Buyer {\n  constructor(id, name, age) {\n    // implementation here\n  }\n}\n\nclass User extends Buyer {\n  constructor(id, name, age, purchaseHistory) {\n    this.purchaseHistory = purchaseHistory;\n    super(id, name, age, 25000);\n  }\n\n  addToPurchaseHistory(purchase) {\n    console.log(`User ${this.name} purchased ${purchase}`);\n    this.purchaseHistory.push(purchase);\n  }\n}",
      explanation:
        "Las opciones correctas son C: 'The 'super' keyword should be used to call the parent class constructor before accessing the 'this' property in the child constructor.' y D: 'The child class should always extend the parent class.'.\n\n**Explicación detallada:**\n\n1. **Uso de 'super':** En JavaScript, el constructor del padre (llamado con 'super') debe ser invocado antes de acceder a 'this' en el constructor del hijo. En el código dado, 'this.purchaseHistory' se accede antes de llamar a 'super', lo que genera un error.\n\n2. **Relación padre-hijo:** En la herencia, siempre es el hijo (Buyer) quien extiende al padre (User), no al revés.\n\n**Corrección:**\n```javascript\nclass User {\n  constructor(id, name, age, purchaseHistory) {\n    this.id = id;\n    this.name = name;\n    this.age = age;\n    this.purchaseHistory = purchaseHistory || [];\n  }\n\n  addToPurchaseHistory(purchase) {\n    console.log(`User ${this.name} purchased ${purchase}`);\n    this.purchaseHistory.push(purchase);\n  }\n}\n\nclass Buyer extends User {\n  constructor(id, name, age) {\n    super(id, name, age);\n  }\n}\n```",
    },
    {
      id: "q48",
      question: "Refer to the code below:\n\nWhat value can a developer expect when referencing `o.js.secondCity`?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Undefined",
        B: "'new york'",
        C: "'New York'",
        D: "An error"
      },
      code: "let o = {\n  get js() {\n    let city1 = String('St. Louis');\n    let city2 = String('New York');\n    return {\n      firstCity: city1.toLowerCase(),\n      secondCity: city2.toLowerCase(),\n    };\n  }\n};",
      explanation: "La opción correcta es la B: `'new york'`.\n\n**Explicación detallada:**\n\n1. **Uso del getter `js`:** Al acceder a `o.js`, el getter devuelve un objeto con las propiedades `firstCity` y `secondCity`. Estas propiedades son cadenas convertidas a minúsculas utilizando el método `.toLowerCase()`.\n\n2. **Acceso a `secondCity`:** Cuando se accede a `o.js.secondCity`, se evalúa la propiedad `secondCity` del objeto retornado por el getter. En este caso, `secondCity` contiene el valor `'new york'`, ya que la cadena original `'New York'` fue convertida a minúsculas.\n\n3. **Opciones incorrectas:**\n   - A: `Undefined` no es correcto porque `o.js.secondCity` se evalúa a un valor definido.\n   - C: `'New York'` no es correcto porque el método `.toLowerCase()` convierte la cadena a minúsculas.\n   - D: No se genera ningún error en la ejecución del código."
    },
    {
      id: "q49",
      question: "A developer creates an object where its properties should be immutable and prevent properties from being added or modified. \n\nWhich method should be used to execute this business requirement?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "Object.const()",
        B: "Object.eval()",
        C: "Object.lock()",
        D: "Object.freeze()"
      },
      explanation: "La opción correcta es la D: 'Object.freeze()'.\n\n**Explicación detallada:**\n\n1. **Object.freeze():** Este método se utiliza para hacer un objeto inmutable. Cuando se aplica a un objeto, el objeto resultante no permite la adición, eliminación ni modificación de sus propiedades. También evita cambiar las propiedades existentes, incluyendo sus valores y descriptores.\n\n2. **Opciones incorrectas:**\n   - A: 'Object.const()' no es un método válido en JavaScript.\n   - B: 'Object.eval()' tampoco es un método válido y `eval` se utiliza para ejecutar cadenas de código, lo cual no cumple con el requisito de inmutabilidad.\n   - C: 'Object.lock()' no existe en JavaScript.\n\n3. **Conclusión:** Usar `Object.freeze()` cumple con el requerimiento de prevenir modificaciones en las propiedades del objeto."
    },
    {
      id: "q50",
      question: "Refer to the code below:\n\nWhich two functions can replace line 01 and return 58 to `sum`?",
      type: "multiple choice",
      correct_options: ["A", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "const addBy = function(num1) { return function(num2) { return num1 + num2; }; };",
        B: "const addBy = function(num1) { return num1 + num2; };",
        C: "const addBy = (num1) => num1 + num2;",
        D: "const addBy = (num1) => (num2) => num1 + num2;"
      },
      explanation: "Las respuestas correctas son A: 'const addBy = function(num1) { return function(num2) { return num1 + num2; }; };' y D: 'const addBy = (num1) => (num2) => num1 + num2;'.\n\n**Explicación detallada:**\n\n1. **Currying:** Las funciones en las opciones A y D son ejemplos de currying, donde una función principal devuelve otra función para operar sobre un nuevo argumento. Esto permite usar `addBy` para crear funciones específicas como `addByEight`.\n\n2. **Por qué A y D funcionan:**\n   - En la opción A, `addBy` es una función que toma un argumento (`num1`) y devuelve otra función. Esta segunda función toma el segundo argumento (`num2`) y retorna la suma de ambos.\n   - En la opción D, se utiliza una sintaxis de función flecha (`=>`) para lograr el mismo comportamiento, con el mismo resultado.\n\n3. **Opciones incorrectas:**\n   - B y C intentan sumar directamente dentro de la primera función, pero no proporcionan una segunda función que tome el siguiente argumento. Esto rompe la lógica requerida para asignar `addBy(8)` a `addByEight` y luego usarlo con un segundo valor."
    },
    {
      id: "q51",
      question: "Refer to the code below. What are the values of `objBook` and `newObjBook` respectively?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "[title: 'javaScript'] [title: 'javaScript']",
        B: "{author: 'Robert', title: 'javaScript'} Undefined",
        C: "{author: 'Robert', title: 'javaScript'} {author: 'Robert', title: 'javaScript'}",
        D: "{author: 'Robert'} {author: 'Robert', title: 'javaScript'}"
      },
      code: "const objBook = { title: 'JavaScript' };\nObject.preventExtensions(objBook);\nconst newObjBook = objBook;\nnewObjBook.author = 'Robert';",
      explanation: "La opción correcta es la A: '[title: 'javaScript'] [title: 'javaScript']'.\n\n**Explicación detallada:**\n\n1. **Uso de Object.preventExtensions():** Este método impide que se agreguen nuevas propiedades a un objeto existente. Sin embargo, las propiedades existentes pueden modificarse o eliminarse.\n\n2. **Asignación de `newObjBook`:** En JavaScript, la asignación de objetos no crea una copia independiente del objeto. Tanto `objBook` como `newObjBook` hacen referencia al mismo objeto en memoria.\n\n3. **Intento de agregar propiedades:** La línea `newObjBook.author = 'Robert';` intenta agregar una nueva propiedad al objeto. Sin embargo, debido al uso de `Object.preventExtensions(objBook)`, esta operación falla silenciosamente y no genera un error en modo normal (aunque en modo estricto podría generar un error).\n\n4. **Resultado final:** Ninguna nueva propiedad se agrega al objeto. Tanto `objBook` como `newObjBook` conservan únicamente la propiedad `title` con el valor `'javaScript'`."
    },
    {
      id: "q52",
      question: "Refer to the code below. What is the value of the `result` after last line executes?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "Error: myFather.job is not a function",
        B: "Undefined Developer",
        C: "John undefined",
        D: "John Developer"
      },
      code: "function Person() {\n  this.firstName = 'John';\n}\n\nPerson.prototype = {\n  job: x => 'Developer'\n};\n\nconst myFather = new Person();\nconst result = myFather.firstName + '' + myFather.job();",
      explanation: "La opción correcta es la D: 'John Developer'.\n\n**Explicación detallada:**\n\n1. **Objeto y prototipos:** La función constructora `Person` inicializa el objeto `myFather` con la propiedad `firstName` establecida en `'John'`.\n\n2. **Prototipo modificado:** `Person.prototype` ha sido sobrescrito con un nuevo objeto que contiene el método `job`. Este método utiliza una función flecha que devuelve la cadena `'Developer'`.\n\n3. **Acceso al prototipo:** Cuando se llama a `myFather.job()`, se busca el método `job` en la cadena de prototipos y lo encuentra en `Person.prototype`. La función flecha devuelve `'Developer'`.\n\n4. **Construcción del resultado:** La línea `const result = myFather.firstName + '' + myFather.job();` concatena el valor de `firstName` ('John') y el valor devuelto por `job()` ('Developer'), produciendo `'John Developer'`.\n\n5. **Opciones incorrectas:**\n   - A: No se genera un error, ya que `job` es accesible desde el prototipo.\n   - B: `'Undefined Developer'` no es correcto porque `firstName` tiene un valor definido.\n   - C: `'John undefined'` no es correcto porque `job()` devuelve un valor definido ('Developer')."
    },
    {
      id: "q53",
      question: "At Universal Containers, every team has its own way of copying JavaScript objects. The code snippet shows an implementation from one team. What is the output of the code execution?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "Hello Dan Doe",
        B: "Hello John Doe",
        C: "TypeError: dan.name is not a function",
        D: "TypeError: Assignment to constant variable."
      },
      code: "function Person() {\n  this.firstName = \"John\";\n  this.lastName = \"Doe\";\n  this.name = () => {\n    console.log(`Hello ${this.firstName} ${this.lastName}`);\n  };\n}\n\nconst john = new Person();\nconst dan = JSON.parse(JSON.stringify(john));\ndan.firstName = 'Dan';\ndan.name();",
      explanation: "La opción correcta es la C: 'TypeError: dan.name is not a function'.\n\n**Explicación detallada:**\n\n1. **Uso de JSON.stringify y JSON.parse:** Estos métodos convierten un objeto en una cadena JSON y luego lo reconstruyen como un nuevo objeto. Sin embargo, las funciones no se incluyen en la cadena JSON resultante.\n\n2. **Resultado:** Al convertir el objeto `john` en JSON, la propiedad `name` (que es una función) se elimina. Como resultado, el objeto reconstruido `dan` no tiene la propiedad `name`.\n\n3. **Intento de ejecución:** Cuando se llama a `dan.name()`, se genera un error porque `name` no existe en el objeto `dan`, ni como función ni como propiedad.\n\n4. **Otras opciones:**\n   - A y B: No son correctas porque la ejecución no puede completar con éxito la llamada a `dan.name()`.\n   - D: La declaración no intenta reasignar una constante, por lo que no ocurre este error."
    },
    {
      id: "q54",
      question: "Refer to the following object. How can a developer access the `fullName` property for `cat`?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "cat.fullName",
        B: "cat.fullName()",
        C: "cat.get.fullName",
        D: "cat.function.fullName()"
      },
      code: "const cat = {\n  firstName: 'Fancy',\n  lastName: 'Whiskers',\n  get fullName() {\n    return this.firstName + ' ' + this.lastName;\n  }\n};",
      explanation: "La opción correcta es la A: 'cat.fullName'.\n\n**Explicación detallada:**\n\n1. **Uso de la propiedad `get`:** El objeto `cat` define un método de acceso (`getter`) llamado `fullName`. Los métodos de acceso se invocan como propiedades, sin paréntesis.\n\n2. **Acceso a `fullName`:** La forma correcta de acceder al valor calculado por el método de acceso es usando `cat.fullName`, ya que este es un getter.\n\n3. **Opciones incorrectas:**\n   - B: 'cat.fullName()' no es válido porque los getters no se llaman como funciones.\n   - C: 'cat.get.fullName' no es válido porque `get` no es una propiedad en el objeto `cat`.\n   - D: 'cat.function.fullName()' tampoco es válido porque `function` no es un método o propiedad definida en el objeto `cat`."
    },
    {
      id: "q55",
      question: "Refer to the code below. What is the output of this function when called with an empty array?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "Returns 0",
        B: "Throws an error",
        C: "Returns 10",
        D: "Returns NaN"
      },
      code: "const myFunction = arr => {\n  return arr.reduce((result, current) => {\n    return result + current;\n  }, 10);\n};",
      explanation: "La opción correcta es la C: 'Returns 10'.\n\n**Explicación detallada:**\n\n1. **Método `reduce`:** El método `reduce` toma un acumulador (`result`) y el valor actual (`current`) y aplica una operación para transformar los valores en un único resultado.\n\n2. **Valor inicial:** En el código proporcionado, el valor inicial del acumulador se establece como `10` en el segundo argumento de `reduce`. Si el array proporcionado está vacío, el `reduce` simplemente devuelve este valor inicial.\n\n3. **Resultado:** Como el array está vacío, no hay elementos para iterar, y el valor inicial `10` se devuelve directamente.\n\n4. **Opciones incorrectas:**\n   - A: No se devuelve `0` porque el valor inicial definido es `10`.\n   - B: No se genera un error, ya que el método `reduce` maneja correctamente los arrays vacíos cuando se proporciona un valor inicial.\n   - D: No se devuelve `NaN` porque el valor inicial definido es un número válido (`10`)."
    },
    {
      id: "q56",
      question: "A developer creates a class that represents a blog post with specific requirements. Which statement should be inserted in the placeholder on line 02 to allow for a variable to be set to a new instance of a `Post` with the three attributes correctly populated?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "super(body, author, viewCount) {",
        B: "function Post(body, author, viewCount) {",
        C: "constructor(body, author, viewCount) {",
        D: "constructor() {"
      },
      code: "class Post {\n  // Insert code here\n  this.body = body;\n  this.author = author;\n  this.viewCount = viewCount;\n}",
      explanation: "La opción correcta es la C: 'constructor(body, author, viewCount) {'.\n\n**Explicación detallada:**\n\n1. **Uso del constructor:** En una clase de JavaScript, el método `constructor` se utiliza para inicializar un objeto cuando se crea una nueva instancia de la clase. Los argumentos proporcionados a `constructor` permiten inicializar las propiedades del objeto.\n\n2. **Implementación:** La línea `constructor(body, author, viewCount) {` asegura que los valores de `body`, `author` y `viewCount` puedan ser asignados a las propiedades de la instancia usando `this.body`, `this.author` y `this.viewCount`, respectivamente.\n\n3. **Opciones incorrectas:**\n   - A: 'super(body, author, viewCount) {' solo es válido si `Post` extiende otra clase. Como no se menciona una clase padre aquí, no es aplicable.\n   - B: 'function Post(body, author, viewCount) {' es un método de creación de funciones heredado y no es parte de la sintaxis moderna de clases.\n   - D: 'constructor() {' no es correcto porque no define parámetros necesarios para inicializar las propiedades requeridas."
    },
    {
      id: "q57",
      question: "Refer to the code below. Why does the function `bar` have access to variable `a`?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "Inner function’s scope",
        B: "Hoisting",
        C: "Outer function’s scope",
        D: "Prototype chain"
      },
      code: "function foo() {\n  const a = 2;\n  function bar() {\n    console.log(a);\n  }\n  return bar;\n}",
      explanation: "La opción correcta es la C: 'Outer function’s scope'.\n\n**Explicación detallada:**\n\n1. **Closure:** La función `bar` tiene acceso a la variable `a` debido a que es parte de una clausura. Cuando `bar` es definida dentro de la función `foo`, se 'recuerda' el ámbito de `foo`, incluyendo sus variables y constantes, incluso después de que la ejecución de `foo` haya finalizado.\n\n2. **Outer function’s scope:** La variable `a` está en el ámbito de la función `foo` (el ámbito externo de `bar`). Dado que JavaScript permite que las funciones internas accedan a las variables de su función contenedora, `bar` puede acceder a `a`.\n\n3. **Opciones incorrectas:**\n   - A: 'Inner function’s scope' es incorrecto porque `a` no está definida dentro del ámbito de `bar`, sino en el ámbito de la función contenedora `foo`.\n   - B: 'Hoisting' describe cómo las declaraciones se mueven al inicio de su ámbito, pero no explica el acceso de las funciones internas a las variables externas.\n   - D: 'Prototype chain' no está relacionado con el acceso de las funciones a las variables externas, sino con la herencia en objetos."
    },
    {
      id: "q58",
      question: "The developer has a function that prints 'Hello' to an input name. To test this, the developer created a function that returns 'World.' However, the provided snippet does not print 'Hello World.' \n\nWhat can the developer do to fix this?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Change line 7 to ) ();",
        B: "Change line 2 to console.log('Hello', name());",
        C: "Change line 9 to sayHello(world) ();",
        D: "Change line 5 to function world () {"
      },
      code: "const sayHello = (name) => {\n  console.log('Hello', name);\n};\n\nconst world = () => {\n  return 'world';\n};\n\nsayHello(world);",
      explanation: "La opción correcta es la B: 'Change line 2 to console.log('Hello', name());'.\n\n**Explicación detallada:**\n\n1. **Razón del problema:** En el código actual, en `console.log('Hello', name);`, `name` se pasa como una referencia a la función `world`, pero no se está invocando. Como resultado, lo que se imprime es 'Hello [Function: world]' en lugar de 'Hello World'.\n\n2. **Solución:** Cambiar la línea 2 a `console.log('Hello', name());` invoca la función `name` (que apunta a `world`) y permite que retorne 'world'. Esto asegura que la salida correcta sea 'Hello World'.\n\n3. **Opciones incorrectas:**\n   - A: 'Change line 7 to ) ();' no tiene sentido en este contexto y es una sintaxis inválida.\n   - C: 'Change line 9 to sayHello(world) ();' es incorrecto porque `sayHello` ya está correctamente invocado.\n   - D: 'Change line 5 to function world () {' no aborda el problema, ya que la definición de `world` ya está correctamente escrita como una función."
    },
    {
      id: "q59",
      question: "What happens due to the lack of the new keyword on line 02 in the code?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "The z variable is assigned the correct object.",
        B: "The z variable is assigned the correct object but this.name remains undefined.",
        C: "Window.name is assigned to 'hello' and the variable z remains undefined.",
        D: "Window.m is assigned the correct object."
      },
      code: "function Monster() {\n  this.name = 'hello';\n};\nconst z = Monster();",
      explanation: "La opción correcta es la C: 'Window.name is assigned to 'hello' and the variable z remains undefined.'\n\n**Explicación detallada:**\n\n1. **Uso de `this` sin `new`:**\n   - Cuando una función constructora como `Monster` se llama sin el operador `new`, el contexto de `this` dentro de la función pasa a ser el objeto global (`window` en un navegador).\n   - Esto significa que en lugar de asignar `this.name` a un nuevo objeto, se asigna como una propiedad al objeto global (`window.name`).\n\n2. **El valor de `z`:**\n   - La función `Monster()` no devuelve explícitamente un valor. Como resultado, `z` se asigna a `undefined`.\n\n3. **Opciones incorrectas:**\n   - A: Es incorrecta porque no se crea un objeto ni se asigna a `z` correctamente.\n   - B: No es correcta porque `z` no recibe un objeto y `this.name` no permanece undefined; más bien, se asigna al objeto global.\n   - D: No hay mención de `Window.m` en el código, lo que hace que esta opción sea inválida."
    },
    {
      id: "q60",
      question: "Refer to the following code. What is returned by the function call on line 13?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "Undefined",
        B: "Line 13 throws an error.",
        C: "‘Undefined value!’",
        D: "‘Null value!’"
      },
      code: "function test(val) {\n  if(val === undefined) {\n    return 'Undefined value!';\n  }\n  if(val === null) {\n    return 'Null value!';\n  }\n  return val;\n}\n\nlet x;\n\ntest(x);",
      explanation: "La opción correcta es la A: 'Undefined'.\n\n**Explicación detallada:**\n\n1. **Declaración de la variable `x`:** En el código, `let x;` declara la variable `x` pero no le asigna un valor. Por lo tanto, su valor predeterminado es `undefined`.\n\n2. **Llamada a la función:** Cuando se llama a `test(x)`, la variable `x` (que tiene el valor `undefined`) se pasa como argumento.\n\n3. **Ejecución de la función:**\n   - La primera condición en la función, `if(val === undefined)`, es verdadera porque el argumento `val` es igual a `undefined`.\n   - Por lo tanto, se devuelve la cadena `'Undefined value!'`.\n\n4. **Opciones incorrectas:**\n   - B: La línea 13 no genera un error porque la función maneja correctamente el caso cuando el argumento es `undefined`.\n   - C: Aunque se evalúa `val === undefined` como verdadero, la función devuelve una cadena específica ('Undefined value!'), no el literal `undefined`.\n   - D: No se devuelve `'Null value!'` porque el valor de `x` no es `null`."
    },
    {
      id: "q61",
      question: "What is the result of the code block?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "The console logs only ‘flag’.",
        B: "The console logs ‘flag’ and another flag.",
        C: "An error is thrown.",
        D: "The console logs ‘flag’ and then an error is thrown."
      },
      code: "flag();\nanotherFlag();\n\nfunction flag() {\n  console.log('flag');\n}\n\nconst anotherFlag = () => {\n  console.log('another flag');\n};",
      explanation: "La respuesta correcta es 'The console logs ‘flag’ and then an error is thrown.'** La función `flag` es una declaración de función que se eleva al inicio de su ámbito, por lo que `flag()` se ejecuta sin problemas y registra `'flag'` en la consola. Sin embargo, `anotherFlag` es una variable declarada con `const`, que no se inicializa hasta que se alcanza su línea de código. Al intentar llamar a `anotherFlag()` antes de su definición, se lanza un error (`ReferenceError`) porque está en la zona muerta temporal (TDZ). Por lo tanto, el código registra `'flag'` y luego lanza un error."
    },
    {
      id: "q62",
      question: "Which statement should be added to line 09 for the code to correctly display 'The truck 123AB has a weight of 5000 lb.'?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Super.plate =plate;",
        B: "super(plate);",
        C: "This.plate =plate;",
        D: "Vehicle.plate = plate;"
      },
      code: "class Vehicle {\n  constructor(plate) {\n    this.plate = plate;\n  }\n}\n\nclass Truck extends Vehicle {\n  constructor(plate, weight) {\n    // Missing code\n    this.weight = weight;\n  }\n  displayWeight() {\n    console.log(`The truck ${this.plate} has a weight of ${this.weight} lb.`);\n  }\n}\n\nlet myTruck = new Truck('123AB', 5000);\nmyTruck.displayWeight();",
      explanation: "La opción correcta es la B: 'super(plate);'.\n\n**Explicación detallada:**\n\n1. **Uso del operador `super`:**\n   - En una clase que extiende otra, como `Truck` que extiende `Vehicle`, el constructor de la clase hija necesita llamar al constructor de la clase padre utilizando `super()`.\n   - En este caso, `super(plate);` llama al constructor de `Vehicle` y le pasa el valor `plate`, permitiendo inicializar la propiedad `this.plate` en la instancia de la clase `Truck`.\n\n2. **Llamada al constructor:**\n   - Cuando se instancia un objeto de la clase `Truck`, como en `new Truck('123AB', 5000)`, se ejecuta el constructor de `Truck`, que a su vez llama al constructor de `Vehicle` mediante `super(plate);` para inicializar `this.plate`.\n   - Luego, `this.weight` se asigna directamente en el constructor de `Truck`.\n\n3. **Opciones incorrectas:**\n   - A: `'Super.plate = plate;'` es incorrecta porque no es la sintaxis válida para llamar al constructor de la clase padre.\n   - C: `'This.plate = plate;'` es incorrecta porque inicializa `this.plate` directamente en la clase hija sin llamar al constructor de la clase padre, lo que genera un error cuando se extiende otra clase.\n   - D: `'Vehicle.plate = plate;'` es incorrecta porque intenta acceder al constructor de `Vehicle` de manera estática, lo cual no es válido aquí."
    },
    {
      id: "q63",
      question: "How can a developer access the `fullName` property for the `cat` object?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "cat.fullName",
        B: "cat.fullName()",
        C: "cat.get.fullName",
        D: "cat.function.fullName()"
      },
      code: "const cat = {\n  firstName: 'Fancy',\n  lastName: 'Whiskers',\n  get fullName() {\n    return this.firstName + ' ' + this.lastName;\n  }\n};",
      explanation: "La opción correcta es la A: 'cat.fullName'.\n\n**Explicación detallada:**\n\n1. **Propiedades `get`:**\n   - En JavaScript, las propiedades definidas con `get` son accesibles como si fueran propiedades normales, es decir, sin usar paréntesis.\n   - En este caso, `fullName` está definido con el accesor `get`, lo que significa que se puede acceder usando `cat.fullName` y no `cat.fullName()`.\n\n2. **Opciones incorrectas:**\n   - B: `'cat.fullName()'` es incorrecta porque no es necesario llamar a la propiedad `get` como función.\n   - C: `'cat.get.fullName'` es incorrecta porque no hay ninguna propiedad `get` en el objeto que pueda ser usada de esa forma.\n   - D: `'cat.function.fullName()'` es incorrecta porque no existe ninguna propiedad `function` definida en el objeto."
    },
    {
      id: "q64",
      question: "What is the value of the result after line 10 executes?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "Error: myFather.job is not a function",
        B: "Undefined Developer",
        C: "John undefined",
        D: "John Developer"
      },
      code: "function Person() {\n  this.firstName = 'John';\n}\nPerson.prototype = {\n  Job: x => 'Developer'\n};\nconst myFather = new Person();\nconst result = myFather.firstName + ' ' + myFather.job();",
      explanation: "La opción correcta es la A: 'Error: myFather.job is not a function'.\n\n**Explicación detallada:**\n\n1. **Definición de `Person.prototype`:**\n   - El objeto `Person.prototype` se sobrescribe con un nuevo objeto que contiene una propiedad `Job`.\n   - Sin embargo, el método `job` no está definido como una función en el prototipo, sino como una propiedad (`Job`) con una función de flecha.\n   - En JavaScript, las propiedades definidas en el prototipo no están disponibles directamente como métodos invocables si no se definen explícitamente como funciones.\n\n2. **Referencia a `job`:**\n   - En el código, `myFather.job()` intenta invocar `job` como una función, pero no existe una propiedad `job` en el prototipo o en la instancia de `Person`.\n   - Esto genera un error `TypeError: myFather.job is not a function`.\n\n3. **Opciones incorrectas:**\n   - B: 'Undefined Developer' es incorrecta porque no se puede acceder correctamente a `job` como una función.\n   - C: 'John undefined' es incorrecta porque el error ocurre antes de que el código pueda acceder a `job`.\n   - D: 'John Developer' es incorrecta porque el método `job()` no existe en el objeto `myFather`."
    },
    {
      id: "q65",
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
      explanation: "La opción correcta es la A: 'Named'.\n\n**Explicación detallada:**\n\n1. **Exportación nombrada (Named):**\n   - Una exportación nombrada permite exportar múltiples funciones, variables u objetos desde un módulo para que puedan ser importados selectivamente en otros módulos.\n   - En este caso, dado que el módulo `ErrorHandler` contiene varias funciones, usar exportaciones nombradas permite que cada función sea exportada con su propio nombre.\n   - Ejemplo:\n     ```javascript\n     // ErrorHandler.js\n     export function logError() {\n       // Código para registrar errores\n     }\n     export function displayError() {\n       // Código para mostrar errores\n     }\n     ```\n     Luego, otro archivo puede importar las funciones de esta manera:\n     ```javascript\n     import { logError, displayError } from './ErrorHandler.js';\n     ```\n\n2. **Opciones incorrectas:**\n   - B: 'All' no es un tipo de exportación válida en JavaScript.\n   - C: 'Multi' no es un término reconocido para la exportación en JavaScript.\n   - D: 'Default' permite exportar solo un valor por módulo, lo que no es ideal si hay múltiples funciones que deben ser exportadas del módulo."
    },
    {
      id: "q66",
      question: "A developer wants to leverage a module to print a price in pretty format, and has imported a method as shown below. Based on the code. \n\nWhat must be true about the `printPrice` function of the `PricePrettyPrint` module for this import to work?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "printPrice must be a named export",
        B: "printPrice must be an all export",
        C: "printPrice must be the default export",
        D: "printPrice must be a multi export"
      },
      code: "import printPrice from '/path/PricePrettyPrint.js';",
      explanation: "La opción correcta es la C: 'printPrice must be the default export.'\n\n**Explicación detallada:**\n\n1. **Importaciones en JavaScript:**\n   - Cuando se utiliza la sintaxis `import printPrice from '/path/PricePrettyPrint.js';`, se está importando el **valor de exportación por defecto** del módulo `PricePrettyPrint.js`. Solo las exportaciones por defecto son compatibles con esta forma de importación.\n\n2. **Exportación por defecto:**\n   - Una exportación por defecto es un valor único que un módulo puede exportar. Esta exportación se realiza usando la palabra clave `default`, como se muestra:\n     ```javascript\n     // PricePrettyPrint.js\n     export default function printPrice(price) {\n       // Código para formatear el precio\n       console.log(`Price: ${price}`);\n     }\n     ```\n\n3. **Opciones incorrectas:**\n   - A: 'printPrice must be a named export' es incorrecta porque una exportación nombrada requiere que se importe usando llaves (`{}`) como en `import { printPrice } from '/path/PricePrettyPrint.js';`.\n   - B: 'printPrice must be an all export' es incorrecta porque 'all export' no es una terminología reconocida en JavaScript.\n   - D: 'printPrice must be a multi export' es incorrecta porque 'multi export' tampoco es un término válido en JavaScript."
    },
    {
      id: "q67",
      question: "A developer creates an object where its properties should be immutable and prevent properties from being added or modified. Which method should be used to execute this business requirement?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "Object.const()",
        B: "Object.eval()",
        C: "Object.lock()",
        D: "Object.freeze()"
      },
      explanation: "La opción correcta es la D: 'Object.freeze()'.\n\n**Explicación detallada:**\n\n1. **Object.freeze():**\n   - El método `Object.freeze()` congela un objeto, lo que significa que sus propiedades no pueden ser añadidas, eliminadas o modificadas.\n   - Este método hace que el objeto sea completamente inmutable, cumpliendo con el requisito de prevenir cualquier cambio.\n   - Ejemplo:\n     ```javascript\n     const obj = { name: 'John' };\n     Object.freeze(obj);\n     obj.name = 'Jane'; // No tiene efecto, el objeto permanece igual.\n     obj.age = 30; // Tampoco tiene efecto, no se pueden añadir nuevas propiedades.\n     ```\n\n2. **Opciones incorrectas:**\n   - A: 'Object.const()' es incorrecta porque no existe un método `Object.const()` en JavaScript.\n   - B: 'Object.eval()' es incorrecta porque `eval` no tiene relación con la inmovilización de objetos.\n   - C: 'Object.lock()' es incorrecta porque `Object.lock()` no es un método reconocido en JavaScript.\n\n3. **Conclusión:**\n   - `Object.freeze()` es el método adecuado para garantizar que las propiedades del objeto sean inmutables y no se puedan modificar o agregar nuevas."
    },
    {
      id: "q68",
      question: "Which three options show valid methods for creating a fat arrow function?",
      type: "multiple choice",
      correct_options: ["A", "E", "C"],
      number_of_correct_answers: 3,
      options: {
        A: "x => (console.log('executed');)",
        B: "[] => (console.log('executed');)",
        C: "() => (console.log('executed');)",
        D: "X,y,z => (console.log('executed');)",
        E: "(x, y, z) => (console.log('executed');)"
      },
      explanation: "Las opciones correctas son A: `x => (console.log('executed');)`, C: `() => (console.log('executed');)`, y E: `(x, y, z) => (console.log('executed');)`.\n\n**Explicación detallada:**\n\n1. **Opción A:**\n   - La sintaxis `x => (console.log('executed');)` es válida para una función de flecha que recibe un único parámetro `x`.\n   - No requiere paréntesis alrededor de `x` cuando hay un solo parámetro.\n\n2. **Opción C:**\n   - La sintaxis `() => (console.log('executed');)` es válida para una función de flecha que no toma parámetros.\n   - Los paréntesis son obligatorios cuando no se pasan parámetros.\n\n3. **Opción E:**\n   - La sintaxis `(x, y, z) => (console.log('executed');)` es válida para una función de flecha que toma múltiples parámetros, como `x`, `y`, y `z`.\n   - Los paréntesis son obligatorios para múltiples parámetros.\n\n4. **Opciones incorrectas:**\n   - B: `[] => (console.log('executed');)` es incorrecta porque `[]` no es una forma válida de declarar parámetros.\n   - D: `X,y,z => (console.log('executed');)` es incorrecta porque los múltiples parámetros deben estar entre paréntesis, como en `(x, y, z)`."
    },
    {
      id: "q69",
      question: "Refer to the code below:\n\nWhich value can a developer expect when referencing `country.capital.cityString`?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "‘London’",
        B: "undefined",
        C: "An error",
        D: "‘NaN’"
      },
      code: "let country = {\n  get capital() {\n    let city = Number(\"London\");\n    return {\n      cityString: city.toString()\n    };\n  }\n};",
      explanation: "La opción correcta es D: `'NaN'`.\n\n**Explicación detallada:**\n\n1. **Conversión de cadena a número:**\n   - La línea `let city = Number(\"London\");` intenta convertir la cadena `'London'` en un número.\n   - Como `'London'` no se puede interpretar como un número válido, la función `Number()` devuelve `NaN` (Not a Number).\n\n2. **Uso de `toString()` en `NaN`:**\n   - El valor `NaN` es un número especial en JavaScript y tiene un método `.toString()`. Este método devuelve la cadena `'NaN'`.\n   - Por lo tanto, `city.toString()` retorna `'NaN'`.\n\n3. **Acceso a `country.capital.cityString`:**\n   - Cuando el getter `capital` es llamado, devuelve un objeto con la propiedad `cityString`.\n   - Dado que `city` es `NaN`, `city.toString()` resulta en `'NaN'`.\n\n4. **Opciones incorrectas:**\n   - A: `'London'` es incorrecta porque `Number(\"London\")` no produce `'London'`, sino `NaN`.\n   - B: `undefined` es incorrecta porque `cityString` es definido como `'NaN'`.\n   - C: `An error` es incorrecta porque no se lanza ningún error en este código."
    },
    {
      id: "q70",
      question: "What are two unique features of functions defined with a fat arrow as compared to normal function definition?",
      type: "multiple choice",
      correct_options: ["A", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "The function generates its own this making it useful for separating the function’s scope from its enclosing scope.",
        B: "The function receives an argument that is always in scope, called parent This, which is the enclosing lexical scope.",
        C: "If the function has a single expression in the function body, the expression will be evaluated and implicit returned.",
        D: "The function uses the this from the enclosing scope."
      },
      explanation: "Las respuestas correctas son A y C.\n\n**Explicación detallada:**\n\n1. **Uso del `this` en funciones flecha:**\n   - Contrariamente a lo mencionado en la opción A, las funciones flecha no generan su propio `this`. En cambio, heredan el `this` del ámbito léxico circundante. Esto las hace especialmente útiles en situaciones donde se necesita preservar el contexto del ámbito exterior, como en métodos de clases o en funciones de callback.\n\n2. **Retorno implícito:**\n   - Una característica única de las funciones flecha es que, cuando su cuerpo contiene una sola expresión, esa expresión es evaluada y devuelta implícitamente sin necesidad de usar la palabra clave `return`. Por ejemplo:\n     ```javascript\n     const add = (a, b) => a + b;\n     console.log(add(2, 3)); // Resultado: 5\n     ```\n\n3. **Opciones incorrectas:**\n   - B: Es incorrecta porque las funciones flecha no reciben explícitamente un argumento llamado `parent This`. Heredan el `this` del ámbito circundante léxico.\n   - D: Aunque se menciona el uso del `this` del ámbito circundante, este comportamiento no es único de las funciones flecha. Lo que las distingue es precisamente su falta de un propio `this`."
    },
    {
      id: "q71",
      question: "Refer to the code below. Which three properties are set on `pet1`?",
      type: "multiple choice",
      correct_options: ["B", "C", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "Name",
        B: "canTalk",
        C: "Type",
        D: "Owner",
        E: "Size"
      },
      code: "function Animal(size, type) {\n  this.size = size || 'small';\n  this.type = type || 'Animal';\n  this.canTalk = false;\n}\n\nlet Pet = function(size, type, name, owner) {\n  Animal.call(this, size, type);\n  this.name = name;\n  this.owner = owner;\n};\n\nPet.prototype = Object.create(Animal.prototype);\nlet pet1 = new Pet();\nconsole.log(pet1);",
      explanation: "Las respuestas correctas son B, C y E.\n\n**Explicación detallada:**\n\n1. **Propiedad `canTalk` (B):**\n   - La propiedad `canTalk` se establece en el constructor `Animal` y se hereda por `pet1`. Por defecto, su valor es `false`.\n\n2. **Propiedad `Type` (C):**\n   - La propiedad `type` también se inicializa en el constructor `Animal`. Por defecto, si no se pasa ningún valor, se asigna el valor `'Animal'`.\n\n3. **Propiedad `Size` (E):**\n   - Similar a `type`, la propiedad `size` se establece en el constructor `Animal` con el valor predeterminado `'small'` si no se proporciona ningún valor.\n\n4. **Opciones incorrectas:**\n   - A: `name` no se establece porque no se pasó ningún valor al crear `pet1`. Por lo tanto, permanece como `undefined`.\n   - D: `owner` tampoco se establece, ya que no se pasó ningún valor en la instancia `pet1`."
    },
    {
      id: "q72",
      question: "A class was written to represent items for purchase in an online store, and a second class represents items that are on sale at a discounted price. The constructor sets the name to the first value passed in. Below are two code sections.\n\n1. The first block demonstrates the definition of `Item` and `SaleItem` classes and their constructors.\n2. The second block contains the implementation of the `description` method and the creation of instances. \n\nWhat is the output when executing the code?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "This is a ScarfUncaught TypeError:saleItem.description is not a function This is a ScarfThis is a discounted Shirt",
        B: "This is a Scarf This is a Shirt This is a ScarfThis is a discounted Shirt",
        C: "This is a Scarf This is a ShirtThis is a discounted Scarf This is a discounted Shirt",
        D: "This is a ScarfUncaught TypeError: saleItem.description is not a function This is a ShirtThis is a discounted Shirt"
      },
      code: "/* Block 1: Class Definitions */\nclass Item {\n  constructor(name, price) {\n    this.name = name;\n    this.price = price;\n  }\n}\n\nclass SaleItem extends Item {\n  constructor(name, price, discount) {\n    super(name, price);\n    this.discount = discount;\n  }\n}\n\n/* Block 2: Implementation and Output */\nlet regItem = new Item('Scarf', 55);\nlet saleItem = new SaleItem('Shirt', 80, 0.1);\n\nItem.prototype.description = function() {\n  return 'This is a ' + this.name;\n};\nconsole.log(regItem.description());\nconsole.log(saleItem.description());\n\nSaleItem.prototype.description = function() {\n  return 'This is a discounted ' + this.name;\n};\nconsole.log(regItem.description());\nconsole.log(saleItem.description());",
      explanation: "La opción correcta es B: `This is a Scarf This is a Shirt This is a ScarfThis is a discounted Shirt`.\n\n**Explicación detallada:**\n\n1. **Primera llamada a `regItem.description`:**\n   - Se ejecuta el método definido en `Item.prototype`, devolviendo `'This is a Scarf'`.\n\n2. **Primera llamada a `saleItem.description`:**\n   - Antes de sobrescribir el método, `saleItem` usa el mismo método de `Item.prototype`, devolviendo `'This is a Shirt'`.\n\n3. **Reescritura de `SaleItem.prototype.description`:**\n   - Este método se sobrescribe para los objetos creados con `SaleItem`. Ahora devuelve `'This is a discounted Shirt'` para `saleItem`.\n\n4. **Resultados posteriores:**\n   - `regItem.description()` sigue devolviendo `'This is a Scarf'` porque no se afecta la implementación en `Item.prototype`.\n   - `saleItem.description()` ahora usa su propia implementación, devolviendo `'This is a discounted Shirt'`.\n\nPor lo tanto, el resultado en consola es:\n```\nThis is a Scarf\nThis is a Shirt\nThis is a Scarf\nThis is a discounted Shirt\n```"
    },
    {
      id: "q73",
      question: "Refer to the code below. What is the output after the code executes?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "ReferenceError: eyeColor is not defined",
        B: "ReferenceError: assignment to undeclared variable 'Person'",
        C: "Developer",
        D: "Undefined"
      },
      code: "function Person(firstName, lastName, eyeColor) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n  this.eyeColor = eyeColor;\n}\n\nPerson.job = 'Developer';\n\nconst myFather = new Person('John', 'Doe');\nconsole.log(myFather.job);",
      explanation: "La opción correcta es D: `Undefined`.\n\n**Explicación detallada:**\n\n1. **Métodos y propiedades de constructor:**\n   - La propiedad `Person.job` se asigna directamente al constructor `Person`, lo que la convierte en una propiedad estática.\n   - Los objetos instanciados (`myFather`) no tienen acceso a propiedades estáticas.\n\n2. **Opciones incorrectas:**\n   - A: `eyeColor` sí está definido como parte del constructor.\n   - B: La variable `Person` está correctamente declarada.\n   - C: La propiedad `job` no está definida en la instancia `myFather`."
    },
    {
      id: "q74",
      question: "Refer to the following code. Which statement should be added to line 09 for the code to display ‘The truck 123AB has a weight of 5000 lb.’?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Super.plate = plate;",
        B: "super(plate);",
        C: "this.plate = plate;",
        D: "Vehicle.plate = plate;"
      },
      code: "class Vehicle {\n  constructor(plate) {\n    this.plate = plate;\n  }\n}\n\nclass Truck extends Vehicle {\n  constructor(plate, weight) {\n    // Missing code\n    this.weight = weight;\n  }\n\n  displayWeight() {\n    console.log(`The truck ${this.plate} has a weight of ${this.weight} lb.`);\n  }\n}\n\nlet myTruck = new Truck('123AB', 5000);\nmyTruck.displayWeight();",
      explanation: "La opción correcta es B: `super(plate);`.\n\n**Explicación detallada:**\n\n1. **Uso de `super`:**\n   - El método `super` llama al constructor de la clase padre (`Vehicle`) y pasa el valor del parámetro `plate` para inicializar correctamente la propiedad heredada.\n\n2. **Errores en opciones:**\n   - A: `Super.plate` es una sintaxis inválida.\n   - C: `this.plate = plate` sobrescribiría la lógica del constructor del padre y no utiliza correctamente la herencia.\n   - D: `Vehicle.plate = plate` no inicializa la propiedad en la instancia de la clase hija."
    },
    {
      id: "q75",
      question: "A developer creates a class that represents a blog post. Which statement should be inserted in the placeholder on line 02 to allow for a variable to be set to a new instance of a `Post` with the three attributes correctly populated?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "super(body, author, viewCount) {",
        B: "function Post(body, author, viewCount) {",
        C: "constructor(body, author, viewCount) {",
        D: "constructor() {"
      },
      code: "class Post {\n  // Insert code here\n  this.body = body;\n  this.author = author;\n  this.viewCount = viewCount;\n}",
      explanation: "La opción correcta es C: `constructor(body, author, viewCount) {`.\n\n**Explicación detallada:**\n\n1. **Uso del constructor:**\n   - En una clase de JavaScript, el método `constructor` se utiliza para inicializar las propiedades de una instancia cuando se crea un nuevo objeto.\n   - `constructor(body, author, viewCount)` permite pasar valores iniciales para las propiedades `body`, `author`, y `viewCount`.\n\n2. **Errores en opciones:**\n   - A: `super` no aplica aquí ya que la clase `Post` no está extendiendo de otra clase.\n   - B: `function Post` sería válido en una definición de función, pero no en el contexto de una clase.\n   - D: `constructor()` no inicializaría correctamente las propiedades requeridas, ya que no recibe parámetros."
    }, 
    {
      id: "q76",
      question: "Refer to the code below. Which three properties are set on `pet1`?",
      type: "multiple choice",
      correct_options: ["B", "C", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "Name",
        B: "canTalk",
        C: "Type",
        D: "Owner",
        E: "Size"
      },
      code: "function Animal(size, type) {\n  this.size = size || 'small';\n  this.type = type || 'Animal';\n  this.canTalk = false;\n}\n\nlet Pet = function(size, type, name, owner) {\n  Animal.call(this, size, type);\n  this.name = name;\n  this.owner = owner;\n};\n\nPet.prototype = Object.create(Animal.prototype);\nlet pet1 = new Pet();",
      explanation: "Las respuestas correctas son B, C y E.\n\n**Explicación detallada:**\n\n1. **Propiedad `canTalk` (B):**\n   - Definida en el constructor `Animal`, su valor por defecto es `false`. Esto se aplica al objeto `pet1`.\n\n2. **Propiedad `Type` (C):**\n   - También definida en el constructor `Animal`. Si no se pasa un valor, su valor predeterminado es `'Animal'`.\n\n3. **Propiedad `Size` (E):**\n   - Similar a `Type`, se define en el constructor `Animal` con valor predeterminado `'small'` si no se especifica.\n\n4. **Opciones incorrectas:**\n   - A: `Name` no se establece porque no se pasa un valor al crear `pet1`, por lo que queda como `undefined`.\n   - D: `Owner` tampoco se establece para la misma razón que `Name`."
    },
    {
      id: "q77",
      question: "Which three options show valid methods for creating a fat arrow function?",
      type: "multiple choice",
      correct_options: ["A", "E"],
      number_of_correct_answers: 2,
      options: {
        A: "x => (console.log('executed');)",
        B: "[ ] => (console.log('executed');)",
        C: "() => (console.log('executed');)",
        D: "x, y, z => (console.log('executed');)",
        E: "(x, y, z) => (console.log('executed');)"
      },
      explanation: "Las respuestas correctas son A y E.\n\n**Explicación detallada:**\n\n1. **Opción A:**\n   - Es una función flecha válida con un parámetro (`x`) y un cuerpo que incluye una llamada a `console.log`.\n\n2. **Opción E:**\n   - Es una función flecha válida con múltiples parámetros (`x`, `y`, `z`) encerrados en paréntesis.\n\n3. **Opciones incorrectas:**\n   - B: `[]` no es una sintaxis válida para parámetros en una función flecha.\n   - C: Aunque es válida como función flecha, la opción no está seleccionada en el contexto de esta pregunta.\n   - D: Falta encapsulación para múltiples parámetros."
    },
    {
      id: "q78",
      question: "What are two unique features of functions defined with a fat arrow as compared to normal function definition?",
      type: "multiple choice",
      correct_options: ["A", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "The function generated its own this making it useful for separating the function’s scope from its enclosing scope.",
        B: "The function receives an argument that is always in scope, called parentThis, which is the enclosing lexical scope.",
        C: "If the function has a single expression in the function body, the expression will be evaluated and implicitly returned.",
        D: "The function uses the this from the enclosing scope."
      },
      explanation: "Las respuestas correctas son A y C.\n\n**Explicación detallada:**\n\n1. **Opción A:**\n   - Las funciones flecha no generan su propio `this`. Usan el `this` del contexto léxico que las rodea.\n\n2. **Opción C:**\n   - Si una función flecha tiene un solo cuerpo de expresión, el valor de esa expresión se retorna implícitamente.\n\n3. **Opciones incorrectas:**\n   - B: No existe el argumento `parentThis` en funciones flecha.\n   - D: Aunque las funciones flecha heredan el `this` de su contexto léxico, esta opción no aplica específicamente a funciones flecha como una característica única."
    },
    {
      id: "q79",
      question: "A developer has two ways to write a function. After deciding on an option, the developer creates 1000 monster objects. \n\nHow many growl methods are created with Option A or Option B?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "1 growl method is created for Option A.",
        B: "1000 growl methods are created for Option A.",
        C: "1000 growl methods are created for Option B.",
        D: "1 growl method is created for Option B.",
        E: "1000 growl methods are created regardless of which option is used.",
        F: "1 growl method is created regardless of which option is used."
      },
      code: "// Option A\nfunction Monster() {\n  this.growl = () => {\n    console.log('Grr!');\n  };\n}\n\n// Option B\nfunction Monster() {}\nMonster.prototype.growl = () => {\n  console.log('Grr!');\n};",
      explanation: "La opción correcta es B: `1000 growl methods are created for Option A`.\n\n**Explicación detallada:**\n\n1. **Option A:**\n   - En este caso, `growl` es un método definido como parte de cada instancia.\n   - Por lo tanto, al crear 1000 objetos, se crearán 1000 instancias únicas de `growl`.\n\n2. **Option B:**\n   - Aquí, `growl` se define en el prototipo (`Monster.prototype`), lo que significa que todas las instancias comparten el mismo método `growl`.\n   - Solo se crea un método `growl`, independientemente del número de instancias creadas.\n\n3. **Opciones incorrectas:**\n   - A y D son incorrectas porque reflejan el comportamiento de la opción contraria.\n   - E y F no diferencian adecuadamente entre las opciones de implementación."
    },
    {
      id: "q80",
      question: "Which two code snippets show working examples of a recursive function?",
      type: "multiple choice",
      correct_options: ["A", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "Let countingDown = function(startNumber) { if (startNumber > 0) { console.log(startNumber); return countingDown(startNumber - 1); } else { return startNumber; }};",
        B: "Function factorial(numVar) { if (numVar < 0) return; if (numVar === 0) return 1; return numVar - 1; };",
        C: "Const sumToTen = numVar => { if (numVar < 0) return; return sumToTen(numVar + 1); };",
        D: "Const factorial = numVar => { if (numVar < 0) return; if (numVar === 0) return 1; return numVar * factorial(numVar - 1); };"
      },
      explanation: "Las respuestas correctas son A y D.\n\n**Explicación detallada:**\n\n1. **Opción A:**\n   - Esta función recursiva decrementa el valor `startNumber` hasta que alcanza `0`, momento en el que devuelve `startNumber`.\n\n2. **Opción D:**\n   - Esta función calcula el factorial de un número utilizando recursión, multiplicando el número por el resultado de la llamada a sí misma con `numVar - 1`.\n\n3. **Opciones incorrectas:**\n   - B: No implementa recursión correctamente.\n   - C: Intenta usar recursión pero no tiene un caso base válido para detener la función."
    },
    {
      id: "q81",
      question: "A developer wants to define a function `log` to be used a few times on a single-file JavaScript script. Which two options can correctly replace line 01 and declare the function for use?",
      type: "multiple choice",
      correct_options: ["A", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "function log(logInput) {",
        B: "const log(logInput) {",
        C: "const log = (logInput) => {",
        D: "function log = (logInput) {"
      },
      code: "// Replace Line 1\nconsole.log('LOG:', logInput);\n}",
      explanation: "Las respuestas correctas son A y C.\n\n**Explicación detallada:**\n\n1. **Opción A:**\n   - Define una función normal usando la sintaxis estándar de `function`. Es válida para ser llamada múltiples veces.\n\n2. **Opción C:**\n   - Usa una función flecha (`arrow function`), que es válida y efectiva para definiciones funcionales en un archivo único.\n\n3. **Opciones incorrectas:**\n   - B: Contiene un error de sintaxis al intentar usar `const` junto con un nombre de función.\n   - D: Es sintácticamente inválido en JavaScript."
    },
    {
      id: "q82",
      question: "Cloud Kicks has a class to represent items for sale in an online store, as shown below. A new business requirement comes in that requests a ClothingItem class that should have all of the properties and methods of the Item class but will also have properties that are specific to clothes.\n\nWhich line of code properly declares the ClothingItem class such that it inherits from Item?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "Class ClothingItem implements Item {",
        B: "Class ClothingItem {",
        C: "Class ClothingItem super Item {",
        D: "Class ClothingItem extends Item {"
      },
      code: "class Item{\nconstructor (name, price){\nthis.name = name;\nthis.price = price;\n}\nformattedPrice(){\nreturn 's' + String(this.price);\n}}\n\nclass ClothingItem extends Item { }",
      explanation: "La opción correcta es D: **Class ClothingItem extends Item { }**.\n\n**Explicación detallada:**\n\n1. **Uso de 'extends':**\n   - La palabra clave `extends` se utiliza para declarar una subclase que hereda las propiedades y métodos de una clase padre.\n\n2. **Corrección de otras opciones:**\n   - Opción A: `implements` no es adecuado para heredar clases; se utiliza con interfaces.\n   - Opción B: No declara relación alguna con la clase padre.\n   - Opción C: `super` se utiliza dentro del constructor, no para declarar la clase."
    },
    {
      id: "q83",
      question: "What is the value of result after the code executes?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "10",
        B: "NaN",
        C: "5",
        D: "Undefined"
      },
      code: "function changeValue(obj) {\n  obj.value = obj.value / 2;\n}\nconst objA = { value: 10 };\nconst objB = objA;\nchangeValue(objB);\nconst result = objA.value;",
      explanation: "La opción correcta es C: **5**.\n\n**Explicación detallada:**\n\n1. **Referencia compartida en objetos:**\n   - `objA` y `objB` apuntan al mismo objeto en memoria. Esto significa que cualquier cambio hecho a `objB` también afecta a `objA`.\n\n2. **División del valor:**\n   - `changeValue` divide el valor de la propiedad `value` del objeto por 2. Después de llamar a la función, el valor de `objA.value` y `objB.value` es 5.\n\n3. **Conclusión:**\n   - `result` toma el valor de `objA.value`, que es 5."
    },
    {
      id: "q84",
      question: "Which three options show valid methods for creating a fat arrow function?",
      type: "multiple choice",
      correct_options: ["C", "D", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "x => ( console.log('executed') ; )",
        B: "[ ] => ( console.log('executed') ; )",
        C: "() => ( console.log('executed') ; )",
        D: "x,y,z => ( console.log('executed') ; )",
        E: "(x,y,z) => ( console.log('executed') ; )"
      },
      code: "// Ejemplos válidos de funciones flecha\nconst example1 = () => (console.log('executed'));\nconst example2 = (x, y, z) => (console.log('executed'));\nconst example3 = x => (console.log('executed'));",
      explanation: "Las opciones correctas son C, D y E:\n\n**Explicación detallada:**\n\n1. **Opción C:**\n   - Uso correcto de paréntesis para una función sin argumentos.\n\n2. **Opción D:**\n   - Una lista de argumentos separada por comas (sin paréntesis si es un argumento único).\n\n3. **Opción E:**\n   - Los paréntesis son necesarios para múltiples argumentos.\n\n4. **Errores en otras opciones:**\n   - Opción A: Falta un punto y coma válido fuera del bloque.\n   - Opción B: Los corchetes `[]` no son identificadores válidos para funciones flecha."
    },
    {
      id: "q85",
      question: "A developer wants to define a function log to be used a few times on a single-file JavaScript script. \n\nWhich two options can correctly replace line 1 and declare the function for use?",
      type: "multiple choice",
      correct_options: ["A", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "function log(logInput) {",
        B: "const log(logInput) {",
        C: "const log = (logInput) => {",
        D: "function log = (logInput) {"
      },
      explanation: "Las opciones correctas son A y C:\n\n**Explicación detallada:**\n\n1. **Opción A:**\n   - Declara la función usando el método tradicional `function log(logInput)`.\n\n2. **Opción C:**\n   - Utiliza la sintaxis moderna de funciones flecha con `const log = (logInput) => {`.\n\n3. **Errores en otras opciones:**\n   - Opción B: No es una sintaxis válida para declarar una función.\n   - Opción D: `function log =` no es una declaración válida en JavaScript."
    },
    {
      id: "q86",
      question: "A developer has an ErrorHandler module that contains multiple functions. What kind of export should be leveraged so that multiple functions can be used?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "Named",
        B: "All",
        C: "Multi",
        D: "Default"
      },
      explanation: "La opción correcta es A: **Named.**\n\n**Explicación detallada:**\n\n1. **Exportación nombrada:**\n   - Permite exportar varias funciones del mismo módulo utilizando sus nombres específicos.\n   - Esto facilita el acceso selectivo a las funciones según sus necesidades.\n\n2. **Errores en otras opciones:**\n   - Opción B: 'All' no es una forma válida de exportar.\n   - Opción C: 'Multi' tampoco es una opción válida en JavaScript.\n   - Opción D: `Default` exporta solo un valor o función por módulo, lo cual no es aplicable aquí."
    },
    {
      id: "q87",
      question: "Refer to the code below. What is the value of result after the code executes?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "10",
        B: "NaN",
        C: "5",
        D: "Undefined"
      },
      code: "function changeValue(obj) {\n  obj.value = obj.value / 2;\n}\nconst objA = { value: 10 };\nconst objB = objA;\nchangeValue(objB);\nconst result = objA.value;",
      explanation: "La opción correcta es C: **5.**\n\n**Explicación detallada:**\n\n1. **Referencia compartida en objetos:**\n   - `objA` y `objB` apuntan al mismo objeto en memoria. Esto significa que cualquier cambio realizado en `objB` también afecta a `objA`.\n\n2. **División del valor:**\n   - La función `changeValue` divide el valor de la propiedad `value` entre 2. Por lo tanto, `objA.value` se actualiza a `5`.\n\n3. **Errores en otras opciones:**\n   - Opción A: Incorrecta porque el valor de `objA.value` sí cambia.\n   - Opción B: `NaN` solo aparecería si el valor original no fuese numérico.\n   - Opción D: `undefined` no aplica porque `objA.value` está definido."
    },
    {
      id: "q88",
      question: "Refer to the following code. Which two statements could be inserted at line 17 to enable the function call on the last line?",
      type: "multiple choice",
      correct_options: ["A", "C"],
      number_of_correct_answers: 2,
      options: {
        A: "leo.roar = () => { console.log('They\\'re pretty good:'); };",
        B: "Object.assign(leo, Tiger);",
        C: "Object.assign(leo, tony);",
        D: "Leo.prototype.roar = () => { console.log('They\\'re pretty good:'); };"
      },
      code: "function Tiger() {\n  this.Type = 'Cat';\n  this.size = 'large';\n}\n\nlet tony = new Tiger();\ntony.roar = () => {\n  console.log('They\\'re great!');\n};\n\nfunction Lion() {\n  this.type = 'Cat';\n  this.size = 'large';\n}\n\nlet leo = new Lion();\n// Insert code here\nleo.roar();",
      explanation: "Las opciones correctas son A y C:\n\n**Explicación detallada:**\n\n1. **Opción A:**\n   - Asigna una función `roar` directamente al objeto `leo`, permitiendo que se llame en la última línea.\n\n2. **Opción C:**\n   - Usa `Object.assign` para copiar las propiedades y métodos de `tony` (incluida la función `roar`) al objeto `leo`.\n\n3. **Errores en otras opciones:**\n   - Opción B: `Tiger` es una función constructora y no un objeto; no es válido para `Object.assign`.\n   - Opción D: Modificar `Leo.prototype` no tiene efecto en el objeto `leo` porque ya fue creado."
    },                                                                                                                      
  ];
};
