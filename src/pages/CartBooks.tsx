import { useMemo, useState } from "react";
import styled from "styled-components";
import Item from "../components/cart/Item";
import Summary from "../components/cart/Summary";
import Button from "../components/common/Button";
import Empty from "../components/common/Empty";
import Title from "../components/common/Title";
import { useAlert, useConfirm } from "../hooks/useAlert";
import useCartBooks from "../hooks/useCartBooks";
import { IOrder } from "../models/order.model";

const Style = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;

  .items {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .summary {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export default function CartBooks() {
  const { cartBooks, isEmpty, deleteCartBook } = useCartBooks();
  const [checkedIDs, setCheckedIDs] = useState<number[]>([]);
  const alert = useAlert();
  const confirm = useConfirm();

  const handleCheckID = (id: number) => {
    if (checkedIDs.includes(id)) {
      setCheckedIDs(checkedIDs.filter((checkedID) => checkedID !== id));
    } else {
      setCheckedIDs([...checkedIDs, id]);
    }
  };

  const handleOrder = () => {
    if (!checkedIDs.length) {
      alert("주문할 도서를 선택해주세요.");
      return;
    }

    const mainBook = cartBooks.find(
      (cartBook) => cartBook.bookID === checkedIDs[0]
    );
    const books = cartBooks
      .filter((cartBook) => checkedIDs.includes(cartBook.bookID))
      .map((cartBook) => {
        return {
          bookID: cartBook.bookID,
          count: cartBook.count,
        };
      });

    const data: Omit<IOrder, "delivery"> = {
      mainBookTitle: mainBook!.title,
      books,
      totalCount,
      totalPrice,
    };

    confirm("주문하시겠습니까?", () => {});
  };

  const totalCount = useMemo(() => {
    return cartBooks.reduce((acc, cartBook) => {
      return checkedIDs.includes(cartBook.bookID) ? acc + cartBook.count : acc;
    }, 0);
  }, [cartBooks, checkedIDs]);

  const totalPrice = useMemo(() => {
    return cartBooks.reduce((acc, cartBook) => {
      return checkedIDs.includes(cartBook.bookID)
        ? acc + cartBook.count * cartBook.price
        : acc;
    }, 0);
  }, [cartBooks, checkedIDs]);

  return (
    <>
      <Title size="large">장바구니</Title>

      <Style>
        {isEmpty ? (
          <Empty title="장바구니가 비었습니다." />
        ) : (
          <>
            <div className="items">
              {cartBooks.map((cartBook) => (
                <Item
                  cartBook={cartBook}
                  checkedIDs={checkedIDs}
                  onCheck={handleCheckID}
                  onDelete={() => deleteCartBook(cartBook.bookID)}
                  key={cartBook.bookID}
                />
              ))}
            </div>

            <div className="summary">
              <Summary totalCount={totalCount} totalPrice={totalPrice} />

              <Button
                size="large"
                state="normal"
                type="button"
                onClick={handleOrder}
              >
                주문 하기
              </Button>
            </div>
          </>
        )}
      </Style>
    </>
  );
}
