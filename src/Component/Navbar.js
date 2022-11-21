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
// import APropos from './APropos';

//Image Logo
import photoLogo from '../Image/logo-navbar.png';

//Icons
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
// import GitHubIcon from '@mui/icons-material/GitHub';

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
            {['sm'].map((expand) => (
                
            <Navbar key={expand} expand={expand} bg="white" 
            className={navbar ? 'Navbar active': 'Navbar '} 
            style={{boxShadow:"3px 3px 5px rgb(86, 85, 85)"}}
            sticky="top"
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
                  NM Corn Dog
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                            <Nav className="me-auto" >
                                <Nav.Link as={Link} to="/" className="text-black"><strong>NM Corn Dog</strong> </Nav.Link>
                                <Nav.Link as={Link} to="Fast-Food" className="text-black"><strong>Fast-Food</strong></Nav.Link>
                                {/* <Nav.Link as={Link} to="APropos" className="text-black"><strong>à Propos de Nous</strong></Nav.Link> */}
                            </Nav>
                            <h6 style={{border:"0",background:"white"}} className="ms-3 mt-3 p-0"><i><strong>Contactez nous :</strong></i></h6>
                            <button style={{border:"0",background:"white"}} className="ms-3 p-0">
                            <InstagramIcon />
                            </button>
                          <button style={{border:"0",background:"white"}} className="ms-3 p-0">
                                <GoogleIcon />
                            </button>
                            <button style={{border:"0",background:"white"}} className="ms-3 p-0">
                                <a href="https://www.facebook.com/Nentreprise.business?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
                                <FacebookIcon />
                                </a>
                            </button>
                            <p className="mt-3 ms-3"><strong>+211-77-270-80-50</strong></p>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            </Container>
                </Navbar>
                
            ))}
            
            
            <Routes>
                      <Route path="/" element={<Home />}/>
                      <Route path="/Fast-Food" element={<FastFood />}/>
                      {/*<Route path="/APropos" element={<APropos />}/>*/}
            </Routes>
    </BrowserRouter>
    );
}
export default NavBar;
