import { setupWorker } from "msw/browser";
import { getReviews } from "./reviews";

const handlers = [getReviews];
const worker = setupWorker(...handlers);

export default worker;
