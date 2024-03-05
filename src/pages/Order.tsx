import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Cart from "../components/cart";
import Common from "../components/common";
import Order from "../components/order";
import useOrder from "../hooks/useOrder";
import { IDelivery, IOrder } from "../models/order.model";
import { Style } from "./CartBooks";

export interface IDeliveryForm extends IDelivery {
  addressDetail: string;
}

export default function OrderPage() {
  const location = useLocation();
  const { mainBookTitle, totalCount, totalPrice }: IOrder = location.state;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IDeliveryForm>();
  const { handleOrder } = useOrder();

  return (
    <>
      <Common.Title size="large">주문서</Common.Title>

      <Style>
        <div className="items">
          <div className="item">
            <Common.Title size="medium">배송 정보</Common.Title>

            <form>
              <fieldset>
                <label>주소</label>
                <Common.InputText
                  size="medium"
                  {...register("address", { required: true })}
                />

                <Order.AddressButton
                  onCompleted={(address) => setValue("address", address)}
                />
              </fieldset>
              {errors.address && <p>주소를 입력해주세요.</p>}

              <fieldset>
                <label>상세 주소</label>
                <Common.InputText
                  size="medium"
                  {...register("addressDetail", { required: true })}
                />
              </fieldset>
              {errors.addressDetail && <p>상세 주소를 입력해주세요.</p>}

              <fieldset>
                <label>수령인</label>
                <Common.InputText
                  size="medium"
                  {...register("receiver", { required: true })}
                />
              </fieldset>
              {errors.receiver && <p>수령인을 입력해주세요.</p>}

              <fieldset>
                <label>전화번호</label>
                <Common.InputText
                  size="medium"
                  {...register("contact", { required: true })}
                />
              </fieldset>
              {errors.contact && <p>전화번호를 입력해주세요.</p>}
            </form>
          </div>

          <div className="item">
            <Common.Title size="medium">주문 상품</Common.Title>
            <strong>
              {mainBookTitle} 등 총 {totalCount}권
            </strong>
          </div>
        </div>

        <div className="summary">
          <Cart.Summary totalCount={totalCount} totalPrice={totalPrice} />

          <Common.Button
            size="large"
            state="normal"
            onClick={handleSubmit(handleOrder)}
          >
            주문 하기
          </Common.Button>
        </div>
      </Style>
    </>
  );
}
