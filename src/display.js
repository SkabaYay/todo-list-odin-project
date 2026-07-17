const display = (function(){
    const body = document.querySelector("body");
    const project = document.querySelector(".project");
    const todo = document.querySelector(".todo");

    const createTodo = () => {
        const createBox = document.createElement("div");
        createBox.classList.add("create-box");
        body.appendChild(createBox)
    }

    return {
        createTodo
    }
})()

export { display }