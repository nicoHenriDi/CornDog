import React,{useState,useEffect} from 'react';
import '../Styles/Fast-Food.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ItemProduit from './ItemProduit';
// import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


//icon 
// import FilterListIcon from '@mui/icons-material/FilterList';
// import SearchIcon from '@mui/icons-material/Search';
import iconCornDog from "../Image/corn-dog-icon.png";
import friesCheese from "../Image/fried-potatoes.png"
import nuggets from "../Image/nuggets.png"


function FastFood(){

        const [error, setError] =useState(null);
        const [isLoaded, setIsLoaded] =useState(false);
        const [produits, setProduits] = useState([]);
        const [searchTerm,setSearchTerm] = useState("");
        const [priceRange,setPriceRange] = useState("");

        

        const handleSearchTerm = (e)=>{
            let value =e.target.value;
            setSearchTerm(value);
        }
        const valuetext =(value)=>{
            return (value);
        }

        const handleRange=(e)=>{
          let val=e.target.value
          setPriceRange(val);
        }
      
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
                <Container style={{paddingTop:"100px",height:"100%"}} fluid="md">
                    <Row className="m-2" >
                        {/*Barre de Recherche*/}
                        <Col>
                            <Form>
                                <Form.Group style={{display:'flex'}}>
                                    <input type="search" 
                                    placeholder='Recherche' 
                                    className='form-control'
                                    onChange={handleSearchTerm}
                                    />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col style={{display:"flex",justifyContent:"center"}}>
                                <Box sx={{ width: 230 ,height:300 ,display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
                                  <p className="text-muted"><strong>Filtre Prix</strong></p>
                                  <Slider
                                    aria-label="Prix"
                                    defaultValue={1000}
                                    getAriaValueText={valuetext}
                                    valueLabelDisplay="auto"
                                    step={1000}
                                    marks
                                    min={1000}
                                    max={15000}
                                    type="range"
                                    onChange={handleRange}
                                    />

                                <ul className="liste-produit-dispo">
                                  <li className="m-2">
                                    <div style={{display:"flex",justifyContent:"space-between"}}>
                                      <img className="image-produit-dispo" src={iconCornDog} alt="corn dog icon" width="30" height="30"/> 
                                      <strong className="titre-produit-dispo">Corn Dog</strong>
                                    </div>
                                  </li>
                                  <li className="m-2">
                                    <div style={{display:"flex",justifyContent:"space-between"}}>
                                      <img className="image-produit-dispo" src={friesCheese} alt="corn dog icon" width="30" height="30"/> 
                                      <strong className="titre-produit-dispo">Frites au Chômage</strong>
                                    </div>
                                  </li>
                                  <li className="m-2">
                                    <div style={{display:"flex",justifyContent:"space-between"}}>
                                    <img className="image-produit-dispo" src={nuggets} alt="corn dog icon" width="30" height="30"/>
                                      <strong className="titre-produit-dispo">Nuggets</strong>
                                    </div>
                                  </li>
                                </ul>
                                </Box>
                        </Col>
                        {produits.produits.filter((val)=>{
                          return (val.produitName.toLowerCase().includes(searchTerm.toLowerCase())) || val.price.includes(searchTerm);
                        }).filter((prix)=>
                        {
                          return(
                            prix.price.includes(priceRange)
                            );}
                        ).map((val,index) => (
                                                        <ItemProduit 
                                                                key={index}
                                                                img={val.imageProduit} 
                                                                alt={val.imageProduit} 
                                                                name={val.produitName} 
                                                                price={val.price}
                                                                produit={val}
                                                        />
                                                ))}
                    </Row>
                </Container>
            );
    }
}
export default FastFood;