import React,{useEffect,useState} from "react"
import axios from "axios"

function Skills(){

const [skills,setSkills] = useState([])

useEffect(()=>{

axios.get("http://127.0.0.1:8000/api/skills/")
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
