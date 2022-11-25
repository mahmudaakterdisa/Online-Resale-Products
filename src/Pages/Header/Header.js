import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    // const { user, logout } = useContext(Authcontext);


    // const handlelogout = () => {
    //     logout()
    //         .then(() => { })
    //         .catch(error => console.error(error))
    // }


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='me-5'>Sweet Delights</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ms-5">
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='blog'>Blog</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href='/'>


                                {/* {
                                    user?.uid ?
                                        <>

                                            <Link to='/reviews' className='me-3'>
                                                <Button variant="warning">My reviews</Button>
                                            </Link>
                                            <Link to='/addservice' className='me-3' >
                                                <Button variant="warning" >Add Services</Button>
                                            </Link>

                                            <Link >
                                                <Button onClick={handlelogout} variant="danger" >LogOut</Button>
                                            </Link>


                                        </>
                                        :
                                        <>
                                            <Link to='/register' className='me-3'>
                                                <Button variant="warning">Register</Button>
                                            </Link>
                                            <Link to='login'>
                                                <Button variant="danger">LogIn</Button>
                                            </Link>
                                        </>
                                } */}
                            </Nav.Link>
                            {/* <FaUserGraduate></FaUserGraduate> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;