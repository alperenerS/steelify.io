import axios from "axios";
import { API_BASE_URL } from "../config";

export const getAllRequests = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/admin/requests`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch all requests:", error);
    throw error;
  }
};
