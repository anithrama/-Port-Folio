import React,{useEffect,useState} from "react"
import axios from "axios"

const API_BASE = process.env.REACT_APP_API_BASE || "http://127.0.0.1:8000"

function Skills(){

const [skills,setSkills] = useState([])

useEffect(()=>{

axios.get(`${API_BASE}/api/skills/`)
.then(res=>{
setSkills(res.data)
})

},[])

return(

<div>

<h2>Skills</h2>

<ul>

{skills.map(skill=>(
<li key={skill.id}>{skill.name}</li>
))}

</ul>

</div>

)

}

export default Skills
