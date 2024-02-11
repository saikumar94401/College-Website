import React from 'react'
import logo from '../../img/college-logo.jpg'
import userLogo from '../../img/user.jpg'
import './Navbar.css'
import { Logo, Nav, CollegeName, UserDetails, UserLogo, ProfileDetails, UserBranch, UserName, UserRoll, ScrollText, Navigate } from './StyledComponents'
function Navbar() {
  return (
    <Navigate >
      <Nav className='d-flex justify-content-between align-items-center navig'>
        <Logo src={logo} alt="college logo" />
        <CollegeName className='d-none d-lg-block'>Vidya Jyothi Institute of Technology</CollegeName>
        <ProfileDetails>
          <UserLogo src={userLogo} alt="profile logo" />
          <UserDetails>
            <UserName className='p-0 m-0'><span className='text-uppercase  font-weight-bold'>Name : </span>Saikumar</UserName>
            <UserRoll className='p-0 m-0'><span className='text-uppercase  font-weight-bold'>Roll : </span>19911A12G0</UserRoll>
            <UserBranch className='p-0 m-0'><span className='text-uppercase  font-weight-bold'>Branch : </span>MPC /A</UserBranch>
          </UserDetails>
        </ProfileDetails>

      </Nav>
      <ScrollText>
        {/* <i className="fa-solid fa-bars d-flex justify-content-center align-items-center bars-icon"   ></i> */}
        <marquee className="m-0 p-2" style={{ color: 'red', fontSize: '21px', background: '#f6f8fe' }} direction='right'> Important :Admissionst to be opened from March 1st.</marquee>
      </ScrollText>
    </Navigate>
  )
}

export default Navbar
