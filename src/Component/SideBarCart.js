import React, {useState,useEffect} from 'react';
import '../Styles/SideBarCart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import { Card } from 'react-bootstrap';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import { useCart } from "react-use-cart";
import EmptyPage from './EmptyPage';
import FormulaireCommande from './FormulaireCommande';

//icons delete
import ClearIcon from '@mui/icons-material/Clear';



function SideBarCart({SideBarCar}){
    const  { 
        isEmpty , 
        totalUniqueItems , 
        items , 
        updateItemQuantity , 
        removeItem , 
        cartTotal,
        totalItems,
        emptyCart,
    }  =  useCart () ;

    //For modalcommande
    const [modalShow, setModalShow] = React.useState(false);

    //function pour affichage carte produit panier
    function renderRow ({ data,index, style}){
        const item=data[index]; //donnée récupérer de l'api
        return(
        <ListItem style={style} key={index} component="div" >
                    <Card 
                    style={{ boxShadow:"-3px -3px 7px rgb(125, 123, 123),3px 3px 5px rgba(255, 255, 255, 0.464)"}} 
                    key={index}>
                    <div className='SidebarBody'>
                        <img  src={"Image/"+item.imageProduit} alt="Produit panier"  className='photoProduitPanier m-4'/>
                        <Card.Body >
                            <div className="titleAndDelete">
                                <Card.Text className="text-muted" style={{fontSize: "17px",margin:"0"}}>
                                    <i>{item.produitName}</i>
                                </Card.Text>
                                <button className="ms-4" style={{fontSize: "small",background:"white",border:"0"}}
                                onClick={()=>removeItem(item.id)}
                                >
                                    <ClearIcon />
                                </button>
                            </div>
                            <div className="container-price p-1">
                                <button className="btn btn-primary btn-sm"
                                    onClick={()=>updateItemQuantity(item.id,item.quantity - 1)}
                                >
                                    <strong>-</strong>
                                </button>
                                <Card.Text className="m-2"><strong>{item.quantity}</strong></Card.Text>
                                <button className="btn btn-primary btn-sm"
                                    onClick={()=>updateItemQuantity(item.id,item.quantity + 1)}
                                >
                                    <strong>+</strong>
                                </button>
                                <Card.Text className="ms-5"><strong>Fcfa {item.price * item.quantity}</strong></Card.Text>
                            </div>
                        </Card.Body>
                    </div>
                </Card>
        </ListItem>
      );
    }

    if(isEmpty){
        return(
        <div className={SideBarCar ? "SidebarContainer SidebarContainerOpen":"SidebarContainer"}>
             <Box
                style={{ width: '100%', height: 510, maxWidth: 485, bgcolor: 'background.paper' }}>
                    <AutoSizer>{({ height, width }) => (
                            <EmptyPage />
                        )}
                    </AutoSizer>
            </Box>
            <div className='SidebarFooter'>
                <div className="container-footer">
                        <Button variant="contained" 
                            className={cartTotal===0 ? "btn bg-danger disabled" : "btn bg-danger"}
                        >
                                Commander
                        </Button>
                        <p className="Total text-muted mx-2"><i>Total : {cartTotal} Fcfa</i></p>
                </div>
            </div>
        </div>
        );
    }else{
    return(
        <div>
        <div className={SideBarCar ? "SidebarContainer SidebarContainerOpen":"SidebarContainer"}>
            <Box
                style={{ width: '100%', height: 510, maxWidth: 485, bgcolor: 'background.paper' }}>
                    <AutoSizer>{({ height, width }) => (
                            <List
                                height={height}
                                width={width}
                                itemSize={145}
                                itemCount={totalUniqueItems}
                                overscanCount={5}
                                itemData={items}//donnée récupérer de l'api et envoyé à renderRow
                            >
                                {renderRow}
                            </List>
                        )}
                    </AutoSizer>
                    
            </Box>
            <div className='SidebarFooter'>
                <div className="container-footer">
                        <Button variant="contained" 
                            className="btn bg-danger"
                             onClick={() => setModalShow(true)}
                        >
                                Commander
                        </Button>
                        <p className="Total text-muted mx-2"><i>Total : {cartTotal} Fcfa</i></p>
                </div>
            </div>
        </div>
          <FormulaireCommande show={modalShow} onHide={() => setModalShow(false)} />

        </div>
    );}
}
export default SideBarCart;