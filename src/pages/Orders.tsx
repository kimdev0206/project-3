import { Link } from "react-router-dom";
import styled from "styled-components";
import Common from "../components/common";
import Order from "../components/order";
import useOrders from "../hooks/useOrders";

const Style = styled.div``;

export default function OrdersPage() {
  const { orders, selectedID, handleSelectID, isEmpty } = useOrders();

  return (
    <>
      <Common.Title size="large">주문 내역</Common.Title>

      <Style>
        {isEmpty ? (
          <Common.Empty
            title="주문 내역이 없습니다."
            description={<Link to="/cart-books">장바구니로 이동</Link>}
          />
        ) : (
          <Order.List
            orders={orders}
            selectedID={selectedID}
            onSelect={handleSelectID}
          />
        )}
      </Style>
    </>
  );
}
