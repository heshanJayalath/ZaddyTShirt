import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginPage, Signup, CustomerHomePage } from './Routes.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CustomerHomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
