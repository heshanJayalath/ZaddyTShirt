import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  CustomerHomePage,
  CustomizeTShirt,
  ProductsPage,
  ProductsPage2,
  ProductDetailsPage,
  CheckoutPage,
  ThreeDmodel,
  BestSellingPage,
  FAQPage,
  ProfilePage,
  GarmentRegisterPage,
  GarmentLoginPage,
  SellerActivationPage,
  PaymentPage,
  CustomOrders,
  OrderSuccessPage,
  ModelThree,
  OrderDetailsPage,
  PricePredictor,
  TrackOrderPage,
  UserInbox,
  CustomOrderDetailsPage,
} from "./routes/Routes.js";

import {
  GarmentHomePage,
  GarmentDashboardPage,
  GarmentCreateProducts,
  GarmentUpdateProduct,
  GarmentAllProducts,
  // GarmentCreateEvents,
  // GarmentAllEvents,
  GarmentPreviewPage,
  GarmentAllOrders,
  GarmentOrderDetails,
  GarmentAllRefunds,
  GarmentInboxPage,
  GarmentCustomOrderPage,
  GarmentCustomOrderDetailsPage,
  GarmentMyCustomOrderPage,
  GarmentAllServiceChargesPage,
} from "./routes/GarmentRoutes.js";

import {
  AdminDashboardPage,
  AdminDashboardOrders,
  AdminDashboardProducts,
  AdminDashboardGarments,
  AdminDashboardUsers,
} from "./routes/AdminRoutes.js";

import {
  ManagerDashboardPage,
  ManagerDashboardOrder,
  ManagerDashboardProduct,
  ManagerDashboardCustomer,
  ManagerDashboardGarment,
  ManagerDashboardCustomOrder,
  ManagerCustomOrderDetails,
  ManagerDashboardServiceCharges,
  ManagerServiceCharge,
  ManagerDashboardCreateServiceCharges
} from "./routes/ManagerRoutes.js";

import {
  OwnerDashboardPage,
  OwnerAllOrdersPage,
  OwnerDashBoardProducts,
  OwnerDashBoardCustomers,
  OwnerDashboardGarments,
  OwnerDashBoardSystemUsers
} from "./routes/OwnerRoutesNew.js";

