import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginPage, Signup, CustomerHomePage, Navbar } from './Routes.js';
import Register from './pages/Garment/Register.jsx';
import Add_ini_product from './pages/Garment/Add_ini_product.jsx';
import Account from './pages/Garment/Account.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CustomerHomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/garment/register' element={<Register/>} />
        <Route path='/garment/adiniproducts' element={<Add_ini_product/>}/>
        <Route path='/garment/account' element={<Account/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
