import React from 'react'
import FetchUser from '../utils/fetchUser'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const { user } = FetchUser()
    return user ? <Outlet /> : <Navigate to={'/login'} replace />
}

export default PrivateRoute