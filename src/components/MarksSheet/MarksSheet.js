import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import {Main,Content} from './StyledComponents'
function MarksSheet() {
    return (
        <>
        <Navbar/>
            <Main>
                <Sidebar/>
                <Content>
                   <h1>Marks Sheet of the Student of All Semisters</h1>
                </Content>
                   
            </Main>
            
        </>
    )
}

export default MarksSheet
