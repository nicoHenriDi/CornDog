import '../Styles/Footer.css';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Container } from "react-bootstrap";
// import ListGroup from 'react-bootstrap/ListGroup';

//Icons
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
function Footer(){
    return (
        <Container>
        <Row className="Footer p-2">
                <Col className="FooterLeft">
                    <ul>
                        <li><strong>Cras justo odio</strong></li>
                        <li><strong>Dapibus ac facilisis in</strong></li>
                        <li><strong>Morbi leo risus</strong></li>
                        <li><strong>Porta ac consectetur ac</strong></li>
                    </ul>
                </Col>
                <Col className="FooterCenter">
                    <h5 className='Footer-slogan' style={{margin:"0",padding:"0"}}><strong>Votre Satisfaction notre Nindo</strong></h5>
                    <p className='Footer-Copyright'><strong>Copyright@2022</strong></p>
                </Col>
                <Col className="FooterRight">
                    <Col>
                        <ul>
                            <li><strong>Cras justo odio</strong></li>
                            <li><strong>Dapibus ac facilisis in</strong></li>
                            <li><strong>Morbi leo risus</strong></li>
                            <li><strong>Porta ac consectetur ac</strong></li>
                        </ul>
                    </Col>
                    <Col>
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
                    </Col>
                </Col>
        </Row>
        </Container>
    );
}
export default Footer ;