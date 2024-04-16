import { faAutoprefixer } from '@fortawesome/free-brands-svg-icons'
import { faBell, faComments, faUser } from '@fortawesome/free-regular-svg-icons'
import { faDice, faExclamation, faHouseChimney, faMapLocationDot, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router'

export default function NavItems() {
    const navigate = useNavigate();
    

    return (
      <>
          {/* navbar start */}
       <div className='dark-mode'>
        <div className='nav-background'> 
        <Container>
          <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        
          <Navbar.Brand className='logo' >
            <img src={require("../images/nav-logo.png")} className='logoimg w-50' />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  className='menu-bg' />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav className='nav-text'>
              <Nav.Link onClick={()=>navigate('/')}><div className='d-flex flex-column justify-content-center text-white'><div className='mx-auto'><FontAwesomeIcon icon={faHouseChimney} /></div><div className='mx-auto'>Home</div></div></Nav.Link>
              {/* <Nav.Link onClick={()=>navigate('/games')}><div className='d-flex flex-column justify-content-center'><div className='mx-auto'><FontAwesomeIcon icon={faDice} /></div><div className='mx-auto'>Games</div></div></Nav.Link> */}
              <Nav.Link onClick={()=>navigate('/venues')}><div className='d-flex flex-column justify-content-center text-white '><div className='mx-auto'><FontAwesomeIcon icon={faMapLocationDot} /></div><div className='mx-auto'>Venues</div></div></Nav.Link>
              <Nav.Link href="" onClick={()=>navigate('/message')}><div className='d-flex flex-column justify-content-center text-white'><div className='mx-auto'><FontAwesomeIcon icon={faComments} /></div><div className='mx-auto'>Messages</div></div></Nav.Link>
              <Nav.Link href="" onClick={()=>navigate('/Alert')}><div className='d-flex flex-column justify-content-center text-white '><div className='mx-auto'><FontAwesomeIcon icon={faBell} /></div><div className='mx-auto'>Alerts</div></div></Nav.Link>
              <Nav.Link onClick={()=>navigate('/about')}><div className='d-flex flex-column justify-content-center text-white '><div className='mx-auto'><FontAwesomeIcon icon={faAutoprefixer} /></div><div className='mx-auto'>About Us</div></div></Nav.Link>
              <Nav.Link onClick={()=>navigate('/login')}><div className='d-flex flex-column justify-content-center  text-white'><div className='mx-auto'><FontAwesomeIcon icon={faUserAlt}  className='user-icon mx-auto'/></div><div className='mx-auto'>User</div></div></Nav.Link>
            </Nav>
  
          </Navbar.Collapse>
         
        
        
      </Navbar>
      <div>
      <hr className='m-0 mx-auto' />
      </div>
      </Container>
      
      </div>
            
      </div>
  
          {/* navbar end */}
      </>
    )
}
