import React from 'react'
import "./home.css"
const LocolStorages = () => {
    
    const getLocol = () => {
    }
    return (
        <div className='localStogar'>
            <button onClick={getLocol} className='btnLocal'>save</button>
            <button className='btnLocal'>search</button>
        </div>
    )
}

export default LocolStorages
