
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// This is a redirect component to send users to the home page
const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/');
  }, [navigate]);
  
  return null;
};

export default Index;
