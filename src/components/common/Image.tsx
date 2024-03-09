import { useState } from "react";
import styled from "styled-components";
import Common from ".";
import { Size, getImgSize } from "../../styles/theme";

const Style = styled.div`
  aspect-ratio: 1 / 1;
  height: 100%;

  div {
    height: 100%;

    h1 {
      margin-bottom: 0;
    }
  }
`;

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  imgID: number;
  size: Size;
}

export default function Image({ imgID, size, ...props }: Props) {
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <Style>
      {isError ? (
        <Common.Empty title="이미지가 존재하지 않습니다." size={size} />
      ) : (
        <img
          src={`https://picsum.photos/id/${imgID}/${getImgSize(size)}`}
          onError={() => setIsError(true)}
          {...props}
        />
      )}
    </Style>
  );
}
