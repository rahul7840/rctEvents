import React, { useState } from "react"

const App = ()=>{


    const purple = "#53265b";    
    const [bg, setbg]=useState(purple);
    const [Name, setName] =useState("Don't click me!");
    

    const bgChange =()=>{
        // console.log("clicked");
        let newbg = "green";
        setbg(newbg);
        setName("I told you dont click me!")
        
    }
    const dbcl =()=>{
       setbg(purple);
       setName("nooooooooo! dont Dubble click")
        
    }



    return(
        <>
        <div style={ { backgroundColor: bg }}>
            <button onClick={bgChange} onDoubleClick={dbcl}>{Name} </button>
        </div>
        </>
    )
}

export default App;