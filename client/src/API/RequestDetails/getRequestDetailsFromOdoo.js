import axios from "axios";
import { ODOO_API_BASE_URL } from "../../config";

export const getOrderDetails = async (order_id) => {
  const url = `${ODOO_API_BASE_URL}/sale_order?order_id=${order_id}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch order details:", error);
    throw error;
  }
};
