const TodoManager = (function() {
    class Todo {
        constructor(title, description, date, priority) {
            this.title = title
            this.description = description
            this.date = date
            this.priority = priority
        }
    }

    const addTodo = (title, description, date, priority) => {
        let todo = new Todo(title, description, date, priority)
        
    }

    return {
        addTodo,
    }
})()

export { TodoManager }