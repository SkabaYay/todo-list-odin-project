import "./style.css";
import { display } from "./display.js";
import { TodoManager } from "./TodoManager.js";
import { ProjectManager } from "./ProjectManager.js";

const createButton = document.querySelector("#create")
const body = document.querySelector("body")

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
        console.log(TodoManager.getTodos())
    })

    cancelButton.addEventListener("click", () => {
        body.removeChild(createBox)
    })
})

const projectCreateButon = document.querySelector("#project-create")
projectCreateButon.addEventListener("click", () => {
    display.createProject()
})