export default function Nick({
  nick,
  className,
}: {
  nick: string;
  className?: string;
}) {
  const parts = nick.split("#");
  return (
    <div className={className}>
      {parts[0]}
      <span className="text-gray-400 dark:text-gray-600">#{parts[1]}</span>
    </div>
  );
}
