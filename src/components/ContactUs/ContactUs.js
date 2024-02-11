import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { Main, Content } from './StyledComponents'
function ContactUs() {
    return (
        <>
            <Navbar />
            <Main>
                <Sidebar />
                <Content>
                  <h1>Contact Us for further queries</h1>
                </Content>

            </Main>

        </>
    )
}

export default ContactUs
