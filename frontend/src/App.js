import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage, Signup, CustomerHomePage, ProductsPage, BestSellingPage, FAQPage, GarmentRegister, GarmentAddIniProduct, GarmentAccount } from './Routes.js';

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
        <Route path='/garment/account' element={<GarmentAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
