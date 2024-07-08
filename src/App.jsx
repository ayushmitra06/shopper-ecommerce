import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home/Home';
import Order from './pages/Order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/pages/AddProduct';
import UpdateProduct from './pages/admin/pages/UpdateProduct';
import Allproducts from './pages/allproducts/AllProducts';

const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order' element={<ProtectedRoute><Order /></ProtectedRoute>} />
          <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path='/dashboard' element={<AdminProtectedRoute><Dashboard /></AdminProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/productinfo/:id' element={<ProductInfo />} />
          <Route path='/addproduct' element={<AdminProtectedRoute><AddProduct /></AdminProtectedRoute>} />
          <Route path='/allproducts' element={<Allproducts/>} />
          <Route path='/updateproduct' element={<AdminProtectedRoute><UpdateProduct /></AdminProtectedRoute>} />
          <Route path='/*' element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>

  )
}

export default App


//user protected route
export const ProtectedRoute = ({children}) =>{
  const user = localStorage.getItem('user')
  if(user){
    return children
  }
  else{
    return <Navigate to='/login'/>
  }
}

//admin protected route
export const AdminProtectedRoute = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  if(admin.user.email === 'toxicayush06@gmail.com'){
    return children
  }
  else{
    return <Navigate to='/login'/>
  }
}