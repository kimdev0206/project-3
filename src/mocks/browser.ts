import { setupWorker } from "msw/browser";
import { getReviews, postReview } from "./reviews";

const handlers = [getReviews, postReview];
const worker = setupWorker(...handlers);

export default worker;
