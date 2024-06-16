export const TodoList = ({ todos }) => {
    return (
      <div className="todo-list">
        <h1>List of TODOs</h1>
        <div>
          {todos && todos.map((todo, index) => <h5 key={index}>{todo.todo}</h5>)}
        </div>
      </div>
    );
  };