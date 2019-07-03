import React, { Component } from "react";
import axios from "axios";
const projectAxios = axios.create()


projectAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const AppContext = React.createContext();

export class AppContextProvider extends Component {
    constructor() {
        super()
        this.state = {
            projects:[],
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ""
        }
    }

    componentDidMount() {
        this.getProjects();
    }

    getProjects = () => {
        return projectAxios.get("/api/project")
            .then(response => {
                this.setState({ projects: response.data });
                return response;
            })
    }

    addProject = (newProject) => {
        return projectAxios.post("/api/project/", newProject)
            .then(response => {
                this.setState(prevState => {
                    return { projects: [...prevState.projects, response.data] }
                });
                return response;
            })
    }

    editProject = (projectId, project) => {
        return projectAxios.put(`/api/project/${projectId}`, project)
            .then(response => {
                this.setState(prevState => {
                    const updatedProjects = prevState.projects.map(project => {
                        return project._id === response.data._id ? response.data : project
                    })
                    return { projects: updatedProjects }
                })
                return response;
            })
    }

    deleteProject = (projectId) => {
        return projectAxios.delete(`/api/project/${projectId}`)
            .then(response => {
                this.setState(prevState => {
                    const updatedProjects = prevState.projects.filter(project => {
                        return project._id !== projectId
                    })
                    return { projects: updatedProjects }
                })
                return response;
            })
    }

    signup = (userInfo) => {
        return projectAxios.post("/auth/signup", userInfo)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                this.setState({
                    user,
                    token
                });
                return response;
            })
    }

    login = (credentials) => {
        return projectAxios.post("/auth/login", credentials)
            .then(response => {
                const { token, user } = response.data;
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({
                    user,
                    token
                });
                this.getProjects();
                return response;
            })
    }

    logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        this.setState({
            projects: [],
            user: {},
            token: ""
        })
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    getProjects: this.getProjects,
                    addProject: this.addProject,
                    editProject: this.editProject,
                    deleteProject: this.deleteProject,
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout,
                    ...this.state
                }}
            >

                {this.props.children}

            </AppContext.Provider>
        )
    }
}

export const withContext = Component => {
    return props => {
        return (
            <AppContext.Consumer>
                {
                    globalState => {
                        return (
                            <Component
                                {...globalState}
                                {...props}
                            />
                        )
                    }
                }
            </AppContext.Consumer>
        )
    }
}
