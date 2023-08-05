import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
  GarmentAddIniProduct,
  GarmentAccount,
  GarmentAllProduct,
  GarmentAccountDetails,
  GarmetnAccountDetailsEdit,
  GarmentAccountPaymentDetails,
  GarmentAccountChangePassword,
  AddNewProduct,
  GarmentViewReport,
  AdminPage,
}
  from './Routes.js';

import {
  GarmentHomePage
} from './GarmentRoutes.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { server } from './server.js';
import Store from './redux/store.js';
import { loadGarment, loadUser } from './redux/actions/user.js'
import ProtectedRoute from './ProtectedRoute.js';
import SellerProtectedRoute from './GarmentProtectedRoute.js';

const App = () => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  const { isLoading, isGarment } = useSelector((state) => state.garment);

  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadGarment());
  }, []);

  return (
    <>
      {
        loading || isLoading ? (
          null
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<CustomerHomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signup' element={<SignupPage />} />
              <Route path='/activation/:activation_token' element={<ActivationPage />} />
              <Route path='/garment/activation/:activation_token' element={<SellerActivationPage />} />
              <Route path='/products' element={<ProductsPage />} />
              <Route path='/product/:name' element={<ProductDetailsPage />} />
              <Route path='/best-selling' element={<BestSellingPage />} />
              <Route path='/faq' element={<FAQPage />} />
              <Route path='/checkout' element={<CheckoutPage />} />
              <Route path='/profile' element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ProfilePage />
                </ProtectedRoute>
              } />

              <Route path='/cutomize-tshirt' element={<CustomizeTShirt />} />
              <Route path='/threed-model' element={<ThreeDmodel />} />

              <Route path='/create-garment' element={<GarmentRegisterPage />} />
              <Route path='/login-garment' element={<GarmentLoginPage />} />
              <Route path='/garment/:id' element={
                <SellerProtectedRoute isGarment={isGarment} >
                  <GarmentHomePage />
                </SellerProtectedRoute>
              } />
              <Route path='/garment/adiniproducts' element={<GarmentAddIniProduct />} />
              <Route path='/garment/account' element={<GarmentAccount />} >
                <Route path='allproduct' element={<GarmentAllProduct />} />
                <Route path='account-details' element={<GarmentAccountDetails />} />
                <Route path='account-details/account-details-edit' element={<GarmetnAccountDetailsEdit />} />
                <Route path='payment-details' element={<GarmentAccountPaymentDetails />} />
                <Route path='change-password' element={<GarmentAccountChangePassword />}></Route>
                <Route path='allproduct/add-new-product' element={<AddNewProduct />}></Route>
                <Route path='view-report' element={<GarmentViewReport />}></Route>
              </Route>

              <Route path='/admin' element={<AdminPage/>}></Route>

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
    </>

  );
}

export default App;
