import { display } from "./display.js";
import { TodoManager } from "./TodoManager.js";

const ProjectManager = (function() {
    class Project {
        constructor(name, todos) {
            this.name = name
            this.todos = todos
        }
    }

    const addProject = (name, todos) => {
        let project = new Project(name, todos)
        return project
    }

    return {

    }
})()

export { ProjectManager }