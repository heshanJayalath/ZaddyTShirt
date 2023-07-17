import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage, SignupPage, ActivationPage, CustomerHomePage, ProductsPage, BestSellingPage, FAQPage, GarmentRegister, GarmentAddIniProduct, GarmentAccount, GarmentAllProduct, GarmentAccountDetails, GarmetnAccountDetailsEdit, GarmentAccountPaymentDetails, GarmentAccountChangePassword, AddNewProduct, GarmentViewReport } from './Routes.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { server } from './server.js';
import Store from './redux/store.js';
import { loadUser } from './redux/actions/user.js'

const App = () => {
  const { loading } = useSelector((state) => state.user);

  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  return (

    <>
      {
        loading ? (
          null
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<CustomerHomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signup' element={<SignupPage />} />
              <Route path='/activation/:activation_token' element={<ActivationPage />} />
              <Route path='/products' element={<ProductsPage />} />
              <Route path='/best-selling' element={<BestSellingPage />} />
              <Route path='/faq' element={<FAQPage />} />
              <Route path='/garment/register' element={<GarmentRegister />} />
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
