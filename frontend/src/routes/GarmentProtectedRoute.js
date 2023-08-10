import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"
import Loader from '../components/Loader';

const SellerProtectedRoute = ({ children }) => {
    const { isLoading, isGarment } = useSelector((state) => state.garment);

    if(isLoading === true){
       return <Loader />
    }else{
        if (!isGarment) {
            return <Navigate to={`/login-garment`} replace />
        }
        return children;
    }
}

export default SellerProtectedRoute;