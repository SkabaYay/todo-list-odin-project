const ProjectManager = (function() {
    let projects = []

    class Project {
        constructor(name) {
            this.name = name
            this.todos = []
        }
    }

    const addProject = (name) => {
        let project = new Project(name)
        projects.push(project)
        return project
    }

    const updateProject = (name, todos) => {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].name === name) {
                console.log("found")
                projects[i].todos = todos
                return
            }
        }   
    }

    const getProjects = () => {
        return projects
    }

    return {
        addProject,
        getProjects,
        updateProject
    }
})()

export { ProjectManager }