import "./style.css";
import { display } from "./display.js";
import { TodoManager } from "./TodoManager.js";
import { ProjectManager } from "./ProjectManager.js";

const createButton = document.querySelector("#create")
const body = document.querySelector("body")

let currentProject
let lastProject

createButton.addEventListener("click", () => {
    const form = display.createTodo()
    const createBox = document.querySelector(".create-box")
    const cancelButton = document.querySelector("#cancel")

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        body.removeChild(createBox)
        
        const formData = new FormData(form);
        const data = TodoManager.addTodo(formData.get("title"), formData.get("description"), formData.get("date"), formData.get("priority"))
        display.displayTodo(data)

        const todos = TodoManager.getTodos()
        ProjectManager.updateProject(currentProject, todos)
        console.log(ProjectManager.getProjects())
    })

    cancelButton.addEventListener("click", () => {
        body.removeChild(createBox)
    })
})

const projectCreateButon = document.querySelector("#project-create")
projectCreateButon.addEventListener("click", () => {
    display.createProject()
})

const project = document.querySelector(".project")
project.addEventListener("click", (event) => {
    if (event.target.classList.contains("project-button")) {
        let name = event.target
        event.target.style.backgroundColor = "white"

        currentProject = name.textContent
        console.log(currentProject)
        
        if (lastProject != undefined) {
            lastProject.style.backgroundColor = "#F4F5F7"
        }
        lastProject = event.target
    }
})