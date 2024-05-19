import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border: ${({ theme }) => theme.border.default};
  border-collapse: collapse;
  text-align: center;
  tr {
    border-bottom: 1px solid #eee;
  }
  tr:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.color.primary};
  }
  th,
  td {
    padding: ${({ theme }) => theme.input.medium.padding};
  }

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    text-align: left;

    th,
    td {
      display: block;
    }
    th {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    td {
      position: relative;
      padding-left: 50%;
      border-bottom: 1px solid #eee;
    }

    td:before {
      position: absolute;
      left: 6px;
      font-weight: bold;
    }
    td:nth-of-type(1):before {
      content: "일련번호";
    }
    td:nth-of-type(2):before {
      content: "주문일자";
    }
    td:nth-of-type(3):before {
      content: "주소";
    }
    td:nth-of-type(4):before {
      content: "수령인";
    }
    td:nth-of-type(5):before {
      content: "전화번호";
    }
    td:nth-of-type(6):before {
      content: "대표 도서명";
    }
    td:nth-of-type(7):before {
      content: "총 수량";
    }
    td:nth-of-type(8):before {
      content: "총 금액";
    }
  }
`;

const Buttons = styled.td`
  &:nth-of-type(9) {
    display: flex;
    gap: ${({ theme }) => theme.gap.small};
  }
`;

const Detail = styled.tr`
  & * {
    color: ${({ theme }) => theme.color.background};
    background-color: ${({ theme }) => theme.color.primary};
  }

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    td:before {
      content: "";
    }
    td:nth-of-type(1):before {
      content: "도서ID";
    }
    td:nth-of-type(2):before {
      content: "";
    }
    td:nth-of-type(3):before {
      content: "도서명";
    }
    td:nth-of-type(4):before {
      content: "수량";
    }
    td:nth-of-type(5):before {
      content: "금액";
    }
    td:nth-of-type(6):before {
      content: "";
    }
  }
`;

export default {
  Table,
  Buttons,
  Detail,
};
