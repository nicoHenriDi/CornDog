import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/FormulaireCommande.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useCart } from "react-use-cart";
import ItemsCommande from './ItemsCommande';
import Axios from 'axios';


//icon
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

function FormulaireCommande(props){


          const [formLastName,setFormLastName]=useState("");
          const [formName,setFormName]=useState("");
          const [formEmail,setFormEmail]=useState("");
          const [formAdresse,setFormAdresse]=useState("");
          const [formTelephone,setFormTelephone]=useState("");
          const  { items, cartTotal,emptyCart}  =  useCart () ;

          // const [listProduit,setlistProduit]=useState();

           
            
            

          const [SubmitBouton,setSubmitBouton]=useState(false);
          const [validated, setValidated] = useState(false);

          
            
          const submitForm = (event)=>{
            const form = event.currentTarget;
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              setValidated(true);
              event.preventDefault();
              if(form.checkValidity() === true){

          //Permet de récupérer les produits commander
                const produitCommander =[];
                    items.map((produit,index)=>(
                      produitCommander[index]=
                      { 
                          id : index,
                          Quantité: produit.quantity,
                          NameProduit:produit.produitName,
                          price: produit.price
                        }
                    ))
          
          //Api axios permettant permettant de poster les données vers le serveur
                  Axios.post("http://localhost:3001/api/insert",
                      { form :{
                        formLastName :formLastName,
                        formName :formName,
                        formAdresse :formAdresse,
                        formTelephone :formTelephone,
                        formEmail :formEmail,
                        produitCommander :produitCommander
                      }
                  }).then(()=>{
                    alert("successfull Insert");
                  });
                  console.log(produitCommander);// console.log("c'est là : "+listProduit);
                  setSubmitBouton(true);
              }
              
          };
          const CloseModal = ()=>{//for button close click before the submitForm timer finish
                props.onHide();

                setTimeout(() => {
                  setSubmitBouton(false);
                }, 500);
                emptyCart();
          };
          const CloseModalWithoutCommande = ()=>{
                props.onHide();
                setValidated(false);
          }


        return (
          <div>
            {
              SubmitBouton ?

              <Modal
                      {...props}
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      >
                      <Modal.Header className="HeaderModal">
                          <Modal.Title id="contained-modal-title-vcenter">
                            Commande Effectuer
                          </Modal.Title>
                          <button className="boutonCloseModal" onClick={CloseModal}><CloseIcon /></button>
                      </Modal.Header>
                      <Modal.Body className="successCommandeContainer">
                        <Row className="successCommande">
                          <Col sm={12} md={12} xl={12} lg={12} style={{justifyContent:"center",display:"flex"}}>
                              <div className="pulse" style={{marginTop:"50px"}}>
                                <CheckIcon />
                              </div>
                          </Col>
                          <Col sm={12} md={12} xl={12} lg={12}>
                          <p className="text-muted text-center" style={{marginTop:"50px"}}>
                            Votre Commande a bien été prise en compte <br/>
                            Veuillez consulter vos sms vous y trouverez toute les informations relatifs à la commande</p>
                          </Col>
                        </Row>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button onClick={CloseModal}>Close</Button>
                      </Modal.Footer>
                      </Modal>

              :
            
                      <Modal
                      {...props}
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      >
                      <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                          Formulaire de Commande
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <Row>
                        <Col sm={7} md={7} lg={7}>
                          <Form noValidate validated={validated} onSubmit={(event)=>submitForm(event)}>
                              <Form.Group className="mb-3" controlId="formBasicLastName">
                                  <Form.Label>Nom</Form.Label>
                                  <Form.Control required type="text" placeholder="Nom" 
                                  onChange={(e)=>{
                                    setFormLastName(e.target.value);
                                  }}
                                  />
                                  <Form.Control.Feedback type="invalid">veuillez rentrer un Nom</Form.Control.Feedback>
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="formBasicName">
                                  <Form.Label>Prénom</Form.Label>
                                  <Form.Control type="text" placeholder="Prénom" 
                                  onChange={(e)=>{
                                    setFormName(e.target.value);
                                  }}
                                  required/>
                                  <Form.Control.Feedback type="invalid">Veuillez rentrer un Prénom</Form.Control.Feedback>
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                  <Form.Label>Email address</Form.Label>
                                  <Form.Control type="email" placeholder="Enter email" 
                                  onChange={(e)=>{
                                    setFormEmail(e.target.value);
                                  }}
                                  required/>
                                  <Form.Control.Feedback type="invalid">Rentrez un Email valide</Form.Control.Feedback>
                              </Form.Group>

                              <Form.Group className="mb-3" controlId="formBasicAdresse">
                                  <Form.Label>Adresse</Form.Label>
                                  <Form.Control type="text" placeholder="Adresse" 
                                  onChange={(e)=>{
                                    setFormAdresse(e.target.value);
                                  }}
                                  required/>
                                  <Form.Control.Feedback type="invalid">Veuillez rentrer une Adresse</Form.Control.Feedback>
                              </Form.Group>

                              <Form.Group className="mb-3" controlId="formBasicPhone">
                                  <Form.Label>Téléphone</Form.Label>
                                  <Form.Control type="text" placeholder="Téléphone" 
                                  onChange={(e)=>{
                                    setFormTelephone(e.target.value);
                                  }}
                                  required/>
                                  <Form.Control.Feedback type="invalid">Rentrez un Numéro de téléphone</Form.Control.Feedback>
                              </Form.Group>
                              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                  <Form.Check type="checkbox" 
                                    label="Cocher moi pour validé la commande"
                                    required
                                    feedback="You must agree before submitting."
                                    feedbackType="invalid"
                                   />
                                  <Form.Text className="text-muted">
                                  We'll never share your informations with anyone else.
                                  </Form.Text>
                              </Form.Group>
                              <Form.Group>
                              <Button variant="danger" type="submit">Submit</Button>
                              </Form.Group>

                          </Form>
                        </Col>
                        <Col sm={5} md={5} lg={5}>
                          <div style={{boxShadow:"-3px -3px 3px  rgb(96, 96, 96)"}}>
                            <h4 className='text-center text-white bg-danger p-2'><i>Commande</i></h4>
                            <div className="Entête-commande">
                              <p style={{fontSize:"14px"}} className="text-muted">Qt</p>
                              <p className="text-primary text-muted" style={{fontSize:"14px"}}>Prix</p> 
                              <p style={{fontSize:"14px",marginLeft:"10px"}} className="text-muted">Nom Produit</p>
                              <p style={{fontSize:"14px",marginLeft:"10px"}} className="text-muted">Supprimer</p>
                          </div> 
                          <hr style={{margin:"10px"}}/>
                              {
                                items.map((Commande,index)=>
                                (
                                  <ItemsCommande 
                                      key={index}
                                      Produit={Commande.produitName}
                                      id={Commande.id}
                                      Prix={Commande.itemTotal}
                                      Quantité = {Commande.quantity}
                                  />
                                ))
                              }
                              <div className="Commande-footer bg-danger p-2">
                                 <h5 style={{color:"white"}}><i>Total : {cartTotal} Fcfa</i></h5>
                              </div>
                          </div>
                        </Col>
                        </Row>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button onClick={CloseModalWithoutCommande}>Close</Button>
                      </Modal.Footer>
                      </Modal>
                    
                    
            }
          </div>
          
        );
}
export default FormulaireCommande;
