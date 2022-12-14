import User from './User/User';
import Index from './Index/Index';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path='/posts/' element={<Index />} />
        <Route path='/user/' element={<User />} />
        <Route path='*' element={<Navigate to='/posts/?page=1' />} />
      </Routes>
    </Router>

  );
};

export default Pages;