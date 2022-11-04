import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/ItemPacks.css';
import Col from "react-bootstrap/esm/Col";
import { useCart } from "react-use-cart";

//Button Add
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
function ItemPacks(props){
    const { addItem } = useCart();
    return(
            <Col >
                <div>
                <img className="PhotoPack" src={"Image/"+props.img} alt={props.alt}/>
                </div>
                <Button variant="contained" sx={{bottom:"20px",background:"#B70404",borderRadius:"45%"}} onClick={()=>{addItem(props.packs)}}><AddIcon /></Button>
                <h5 className='Nom-produit'><strong>{props.name}</strong></h5>
                <h5 className='Prix-Produit'><strong>Fcfa {props.price}</strong></h5>
            </Col>
    );
};
export default ItemPacks;