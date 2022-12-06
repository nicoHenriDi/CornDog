import "../Styles/AdministrationCss/HomeAdministration.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./HomeLog";
import Commandes from "./Commandes";
import Enregistrement from "./Enregistrement";
import Annulation from "./Annulation";

//icons
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function HomeAdministration(){
    const { collapseSidebar } = useProSidebar();

    return(
        <BrowserRouter>
            <div className="CorpSidebar">
                <Sidebar transitionDuration={1000} backgroundColor="rgb(255, 255, 0)">
                    <Menu>
                        <MenuItem routerLink={<Link to="/HomeLog" />} icon={<HomeIcon name="Home" />} style={{color:"rgb(0, 0, 0)"}}>
                            <b>Acceuil</b>
                        </MenuItem>
                        <MenuItem routerLink={<Link to="/Commande" />} icon={<BookmarkBorderIcon name="Commande" />} style={{color:"rgb(0, 0, 0)"}}>
                            <b>Commandes</b>
                        </MenuItem>
                        <MenuItem routerLink={<Link to="/Enregistrement" />} icon={<AddBusinessIcon name="Enregistrement" />} style={{color:"rgb(0, 0, 0)"}}>
                            <b>Enregistrement</b>
                        </MenuItem>
                        <MenuItem routerLink={<Link to="/Annulation" />} icon={<DeleteForeverIcon name="Annulation" />} style={{color:"rgb(0, 0, 0)"}}>
                            <b>Annulation</b>
                        </MenuItem>
                    </Menu>
                </Sidebar>
                <main style={{padding:"5px"}}>
                <button onClick={() => collapseSidebar()} style={{backgroundColor:"white",border:"0px"}}><MenuIcon /></button>
                </main>
                <Routes>
                        <Route path="/HomeLog" element={<Home />}/>
                        <Route path="/Commande" element={<Commandes />}/>
                        <Route path="/Enregistrement" element={<Enregistrement />}/>
                        <Route path="/Annulation" element={<Annulation />}/>
                </Routes>
            </div>
      </BrowserRouter>

    );
}
export default HomeAdministration;