// import { OwnerPage } from "./routes/OwnerRoutes.js";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import axios from "axios";
import { server } from "./server.js";
import Store from "./redux/store.js";
import { loadGarment, loadUser } from "./redux/actions/user.js";
import { getAllProducts } from "./redux/actions/product.js";
import ProtectedRoute from "./routes/ProtectedRoute.js";
import GarmentProtectedRoute from "./routes/GarmentProtectedRoute.js";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute.js";
import ProtectedManagerRoute from "./routes/ProtectedManagerRoute.js";
import Layout from "./components/Owner/shared/Layout.jsx";
// import OwnerDashboard from "./pages/Owner/Dashboard.jsx";
import ManagerDashboard from "./pages/Manager/Dashboard.jsx";
import ProtectedOwnerRoute from "./routes/ProtectedOwnerRoute.js";

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
        <Route path='/products2' element={<ProductsPage2 />} />
        <Route path='/product/:id' element={<ProductDetailsPage />} />
        <Route path='/best-selling' element={<BestSellingPage />} />
        <Route path='/faq' element={<FAQPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />

        <Route path='/custom-orders' element={
          <ProtectedRoute>
            <CustomOrders />
          </ProtectedRoute>

        } />
        <Route path='/payment' element={
          <ProtectedRoute>
            <PaymentPage />
          </ProtectedRoute>
        } />
        <Route path='/order/success' element={<OrderSuccessPage />} />
        <Route path='/pricepredictor' element={<PricePredictor />}></Route>
        <Route path='/profile' element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        } />

        <Route
          path="/inbox"
          element={
            <ProtectedRoute>
              <UserInbox />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/order/:id"
          element={
            <ProtectedRoute>
              <OrderDetailsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/custom-order/:id"
          element={
            <ProtectedRoute>
              <CustomOrderDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/track/order/:id"
          element={
            <ProtectedRoute>
              <TrackOrderPage />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/cutomize-tshirt" element={<CustomizeTShirt />} /> */}
        {/* <Route path='/threed-model' element={<ThreeDmodel />} /> */}
        <Route path="/product/three-d-model/:id" element={<ModelThree />} />
        {/* garment Routes */}
        <Route
          path="/garment/activation/:activation_token"
          element={<SellerActivationPage />}
        />
        <Route path="/create-garment" element={<GarmentRegisterPage />} />
        <Route path="/login-garment" element={<GarmentLoginPage />} />
        <Route
          path="/garment/:id"
          element={
            <GarmentProtectedRoute>
              <GarmentHomePage />
            </GarmentProtectedRoute>
          }
        />
        <Route path="/garment/preview/:id" element={<GarmentPreviewPage />} />
        <Route
          path="/garment-dashboard"
          element={
            <GarmentProtectedRoute>
              <GarmentDashboardPage />
            </GarmentProtectedRoute>
          }
        />

        <Route
          path="/garment/custom-order/:id"
          element={
            <GarmentProtectedRoute>
              <GarmentCustomOrderDetailsPage />
            </GarmentProtectedRoute>
          }
        />
        <Route
          path="/garment-dashboard-orders"
          element={
            <GarmentProtectedRoute>
              <GarmentAllOrders />
            </GarmentProtectedRoute>
          }
        />
        <Route
          path="/garment-dashboard-custom-orders"
          element={
            <GarmentProtectedRoute>
              <GarmentCustomOrderPage />
            </GarmentProtectedRoute>
          }
        />
        <Route
          path="/garment-dashboard-my-custom-orders"
          element={
            <GarmentProtectedRoute>
              <GarmentMyCustomOrderPage />
            </GarmentProtectedRoute>
          }
        />
        <Route
          path="/garment-dashboard-create-product"
          element={
            <GarmentProtectedRoute>
              <GarmentCreateProducts />
            </GarmentProtectedRoute>
          }
        />
        <Route
          path="/garment-dashboard-update-product/:id"
          element={
            <GarmentProtectedRoute>
              <GarmentUpdateProduct />
            </GarmentProtectedRoute>
          }
        />
        <Route
          path="/garment-dashboard-products"
          element={
            <GarmentProtectedRoute>
              <GarmentAllProducts />
            </GarmentProtectedRoute>
          }
        />
        <Route
          path="/order/:id"
          element={
            <GarmentProtectedRoute>
              <GarmentOrderDetails />
            </GarmentProtectedRoute>
          }
        />
        <Route
          path="/garment-dashboard-refunds"
          element={
            <GarmentProtectedRoute>
              <GarmentAllRefunds />
            </GarmentProtectedRoute>
          }
        />
        <Route
          path="/garment-dashboard-messages"
          element={
            <GarmentProtectedRoute>
              <GarmentInboxPage />
            </GarmentProtectedRoute>
          }
        />

        <Route
          path="/garment-all-service-charges"
          element={
            <GarmentProtectedRoute>
              <GarmentAllServiceChargesPage />
            </GarmentProtectedRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardPage />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-orders"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardOrders />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-products"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardProducts />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-garments"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardGarments />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-users"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardUsers />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/manager/dashboard"
          element={
            <ProtectedManagerRoute>
              <ManagerDashboardPage />
            </ProtectedManagerRoute>
          }
        />
        <Route
          path="/manager-orders"
          element={
            <ProtectedManagerRoute>
              <ManagerDashboardOrder />
            </ProtectedManagerRoute>
          }
        />
        <Route
          path="/manager-products"
          element={
            <ProtectedManagerRoute>
              <ManagerDashboardProduct />
            </ProtectedManagerRoute>
          }
        />
        <Route
          path="/manager-users"
          element={
            <ProtectedManagerRoute>
              <ManagerDashboardCustomer />
            </ProtectedManagerRoute>
          }
        />
        <Route
          path="/manager-garments"
          element={
            <ProtectedManagerRoute>
              <ManagerDashboardGarment />
            </ProtectedManagerRoute>
          }
        />
        <Route
          path="/manager-custom-order"
          element={
            <ProtectedManagerRoute>
              <ManagerDashboardCustomOrder />
            </ProtectedManagerRoute>
          }
        />
        <Route
          path="/manager-service-charges"
          element={
            <ProtectedManagerRoute>
              <ManagerDashboardServiceCharges />
            </ProtectedManagerRoute>
          }
        />
        <Route
          path="/manager-create-charges"
          element={
            <ProtectedManagerRoute>
              <ManagerDashboardCreateServiceCharges />
            </ProtectedManagerRoute>
          }
        />
        
        <Route
          path="/customorder/:id"
          element={
            <ProtectedManagerRoute>
              <ManagerCustomOrderDetails />
            </ProtectedManagerRoute>
          }
        />
        <Route
          path="manager/service-charge/:id"
          element={
            <ProtectedManagerRoute>
              <ManagerServiceCharge />
            </ProtectedManagerRoute>
          }
        />
        <Route
          path="/owner/dashboard"
          element={
            <ProtectedOwnerRoute>
              <OwnerDashboardPage />
            </ProtectedOwnerRoute>
          }
        />
        <Route
          path="/owner-orders"
          element={
            <ProtectedOwnerRoute>
              <OwnerAllOrdersPage />
            </ProtectedOwnerRoute>
          }
        />
        <Route
          path="/owner-users"
          element={
            <ProtectedOwnerRoute>
              <OwnerDashBoardCustomers />
            </ProtectedOwnerRoute>
          }
        />
        <Route
          path="/owner-systemusers"
          element={
            <ProtectedOwnerRoute>
              <OwnerDashBoardSystemUsers />
            </ProtectedOwnerRoute>
          }
        />

        <Route
          path="/owner-garments"
          element={
            <ProtectedOwnerRoute>
              <OwnerDashboardGarments />
            </ProtectedOwnerRoute>
          }
        />


        <Route
          path="/owner-products"
          element={
            <ProtectedOwnerRoute>
              <OwnerDashBoardProducts />
            </ProtectedOwnerRoute>
          }
        />
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
  );
};

export default App;
