import { format, parseISO } from 'date-fns'

const display = (function(){
    const body = document.querySelector("body");
    const project = document.querySelector(".project");
    const todo = document.querySelector(".todo");
    const bottom = document.querySelector(".bottom")

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

    const createPara = (paraText) => {
        const element = document.createElement("p")
        element.textContent = paraText
        return element
    }

    const createIcon = (...classes) => {
        const element = document.createElement("i");
        element.classList.add(...classes);
        return element;
    };

    const createButtonTwo = (buttonClass, buttonText) => {
        const element = document.createElement("button")
        element.classList.add(buttonClass)
        element.textContent = buttonText
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

    const createProject = () => {
        const tempInput = createInput("text", "button-name", "button-name")
        tempInput.style.border = "none"
        tempInput.style.backgroundColor = "#F4F5F7"
        tempInput.style.height = "50px"
        tempInput.style.width = "300px"
        tempInput.style.fontSize = "1.05rem"
        project.appendChild(tempInput)

        tempInput.focus()
        tempInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                let buttonName = tempInput.value
                project.removeChild(tempInput)
                project.appendChild(createButtonTwo("project-button", buttonName))
            }
        })
    }

    const displayTodo = (data) => {
        const dateParse = parseISO(data.date)
        
        const container = bottom.appendChild(createDiv("container"))

        const leftOne = container.appendChild(createDiv("left-one"))
        const rightOne = container.appendChild(createDiv("right-one")
    )
        const topTwo = leftOne.appendChild(createDiv("left-one-top"))
        topTwo.textContent = data.title

        const bottomTwo = leftOne.appendChild(createDiv("left-one-bottom"))
        const description = bottomTwo.appendChild(createPara(data.description))
        const date = bottomTwo.appendChild(createPara(format(dateParse, "dd/MM/yyyy")))
        const priority = bottomTwo.appendChild(createPara("Priority: " + data.priority))

        const leftTwo = rightOne.appendChild(createDiv("right-one-left"))
        leftTwo.appendChild(createInput("checkbox", "complete", "complete"))

        const rightTwo = rightOne.appendChild(createDiv("right-one-right"))
        rightTwo.appendChild(createIcon("fa-solid", "fa-delete-left"))
    }


    return {
        createTodo,
        displayTodo,
        createProject
    }
})()

export { display }