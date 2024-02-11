import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { Main, Content } from './StyledComponents'
function FeePayments() {
    return (
        <>
            <Navbar />
            <Main>
                <Sidebar />
                <Content>
                  <h1>Fee Payments of the Student</h1>
                </Content>
            </Main>

        </>
    )
}

export default FeePayments
