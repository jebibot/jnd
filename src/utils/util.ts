export function classNames(...classes: any[]) {
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
