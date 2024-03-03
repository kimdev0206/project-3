import { Link } from "react-router-dom";
import styled from "styled-components";
import Empty from "../components/common/Empty";
import Title from "../components/common/Title";
import List from "../components/order/List";
import useOrders from "../hooks/useOrders";

const Style = styled.div``;

export default function Orders() {
  const { orders, selectedID, handleSelectID, isEmpty } = useOrders();

  return (
    <>
      <Title size="large">주문 내역</Title>

      <Style>
        {isEmpty ? (
          <Empty
            title="주문 내역이 없습니다."
            description={<Link to="/cart-books">장바구니로 이동</Link>}
          />
        ) : (
          <List
            orders={orders}
            selectedID={selectedID}
            onSelect={handleSelectID}
          />
        )}
      </Style>
    </>
  );
}
