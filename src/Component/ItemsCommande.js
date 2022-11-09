import { useCart } from "react-use-cart";
import '../Styles/ItemsCommande.css'

//icons delete
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function ItemsCommande(props){

    const  { removeItem }  =  useCart () ;

    return(
        <div className="container-commande" key={props.id} style={{padding:"5px"}}>
                <div className="Info-produit">
                    <p style={{fontSize:"14px",marginRight:"10px"}} className="text-muted">{props.Quantité}</p>
                    <p className="text-primary" style={{fontSize:"14px"}}>{props.Prix} Fcfa</p> 
                    <p style={{fontSize:"14px",marginLeft:"10px"}}>{props.Produit}</p>
                </div>   
            <div>
                <button className="commande-delete" style={{background:"white",border:"0",padding:"0"}}
                        onClick={()=>removeItem(props.id)}
                        ><DeleteOutlineIcon /></button>
            </div>
        </div>
    );
}

export default ItemsCommande;