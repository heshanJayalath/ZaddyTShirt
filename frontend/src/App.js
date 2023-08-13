import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  CustomerHomePage,
  CustomizeTShirt,
  ProductsPage,
  ProductDetailsPage,
  CheckoutPage,
  ThreeDmodel,
  BestSellingPage,
  FAQPage,
  ProfilePage,
  GarmentRegisterPage,
  GarmentLoginPage,
  SellerActivationPage,
  PaymentPage
}
  from './routes/Routes.js';

import {
  GarmentHomePage,
  GarmentDashboardPage,
  GarmentCreateProducts,
  GarmentAllProducts,
  GarmentCreateEvents,
  GarmentAllEvents,
  GarmentPreviewPage,
} from './routes/GarmentRoutes.js';

import {
  AdminPage,
} from './routes/AdminRoutes.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import axios from 'axios';
import { server } from './server.js';
import Store from './redux/store.js';
import { loadGarment, loadUser } from './redux/actions/user.js'
import { getAllProducts } from './redux/actions/product.js';
import ProtectedRoute from './routes/ProtectedRoute.js';
import GarmentProtectedRoute from './routes/GarmentProtectedRoute.js';

const App = () => {

  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadGarment());
    Store.dispatch(getAllProducts());
  }, []);

  return (


    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CustomerHomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/activation/:activation_token' element={<ActivationPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/product/:id' element={<ProductDetailsPage />} />
        <Route path='/best-selling' element={<BestSellingPage />} />
        <Route path='/faq' element={<FAQPage />} />
        <Route path='/checkout' element={<CheckoutPage />} /> 
        {/* <Route path='/payment' element = {<PaymentPage/>}/> */}
        <Route path='/profile' element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        } />
        <Route path='/cutomize-tshirt' element={<CustomizeTShirt />} />
        <Route path='/threed-model' element={<ThreeDmodel />} />

        {/* garment Routes */}
        <Route path='/garment/activation/:activation_token' element={<SellerActivationPage />} />

        <Route path='/create-garment' element={<GarmentRegisterPage />} />

        <Route path='/login-garment' element={<GarmentLoginPage />} />

        <Route path='/garment/:id' element={
          <GarmentProtectedRoute>
            <GarmentHomePage />
          </GarmentProtectedRoute>
        } />

        <Route path="/garment/preview/:id" element={<GarmentPreviewPage />} />

        <Route path='/garment-dashboard' element={
          <GarmentProtectedRoute>
            <GarmentDashboardPage />
          </GarmentProtectedRoute>
        } />

        <Route path='/garment-dashboard-create-product' element={
          <GarmentProtectedRoute>
            <GarmentCreateProducts />
          </GarmentProtectedRoute>
        } />

        <Route path='/garment-dashboard-products' element={
          <GarmentProtectedRoute>
            <GarmentAllProducts />
          </GarmentProtectedRoute>
        } />


        <Route path='/garment-dashboard-create-event' element={
          <GarmentProtectedRoute>
            <GarmentCreateEvents />
          </GarmentProtectedRoute>
        } />

        <Route path='/garment-dashboard-events' element={
          <GarmentProtectedRoute>
            <GarmentAllEvents />
          </GarmentProtectedRoute>
        } />

        {/* <Route path='/garment/adiniproducts' element={<GarmentAddIniProduct />} />
              <Route path='/garment/account' element={<GarmentAccount />} >
                <Route path='allproduct' element={<GarmentAllProduct />} />
                <Route path='account-details' element={<GarmentAccountDetails />} />
                <Route path='account-details/account-details-edit' element={<GarmetnAccountDetailsEdit />} />
                <Route path='payment-details' element={<GarmentAccountPaymentDetails />} />
                <Route path='change-password' element={<GarmentAccountChangePassword />}></Route>
                <Route path='allproduct/add-new-product' element={<AddNewProduct />}></Route>
                <Route path='view-report' element={<GarmentViewReport />}></Route>
              </Route> */}

        <Route path='/admin' element={<AdminPage />}/>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>




  )
}



export default App;
