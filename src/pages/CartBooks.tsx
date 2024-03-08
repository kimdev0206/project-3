import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Cart from "../components/cart";
import Common from "../components/common";
import { useAlert, useConfirm } from "../hooks/useAlert";
import useCartBooks from "../hooks/useCartBooks";
import { IOrder } from "../models/order.model";

export const Style = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap.large};
  justify-content: space-between;

  .items {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: ${({ theme }) => theme.gap.medium};

    .item {
      padding: ${({ theme }) => theme.input.medium.padding};
      border: ${({ theme }) => theme.border.default};
      border-radius: ${({ theme }) => theme.border.radius};
    }
  }
  .summary {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.gap.large};
  }

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
  }
`;

export default function CartBooksPage() {
  const navigate = useNavigate();
  const { cartBooks, isEmpty, handleDelete } = useCartBooks();
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

    confirm("주문하시겠습니까?", () => navigate("/order", { state: data }));
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
      <Common.Title size="large">장바구니</Common.Title>

      <Style>
        {isEmpty ? (
          <Common.Empty title="장바구니가 비었습니다." />
        ) : (
          <>
            <div className="items">
              {cartBooks.map((cartBook) => (
                <Cart.Item
                  cartBook={cartBook}
                  checkedIDs={checkedIDs}
                  onCheck={handleCheckID}
                  onDelete={() => handleDelete(cartBook.bookID)}
                  key={cartBook.bookID}
                />
              ))}
            </div>

            <div className="summary">
              <Cart.Summary totalCount={totalCount} totalPrice={totalPrice} />

              <Common.Button
                size="large"
                state="normal"
                type="button"
                onClick={handleOrder}
              >
                주문 하기
              </Common.Button>
            </div>
          </>
        )}
      </Style>
    </>
  );
}
