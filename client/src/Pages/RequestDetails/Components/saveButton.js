import React from "react";
import { Button, notification } from "antd";
import axios from "axios";
import { getUserInfo } from "../../../Utils/Auth/authService";

const SaveButton = ({ shippingFormData }) => {
  // API isteği için gerekli kullanıcı bilgilerini al
  const userInfo = getUserInfo();

  const handleSave = async () => {
    if (!userInfo || !userInfo.data.id) {
      notification.error({
        message: "Error",
        description: "User information is missing.",
      });
      return;
    }
  
    if (!shippingFormData || !shippingFormData.shippingStreet) {
      notification.error({
        message: "Error",
        description: "Shipping form data is missing or incomplete.",
      });
      return;
    }

    // `shippingFormData`'dan gelen verileri API'nin beklediği formata dönüştür
    const addressData = {
      user_id: userInfo.data.id, // authService'den alınan kullanıcı ID'si
      address_type: "address_type", // Sabit bir değer ya da formdan alınabilir
      first_row: shippingFormData.shippingStreet,
      second_row: "second_row", // Bu alan formda yoksa sabit bir değer kullanılabilir
      city: shippingFormData.shippingCity,
      country: shippingFormData.shippingCountry,
      zip: shippingFormData.shippingZip,
      phone: "phone",
      email: userInfo.data.email,
    };
    console.log("Sending request to API with data:", addressData);

    try {
      const response = await axios.post(
        `http://localhost:3001/api/address/create`, // API URL'i
        addressData,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // Token erişimi
          }
        }
      );

      if (response.data && response.data.data) {
        notification.success({
          message: "Success",
          description: "Address created successfully!",
        });
      } else {
        throw new Error("Address creation failed");
      }
    } catch (error) {
      notification.error({
        message: "Error",
        description: `Address creation failed. ${error.message}`,
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
