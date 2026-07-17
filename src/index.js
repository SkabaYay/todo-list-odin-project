import "./style.css";
import { display } from "./display.js";
import { TodoManager } from "./TodoManager.js";

const createButton = document.querySelector("#create")
const body = document.querySelector("body")

createButton.addEventListener("click", () => {
    const form = display.createTodo()
    const createBox = document.querySelector(".create-box")

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        body.removeChild(createBox)
        
        const formData = new FormData(form);
        TodoManager.addTodo(formData.get("title"), formData.get("description"), formData.get("date"), formData.get("priority"))
    })
})
