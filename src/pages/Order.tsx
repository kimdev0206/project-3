import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { isAxiosError } from "axios";
import { postOrder } from "../apis/orders.api";
import Summary from "../components/cart/Summary";
import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import Title from "../components/common/Title";
import AddressButton from "../components/order/AddressButton";
import { useAlert, useConfirm } from "../hooks/useAlert";
import { IDelivery, IOrder } from "../models/order.model";
import { Style } from "./CartBooks";

interface IDeliveryForm extends IDelivery {
  addressDetail: string;
}

export default function Order() {
  const location = useLocation();
  const navigate = useNavigate();
  const { mainBookTitle, totalCount, totalPrice }: IOrder = location.state;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IDeliveryForm>();
  const alert = useAlert();
  const confirm = useConfirm();

  const onClick = async (formData: IDeliveryForm) => {
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
        navigate("/");
      });
    } catch (error) {
      if (isAxiosError(error)) {
        alert(error.response?.data.message);
      }
    }
  };

  return (
    <>
      <Title size="large">주문서</Title>

      <Style>
        <div className="items">
          <div className="item">
            <Title size="medium">배송 정보</Title>

            <form>
              <fieldset>
                <label>주소</label>
                <InputText
                  size="medium"
                  {...register("address", { required: true })}
                />

                <AddressButton
                  onCompleted={(address) => setValue("address", address)}
                />
              </fieldset>
              {errors.address && <p>주소를 입력해주세요.</p>}

              <fieldset>
                <label>상세 주소</label>
                <InputText
                  size="medium"
                  {...register("addressDetail", { required: true })}
                />
              </fieldset>
              {errors.addressDetail && <p>상세 주소를 입력해주세요.</p>}

              <fieldset>
                <label>수령인</label>
                <InputText
                  size="medium"
                  {...register("receiver", { required: true })}
                />
              </fieldset>
              {errors.receiver && <p>수령인을 입력해주세요.</p>}

              <fieldset>
                <label>전화번호</label>
                <InputText
                  size="medium"
                  {...register("contact", { required: true })}
                />
              </fieldset>
              {errors.contact && <p>전화번호를 입력해주세요.</p>}
            </form>
          </div>

          <div className="item">
            <Title size="medium">주문 상품</Title>
            <strong>
              {mainBookTitle} 등 총 {totalCount}권
            </strong>
          </div>
        </div>

        <div className="summary">
          <Summary totalCount={totalCount} totalPrice={totalPrice} />

          <Button size="large" state="normal" onClick={handleSubmit(onClick)}>
            결제 하기
          </Button>
        </div>
      </Style>
    </>
  );
}
