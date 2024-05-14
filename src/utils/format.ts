import dayjs from "dayjs";

export function formatPrice(price: number) {
  return `${price.toLocaleString()} 원`;
}

export function formatDate(date: string, format?: string) {
  return dayjs(date).format(format ? format : "YYYY년 MM월 DD일");
}

export function formatCount(count: number) {
  return `${count} 권`;
}

export function formatDiscountRate(rate: number) {
  return `${rate * 100}%`;
}
