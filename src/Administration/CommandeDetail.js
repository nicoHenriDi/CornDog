import "../Styles/AdministrationCss/CommandeDetail.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from 'react-bootstrap/Table';

//icon
import CloseIcon from '@mui/icons-material/Close';


function CommandeDetail(props){

    const commandeDetailInfo = props.commandeinfo;
    const idCommandeDetail =props.idcommande;
    let listProduitCommander=[];

    commandeDetailInfo.Commandes.filter((val)=>{
        return (val.id.includes(idCommandeDetail))
    }).map((info,index)=>(
        listProduitCommander=info.produitCommander
    ))

    let JSONlistProduitCommander= JSON.parse(listProduitCommander);

    const CloseModal = ()=>{//for button close click before the submitForm timer finish
        props.onHide();
  };
    return(
        <Modal
                      {...props}
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      >
                      <Modal.Header className="HeaderModal">
                          <Modal.Title id="contained-modal-title-vcenter">
                            Détail de la Commande
                          </Modal.Title>
                          <button className="boutonCloseModal" onClick={CloseModal}><CloseIcon /></button>
                      </Modal.Header>
                      <Modal.Body className="">
                        <Row className="">
                          <Col>
                            {
                                commandeDetailInfo.Commandes.filter((val)=>{
                                    return (val.id.includes(idCommandeDetail))
                                }).map((info,index)=>(
                                    <div>
                                        <p><b>Nom Client:</b> {info.nomClient}</p>
                                        <p><b>Prenom Client:</b> {info.prenomClient}</p>
                                        <p><b>Adresse Client:</b> {info.adresseClient}</p>
                                    </div>
                                ))}
                          </Col>
                          <Col>
                            {
                                commandeDetailInfo.Commandes.filter((val)=>{
                                    return (val.id.includes(idCommandeDetail))
                                }).map((info,index)=>(
                                    <div key={index}>
                                        <p><b>Téléphone Client:</b> {info.telephoneClient}</p>
                                        <p><b>Date Commande:</b> {info.dateCommande}</p>
                                    </div>
                                ))}
                          </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3 className="text-muted">Listes des produits commander</h3>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col>
                                <Table striped hover>
                                    <thead>
                                        <tr>
                                            <th>Nom produit</th>
                                            <th>Quantité</th>
                                            <th>Prix/Fcfa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                        JSONlistProduitCommander.map((produit,index)=>(
                                            <tr key={index}>
                                                <td>{produit.NameProduit}</td>
                                                <td>{produit.Quantité}</td>
                                                <td>{produit.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button onClick={CloseModal}>Close</Button>
                      </Modal.Footer>
                      </Modal>
    );
}
export default CommandeDetail;