import "./style.css";
import { display } from "./display.js";

const createButton = document.querySelector("#create")
createButton.addEventListener("click", () => {
    display.createTodo()
})