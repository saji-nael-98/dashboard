import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Page } from '../../components/UI/Page/Page'

const Home = () => {
    const navigate = useNavigate()

    return (
        // <div>
        //     
        // </div>
        <Page>
           <button onClick={()=> navigate('/login')}>Go to Login</button>
            <button onClick={()=> navigate('/secure')}>GO to Secure Dashboard</button>
        </Page>
    )
}

export default Home