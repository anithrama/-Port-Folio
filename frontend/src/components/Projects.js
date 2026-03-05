import React,{useEffect,useState} from "react"
import axios from "axios"

const API_BASE = process.env.REACT_APP_API_BASE || "http://127.0.0.1:8000"

function Projects(){

const [projects,setProjects] = useState([])

useEffect(()=>{

axios.get(`${API_BASE}/api/projects/`)
.then(res=>{
setProjects(res.data)
})

},[])

return(

<div>

<h2>Projects</h2>

{projects.map(project=>(

<div key={project.id}>

<h3>{project.title}</h3>

<p>{project.description}</p>

<a href={project.github_link}>GitHub</a>

</div>

))}

</div>

)

}

export default Projects
