import { useState, useCallback } from "react";
import { getOrderDetails } from "../API/RequestDetails/getRequestDetailsFromOdoo";

const useRequestDetails = (order_id) => {
  const [orderDetails, setOrderDetails] = useState({});

  const fetchOrderDetails = useCallback(async () => {
    try {
      const data = await getOrderDetails(order_id);
      setOrderDetails(data);
      console.log("data burda babba", data);
    } catch (error) {
      console.error("Failed to fetch order details:", error);
    }
  }, [order_id]);

  return { orderDetails, fetchOrderDetails };
};

export default useRequestDetails;
