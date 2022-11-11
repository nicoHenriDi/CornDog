import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import FastFood from './Fast-Food';
import Contact from './Contact';

//Image Logo
import photoLogo from '../Image/logo-navbar.png';

//Icons
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

function NavBar(){
    const [navbar,setNavbar]=useState(false);

    const changeBackground= () => {
        if(window.scrollY >= 750){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }
    window.addEventListener('scroll',changeBackground);// for listen the scroll event 

    return(
        <BrowserRouter>
            <div>
            {['sm'].map((expand) => (
            <Navbar key={expand} expand={expand} bg="white" 
            className={navbar ? 'Navbar active': 'Navbar '} 
            style={{boxShadow:"3px 3px 5px rgb(86, 85, 85)",width:"100%"}}
            fixed="top"
            >
                <Container>
            <Navbar.Brand as={Link} to="/" className='Logo-Photo ms-1 p-0'>
                <img src={photoLogo} width="40" height="40"
                style={{margin:"0",padding:"0"}} alt='logo entreprise' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                            <Nav className="me-auto" >
                                <Nav.Link as={Link} to="/" className="text-black"><strong>NM Corn Dog</strong> </Nav.Link>
                                <Nav.Link as={Link} to="Fast-Food" className="text-black"><strong>Fast-Food</strong></Nav.Link>
                                <Nav.Link as={Link} to="Contact" className="text-black"><strong>Conctatez-Nous</strong></Nav.Link>
                            </Nav>
                            <button style={{border:"0",background:"white"}} className="ms-3">
                            <InstagramIcon />
                            </button>
                            <button style={{border:"0",background:"white"}} className="ms-3">
                                <GoogleIcon />
                            </button>
                            <button style={{border:"0",background:"white"}} className="ms-3">
                                <FacebookIcon />
                            </button>
                            <button style={{border:"0",background:"white"}} className="ms-3">
                                <GitHubIcon />
                            </button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
            </div>
            <div>
            <Routes>
                      <Route path="/" element={<Home />}/>
                      <Route path="/Fast-Food" element={<FastFood />}/>
                      <Route path="/Contact" element={<Contact />}/>
            </Routes>
            </div>
        </BrowserRouter>
    );
}
export default NavBar;
