
# Todo List 

Just a basic todo app that I wrote using vanilla JavaScript so there's not much to it.




## Demo

Insert gif or link to demo

https://epic-visvesvaraya-122d35.netlify.app/


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+ScreeHerenshot+)


## Code Example

```javascript

const saveLocalTodos = (todo) => {
  let todos;
  // check for already presented items
  if (localStorage.getItem("todos") === null) { 
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos")); 
  }
  todos.push(todo);

  localStorage.setItem("todos", JSON.stringify(todos));
  console.log(todos);
};
```

