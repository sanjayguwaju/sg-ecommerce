import {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const ProtectedRoutes = (props) => {
    const {Component} = props;
    const navigate = useNavigate();

    useEffect(() => {
      const userLocalStorage = localStorage.getItem("persist:root");
      const userJson = JSON.parse(userLocalStorage)?.user;
      const isSuccess = JSON.parse(userJson)?.isSuccess;

      if (!isSuccess) {
        // Redirect to home page if isSuccess is true
        navigate('/login')
      }
    }, []);
  return (
    <div>
      <Component/>
    </div>
  )
}

export default ProtectedRoutes
