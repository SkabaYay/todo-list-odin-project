import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const display = (function(){
    const body = document.querySelector("body");
    const project = document.querySelector(".project");
    const todo = document.querySelector(".todo");

    const createLabel = (labelFor, text) => {
        const element = document.createElement("label")
        element.setAttribute("for", labelFor)
        element.textContent = text
        return element
    }

    const createInput = (inputType, inputId, inputName) => {
        const element = document.createElement("input")
        element.type = inputType
        element.id = inputId
        element.name = inputName
        return element
    }

    const createButton = (buttonId, text) => {
        const element = document.createElement("input")
        element.type = "button"
        element.id = buttonId
        element.value = text
        return element
    }

    const createTextArea = (areaId, areaName, rows, cols) => {
        const element = document.createElement("textarea")
        element.id = areaId
        element.name = areaName
        element.rows = rows
        element.cols = cols
        return element
    }

    const createSelect = (selectId, selectName, values) => {
        const element = document.createElement("select")
        element.id = selectId
        element.name = selectName
        for (let i=0; i<values.length; i++) {
            const option = document.createElement("option")
            option.value = values[i]
            option.textContent = values[i]
            element.appendChild(option)
        }
        return element
    }
    
    const createDiv = (className) => {
        const element = document.createElement("div")
        element.classList.add(className)
        return element
    }

    const createTodo = () => {
        const createBox = body.appendChild(createDiv("create-box"))

        const form = document.createElement("form")
        form.classList.add("create-form")
        createBox.appendChild(form)

        form.appendChild(createLabel("title", "Title"))
        form.appendChild(createInput("text", "title", "title"))
        form.appendChild(createLabel("description", "Description"))
        form.appendChild(createTextArea("description", "description", 10, 30))
        form.appendChild(createLabel("date", "Date"))
        form.appendChild(createInput("date", "date", "date"))
        form.appendChild(createLabel("priority", "Priority"))
        form.appendChild(createSelect("priority", "priority", ["low", "medium", "high"]))

        const buttons = form.appendChild(createDiv("buttons"))
        buttons.appendChild(createInput("submit", "submit", "submit"))
        buttons.appendChild(createInput("reset", "reset", "reset"))
        buttons.appendChild(createButton("cancel", "Cancel"))

        return form
    }

    const displayTodo = (data) => {

    }

    return {
        createTodo,
        displayTodo
    }
})()

export { display }