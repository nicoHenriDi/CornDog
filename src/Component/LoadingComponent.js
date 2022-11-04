import '../Styles/LoadingComponent.css'
import LoadingPhoto from '../Image/logo.gif'
function LoadingComponent(){
    return(
        <div className="loading-div">
                <img className='LoadingPhoto' src={LoadingPhoto} alt="Two Corn Dogs"/>
        </div> 
    );
}
export default LoadingComponent