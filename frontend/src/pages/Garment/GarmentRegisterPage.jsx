import React, { useEffect } from 'react'
import Register from './Register'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GarmentRegisterPage = () => {
    const navigate = useNavigate();
    const { isGarment, garment } = useSelector((state) => state.garment);

    useEffect(() => {
        if (isGarment === true) {
            navigate(`/garment/${garment._id}`);
        }
    }, []);
    return (
        <div>
            <Register />
        </div>
    )
}

export default GarmentRegisterPage