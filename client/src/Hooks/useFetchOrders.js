import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config';

const useFetchOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/order`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Orders fetched:", response.data); // Debug log
        setOrders(response.data.data || []);  // Ensure orders is always an array
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate('/login'); // Redirect to login if unauthorized
        } else {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchOrders();
    } else {
      setLoading(false);
    }
  }, [token, navigate]);

  return { orders, loading, error };
};

export default useFetchOrders;
