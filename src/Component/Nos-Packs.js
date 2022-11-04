import {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import '../Styles/Nos-Packs.css';
import ItemPacks from './ItemPacks';




function NosPacks(){


    const [error, setError] =useState(null);
        const [isLoaded, setIsLoaded] =useState(false);
        const [packs, setPacks] = useState([]);

      
        // Remarque : le tableau vide de dépendances [] indique
        // que useEffect ne s’exécutera qu’une fois, un peu comme
        // componentDidMount()
        useEffect(() => {
          fetch("http://api/Api_Pack_Corn_dog.php")
            .then(res => res.json())
            .then(
              (result) => {
                setIsLoaded(true);
                setPacks(result.resultat);
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
            <Container fluid="md" className='div-nos-packs'>
                <h1 className="titre-Packs"><strong>Nos Packs</strong></h1>
                <Row style={{margin:"10px"}}>
                {packs.packs.map((pack,index) => (
                    <ItemPacks
                            key={index}
                            img={pack.imageProduit} 
                            alt={pack.imageProduit} 
                            name={pack.produitName} 
                            price={pack.price}
                            packs={pack}
                     />
                ))}
                </Row>
            </Container>
        );
    }
}
export default NosPacks;