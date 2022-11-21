import '../Styles/ButtonFloating.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fab } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function ButtonFloating({openSideBarCart}){
    return(
        <Fab aria-label="ShoppingCartIcon" className="ShoppingCartButton"
            style={{position:"fixed",bottom:"50px",right:"50px",background:"#ff3700",color:"white"}} 
            onClick={openSideBarCart}>
               
                <ShoppingCartIcon/>
        </Fab>
    );
}
export default ButtonFloating;