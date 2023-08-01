import React, { useEffect } from 'react'
import GarmentLogin from './GarmentLogin'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GarmentLoginPage = () => {
    const navigate = useNavigate();
    const { isGarment, garment } = useSelector((state) => state.garment);

    useEffect(() => {
        if (isGarment === true) {
            navigate(`/garment/${garment.id}`);
        }
    }, []);
    
    return (
        <div>
            <GarmentLogin />
        </div>
    )
}

export default GarmentLoginPage