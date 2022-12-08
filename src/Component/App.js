import React, {useState,useEffect} from 'react';
import '../Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingComponent from './LoadingComponent';
import Footer from './Footer';
import ButtonFloating from './ButtonFloating';
import BackgroundDrop from './BackgroundDrop';
import SideBarCart from './SideBarCart';
import { CartProvider } from "react-use-cart";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import AdministrationLog from '../Administration/AdministrationLog';
import NavBar from './Navbar';
import { ProSidebarProvider } from 'react-pro-sidebar';

const urlActuel =window.location.pathname;
console.log(urlActuel);

function App() {
  // const [loading,setLoading] = useState(false);
  //Loading Page before display the home page
  // useEffect(() => {
  //     setLoading(true)
  //     setTimeout(() => {
  //       setLoading(false)
  //     },4000)
  // },[])

  //SidebarCart evenement
  const [SideBarCar, setSideBarCart] = useState(false);

  const ToggleSideBarCart = () => {
      setSideBarCart( (prevState) => !prevState)
  }

 

  if(urlActuel==="/AdministrationLog"){
      return (
        <div className="App">
            <ProSidebarProvider>
            <AdministrationLog />
            </ProSidebarProvider>
        </div>
        
      );
  }
  else{
    return (
      <div className="App">
          <>
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
          <BrowserRouter>
              <Routes>
                      <Route path="/AdministrationLog" element={<AdministrationLog />}/>
            </Routes>
        </BrowserRouter>
        </>
      </div>
    );
  }
  // return (
        
  //         {/* {
  //           loading ?
  //               <LoadingComponent />
  //           :
  //           <> */}
  //           {/* </>
  //         } */}
  //       </div>
  // );
}

export default App;
