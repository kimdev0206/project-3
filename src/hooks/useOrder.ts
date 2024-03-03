import { useLocation, useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";
import { postOrder } from "../apis/orders.api";
import { useAlert, useConfirm } from "../hooks/useAlert";
import { IOrder } from "../models/order.model";
import { IDeliveryForm } from "../pages/Order";

export default function useOrder() {
  const location = useLocation();
  const navigate = useNavigate();
  const alert = useAlert();
  const confirm = useConfirm();

  const handleOrder = async (formData: IDeliveryForm) => {
    const params: IOrder = {
      ...location.state,
      delivery: {
        ...formData,
        address: `${formData.address} ${formData.addressDetail}`,
      },
    };

    try {
      const { message } = await postOrder(params);

      confirm("주문을 진행하시겠습니까?", () => {
        alert(message);
        navigate("/orders");
      });
    } catch (error) {
      if (isAxiosError(error)) {
        alert(error.response?.data.message);
      }
    }
  };

  return { handleOrder };
}
