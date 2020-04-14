import React, {useState} from 'react'
import Icon from '../componentes/icon'
import Logo from '../assets/images/logo.png'
import Avatar from '../assets/images/avatar-1.jpg'
import { Navbar, Nav, Dropdown, Form, FormControl, Button, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap'

const Header = () => {

    const [state, setstate] = useState(false)

    const handleClick = () =>  setstate(state ? false : true)

    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><img src={Logo} /></Navbar.Brand>

                {/* VISIBLE UP LG */}
                <div className="visible-md d-none d-lg-flex">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Descover</Nav.Link>
                        <Nav.Link href="#link">Simple Guide</Nav.Link>
                        <Form inline>
                            <Icon name="search" size="0.89em" />
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        </Form>
                    </Nav>
                    <Nav className="ml-auto">
                        <OverlayTrigger
                            key="bottom"
                            placement="bottom"
                            overlay={ <Tooltip id="tooltip-bottom1"> Messages  </Tooltip> } >
                        <Nav.Link href="#home"><Icon name="chat" size="1rem" color="#cdcfd3" /> <span className="dot" /></Nav.Link>
                        </OverlayTrigger>
                        <OverlayTrigger
                            key="bottom"
                            placement="bottom"
                            overlay={ <Tooltip id="tooltip-bottom2"> Notifications  </Tooltip> } >
                        <Nav.Link href="#home"><Icon name="bell" size="1.1rem" color="#cdcfd3" /><span className="dot" style={{right: '8px'}} /></Nav.Link>
                        </OverlayTrigger>
                        
                        
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-profile">
                                <img className="img-fluid" src={Avatar} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">User</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link href="#home" className="mr-0">Your List <Badge variant="secondary">5</Badge> </Nav.Link>
                    </Nav>
                </div>

                {/* VISIBLE DOWN LG */}
                <div className={`munu-wrap d-block d-lg-none ${state ? 'show': ''}`}>
                    <Button variant="humburger" onClick={handleClick}>
                        <Icon name={state ? 'close': 'menu'}/>
                    </Button>
                    {state && 
                        <div className="content" >
                            <Nav>
                                <Form inline>
                                    <Icon name="search" size="0.89em" />
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                </Form>
                            </Nav>

                            <Nav className="ml-auto nav-notification">
                                <Nav.Link href="#home"><Icon name="chat" size="1rem" color="#cdcfd3" /> <span className="dot" /></Nav.Link>
                                <Nav.Link href="#home"><Icon name="bell" size="1.1rem" color="#cdcfd3" /><span className="dot" style={{right: '8px'}} /></Nav.Link>
                            </Nav>
                            <Nav className="nav-profile">
                               <Dropdown>
                                    <Dropdown.Toggle id="dropdown-profile">
                                        <img className="img-fluid" src={Avatar} />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">User</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                 <Nav.Link href="#home" className="mr-0">Your List <Badge variant="secondary">5</Badge> </Nav.Link>
                            </Nav>
                            <Nav>
                            <Nav.Link href="#home">Descover</Nav.Link>
                                <Nav.Link href="#link">Simple Guide</Nav.Link>
                            </Nav>
                        </div>
                    }

                </div>

            </Navbar>
        </header>
    )
}

export default Header
