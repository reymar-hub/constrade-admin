import React from 'react'

import {Link} from 'react-router-dom'

const Index = () => {
    return <div>
        Landing page 
        <Link to="/login">Login</Link>
    </div>
}

export default Index;