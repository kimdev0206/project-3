import { useEffect, useState } from "react";
import Style from "./PromotionList.style";
import { IPromotion } from "../../models/promotion.model";
import Common from "../common";
import PromotionItem from "./PromotionItem";

interface Props {
  promotions: IPromotion[];
}

export default function PromotionList({ promotions }: Props) {
  const [index, setIndex] = useState(0);
  const [transform, setTransform] = useState(0);
  const interval = 5000;

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? promotions.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === promotions.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const sliderInterval = setInterval(handleNext, interval);

    return () => clearInterval(sliderInterval);
  }, [promotions.length, interval]);

  useEffect(() => setTransform(index * -100), [index]);

  return (
    <Style.Container>
      <Style.Slider transform={transform}>
        {promotions.map((promotion) => (
          <PromotionItem promotion={promotion} key={promotion.id} />
        ))}
      </Style.Slider>

      <Style.Buttons>
        <Common.Button size="small" $state="default" onClick={handlePrev}>
          이전
        </Common.Button>
        <Common.Button size="small" $state="default" onClick={handleNext}>
          다음
        </Common.Button>
      </Style.Buttons>
    </Style.Container>
  );
}
