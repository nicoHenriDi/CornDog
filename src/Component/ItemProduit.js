import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/esm/Col";
import {motion} from 'framer-motion';
import { useCart } from "react-use-cart";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

//Button Add
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

function ItemProduit(props){

        const [show, setShow] = useState(false);
        // const [position, setPosition] = useState('top-start');
        const { addItem } = useCart();

        const buttonAdd=()=>{
                setShow(true);
        }
    
    return(
        <>
                                        <Col>
                                        <motion.div
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        whileTap={{
                                        scale: 0.8,
                                        rotate: -360,
                                        borderRadius: "100%"
                                        }}>
                                                <img className="PhotoChapelurePain" src={"Image/"+props.img} alt={props.alt}/>
                                        </motion.div>
                                                <Button variant="contained" sx={{bottom:"20px",background:"#B70404",borderRadius:"50%"}} onClick={()=>{addItem(props.produit); buttonAdd();}}><AddIcon /></Button>
                                                <h5 className='Nom-produit'><strong>{props.name}</strong></h5>
                                                <h5 className='Prix-Produit'><strong>FCfA {props.price}</strong></h5>
                                        </Col>
                                        <ToastContainer position="top-end" className="p-3">
                                                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                                                        <Toast.Header>
                                                        <img
                                                                src={"Image/"+props.img}
                                                                width="70px"
                                                                height="70px"
                                                                className="rounded me-2"
                                                                alt={props.alt}
                                                        />
                                                        <strong className="me-auto">Panier</strong>
                                                        </Toast.Header>
                                                        <Toast.Body>Produit bien ajouter au panier</Toast.Body>
                                                </Toast>
                                        </ToastContainer>
        </>
);
}

export default ItemProduit;