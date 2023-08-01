import { Navigate } from "react-router-dom"


const SellerProtectedRoute = ({ isGarment, children }) => {
    if (!isGarment) {
        return <Navigate to={`/`} replace />
    }
    return children
}

export default SellerProtectedRoute;