import { classNames } from "@/utils/util";

export default function ChzzkIcon({
  className,
  fill,
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      className={classNames("svg-inline--fa scale-125", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden={true}
    >
      <path
        fill={fill}
        d="M24.106 24.664v-4.782H16.92l7.911-10.915h-6.41l1.94-2.678h-6.41L8.653 13.6h6.41l-8.02 11.065h17.063Z"
      />
    </svg>
  );
}
