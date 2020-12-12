import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// Typescript is same as writing javaScript with some 'extra documentation or comment' like syntax
// typescript is going to help us catch errors while we are still writing code before we execute our code

// Defining interface
// 'interface' is use to define structure of an object
// saying that in our app, we will have some kind object - Todo & it's going to have three props
interface Todo {
  // declaring props types for validation
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  // response object is going to be one of our interface object to validate props types
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  // order of args is important
  logTodo(id, title, completed)
});

// helper func with args & variable types
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it finished? ${completed}
`);
};

// Note: To run this code, remember we cannot run typeScript code
// directly inside browser or with node js.
// We have to first compile this file into plain javaScript code.
// To compile this file, we need to use typeScript compiler in our terminal - 'tsc index.ts'
// This will create new 'index.js' javaScript file, compiled version of our typeScript code/file
