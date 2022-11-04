import React,{useState,useEffect} from 'react';
import '../Styles/Fast-Food.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ItemProduit from './ItemProduit';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';

import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Button
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    style={{color:"gray"}}
  >
    {children}
    &#x25bc;
  </Button>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState("");
  
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );

function FastFood(){

        const [error, setError] =useState(null);
        const [isLoaded, setIsLoaded] =useState(false);
        const [produits, setProduits] = useState([]);
        const [searchTerm,setSearchTerm] = useState("");

        const handleSearchTerm = (e)=>{
            let value =e.target.value;
            setSearchTerm(value);
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
                        <Col className="Filtre-compoment text-center">
                            <Dropdown>
                                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                <FilterListIcon />  Filtres
                                </Dropdown.Toggle>

                                <Dropdown.Menu as={CustomMenu}>
                                <Dropdown.Item eventKey="1">Nom de produit</Dropdown.Item>
                                <Dropdown.Item eventKey="2" >Ordre alphabétique</Dropdown.Item>
                                <Dropdown.Item eventKey="3" >Prix</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>

                        {/*Barre de Recherche*/}
                        <Col>
                            <Form>
                                <Form.Group style={{display:'flex'}}>
                                    <input type="search" 
                                    placeholder='Recherche' 
                                    className='form-control'
                                    onChange={handleSearchTerm}
                                    />
                                    <Button className='btn'><SearchIcon/></Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        {/* <Col lg={3} xs={3} md={3}>
                            <ul>
                              <li className="m-2"><strong>Corn Dog</strong></li>
                              <li className="m-2"><strong>Frites au Chômage</strong></li>
                              <li className="m-2"><strong>Nuggets</strong></li>
                            </ul>
                        </Col> */}
                        {produits.produits.filter((val)=>{
                          return val.produitName.toLowerCase().includes(searchTerm.toLowerCase()) || val.price.includes(searchTerm);
                        }).map((val,index) => (
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