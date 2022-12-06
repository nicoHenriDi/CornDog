
import "../Styles/AdministrationCss/Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import ItemCommande from './ItemCommande';

function HomeLog(){
 
    return(
        <>
            <Container fluid>
                <Row className="p-3 d-flex justify-content-space-between">
                    <Col>
                        <Card style={{ width: '15rem' }} className=" carte-informatif">
                            <Card.Body>
                                <Card.Title className="text-white">Produit dans FastFood</Card.Title>
                                <Card.Text className="text-white">
                                    20
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '15rem' }} className=" carte-informatif">
                            <Card.Body>
                                <Card.Title className="text-white">Solde toute vente</Card.Title>
                                <Card.Text className="text-white">
                                    200$
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card style={{ width: '15rem' }} className=" carte-informatif">
                            <Card.Body>
                                <Card.Title className="text-white">Visiteur Site</Card.Title>
                                <Card.Text className="text-white">
                                    1000
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div></div>
                    </Col>
                    <Col>
                            <Form className="p-2">
                                <Form.Group style={{display:'flex'}}>
                                    <input type="search" 
                                    placeholder='Recherche' 
                                    className='form-control'
                                    />
                                </Form.Group>
                            </Form>
                    </Col>
                </Row>
                <ItemCommande />
            </Container>
        </>
//récupérer les informations de commandes directement à travers l'api
    );
}
export default HomeLog;