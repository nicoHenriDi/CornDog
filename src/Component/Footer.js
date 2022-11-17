import '../Styles/Footer.css';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Container } from "react-bootstrap";
// import ListGroup from 'react-bootstrap/ListGroup';

//Icons
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
// import GitHubIcon from '@mui/icons-material/GitHub';

//Image Logo
import photoLogo from '../Image/Logo4.png';

function Footer(){
    return (
        <Container>
        <Row className="Footer p-2">
                <Col className="FooterLeft" sm={3} md={3} xl={3} lg={3}>
                    <ul>
                        <li><strong>Page d'acceuil</strong></li>
                        <li><strong>Fast Food</strong></li>
                    </ul>
                </Col>
                <Col className="FooterCenter">
                    <h5 className='Footer-slogan' style={{margin:"0",padding:"0"}}><strong>Votre Satisfaction notre Nindo</strong></h5>
                    <Row>
                        <Col  sm={4} md={4} xl={4} lg={4}>
                            <p className='Footer-Copyright text-muted p-2'><strong>Copyright@2022</strong></p>
                        </Col>
                        <Col>
                            <p className='Mention-Légale text-muted p-2' style={{fontSize:"15px"}}><strong>Condition générale de ventes</strong></p>
                        </Col>
                    </Row>
                </Col>
                <Col className="FooterRight" sm={4} md={4} xl={4} lg={4}>
                    <Row className="p-2">
                        <Row className="p-0 m-0" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                                    <Col className="p-0 m-0 mt-3" lg={6}>
                                        <p><i><strong>Retrouvez nous sur :</strong></i></p>
                                    </Col>
                                    <Col lg={6}>
                                        
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
                                    </Col>
                            </Row>
                        <Col lg={12}>
                            <ul>
                                <li><strong>Email:</strong>  n.entreprise.business@gmail.com</li>
                                <li><strong>Fixe:</strong>  33-825-86-71</li>
                                <li><strong>Contact:</strong>  +221 77-270-80-50</li>
                            </ul>
                        </Col>
                        <Col className="p-2">
                                    <img src={photoLogo} width="220" height="50"
                            style={{margin:"0",padding:"0"}} alt='logo entreprise' />
                        </Col>
                    </Row>
                </Col>
        </Row>
        </Container>
    );
}
export default Footer ;