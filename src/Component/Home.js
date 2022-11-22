// import React,{useState} from 'react';
import Header from './Header';
import NosProduits from './Nos-Produits';
import NosPacks from './Nos-Packs';
import Annonce from './Annonce';


function Home(){


    return(
        <div>
                <Header />
                <NosProduits />
                <Annonce />
                <NosPacks />
        </div>
    );
}
export default Home;