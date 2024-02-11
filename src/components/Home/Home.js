import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import {Main,Content} from './StyledComponents'
function Home() {
    return (
        <>
        <Navbar/>
            {/* 
                    <i class="fa-solid fa-bars"></i>
                 */}
            <Main >
                <Sidebar/>
                <Content>
                   <h1>Home page</h1>
                </Content>
                   
            </Main>
            
        </>
    )
}

export default Home
