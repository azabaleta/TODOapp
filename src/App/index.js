import React from "react";
import "./App.css"
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch/index";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodo } from "../CreateTodo";
import { CreateTitle } from "../CreateTitle";
import { TodosTitle } from "../TodosTitle";

function useLocalStorage(itemName, format) {
  const savedItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!savedItem) {
    localStorage.setItem(itemName, JSON.stringify(format))
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(savedItem)
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newTodos) =>{
    const TodosStrg = JSON.stringify(newTodos); // preparing data to saving changes
    localStorage.setItem(itemName, TodosStrg); // saving changes
    setItem(newTodos); // re-rendering
  }

  return[
    item,
    saveItem,
  ];

}

function App() {
  const [ todos, saveTodos] = useLocalStorage('TASKS_API', [])
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(element => !!element.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(element => {
      const titleText = element.title.toLowerCase();
      const descriptionText = element.description.toLowerCase();
      const searchedText = searchValue.toLowerCase();

      return titleText.includes(searchedText) || descriptionText.includes(searchedText);
    });
  }

  const addTodo = (title, body) => {
    const newTodos = [...todos];
    newTodos.push({
        title: title,
        description: body,
        completed: false,
      });
    saveTodos(newTodos);
  };

  const completeTodo = (id) =>{
    const todoIdex = todos.findIndex(element => element.title === id);
    const newTodoList = [...todos];

    if (newTodoList[todoIdex].completed) {
      newTodoList[todoIdex].completed = false;
    }else { 
      newTodoList[todoIdex].completed = true;
    }
    saveTodos(newTodoList);
  }

  const deleteTodo = (id) =>{
    const todoIndex = todos.findIndex(element => element.title === id);
    const newTodoList = [...todos];
    newTodoList.splice(todoIndex, 1)
  
    saveTodos(newTodoList);
  }

  return (
    <React.Fragment>
      <main className="App">
        <div className="Section SectionLeft">
          <CreateTitle/>
          <CreateTodo
          onAdd={addTodo} />
        </div>
        <div className="Sections SectionRight">
          <TodosTitle/>
          <TodoCounter 
            total={totalTodos}
            completed={completedTodos}
          />
          <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TodoList>
            { searchedTodos.map(todo => (
                <TodoItem 
                  key={todo.title}
                  title={todo.title} 
                  description={todo.description} 
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.title)}
                  onDelete={() => deleteTodo(todo.title)}
                />
            ))}
          </TodoList>
        </div>
      </main>      
    </React.Fragment>
  );
}

export default App;
