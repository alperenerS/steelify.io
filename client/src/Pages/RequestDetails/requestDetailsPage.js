import React from "react";
import { useParams } from "react-router-dom";
import useFetchOrders from "../../Hooks/useFetchOrders";
import RequestDetails from "../../Components/RequestDetails/requestDetails";
import PageNotFound from "../PageNotFound/pageNotFound";

const RequestDetailsPage = () => {
  const { order_id } = useParams();
  const { orders, loading, error } = useFetchOrders();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const validOrderIds = Array.isArray(orders)
    ? orders.map((order) => order.id)
    : [];
  const isValidOrderId = validOrderIds.includes(Number(order_id));

  if (!isValidOrderId) {
    return <PageNotFound />;
  }

  return (
    <div>
      <RequestDetails orderId={order_id} />
    </div>
  );
};

export default RequestDetailsPage;
