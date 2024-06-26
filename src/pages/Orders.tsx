import { Link } from "react-router-dom";
import Common from "../components/common";
import Order from "../components/order";
import useOrders from "../hooks/useOrders";

export default function OrdersPage() {
  const {
    orders,
    setOrders,
    selectedID,
    handleSelectID,
    handleDeleteID,
    isEmpty,
  } = useOrders();

  return (
    <>
      <Common.Title size="large">주문 내역</Common.Title>

      {isEmpty ? (
        <Common.Empty
          description={<Link to="/cart-books">장바구니로 이동</Link>}
        >
          주문 내역이 없습니다.
        </Common.Empty>
      ) : (
        <Order.List
          orders={orders}
          setOrders={setOrders}
          selectedID={selectedID}
          onSelect={handleSelectID}
          onDelete={handleDeleteID}
        />
      )}      
    </>
  );
}
