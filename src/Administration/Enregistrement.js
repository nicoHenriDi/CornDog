import React, {useState} from 'react';
import "../Styles/AdministrationCss/Enregistrement.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/esm/Col";
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
function Enregistrement(){


    const [formNomProduit,setFormNomProduit]=useState("");
    const [formPrixProduit,setFormPrixProduit]=useState(0);
    const [formDescriptionProduit,setFormDescriptionProduit]=useState("");
    const [formStatutProduit,setFormStatutProduit]=useState("");
    const [formImageProduit,setFormImageProduit]=useState("");
    const [validated, setValidated] = useState(false);
    const [SubmitBouton,setSubmitBouton]=useState(false);


    const submitForm = (event)=>{
        const form = event.currentTarget;
        const ImageProduit = formImageProduit[0].name;
        const PrixProduit = parseInt(formPrixProduit);
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            alert("La validation marche");
          }
          setValidated(true);
          event.preventDefault();
          if(form.checkValidity() === true){
      
      //Api axios permettant permettant de poster les données vers le serveur
              Axios.post("http://localhost:3001/api/insertProduit",
                  { form :{
                    formNomProduit :formNomProduit,
                    PrixProduit :PrixProduit,
                    formDescriptionProduit :formDescriptionProduit,
                    formStatutProduit :formStatutProduit,
                    ImageProduit :ImageProduit,
                  }
              }).then(()=>{
                alert("successfull Insert");
              });
            alert("Produit Enregistrer");

          }
          
      };
    
    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-muted">Enregistrement</h1>
                    </Col>
                </Row>
                <div style={{display:"flex",justifyContent:"center"}}>
                <Row className="h-100 w-75">
                    <Col>
                    <Form noValidate validated={validated} onSubmit={(event)=>submitForm(event)}>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                                  <Form.Label >Nom Produit</Form.Label>
                                  <Form.Control required type="text" placeholder="Nom Produit" 
                                  onChange={(e)=>{
                                    setFormNomProduit(e.target.value);
                                  }}
                                  />
                                  <Form.Control.Feedback type="invalid">veuillez rentrer un Nom de produit</Form.Control.Feedback>
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                  <Form.Label>Prix Produit</Form.Label>
                                  <Form.Control type="number" placeholder="Prix Produit" 
                                  onChange={(e)=>{
                                    setFormPrixProduit(e.target.value);
                                  }}
                                  required/>
                                  <Form.Control.Feedback type="invalid">Rentrez un prix pour le produit</Form.Control.Feedback>
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="formBasicName">
                                  <Form.Label>Description produit</Form.Label>
                                  <Form.Control as="textarea" placeholder="Description Produit" 
                                  onChange={(e)=>{
                                    setFormDescriptionProduit(e.target.value);
                                  }}
                                  required/>
                                  <Form.Control.Feedback type="invalid">Veuillez rentrer une description pour le produit</Form.Control.Feedback>
                              </Form.Group>

                              <Form.Group className="mb-3" controlId="formBasicAdresse">
                                  <Form.Label>Statut Produit</Form.Label>
                                  <Form.Control type="text" placeholder="Rentez 1 pour un pack produit et 0 pour un produit unique" 
                                  onChange={(e)=>{
                                    setFormStatutProduit(e.target.value);
                                  }}
                                  required/>
                                  <Form.Control.Feedback type="invalid">Veuillez rentrer un statut pour ce produit</Form.Control.Feedback>
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="formBasicPhone">
                                  <Form.Label>Image Produit</Form.Label>
                                  <Form.Control type="file" 
                                  onChange={(e)=>{
                                    setFormImageProduit(e.target.files);
                                  }}
                                  required/>
                                  <Form.Control.Feedback type="invalid">Rentrez une Image pour le produit</Form.Control.Feedback>
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                  <Form.Check type="checkbox" 
                                    label="Cocher moi pour validé l'enregistrement"
                                    required
                                    feedback="You must confirm for register."
                                    feedbackType="invalid"
                                   />
                              </Form.Group>
                              <Form.Group>
                              <Button variant="primary" type="submit">Enregistrer</Button>
                              </Form.Group>
                    </Form>
                    </Col>
                </Row>
                </div>
            </Container>
        </>
    );
}
export default Enregistrement;