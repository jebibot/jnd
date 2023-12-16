export function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

function padNumber(num: number, length: number) {
  return num.toString().padStart(length, "0");
}

export function formatTimestamp(t: number) {
  t = Math.floor(t);
  const h = Math.floor(t / 3600000);
  const m = Math.floor(t / 60000) % 60;
  const s = Math.floor(t / 1000) % 60;
  return h
    ? `${h}:${padNumber(m, 2)}:${padNumber(s, 2)}`
    : `${m}:${padNumber(s, 2)}`;
}

const numberFormatter = new Intl.NumberFormat("ko-KR", {
  maximumFractionDigits: 1,
});
export function formatNumber(n: number) {
  return numberFormatter.format(n);
}

const dateFormatter = new Intl.DateTimeFormat("ko-KR", {
  month: "long",
  day: "numeric",
  timeZone: "Asia/Seoul",
});
export function formatDate(d: Date) {
  return dateFormatter.format(d);
}

const timeFormatter = new Intl.DateTimeFormat("ko-KR", {
  hour: "numeric",
  minute: "numeric",
  timeZone: "Asia/Seoul",
});
export function formatTime(d: Date) {
  return timeFormatter.format(d);
}
