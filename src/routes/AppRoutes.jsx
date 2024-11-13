import { Routes,Route  } from 'react-router-dom';
import HomeLayout from '../pages/layout/HomeLayout';
import Login from '../pages/auth/Login';
const AppRoutes = () => {
    return (
        <Routes>
           <Route path="/" element={<HomeLayout />} />
           <Route path="/user/login" element={<Login />} />
        </Routes>
    );
};

export default AppRoutes;