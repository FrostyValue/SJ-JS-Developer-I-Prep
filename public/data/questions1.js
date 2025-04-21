function questions1() {
  return [
    {
      id: "q1",
      question:
        "A developer of Cosmic Learning Solutions needs to access ISBN and pricing information about a series of books from a JSON response. The response is received via a GET request from a web server. The information should be displayed in the format below. The parsed JSON response is saved in a JavaScript variable named 'jsObject', which contains an array of objects with 'isbn' and 'price' properties. \n\nWhat should be added in place of the underlined blanks in the given code to access the values for 'isbn' and 'price'?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "jsObject[index][isbn], jsObject[index][price]",
        B: "jsObject.isbn, jsObject.price",
        C: "jsObject[index].isbn, jsObject[index].price",
        D: "jsObject[isbn], jsObject[price]",
      },
      code: "/*\n  Expected Output:\n  Index: 0, ISBN: 0-5153-0346-1, Price: 24.95\n  Index: 1, ISBN: 0-8522-3763-4, Price: 6.99\n  Index: 2, ISBN: 0-4567-5678-2, Price: 15.99\n  \u2026\n  */\n  for (let index=0; index < jsObject.length; index++) {\n  console.log('Index: ', index, ', ISBN: ', /* ??? */, ', Price: ', /* ??? */);\n  }",
    },
    {
      id: "q2",
      question:
        "A developer needs to send the employee data below in JSON format to a remote server for the creation of a new employee record. name = Jon Smith title = IT Manager salary = 100000 email = jsmith@cosmicinnovation.com \n\nWhich of the following represents a properly formatted JSON string that can be used as the body of the POST request?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: 'const data = { "name": Jon Smith, "title": IT Manager, salary: 100000, "email": jsmith@cosmicinnovation.com };',
        B: 'const data = \'{"name": "Jon Smith", "title": "IT Manager", "salary": 100000, "email": "jsmith@cosmicinnovation.com"}\';',
        C: "const data = '{'name': 'Jon Smith', 'title': 'IT Manager', 'salary': 100000, 'email': 'jsmith@cosmicinnovation.com' ]';",
        D: "const data =\"{ 'name': 'Jon Smith', 'title': 'IT Manager', 'salary': 100000, 'email': 'jsmith@cosmicinnovation.com']\";",
      },
      code: "",
    },
    {
      id: "q3",
      question:
        "A developer is working on a calendar application for a multinational company. An instance of the Date object is used to track each meeting schedule. A decision has been made to display the date and time information using the Coordinated Universal Time. \n\nWhich method of the object can the developer use to display a time in the Coordinated Universal Time zone?",
      type: "multiple choice",
      correct_options: ["C", "D"],
      number_of_correct_answers: 2,
      options: {
        A: "toDateString()",
        B: "toString()",
        C: "toUTCString()",
        D: "toISOString()",
      },
      code: "",
    },
    {
      id: "q4",
      question:
        "Determine the contents of the 'peak' array after the operation below.",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "[10, 8, 6, 4]",
        B: "[9, 8, 4, 5]",
        C: "[4, 6, 8, 10]",
        D: "[10, 9, 5, 6]",
      },
      code: "  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];\n  let peak = [];\n  for (let month of months) {\n  if (month > 3) {\n  peak.push(month);\n  }\n  if (month > 5) {\n  peak.pop();\n  }\n  if (month > 7) {\n  peak.unshift(month);\n  }\n  if (month > 9) {\n  peak.shift();\n  }\n  }",
    },
    {
      id: "q5",
      question:
        "A developer is working on a site for the accounting department. A function is used to help format numbers so that they can be displayed in the tables on the page. The function works fine, but there is a need to format the number to display two decimal places. \n\nHow can the line of code in the function be modified to include two decimal places even if the original number does not have anything after the decimal?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "return '$${num.toString().toFixed(2)];",
        B: "return `$${num.toString(2)];",
        C: "return `$${Number(num).toFixed(2)};",
        D: "return `$${Number(num).toDecimal(2)];",
      },
      code: "  function formatNumber(num) {\n  return `$${Number(num).toString()}`; // Modify this line\n  }",
    },
    {
      id: "q6",
      question:
        "A developer comes across the following function in an application. What will be the value of user. \n\ntype when the argument type gets the values '' and 'STUDENT' respectively?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: 'When type = "", user.type = "", and when type = "STUDENT", user.type = "STUDENT"',
        B: 'When type = "", user.type = "DEFAULT", and when type = "STUDENT", user.type = "DEFAULT"',
        C: 'When type = "", user.type = "", and when type = "STUDENT", user.type = "DEFAULT"',
        D: 'When type = "", user.type = "DEFAULT", and when type = "STUDENT", user.type = "STUDENT"',
      },
      code: '  function checkUserType(user, type) {\n  user.type = type || "DEFAULT";\n  return user;\n  }',
    },
    {
      id: "q7",
      question:
        "A developer working in the IT department of a university needs to enumerate the content of a particular course. The 'course' variable represents the parsed JSON data that has been received via a GET request from a database server. It contains all the required course information, including code, name, department, and instructor, as key-value data items. \n\nWhat should be added in place of the blank space to access the value of each key in the 'course'?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: 'course["key"]',
        B: "course['key']",
        C: "course.key",
        D: "course[key]",
      },
      code: "  for (let key in course) {\n  console.log(key, ' => ', ____);\n  }",
    },
    {
      id: "q8",
      question:
        "A JavaScript developer of Cosmic Innovation is creating a web page that will allow users to search for a customer in a database and determine which customer data exists. If any piece of information, such as email, phone, or age, is null, undefined, or \"\" (empty string), then the web page should simply show the Boolean value false in place of the original value. If the information exists, then the Boolean value true should be displayed. Customer data is stored in a JavaScript object named 'customer'. The developer has started writing the code to iterate over the data and add each value and its Boolean association (true or false) to the 'values' array. The array will be used to display the required data on the web page. \n\nWhich of the following statements can be used to complete the given code for this requirement?",
      type: "multiple choice",
      correct_options: ["B", "C", "D"],
      number_of_correct_answers: 3,
      options: {
        A: "obj[key] = new Boolean(customer[key]);",
        B: "obj[key] = !! customer[key];",
        C: "obj[key] = Boolean(customer[key]);",
        D: "obj[key] = customer[key] ? true : false;",
        E: "obj[key] = !customer[key];",
      },
      code: "  const values = [];\n  for (const key in customer) {\n  const obj = ({});\n  // missing code\n  values.push(obj);\n  }",
    },
    {
      id: "q9",
      question:
        ' \n\nUsing the multi-dimensional array below, which command can be used to generate the array ["jan", "feb", "mar", "week1", "week2", "week3", "fri", "sat", "sun"]?',
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "matrix.flat(Infinity);",
        B: "matrix.flat(false);",
        C: "matrix.flat();",
        D: "matrix.flat(true);",
      },
      code: "  const matrix = [\n  'jan', 'feb', 'mar', [\n  'week1', 'week2', 'week3', [\n  'fri', 'sat', 'sun'\n  ]\n  ]\n  ];",
    },
    {
      id: "q10",
      question:
        "A developer of Cosmic Innovation has received the following JSON data about a product from a web server through a GET request. This data needs to be converted into a JavaScript object for further processing. \n\nWhich method of the JSON object should be used?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "JSON.deserialize();",
        B: "JSON.parse();",
        C: "JSON.toString();",
        D: "JSON.stringify();",
      },
      code: '  {\n  "product": "E-1000 Laptop",\n  "code": "E1000IQT",\n  "price": "2000 USD",\n  "regions": ["Americas", "EMEA", "APAC"]\n  }',
    },
    {
      id: "q11",
      question: "Determine the output at the end of the operation below.",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "[1, 2, 3, 6]",
        B: "[1, 2, 3, 4, 5, 6, 7]",
        C: "[3, 6]",
        D: "[1, 7]",
      },
      code: "  let days = [1, 2, 3, 4, 5, 6, 7];\n  for (let num of days) {\n  if (num == 3) {\n  days.splice(1, 2);\n  } else if (num == 6) {\n  days.splice(1, 3);\n  }\n  }\n  console.log(days);",
    },
    {
      id: "q12",
      question:
        "A developer has obtained an array of sales users via an HTTP request to a server. The array is the value of the 'users' property of the 'data' object. Another array named 'employees' stores a list of four employees. \n\nWhat should be the value of the 'employees' array to ensure that the list of employees includes the sales users at the end?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: "['Hariett Parks', 'Aurelia Haney','Joanne Browning', 'Nicole Novak', data.users ... ]",
        B: "['Hariett Parks', 'Aurelia Haney','Joanne Browning', 'Nicole Novak', data.users]",
        C: "['Hariett Parks', 'Aurelia Haney','Joanne Browning', 'Nicole Novak', ... data.users]",
        D: "['Hariett Parks', 'Aurelia Haney', 'Joanne Browning', 'Nicole Novak', data.users[ ... ]]",
      },
      code: "  users: ['Jon Smith', 'Linwood Franco', 'Dave Hines']\n  const employees = ['Hariett Parks', 'Aurelia Haney', 'Joanne Browning', 'Nicole Novak'];",
    },
    {
      id: "q13",
      question:
        "A developer has written the code below to perform user input filtering so that only positive or negative numbers can be entered, and not 0. \n\nWhich of the following CANNOT be used in place of the comment in line 3 in order to implement the correct functionality?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Number(inputNumber);",
        B: "String(inputNumber);",
        C: "Boolean(inputNumber);",
        D: "inputNumber;",
      },
      code: '  function filterUserInput(input) {\n  let inputNumber = Number(input);\n  let isInputNumber = // code option here\n  if (isInputNumber) {\n  console.log("Input valid: " + inputNumber);\n  return inputNumber;\n  } else {\n  console.log("Input invalid: " + inputNumber);\n  return isInputNumber;\n  }\n  }',
    },
    {
      id: "q14",
      question:
        "A developer employed by a restaurant is trying to display the following codes and courses from the restaurant menu in the console after getting a JSON response from a remote server using XMLHttpRequest. However, there is an error in the code, due to which it is not displaying the desired output. \n\nHow should it be modified?",
      type: "multiple choice",
      correct_options: ["B"],
      number_of_correct_answers: 1,
      options: {
        A: "Replace 'const data = xhr.responseText' with 'const data = JSON.parse(xhr)':",
        B: "Replace 'const data = xhr.responseText' with 'const data = JSON.parse(xhr.responseText).'",
        C: "Replace 'const courses = data.courses' with 'const courses = JSON.parse(data)'.",
        D: "Replace 'const courses = data.courses' with 'const courses = JSON.parse(data.courses)'.",
      },
      code: "/*\n  CK-CM => Chicken Marsala\n  CK-KFC => Kentucky Fried Chicken\n  CK-KPC => Kung Pao Chicken\n  */\n  if (xhr.readyState === XMLHttpRequest.DONE) {\n  const data = xhr.responseText;\n  const courses = data.courses;\n  let string = '';\n  for (let item=0; item < courses.length; item++) {\n  string += courses[item].code + ' => ' + courses[item].name + '<br/>';\n  }\n  console.log(string);\n  }",
    },
    {
      id: "q15",
      question:
        "A developer is working on an online quiz to be used for employee training. In order to total all the scores without knowing how many scores there are, she has created the function below using the arguments property. When she tests the function, she receives an error that arguments. reduce is not a function. She uses Array. isArray() on arguments and realizes arguments is not an array even though it looks like an array. \n\nWhich of the following code changes in the function will correct the problem?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "let scores = new Array(arguments); return scores.reduce((total, score) => total + score);",
        B: "let scores = convert(arguments); return scores.reduce((total, score) => total + score);",
        C: "let scores = Array.of(arguments); return scores.reduce((total, score) => total + score);",
        D: "let scores = Array.from(arguments); return scores.reduce((total, score) => total + score);",
      },
      code: "  function totalScores() {\n  return arguments.reduce((total, score) => total + score);\n  };",
    },
    {
      id: "q16",
      question:
        "A developer is refactoring some JavaScript code that is used for an online quiz. She would like to use the destructuring assignment syntax with the 'computeAve' function. This function receives an object and divides the value of the 'totalScores' property by the value of the 'numQuizes' property. \n\nWhich code block shows the correct use of the destructuring assignment syntax with this function?",
      type: "multiple choice",
      correct_options: ["D"],
      number_of_correct_answers: 1,
      options: {
        A: "function computeAve(totalScores, numQuizes) { return totalScores / numQuizes; }",
        B: "function computeAve(obj.totalScores, obj.numQuizes) { return totalScores / numQuizes; }",
        C: "function computeAve([totalScores, numQuizes]) { return totalScores / numQuizes; }",
        D: "function computeAve({totalScores, numQuizes}) { return totalScores / numQuizes; }",
      },
      code: "  function computeAve(obj) {\n  return obj.totalScores / obj.numQuizes;\n  };",
    },
    {
      id: "q17",
      question:
        "The code below was developed to integrate caching with an application. The getUsernameFromCache() function initially converts the 'id' into a number and retrieves the username from the cache. If no relevant username is present for the 'id', null is returned. When the 'id' argument is not a valid number, NaN is returned. During the third invocation of the getUsername() function, an error was thrown in the try-catch block of the getUsername() function. \n\nWhich of the following represents the correct output of the three lines of code that are executed?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: '"Username is NaN" "Username is null" "Username is undefined"',
        B: '"Username is NaN" "Username is undefined" "Username is janedoe"',
        C: '"Username is NaN" "Username is null" "Username is null"',
        D: '"Username is NaN" "Username is null" "Username is janedoe"',
      },
      code: '  function getUsername(id) {\n  let error = false;\n  let user;\n  try {\n  // an error occurs here during the 3rd invocation\n  // sample code to throw an error for demo purposes\n  if (id == 1) throw new Error(\'Ooops!\');\n  } catch (err) {\n  error = true;\n  }\n  if (!error) {\n  user = getUsernameFromCache(id);\n  }\n  let status = "Username is " + user;\n  console.log(status);\n  return status;\n  }\n  // The cached data is given below in key-value form.\n  {\n  1:"janedoe",\n  2:"mineiris"\n  }\n  // The code below is used to invoke the function three times.\n  getUsername("1QR");\n  getUsername("3");\n  getUsername("1");',
    },
    {
      id: "q18",
      question:
        "A developer is working on a requirement to store dates for an online course. Two different dates need to be converted into milliseconds before they can be stored. The first is the date entered by the learner in the correct format. The second is the current date when a learner logs in. Two functions are needed for converting these dates. \n\nWhich two statements are required to make these functions work as intended?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "FIRST FUNCTION: return Date.parse(date); SECOND FUNCTION: return Date.now();",
        B: "FIRST FUNCTION: return parse(date); SECOND FUNCTION: return now(new Date());",
        C: "FIRST FUNCTION: return Date.parse(new Date(date)); SECOND FUNCTION: return Date.now(new Date());",
        D: "FIRST FUNCTION: return date.parse(); SECOND FUNCTION: return new Date().now();",
      },
      code: "  function convertLearnerDate(date) {\n  // Add code to convert the passed date string into milliseconds.\n  }\n  function getCurrentDate() {\n  // Add code to get the current date in milliseconds.\n  }",
    },
    {
      id: "q19",
      question:
        "A developer of Cosmic Electronics is working with an array of objects named 'products' in JavaScript. Each object in the array represents a product and contains the product name and code. For example, the code below represents a product named '100 kW Generator'. The developer needs to build an array that stores each product as a string containing the product code and name separated by '-'. In the new array, the '100 kW Generator' should be stored as 'G100 - 100 kW Generator'. Furthermore, if the array contains a generator that has 500 kW output power, then that generator should be excluded from the resulting array. \n\nWhich statement can be used to meet this requirement?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "products.filter(product => !product.name.includes('500 kW')).map(product => `${product.code} - ${product.name}`);",
        B: "products.filter(product => product.name.includes('500 kW')).map(product => `${product.code} - ${product.name}`);",
        C: "products.map(product => `${product.code} - ${product.name}`).filter(product => !product.name.includes('500 kW'));",
        D: "products.map(product => `${product.code} - ${product.name}`).filter(product => product.name.includes('500 kW'));",
      },
      code: "  let products = [\n  { name: '100 kW Generator', code: 'G100' },\n  { name: '500 kW Generator', code: 'G500' }\n  ];",
    },
    {
      id: "q20",
      question:
        "A developer working for Cosmic University is building a web page that will display student information such as enrollment number, name, major, duration, and degree. The value of the degree should depend on the duration. For example, if the duration is 4, then the degree should always be 'Bachelor'. If the duration is an empty string (\"\"), then the value of degree should be 'N/A'. The JavaScript code below has been written to check the duration returned from the server. However, the code does not work as intended if a student has enrolled in a certificate program that lasts for six months or less, in which case the duration returned by the server is 0. When this occurs, the degree is set to 'N/A', which is incorrect. \n\nWhich of the following should be used in place of the existing condition on line (3) to resolve this issue using the best solution?",
      type: "multiple choice",
      correct_options: ["C"],
      number_of_correct_answers: 1,
      options: {
        A: 'duration == " || duration != 0',
        B: 'duration === " && duration !== 0',
        C: 'duration === ""',
        D: "duration !== 0",
      },
      code: "  if (duration === 4) {\n  degree = 'bachelor';\n  } else if (duration == '') {\n  degree = 'N/A';\n  } else {\n  degree = 'others';\n  }",
    },
    {
      id: "q21",
      question:
        "A JavaScript developer has defined an array named 'customers' that contains a list of four customers (see below the question). The customers should be displayed on a web page like below. 1. Allison Smith 2. Ashley James 3. Jon Bond 4. Olivia Williams A function named 'displayCustomer' has been defined to display a customer on the web page by manipulating the DOM. It accepts two parameters, namely, 'number' and 'name'. \n\nWhat code should be used to iterate over the 'customers' array and display all the customers on the web page?",
      type: "multiple choice",
      correct_options: ["A"],
      number_of_correct_answers: 1,
      options: {
        A: "customers.forEach((item, index) => displayCustomer(index+1, item));",
        B: "customers.forEach((item) => displayCustomer(customers.indexOf(item), item));",
        C: "customers.forEach((index) => displayCustomer(index+1, customers[index]));",
        D: "customers.forEach((index, item) => displayCustomer(index+1, item));",
      },
      code: "  const customers = ['Allison Smith', 'Ashley James', 'Jon Bond', 'Olivia Williams'];",
    },
    {
      id: "q22",
      question:
        "A developer created the function below to log messages on the server. It was decided that the Symbol primitive type would be used as the User ID since the value of a symbol would always be unique. But soon after the update, a TypeError was being thrown by the function. \n\nWhich of the following explain the reason?",
      type: "multiple choice",
      correct_options: ["A", "D", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "The function tries to implicitly coerce the id argument to a string.",
        B: "The symbol type cannot be explicitly coerced to string.",
        C: "The symbol type can only be implicitly coerced to a number.",
        D: "The symbol type cannot be implicitly coerced to a string.",
        E: "The symbol type can only be explicitly coerced to a string.",
      },
      code: '  function manageLogStatement(id) {\n  let statement = "User ID:" + id;\n  log(statement);\n  }',
    },
    {
      id: "q23",
      question:
        "A developer of Cosmic Software Solutions has received the array of customers via an HTTP request (see below the question). She has noticed these two issues with this data: 1) 'Justin Sampson' should not be present in the array. 2) The customers should be arranged in ascending order. After fixing these issues, she needs to display the customers in a div element on a web page like below. \n\n'Alyson Macdonald | Ana Salas | Carrol Fox | Jan Ward | Natalia Wyatt' Which code statements can be used to get the given string for the requirement?",
      type: "multiple choice",
      correct_options: ["A", "D", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "customers.sort();",
        B: "customers.sort(0);",
        C: "customers.slice(3, 1);",
        D: "customers.splice(3, 1);",
        E: "customers.join(' | ');",
      },
      code: "  let customers = ['Jan Ward', 'Carrol Fox', 'Natalia Wyatt', 'Justin Sampson', 'Alyson Macdonald', 'Ana Salas' ];",
    },
    {
      id: "q24",
      question:
        "A developer of Cosmic Software Solutions is building a web page that uses JavaScript code to retrieve the first name, last name, joining date, and salary of the selected employee from an external database and display it on the web page. However, the database does not always contain all the information about each employee. For instance, the last name of several employees is missing. If a value is missing or unexpected, the developer needs to show 'Not Available' in its place. She has written the following code to check the values returned by the database and display the required text accordingly. \n\nWhich of the following values would result in displaying 'Not Available' on the web page?",
      type: "multiple choice",
      correct_options: ["B", "C", "E"],
      number_of_correct_answers: 3,
      options: {
        A: "'O'",
        B: "undefined",
        C: "null",
        D: '""',
        E: "{}",
      },
      code: "  function displayNotAvailable(str) {\n  console.log(`${str} not available. );\n  };\n  if (!lastName) {\n  displayNotAvailable('lastName');\n  }\n  if (!joiningDate) {\n  displayNotAvailable('joiningDate');\n  }\n  if (!salary) {\n  displayNotAvailable('salary');\n  }",
    },
    {
      id: "q25",
      question:
        "A developer is working on a web page for managing volunteers for a fundraising event organized by a non-profit company. An object named 'volunteer' has been defined to store information about a particular volunteer. When a volunteer works for a new company, then their email address also changes. \n\nWhat is the most suitable approach for updating the value of the 'email' property in the object?",
      type: "multiple choice",
      correct_options: ["D"],
      options: {
        A: "The object should be converted to an array since array elements can be reassigned values",
        B: "The variable should be declared using the Object constructor instead of the Object literal method.",
        C: "The variable should be declared using the let keyword to allow the changing of property values.",
        D: "The email property can be updated directly by executing: volunteer.email = 'joe@salesforce.com';",
      },
      code: "  const volunteer = {\n  name: \"Joe\",\n  email: 'joe@acme.org',\n  phone: '111-333-666',\n  active: true\n  };",
    },
    {
      id: "q26",
      question:
        "A developer is working on an online course. Whenever a learner starts the course, a welcome message is displayed using the greeting function. During testing, it was discovered that some names cause this welcome message to be larger than the 75 characters that are available for the message. \n\nWhat code could be added to the function in order to return a welcome message without the name in those rare situations when the name is too large?",
      type: "multiple choice",
      correct_options: ["C"],
      options: {
        A: "if (greet.length > 75) return greet.replace(name);",
        B: "if (greet.length > 75) return greet.trim();",
        C: "if (greet.length > 75) return 'Welcome to the course!';",
        D: "if (greet > 75) return 'Welcome to the course!';",
      },
      code: "  function greeting(name) {\n  let greet = `Welcome to the course, ${name}!';\n  // Add code here\n  return greet;\n  }",
    },
    {
      id: "q27",
      question:
        " \n\ncheckNumber(fieldNum) { // Add code here to meet the requirements } Which two code blocks meet the requirements for the 'checkNumber' function?",
      type: "multiple choice",
      correct_options: ["A", "C"],
      options: {
        A: "let num = parseFloat(fieldNum); return Number.isInteger(num);",
        B: "let num = fieldNum.parseFloat();return isInteger(num);",
        C: "let num = Number.parseFloat(fieldNum); return Number.isInteger(num);",
        D: "let num = parseFloat(fieldNum); return num.isInteger();",
      },
    },
    {
      id: "q28",
      question:
        "A developer of Cosmic Lights is working on a web page for a portal that shows compensation information of the employee or contractor who is currently logged in. The information is retrieved from a cloud-based datastore. If the user does not receive any benefits, then the datastore returns null, false, or 0 as the value of the 'benefits' property. A unique section should be displayed on the web page for such users. If the user receives benefits, then a non-empty object is returned as the value of the property. \n\nWhich of the following conditions can be used alone in the 'if statement' below to check if the current user does not receive benefits?",
      type: "multiple choice",
      correct_options: ["C", "D"],
      options: {
        A: "benefits == false",
        B: "benefits == null",
        C: "benefits == false || benefits == null",
        D: "benefits == 0 || benefits == null",
      },
    },
    {
      id: "q29",
      question:
        " \n\nUsing the arrays in the first box, which statements would produce the array in the second box?",
      type: "multiple choice",
      correct_options: ["B", "D", "E"],
      options: {
        A: "concat(array1, array2)",
        B: "[array1, array2].flat()",
        C: "[array1, array2]",
        D: "array1.concat(array2)",
        E: "[ ... array1, ... array2]",
      },
    },
    {
      id: "q30",
      question:
        "For an online quiz application, whenever a text response is provided by a learner, exactly 50 characters of the response should be recorded. If the string is too short, characters should be added at the end; if the string is too long, it should be truncated. A developer has set up the following function for this purpose. \n\nWhich code statement could be added in place of the comment in order to meet this requirement?",
      type: "multiple choice",
      correct_options: ["A"],
      options: {
        A: "return newStr.padEnd(50, '.').substring(0, 50);",
        B: "return newStr.padEnd(50, '.');",
        C: "return newStr.substring(0, 50);",
        D: "return newStr.padStart(50, '.').substring(0, 50);",
      },
    },
    {
      id: "q31",
      question:
        " \n\nWhat will be the outcome of the JavaScript code below when it is executed?",
      type: "multiple choice",
      correct_options: ["B"],
      options: {
        A: "page.changeColor('black') will throw an error message.",
        B: "The 'color' property will be updated to 'black'.",
        C: "The 'color' property will become read-only.",
        D: "page.changeColor('black') will return the method body.",
      },
    },
    {
      id: "q32",
      question:
        "An online course requires a function for evaluating text input for questions. The function receives a string named 'str' that represents user input and another string named 'phrase' that represents the correct response. If 'str' contains 'phrase', then the user input is correct and should be prepared and sent to the 'recordQuestion' function. The current function doesn't meet the requirements. The 'phrase' is only a portion of what the string may include. When checking the phrase against the str, it should not be case sensitive. Also, the string needs to be prepared before it is sent to 'recordQuestion'. All spaces need to be replaced with an underscore character (_). In addition, the string should be trimmed down to 50 characters. \n\nWhat would be the correct 'if' statement and 'recordQuestion' call to meet these requirements?",
      type: "multiple choice",
      correct_options: ["C"],
      options: {
        A: "if (str.toLowerCase().includes(phrase)) { recordQuestion().replace(/ /g, '_').substring(50); }",
        B: "if (str.includes(phrase).toLowerCase()) { recordQuestion(str.replace(' ', '_').substring(50)); }",
        C: "if (str.toLowerCase().includes(phrase)) { recordQuestion(str.replace(/ /g, '_').substring(0, 50)); }",
        D: "if (str.toLowerCase().includes(phrase)) { recordQuestion().replace(' ', '_').substring(0, 50)); }",
      },
    },
    {
      id: "q33",
      question:
        "If the JSON. \n\nparse() method is applied to each of the following strings, which will parse without an error?",
      type: "multiple choice",
      correct_options: ["D"],
      options: {
        A: "'string'",
        B: '"string"',
        C: "'string'",
        D: "\"'string'\"",
      },
    },
    {
      id: "q34",
      question:
        "The variables below have been declared and the associated values assigned. \n\nWhich statements will produce a Boolean value of true?",
      type: "multiple choice",
      correct_options: ["A", "B", "E"],
      options: {
        A: "val1 == val2;",
        B: "val1 === Number(val2);",
        C: "val1 && val2;",
        D: "val1 || val2;",
        E: "!! val2;",
      },
    },
    {
      id: "q35",
      question:
        "A client-side application uses a JavaScript function to send reminder emails to a small group of sales representatives using the code below. The declaration of the 'emails' variable that was supposedly located after the sendReminders() function call is now missing. \n\nWhat should a developer add to properly declare the variable?",
      type: "multiple choice",
      options: {
        A: "var emails;",
        B: "let emails;",
        C: "const emails;",
        D: "global emails;",
      },
      correct_options: ["A"],
    },
    {
      id: "q36",
      question:
        "A senior developer has instructed her team to use strict mode when writing code. \n\nHow would the enabled feature have an effect on the following code?",
      type: "multiple choice",
      options: {
        A: "An error will be thrown since accountName is assigned to a value but has not been declared.",
        B: "Strict mode prevents variable hoisting with default initialization, so accountType needs to be declared at the top.",
        C: "Strict mode forces variables to be declared using let or const keywords to avoid hoisting.",
        D: "An error will be thrown since accountType is declared outside the function where it is used.",
      },
      correct_options: ["A"],
    },
    {
      id: "q37",
      question:
        "A developer is building a shopping cart page that will allow a customer to see the price and quantity of each item added to the cart as well as total price of the items. An array named 'items' has been defined to store the name, price, and quantity of each item. The following value has been assigned to the array for the purpose of testing. \n\nWhat code should be used to calculate the total price of the items?",
      type: "multiple choice",
      options: {
        A: "const total = items.reduce((accumulator, currentValue) => { return (accumulator + currentValue.price * currentValue.quantity) }, 0);",
        B: "const total = items.reduce((accumulator, currentValue, 0) => { return (accumulator + currentValue.price * currentValue.quantity) });",
        C: "const total = items.reduce((previousValue, currentValue) => { return (previousValue.price * previousValue.quantity + currentValue.price * currentValue.quantity) }, 0);",
        D: "const total = items.reduce((previousValue, currentValue, 0) => { return (previousValue.price * previousValue.quantity + currentValue.price * currentValue.quantity) });",
      },
      correct_options: ["A"],
    },
    {
      id: "q38",
      question:
        "A junior software developer who is working on a task management app has written the JavaScript code below for the purpose of testing a functionality. \n\nWhat will be displayed in the console when this code is executed?",
      type: "multiple choice",
      options: {
        A: "undefined true true",
        B: "0 undefined true",
        C: "0 true true",
        D: "undefined undefined true",
      },
      correct_options: ["A"],
    },
    {
      id: "q39",
      question:
        " \n\nOnce the code below has completed, what values and order would the array contain?",
      code: "let array = ['one', 1, 'two', 2, 3, 4];\nfor (let val of array) {\n  if (val === 3) {\n    array.push('three');\n  }\n}\narray.splice(1, 1);\narray.splice(2, 3, 'four');",
      type: "multiple choice",
      options: {
        A: "['one', 'two', 'three', 'four']",
        B: "['one', 1, 4, 'three', 'four']",
        C: "['one', 'two', 'four', 'three']",
        D: "['one', 1, 'two', 'four', 'three']",
      },
      correct_options: ["C"],
    },
    {
      id: "q40",
      question:
        "A developer needs to define a JavaScript variable named 'totalCost', which will be used to store the total cost of product items that are contained in a shopping cart. \n\nHow should this variable be declared and initialized?",
      type: "multiple choice",
      options: {
        A: "var totalCost = On;",
        B: "totalCost = new float(0.0);",
        C: "let totalCost = 0;",
        D: "float totalCost = 0.0;",
      },
      correct_options: ["C"],
    },
    {
      id: "q41",
      question:
        "A program contains two objects named userObj1 and userObj2, as shown below. What will be the output of the console. \n\nlog statements at the end of the loop?",
      type: "multiple choice",
      options: {
        A: "[index=0][User id:1][User name:Carlos] [index=1]2",
        B: "[index=0][User id:1][User name: Carlos] [index=1][User id:2][User name: Luis]",
        C: "[index=0]1 [index=1][User id:2][User name: Luis]",
        D: "[index=0]1 [index=1]2",
      },
      correct_options: ["A"],
    },
    {
      id: "q42",
      question:
        " \n\nWhich of the following operations would result in NaN being placed in variable 'num'?",
      type: "multiple choice",
      options: {
        A: "const num = 1/ Number('1000');",
        B: "const num = 1/ new Number(true);",
        C: "const num = 1/false;",
        D: "const num = 1/ Number('true');",
      },
      correct_options: ["D"],
    },
    {
      id: "q43",
      question:
        "There is a requirement to add functionality in a web application that would allow a member to update their basic personal information. A frontend developer has written the following JavaScript code to check if a variable is properly assigned to a value. \n\nWhat will be the result when the printJobTitle() function is called?",
      type: "multiple choice",
      options: {
        A: "Error will be thrown since the 'jobTitle' variable is declared twice.",
        B: "'I am an Engineer' will be logged in the debugging console.",
        C: "The printJobTitle() function will not be able to access the 'jobTitle' variable.",
        D: "'I am an Architect' will be logged in the debugging console.",
      },
      correct_options: ["B"],
    },
    {
      id: "q44",
      question:
        "A developer needs to convert customer data stored in a JavaScript object into JSON format and send it to a remote endpoint. \n\nWhich method of the JSON object should be used for the conversion?",
      type: "multiple choice",
      options: {
        A: "JSON.stringify()",
        B: "JSON.parse()",
        C: "JSON.serialize()",
        D: "JSON.send()",
      },
      correct_options: ["A"],
    },
  ];
};