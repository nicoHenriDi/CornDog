import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/esm/Col";
import {motion} from 'framer-motion';
import { useCart } from "react-use-cart";

//Button Add
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

function ItemProduit(props){

    const { addItem } = useCart();
    return(
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
                                                <Button variant="contained" sx={{bottom:"20px",background:"#B70404",borderRadius:"50%"}} onClick={()=>{addItem(props.produit)}}><AddIcon /></Button>
                                                <h5 className='Nom-produit'><strong>{props.name}</strong></h5>
                                                <h5 className='Prix-Produit'><strong>FCfA {props.price}</strong></h5>
                                        </Col>
);
}

export default ItemProduit;