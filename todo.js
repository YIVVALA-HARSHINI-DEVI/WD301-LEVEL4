const todoList = () => {
    var all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      return all.filter((todo)=>{
        return todo.dueDate < new Date().toLocaleDateString("en-CA");
      });
    }
    const dueToday = () => {
        return all.filter((todo)=>{
          return todo.dueDate === new Date().toLocaleDateString("en-CA");
        });
    }
    const dueLater = () => {
        return all.filter((todo)=>{
          return todo.dueDate >new Date().toLocaleDateString("en-CA");
        });
    }
  
    const toDisplayableList = (list) => {
        return list.map((todo)=>{
            return `[${todo.completed ? "x" : " "}] ${todo.title} ${(todo.dueDate !== new Date().toLocaleDateString("en-CA")) ? todo.dueDate : " "}`;
        }).join("\n");
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
  module.exports = todoList;
