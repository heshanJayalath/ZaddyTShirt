import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage, Signup, CustomerHomePage, ProductsPage, BestSellingPage, FAQPage, GarmentRegister, GarmentAddIniProduct, GarmentAccount,GarmentAllProduct,GarmentAccountDetails,GarmetnAccountDetailsEdit, GarmentAccountPaymentDetails,GarmentAccountChangePassword,AddNewProduct,GarmentViewReport } from './Routes.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CustomerHomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/best-selling' element={<BestSellingPage />} />
        <Route path='/faq' element={<FAQPage />} />
        <Route path='/garment/register' element={<GarmentRegister />} />
        <Route path='/garment/adiniproducts' element={<GarmentAddIniProduct />} />
        <Route path='/garment/account' element={<GarmentAccount />} >
          <Route path='allproduct' element={<GarmentAllProduct/>}/>
          <Route path='account-details' element={ <GarmentAccountDetails/>}/>'
          <Route path='account-details/account-details-edit' element={<GarmetnAccountDetailsEdit/>}/>
          <Route path='payment-details' element={<GarmentAccountPaymentDetails/>}/>
          <Route path='change-password' element={<GarmentAccountChangePassword/>}></Route>
          <Route path='allproduct/add-new-product' element={<AddNewProduct/>}></Route>
          <Route path='view-report' element={<GarmentViewReport/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
