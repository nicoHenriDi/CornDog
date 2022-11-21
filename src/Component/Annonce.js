import '../Styles/Annonce.css';
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import AnimatedText from 'react-animated-text-content';
import {motion} from 'framer-motion';

//Photo importé
import PhotoAnnonce from '../Image/PhotoAnnonce1.jpg';
function Annonce(){

    const icon = {
        hidden: {
          pathLength: 0,
          fill: "rgba(44, 44, 44, 0)"
        },
        visible: {
          pathLength: 1,
          fill: "rgb(44,44,44)"
        }
      }
    return(
        <Container fluid className="p-4">
            <Row>
                <Col style={{margin:"5px"}}>
                    <div className="Annonce-container">
                                        <motion.svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="item1">
                                            <motion.path
                                        d="M42,-65C54.8,-57.2,65.6,-46,68.4,-33.2C71.2,-20.3,66.1,-5.8,62.2,7.7C58.3,21.2,55.7,33.6,49.5,45.5C43.2,57.4,33.4,68.8,22.1,69.4C10.9,70,-1.8,59.8,-17.1,56.2C-32.3,52.6,-50,55.7,-59.9,49.2C-69.7,42.7,-71.7,26.6,-68.6,13.1C-65.6,-0.5,-57.5,-11.5,-52.9,-25.3C-48.4,-39.1,-47.3,-55.6,-39.1,-65.4C-30.9,-75.3,-15.4,-78.5,-0.4,-77.8C14.7,-77.2,29.3,-72.8,42,-65Z"
                                        transform="translate(100 100)"
                                            variants={icon}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{
                                                default: { duration: 2, ease: "easeInOut" },
                                                fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                            }}/>
                                        </motion.svg>
                                    <img className="PhotoAnnonce" 
                                    src={PhotoAnnonce} 
                                    alt="annonce"
                                    width="500px" 
                                    height="500px"
                                    />
                    </div>
                </Col>
                <Col style={{margin:"10px"}}>
                   <h2 className='Text-Annonce'>
                        <strong>
                            <i>
                        <AnimatedText
                                        type="words" // animate words or chars
                                        animation={{
                                            x: '200px',
                                            y: '-20px',
                                            scale: 1.1,
                                            ease: 'ease-in-out',
                                        }}
                                        animationType="wave"
                                        interval={0.06}
                                        duration={0.8}
                                        tag="p"
                                        className="animated-paragraph"
                                        includeWhiteSpaces
                                        threshold={0.1}
                                        rootMargin="20%"
                                        >
                                        Avec NM Corn Dogs découvert de Nouvelle Saveurs à des prix trés abordable
                                    </AnimatedText>
                                    </i>
                        </strong>
                    </h2> 
                </Col>
            </Row>
        </Container>
    );
}
export default Annonce;