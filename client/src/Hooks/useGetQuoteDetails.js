import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { useSelector } from "react-redux";

const useGetQuoteDetails = (orderId) => {
  const [formData, setFormData] = useState({});
  const [fileList, setFileList] = useState([]);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const fetchQuoteDetails = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/order/${orderId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data && response.data.data) {
          setFormData({
            requestNumber: response.data.data.name,
            details: response.data.data.details,
          });
          setFileList(
            response.data.orderDocs.filename.map((name, index) => ({
              name,
              url: response.data.orderDocs.file_link[index],
            }))
          );
        }
      } catch (error) {
        console.error("Failed to fetch quote details:", error);
      }
    };

    fetchQuoteDetails();
  }, [orderId, token]);

  return { formData, fileList };
};

export default useGetQuoteDetails;
