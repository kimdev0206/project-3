import { FaStar } from "react-icons/fa";
import { IReview } from "../../models/book.model";

export default function Star({ score }: Pick<IReview, "score">) {
  return (
    <span>
      {Array.from({ length: score }, (_, index) => (
        <FaStar key={index} />
      ))}
    </span>
  );
}
