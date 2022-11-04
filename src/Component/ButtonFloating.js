import '../Styles/ButtonFloating.css'
import { Fab } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function ButtonFloating({openSideBarCart}){
    return(
        <Fab aria-label="ShoppingCartIcon" className="ShoppingCartButton"
            style={{position:'fixed',bottom:50,right:40,background:"#ff3700",color:"white"}} 
            onClick={openSideBarCart}>
                <ShoppingCartIcon/>
        </Fab>
    );
}
export default ButtonFloating;