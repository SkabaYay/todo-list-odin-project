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

    const findProject = (name) => {
        for (let i=0; i<projects.length; i++) {
            if (projects[i].name === name) {
                return projects[i]
            }
        }
    }

    const updateProject = (name, todos) => { 
        const projectFound = findProject(name)
        projectFound.todos = todos
    }

    const getProjects = () => {
        return projects
    }

    return {
        addProject,
        getProjects,
        updateProject,
        findProject
    }
})()

export { ProjectManager }