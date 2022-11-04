import '../Styles/EmptyPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import photoAstronaute from "../Image/Background/crying-baby-astronaut.gif"
function EmptyPage(){
    return(
        <div className="Container">
            <img src={photoAstronaute} alt="crying-baby-astronaute" width={200} height={200}/>
            <p className="text-muted"><i>there is no produit in the cart</i></p>
        </div>
    );
}

export default EmptyPage;