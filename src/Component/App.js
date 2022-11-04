import React, {useState,useEffect} from 'react';
import '../Styles/App.css';
import LoadingComponent from './LoadingComponent';
import Footer from './Footer';
import ButtonFloating from './ButtonFloating';
import BackgroundDrop from './BackgroundDrop';
import SideBarCart from './SideBarCart';
import { CartProvider } from "react-use-cart";

import NavBar from './Navbar';

function App() {
  const [loading,setLoading] = useState(false);
  //Loading Page before display the home page
  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      },4000)
  },[])

  //SidebarCart evenement
  const [SideBarCar, setSideBarCart] = useState(false);

  const ToggleSideBarCart = () => {
      setSideBarCart( (prevState) => !prevState)
  }
  
  return (
    
        <div className="App">
          {
            loading ?
                <LoadingComponent />
            :
            <div>
              <CartProvider>
                <NavBar />
                        <ButtonFloating openSideBarCart={ToggleSideBarCart}/>
                        <BackgroundDrop SideBarCar={SideBarCar}/>
                        <SideBarCart SideBarCar={SideBarCar}/>
                        <div style={{display:"flex",justifyContent:"center"}}>
                          <hr style={{width:"50%"}}/>
                        </div>
                <Footer />
              </CartProvider>
            </div>
          }
        </div>
  );
}

export default App;
