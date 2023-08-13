/*
Assignment 1 : Create a simple React app for RESUME Builder. It will be static website. You have to make components 
like Resume as top level and under it - Skills, Education, Experience etc as components. All resume data will be under 
1 big JavaScript object like which you can us in components via props. 
You can fix the number of items in Skills, Education, Experience or any section. Example you can say that only 3 experience items is allowed.
*/

const Resume=()=>{
    return (
    <div id="header">
        <h1 style={{color:"white"}}>Vishal Kumar Singh</h1>
        <hr></hr>
        <Skills />
        <Education />

    </div>)
}

const Skills=()=>{
    return (<div>
        <p style={{margin:"10px ",color:"white"}}>
            Skills
            <ul style={{color:"white"}}>
                <li><bold>Core Java</bold></li>
                <li><bold>Advance Java</bold></li>
                <li><strong>Spring</strong></li>
            </ul>
        </p>
    </div>)
}

const Education=()=>{
    return (<div>
        <p style={{margin:"10px ",color:"white"}}>
            Education
            <ul style={{color:"white"}}>
                <li><bold>Gowtham Model School</bold></li>
                <li><bold>Narayana Junior College</bold></li>
                <li><strong>MLR INSTITUTE OF TECHNOLOGY</strong></li>
            </ul>
        </p>
    </div>)
}



export default Resume;