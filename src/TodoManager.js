import { ProjectManager } from "./ProjectManager.js"

const TodoManager = (function() {
    let todos = []

    class Todo {
        constructor(title, description, date, priority, checked) {
            this.title = title
            this.description = description
            this.date = date
            this.priority = priority
            this.checked = checked
        }
    }

    const addTodo = (title, description, date, priority, checked) => {
        let todo = new Todo(title, description, date, priority, checked)
        todos.push(todo)
        return todo
    }

    const getTodos = () => {
        return todos
    }
    
    const updateTodos = (name) => {
        const project = ProjectManager.findProject(name)
        if (!project) return
        todos = project.todos
    }

    const deleteTodo = (todoName) => {
        for (let i=0; i<todos.length; i++) {
            if (todos[i].title === todoName) {
                console.log("deleted " + todos[i].title)
                todos.splice(i, 1)
                return
            }
        }
    }

    return {
        addTodo,
        getTodos,
        updateTodos,
        deleteTodo
    }
})()

export { TodoManager }