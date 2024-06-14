import axios from "axios";

export const getOrderDetails = async (order_id) => {
  const url = `https://portal-steelify-steelify-api-13611692.dev.odoo.com/api/sale_order?order_id=${order_id}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch order details:", error);
    throw error;
  }
};
