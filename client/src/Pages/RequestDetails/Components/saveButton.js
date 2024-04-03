import React from "react";
import { useParams } from "react-router-dom";
import { Button, notification } from "antd";
import axios from "axios";
import { getUserInfo } from "../../../Utils/Auth/authService";
import { API_BASE_URL } from "../../../config";

const SaveButton = ({ shippingFormData }) => {
  const userInfo = getUserInfo();
  const { order_id } = useParams();

  const handleSave = async () => {
    if (!userInfo || !userInfo.data.id) {
      notification.error({
        message: "Error",
        description: "User information is missing.",
      });
      return;
    }
  
    if (!shippingFormData) {
      notification.error({
        message: "Error",
        description: "Form data is missing or incomplete.",
      });
      return;
    }

    const addressData = {
      user_id: userInfo.data.id,
      address_type: "address_type",
      first_row: shippingFormData.shippingStreet,
      second_row: "second_row",
      city: shippingFormData.shippingCity,
      country: shippingFormData.shippingCountry,
      zip: shippingFormData.shippingZip,
      phone: "phone",
      email: userInfo.data.email,
    };

    const orderData = {
      name: userInfo.data.name,
      customer: userInfo.data.name,
      incoterm: "incoterm",
      paymentterm: "paymentterm",
      incoterm_description: shippingFormData.incoterm_description,
      quotation_note: "quotation_note2",
      delivery_date: shippingFormData.deliveryDate ? shippingFormData.deliveryDate.format("DD-MM-YYYY") : undefined,
      status: "status2",
      reference: "herhangiBirReferans" // Bu alanı eksiksiz ve string bir değerle doldurun

    };

    const productData = {
      order_id: parseInt(order_id), // useParams ile alınan order_id değerini sayıya çevir
      name: shippingFormData.productName,
      quantity: 0,
      hs_code: parseInt(shippingFormData.hsCode), // HS Code'u sayıya çevir
      purpose_of_use: shippingFormData.purposeOfUse,
    };

    try {
      await Promise.all([
        axios.post(`${API_BASE_URL}/address/create`, addressData, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` }
        }),
        axios.put(`${API_BASE_URL}/order/updateOrder/${order_id}`, orderData, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` }
        }),
        axios.post(`${API_BASE_URL}/order-product/create`, productData, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` }
        })
      ]);
      console.log(productData)
      notification.success({
        message: "Success",
        description: "Address and order updated successfully!",
      });
    } catch (error) {
      console.error("API request failed with error:", error);
      console.log(error.response.data); // Sunucunun döndürdüğü hata mesajını loglayın
      notification.error({
        message: "Error",
        description: `Failed to process. ${error.message}`,
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
