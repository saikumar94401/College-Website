import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { Main, Content } from './StyledComponents'
function Details() {
    return (
        <>
            <Navbar />
            <Main>
                <Sidebar />
                <Content>
                  <h1>Basic Details of the Student</h1>
                </Content>

            </Main>

        </>
    )
}

export default Details
