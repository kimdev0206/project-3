import { useEffect } from "react";
import styled from "styled-components";
import Button from "../common/Button";

const Style = styled.div``;

interface Props {
  onCompleted: (address: string) => void;
}

export default function AddressButton({ onCompleted }: Props) {
  const handleOpen = () => {
    new window.daum.Postcode({
      oncomplete: (data: any) => onCompleted(data.address as string),
    }).open();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Style>
      <Button size="medium" state="normal" type="button" onClick={handleOpen}>
        주소 찾기
      </Button>
    </Style>
  );
}
