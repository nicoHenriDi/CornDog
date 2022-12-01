import React, {useState} from 'react';
import "../Styles/AdministrationLog.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HomeAdministration from "./HomeAdministration"

//Image Logo
import photoLogo from '../Image/logo-navbar.png';



function AdministrationLog(){
    const [idInput,setIdInput] = useState("");
    const [passwordInput,setPasswordInput] = useState("");
    const [MessageLogin,setMessageLogin]=useState("");
    const [validated, setValidated] = useState(false);
    const [controleOk,setControleOk]=useState(false);

    const idMonitor =`${process.env.REACT_APP_idMonitor}`;
    const passwordMonitor=`${process.env.REACT_APP_passwordMonitor}`;

    const submitFormLog = (event)=>{
        const formLog = event.currentTarget;
        if (formLog.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
                setMessageLogin("Email ou Mot de passe Incorrect");
        }
        setValidated(true);
        event.preventDefault();
        if (formLog.checkValidity() === true && idMonitor === idInput && passwordMonitor===passwordInput) {
            setControleOk(true);
            console.log(idInput);
            console.log(passwordInput);
        }else if(formLog.checkValidity() === true && idMonitor === idInput && passwordMonitor!==passwordInput){
            setMessageLogin("Mot de passe Incorrect");
        }
        else if ( formLog.checkValidity() === true && idMonitor !== idInput && passwordMonitor===passwordInput){
            setMessageLogin("Email Incorrect");
        }else{
            setMessageLogin("Email et Mot de passe Incorrect");
        }
    }
    //Faire le redirectionnement vers le tableau de bord en cas de success connexion0+

    return(
        <>
            {
               controleOk === true ? 
               <HomeAdministration />
               :
            <Container fluid className=" containerLog" >
                <Row className="RowLog w-75 h-75">
                    <Col className="CotéGauche d-flex justify-content-center align-items-center" sm={4} xs={4} lg={6}>
                        <img src={photoLogo} width="200" height="200"
                            style={{margin:"0",padding:"0"}} alt='logo entreprise' className='photoLog'/>
                    </Col>
                    <Col className="CotéDroit d-flex justify-content-center align-items-center" sm={8} xs={8} lg={6}>
                    <Form  noValidate validated={validated} className="w-100" onSubmit={(event)=>submitFormLog(event)}>
                        <p className="text-center" style={{color:"red"}}>{MessageLogin}</p>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='text-left'>ID Monitor</Form.Label>
                            <Form.Control required type="email" placeholder="Enter email" 
                            onChange={(e)=>{
                                setIdInput(e.target.value);
                              }}
                            />
                            <Form.Control.Feedback type="invalid">veuillez rentrer un ID Monitor</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Password" 
                            onChange={(e)=>{
                                setPasswordInput(e.target.value);
                              }}
                            />
                            <Form.Control.Feedback type="invalid">veuillez rentrer un Password</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Button variant="danger" type="submit">
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                    </Col>
                </Row>
            </Container>
                }
        </>
    );
}
export default AdministrationLog;