import { useLocation, useNavigate } from "react-router-dom";
import { v1 as uuid } from "uuid";
import OrdersAPI from "../apis/orders.api";
import { useAlert, useConfirm } from "../hooks/useAlert";
import { IOrder } from "../models/order.model";
import { IDeliveryForm } from "../pages/Order";

export default function useOrder() {
  const location = useLocation();
  const navigate = useNavigate();
  const alert = useAlert();
  const confirm = useConfirm();

  const handleOrder = async (formData: IDeliveryForm) => {
    const orderID = uuid();
    const params: IOrder = {
      ...location.state,
      orderID,
      delivery: {
        ...formData,
        address: `${formData.address} ${formData.addressDetail}`,
      },
    };

    confirm("주문을 진행하시겠습니까?", async () => {
      const response = await OrdersAPI.postOrder(params);
      alert(response.message);

      if (response.status !== 201) return;

      navigate("/orders");
    });
  };

  return { handleOrder };
}
