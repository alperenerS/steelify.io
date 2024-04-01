import React from "react";
import { Button, notification } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../../config";

const SaveButton = ({ orderData }) => {
  const navigate = useNavigate();
  const { order_id } = useParams();

  const handleSave = async () => {
    if (!order_id) {
      notification.error({
        message: "Error",
        description: "Order ID is missing.",
      });
      return;
    }
  
    // 'accessToken' adıyla kaydedilen token'ı localStorage'dan al
    const accessToken = localStorage.getItem('accessToken');
  
    try {
      // `orderData` içinde güncellenmesi gereken sipariş bilgileri olmalıdır.
      const response = await axios.put(
        `${API_BASE_URL}/order/updateOrder/${order_id}`,
        orderData,
        {
          headers: {
            // Bearer token ile Authorization başlığını ekleyin
            'Authorization': `Bearer ${accessToken}`
          }
        }
      );
  
      if (response.status === 200) {
        notification.success({
          message: "Success",
          description: "Order updated successfully!",
        });
        navigate("/my-requests");
      } else {
        throw new Error("Order update failed");
      }
    } catch (error) {
      notification.error({
        message: "Error",
        description: `Order update failed. ${error.message}`,
      });
    }
  };
  

  return (
    <Button type="primary" onClick={handleSave}>
      Save
    </Button>
  );
};

export default SaveButton;
