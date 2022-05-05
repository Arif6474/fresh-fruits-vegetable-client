
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Banner from './components/Banner/Banner';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import SignIn from './components/Login/SignIn/SignIn';
import SignUp from './components/Login/SignUp/SignUp';
import NotFound from './components/NotFound/NotFound';
import Product from './components/Product/Product';

function App() {
  return (
    <div >
      <Header></Header>
       <Routes>
         <Route path="/" element={<Home></Home>}></Route>
         <Route path="/home" element={<Home></Home>}></Route>
         <Route path="/banner" element={<Banner></Banner>}></Route>
         <Route path="/login" element={<SignIn></SignIn>}></Route>
         <Route path="/register" element={<SignUp></SignUp>}></Route>
         <Route path="/blogs" element={<Blogs></Blogs>}></Route>
         <Route path="/fruits" element={<Inventory></Inventory>}></Route>
         <Route path="/product" element={<Product></Product>}></Route>
         <Route path="/home" element={<Home></Home>}></Route>
         <Route path="*" element={<NotFound></NotFound>}></Route>

       </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
