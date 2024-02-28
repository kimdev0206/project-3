import dayjs from "dayjs";

export function formatPrice(price: number) {
  return price.toLocaleString();
}

export function formatDate(date: string) {
  return dayjs(date).format("YYYY년 MM월 DD일");
}
