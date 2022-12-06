import {useState,useEffect} from 'react';
import "../Styles/AdministrationCss/ItemCommande.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import CommandeDetail from './CommandeDetail';

//icons


function ItemCommande(){

    const [error, setError] =useState(null);
    const [isLoaded, setIsLoaded] =useState(false);
    const [Commandes,setCommandes] = useState([]);
    const [idCommandesFordetail,setIdCommandes]=useState("");

     //For modalcommandeDetail
     const [modalDetailShow, setModalDetailShow] =useState(false);

    // Remarque : le tableau vide de dépendances [] indique
        // que useEffect ne s’exécutera qu’une fois, un peu comme
        // componentDidMount()
        useEffect(() => {
            fetch("http://api/Api_Commande.php")
              .then(res => res.json())
              .then(
                (result) => {
                  setIsLoaded(true);
                  setCommandes(result.resultat);
                },
                // Remarque : il faut gérer les erreurs ici plutôt que dans
                // un bloc catch() afin que nous n’avalions pas les exceptions
                // dues à de véritables bugs dans les composants.
                (error) => {
                  setIsLoaded(true);
                  setError(error);
                }
              )
          }, [])
  
          if (error) {
                  return <div>Erreur : {error.message}</div>;
          } 
          else if (!isLoaded) {
                  return <div>Chargement...</div>;
          } 
          else {
            return(
                <Row>
                    <Col>
                        <Table striped hover>
                            <thead>
                                <tr>
                                <th>id</th>
                                <th>NomClient</th>
                                <th>PrenomClient</th>
                                <th>TelephoneClient</th>
                                <th>AdresseClient</th>
                                <th>Date/HeureCommande</th>
                                <th>Détail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                Commandes.Commandes.map((Commande,index)=>(
                                        <tr key={index}>
                                            <td>{Commande.id}</td>
                                            <td>{Commande.nomClient}</td>
                                            <td>{Commande.prenomClient}</td>
                                            <td>{Commande.adresseClient}</td>
                                            <td>{Commande.telephoneClient}</td>
                                            <td>{Commande.dateCommande}</td>
                                            <td>
                                            <Button className="btn btn-danger btn-sm p-1 m-0"
                                            onClick={() =>
                                                {
                                                    setModalDetailShow(true);
                                                    setIdCommandes(Commande.id);
                                                }}
                                            >
                                                detail
                                            </Button>
                                            </td>
                                        </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                    <CommandeDetail
                        show={modalDetailShow} 
                        onHide={() => setModalDetailShow(false)} 
                        idcommande={idCommandesFordetail}
                        commandeinfo={Commandes}
                    />
                </Row>
            );
          }
}
export default ItemCommande;