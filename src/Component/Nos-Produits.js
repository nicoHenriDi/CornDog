import {useState,useEffect} from 'react';
import '../Styles/Nos-Produits.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import {AnimatePresence} from 'framer-motion';
import ItemProduit from './ItemProduit';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';


function NosProduits() {
        const [error, setError] =useState(null);
        const [isLoaded, setIsLoaded] =useState(false);
        const [produits, setProduits] = useState([]);
        const [show, setShow] = useState(false);


      
        // Remarque : le tableau vide de dépendances [] indique
        // que useEffect ne s’exécutera qu’une fois, un peu comme
        // componentDidMount()
        useEffect(() => {
          fetch("http://api/Api_Corn-Dog.php")
            .then(res => res.json())
            .then(
              (result) => {
                setIsLoaded(true);
                setProduits(result.resultat);
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
                        <Container fluid="md">
                                <h1 className="titre-Produit"><strong>Nos Produits</strong></h1>
                                <Row style={{margin:"10px"}}>
                                        <AnimatePresence>
                                                {produits.produits.map((produit,index) => (
                                                        <ItemProduit 
                                                                key={index}
                                                                img={produit.imageProduit} 
                                                                alt={produit.imageProduit} 
                                                                name={produit.produitName} 
                                                                price={produit.price}
                                                                produit={produit}
                                                        />
                                                ))}
                                        </AnimatePresence>
                                </Row>      
                        </Container>
                );
        }
}


export default NosProduits ;