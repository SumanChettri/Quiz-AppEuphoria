export const quizOptions = [
  {
    type: "categorie",
    title: "Choose a Category of Questions:",
    options: ["javascript", "reactjs", "nodejs", "python", "htmlcss", "typescript"],
  },
  {
    type: "quantity",
    title: "Number of Questions:",
    options: [5, 10, 15, 20],
  },
  {
    type: "mode",
    title: "Difficulty modes of Questions:",
    options: ["easy", "medium", "hard"],
  },
];

export const questionsData = [
  {
    id: 1,
    title: "question 1",
    query: "What is the purpose of the 'this' keyword in JavaScript?",
    explanation:
      "The 'this' keyword refers to the object that is currently executing the code. In a method, it refers to the owner object; in a function, it refers to the global object.",
    answer: "a",
    choices: [
      { a: "Refers to the object executing the code", selected: "a" },
      { a: "Refers to the global object", selected: "b" },
      { a: "Refers to the function that called it", selected: "c" },
      { a: "Refers to the last object created", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "easy",
    },
  },
  {
    id: 2,
    title: "question 2",
    query: "How do you declare a variable in JavaScript?",
    explanation:
      "Variables in JavaScript can be declared using 'var', 'let', or 'const'. 'var' is function-scoped, while 'let' and 'const' are block-scoped.",
    answer: "b",
    choices: [
      { a: "Using 'variable'", selected: "a" },
      { a: "Using 'let'", selected: "b" },
      { a: "Using 'define'", selected: "c" },
      { a: "Using 'const'", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "easy",
    },
  },
  {
    id: 3,
    title: "question 3",
    query: "What does the 'typeof' operator do in JavaScript?",
    explanation:
      "The 'typeof' operator returns a string indicating the type of the unevaluated operand.",
    answer: "c",
    choices: [
      { a: "Converts a value to a string", selected: "a" },
      { a: "Checks if a value is null", selected: "b" },
      { a: "Returns the type of the operand", selected: "c" },
      { a: "Assigns a type to a variable", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "easy",
    },
  },
  {
    id: 4,
    title: "question 4",
    query: "How do you create a function in JavaScript?",
    explanation:
      "Functions in JavaScript can be created using function declarations, function expressions, or arrow functions.",
    answer: "d",
    choices: [
      { a: "Using 'function create()'", selected: "a" },
      { a: "Using 'var create = function()'", selected: "b" },
      { a: "Using 'function create() = () =>'", selected: "c" },
      { a: "Using 'const create = () =>'", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "easy",
    },
  },
  {
    id: 5,
    title: "question 5",
    query: "What is the difference between '==' and '===' in JavaScript?",
    explanation:
      "'==' performs type coercion while comparing values, whereas '===' checks for both value and type equality.",
    answer: "b",
    choices: [
      { a: "Both check for value only", selected: "a" },
      { a: "'===' checks for both value and type", selected: "b" },
      { a: "'==' is stricter than '==='", selected: "c" },
      { a: "'===' performs type coercion", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "easy",
    },
  },
  {
    id: 6,
    title: "question 6",
    query: "What is a closure in JavaScript?",
    explanation:
      "A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.",
    answer: "a",
    choices: [
      {
        a: "A function with access to its own scope and outer scopes",
        selected: "a",
      },
      { a: "A function that calls itself", selected: "b" },
      { a: "A function without parameters", selected: "c" },
      { a: "A function used to create classes", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "easy",
    },
  },
  {
    id: 7,
    title: "question 7",
    query: "What is the difference between 'null' and 'undefined'?",
    explanation:
      "'null' is an assignment value that represents no value, while 'undefined' means a variable has been declared but not assigned a value.",
    answer: "c",
    choices: [
      { a: "'null' is used for uninitialized variables", selected: "a" },
      { a: "'undefined' is used for deliberate null values", selected: "b" },
      {
        a: "'null' represents no value, 'undefined' is uninitialized",
        selected: "c",
      },
      { a: "'null' and 'undefined' are the same", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "easy",
    },
  },
  {
    id: 8,
    title: "question 8",
    query: "How do you create an object in JavaScript?",
    explanation:
      "Objects in JavaScript can be created using object literals, constructor functions, or the 'Object.create()' method.",
    answer: "a",
    choices: [
      { a: "Using object literals", selected: "a" },
      { a: "Using 'new Object()'", selected: "b" },
      { a: "Using 'Object.create()'", selected: "c" },
      { a: "Using 'function Object()'", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "easy",
    },
  },
  {
    id: 9,
    title: "question 9",
    query: "What is the 'for...of' loop used for?",
    explanation:
      "The 'for...of' loop is used to iterate over iterable objects such as arrays, strings, and maps, providing a simple way to access elements.",
    answer: "b",
    choices: [
      { a: "To iterate over object keys", selected: "a" },
      { a: "To iterate over iterable objects", selected: "b" },
      { a: "To iterate over array indices", selected: "c" },
      { a: "To iterate over function properties", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "easy",
    },
  },
  {
    id: 10,
    title: "question 10",
    query: "What is event delegation in JavaScript?",
    explanation:
      "Event delegation involves attaching a single event listener to a parent element to handle events for its child elements, improving performance and code maintainability.",
    answer: "d",
    choices: [
      {
        a: "Attaching event listeners directly to child elements",
        selected: "a",
      },
      { a: "Creating event handlers for each element", selected: "b" },
      { a: "Using multiple event listeners for efficiency", selected: "c" },
      {
        a: "Attaching a single event listener to a parent element",
        selected: "d",
      },
    ],
    info: {
      categorie: "javascript",
      mode: "easy",
    },
  },

  // javascript medium

  {
    id: 11,
    title: "question 11",
    query: "What is the output of 'console.log(typeof NaN)'?",
    explanation:
      "The output is 'number' because NaN stands for 'Not-a-Number', but its type is still 'number'.",
    answer: "a",
    choices: [
      { a: "'number'", selected: "a" },
      { a: "'NaN'", selected: "b" },
      { a: "'undefined'", selected: "c" },
      { a: "'object'", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "medium",
    },
  },
  {
    id: 12,
    title: "question 12",
    query: "What does 'Array.isArray()' method do?",
    explanation:
      "'Array.isArray()' determines whether the provided value is an array.",
    answer: "b",
    choices: [
      { a: "Checks if a value is an object", selected: "a" },
      { a: "Checks if a value is an array", selected: "b" },
      { a: "Checks if a value is a string", selected: "c" },
      { a: "Checks if a value is a number", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "medium",
    },
  },
  {
    id: 13,
    title: "question 13",
    query: "How do you handle errors in JavaScript?",
    explanation:
      "Errors can be handled using 'try...catch' blocks, allowing you to catch and handle exceptions.",
    answer: "c",
    choices: [
      { a: "Using 'if...else' statements", selected: "a" },
      { a: "Using 'switch...case'", selected: "b" },
      { a: "'try...catch' blocks", selected: "c" },
      { a: "Using 'throw' statements", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "medium",
    },
  },
  {
    id: 14,
    title: "question 14",
    query: "What is a JavaScript promise?",
    explanation:
      "A promise is an object representing the eventual completion or failure of an asynchronous operation.",
    answer: "d",
    choices: [
      { a: "A synchronous operation", selected: "a" },
      { a: "A function that returns a value", selected: "b" },
      { a: "An object with a static value", selected: "c" },
      {
        a: "An object representing an asynchronous operation",
        selected: "d",
      },
    ],
    info: {
      categorie: "javascript",
      mode: "medium",
    },
  },
  {
    id: 15,
    title: "question 15",
    query: "What is 'setTimeout()' used for in JavaScript?",
    explanation:
      "'setTimeout()' is used to execute a function after a specified number of milliseconds.",
    answer: "a",
    choices: [
      { a: "To delay the execution of a function", selected: "a" },
      { a: "To repeatedly execute a function", selected: "b" },
      { a: "To pause code execution", selected: "c" },
      { a: "To execute code immediately", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "medium",
    },
  },
  {
    id: 16,
    title: "question 16",
    query: "How do you create a promise in JavaScript?",
    explanation:
      "A promise is created using the 'Promise' constructor which takes a function with 'resolve' and 'reject' parameters.",
    answer: "d",
    choices: [
      { a: "Using 'new Async()'", selected: "a" },
      { a: "Using 'Promise.resolve()'", selected: "b" },
      { a: "Using 'new Promise()' without parameters", selected: "c" },
      { a: "Using 'new Promise(executor)'", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "medium",
    },
  },
  {
    id: 17,
    title: "question 17",
    query: "What is 'localStorage' used for?",
    explanation:
      "'localStorage' is used to store data in the browser persistently across sessions.",
    answer: "b",
    choices: [
      { a: "To store data temporarily", selected: "a" },
      { a: "To store data persistently", selected: "b" },
      { a: "To manage cookies", selected: "c" },
      { a: "To store session-specific data", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "medium",
    },
  },
  {
    id: 18,
    title: "question 18",
    query: "What is 'async/await' used for in JavaScript?",
    explanation:
      "'async/await' is used to work with asynchronous code, making it easier to read and write by handling promises.",
    answer: "c",
    choices: [
      { a: "To handle synchronous code", selected: "a" },
      { a: "To handle event listeners", selected: "b" },
      { a: "To work with asynchronous code", selected: "c" },
      { a: "To create new promises", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "medium",
    },
  },
  {
    id: 19,
    title: "question 19",
    query: "How do you clone an object in JavaScript?",
    explanation:
      "You can clone an object using methods like 'Object.assign()' or the spread operator.",
    answer: "a",
    choices: [
      { a: "Using 'Object.assign()' or spread operator", selected: "a" },
      { a: "Using 'JSON.parse()' and 'JSON.stringify()'", selected: "b" },
      { a: "Using 'Array.slice()'", selected: "c" },
      { a: "Using 'Object.create()'", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "medium",
    },
  },
  {
    id: 20,
    title: "question 20",
    query: "What is 'eval()' function used for?",
    explanation:
      "'eval()' executes a string of code as JavaScript, which can be risky and is generally discouraged due to security concerns.",
    answer: "d",
    choices: [
      { a: "To execute code from an external file", selected: "a" },
      { a: "To parse JSON strings", selected: "b" },
      { a: "To create a new function", selected: "c" },
      { a: "To execute a string of code", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "medium",
    },
  },

  // Javscript hard

  {
    id: 21,
    title: "question 21",
    query: "What does 'Function.prototype.call()' do?",
    explanation:
      "'Function.prototype.call()' calls a function with a specified 'this' value and arguments provided individually.",
    answer: "a",
    choices: [
      {
        a: "Calls a function with a specified 'this' value and arguments",
        selected: "a",
      },
      { a: "Creates a new function with the same body", selected: "b" },
      { a: "Sets the prototype of a function", selected: "c" },
      { a: "Binds a function to a new object", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "hard",
    },
  },
  {
    id: 22,
    title: "question 22",
    query: "What is the purpose of 'Object.freeze()'?",
    explanation:
      "'Object.freeze()' prevents modifications to an object, making it immutable.",
    answer: "b",
    choices: [
      { a: "Allows modifications to an object", selected: "a" },
      { a: "Prevents modifications to an object", selected: "b" },
      { a: "Clones an object", selected: "c" },
      { a: "Merges two objects", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "hard",
    },
  },
  {
    id: 23,
    title: "question 23",
    query: "What does 'Object.defineProperty()' do?",
    explanation:
      "'Object.defineProperty()' defines a new property or modifies an existing property on an object.",
    answer: "c",
    choices: [
      { a: "Deletes a property from an object", selected: "a" },
      { a: "Returns the property descriptor", selected: "b" },
      { a: "Defines or modifies a property", selected: "c" },
      { a: "Lists all properties of an object", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "hard",
    },
  },
  {
    id: 24,
    title: "question 24",
    query: "What does 'Object.getPrototypeOf()' return?",
    explanation:
      "'Object.getPrototypeOf()' returns the prototype of a specified object.",
    answer: "d",
    choices: [
      { a: "The constructor function of an object", selected: "a" },
      { a: "The prototype chain length", selected: "b" },
      { a: "The properties of an object", selected: "c" },
      { a: "The prototype of an object", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "hard",
    },
  },
  {
    id: 25,
    title: "question 25",
    query: "What is the purpose of 'Object.create()'?",
    explanation:
      "'Object.create()' creates a new object with the specified prototype object and properties.",
    answer: "a",
    choices: [
      { a: "Creates a new object with a specified prototype", selected: "a" },
      { a: "Assigns properties to an existing object", selected: "b" },
      { a: "Merges multiple objects", selected: "c" },
      { a: "Defines a new class", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "hard",
    },
  },
  {
    id: 26,
    title: "question 26",
    query: "What does 'Function.prototype.bind()' do?",
    explanation:
      "'Function.prototype.bind()' creates a new function that, when called, has its 'this' keyword set to the provided value.",
    answer: "b",
    choices: [
      { a: "Binds a function to a new context", selected: "a" },
      {
        a: "Creates a new function with a bound 'this' value",
        selected: "b",
      },
      { a: "Modifies the function's prototype", selected: "c" },
      { a: "Sets a default argument for the function", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "hard",
    },
  },
  {
    id: 27,
    title: "question 27",
    query: "What is the purpose of 'Symbol()' in JavaScript?",
    explanation:
      "'Symbol()' creates a unique and immutable value that can be used as a unique property key.",
    answer: "c",
    choices: [
      { a: "Creates a new object", selected: "a" },
      { a: "Generates a random number", selected: "b" },
      { a: "Creates a unique property key", selected: "c" },
      { a: "Defines a new constructor function", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "hard",
    },
  },
  {
    id: 28,
    title: "question 28",
    query: "What is 'Reflect.construct()' used for?",
    explanation:
      "'Reflect.construct()' allows you to call a constructor function with a specified 'this' value and arguments, similar to the 'new' operator.",
    answer: "a",
    choices: [
      { a: "Calls a constructor function with 'new'", selected: "a" },
      { a: "Modifies the constructor function", selected: "b" },
      { a: "Creates a new class", selected: "c" },
      { a: "Returns the prototype of a constructor", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "hard",
    },
  },
  {
    id: 29,
    title: "question 29",
    query: "What does 'Proxy' do in JavaScript?",
    explanation:
      "'Proxy' allows you to create a handler object that defines custom behavior for fundamental operations (e.g., property lookup).",
    answer: "b",
    choices: [
      { a: "Creates a new function", selected: "a" },
      { a: "Defines custom behavior for operations", selected: "b" },
      { a: "Handles asynchronous operations", selected: "c" },
      { a: "Creates a new object", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "hard",
    },
  },
  {
    id: 30,
    title: "question 30",
    query: "How do you use 'WeakMap' in JavaScript?",
    explanation:
      "'WeakMap' is a collection of key-value pairs where keys are objects and values can be any value. It allows for garbage collection of keys when they are no longer referenced elsewhere.",
    answer: "d",
    choices: [
      { a: "To store any data type as keys", selected: "a" },
      { a: "To handle asynchronous data", selected: "b" },
      { a: "To create a new object with weak references", selected: "c" },
      { a: "To store key-value pairs with weak references", selected: "d" },
    ],
    info: {
      categorie: "javascript",
      mode: "hard",
    },
  },

  // react easy

  {
    id: 1,
    title: "question 1",
    query: "What is ReactJS?",
    explanation:
      "ReactJS is a JavaScript library for building user interfaces, particularly single-page applications where you need a fast and interactive user experience.",
    answer: "a",
    choices: [
      {
        a: "A JavaScript library for building user interfaces",
        selected: "a",
      },
      { a: "A CSS framework for styling", selected: "b" },
      { a: "A server-side framework", selected: "c" },
      { a: "A database management system", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "easy",
    },
  },
  {
    id: 2,
    title: "question 2",
    query: "What does JSX stand for?",
    explanation:
      "JSX stands for JavaScript XML. It is a syntax extension that allows mixing HTML with JavaScript in React components.",
    answer: "b",
    choices: [
      { a: "JavaScript eXtension", selected: "a" },
      { a: "JavaScript XML", selected: "b" },
      { a: "JavaScript Execution", selected: "c" },
      { a: "JavaScript XQuery", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "easy",
    },
  },
  {
    id: 3,
    title: "question 3",
    query: "How do you create a functional component in React?",
    explanation:
      "Functional components are created using JavaScript functions that return JSX. They can be simple and are used for components that don't require state management.",
    answer: "c",
    choices: [
      { a: "By using class syntax", selected: "a" },
      { a: "By extending React.Component", selected: "b" },
      { a: "By creating a function that returns JSX", selected: "c" },
      { a: "By using the 'createComponent' method", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "easy",
    },
  },
  {
    id: 4,
    title: "question 4",
    query: "What is the purpose of 'useState' in React?",
    explanation:
      "'useState' is a Hook that allows you to add state management to functional components.",
    answer: "a",
    choices: [
      { a: "To add state to functional components", selected: "a" },
      { a: "To handle side effects", selected: "b" },
      { a: "To manage routing", selected: "c" },
      { a: "To access context", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "easy",
    },
  },
  {
    id: 5,
    title: "question 5",
    query: "How do you pass data between components in React?",
    explanation:
      "Data is passed between components in React using props. Props are attributes you add to a component to pass data down to child components.",
    answer: "b",
    choices: [
      { a: "Using global variables", selected: "a" },
      { a: "Using props", selected: "b" },
      { a: "Using state", selected: "c" },
      { a: "Using context", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "easy",
    },
  },
  {
    id: 6,
    title: "question 6",
    query: "What is 'useEffect' used for in React?",
    explanation:
      "'useEffect' is a Hook that lets you perform side effects in function components, such as data fetching or updating the DOM.",
    answer: "d",
    choices: [
      { a: "To manage state", selected: "a" },
      { a: "To handle routing", selected: "b" },
      { a: "To manage context", selected: "c" },
      { a: "To perform side effects", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "easy",
    },
  },
  {
    id: 7,
    title: "question 7",
    query: "What is a React Hook?",
    explanation:
      "React Hooks are functions that let you use state and other React features without writing a class. Examples include useState and useEffect.",
    answer: "a",
    choices: [
      { a: "A function that uses React features", selected: "a" },
      { a: "A method of a React class", selected: "b" },
      { a: "A type of React component", selected: "c" },
      { a: "A special prop for components", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "easy",
    },
  },
  {
    id: 8,
    title: "question 8",
    query: "How do you conditionally render a component in React?",
    explanation:
      "You can conditionally render components using JavaScript operators like 'if' statements or conditional (ternary) operators directly in the JSX.",
    answer: "b",
    choices: [
      { a: "Using 'if' statements in JSX", selected: "a" },
      { a: "Using conditional operators in JSX", selected: "b" },
      { a: "Using a separate component", selected: "c" },
      { a: "Using the 'render' method", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "easy",
    },
  },
  {
    id: 9,
    title: "question 9",
    query: "What is the purpose of 'React.Fragment'?",
    explanation:
      "'React.Fragment' is used to group a list of children without adding extra nodes to the DOM.",
    answer: "c",
    choices: [
      { a: "To create a new component", selected: "a" },
      { a: "To manage state", selected: "b" },
      { a: "To group elements without adding extra nodes", selected: "c" },
      { a: "To handle events", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "easy",
    },
  },
  {
    id: 10,
    title: "question 10",
    query: "How do you create a React context?",
    explanation:
      "You create a React context using React.createContext() and then provide values using a Context.Provider.",
    answer: "d",
    choices: [
      { a: "Using 'createContext' and 'Provider'", selected: "a" },
      { a: "Using 'useContext' Hook", selected: "b" },
      { a: "Using 'ReactDOM.render()'", selected: "c" },
      { a: "Using 'React.createContext()' and 'Provider'", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "easy",
    },
  },

  // react medium

  {
    id: 11,
    title: "question 11",
    query: "What is 'useMemo' used for in React?",
    explanation:
      "'useMemo' is a Hook that returns a memoized value, which helps in optimizing performance by avoiding expensive calculations on every render.",
    answer: "a",
    choices: [
      { a: "To memoize expensive calculations", selected: "a" },
      { a: "To manage component state", selected: "b" },
      { a: "To handle side effects", selected: "c" },
      { a: "To create context values", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "medium",
    },
  },
  {
    id: 12,
    title: "question 12",
    query: "How does React handle updates to state?",
    explanation:
      "React schedules updates to state asynchronously and re-renders the component when the state is updated, ensuring efficient and predictable updates.",
    answer: "b",
    choices: [
      { a: "Synchronously and immediately", selected: "a" },
      { a: "Asynchronously and batched", selected: "b" },
      { a: "Manually triggered", selected: "c" },
      { a: "By directly manipulating the DOM", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "medium",
    },
  },
  {
    id: 13,
    title: "question 13",
    query: "What is 'React.memo()' used for?",
    explanation:
      "'React.memo()' is a higher-order component that memoizes a component to prevent unnecessary re-renders when the props haven't changed.",
    answer: "c",
    choices: [
      { a: "To memoize state", selected: "a" },
      { a: "To cache component methods", selected: "b" },
      { a: "To prevent unnecessary re-renders", selected: "c" },
      { a: "To handle side effects", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "medium",
    },
  },
  {
    id: 14,
    title: "question 14",
    query: "What does 'useReducer' do in React?",
    explanation:
      "'useReducer' is a Hook that manages more complex state logic in functional components, similar to 'useState' but with a reducer function.",
    answer: "a",
    choices: [
      { a: "Manages complex state logic", selected: "a" },
      { a: "Handles side effects", selected: "b" },
      { a: "Provides context", selected: "c" },
      { a: "Renders a list of elements", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "medium",
    },
  },
  {
    id: 15,
    title: "question 15",
    query: "What is the purpose of 'React.StrictMode'?",
    explanation:
      "'React.StrictMode' helps to identify potential problems in an application by activating additional checks and warnings for its descendants.",
    answer: "b",
    choices: [
      { a: "To optimize performance", selected: "a" },
      { a: "To identify potential problems", selected: "b" },
      { a: "To manage global state", selected: "c" },
      { a: "To handle routing", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "medium",
    },
  },
  {
    id: 16,
    title: "question 16",
    query: "What does 'React.lazy()' do?",
    explanation:
      "'React.lazy()' enables dynamic import of components, which allows you to split code and load components only when they are needed.",
    answer: "d",
    choices: [
      { a: "Eagerly loads all components", selected: "a" },
      { a: "Immediately renders components", selected: "b" },
      { a: "Manages component state", selected: "c" },
      { a: "Dynamically imports components", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "medium",
    },
  },
  {
    id: 17,
    title: "question 17",
    query: "How do you use 'useCallback' in React?",
    explanation:
      "'useCallback' is a Hook that returns a memoized callback function, which helps to avoid unnecessary re-creations of functions on every render.",
    answer: "a",
    choices: [
      { a: "To memoize callback functions", selected: "a" },
      { a: "To manage state", selected: "b" },
      { a: "To handle side effects", selected: "c" },
      { a: "To create a new component", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "medium",
    },
  },
  {
    id: 18,
    title: "question 18",
    query: "What is 'useContext' used for?",
    explanation:
      "'useContext' is a Hook that allows you to access the value of a React context directly in functional components.",
    answer: "b",
    choices: [
      { a: "To create a new context", selected: "a" },
      { a: "To access context values", selected: "b" },
      { a: "To manage state", selected: "c" },
      { a: "To perform side effects", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "medium",
    },
  },
  {
    id: 19,
    title: "question 19",
    query: "How do you update context values in React?",
    explanation:
      "Context values are updated by providing a new value to the Context.Provider component, which then propagates the change to all consuming components.",
    answer: "c",
    choices: [
      { a: "Using 'setContext' method", selected: "a" },
      { a: "Using 'updateContext' method", selected: "b" },
      { a: "By updating the value of Context.Provider", selected: "c" },
      { a: "Directly modifying context", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "medium",
    },
  },
  {
    id: 20,
    title: "question 20",
    query: "What does 'React.Fragment' allow you to do?",
    explanation:
      "'React.Fragment' allows you to group multiple elements without adding extra nodes to the DOM.",
    answer: "d",
    choices: [
      { a: "Add extra nodes to the DOM", selected: "a" },
      { a: "Create a new component", selected: "b" },
      { a: "Manage component state", selected: "c" },
      { a: "Group elements without extra nodes", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "medium",
    },
  },

  // react hard

  {
    id: 21,
    title: "question 21",
    query: "What is the purpose of 'React.createElement()'?",
    explanation:
      "'React.createElement()' is used to create React elements that can be rendered to the DOM, representing the virtual DOM.",
    answer: "b",
    choices: [
      { a: "To create new components", selected: "a" },
      { a: "To create React elements for rendering", selected: "b" },
      { a: "To manage state", selected: "c" },
      { a: "To handle side effects", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "hard",
    },
  },
  {
    id: 22,
    title: "question 22",
    query: "How does React use the virtual DOM?",
    explanation:
      "React uses the virtual DOM to optimize rendering by keeping a lightweight copy of the actual DOM and only updating the parts that have changed.",
    answer: "d",
    choices: [
      { a: "To replace the actual DOM", selected: "a" },
      { a: "To manage state more efficiently", selected: "b" },
      { a: "To handle side effects", selected: "c" },
      { a: "To optimize rendering by minimizing updates", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "hard",
    },
  },
  {
    id: 23,
    title: "question 23",
    query: "What is 'React.PureComponent' used for?",
    explanation:
      "'React.PureComponent' is a base class for components that only re-render when their props or state change, providing a shallow comparison for optimization.",
    answer: "c",
    choices: [
      { a: "To create new context", selected: "a" },
      { a: "To manage component state", selected: "b" },
      { a: "To optimize re-rendering by shallow comparison", selected: "c" },
      { a: "To handle asynchronous operations", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "hard",
    },
  },
  {
    id: 24,
    title: "question 24",
    query: "How does 'React.forwardRef()' work?",
    explanation:
      "'React.forwardRef()' allows you to forward refs to a child component, enabling the parent component to directly access the child's DOM node.",
    answer: "b",
    choices: [
      { a: "It creates a new context", selected: "a" },
      { a: "It forwards refs to child components", selected: "b" },
      { a: "It manages component lifecycle", selected: "c" },
      { a: "It handles side effects", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "hard",
    },
  },
  {
    id: 25,
    title: "question 25",
    query: "What is the role of 'shouldComponentUpdate' in React?",
    explanation:
      "'shouldComponentUpdate' is a lifecycle method that determines whether a component should re-render or not, allowing for performance optimization.",
    answer: "a",
    choices: [
      { a: "To control re-rendering", selected: "a" },
      { a: "To manage component state", selected: "b" },
      { a: "To handle context changes", selected: "c" },
      { a: "To create new elements", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "hard",
    },
  },
  {
    id: 26,
    title: "question 26",
    query: "What does 'React.Suspense' allow you to do?",
    explanation:
      "'React.Suspense' lets you handle loading states for components that are dynamically imported or have async data, providing a fallback UI while loading.",
    answer: "d",
    choices: [
      { a: "To manage component state", selected: "a" },
      { a: "To optimize rendering performance", selected: "b" },
      { a: "To handle context updates", selected: "c" },
      { a: "To handle loading states and fallback UI", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "hard",
    },
  },
  {
    id: 27,
    title: "question 27",
    query: "What is the purpose of 'React.StrictMode' in development?",
    explanation:
      "'React.StrictMode' helps to identify potential problems and warnings in the application during development, ensuring better practices and code quality.",
    answer: "b",
    choices: [
      { a: "To improve production performance", selected: "a" },
      { a: "To identify potential problems and warnings", selected: "b" },
      { a: "To handle component state", selected: "c" },
      { a: "To manage routing", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "hard",
    },
  },
  {
    id: 28,
    title: "question 28",
    query: "What is 'ReactDOM.hydrate()' used for?",
    explanation:
      "'ReactDOM.hydrate()' is used to attach event handlers to server-rendered HTML, allowing React to manage the existing content effectively.",
    answer: "c",
    choices: [
      { a: "To replace server-rendered content", selected: "a" },
      { a: "To manage component state", selected: "b" },
      {
        a: "To attach event handlers to server-rendered HTML",
        selected: "c",
      },
      { a: "To handle context updates", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "hard",
    },
  },
  {
    id: 29,
    title: "question 29",
    query: "How does 'React.StrictMode' affect class components?",
    explanation:
      "'React.StrictMode' applies additional checks and warnings to class components in development mode, helping identify potential issues and enforce best practices.",
    answer: "a",
    choices: [
      { a: "Applies additional checks and warnings", selected: "a" },
      { a: "Optimizes rendering performance", selected: "b" },
      { a: "Manages state efficiently", selected: "c" },
      { a: "Handles asynchronous operations", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "hard",
    },
  },
  {
    id: 30,
    title: "question 30",
    query: "What does 'React.createContext()' provide?",
    explanation:
      "'React.createContext()' provides a Context object that can be used to share values between components without having to pass props explicitly through every level of the component tree.",
    answer: "b",
    choices: [
      { a: "A method for state management", selected: "a" },
      { a: "A Context object for prop drilling", selected: "b" },
      { a: "A utility for handling side effects", selected: "c" },
      { a: "A tool for managing component lifecycle", selected: "d" },
    ],
    info: {
      categorie: "reactjs",
      mode: "hard",
    },
  },

  // nodejs easy

  {
    id: 1,
    title: "question 1",
    query: "What is Node.js?",
    explanation:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to execute JavaScript code server-side.",
    answer: "a",
    choices: [
      { a: "A JavaScript runtime for server-side scripting", selected: "a" },
      { a: "A CSS preprocessor", selected: "b" },
      { a: "A database management system", selected: "c" },
      { a: "A JavaScript library for the frontend", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "easy",
    },
  },
  {
    id: 2,
    title: "question 2",
    query: "Which command initializes a new Node.js project?",
    explanation:
      "The command 'npm init' initializes a new Node.js project by creating a package.json file where project metadata and dependencies are listed.",
    answer: "b",
    choices: [
      { a: "npm start", selected: "a" },
      { a: "npm init", selected: "b" },
      { a: "npm install", selected: "c" },
      { a: "npm create", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "easy",
    },
  },
  {
    id: 3,
    title: "question 3",
    query: "How do you include external modules in Node.js?",
    explanation:
      "In Node.js, you use the 'require()' function to include external modules and access their functionalities.",
    answer: "c",
    choices: [
      { a: "import()", selected: "a" },
      { a: "include()", selected: "b" },
      { a: "require()", selected: "c" },
      { a: "load()", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "easy",
    },
  },
  {
    id: 4,
    title: "question 4",
    query: "What is the purpose of the 'fs' module in Node.js?",
    explanation:
      "The 'fs' (file system) module provides an API for interacting with the file system, allowing you to read and write files.",
    answer: "d",
    choices: [
      { a: "To handle HTTP requests", selected: "a" },
      { a: "To manage databases", selected: "b" },
      { a: "To handle streams", selected: "c" },
      { a: "To interact with the file system", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "easy",
    },
  },
  {
    id: 5,
    title: "question 5",
    query: "Which method is used to start a Node.js HTTP server?",
    explanation:
      "The 'http.createServer()' method is used to create an HTTP server in Node.js, which can listen to incoming requests and send responses.",
    answer: "a",
    choices: [
      { a: "http.createServer()", selected: "a" },
      { a: "http.listen()", selected: "b" },
      { a: "http.startServer()", selected: "c" },
      { a: "http.run()", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "easy",
    },
  },
  {
    id: 6,
    title: "question 6",
    query: "What is 'npm'?",
    explanation:
      "'npm' (Node Package Manager) is a package manager for JavaScript, used to manage project dependencies and install packages.",
    answer: "b",
    choices: [
      { a: "A JavaScript framework", selected: "a" },
      { a: "A package manager for JavaScript", selected: "b" },
      { a: "A database engine", selected: "c" },
      { a: "A task runner", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "easy",
    },
  },
  {
    id: 7,
    title: "question 7",
    query: "What does the 'process.env' object contain?",
    explanation:
      "'process.env' contains environment variables available to the Node.js process, such as configuration settings and credentials.",
    answer: "c",
    choices: [
      { a: "User session data", selected: "a" },
      { a: "Local file system paths", selected: "b" },
      { a: "Environment variables", selected: "c" },
      { a: "Network configurations", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "easy",
    },
  },
  {
    id: 8,
    title: "question 8",
    query: "What does the 'path' module in Node.js do?",
    explanation:
      "The 'path' module provides utilities for working with file and directory paths, such as joining and resolving paths.",
    answer: "a",
    choices: [
      { a: "Provides utilities for working with paths", selected: "a" },
      { a: "Handles network requests", selected: "b" },
      { a: "Manages database connections", selected: "c" },
      { a: "Parses incoming HTTP requests", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "easy",
    },
  },
  {
    id: 9,
    title: "question 9",
    query: "What is 'async/await' in Node.js?",
    explanation:
      "'async/await' is a syntax for working with asynchronous code in a more synchronous-like manner, making it easier to write and understand.",
    answer: "d",
    choices: [
      { a: "A database management system", selected: "a" },
      { a: "A new JavaScript framework", selected: "b" },
      { a: "A command-line tool", selected: "c" },
      { a: "Syntax for working with asynchronous code", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "easy",
    },
  },
  {
    id: 10,
    title: "question 10",
    query: "Which method is used to read a file asynchronously in Node.js?",
    explanation:
      "The 'fs.readFile()' method is used to read the contents of a file asynchronously, allowing you to handle file operations without blocking the event loop.",
    answer: "a",
    choices: [
      { a: "fs.readFile()", selected: "a" },
      { a: "fs.read()", selected: "b" },
      { a: "fs.open()", selected: "c" },
      { a: "fs.readSync()", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "easy",
    },
  },

  // nodejs medium

  {
    id: 11,
    title: "question 11",
    query: "What is the purpose of the 'events' module in Node.js?",
    explanation:
      "The 'events' module provides a way to work with events and listeners in Node.js, allowing for event-driven programming.",
    answer: "b",
    choices: [
      { a: "To handle HTTP requests", selected: "a" },
      { a: "To work with events and listeners", selected: "b" },
      { a: "To manage file system operations", selected: "c" },
      { a: "To handle asynchronous operations", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "medium",
    },
  },
  {
    id: 12,
    title: "question 12",
    query: "How do you handle errors in Node.js asynchronous code?",
    explanation:
      "Errors in asynchronous Node.js code are typically handled using error-first callbacks or by catching exceptions in promises using 'catch()' or 'try/catch' with 'async/await'.",
    answer: "a",
    choices: [
      { a: "Using error-first callbacks or try/catch", selected: "a" },
      { a: "Ignoring errors", selected: "b" },
      { a: "Logging errors to the console", selected: "c" },
      { a: "Using synchronous error handling", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "medium",
    },
  },
  {
    id: 13,
    title: "question 13",
    query: "What is the purpose of the 'http' module in Node.js?",
    explanation:
      "The 'http' module provides utilities for creating HTTP servers and making HTTP requests, enabling communication between the server and clients.",
    answer: "c",
    choices: [
      { a: "To manage file system operations", selected: "a" },
      { a: "To handle asynchronous operations", selected: "b" },
      { a: "To create HTTP servers and requests", selected: "c" },
      { a: "To work with environment variables", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "medium",
    },
  },
  {
    id: 14,
    title: "question 14",
    query: "How does Node.js handle concurrency?",
    explanation:
      "Node.js handles concurrency using a single-threaded event loop and non-blocking I/O operations, which allows it to handle many connections simultaneously without creating new threads for each one.",
    answer: "d",
    choices: [
      { a: "Using multi-threading", selected: "a" },
      { a: "By creating new processes for each request", selected: "b" },
      { a: "Using synchronous I/O operations", selected: "c" },
      { a: "Using an event loop and non-blocking I/O", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "medium",
    },
  },
  {
    id: 15,
    title: "question 15",
    query: "What is 'npm install' used for?",
    explanation:
      "'npm install' is used to install dependencies listed in the package.json file or to install specific packages from the npm registry.",
    answer: "a",
    choices: [
      { a: "To install dependencies and packages", selected: "a" },
      { a: "To start the Node.js server", selected: "b" },
      { a: "To update the package.json file", selected: "c" },
      { a: "To create a new Node.js project", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "medium",
    },
  },
  {
    id: 16,
    title: "question 16",
    query: "What does 'module.exports' do in Node.js?",
    explanation:
      "'module.exports' is used to export functions, objects, or values from a module so that they can be required and used in other files.",
    answer: "c",
    choices: [
      { a: "Imports modules into the current file", selected: "a" },
      { a: "Manages file system operations", selected: "b" },
      { a: "Exports functions and values from a module", selected: "c" },
      { a: "Handles asynchronous tasks", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "medium",
    },
  },
  {
    id: 17,
    title: "question 17",
    query: "How can you make an HTTP request in Node.js?",
    explanation:
      "You can make HTTP requests in Node.js using the 'http' or 'https' modules, or by using third-party libraries like 'axios' or 'node-fetch'.",
    answer: "b",
    choices: [
      { a: "Using the 'fs' module", selected: "a" },
      { a: "Using 'http' or third-party libraries", selected: "b" },
      { a: "Using 'path' module", selected: "c" },
      { a: "Using 'events' module", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "medium",
    },
  },
  {
    id: 18,
    title: "question 18",
    query: "What is the 'cluster' module used for in Node.js?",
    explanation:
      "The 'cluster' module allows you to create child processes that share the same server port, enabling you to utilize multiple CPU cores for better performance.",
    answer: "a",
    choices: [
      { a: "To create child processes for load balancing", selected: "a" },
      { a: "To manage file system operations", selected: "b" },
      { a: "To handle database operations", selected: "c" },
      { a: "To manage HTTP requests", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "medium",
    },
  },
  {
    id: 19,
    title: "question 19",
    query: "What is the purpose of 'process.nextTick()' in Node.js?",
    explanation:
      "'process.nextTick()' allows you to schedule a callback to be invoked in the next iteration of the event loop, before any I/O operations.",
    answer: "d",
    choices: [
      { a: "To delay the execution of a callback", selected: "a" },
      { a: "To manage file system operations", selected: "b" },
      { a: "To handle HTTP requests", selected: "c" },
      {
        a: "To schedule a callback for the next iteration of the event loop",
        selected: "d",
      },
    ],
    info: {
      categorie: "nodejs",
      mode: "medium",
    },
  },
  {
    id: 20,
    title: "question 20",
    query: "What does 'npm update' do?",
    explanation:
      "'npm update' updates the dependencies listed in the package.json file to their latest versions according to the version ranges specified.",
    answer: "b",
    choices: [
      { a: "Installs new dependencies", selected: "a" },
      {
        a: "Updates existing dependencies to latest versions",
        selected: "b",
      },
      { a: "Uninstalls packages", selected: "c" },
      { a: "Initializes a new project", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "medium",
    },
  },

  // nodejs hard

  {
    id: 21,
    title: "question 21",
    query: "What is the purpose of 'Node.js streams'?",
    explanation:
      "Node.js streams are used to handle large amounts of data efficiently by processing chunks of data as they are read or written, without loading the entire data into memory.",
    answer: "b",
    choices: [
      { a: "To handle HTTP requests", selected: "a" },
      { a: "To handle large amounts of data efficiently", selected: "b" },
      { a: "To manage file system operations", selected: "c" },
      { a: "To interact with databases", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "hard",
    },
  },
  {
    id: 22,
    title: "question 22",
    query: "How does Node.js handle asynchronous operations?",
    explanation:
      "Node.js handles asynchronous operations using an event-driven, non-blocking I/O model, where operations are executed in the background and callbacks or promises are used to handle results.",
    answer: "d",
    choices: [
      { a: "Using multi-threading", selected: "a" },
      { a: "By blocking the event loop", selected: "b" },
      { a: "Using synchronous I/O operations", selected: "c" },
      { a: "Using event-driven, non-blocking I/O model", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "hard",
    },
  },
  {
    id: 23,
    title: "question 23",
    query: "What is 'EventEmitter' in Node.js?",
    explanation:
      "'EventEmitter' is a class in Node.js that allows you to handle events and listeners, enabling custom event-driven programming.",
    answer: "a",
    choices: [
      { a: "A class for handling events and listeners", selected: "a" },
      { a: "A method for file operations", selected: "b" },
      { a: "A module for managing HTTP requests", selected: "c" },
      { a: "A tool for process management", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "hard",
    },
  },
  {
    id: 24,
    title: "question 24",
    query: "How does 'process.env.NODE_ENV' help in Node.js applications?",
    explanation:
      "'process.env.NODE_ENV' is used to determine the current environment (e.g., development, production) and can be used to conditionally run code or set configurations based on the environment.",
    answer: "c",
    choices: [
      { a: "To manage database connections", selected: "a" },
      { a: "To handle file operations", selected: "b" },
      { a: "To set and check the current environment", selected: "c" },
      { a: "To process HTTP requests", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "hard",
    },
  },
  {
    id: 25,
    title: "question 25",
    query: "What does 'node --inspect' do?",
    explanation:
      "'node --inspect' starts a Node.js application with the inspector enabled, allowing you to debug your code using tools like Chrome DevTools.",
    answer: "b",
    choices: [
      { a: "Starts the application in production mode", selected: "a" },
      { a: "Enables debugging with inspector tools", selected: "b" },
      { a: "Installs dependencies", selected: "c" },
      { a: "Manages environment variables", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "hard",
    },
  },
  {
    id: 26,
    title: "question 26",
    query: "How do you handle uncaught exceptions in Node.js?",
    explanation:
      "Uncaught exceptions can be handled by listening to the 'uncaughtException' event on the process object, though it is generally recommended to handle errors gracefully in callbacks and promises.",
    answer: "d",
    choices: [
      { a: "By restarting the application", selected: "a" },
      { a: "By logging the exception", selected: "b" },
      { a: "By ignoring the exception", selected: "c" },
      { a: "By listening to 'uncaughtException' event", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "hard",
    },
  },
  {
    id: 27,
    title: "question 27",
    query: "What is 'child_process.exec()' used for in Node.js?",
    explanation:
      "'child_process.exec()' is used to execute a shell command from within a Node.js script and obtain the output.",
    answer: "a",
    choices: [
      { a: "To execute shell commands", selected: "a" },
      { a: "To manage network connections", selected: "b" },
      { a: "To handle file operations", selected: "c" },
      { a: "To work with HTTP requests", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "hard",
    },
  },
  {
    id: 28,
    title: "question 28",
    query: "What does 'async_hooks' module do in Node.js?",
    explanation:
      "'async_hooks' provides an API to track asynchronous resources and their lifecycle in Node.js, useful for debugging and monitoring asynchronous operations.",
    answer: "b",
    choices: [
      { a: "Tracks file system changes", selected: "a" },
      {
        a: "Tracks asynchronous operations and their lifecycle",
        selected: "b",
      },
      { a: "Manages network connections", selected: "c" },
      { a: "Handles process management", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "hard",
    },
  },
  {
    id: 29,
    title: "question 29",
    query: "What is the 'vm' module used for in Node.js?",
    explanation:
      "'vm' (Virtual Machine) module allows you to compile and run code within a V8 virtual machine context, providing a way to execute code within Node.js safely.",
    answer: "a",
    choices: [
      {
        a: "To compile and run code in a virtual machine context",
        selected: "a",
      },
      { a: "To handle file operations", selected: "b" },
      { a: "To manage network connections", selected: "c" },
      { a: "To debug Node.js processes", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "hard",
    },
  },
  {
    id: 30,
    title: "question 30",
    query: "What is 'libuv' in Node.js?",
    explanation:
      "'libuv' is a C library that provides asynchronous I/O operations and event handling in Node.js, enabling its non-blocking architecture.",
    answer: "c",
    choices: [
      { a: "A Node.js module for file operations", selected: "a" },
      { a: "A tool for managing packages", selected: "b" },
      {
        a: "A C library for asynchronous I/O and event handling",
        selected: "c",
      },
      { a: "A JavaScript runtime environment", selected: "d" },
    ],
    info: {
      categorie: "nodejs",
      mode: "hard",
    },
  },

  // Python easy
  {
    id: 1,
    title: "question 1",
    query: "What is Python?",
    explanation: "Python is a high-level, interpreted programming language known for its simplicity and readability.",
    answer: "a",
    choices: [
      { a: "A high-level programming language", selected: "a" },
      { a: "A database management system", selected: "b" },
      { a: "A web browser", selected: "c" },
      { a: "An operating system", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "easy",
    },
  },
  {
    id: 2,
    title: "question 2",
    query: "How do you print 'Hello World' in Python?",
    explanation: "The print() function is used to display output in Python.",
    answer: "b",
    choices: [
      { a: "echo('Hello World')", selected: "a" },
      { a: "print('Hello World')", selected: "b" },
      { a: "console.log('Hello World')", selected: "c" },
      { a: "display('Hello World')", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "easy",
    },
  },
  {
    id: 3,
    title: "question 3",
    query: "What is the correct way to create a list in Python?",
    explanation: "Lists in Python are created using square brackets [].",
    answer: "c",
    choices: [
      { a: "list = (1, 2, 3)", selected: "a" },
      { a: "list = {1, 2, 3}", selected: "b" },
      { a: "list = [1, 2, 3]", selected: "c" },
      { a: "list = <1, 2, 3>", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "easy",
    },
  },
  {
    id: 4,
    title: "question 4",
    query: "How do you define a function in Python?",
    explanation: "Functions in Python are defined using the 'def' keyword followed by the function name and parameters.",
    answer: "a",
    choices: [
      { a: "def function_name():", selected: "a" },
      { a: "function function_name():", selected: "b" },
      { a: "func function_name():", selected: "c" },
      { a: "define function_name():", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "easy",
    },
  },
  {
    id: 5,
    title: "question 5",
    query: "What is the result of 5 // 2 in Python?",
    explanation: "The // operator performs floor division, which returns the integer part of the division.",
    answer: "b",
    choices: [
      { a: "2.5", selected: "a" },
      { a: "2", selected: "b" },
      { a: "3", selected: "c" },
      { a: "2.0", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "easy",
    },
  },
  {
    id: 6,
    title: "question 6",
    query: "What is a dictionary in Python?",
    explanation: "A dictionary is a collection of key-value pairs, enclosed in curly braces {}.",
    answer: "c",
    choices: [
      { a: "An ordered list of elements", selected: "a" },
      { a: "A sequence of characters", selected: "b" },
      { a: "A collection of key-value pairs", selected: "c" },
      { a: "A single value", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "easy",
    },
  },
  {
    id: 7,
    title: "question 7",
    query: "What does the 'len()' function do in Python?",
    explanation: "The len() function returns the length (number of items) of an object.",
    answer: "d",
    choices: [
      { a: "Converts to lowercase", selected: "a" },
      { a: "Splits a string", selected: "b" },
      { a: "Finds the maximum value", selected: "c" },
      { a: "Returns the length of an object", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "easy",
    },
  },
  {
    id: 8,
    title: "question 8",
    query: "How do you add an item to a list in Python?",
    explanation: "The append() method adds an item to the end of a list.",
    answer: "a",
    choices: [
      { a: "list.append(item)", selected: "a" },
      { a: "list.add(item)", selected: "b" },
      { a: "list.insert(item)", selected: "c" },
      { a: "list.push(item)", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "easy",
    },
  },
  {
    id: 9,
    title: "question 9",
    query: "What is the correct syntax for a for loop in Python?",
    explanation: "Python for loops use the syntax 'for item in iterable:'.",
    answer: "b",
    choices: [
      { a: "for (item in list)", selected: "a" },
      { a: "for item in list:", selected: "b" },
      { a: "for item of list:", selected: "c" },
      { a: "for item from list:", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "easy",
    },
  },
  {
    id: 10,
    title: "question 10",
    query: "What is the result of 'Hello' + 'World' in Python?",
    explanation: "The + operator concatenates strings in Python.",
    answer: "c",
    choices: [
      { a: "Hello World", selected: "a" },
      { a: "HelloWorld", selected: "b" },
      { a: "'HelloWorld'", selected: "c" },
      { a: "Error", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "easy",
    },
  },

  // Python medium
  {
    id: 11,
    title: "question 11",
    query: "What is a list comprehension in Python?",
    explanation: "List comprehensions provide a concise way to create lists based on existing lists.",
    answer: "a",
    choices: [
      { a: "A concise way to create lists", selected: "a" },
      { a: "A method to sort lists", selected: "b" },
      { a: "A way to delete list items", selected: "c" },
      { a: "A function to merge lists", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "medium",
    },
  },
  {
    id: 12,
    title: "question 12",
    query: "What does the 'with' statement do in Python?",
    explanation: "The 'with' statement is used for resource management and ensures proper cleanup, commonly used with file operations.",
    answer: "b",
    choices: [
      { a: "Creates a new variable", selected: "a" },
      { a: "Manages resources and ensures cleanup", selected: "b" },
      { a: "Imports modules", selected: "c" },
      { a: "Defines a function", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "medium",
    },
  },
  {
    id: 13,
    title: "question 13",
    query: "What is the difference between '==' and 'is' in Python?",
    explanation: "'==' compares values, while 'is' checks if two variables point to the same object in memory.",
    answer: "c",
    choices: [
      { a: "Both are the same", selected: "a" },
      { a: "'is' compares values, '==' checks identity", selected: "b" },
      { a: "'==' compares values, 'is' checks identity", selected: "c" },
      { a: "Neither can be used for comparison", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "medium",
    },
  },
  {
    id: 14,
    title: "question 14",
    query: "What is a generator in Python?",
    explanation: "A generator is a function that returns an iterator, producing values one at a time using 'yield'.",
    answer: "d",
    choices: [
      { a: "A type of list", selected: "a" },
      { a: "A database query tool", selected: "b" },
      { a: "A file reading function", selected: "c" },
      { a: "A function that yields values one at a time", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "medium",
    },
  },
  {
    id: 15,
    title: "question 15",
    query: "What does 'lambda' do in Python?",
    explanation: "Lambda functions are anonymous functions defined using the 'lambda' keyword.",
    answer: "a",
    choices: [
      { a: "Creates anonymous functions", selected: "a" },
      { a: "Imports modules", selected: "b" },
      { a: "Defines classes", selected: "c" },
      { a: "Handles exceptions", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "medium",
    },
  },
  {
    id: 16,
    title: "question 16",
    query: "What is the purpose of '__init__' in Python classes?",
    explanation: "The '__init__' method is a constructor that initializes an object when it's created.",
    answer: "b",
    choices: [
      { a: "Destroys the object", selected: "a" },
      { a: "Initializes the object", selected: "b" },
      { a: "Prints the object", selected: "c" },
      { a: "Converts the object to string", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "medium",
    },
  },
  {
    id: 17,
    title: "question 17",
    query: "What is the difference between 'append' and 'extend' in Python lists?",
    explanation: "'append' adds a single item, while 'extend' adds all items from an iterable.",
    answer: "c",
    choices: [
      { a: "Both are the same", selected: "a" },
      { a: "'extend' adds one item, 'append' adds multiple", selected: "b" },
      { a: "'append' adds one item, 'extend' adds multiple", selected: "c" },
      { a: "Neither exists in Python", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "medium",
    },
  },
  {
    id: 18,
    title: "question 18",
    query: "What is a decorator in Python?",
    explanation: "A decorator is a function that modifies or extends the behavior of another function.",
    answer: "a",
    choices: [
      { a: "A function that modifies other functions", selected: "a" },
      { a: "A type of variable", selected: "b" },
      { a: "A data structure", selected: "c" },
      { a: "A loop construct", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "medium",
    },
  },
  {
    id: 19,
    title: "question 19",
    query: "What does 'try-except' do in Python?",
    explanation: "'try-except' is used for exception handling, allowing you to catch and handle errors gracefully.",
    answer: "d",
    choices: [
      { a: "Creates a loop", selected: "a" },
      { a: "Defines a function", selected: "b" },
      { a: "Imports a module", selected: "c" },
      { a: "Handles exceptions and errors", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "medium",
    },
  },
  {
    id: 20,
    title: "question 20",
    query: "What is the Global Interpreter Lock (GIL) in Python?",
    explanation: "The GIL is a mutex that allows only one thread to execute Python bytecode at a time.",
    answer: "b",
    choices: [
      { a: "A database lock", selected: "a" },
      { a: "A mutex for thread execution", selected: "b" },
      { a: "A file locking mechanism", selected: "c" },
      { a: "A network protocol", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "medium",
    },
  },

  // Python hard
  {
    id: 21,
    title: "question 21",
    query: "What is the purpose of '__slots__' in Python classes?",
    explanation: "'__slots__' restricts the attributes that can be assigned to instances, saving memory.",
    answer: "a",
    choices: [
      { a: "Restricts attributes and saves memory", selected: "a" },
      { a: "Adds new attributes", selected: "b" },
      { a: "Deletes attributes", selected: "c" },
      { a: "Sorts attributes", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "hard",
    },
  },
  {
    id: 22,
    title: "question 22",
    query: "What is a metaclass in Python?",
    explanation: "A metaclass is a class whose instances are classes themselves, allowing you to customize class creation.",
    answer: "c",
    choices: [
      { a: "A type of variable", selected: "a" },
      { a: "A function decorator", selected: "b" },
      { a: "A class that creates classes", selected: "c" },
      { a: "A data structure", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "hard",
    },
  },
  {
    id: 23,
    title: "question 23",
    query: "What does 'yield' do in Python?",
    explanation: "'yield' is used in generator functions to produce a value and pause execution, allowing the function to resume later.",
    answer: "b",
    choices: [
      { a: "Returns a value and stops", selected: "a" },
      { a: "Produces a value and pauses execution", selected: "b" },
      { a: "Imports a module", selected: "c" },
      { a: "Defines a class", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "hard",
    },
  },
  {
    id: 24,
    title: "question 24",
    query: "What is the purpose of '__getattr__' and '__setattr__' in Python?",
    explanation: "These methods allow you to customize attribute access and assignment behavior in classes.",
    answer: "d",
    choices: [
      { a: "To delete attributes", selected: "a" },
      { a: "To create attributes", selected: "b" },
      { a: "To sort attributes", selected: "c" },
      { a: "To customize attribute access", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "hard",
    },
  },
  {
    id: 25,
    title: "question 25",
    query: "What is the difference between 'deepcopy' and 'copy' in Python?",
    explanation: "'copy' creates a shallow copy, while 'deepcopy' creates a deep copy that recursively copies nested objects.",
    answer: "a",
    choices: [
      { a: "'copy' is shallow, 'deepcopy' is recursive", selected: "a" },
      { a: "'copy' is deep, 'deepcopy' is shallow", selected: "b" },
      { a: "Both are the same", selected: "c" },
      { a: "Neither exists in Python", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "hard",
    },
  },
  {
    id: 26,
    title: "question 26",
    query: "What is the purpose of 'asyncio' in Python?",
    explanation: "'asyncio' is a library for writing concurrent code using async/await syntax.",
    answer: "c",
    choices: [
      { a: "To handle file operations", selected: "a" },
      { a: "To manage databases", selected: "b" },
      { a: "To write concurrent code with async/await", selected: "c" },
      { a: "To create GUI applications", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "hard",
    },
  },
  {
    id: 27,
    title: "question 27",
    query: "What is a context manager in Python?",
    explanation: "A context manager is an object that defines what happens when entering and exiting a 'with' statement.",
    answer: "b",
    choices: [
      { a: "A type of loop", selected: "a" },
      { a: "An object that manages 'with' statement context", selected: "b" },
      { a: "A function decorator", selected: "c" },
      { a: "A data structure", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "hard",
    },
  },
  {
    id: 28,
    title: "question 28",
    query: "What does '@property' decorator do in Python?",
    explanation: "The '@property' decorator allows you to define methods that can be accessed like attributes.",
    answer: "a",
    choices: [
      { a: "Makes methods accessible like attributes", selected: "a" },
      { a: "Creates a new class", selected: "b" },
      { a: "Imports a module", selected: "c" },
      { a: "Handles exceptions", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "hard",
    },
  },
  {
    id: 29,
    title: "question 29",
    query: "What is the purpose of '__call__' method in Python?",
    explanation: "The '__call__' method allows an instance of a class to be called as a function.",
    answer: "d",
    choices: [
      { a: "To delete the object", selected: "a" },
      { a: "To print the object", selected: "b" },
      { a: "To convert to string", selected: "c" },
      { a: "To make the object callable", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "hard",
    },
  },
  {
    id: 30,
    title: "question 30",
    query: "What is the difference between 'multiprocessing' and 'threading' in Python?",
    explanation: "'multiprocessing' uses separate processes (bypasses GIL), while 'threading' uses threads within the same process (limited by GIL).",
    answer: "c",
    choices: [
      { a: "Both are the same", selected: "a" },
      { a: "'threading' uses processes, 'multiprocessing' uses threads", selected: "b" },
      { a: "'multiprocessing' uses processes, 'threading' uses threads", selected: "c" },
      { a: "Neither exists in Python", selected: "d" },
    ],
    info: {
      categorie: "python",
      mode: "hard",
    },
  },

  // HTML/CSS easy
  {
    id: 1,
    title: "question 1",
    query: "What does HTML stand for?",
    explanation: "HTML stands for HyperText Markup Language, the standard markup language for web pages.",
    answer: "a",
    choices: [
      { a: "HyperText Markup Language", selected: "a" },
      { a: "High-Level Text Markup Language", selected: "b" },
      { a: "Hyperlink Text Markup Language", selected: "c" },
      { a: "Home Tool Markup Language", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "easy",
    },
  },
  {
    id: 2,
    title: "question 2",
    query: "What does CSS stand for?",
    explanation: "CSS stands for Cascading Style Sheets, used to style HTML elements.",
    answer: "b",
    choices: [
      { a: "Computer Style Sheets", selected: "a" },
      { a: "Cascading Style Sheets", selected: "b" },
      { a: "Creative Style Sheets", selected: "c" },
      { a: "Colorful Style Sheets", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "easy",
    },
  },
  {
    id: 3,
    title: "question 3",
    query: "Which HTML tag is used to create a hyperlink?",
    explanation: "The <a> tag is used to create hyperlinks in HTML.",
    answer: "c",
    choices: [
      { a: "<link>", selected: "a" },
      { a: "<href>", selected: "b" },
      { a: "<a>", selected: "c" },
      { a: "<url>", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "easy",
    },
  },
  {
    id: 4,
    title: "question 4",
    query: "What is the correct way to include CSS in an HTML document?",
    explanation: "CSS can be included using <style> tag, external stylesheet with <link>, or inline styles.",
    answer: "a",
    choices: [
      { a: "Using <style> tag or <link> tag", selected: "a" },
      { a: "Using <css> tag only", selected: "b" },
      { a: "Using JavaScript only", selected: "c" },
      { a: "CSS cannot be included in HTML", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "easy",
    },
  },
  {
    id: 5,
    title: "question 5",
    query: "Which CSS property is used to change text color?",
    explanation: "The 'color' property is used to set the text color in CSS.",
    answer: "b",
    choices: [
      { a: "text-color", selected: "a" },
      { a: "color", selected: "b" },
      { a: "font-color", selected: "c" },
      { a: "text-style", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "easy",
    },
  },
  {
    id: 6,
    title: "question 6",
    query: "What is the correct HTML tag for the largest heading?",
    explanation: "<h1> is the largest heading tag in HTML.",
    answer: "c",
    choices: [
      { a: "<h6>", selected: "a" },
      { a: "<heading>", selected: "b" },
      { a: "<h1>", selected: "c" },
      { a: "<head>", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "easy",
    },
  },
  {
    id: 7,
    title: "question 7",
    query: "Which CSS property is used to change the background color?",
    explanation: "The 'background-color' property sets the background color of an element.",
    answer: "d",
    choices: [
      { a: "bgcolor", selected: "a" },
      { a: "color", selected: "b" },
      { a: "background", selected: "c" },
      { a: "background-color", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "easy",
    },
  },
  {
    id: 8,
    title: "question 8",
    query: "What is the correct HTML tag for inserting a line break?",
    explanation: "<br> is a self-closing tag used to insert a line break.",
    answer: "a",
    choices: [
      { a: "<br>", selected: "a" },
      { a: "<break>", selected: "b" },
      { a: "<lb>", selected: "c" },
      { a: "<line>", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "easy",
    },
  },
  {
    id: 9,
    title: "question 9",
    query: "Which CSS property is used to make text bold?",
    explanation: "The 'font-weight' property with value 'bold' makes text bold.",
    answer: "b",
    choices: [
      { a: "text-bold", selected: "a" },
      { a: "font-weight", selected: "b" },
      { a: "bold", selected: "c" },
      { a: "text-style", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "easy",
    },
  },
  {
    id: 10,
    title: "question 10",
    query: "What is the correct HTML tag for creating an unordered list?",
    explanation: "<ul> creates an unordered list, with <li> tags for list items.",
    answer: "c",
    choices: [
      { a: "<list>", selected: "a" },
      { a: "<ol>", selected: "b" },
      { a: "<ul>", selected: "c" },
      { a: "<li>", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "easy",
    },
  },

  // HTML/CSS medium
  {
    id: 11,
    title: "question 11",
    query: "What is the CSS Box Model?",
    explanation: "The CSS Box Model consists of content, padding, border, and margin.",
    answer: "a",
    choices: [
      { a: "Content, padding, border, and margin", selected: "a" },
      { a: "Width and height only", selected: "b" },
      { a: "Just the content area", selected: "c" },
      { a: "Padding and margin only", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "medium",
    },
  },
  {
    id: 12,
    title: "question 12",
    query: "What is the difference between 'display: block' and 'display: inline'?",
    explanation: "'block' elements take full width and start on a new line, while 'inline' elements only take necessary width and stay inline.",
    answer: "b",
    choices: [
      { a: "Both are the same", selected: "a" },
      { a: "'block' takes full width, 'inline' takes necessary width", selected: "b" },
      { a: "'inline' takes full width, 'block' takes necessary width", selected: "c" },
      { a: "Neither exists in CSS", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "medium",
    },
  },
  {
    id: 13,
    title: "question 13",
    query: "What is Flexbox in CSS?",
    explanation: "Flexbox is a layout model that allows you to design flexible and responsive layouts.",
    answer: "c",
    choices: [
      { a: "A type of font", selected: "a" },
      { a: "A color scheme", selected: "b" },
      { a: "A flexible layout model", selected: "c" },
      { a: "A JavaScript framework", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "medium",
    },
  },
  {
    id: 14,
    title: "question 14",
    query: "What is the purpose of CSS Grid?",
    explanation: "CSS Grid is a two-dimensional layout system that allows you to create complex layouts with rows and columns.",
    answer: "d",
    choices: [
      { a: "To style text", selected: "a" },
      { a: "To add animations", selected: "b" },
      { a: "To create one-dimensional layouts", selected: "c" },
      { a: "To create two-dimensional layouts", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "medium",
    },
  },
  {
    id: 15,
    title: "question 15",
    query: "What is the difference between 'id' and 'class' in HTML/CSS?",
    explanation: "'id' is unique and used once per page, while 'class' can be used multiple times.",
    answer: "a",
    choices: [
      { a: "'id' is unique, 'class' can be reused", selected: "a" },
      { a: "'class' is unique, 'id' can be reused", selected: "b" },
      { a: "Both are the same", selected: "c" },
      { a: "Neither exists in HTML", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "medium",
    },
  },
  {
    id: 16,
    title: "question 16",
    query: "What is the 'z-index' property used for in CSS?",
    explanation: "'z-index' controls the stacking order of positioned elements.",
    answer: "b",
    choices: [
      { a: "To set the width of an element", selected: "a" },
      { a: "To control stacking order", selected: "b" },
      { a: "To set the height of an element", selected: "c" },
      { a: "To change the color", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "medium",
    },
  },
  {
    id: 17,
    title: "question 17",
    query: "What is a CSS pseudo-class?",
    explanation: "A pseudo-class is used to define a special state of an element, like :hover or :active.",
    answer: "c",
    choices: [
      { a: "A type of HTML tag", selected: "a" },
      { a: "A JavaScript function", selected: "b" },
      { a: "A special state selector", selected: "c" },
      { a: "A CSS property", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "medium",
    },
  },
  {
    id: 18,
    title: "question 18",
    query: "What is the purpose of 'media queries' in CSS?",
    explanation: "Media queries allow you to apply styles based on device characteristics like screen size.",
    answer: "a",
    choices: [
      { a: "To create responsive designs", selected: "a" },
      { a: "To add animations", selected: "b" },
      { a: "To import fonts", selected: "c" },
      { a: "To create layouts", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "medium",
    },
  },
  {
    id: 19,
    title: "question 19",
    query: "What is the difference between 'position: relative' and 'position: absolute'?",
    explanation: "'relative' positions relative to its normal position, while 'absolute' positions relative to the nearest positioned ancestor.",
    answer: "d",
    choices: [
      { a: "Both are the same", selected: "a" },
      { a: "'absolute' is relative to normal flow, 'relative' to ancestor", selected: "b" },
      { a: "Neither exists in CSS", selected: "c" },
      { a: "'relative' is relative to normal flow, 'absolute' to ancestor", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "medium",
    },
  },
  {
    id: 20,
    title: "question 20",
    query: "What is the 'transform' property used for in CSS?",
    explanation: "The 'transform' property allows you to rotate, scale, skew, or translate elements.",
    answer: "b",
    choices: [
      { a: "To change colors", selected: "a" },
      { a: "To rotate, scale, or translate elements", selected: "b" },
      { a: "To add text", selected: "c" },
      { a: "To create links", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "medium",
    },
  },

  // HTML/CSS hard
  {
    id: 21,
    title: "question 21",
    query: "What is CSS specificity?",
    explanation: "CSS specificity determines which CSS rule is applied when multiple rules target the same element.",
    answer: "a",
    choices: [
      { a: "The priority of CSS rules", selected: "a" },
      { a: "A type of selector", selected: "b" },
      { a: "A CSS property", selected: "c" },
      { a: "A layout method", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "hard",
    },
  },
  {
    id: 22,
    title: "question 22",
    query: "What is the 'BEM' methodology in CSS?",
    explanation: "BEM (Block Element Modifier) is a naming convention for CSS classes.",
    answer: "c",
    choices: [
      { a: "A CSS framework", selected: "a" },
      { a: "A JavaScript library", selected: "b" },
      { a: "A CSS naming convention", selected: "c" },
      { a: "An HTML tag", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "hard",
    },
  },
  {
    id: 23,
    title: "question 23",
    query: "What is the purpose of CSS custom properties (variables)?",
    explanation: "CSS custom properties allow you to store values that can be reused throughout your stylesheet.",
    answer: "b",
    choices: [
      { a: "To create animations", selected: "a" },
      { a: "To store reusable values", selected: "b" },
      { a: "To import fonts", selected: "c" },
      { a: "To create layouts", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "hard",
    },
  },
  {
    id: 24,
    title: "question 24",
    query: "What is the 'cascade' in CSS?",
    explanation: "The cascade determines how conflicting CSS rules are resolved based on source, specificity, and order.",
    answer: "d",
    choices: [
      { a: "A type of selector", selected: "a" },
      { a: "A CSS property", selected: "b" },
      { a: "A layout method", selected: "c" },
      { a: "The rule resolution mechanism", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "hard",
    },
  },
  {
    id: 25,
    title: "question 25",
    query: "What is the difference between 'em' and 'rem' units in CSS?",
    explanation: "'em' is relative to the parent element's font size, while 'rem' is relative to the root element's font size.",
    answer: "a",
    choices: [
      { a: "'em' is relative to parent, 'rem' to root", selected: "a" },
      { a: "'rem' is relative to parent, 'em' to root", selected: "b" },
      { a: "Both are the same", selected: "c" },
      { a: "Neither exists in CSS", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "hard",
    },
  },
  {
    id: 26,
    title: "question 26",
    query: "What is the 'contain' property used for in CSS?",
    explanation: "The 'contain' property allows you to indicate that an element and its contents are independent from the rest of the document tree.",
    answer: "c",
    choices: [
      { a: "To include content", selected: "a" },
      { a: "To hide elements", selected: "b" },
      { a: "To isolate rendering", selected: "c" },
      { a: "To create layouts", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "hard",
    },
  },
  {
    id: 27,
    title: "question 27",
    query: "What is the purpose of CSS 'will-change' property?",
    explanation: "'will-change' hints to the browser about upcoming changes, allowing optimization.",
    answer: "b",
    choices: [
      { a: "To change colors", selected: "a" },
      { a: "To hint about upcoming changes for optimization", selected: "b" },
      { a: "To create animations", selected: "c" },
      { a: "To set layouts", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "hard",
    },
  },
  {
    id: 28,
    title: "question 28",
    query: "What is the 'backface-visibility' property used for in CSS?",
    explanation: "'backface-visibility' determines whether the back face of an element is visible when rotated.",
    answer: "a",
    choices: [
      { a: "To control back face visibility during transforms", selected: "a" },
      { a: "To change background colors", selected: "b" },
      { a: "To create borders", selected: "c" },
      { a: "To set text alignment", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "hard",
    },
  },
  {
    id: 29,
    title: "question 29",
    query: "What is the difference between 'inline-block' and 'flex' display?",
    explanation: "'inline-block' allows inline elements to have block properties, while 'flex' creates a flex container.",
    answer: "d",
    choices: [
      { a: "Both are the same", selected: "a" },
      { a: "'flex' is for inline, 'inline-block' for layouts", selected: "b" },
      { a: "Neither exists in CSS", selected: "c" },
      { a: "'inline-block' combines inline/block, 'flex' creates flex container", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "hard",
    },
  },
  {
    id: 30,
    title: "question 30",
    query: "What is CSS 'containment' used for?",
    explanation: "CSS containment allows you to isolate parts of the DOM, improving performance by limiting layout, style, and paint calculations.",
    answer: "c",
    choices: [
      { a: "To include content", selected: "a" },
      { a: "To hide elements", selected: "b" },
      { a: "To isolate rendering and improve performance", selected: "c" },
      { a: "To create animations", selected: "d" },
    ],
    info: {
      categorie: "htmlcss",
      mode: "hard",
    },
  },

  // TypeScript easy
  {
    id: 1,
    title: "question 1",
    query: "What is TypeScript?",
    explanation: "TypeScript is a superset of JavaScript that adds static type definitions.",
    answer: "a",
    choices: [
      { a: "A superset of JavaScript with types", selected: "a" },
      { a: "A CSS framework", selected: "b" },
      { a: "A database system", selected: "c" },
      { a: "A web browser", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "easy",
    },
  },
  {
    id: 2,
    title: "question 2",
    query: "How do you declare a variable with a type in TypeScript?",
    explanation: "TypeScript uses syntax like 'let variable: type = value' to declare typed variables.",
    answer: "b",
    choices: [
      { a: "let variable = type", selected: "a" },
      { a: "let variable: type = value", selected: "b" },
      { a: "variable: type = value", selected: "c" },
      { a: "let type variable", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "easy",
    },
  },
  {
    id: 3,
    title: "question 3",
    query: "What is an interface in TypeScript?",
    explanation: "An interface defines the structure of an object, specifying what properties and methods it should have.",
    answer: "c",
    choices: [
      { a: "A function", selected: "a" },
      { a: "A variable", selected: "b" },
      { a: "A contract defining object structure", selected: "c" },
      { a: "A class", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "easy",
    },
  },
  {
    id: 4,
    title: "question 4",
    query: "What is the purpose of 'type' keyword in TypeScript?",
    explanation: "The 'type' keyword is used to create type aliases, allowing you to give a name to a type.",
    answer: "d",
    choices: [
      { a: "To create a class", selected: "a" },
      { a: "To declare a variable", selected: "b" },
      { a: "To define a function", selected: "c" },
      { a: "To create a type alias", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "easy",
    },
  },
  {
    id: 5,
    title: "question 5",
    query: "What is a union type in TypeScript?",
    explanation: "A union type allows a value to be one of several types, using the '|' operator.",
    answer: "a",
    choices: [
      { a: "A type that can be one of several types", selected: "a" },
      { a: "A type for arrays", selected: "b" },
      { a: "A type for objects", selected: "c" },
      { a: "A type for functions", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "easy",
    },
  },
  {
    id: 6,
    title: "question 6",
    query: "How do you make a property optional in TypeScript?",
    explanation: "You make a property optional by adding a '?' after the property name.",
    answer: "b",
    choices: [
      { a: "Using '!' operator", selected: "a" },
      { a: "Using '?' operator", selected: "b" },
      { a: "Using 'optional' keyword", selected: "c" },
      { a: "Using 'maybe' keyword", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "easy",
    },
  },
  {
    id: 7,
    title: "question 7",
    query: "What is the 'any' type in TypeScript?",
    explanation: "The 'any' type disables type checking and allows any value, essentially turning off TypeScript's benefits.",
    answer: "c",
    choices: [
      { a: "A type for arrays", selected: "a" },
      { a: "A type for objects", selected: "b" },
      { a: "A type that disables type checking", selected: "c" },
      { a: "A type for functions", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "easy",
    },
  },
  {
    id: 8,
    title: "question 8",
    query: "What is a generic in TypeScript?",
    explanation: "Generics allow you to create reusable components that work with multiple types.",
    answer: "d",
    choices: [
      { a: "A specific type", selected: "a" },
      { a: "A function", selected: "b" },
      { a: "A variable", selected: "c" },
      { a: "A reusable component for multiple types", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "easy",
    },
  },
  {
    id: 9,
    title: "question 9",
    query: "What is the 'readonly' modifier used for in TypeScript?",
    explanation: "The 'readonly' modifier makes a property read-only, preventing it from being modified after initialization.",
    answer: "a",
    choices: [
      { a: "To make properties read-only", selected: "a" },
      { a: "To make properties writable", selected: "b" },
      { a: "To delete properties", selected: "c" },
      { a: "To create new properties", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "easy",
    },
  },
  {
    id: 10,
    title: "question 10",
    query: "What is the difference between 'interface' and 'type' in TypeScript?",
    explanation: "Interfaces can be extended and merged, while types can represent unions and intersections. Both are similar but have different use cases.",
    answer: "b",
    choices: [
      { a: "They are completely different", selected: "a" },
      { a: "Interfaces can be extended, types can represent unions", selected: "b" },
      { a: "Types can be extended, interfaces cannot", selected: "c" },
      { a: "Both are exactly the same", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "easy",
    },
  },

  // TypeScript medium
  {
    id: 11,
    title: "question 11",
    query: "What is a tuple in TypeScript?",
    explanation: "A tuple is an array with a fixed number of elements where each element has a specific type.",
    answer: "a",
    choices: [
      { a: "An array with fixed types for each position", selected: "a" },
      { a: "A type for objects", selected: "b" },
      { a: "A type for functions", selected: "c" },
      { a: "A type for strings", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "medium",
    },
  },
  {
    id: 12,
    title: "question 12",
    query: "What is 'type assertion' in TypeScript?",
    explanation: "Type assertion tells TypeScript to treat a value as a specific type, using 'as' or '<>' syntax.",
    answer: "c",
    choices: [
      { a: "A type declaration", selected: "a" },
      { a: "A type alias", selected: "b" },
      { a: "Telling TypeScript to treat a value as a specific type", selected: "c" },
      { a: "A type guard", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "medium",
    },
  },
  {
    id: 13,
    title: "question 13",
    query: "What is a type guard in TypeScript?",
    explanation: "A type guard is a function that narrows the type of a variable within a conditional block.",
    answer: "b",
    choices: [
      { a: "A type declaration", selected: "a" },
      { a: "A function that narrows types", selected: "b" },
      { a: "A type alias", selected: "c" },
      { a: "A generic type", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "medium",
    },
  },
  {
    id: 14,
    title: "question 14",
    query: "What is 'keyof' operator used for in TypeScript?",
    explanation: "'keyof' creates a union type of all keys in an object type.",
    answer: "d",
    choices: [
      { a: "To get values of an object", selected: "a" },
      { a: "To create a new object", selected: "b" },
      { a: "To delete keys", selected: "c" },
      { a: "To get all keys of an object type", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "medium",
    },
  },
  {
    id: 15,
    title: "question 15",
    query: "What is 'Partial<T>' utility type used for?",
    explanation: "'Partial<T>' makes all properties of type T optional.",
    answer: "a",
    choices: [
      { a: "To make all properties optional", selected: "a" },
      { a: "To make all properties required", selected: "b" },
      { a: "To delete properties", selected: "c" },
      { a: "To create new properties", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "medium",
    },
  },
  {
    id: 16,
    title: "question 16",
    query: "What is 'Pick<T, K>' utility type used for?",
    explanation: "'Pick<T, K>' creates a type by selecting specific properties K from type T.",
    answer: "c",
    choices: [
      { a: "To delete properties", selected: "a" },
      { a: "To add properties", selected: "b" },
      { a: "To select specific properties from a type", selected: "c" },
      { a: "To merge types", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "medium",
    },
  },
  {
    id: 17,
    title: "question 17",
    query: "What is 'Omit<T, K>' utility type used for?",
    explanation: "'Omit<T, K>' creates a type by removing specific properties K from type T.",
    answer: "b",
    choices: [
      { a: "To add properties", selected: "a" },
      { a: "To remove specific properties from a type", selected: "b" },
      { a: "To select properties", selected: "c" },
      { a: "To merge types", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "medium",
    },
  },
  {
    id: 18,
    title: "question 18",
    query: "What is 'Record<K, T>' utility type used for?",
    explanation: "'Record<K, T>' creates an object type with keys of type K and values of type T.",
    answer: "d",
    choices: [
      { a: "To create arrays", selected: "a" },
      { a: "To create functions", selected: "b" },
      { a: "To create unions", selected: "c" },
      { a: "To create object types with specific keys and values", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "medium",
    },
  },
  {
    id: 19,
    title: "question 19",
    query: "What is 'never' type used for in TypeScript?",
    explanation: "'never' represents values that never occur, often used for functions that never return or impossible types.",
    answer: "a",
    choices: [
      { a: "To represent values that never occur", selected: "a" },
      { a: "To represent any value", selected: "b" },
      { a: "To represent null values", selected: "c" },
      { a: "To represent undefined values", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "medium",
    },
  },
  {
    id: 20,
    title: "question 20",
    query: "What is 'unknown' type used for in TypeScript?",
    explanation: "'unknown' is a type-safe alternative to 'any', requiring type checking before use.",
    answer: "c",
    choices: [
      { a: "To disable type checking", selected: "a" },
      { a: "To represent any value without checks", selected: "b" },
      { a: "A type-safe alternative to 'any'", selected: "c" },
      { a: "To represent null values", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "medium",
    },
  },

  // TypeScript hard
  {
    id: 21,
    title: "question 21",
    query: "What is 'mapped types' in TypeScript?",
    explanation: "Mapped types allow you to create new types by transforming properties of existing types.",
    answer: "b",
    choices: [
      { a: "A type for arrays", selected: "a" },
      { a: "Types created by transforming existing types", selected: "b" },
      { a: "A type for objects", selected: "c" },
      { a: "A type for functions", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "hard",
    },
  },
  {
    id: 22,
    title: "question 22",
    query: "What is 'conditional types' in TypeScript?",
    explanation: "Conditional types allow you to select types based on conditions, using the syntax 'T extends U ? X : Y'.",
    answer: "a",
    choices: [
      { a: "Types selected based on conditions", selected: "a" },
      { a: "Types that are always conditional", selected: "b" },
      { a: "A type for conditionals", selected: "c" },
      { a: "A type guard function", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "hard",
    },
  },
  {
    id: 23,
    title: "question 23",
    query: "What is 'infer' keyword used for in TypeScript?",
    explanation: "'infer' is used in conditional types to infer and capture types from other types.",
    answer: "c",
    choices: [
      { a: "To declare types", selected: "a" },
      { a: "To create types", selected: "b" },
      { a: "To infer types from other types", selected: "c" },
      { a: "To delete types", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "hard",
    },
  },
  {
    id: 24,
    title: "question 24",
    query: "What is 'template literal types' in TypeScript?",
    explanation: "Template literal types allow you to create string literal types using template string syntax.",
    answer: "d",
    choices: [
      { a: "A type for templates", selected: "a" },
      { a: "A type for strings", selected: "b" },
      { a: "A type for arrays", selected: "c" },
      { a: "String literal types using template syntax", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "hard",
    },
  },
  {
    id: 25,
    title: "question 25",
    query: "What is 'satisfies' operator used for in TypeScript?",
    explanation: "'satisfies' ensures a value matches a type without changing the inferred type of the value.",
    answer: "b",
    choices: [
      { a: "To create types", selected: "a" },
      { a: "To ensure a value matches a type without changing inference", selected: "b" },
      { a: "To delete types", selected: "c" },
      { a: "To merge types", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "hard",
    },
  },
  {
    id: 26,
    title: "question 26",
    query: "What is 'branded types' in TypeScript?",
    explanation: "Branded types add a unique 'brand' property to types to prevent accidental mixing of similar types.",
    answer: "a",
    choices: [
      { a: "Types with unique brands to prevent mixing", selected: "a" },
      { a: "Types for brands", selected: "b" },
      { a: "A type system", selected: "c" },
      { a: "A type guard", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "hard",
    },
  },
  {
    id: 27,
    title: "question 27",
    query: "What is 'nominal typing' vs 'structural typing' in TypeScript?",
    explanation: "TypeScript uses structural typing (duck typing), where types are compatible if they have the same structure, not the same name.",
    answer: "c",
    choices: [
      { a: "Both are the same", selected: "a" },
      { a: "TypeScript uses nominal typing", selected: "b" },
      { a: "TypeScript uses structural typing", selected: "c" },
      { a: "Neither exists in TypeScript", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "hard",
    },
  },
  {
    id: 28,
    title: "question 28",
    query: "What is 'decorator' support in TypeScript?",
    explanation: "TypeScript supports decorators (experimental) which allow you to add metadata and modify classes, methods, and properties.",
    answer: "b",
    choices: [
      { a: "A type system", selected: "a" },
      { a: "A feature to add metadata and modify classes", selected: "b" },
      { a: "A type guard", selected: "c" },
      { a: "A utility type", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "hard",
    },
  },
  {
    id: 29,
    title: "question 29",
    query: "What is 'const assertions' in TypeScript?",
    explanation: "Const assertions ('as const') create readonly literal types, making values immutable and narrowing types.",
    answer: "d",
    choices: [
      { a: "To create variables", selected: "a" },
      { a: "To delete types", selected: "b" },
      { a: "To merge types", selected: "c" },
      { a: "To create readonly literal types", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "hard",
    },
  },
  {
    id: 30,
    title: "question 30",
    query: "What is 'module augmentation' in TypeScript?",
    explanation: "Module augmentation allows you to add new declarations to existing modules without modifying the original source.",
    answer: "a",
    choices: [
      { a: "Adding declarations to existing modules", selected: "a" },
      { a: "Creating new modules", selected: "b" },
      { a: "Deleting modules", selected: "c" },
      { a: "Merging modules", selected: "d" },
    ],
    info: {
      categorie: "typescript",
      mode: "hard",
    },
  },
];
