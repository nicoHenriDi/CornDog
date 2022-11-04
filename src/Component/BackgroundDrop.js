import '../Styles/BackgroundDrop.css';
function BackgroundDrop({SideBarCar}){
    return(
        <div className={SideBarCar ? "BackgroundDropContainer BackgroundDropContainerOpen":"BackgroundDropContainer"}></div>
    );
}
export default  BackgroundDrop;