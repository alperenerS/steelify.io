import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, notification } from "antd";
import axios from "axios";
import { getUserInfo } from "../../Utils/Auth/authService";
import { API_BASE_URL } from "../../config";
import "./saveButton.css";

const SaveButton = ({ shippingFormData }) => {
  const userInfo = getUserInfo();
  const { order_id } = useParams();
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!userInfo || !userInfo.id) {
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
      user_id: userInfo.id,
      address_type: "address_type",
      first_row: shippingFormData.shippingStreet,
      second_row: "second_row",
      city: shippingFormData.shippingCity,
      country: shippingFormData.shippingCountry,
      zip: shippingFormData.shippingZip,
      phone: "phone",
      email: userInfo.email,
    };

    const orderData = {
      name: userInfo.name,
      customer: userInfo.name,
      incoterm: "00incoterm",
      paymentterm: "00paymentterm",
      incoterm_description: shippingFormData.incoterm_description,
      quotation_note: "00quotation_note",
      delivery_date: shippingFormData.deliveryDate
        ? shippingFormData.deliveryDate.format("DD-MM-YYYY")
        : undefined,
      status: "00status",
      reference: "00ref",
    };

    const productData = {
      order_id: parseInt(order_id),
      name: shippingFormData.productName,
      quantity: 0,
      hs_code: parseInt(shippingFormData.hsCode),
      purpose_of_use: shippingFormData.purposeOfUse,
    };

    try {
      await Promise.all([
        axios.post(`${API_BASE_URL}/address/create`, addressData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }),
        axios.put(`${API_BASE_URL}/order/updateOrder/${order_id}`, orderData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }),
        axios.post(`${API_BASE_URL}/order-product/create`, productData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }),
      ]);
      notification.success({
        message: "Success",
        description: "Address and order updated successfully!",
      });
      navigate("/my-requests");
    } catch (error) {
      notification.error({
        message: "Error",
        description: `Failed to process. ${error.message}`,
      });
    }
  };

  return (
    <Button type="primary" onClick={handleSave} className="save-button">
      Save
    </Button>
  );
};

export default SaveButton;
