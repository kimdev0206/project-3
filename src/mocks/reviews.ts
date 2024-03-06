import { http, HttpResponse } from "msw";
import { fakerKO as faker } from "@faker-js/faker";
import { IReview } from "../models/book.model";

const data: IReview[] = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  userID: `${faker.person.lastName()}${faker.person.firstName()}`,
  review: faker.lorem.paragraph(),
  score: faker.helpers.rangeToNumber({ min: 1, max: 5 }),
  createdAt: faker.date.past().toISOString(),
}));

export const getReviews = http.get(
  process.env.REACT_APP_BASE_URL + "/reviews/:bookID",
  () => HttpResponse.json({ data }, { status: 200 })
);
