import { useState } from "react";
import styled from "styled-components";
import { Size, getImgSize } from "../../styles/theme";

const Style = styled.div`
  display: flex;
  align-items: center;
  aspect-ratio: 1 / 1;

  @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
    img {
      width: 100%;
    }
  }
`;

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  imgID: number;
  size: Size;
  alt: string;
}

export default function Image({ imgID, size, alt }: Props) {
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <Style>
      <img
        src={`https://picsum.photos/id/${imgID}/${getImgSize(size)}`}
        onError={() => setIsError(true)}
        alt={isError ? "이미지가 존재하지 않습니다." : alt}
      />
    </Style>
  );
}
