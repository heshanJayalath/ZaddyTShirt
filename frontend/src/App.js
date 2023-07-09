import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginPage, Signup, CustomerHomePage, ProductsPage, BestSellingPage, FAQPage } from './Routes.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CustomerHomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/products' element={<ProductsPage />}/>
        <Route path='/best-selling' element={<BestSellingPage/>} />
        <Route path='/faq' element={<FAQPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
