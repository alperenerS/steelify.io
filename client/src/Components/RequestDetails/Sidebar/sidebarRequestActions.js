import React from "react";
import { Button, notification } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { getUserInfo } from "../../../Utils/Auth/authService";
import { API_BASE_URL } from "../../../config";
import "./sidebarRequestActions.css";

const SidebarRequestActions = ({
  onDiscard,
  onPrintQuotation,
  onUploadPO,
  onPrintQuality,
  position,
  shippingFormData,
}) => {
  const userInfo = getUserInfo();
  const { order_id } = useParams();
  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.user.token);

  const handleSave = async () => {
    if (!userInfo || !userInfo.id) {
      notification.error({
        message: "Error",
        description: "User information is missing. Please log in again.",
      });
      return;
    }

    if (!shippingFormData || Object.keys(shippingFormData).length === 0) {
      notification.error({
        message: "Error",
        description: "Form data is missing or incomplete.",
      });
      return;
    }

    if (!accessToken) {
      notification.error({
        message: "Error",
        description: "Access token is missing. Please log in again.",
      });
      return;
    }

    const {
      shippingStreet,
      shippingStreet2,
      shippingCity,
      shippingCountry,
      shippingZip,
    } = shippingFormData;

    const addressData = {
      user_id: userInfo.id,
      address_type: "00",
      first_row: shippingStreet,
      second_row: shippingStreet2 || "",
      city: shippingCity,
      country: shippingCountry,
      zip: shippingZip,
      order_id: parseInt(order_id)
    };

    try {
      await axios.post(`${API_BASE_URL}/address/create`, addressData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      notification.success({
        message: "Success",
        description: "Address updated successfully!",
      });
      navigate("/my-requests");
    } catch (error) {
      console.error("API Error:", error.response.data); 
      notification.error({
        message: "Error",
        description: `Failed to process. ${error.response.data.message || error.message}`,
      });
    }
  };

  return (
    <div className={`request-actions ${position}`}>
      {position === "top" && (
        <div className="button-row sidebar-request-actions-top">
          <Button type="primary" onClick={handleSave} className="action-button">
            Save
          </Button>
          <Button type="default" onClick={onDiscard} className="action-button">
            Discard
          </Button>
        </div>
      )}
      {position === "bottom" && (
        <div className="button-container sidebar-request-actions-bottom">
          <Button type="default" onClick={onPrintQuotation} className="action-button">
            Print Quotation
          </Button>
          <Button type="default" onClick={onUploadPO} className="action-button">
            Upload P.O.
          </Button>
          <Button type="default" onClick={onPrintQuality} className="action-button">
            Print Quality Documents
          </Button>
        </div>
      )}
    </div>
  );
};

export default SidebarRequestActions;
