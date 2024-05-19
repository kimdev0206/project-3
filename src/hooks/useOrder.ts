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
    const deliveryID = uuid();
    const params: IOrder = {
      ...location.state,
      delivery: {
        ...formData,
        address: `${formData.address} ${formData.addressDetail}`,
      },
    };

    confirm("주문을 진행하시겠습니까?", async () => {
      const maxRetreis = 3;

      for (let retry = 1; retry <= maxRetreis; retry += 1) {
        try {
          const response = await OrdersAPI.postOrder(deliveryID, params);
          alert(response.message);

          if (response.status === 201) break;
        } catch (error) {
          if (retry === maxRetreis) break;

          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }

      navigate("/orders");
    });
  };

  return { handleOrder };
}
