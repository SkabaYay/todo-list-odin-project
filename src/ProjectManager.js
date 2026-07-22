import { display } from "./display.js"

const ProjectManager = (function() {
    const STORAGE_KEY = "todoProjects"
    let projects = []

    class Project {
        constructor(name) {
            this.name = name
            this.todos = []
        }
    }

    const saveProjects = () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
    }

    const loadProjects = () => {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (!stored) return

        try {
            const parsed = JSON.parse(stored)
            projects = parsed.map((p) => {
                const project = new Project(p.name)
                project.todos = p.todos || []
                return project
            })
        } catch (error) {
            console.log("Failed to load projects from local storage: " + error)
            projects = []
        }
    }

    const addProject = (name) => {
        let project = new Project(name)
        projects.push(project)
        saveProjects()
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
        if (!projectFound) return
        projectFound.todos = todos
        saveProjects()
    }

    const deleteProject = (projectName) => {
        for (let i=0; i<projects.length; i++) {
            if (projects[i].name === projectName) {
                console.log("deleted " + projects[i].name)
                projects.splice(i, 1)
                saveProjects()
                return
            }
        }
    }

    const getProjects = () => {
        return projects
    }

    loadProjects()

    return {
        addProject,
        getProjects,
        updateProject,
        deleteProject,
        findProject,
        saveProjects
    }
})()

export { ProjectManager }