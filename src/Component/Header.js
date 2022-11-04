import React from 'react';
import '../Styles/Header.css'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import {motion} from 'framer-motion';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import AnimatedText from 'react-animated-text-content';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import FastFood from './Fast-Food';

//image logo
import photobanner from "../Image/corn-dog-Banner-image.png"


<Routes>
    <Route path="/Fast-Food" element={<FastFood />}/>
</Routes>
function Header(){
    

    const icon = {
        hidden: {
          pathLength: 0,
          fill: "rgba(255, 238, 0, 0)"
        },
        visible: {
          pathLength: 1,
          fill: "rgb(255, 238, 0)"
        }
      }


    return(
        <div style={{height:"800px",width:"100%"}} className="Header">
                <Container className="h-75">
                    <Row className="align-middle w-100 ">
                            <Col className="contenu-gauche-banner col-6"  sm={5} md={5} lg={5} xl={5} xxl={5}>
                                <Col>
                                    <h1 className='Slogant-banner p-0'>
                                    <strong>
                                        <AnimatedText
                                            type="words" // animate words or chars
                                            animation={{
                                                x: '200px',
                                                y: '-20px',
                                                scale: 1.1,
                                                ease: 'ease-in-out',
                                            }}
                                            animationType="float"
                                            interval={0.06}
                                            duration={0.8}
                                            tag="p"
                                            className="animated-paragraph"
                                            includeWhiteSpaces
                                            threshold={0.1}
                                            rootMargin="30%"
                                            >
                                            Un petit creux?
                                            n'hésitez plus!
                                        </AnimatedText>
                                    </strong>
                                    </h1>
                                </Col>
                                <Col>
                                <Link to="Fast-Food">
                                    <button className="btn btn-danger ">
                                        <strong className="text-bouton">Consulter Fast-Food</strong>
                                    </button>
                                </Link>
                                </Col>
                            </Col>
                            <Col className="col-6" sm={7} md={7} lg={7} xl={7} xxl={7}>
                                <div className="image-container-svg">
                                    <motion.svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="item">
                                        <motion.path
                                        className="svg-path"
                                        d="M29.8,-41.7C41.6,-38.7,56.2,-35.6,63.4,-26.9C70.6,-18.2,70.4,-4.1,70,11.2C69.5,26.4,68.8,42.7,60.7,53.6C52.7,64.5,37.5,70.1,23,71C8.5,72,-5.3,68.4,-17.3,63.1C-29.4,57.7,-39.8,50.6,-51.9,42C-64,33.4,-77.9,23.3,-76.5,12.9C-75,2.5,-58.3,-8.2,-48.3,-18.7C-38.3,-29.2,-35.1,-39.4,-28.2,-44.6C-21.3,-49.8,-10.6,-49.9,-0.8,-48.7C9,-47.4,18,-44.7,29.8,-41.7Z"
                                        transform="translate(100 100)"
                                        variants={icon}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{
                                            default: { duration: 2, ease: "easeInOut" },
                                            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                        }}/>
                                    </motion.svg>
                                </div>
                                <img className="bannner-image" 
                                        src={photobanner} 
                                        alt={photobanner} 
                                        width="650px" 
                                        height="450px"
                                    />
                            </Col>
                    </Row>      
                </Container>
        </div>
    );
}
export default Header