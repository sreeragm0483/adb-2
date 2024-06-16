export const CreateTodo = ({ newTodo, setNewTodo, handleAddTodo }) => {
    return (
      <div className="create-todo">
        <h1>Create a ToDo</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="todo">ToDo:</label>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button type="button" onClick={handleAddTodo}>
              Add ToDo!
            </button>
          </div>
        </form>
      </div>
    );
  };